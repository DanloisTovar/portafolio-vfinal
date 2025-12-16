import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../../../src/components/Counter';

describe('Counter Component (Docker)', () => {
  it('debe renderizar el componente correctamente', () => {
    render(<Counter />);

    expect(screen.getByText('React Counter')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('debe incrementar el contador al hacer click en +', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(incrementButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('debe decrementar el contador al hacer click en -', () => {
    render(<Counter />);
    const decrementButton = screen.getByRole('button', { name: '-' });
    const incrementButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('debe resetear el contador al hacer click en Reset', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: '+' });
    const resetButton = screen.getByRole('button', { name: 'Reset' });
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
