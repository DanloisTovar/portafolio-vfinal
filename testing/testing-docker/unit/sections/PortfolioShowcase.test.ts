import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/sections/PortfolioShowcase.astro');

describe('PortfolioShowcase.astro', () => {
  it('should exist', () => {
    expect(existsSync(COMPONENT_PATH)).toBe(true);
  });

  it('should import SectionHeader', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import SectionHeader from '../ui/SectionHeader.astro'");
  });

  it('should import InfoCard', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import InfoCard from '../ui/InfoCard.astro'");
  });

  it('should import StatCard', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import StatCard from '../ui/StatCard.astro'");
  });

  it('should import CiBadge', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import CiBadge from '../ui/CiBadge.astro'");
  });

  it('should import Button', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import Button from '../ui/Button.astro'");
  });

  it('should have section-glow class', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('class="section-glow');
  });

  it('should have portfolio-showcase section id', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('id="portfolio-showcase"');
  });

  it('should render metrics via StatCard and use data-counter', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('<StatCard');
    expect(content).toContain('[data-counter]');
  });

  it('should render CI badge with GitHub Actions URL', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('<CiBadge');
    expect(content).toContain('https://github.com/DanloisTovar/portafolio-vfinal/actions');
  });

  it('should render closing standard line', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("t('portfolioShowcase.standard'");
  });

  it('should use i18n translations', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import { useTranslations } from '../../i18n/utils'");
    expect(content).toContain("t('portfolioShowcase.");
  });

  it('should render CTA via Button with gist variant', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('<Button');
    expect(content).toContain('variant="gist"');
  });
});
