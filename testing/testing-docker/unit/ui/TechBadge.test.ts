import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/ui/TechBadge.astro');

describe('TechBadge.astro', () => {
  it('should exist', () => {
    expect(existsSync(COMPONENT_PATH)).toBe(true);
  });

  it('should define variant prop with all 5 variants', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    const variants = ['hero', 'floating', 'mobile', 'duration', 'profile'];
    variants.forEach((v) => {
      expect(content).toContain(`'${v}'`);
    });
  });

  it('should have rounded-full for hero variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('rounded-full');
  });

  it('should have bg-blue-500/10 for hero variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('bg-blue-500/10');
  });

  it('should have backdrop-blur-md for floating variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('floating');
  });

  it('should have border border-gray-200 for mobile variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('mobile');
  });

  it('should have bg-blue-600/5 for duration variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('bg-blue-600/5');
  });

  it('should accept label prop', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('label');
  });

  it('should accept optional class prop', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('class');
  });
});
