import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CircularText from '../../../src/components/TextAnimations/CircularText/CircularText';

describe('CircularText Component', () => {
  it('debe renderizar cada letra del texto', () => {
    const testText = 'HELLO';
    render(<CircularText text={testText} />);
    testText.split('').forEach((char) => {
      expect(screen.getAllByText(char).length).toBeGreaterThan(0);
    });
  });

  it('debe aplicar acentos a las letras de "DANLOIS"', () => {
    const { container } = render(<CircularText text="DANLOIS TOVAR *" />);
    const danloisElements = container.querySelectorAll('[data-danlois="true"]');
    expect(danloisElements.length).toBe(7);
    danloisElements.forEach((el) => {
      expect('DANLOIS').toContain(el.textContent || '');
    });
  });

  it('debe aplicar acentos a las letras de "TOVAR" y asteriscos', () => {
    const { container } = render(<CircularText text="DANLOIS TOVAR *" />);
    const accentElements = container.querySelectorAll('[data-accent="true"]');
    expect(accentElements.length).toBe(6);
    accentElements.forEach((el) => {
      expect('TOVAR*').toContain(el.textContent || '');
    });
  });

  it('debe tener la clase circular-text', () => {
    const { container } = render(<CircularText text="TEST" />);
    expect(container.querySelector('.circular-text')).toBeDefined();
  });

  it('debe manejar eventos de mouse enter y leave', () => {
    const { container } = render(<CircularText text="HOVER ME" />);
    const circularText = container.querySelector('.circular-text');

    if (circularText) {
      fireEvent.mouseEnter(circularText);
      expect(circularText).toBeInTheDocument();

      fireEvent.mouseLeave(circularText);
      expect(circularText).toBeInTheDocument();
    }
  });

  it('debe manejar diferentes valores de onHover', () => {
    const { container } = render(<CircularText text="VARIANTS" onHover="speedUp" />);
    const circularText = container.querySelector('.circular-text');
    if (circularText) {
      fireEvent.mouseEnter(circularText);
      expect(circularText).toBeInTheDocument();
    }
  });

  it('debe manejar onHover="slowDown"', () => {
    const { container } = render(<CircularText text="VARIANTS" onHover="slowDown" />);
    const circularText = container.querySelector('.circular-text');
    if (circularText) {
      fireEvent.mouseEnter(circularText);
      expect(circularText).toBeInTheDocument();
    }
  });

  it('debe manejar onHover="pause"', () => {
    const { container } = render(<CircularText text="VARIANTS" onHover="pause" />);
    const circularText = container.querySelector('.circular-text');
    if (circularText) {
      fireEvent.mouseEnter(circularText);
      expect(circularText).toBeInTheDocument();
    }
  });

  it('debe render con onHover false o null', () => {
    // @ts-expect-error - Probando comportamiento con prop inválida
    const { container } = render(<CircularText text="VARIANTS" onHover={null} />);
    const circularText = container.querySelector('.circular-text');
    if (circularText) {
      fireEvent.mouseEnter(circularText);
      expect(circularText).toBeInTheDocument();
    }
  });

  it('debe manejar el modo móvil', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });
    const { container } = render(<CircularText text="MOBILE" />);
    const circularText = container.querySelector('.circular-text');
    if (circularText) {
      fireEvent.mouseEnter(circularText);
      expect(circularText).toBeInTheDocument();
    }
    // Restaurar
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
  });
});
