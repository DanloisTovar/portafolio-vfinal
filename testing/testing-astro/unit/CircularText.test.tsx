import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
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
    // Buscamos elementos que tengan data-danlois="true"
    const danloisElements = container.querySelectorAll('[data-danlois="true"]');
    expect(danloisElements.length).toBe(7); // DANLOIS tiene 7 letras
    danloisElements.forEach((el) => {
      expect('DANLOIS').toContain(el.textContent || '');
    });
  });

  it('debe aplicar acentos a las letras de "TOVAR" y asteriscos', () => {
    const { container } = render(<CircularText text="DANLOIS TOVAR *" />);
    const accentElements = container.querySelectorAll('[data-accent="true"]');
    expect(accentElements.length).toBe(6); // TOVAR (5) + * (1) = 6
    accentElements.forEach((el) => {
      expect('TOVAR*').toContain(el.textContent || '');
    });
  });

  it('debe tener la clase circular-text', () => {
    const { container } = render(<CircularText text="TEST" />);
    expect(container.querySelector('.circular-text')).toBeDefined();
  });
});
