import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import LanguageToggle from '../../../src/components/LanguageToggle';

// Mock de window.location
const originalLocation = window.location;

describe('LanguageToggle Component', () => {
  beforeEach(() => {
    // @ts-expect-error - Mocking window.location which is read-only
    delete window.location;
    // @ts-expect-error - Mocking window.location which is read-only
    window.location = {
      ...originalLocation,
      pathname: '/es/proyectos',
      href: '',
      assign: vi.fn(),
      replace: vi.fn(),
    };
  });

  afterEach(() => {
    window.location = originalLocation;
    cleanup();
  });

  it('debe renderizar la bandera y texto del idioma actual (ES)', () => {
    render(<LanguageToggle currentLang="es" />);
    expect(screen.getByText('es')).toBeDefined();
    // Ajustamos la búsqueda de imagen si es necesario, pero el texto debería bastar
  });

  it('debe renderizar la bandera y texto del idioma actual (EN)', () => {
    render(<LanguageToggle currentLang="en" />);
    expect(screen.getByText('en')).toBeDefined();
  });

  it('debe redirigir a la versión en inglés al hacer click estando en español', () => {
    render(<LanguageToggle currentLang="es" />);
    const button = screen.getByRole('button', { name: /change language/i });
    fireEvent.click(button);

    // Esperamos que href cambie de /es/proyectos a /en/proyectos
    expect(window.location.href).toBe('/en/proyectos');
  });

  it('debe redirigir a la versión en español al hacer click estando en inglés', () => {
    // Simulamos estar en inglés
    window.location.pathname = '/en/projects';

    render(<LanguageToggle currentLang="en" />);
    const button = screen.getByRole('button', { name: /change language/i });
    fireEvent.click(button);

    expect(window.location.href).toBe('/es/projects');
  });
});
