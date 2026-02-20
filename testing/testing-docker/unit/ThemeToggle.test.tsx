import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import ThemeToggle from '../../../src/components/ThemeToggle';

// Mock simple de localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('ThemeToggle Component', () => {
  beforeEach(() => {
    // Limpiar estado antes de cada test
    document.documentElement.classList.remove('dark');
    localStorage.clear();
    cleanup();
  });

  afterEach(() => {
    cleanup();
  });

  it('debe renderizar correctamente', () => {
    render(<ThemeToggle />);
    // Buscamos por el aria-label que definimos en el componente: "Toggle theme"
    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeDefined();
  });

  it('debe alternar el tema al hacer click', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /toggle theme/i });

    // Estado inicial (light)
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    // Click para cambiar a dark
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');

    // Click para volver a light
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('debe inicializar con el tema correcto si ya hay clase dark', () => {
    document.documentElement.classList.add('dark');
    render(<ThemeToggle />);
    // Debería inicializarse en dark. Al hacer click debería pasar a light.
    const button = screen.getByRole('button', { name: /toggle theme/i });
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
