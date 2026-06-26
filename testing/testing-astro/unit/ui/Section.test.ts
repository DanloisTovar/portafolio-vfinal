import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/ui/Section.astro');

describe('Section.astro', () => {
  it('should exist', () => {
    expect(existsSync(COMPONENT_PATH)).toBe(true);
  });

  it('should accept id prop', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('id');
  });

  it('should have section-glow class', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('section-glow');
  });

  it('should have a slot for children content', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('<slot');
  });

  it('should include section-cursor-glow div', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('section-cursor-glow');
  });

  it('should accept class prop', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('class');
  });

  it('should have gradient background layer option', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('from-blue-50/50');
  });

  it('should use max-w-7xl for the inner container', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('max-w-7xl');
  });
});
