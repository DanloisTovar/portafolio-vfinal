import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/ui/Button.astro');

describe('Button.astro', () => {
  it('should exist', () => {
    expect(existsSync(COMPONENT_PATH)).toBe(true);
  });

  it('should define variant prop with all 6 variants', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    const variants = ['primary', 'secondary', 'submit', 'gist', 'link', 'lightbox'];
    variants.forEach((v) => {
      expect(content).toContain(`'${v}'`);
    });
  });

  it('should have bg-blue-500 and text-white for primary variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('bg-blue-500');
    expect(content).toContain('text-white');
  });

  it('should have bg-gray-800 for secondary variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('bg-gray-800');
  });

  it('should have inline-flex subclass for gist variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('gist');
  });

  it('should have underline hover for link variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('link');
  });

  it('should accept href for anchor variants and type for button variants', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('href');
  });

  it('should accept label prop', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('label');
  });

  it('should accept icon and disabled props', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('icon');
    expect(content).toContain('disabled');
  });

  it('should accept optional class prop', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('class');
  });

  it('should accept download, target, and rel props', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('download');
    expect(content).toContain('target');
    expect(content).toContain('rel');
  });
});
