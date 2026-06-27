import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/Hero.astro');

describe('Hero.astro', () => {
  it('should exist', () => {
    expect(existsSync(COMPONENT_PATH)).toBe(true);
  });

  it('should import LightRays background', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import LightRays from './Backgrounds/LightRays/LightRays'");
  });

  it('should import CircularText animation', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import CircularText from './TextAnimations/CircularText/CircularText'");
  });

  it('should use atomic Button component', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import Button from './ui/Button.astro'");
  });

  it('should use atomic TechBadge component', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import TechBadge from './ui/TechBadge.astro'");
  });

  it('should have section-glow class on main container', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('section-glow');
  });

  it('should have id="home"', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('id="home"');
  });

  it('should have three CTA buttons', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    const primaryMatches = content.match(/variant="primary"/g);
    const secondaryMatches = content.match(/variant="secondary"/g);
    expect(primaryMatches).toHaveLength(2);
    expect(secondaryMatches).toHaveLength(1);
  });

  it('should include tech stack tags', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('JavaScript');
    expect(content).toContain('React');
    expect(content).toContain('Astro');
    expect(content).toContain('Tailwind CSS');
  });

  it('should have animated badges', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('animate-badge-1');
    expect(content).toContain('animate-badge-2');
  });

  it('should use Portfolio image', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('imagen-portafolio');
  });

  it('should use i18n translations', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import { useTranslations } from '../i18n/utils'");
    expect(content).toContain("t('hero.");
  });

  it('should define custom keyframe animations', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('@keyframes badge-float');
    expect(content).toContain('@keyframes badge-slide-in-right');
    expect(content).toContain('@keyframes badge-slide-in-bottom');
  });
});
