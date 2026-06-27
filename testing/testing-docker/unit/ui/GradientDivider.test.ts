import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/ui/GradientDivider.astro');

describe('GradientDivider.astro', () => {
  it('should exist', () => {
    expect(existsSync(COMPONENT_PATH)).toBe(true);
  });

  it('should define variant prop with solid-blue and blue-cyan', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("'solid-blue'");
    expect(content).toContain("'blue-cyan'");
  });

  it('should have solid-blue variant with bg-blue-600', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('bg-blue-600');
  });

  it('should have blue-cyan variant with from-blue-600 to-cyan-500', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('from-blue-600');
    expect(content).toContain('to-cyan-500');
  });

  it('should have w-24 h-1 for both variants', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('w-24 h-1');
  });

  it('should have rounded-full for both variants', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('rounded-full');
  });

  it('should accept optional class prop', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('class');
  });
});
