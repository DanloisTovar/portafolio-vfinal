import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../../src/components/Counter';

describe('Counter Component', () => {
  it('debe renderizar el componente correctamente', () => {
    render(<Counter />);

    expect(screen.getByText('React Counter')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('debe incrementar el contador al hacer click en +', () => {
    render(<Counter />);
    const buttons = screen.getAllByRole('button');
    const incrementButton = buttons[2]; // El botón +

    fireEvent.click(incrementButton);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('debe decrementar el contador al hacer click en -', () => {
    render(<Counter />);
    const buttons = screen.getAllByRole('button');
    const decrementButton = buttons[0]; // El botón -
    const incrementButton = buttons[2]; // El botón +

    // Primero incrementar
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    // Luego decrementar
    fireEvent.click(decrementButton);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('debe resetear el contador al hacer click en Reset', () => {
    render(<Counter />);
    const buttons = screen.getAllByRole('button');
    const incrementButton = buttons[2];
    const resetButton = buttons[1];

    // Incrementar varias veces
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    // Resetear
    fireEvent.click(resetButton);

    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
