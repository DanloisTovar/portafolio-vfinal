import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/About.astro');

describe('About.astro', () => {
  it('should exist', () => {
    expect(existsSync(COMPONENT_PATH)).toBe(true);
  });

  it('should import Section from atomic UI', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import Section from './ui/Section.astro'");
  });

  it('should import SectionHeader', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import SectionHeader from './ui/SectionHeader.astro'");
  });

  it('should import GlassCard', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import GlassCard from './ui/GlassCard.astro'");
  });

  it('should use spline-viewer for 3D element', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('spline-viewer');
  });

  it('should have hideSplineLogo function with MutationObserver', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('function hideSplineLogo()');
    expect(content).toContain('MutationObserver');
    expect(content).toContain('shadowRoot');
  });

  it('should have about content translations', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("t('about.intro'");
    expect(content).toContain("t('about.description'");
    expect(content).toContain("t('about.experience'");
  });

  it('should use GlassCard variant glass-card-full', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('variant="glass-card-full"');
  });

  it('should use i18n translations', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import { useTranslations } from '../i18n/utils'");
  });
});
