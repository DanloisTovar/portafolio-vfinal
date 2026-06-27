import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/Projects.astro');

describe('Projects.astro', () => {
  it('should exist', () => {
    expect(existsSync(COMPONENT_PATH)).toBe(true);
  });

  it('should import SectionHeader', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import SectionHeader from './ui/SectionHeader.astro'");
  });

  it('should import GlassCard', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import GlassCard from './ui/GlassCard.astro'");
  });

  it('should import StarBorder', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import StarBorder from './Animations/StarBorder/StarBorder'");
  });

  it('should have section-glow class', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('class="section-glow');
  });

  it('should have 4 original projects defined', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    const matches = content.match(/title: t\('projects\.\w+\.title'\)/g);
    expect(matches).toHaveLength(4);
  });

  it('should include EventTwo Media project', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("t('projects.eventtwo.title')");
    expect(content).toContain('eventtwomedia.com');
  });

  it('should include Portfolio project with repo link', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("t('projects.portfolio.title')");
    expect(content).toContain('github.com/DanloisTovar/portafolio-vfinal');
  });

  it('should use horizontal scroll layout with sticky', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('lg:sticky');
    expect(content).toContain('projects-track');
    expect(content).toContain('lg:h-[300vh]');
  });

  it('should have scroll-driven horizontal translate logic', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('requestAnimationFrame');
    expect(content).toContain('translateX');
    expect(content).toContain('getBoundingClientRect');
  });

  it('should handle resize for desktop/mobile switch', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("window.matchMedia('(min-width: 1024px)')");
  });

  it('should listen to astro:page-load for re-init', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("document.addEventListener('astro:page-load'");
    expect(content).toContain('initScroll()');
  });

  it('should use i18n translations', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import { useTranslations } from '../i18n/utils'");
  });
});
