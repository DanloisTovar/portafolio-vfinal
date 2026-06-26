import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/ui/SectionHeader.astro');

describe('SectionHeader.astro', () => {
  it('should exist', () => {
    expect(existsSync(COMPONENT_PATH)).toBe(true);
  });

  it('should define a variant prop with three variants', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("'gradient-accent'");
    expect(content).toContain("'gradient-cyan'");
    expect(content).toContain("'skills-subsection'");
  });

  it('should use bg-linear-to-r from-blue-600 for gradient-accent variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('from-blue-600');
  });

  it('should use bg-linear-to-r from-blue-600 to-cyan-500 for gradient-cyan variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('from-blue-600 to-cyan-500');
  });

  it('should accept optional subtitle prop', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('subtitle');
  });

  it('should accept optional titleTag prop', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('titleTag');
  });

  it('should accept optional marginBottom prop', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('marginBottom');
  });

  it('should render h2 by default and h3 for skills-subsection', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('gradient-accent');
    expect(content).toContain('skills-subsection');
  });

  it('should include a spacer div for skills-subsection variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('bg-transparent');
  });

  it('should render a blue divider for gradient-accent variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('bg-blue-600');
  });

  it('should render a gradient divider (blue-to-cyan) for gradient-cyan variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('from-blue-600 to-cyan-500');
  });

  it('should accept optional titleHtml prop', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('titleHtml');
  });

  it('should use titleHtml when provided instead of accentText', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('if (titleHtml)');
  });
});
