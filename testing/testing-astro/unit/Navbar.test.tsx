import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../../../src/components/Navbar';

const mockItems = [
  { label: 'Inicio', href: '/es#home', icon: 'home' },
  { label: 'Sobre Mí', href: '/es#sobre-mi', icon: 'about' },
] as const;

describe('Navbar Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('debe renderizar el nombre del autor y los botones principales', () => {
    render(<Navbar items={mockItems} currentLang="es" />);

    expect(screen.getByText(/Danlois Tovar/i)).toBeDefined();
    expect(screen.getByRole('button', { name: /open menu/i })).toBeDefined();
  });

  it('debe abrir y cerrar el menú móvil', () => {
    render(<Navbar items={mockItems} currentLang="es" />);

    const openButton = screen.getByRole('button', { name: /open menu/i });

    // El menú debe estar oculto inicialmente
    const overlay = screen.getByRole('button', { name: /close menu/i }).parentElement;
    expect(overlay?.className).toContain('invisible');

    // Abrir menú
    fireEvent.click(openButton);
    expect(overlay?.className).toContain('visible');
    expect(screen.getByText('Sobre Mí')).toBeDefined();

    // Cerrar menú
    const closeButton = screen.getByRole('button', { name: /close menu/i });
    fireEvent.click(closeButton);
    expect(overlay?.className).toContain('invisible');
  });

  it('debe cerrar el menú al hacer click en un enlace', () => {
    render(<Navbar items={mockItems} currentLang="es" />);

    // Abrir
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));

    // Click en un link
    const link = screen.getByText('Inicio');
    fireEvent.click(link);

    const overlay = screen.getByRole('button', { name: /close menu/i }).parentElement;
    expect(overlay?.className).toContain('invisible');
  });

  it('debe tener el atributo href correcto en los enlaces', () => {
    render(<Navbar items={mockItems} currentLang="es" />);
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));

    const homeLink = screen.getByText('Inicio').closest('a');
    expect(homeLink?.getAttribute('href')).toBe('/es#home');
  });

  it('debe renderizar correctamente items sin icono', () => {
    const itemsWithoutIcon = [{ label: 'Sin Icono', href: '/test' }] as const;
    // @ts-expect-error - Propiedades de solo lectura
    render(<Navbar items={itemsWithoutIcon} currentLang="es" />);
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));
    expect(screen.getByText('Sin Icono')).toBeDefined();
  });
});
