import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/ui/CiBadge.astro');

describe('CiBadge.astro', () => {
  it('should exist', () => {
    expect(existsSync(COMPONENT_PATH)).toBe(true);
  });

  it('should accept label and optional class props', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('label');
    expect(content).toContain('class');
  });

  it('should expose a status role for accessibility', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('role="status"');
    expect(content).toContain('aria-label');
  });

  it('should render an animated pulse dot', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('animate-ping');
    expect(content).toContain('bg-green-500');
  });

  it('should support an optional href prop', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('href?: string');
  });
});
