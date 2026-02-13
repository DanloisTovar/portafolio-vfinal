import { describe, it, expect } from 'vitest';
import {
  SOCIAL_LINKS,
  NAV_LINKS,
  PROJECT_LINKS,
  SHARE_TEMPLATES,
} from '../../../src/constants/links';

describe('Portfolio Links and Constants', () => {
  describe('SOCIAL_LINKS', () => {
    it('debe contener enlaces sociales válidos', () => {
      expect(SOCIAL_LINKS.linkedin).toContain('linkedin.com');
      expect(SOCIAL_LINKS.github).toContain('github.com');
      expect(SOCIAL_LINKS.whatsapp).toContain('wa.me');
      expect(SOCIAL_LINKS.email).toContain('mailto:');
    });
  });

  describe('NAV_LINKS', () => {
    it('debe tener el mismo número de enlaces para ES y EN', () => {
      expect(NAV_LINKS.es.length).toBe(NAV_LINKS.en.length);
      expect(NAV_LINKS.es.length).toBeGreaterThan(0);
    });

    it('los enlaces de navegación deben ser coherentes (mismo href)', () => {
      NAV_LINKS.es.forEach((link, index) => {
        expect(link.href).toBe(NAV_LINKS.en[index].href);
        expect(link.href).toMatch(/^#/); // Deben ser anclas
      });
    });

    it('debe incluir los enlaces críticos del menú', () => {
      const hrefs = NAV_LINKS.es.map((l) => l.href);
      expect(hrefs).toContain('#home');
      expect(hrefs).toContain('#projects');
      expect(hrefs).toContain('#contact');
    });
  });

  describe('PROJECT_LINKS', () => {
    it('debe tener enlaces de proyecto válidos', () => {
      PROJECT_LINKS.forEach((project) => {
        expect(project.url).toMatch(/^https?:\/\//);
        if (project.repo) {
          expect(project.repo).toContain('github.com');
        }
      });
    });
  });

  describe('SHARE_TEMPLATES', () => {
    const testUrl = 'https://danloistovar.vercel.app';
    const testText = 'Hello World';

    it('debe generar un link de WhatsApp correcto', () => {
      const waLink = SHARE_TEMPLATES.whatsapp(testUrl, testText);
      expect(waLink).toContain('wa.me');
      expect(waLink).toContain(encodeURIComponent(testUrl));
      expect(waLink).toContain(encodeURIComponent(testText));
    });

    it('debe generar un link de Twitter correcto', () => {
      const twLink = SHARE_TEMPLATES.twitter(testUrl, testText);
      expect(twLink).toContain('twitter.com');
      expect(twLink).toContain(encodeURIComponent(testUrl));
    });

    it('debe generar un link de LinkedIn correcto', () => {
      const liLink = SHARE_TEMPLATES.linkedin(testUrl);
      expect(liLink).toContain('linkedin.com');
      expect(liLink).toContain(encodeURIComponent(testUrl));
    });
  });
});
