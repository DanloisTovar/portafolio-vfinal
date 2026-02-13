import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import FlagIcon from '../../../src/components/FlagIcon';

describe('FlagIcon Component', () => {
  it('debe renderizar la bandera de España cuando lang es "es"', () => {
    const { container } = render(<FlagIcon lang="es" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeDefined();
    expect(svg?.getAttribute('viewBox')).toBe('0 0 750 500');
    // La bandera de España tiene rectángulos de color específico
    const rects = container.querySelectorAll('rect');
    expect(rects.length).toBeGreaterThan(0);
    expect(rects[0].getAttribute('fill')).toBe('#AA151B');
  });

  it('debe renderizar la bandera de USA cuando lang es "en"', () => {
    const { container } = render(<FlagIcon lang="en" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeDefined();
    expect(svg?.getAttribute('viewBox')).toBe('0 0 1235 650');
  });

  it('debe aplicar clases personalizadas', () => {
    const { container } = render(<FlagIcon lang="es" className="custom-class" />);
    const svg = container.querySelector('svg');
    expect(svg?.classList.contains('custom-class')).toBe(true);
  });

  it('debe tener aria-hidden="true" para accesibilidad', () => {
    const { container } = render(<FlagIcon lang="es" />);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('aria-hidden')).toBe('true');
  });
});
