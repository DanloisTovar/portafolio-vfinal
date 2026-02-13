import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import TargetCursor from '../../../src/components/Animations/TargetCursor/TargetCursor';

describe('TargetCursor Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset window properties
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
    Object.defineProperty(navigator, 'userAgent', {
      writable: true,
      configurable: true,
      value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    });
  });

  it('debe renderizar el cursor en desktop', () => {
    const { container } = render(<TargetCursor />);
    // TargetCursor devuelve una estructura con .target-cursor-wrapper
    expect(container.querySelector('.target-cursor-wrapper')).toBeDefined();
    expect(container.querySelector('.target-cursor-dot')).toBeDefined();
  });

  it('no debe renderizar nada en dispositivos móviles (detectado por ancho de pantalla)', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, value: 500 });
    const { container } = render(<TargetCursor />);
    expect(container.firstChild).toBeNull();
  });

  it('no debe renderizar nada en dispositivos móviles (detectado por UserAgent)', () => {
    Object.defineProperty(navigator, 'userAgent', { writable: true, value: 'iphone' });
    const { container } = render(<TargetCursor />);
    expect(container.firstChild).toBeNull();
  });
});
