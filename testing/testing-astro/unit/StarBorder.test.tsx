import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import StarBorder from '../../../src/components/Animations/StarBorder/StarBorder';

describe('StarBorder Component', () => {
  it('debe renderizar el contenedor de bordes', () => {
    const { container } = render(<StarBorder />);
    expect(container.querySelector('.star-border-container')).toBeDefined();
    expect(container.querySelector('.star')).toBeDefined();
  });

  it('debe aplicar estilos de color personalizados', () => {
    const { container } = render(<StarBorder color="#ff0000" colorEnd="#00ff00" />);
    const element = container.querySelector('.star-border-container') as HTMLElement;
    expect(element.style.getPropertyValue('--star-color')).toBe('#ff0000');
    expect(element.style.getPropertyValue('--star-color-end')).toBe('#00ff00');
  });

  it('debe aplicar clases personalizadas', () => {
    const { container } = render(<StarBorder className="custom-border" />);
    expect(container.querySelector('.custom-border')).toBeDefined();
  });
});
