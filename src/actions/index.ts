import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import nodemailer from "nodemailer";

// Simple in-memory rate limiting (Note: This resets on server restart/deployment)
// For a production-ready solution, consider using Redis or a database.
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_ATTEMPTS = 5;

function checkRateLimit(ip: string) {
  const now = Date.now();
  const userData = rateLimitMap.get(ip) || { count: 0, lastReset: now };

  if (now - userData.lastReset > RATE_LIMIT_WINDOW) {
    userData.count = 0;
    userData.lastReset = now;
  }

  userData.count++;
  rateLimitMap.set(ip, userData);

  return userData.count <= MAX_ATTEMPTS;
}

// Sanitization helper
function sanitize(str: string) {
  return str
    .replace(/[&<>"']/g, (m) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[m] || m)
    .trim();
}

export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string({ required_error: "Name is required" })
        .trim()
        .min(2, { message: "Name must be at least 2 characters" })
        .max(100, { message: "Name must be under 100 characters" }),
      email: z.string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" }),
      subject: z.string({ required_error: "Subject is required" })
        .trim()
        .min(2, { message: "Subject must be at least 2 characters" })
        .max(150, { message: "Subject must be under 150 characters" }),
      message: z.string({ required_error: "Message is required" })
        .trim()
        .min(10, { message: "Message must be at least 10 characters long" })
        .max(2000, { message: "Message must be under 2000 characters" }),
      honeypot: z.string().optional(), // Bot trap
    }),
    handler: async (input, context) => {
      // 1. Honeypot check
      if (input.honeypot) {
        console.log("Bot detected via honeypot");
        return { success: true }; // Silent fail for bots
      }

      // 2. Rate Limiting
      const ip = context.clientAddress || "unknown";
      if (!checkRateLimit(ip)) {
        throw new ActionError({
          code: "TOO_MANY_REQUESTS",
          message: "Too many attempts. Please try again later.",
        });
      }

      // 3. Sanitization
      const safeName = sanitize(input.name);
      const safeSubject = sanitize(input.subject);
      const safeMessage = sanitize(input.message);
      const safeEmail = input.email.toLowerCase().trim();

      // 4. Email Transport Configuration
      const GMAIL_USER = import.meta.env.GMAIL_USER;
      const GMAIL_PASS = import.meta.env.GMAIL_PASS;

      if (!GMAIL_USER || !GMAIL_PASS) {
        console.error("Missing GMAIL_USER or GMAIL_PASS in environment variables");
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Email service is not configured correctly.",
        });
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: GMAIL_USER,
          pass: GMAIL_PASS,
        },
      });

      try {
        await transporter.sendMail({
          from: `"${safeName}" <${GMAIL_USER}>`,
          to: GMAIL_USER, // Send to yourself
          replyTo: safeEmail,
          subject: `Portfolio Contact: ${safeSubject}`,
          text: `Message from: ${safeName} (${safeEmail})\n\nSubject: ${safeSubject}\n\nMessage:\n${safeMessage}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333;">
              <h2 style="color: #2563eb;">New Portfolio Message</h2>
              <p><strong>From:</strong> ${safeName} (${safeEmail})</p>
              <p><strong>Subject:</strong> ${safeSubject}</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="white-space: pre-wrap;">${safeMessage}</p>
            </div>
          `,
        });

        return { success: true };
      } catch (error) {
        console.error("Email sending error:", error);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to send email. Please try again later.",
        });
      }
    },
  }),
};
