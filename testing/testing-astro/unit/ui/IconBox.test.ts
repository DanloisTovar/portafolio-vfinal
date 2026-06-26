import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/ui/IconBox.astro');

describe('IconBox.astro', () => {
  it('should exist', () => {
    expect(existsSync(COMPONENT_PATH)).toBe(true);
  });

  it('should define size prop with all size variants', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    const sizes = ['lg', 'md', 'sm', 'xl', 'xl-dynamic', 'exp', 'footer'];
    sizes.forEach((s) => {
      expect(content).toContain(`'${s}'`);
    });
  });

  it('should define color prop with gradient, light, and dark', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("'gradient'");
    expect(content).toContain("'light'");
    expect(content).toContain("'dark'");
  });

  it('should have w-12 h-12 rounded-2xl for lg size', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('w-12 h-12');
    expect(content).toContain('rounded-2xl');
  });

  it('should have w-8 h-8 rounded-xl for sm size', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('w-8 h-8');
    expect(content).toContain('rounded-xl');
  });

  it('should have from-blue-500 to-blue-600 for gradient color', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('from-blue-500');
    expect(content).toContain('to-blue-600');
  });

  it('should have bg-blue-100 dark:bg-blue-900/30 for light color', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('bg-blue-100');
    expect(content).toContain('bg-blue-900/30');
  });

  it('should have bg-gray-100 dark:bg-gray-800 for dark color', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('bg-gray-100');
    expect(content).toContain('bg-gray-800');
  });

  it('should have a slot for icon SVG', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('<slot');
  });

  it('should accept optional class prop', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('class');
  });
});
