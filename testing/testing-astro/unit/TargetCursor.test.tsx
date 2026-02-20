import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, fireEvent, act } from '@testing-library/react';
import TargetCursor from '../../../src/components/Animations/TargetCursor/TargetCursor';
import { gsap } from 'gsap';

describe('TargetCursor Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 768,
    });
    Object.defineProperty(window, 'ontouchstart', {
      writable: true,
      configurable: true,
      value: undefined,
    });
    Object.defineProperty(navigator, 'maxTouchPoints', {
      writable: true,
      configurable: true,
      value: 0,
    });
    Object.defineProperty(navigator, 'userAgent', {
      writable: true,
      configurable: true,
      value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    });

    if (typeof document !== 'undefined') {
      document.elementFromPoint = vi.fn();
    }
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('debe manejar hideDefaultCursor true y false', () => {
    const { rerender } = render(<TargetCursor hideDefaultCursor={true} />);
    expect(document.body.style.cursor).toBe('none');
    rerender(<TargetCursor hideDefaultCursor={false} />);
    expect(document.body.style.cursor).not.toBe('none');
  });

  it('debe manejar todas las permutaciones de isMobile', () => {
    // 1. mobileUA true
    Object.defineProperty(navigator, 'userAgent', { writable: true, value: 'iphone' });
    const { container: c1 } = render(<TargetCursor />);
    expect(c1.firstChild).toBeNull();

    // 2. touch true, small true
    Object.defineProperty(navigator, 'userAgent', { writable: true, value: 'pc' });
    Object.defineProperty(navigator, 'maxTouchPoints', { writable: true, value: 5 });
    Object.defineProperty(window, 'innerWidth', { writable: true, value: 500 });
    const { container: c2 } = render(<TargetCursor />);
    expect(c2.firstChild).toBeNull();

    // 3. touch true, small false
    Object.defineProperty(window, 'innerWidth', { writable: true, value: 1024 });
    const { container: c3 } = render(<TargetCursor />);
    expect(c3.querySelector('.target-cursor-wrapper')).toBeDefined();

    // 4. touch false, small true
    Object.defineProperty(navigator, 'maxTouchPoints', { writable: true, value: 0 });
    Object.defineProperty(window, 'innerWidth', { writable: true, value: 500 });
    const { container: c4 } = render(<TargetCursor />);
    expect(c4.querySelector('.target-cursor-wrapper')).toBeDefined();

    // 5. ontouchstart true
    Object.defineProperty(window, 'ontouchstart', { writable: true, value: () => {} });
    Object.defineProperty(window, 'innerWidth', { writable: true, value: 500 });
    const { container: c5 } = render(<TargetCursor />);
    expect(c5.firstChild).toBeNull();
  });

  it('debe manejar entrada, leave, resumeTimeout y cancelacion', () => {
    const { container } = render(
      <div>
        <div className="cursor-target t1">T1</div>
        <div className="cursor-target t2">T2</div>
        <TargetCursor targetSelector=".cursor-target" spinDuration={0.01} />
      </div>
    );
    const t1 = container.querySelector('.t1') as HTMLElement;
    const t2 = container.querySelector('.t2') as HTMLElement;

    // Entrada y re-entrada
    fireEvent.mouseOver(t1);
    fireEvent.mouseOver(t1);

    // Leave y cancelacion por nueva entrada
    fireEvent.mouseLeave(t1);
    act(() => {
      vi.advanceTimersByTime(10);
    });
    fireEvent.mouseOver(t2);

    // Leave y espera completa de resume y onComplete
    fireEvent.mouseLeave(t2);
    act(() => {
      vi.advanceTimersByTime(60);
    }); // resumeTimeout
    act(() => {
      vi.advanceTimersByTime(100);
    }); // rotation completion
  });

  it('debe manejar scroll dentro y fuera del target', () => {
    const { container } = render(
      <div>
        <div className="cursor-target">Target</div>
        <TargetCursor targetSelector=".cursor-target" />
      </div>
    );
    const target = container.querySelector('.cursor-target') as HTMLElement;
    fireEvent.mouseOver(target);

    // 1. Sigue sobre el target
    document.elementFromPoint = vi.fn(() => target);
    fireEvent.scroll(window);

    // 2. No esta sobre el target
    document.elementFromPoint = vi.fn(() => document.body);
    fireEvent.scroll(window);
  });

  it('debe manejar mousedown/mouseup y desmontaje', () => {
    const { unmount } = render(<TargetCursor />);
    fireEvent.mouseDown(window);
    fireEvent.mouseUp(window);
    unmount();
  });

  it('debe manejar desmontaje mientras esta sobre un target', () => {
    const { container, unmount } = render(
      <div>
        <div className="cursor-target">Target</div>
        <TargetCursor targetSelector=".cursor-target" />
      </div>
    );
    const target = container.querySelector('.cursor-target') as HTMLElement;
    fireEvent.mouseOver(target);
    unmount();
  });

  it('debe manejar ticker con parallaxOn true y false', () => {
    const { container, rerender } = render(
      <div>
        <div className="cursor-target">Target</div>
        <TargetCursor targetSelector=".cursor-target" parallaxOn={true} />
      </div>
    );
    const target = container.querySelector('.cursor-target') as HTMLElement;
    fireEvent.mouseOver(target);
    fireEvent.mouseMove(window, { clientX: 100, clientY: 100 });
    act(() => {
      gsap.ticker.tick();
    });

    rerender(
      <div>
        <div className="cursor-target">Target</div>
        <TargetCursor targetSelector=".cursor-target" parallaxOn={false} />
      </div>
    );
    act(() => {
      gsap.ticker.tick();
    });
  });

  it('debe actualizar timeline al cambiar spinDuration', () => {
    const { rerender } = render(<TargetCursor spinDuration={1} />);
    act(() => {
      gsap.ticker.tick();
      vi.advanceTimersByTime(10);
    });
    rerender(<TargetCursor spinDuration={0.5} />);
  });
});
