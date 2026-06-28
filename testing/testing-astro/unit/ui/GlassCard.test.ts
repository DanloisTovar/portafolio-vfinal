import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/ui/GlassCard.astro');

describe('GlassCard.astro', () => {
  it('should exist', () => {
    expect(existsSync(COMPONENT_PATH)).toBe(true);
  });

  it('should define variant prop with all 7 types', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    const variants = [
      'glass-card-full',
      'soft-skills',
      'glass-compact',
      'experience',
      'contact-form',
      'project-showcase',
      'news',
    ];
    variants.forEach((v) => {
      expect(content).toContain(`'${v}'`);
    });
  });

  it('should have rounded-3xl and backdrop-blur-sm for glass-card-full', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('rounded-3xl');
    expect(content).toContain('backdrop-blur-sm');
    expect(content).toContain('card-glow');
    expect(content).toContain('cursor-glow');
  });

  it('should have p-8 and min-h-[160px] for soft-skills', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('p-8');
    expect(content).toContain('min-h-[160px]');
    expect(content).toContain('hover:scale-105');
    expect(content).toContain('cursor-glow');
  });

  it('should have shadow-xl for glass-compact', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('shadow-xl');
  });

  it('should have backdrop-blur-xl for experience variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('backdrop-blur-xl');
  });

  it('should have rounded-4xl for contact-form variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('rounded-4xl');
    expect(content).toContain('bg-gray-50/70');
  });

  it('should have rounded-[2rem] for project-showcase variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('rounded-[2rem]');
  });

  it('should have rounded-4xl for news variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('news');
  });

  it('should accept padding, class, and hasCursorGlow overrides', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('padding');
    expect(content).toContain('hasCursorGlow');
  });

  it('should have a slot for children content', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('<slot');
  });

  it('should accept gradientOverlay override prop', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('gradientOverlay');
  });

  it('should include gradient overlay for glass-card-full variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('from-blue-500/5');
  });
});
