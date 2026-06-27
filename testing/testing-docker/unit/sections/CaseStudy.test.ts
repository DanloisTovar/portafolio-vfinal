import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/sections/CaseStudy.astro');

describe('CaseStudy.astro', () => {
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

  it('should import StarBorder', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import StarBorder from '../Animations/StarBorder/StarBorder'");
  });

  it('should have section-glow class', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('class="section-glow');
  });

  it('should contain case-study-gallery grid', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('case-study-gallery');
    expect(content).toContain('grid-cols-1 md:grid-cols-2');
  });

  it('should import lightGallery in client script', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import lightGallery from 'lightgallery'");
    expect(content).toContain("import lgZoom from 'lightgallery/plugins/zoom'");
    expect(content).toContain("import lgThumbnail from 'lightgallery/plugins/thumbnail'");
  });

  it('should have initLightGallery function', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('function initLightGallery()');
    expect(content).toContain('lightGallery(caseStudyGallery');
  });

  it('should have initLightboxTriggers function', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('function initLightboxTriggers()');
    expect(content).toContain('.js-trigger-lightbox');
  });

  it('should use GlassCard with project-showcase variant for code images', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('variant="project-showcase"');
  });

  it('should include description card with glass-card-full variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('variant="glass-card-full"');
  });

  it('should listen to DOMContentLoaded and astro:page-load', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("document.addEventListener('DOMContentLoaded'");
    expect(content).toContain("document.addEventListener('astro:page-load'");
  });

  it('should use i18n translations', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import { useTranslations } from '../../i18n/utils'");
    expect(content).toContain("t('projects.caseStudy.");
  });
});
