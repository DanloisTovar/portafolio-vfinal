import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import './TargetCursor.css';

export interface TargetCursorProps {
  targetSelector?: string;
  spinDuration?: number;
  hideDefaultCursor?: boolean;
  hoverDuration?: number;
  parallaxOn?: boolean;
}

const TargetCursor = React.forwardRef<HTMLDivElement, TargetCursorProps>(
  (
    {
      targetSelector = '.cursor-target',
      spinDuration = 2,
      hideDefaultCursor = true,
      hoverDuration = 0.2,
      parallaxOn = true,
    },
    _ref
  ) => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cornersRef = useRef<NodeListOf<Element> | null>(null);
    const spinTl = useRef<gsap.core.Timeline | null>(null);
    const dotRef = useRef<HTMLDivElement>(null);

    const isActiveRef = useRef(false);
    const targetCornerPositionsRef = useRef<{ x: number; y: number }[] | null>(null);
    const tickerFnRef = useRef<(() => void) | null>(null);
    const activeStrengthRef = useRef({ current: 0 });

    const isMobile = useMemo(() => {
      const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const small = window.innerWidth <= 768;
      const mobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        navigator.userAgent || ''
      );
      return (touch && small) || mobileUA;
    }, []);

    const constants = useMemo(() => ({ borderWidth: 3, cornerSize: 12 }), []);

    const moveCursor = useCallback(
      (x: number, y: number) => {
        if (!cursorRef.current) return;
        gsap.to(cursorRef.current, { x, y, duration: 0.1, ease: 'power3.out' });
      },
      [cursorRef]
    );

    useEffect(() => {
      if (isMobile || !cursorRef.current) return;

      const originalCursor = document.body.style.cursor;
      if (hideDefaultCursor) document.body.style.cursor = 'none';

      const cursor = cursorRef.current;
      cornersRef.current = cursor.querySelectorAll('.target-cursor-corner');

      let activeTarget: Element | null = null;
      let currentLeaveHandler: (() => void) | null = null;
      let resumeTimeout: ReturnType<typeof setTimeout> | null = null;

      const cleanupTarget = (target: Element) => {
        if (currentLeaveHandler) target.removeEventListener('mouseleave', currentLeaveHandler);
        currentLeaveHandler = null;
      };

      gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });

      const createSpinTimeline = () => {
        if (spinTl.current) spinTl.current.kill();
        spinTl.current = gsap
          .timeline({ repeat: -1 })
          .to(cursor, { rotation: '+=360', duration: spinDuration, ease: 'none' });
      };

      createSpinTimeline();

      const tickerFn = () => {
        if (!targetCornerPositionsRef.current) return;
        const strength = activeStrengthRef.current.current;
        if (strength === 0) return;
        const cursorX = gsap.getProperty(cursorRef.current!, 'x') as number;
        const cursorY = gsap.getProperty(cursorRef.current!, 'y') as number;
        Array.from(cornersRef.current!).forEach((corner, i) => {
          const tPos = targetCornerPositionsRef.current![i];
          if (!tPos) return;
          const currentX = gsap.getProperty(corner, 'x') as number;
          const currentY = gsap.getProperty(corner, 'y') as number;
          const finalX = currentX + (tPos.x - cursorX - currentX) * strength;
          const finalY = currentY + (tPos.y - cursorY - currentY) * strength;
          const duration = strength >= 0.99 ? (parallaxOn ? 0.2 : 0) : 0.05;
          gsap.to(corner, {
            x: finalX,
            y: finalY,
            duration,
            ease: duration === 0 ? 'none' : 'power1.out',
            overwrite: 'auto',
          });
        });
      };
      tickerFnRef.current = tickerFn;

      const moveHandler = (e: MouseEvent) => moveCursor(e.clientX, e.clientY);
      window.addEventListener('mousemove', moveHandler);

      const scrollHandler = () => {
        if (!activeTarget) return;
        const x = gsap.getProperty(cursorRef.current!, 'x') as number;
        const y = gsap.getProperty(cursorRef.current!, 'y') as number;
        const el = document.elementFromPoint(x, y);
        const isTarget =
          el === activeTarget ||
          (el instanceof Element && el.closest(targetSelector) === activeTarget);
        if (!isTarget && currentLeaveHandler) currentLeaveHandler();
      };
      window.addEventListener('scroll', scrollHandler, { passive: true });

      const handleMouse = (isDown: boolean) => {
        gsap.to(dotRef.current!, { scale: isDown ? 0.7 : 1, duration: 0.3 });
        gsap.to(cursorRef.current!, { scale: isDown ? 0.9 : 1, duration: 0.2 });
      };
      const mouseDown = () => handleMouse(true);
      const mouseUp = () => handleMouse(false);
      window.addEventListener('mousedown', mouseDown);
      window.addEventListener('mouseup', mouseUp);

      const enterHandler = (e: MouseEvent) => {
        let current: Node | null = e.target as Node;
        const allTargets: Element[] = [];
        while (current && current !== document.body) {
          if (current instanceof Element && current.matches(targetSelector))
            allTargets.push(current);
          current = current.parentElement;
        }
        const target = allTargets[0];
        if (!target || activeTarget === target) return;
        if (activeTarget) cleanupTarget(activeTarget);
        if (resumeTimeout) {
          clearTimeout(resumeTimeout);
          resumeTimeout = null;
        }

        activeTarget = target;
        Array.from(cornersRef.current!).forEach((corner) => gsap.killTweensOf(corner));
        if (spinTl.current) {
          spinTl.current.pause();
          gsap.set(cursorRef.current!, { rotation: 0 });
        }

        const rect = target.getBoundingClientRect();
        const { borderWidth, cornerSize } = constants;
        targetCornerPositionsRef.current = [
          { x: rect.left - borderWidth, y: rect.top - borderWidth },
          { x: rect.right + borderWidth - cornerSize, y: rect.top - borderWidth },
          { x: rect.right + borderWidth - cornerSize, y: rect.bottom + borderWidth - cornerSize },
          { x: rect.left - borderWidth, y: rect.bottom + borderWidth - cornerSize },
        ];

        isActiveRef.current = true;
        if (tickerFnRef.current) gsap.ticker.add(tickerFnRef.current);
        gsap.to(activeStrengthRef.current, {
          current: 1,
          duration: hoverDuration,
          ease: 'power2.out',
        });

        const leaveHandler = () => {
          if (tickerFnRef.current) gsap.ticker.remove(tickerFnRef.current);
          isActiveRef.current = false;
          targetCornerPositionsRef.current = null;
          gsap.set(activeStrengthRef.current, { current: 0, overwrite: true });
          const targetToCleanup = activeTarget;
          activeTarget = null;
          Array.from(cornersRef.current!).forEach((corner, index) => {
            const px = index === 0 || index === 3 ? -cornerSize * 1.5 : cornerSize * 0.5;
            const py = index === 0 || index === 1 ? -cornerSize * 1.5 : cornerSize * 0.5;
            gsap.to(corner, { x: px, y: py, duration: 0.3, ease: 'power3.out' });
          });

          resumeTimeout = setTimeout(() => {
            if (!activeTarget && spinTl.current) {
              const currentRotation = gsap.getProperty(cursorRef.current!, 'rotation') as number;
              spinTl.current.kill();
              spinTl.current = gsap.timeline({ repeat: -1 }).to(cursorRef.current!, {
                rotation: '+=360',
                duration: spinDuration,
                ease: 'none',
              });
              gsap.to(cursorRef.current!, {
                rotation: (currentRotation % 360) + 360,
                duration: spinDuration * (1 - (currentRotation % 360) / 360),
                ease: 'none',
                onComplete: () => spinTl.current?.restart(),
              });
            }
            resumeTimeout = null;
          }, 50);
          if (targetToCleanup) cleanupTarget(targetToCleanup);
        };
        currentLeaveHandler = leaveHandler;
        target.addEventListener('mouseleave', leaveHandler);
      };
      window.addEventListener('mouseover', enterHandler);

      return () => {
        if (tickerFnRef.current) gsap.ticker.remove(tickerFnRef.current);
        window.removeEventListener('mousemove', moveHandler);
        window.removeEventListener('mouseover', enterHandler);
        window.removeEventListener('scroll', scrollHandler);
        window.removeEventListener('mousedown', mouseDown);
        window.removeEventListener('mouseup', mouseUp);
        if (activeTarget) cleanupTarget(activeTarget);
        if (spinTl.current) spinTl.current.kill();
        document.body.style.cursor = originalCursor;
      };
    }, [
      targetSelector,
      spinDuration,
      moveCursor,
      constants,
      hideDefaultCursor,
      isMobile,
      hoverDuration,
      parallaxOn,
    ]);

    useEffect(() => {
      if (!isMobile && spinTl.current) {
        spinTl.current.kill();
        spinTl.current = gsap
          .timeline({ repeat: -1 })
          .to(cursorRef.current!, { rotation: '+=360', duration: spinDuration, ease: 'none' });
      }
    }, [spinDuration, isMobile]);

    if (isMobile) return null;

    return (
      <div ref={cursorRef} className="target-cursor-wrapper">
        <div ref={dotRef} className="target-cursor-dot" />
        <div className="target-cursor-corner corner-tl" />
        <div className="target-cursor-corner corner-tr" />
        <div className="target-cursor-corner corner-br" />
        <div className="target-cursor-corner corner-bl" />
      </div>
    );
  }
);

TargetCursor.displayName = 'TargetCursor';
export default TargetCursor;
