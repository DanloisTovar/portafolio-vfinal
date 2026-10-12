import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/sections/EventTwoShowcase.astro');

describe('EventTwoShowcase.astro', () => {
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

  it('should import IconBox', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import IconBox from '../ui/IconBox.astro'");
  });

  it('should import InfoCard', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import InfoCard from '../ui/InfoCard.astro'");
  });

  it('should import TechBadge', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import TechBadge from '../ui/TechBadge.astro'");
  });

  it('should import Button', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import Button from '../ui/Button.astro'");
  });

  it('should render project metrics via StatCard', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import StatCard from '../ui/StatCard.astro'");
    expect(content).toContain('<StatCard');
    expect(content).toContain("t('eventtwoShowcase.metric.tests')");
    expect(content).toContain("t('eventtwoShowcase.metric.coverage')");
    expect(content).toContain("t('eventtwoShowcase.metric.e2e')");
  });

  it('should have section-glow class', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('class="section-glow');
  });

  it('should have eventtwo-showcase section id', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('id="eventtwo-showcase"');
  });

  it('should render architecture flow with three labels and ArrowRight', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("t('eventtwoShowcase.flow.wp')");
    expect(content).toContain("t('eventtwoShowcase.flow.build')");
    expect(content).toContain("t('eventtwoShowcase.flow.static')");
    expect(content).toContain('ArrowRight');
  });

  it('should render build, seo and compliance InfoCards', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("t('eventtwoShowcase.build.title')");
    expect(content).toContain("t('eventtwoShowcase.seo.title')");
    expect(content).toContain("t('eventtwoShowcase.compliance.title')");
  });

  it('should render Postman card with checklist items', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("t('eventtwoShowcase.postman.title')");
    expect(content).toContain('postmanChecks');
    expect(content).toContain("t('eventtwoShowcase.postman.item");
  });

  it('should use i18n translations', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import { useTranslations } from '../../i18n/utils'");
    expect(content).toContain("t('eventtwoShowcase.");
  });

  it('should render CTA via Button with gist variant and eventtwo URL', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('<Button');
    expect(content).toContain('variant="gist"');
    expect(content).toContain('https://www.eventtwomedia.com');
  });
});
