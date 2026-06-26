import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();

describe('Icon Components', () => {
  describe('Icon.astro', () => {
    const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/icons/Icon.astro');

    it('should exist', () => {
      expect(existsSync(COMPONENT_PATH)).toBe(true);
    });

    it('should define name prop with icon mapping', () => {
      const content = readFileSync(COMPONENT_PATH, 'utf-8');
      expect(content).toContain('name');
      expect(content).toContain('iconMap');
    });

    it('should map common icon names to lucide components', () => {
      const content = readFileSync(COMPONENT_PATH, 'utf-8');
      const icons = ['eye', 'download', 'github', 'linkedin', 'mail', 'user', 'code'];
      icons.forEach((icon) => {
        expect(content).toContain(icon);
      });
    });

    it('should accept size and class props', () => {
      const content = readFileSync(COMPONENT_PATH, 'utf-8');
      expect(content).toContain('size');
      expect(content).toContain('class');
    });
  });

  describe('WhatsAppIcon.astro', () => {
    const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/icons/WhatsAppIcon.astro');

    it('should exist', () => {
      expect(existsSync(COMPONENT_PATH)).toBe(true);
    });

    it('should contain WhatsApp SVG path', () => {
      const content = readFileSync(COMPONENT_PATH, 'utf-8');
      expect(content).toContain('17.472');
    });

    it('should accept size and class props', () => {
      const content = readFileSync(COMPONENT_PATH, 'utf-8');
      expect(content).toContain('size');
    });
  });

  describe('TwitterIcon.astro', () => {
    const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/icons/TwitterIcon.astro');

    it('should exist', () => {
      expect(existsSync(COMPONENT_PATH)).toBe(true);
    });

    it('should contain Twitter SVG path', () => {
      const content = readFileSync(COMPONENT_PATH, 'utf-8');
      expect(content).toContain('23.953');
    });

    it('should accept size and class props', () => {
      const content = readFileSync(COMPONENT_PATH, 'utf-8');
      expect(content).toContain('size');
    });
  });

  describe('GitHubIcon.astro', () => {
    const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/icons/GitHubIcon.astro');

    it('should exist', () => {
      expect(existsSync(COMPONENT_PATH)).toBe(true);
    });

    it('should contain branded GitHub SVG path', () => {
      const content = readFileSync(COMPONENT_PATH, 'utf-8');
      expect(content).toContain('M12 0c-6.626');
    });
  });
});
