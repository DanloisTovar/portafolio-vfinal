import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

/**
 * Tests for cursorGlow.ts — shared cursor tracking module
 */
describe('cursorGlow', () => {
  let cardGlowElements: HTMLElement[];
  let sectionGlowElement: HTMLElement;
  let cursorGlowModule: typeof import('../../../src/lib/cursorGlow');

  beforeEach(async () => {
    document.body.innerHTML = `
      <div id="section-1" class="section-glow">
        <div class="card-glow" data-testid="card-1"></div>
        <div class="card-glow" data-testid="card-2"></div>
      </div>
      <div id="section-2" class="section-glow">
        <div class="card-glow" data-testid="card-3"></div>
      </div>
    `;
    cardGlowElements = document.querySelectorAll('.card-glow') as unknown as HTMLElement[];
    sectionGlowElement = document.getElementById('section-1')!;
  });

  afterEach(() => {
    vi.resetModules();
  });

  describe('initCardGlow', () => {
    it('should export initCardGlow as a function', async () => {
      cursorGlowModule = await import('../../../src/lib/cursorGlow');
      expect(typeof cursorGlowModule.initCardGlow).toBe('function');
    });

    it('should add mousemove event listeners to card-glow elements', async () => {
      cursorGlowModule = await import('../../../src/lib/cursorGlow');
      const addEventListenerSpy = vi.spyOn(cardGlowElements[0] as HTMLElement, 'addEventListener');

      cursorGlowModule.initCardGlow();

      // Should be called for each card-glow element + for document event
      expect(addEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
    });

    it('should set --mouse-x and --mouse-y CSS custom properties on mousemove', async () => {
      cursorGlowModule = await import('../../../src/lib/cursorGlow');
      cursorGlowModule.initCardGlow();

      const card = cardGlowElements[0] as HTMLElement;
      const rect = card.getBoundingClientRect();

      // Simulate mousemove
      const event = new MouseEvent('mousemove', {
        clientX: rect.left + rect.width / 2,
        clientY: rect.top + rect.height / 2,
      });
      card.dispatchEvent(event);

      expect(card.style.getPropertyValue('--mouse-x')).toBeTruthy();
      expect(card.style.getPropertyValue('--mouse-y')).toBeTruthy();
    });
  });

  describe('initSectionGlow', () => {
    it('should export initSectionGlow as a function', async () => {
      cursorGlowModule = await import('../../../src/lib/cursorGlow');
      expect(typeof cursorGlowModule.initSectionGlow).toBe('function');
    });

    it('should add mousemove event listener to matching section', async () => {
      cursorGlowModule = await import('../../../src/lib/cursorGlow');
      const addEventListenerSpy = vi.spyOn(sectionGlowElement, 'addEventListener');

      cursorGlowModule.initSectionGlow('#section-1');

      expect(addEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
    });

    it('should set --section-mouse-x and --section-mouse-y on mousemove', async () => {
      cursorGlowModule = await import('../../../src/lib/cursorGlow');
      cursorGlowModule.initSectionGlow('#section-1');

      const event = new MouseEvent('mousemove', {
        clientX: 100,
        clientY: 200,
      });
      sectionGlowElement.dispatchEvent(event);

      expect(sectionGlowElement.style.getPropertyValue('--section-mouse-x')).toBeTruthy();
      expect(sectionGlowElement.style.getPropertyValue('--section-mouse-y')).toBeTruthy();
    });

    it('should not throw if selector matches nothing', async () => {
      cursorGlowModule = await import('../../../src/lib/cursorGlow');
      expect(() => cursorGlowModule.initSectionGlow('#non-existent')).not.toThrow();
    });
  });

  describe('initAllCardGlows', () => {
    it('should export initAllCardGlows as a function', async () => {
      cursorGlowModule = await import('../../../src/lib/cursorGlow');
      expect(typeof cursorGlowModule.initAllCardGlows).toBe('function');
    });

    it('should attach listeners to all .card-glow elements', async () => {
      cursorGlowModule = await import('../../../src/lib/cursorGlow');

      const spy1 = vi.spyOn(cardGlowElements[0] as HTMLElement, 'addEventListener');
      const spy2 = vi.spyOn(cardGlowElements[1] as HTMLElement, 'addEventListener');
      const spy3 = vi.spyOn(cardGlowElements[2] as HTMLElement, 'addEventListener');

      cursorGlowModule.initAllCardGlows();

      expect(spy1).toHaveBeenCalledWith('mousemove', expect.any(Function));
      expect(spy2).toHaveBeenCalledWith('mousemove', expect.any(Function));
      expect(spy3).toHaveBeenCalledWith('mousemove', expect.any(Function));
    });
  });
});
