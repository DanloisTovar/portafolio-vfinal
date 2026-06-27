import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/Contact.astro');

describe('Contact.astro', () => {
  it('should exist', () => {
    expect(existsSync(COMPONENT_PATH)).toBe(true);
  });

  it('should import SectionHeader', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import SectionHeader from './ui/SectionHeader.astro'");
  });

  it('should import GlassCard', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import GlassCard from './ui/GlassCard.astro'");
  });

  it('should import StarBorder', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import StarBorder from './Animations/StarBorder/StarBorder'");
  });

  it('should have section-glow class', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('class="section-glow');
  });

  it('should have id="contact"', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('id="contact"');
  });

  it('should have a contact form with id contact-form', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('id="contact-form"');
  });

  it('should have form fields for name, email, subject, message', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('id="name"');
    expect(content).toContain('id="email"');
    expect(content).toContain('id="subject"');
    expect(content).toContain('id="message"');
  });

  it('should have error message elements per field', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('error-name');
    expect(content).toContain('error-email');
    expect(content).toContain('error-subject');
    expect(content).toContain('error-message');
  });

  it('should have form status display', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('form-status');
    expect(content).toContain('status-icon');
    expect(content).toContain('status-message');
  });

  it('should use GlassCard with contact-form variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('variant="contact-form"');
  });

  it('should import Astro actions for form handling', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import { actions } from 'astro:actions'");
  });

  it('should have submit button with loading state', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('submit-button');
    expect(content).toContain('button-text');
  });

  it('should use i18n translations', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import { useTranslations } from '../i18n/utils'");
  });
});
