import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/sections/QAShowcase.astro');

describe('QAShowcase.astro', () => {
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

  it('should have section-glow class', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('class="section-glow');
  });

  it('should use bento grid layout classes', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('grid');
    expect(content).toContain('lg:grid-cols-');
  });

  it('should include bug hunting GlassCards with glass-compact variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('variant="glass-compact"');
  });

  it('should include documentation section', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("t('qa.showcase.documentation'");
  });

  it('should import lightGallery in client script', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import lightGallery from 'lightgallery'");
    expect(content).toContain("import lgZoom from 'lightgallery/plugins/zoom'");
    expect(content).toContain("import lgThumbnail from 'lightgallery/plugins/thumbnail'");
  });

  it('should have initLightGallery targeting qa-showcase', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("getElementById('qa-showcase')");
    expect(content).toContain('.qa-showcase-item');
  });

  it('should listen to DOMContentLoaded and astro:page-load', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("document.addEventListener('DOMContentLoaded'");
    expect(content).toContain("document.addEventListener('astro:page-load'");
  });

  it('should use i18n translations', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import { useTranslations } from '../../i18n/utils'");
    expect(content).toContain("t('qa.showcase.");
  });

  it('should have lightbox trigger buttons', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('.js-trigger-lightbox');
  });
});
