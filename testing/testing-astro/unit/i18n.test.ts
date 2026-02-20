import { describe, it, expect } from 'vitest';
import { getLangFromUrl, useTranslations } from '../../../src/i18n/utils';

describe('i18n Utilities', () => {
  describe('getLangFromUrl', () => {
    it('debe devolver "es" para una URL con prefijo /es', () => {
      const url = new URL('http://localhost:4321/es/proyectos');
      expect(getLangFromUrl(url)).toBe('es');
    });

    it('debe devolver "en" para una URL con prefijo /en', () => {
      const url = new URL('http://localhost:4321/en/projects');
      expect(getLangFromUrl(url)).toBe('en');
    });

    it('debe devolver el idioma por defecto ("es") para una URL sin prefijo válido', () => {
      const url = new URL('http://localhost:4321/fr/test');
      expect(getLangFromUrl(url)).toBe('es');
    });

    it('debe devolver el idioma por defecto para la raíz /', () => {
      const url = new URL('http://localhost:4321/');
      expect(getLangFromUrl(url)).toBe('es');
    });
  });

  describe('useTranslations', () => {
    it('debe devolver la traducción correcta en español', () => {
      const t = useTranslations('es');
      expect(t('nav.home')).toBe('Inicio');
      expect(t('hero.role')).toBe('Desarrollador Front End');
    });

    it('debe devolver la traducción correcta en inglés', () => {
      const t = useTranslations('en');
      expect(t('nav.home')).toBe('Home');
      expect(t('hero.role')).toBe('Front End Developer');
    });

    it('debe usar el idioma por defecto si se pasa un idioma inválido', () => {
      // @ts-expect-error - Probando comportamiento con input inválido
      const t = useTranslations('fr');
      expect(t('nav.home')).toBe('Inicio');
    });

    it('debe caer de espaldas al idioma por defecto si la clave no existe en el idioma actual', () => {
      const t = useTranslations('en');
      // @ts-expect-error - Probando clave inexistente
      expect(t('key.no.existe')).toBeUndefined();
    });
  });
});
