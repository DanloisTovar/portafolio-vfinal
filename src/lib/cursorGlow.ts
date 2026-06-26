/**
 * Shared cursor tracking module.
 * Consolidates the identical cursor glow JS from About, Skills, Projects, and Contact.
 *
 * Card glow: tracks mouse position within individual cards with `.card-glow` class
 * Section glow: tracks mouse position within a section with `.section-glow` class
 */

/**
 * Initialize card-level cursor glow on all .card-glow elements.
 * Sets --mouse-x and --mouse-y CSS custom properties on mousemove.
 */
export function initCardGlow(): void {
  const cards = document.querySelectorAll<HTMLElement>('.card-glow');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });
  });
}

/**
 * Initialize section-wide cursor glow for a specific section selector.
 * Sets --section-mouse-x and --section-mouse-y CSS custom properties on mousemove.
 */
export function initSectionGlow(selector: string): void {
  const section = document.querySelector<HTMLElement>(selector);
  if (!section) return;
  section.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = section.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    section.style.setProperty('--section-mouse-x', `${x}%`);
    section.style.setProperty('--section-mouse-y', `${y}%`);
  });
}

/**
 * Initialize all card cursor glows at once.
 * Convenience function for global setup.
 */
export function initAllCardGlows(): void {
  initCardGlow();
}

/**
 * Set up glow effects for a section with both card and section-level glow.
 * Calls both initCardGlow and initSectionGlow, plus sets up astro:after-swap.
 */
export function setupGlowEffects(sectionSelector: string): void {
  initCardGlow();
  initSectionGlow(sectionSelector);

  document.addEventListener('astro:after-swap', () => {
    initCardGlow();
    initSectionGlow(sectionSelector);
  });
}
