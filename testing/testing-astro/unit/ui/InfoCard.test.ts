import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/ui/InfoCard.astro');

describe('InfoCard.astro', () => {
  it('should exist', () => {
    expect(existsSync(COMPONENT_PATH)).toBe(true);
  });

  it('should define required props', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    const props = ['title', 'description', 'class'];
    props.forEach((p) => {
      expect(content).toContain(p);
    });
  });

  it('should render a slot for the icon', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('<slot');
  });

  it('should compose GlassCard with the glass-card-full variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('GlassCard');
    expect(content).toContain('variant="glass-card-full"');
  });

  it('should compose IconBox for the icon', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('IconBox');
  });

  it('should preserve the bento typography classes', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('text-xl font-bold');
    expect(content).toContain('text-justify');
  });

  it('should preserve the full-height layout classes', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('h-full');
  });
});
