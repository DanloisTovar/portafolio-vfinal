import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/Footer.astro');

describe('Footer.astro', () => {
  it('should exist', () => {
    expect(existsSync(COMPONENT_PATH)).toBe(true);
  });

  it('should have copyright with year and author', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('&copy;');
    expect(content).toContain('Danlois Tovar');
    expect(content).toContain('t.rights');
  });

  it('should have social media icons with neon effect', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('neon-social');
    expect(content).toContain('neon-link');
  });

  it('should have gradient hr divider with blue-to-cyan', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('from-blue-600 to-cyan-500');
  });

  it('should have inline translations for ES and EN', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('Enlaces Rápidos');
    expect(content).toContain('Quick Links');
    expect(content).toContain('Redes Sociales');
  });
});
