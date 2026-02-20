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

  it('debe aplicar las variables CSS iniciales con colores hex completos', () => {
    const { container } = render(
      <GlareHover glareColor="#ff0000" glareOpacity={0.5}>
        <div>Content</div>
      </GlareHover>
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.getPropertyValue('--gh-rgba')).toContain('rgba(255, 0, 0, 0.5)');
  });

  it('debe aplicar las variables CSS iniciales con colores hex cortos', () => {
    const { container } = render(
      <GlareHover glareColor="#f00" glareOpacity={0.5}>
        <div>Content</div>
      </GlareHover>
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.getPropertyValue('--gh-rgba')).toContain('rgba(255, 0, 0, 0.5)');
  });

  it('debe manejar colores no hexadecimales', () => {
    const { container } = render(
      <GlareHover glareColor="red" glareOpacity={0.5}>
        <div>Content</div>
      </GlareHover>
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.getPropertyValue('--gh-rgba')).toBe('red');
  });

  it('debe aplicar la clase glare-hover--play-once cuando playOnce es true', () => {
    const { container } = render(
      <GlareHover playOnce={true}>
        <div>Content</div>
      </GlareHover>
    );
    expect(container.firstChild).toHaveClass('glare-hover--play-once');
  });

  it('debe aplicar todas las variables CSS basadas en props', () => {
    const { container } = render(
      <GlareHover
        width="500px"
        height="300px"
        borderRadius="10px"
        glareAngle={90}
        glareSize={150}
        transitionDuration={1000}
      >
        <div>Content</div>
      </GlareHover>
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.getPropertyValue('--gh-width')).toBe('500px');
    expect(wrapper.style.getPropertyValue('--gh-height')).toBe('300px');
    expect(wrapper.style.getPropertyValue('--gh-br')).toBe('10px');
    expect(wrapper.style.getPropertyValue('--gh-angle')).toBe('90deg');
    expect(wrapper.style.getPropertyValue('--gh-size')).toBe('150%');
    expect(wrapper.style.getPropertyValue('--gh-duration')).toBe('1000ms');
  });
});
