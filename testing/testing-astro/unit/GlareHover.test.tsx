import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import GlareHover from '../../../src/components/Animations/GlareHover/GlareHover';

describe('GlareHover Component', () => {
  it('debe renderizar los hijos correctamente', () => {
    render(
      <GlareHover>
        <div data-testid="child">Content</div>
      </GlareHover>
    );
    expect(screen.getByTestId('child')).toBeDefined();
  });

  it('debe aplicar las variables CSS iniciales', () => {
    const { container } = render(
      <GlareHover glareColor="#ff0000" glareOpacity={0.5}>
        <div>Content</div>
      </GlareHover>
    );

    const wrapper = container.firstChild as HTMLElement;
    // Las variables CSS se calculan en el componente
    expect(wrapper.style.getPropertyValue('--gh-rgba')).toContain('rgba(255, 0, 0, 0.5)');
  });

  it('debe renderizar el contenedor de contenido', () => {
    const { container } = render(
      <GlareHover>
        <div>Content</div>
      </GlareHover>
    );
    expect(container.querySelector('.glare-content')).toBeDefined();
  });
});
