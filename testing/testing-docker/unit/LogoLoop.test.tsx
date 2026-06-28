import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LogoLoop from '../../../src/components/Animations/LogoLoop/LogoLoop';

describe('LogoLoop Component', () => {
  it('debe renderizar los logos (HTML5, CSS3, etc.)', () => {
    render(<LogoLoop />);
    // LogoLoop tiene logos internos, verificamos algunos por texto
    expect(screen.getAllByText('HTML5').length).toBeGreaterThan(0);
    expect(screen.getAllByText('React').length).toBeGreaterThan(0);
  });

  it('debe renderizar iconos (SVG)', () => {
    const { container } = render(<LogoLoop />);
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThan(0);
  });

  it('debe aplicar la velocidad provista', () => {
    const { container } = render(<LogoLoop speed={50} />);
    const track = container.querySelector('.logo-loop-track') as HTMLElement;
    expect(track.style.getPropertyValue('--speed')).toBe('50s');
  });
});
