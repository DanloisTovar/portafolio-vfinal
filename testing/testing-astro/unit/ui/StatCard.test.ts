import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/ui/StatCard.astro');

describe('StatCard.astro', () => {
  it('should exist', () => {
    expect(existsSync(COMPONENT_PATH)).toBe(true);
  });

  it('should define required props', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    const props = ['target', 'initial', 'label', 'decimals', 'suffix'];
    props.forEach((p) => {
      expect(content).toContain(p);
    });
  });

  it('should expose count-up data attributes', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    const attrs = ['data-counter', 'data-target', 'data-decimals', 'data-suffix'];
    attrs.forEach((attr) => {
      expect(content).toContain(attr);
    });
  });

  it('should use solid blue text color matching the section headings', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('text-blue-600');
    expect(content).toContain('dark:text-blue-400');
  });

  it('should render a rounded blur glow', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('rounded-full');
    expect(content).toContain('blur-2xl');
  });

  it('should accept optional class prop', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('class');
  });
});
