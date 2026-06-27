import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/Experience.astro');

describe('Experience.astro', () => {
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

  it('should import IconBox', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import IconBox from './ui/IconBox.astro'");
  });

  it('should import TechBadge', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import TechBadge from './ui/TechBadge.astro'");
  });

  it('should import GlareHover', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import GlareHover from './Animations/GlareHover/GlareHover'");
  });

  it('should have section-glow class', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('section-glow');
  });

  it('should define 3 job experiences', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("t('experience.job1.role')");
    expect(content).toContain("t('experience.job2.role')");
    expect(content).toContain("t('experience.job3.role')");
  });

  it('should have vertical timeline with progress line', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('experience-progress-line');
    expect(content).toContain('experience-node');
  });

  it('should use GlassCard with experience variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('variant="experience"');
  });

  it('should use IconBox with exp size', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('size="exp"');
  });

  it('should use TechBadge with duration variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('variant="duration"');
  });

  it('should have parallax background elements', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('parallax-bg-1');
    expect(content).toContain('parallax-bg-2');
  });

  it('should import Motion for scroll animations', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('import { scroll, animate, inView } from "motion"');
  });

  it('should use i18n translations', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import { useTranslations } from '../i18n/utils'");
  });
});
