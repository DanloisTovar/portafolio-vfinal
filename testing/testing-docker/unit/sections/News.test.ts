import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const PROJECT_ROOT = process.cwd();
const COMPONENT_PATH = resolve(PROJECT_ROOT, 'src/components/News.astro');

describe('News.astro', () => {
  it('should exist', () => {
    expect(existsSync(COMPONENT_PATH)).toBe(true);
  });

  it('should import SectionHeader', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import SectionHeader from './ui/SectionHeader.astro'");
  });

  it('should have section-glow class', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('section-glow');
  });

  it('should have news carousel with prev/next buttons', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('news-prev');
    expect(content).toContain('news-next');
    expect(content).toContain('news-track');
    expect(content).toContain('news-carousel-container');
  });

  it('should have skeleton loader placeholders', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('news-skeleton');
    expect(content).toContain('animate-pulse');
  });

  it('should have indicators container', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('news-indicators');
  });

  it('should fetch news from RSS feeds in inline script', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('rss2json.com');
    expect(content).toContain('theverge.com');
    expect(content).toContain('dev.to');
  });

  it('should cache news in localStorage', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('CACHE_KEY');
    expect(content).toContain('localStorage.getItem');
    expect(content).toContain('localStorage.setItem');
  });

  it('should use 24-hour cache TTL', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('24 * 60 * 60 * 1000');
  });

  it('should have renderNews function', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('function renderNews');
    expect(content).toContain('function fetchNews');
  });

  it('should use i18n translations', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain("import { useTranslations } from '../i18n/utils'");
    expect(content).toContain("t('news.");
  });

  it('should have scrollbar-hide utility styles', () => {
    const content = readFileSync(COMPONENT_PATH, 'utf-8');
    expect(content).toContain('scrollbar-hide');
  });
});
