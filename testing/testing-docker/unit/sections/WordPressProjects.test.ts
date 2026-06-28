import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/sections/WordPressProjects.astro');

describe('WordPressProjects.astro', () => {
  it('should exist', () => {
    expect(existsSync(COMPONENT_PATH)).toBe(true);
  });

  it('should import SectionHeader', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import SectionHeader from '../ui/SectionHeader.astro'");
  });

  it('should import GlassCard', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import GlassCard from '../ui/GlassCard.astro'");
  });

  it('should import TechBadge', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import TechBadge from '../ui/TechBadge.astro'");
  });

  it('should import StarBorder', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import StarBorder from '../Animations/StarBorder/StarBorder'");
  });

  it('should have section-glow class', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('class="section-glow');
  });

  it('should use horizontal scroll layout with sticky', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('lg:sticky');
    expect(content).toContain('lg:h-screen');
    expect(content).toContain('projects-track');
  });

  it('should have 4 WordPress projects defined', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    const matches = content.match(/title: t\('wordpressProjects\.project\d\.title'\)/g);
    expect(matches).toHaveLength(4);
  });

  it('should use project-showcase GlassCard variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('variant="project-showcase"');
  });

  it('should use TechBadge with floating variant for tags', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('variant="floating"');
  });

  it('should have scroll setup script', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("getElementById('wordpress-projects')");
    expect(content).toContain("getElementById('wordpress-track')");
    expect(content).toContain('requestAnimationFrame');
  });

  it('should listen to astro:page-load for scroll re-init', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("document.addEventListener('astro:page-load'");
    expect(content).toContain('initScroll()');
  });

  it('should have responsive mobile instructions', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('Swipe to explore');
  });

  it('should use i18n translations', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import { useTranslations } from '../../i18n/utils'");
    expect(content).toContain("t('wordpressProjects.");
  });
});
