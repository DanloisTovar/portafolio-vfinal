import { useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'motion/react';

import './CircularText.css';

const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: 'linear',
  duration,
  type: 'tween',
  repeat: loop ? Infinity : 0
});
/* ! hola mundo */
const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring',
    damping: 20,
    stiffness: 300
  }
});

const CircularText = ({ text, spinDuration = 20, onHover = 'speedUp', className = '' }) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  }, [spinDuration, text, onHover, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();
    
    // Check if running in browser before logging
    if (typeof window !== 'undefined') {
       console.log('CircularText hover start with text:', text);
    }
    
    if (!onHover) return;

    let transitionConfig;
    let scaleVal = 1;

    switch (onHover) {
      case 'slowDown':
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case 'speedUp':
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case 'pause':
        transitionConfig = {
          rotate: { type: 'spring', damping: 20, stiffness: 300 },
          scale: { type: 'spring', damping: 20, stiffness: 300 }
        };
        scaleVal = 1;
        break;
      case 'goBonkers':
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  };

  return (
    <motion.div
      className={`circular-text ${className}`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const factor = Math.PI / letters.length;
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

        // Determine if this letter should use accent color in dark mode
        // Check if letter is part of "TOVAR" or is an asterisk
        const textUpper = text.toUpperCase();
        const isTovarLetter = textUpper.indexOf('TOVAR') !== -1 && 
                             i >= textUpper.indexOf('TOVAR') && 
                             i < textUpper.indexOf('TOVAR') + 5;
        const isAsterisk = letter === '*';
        const shouldAccent = isTovarLetter || isAsterisk;
        
        // Check if letter is part of "DANLOIS"
        const isDanloisLetter = textUpper.indexOf('DANLOIS') !== -1 && 
                               i >= textUpper.indexOf('DANLOIS') && 
                               i < textUpper.indexOf('DANLOIS') + 7;

        // Build className based on letter type
        let className = '';
        if (shouldAccent) {
          className = 'accent-letter !text-blue-600 dark:!text-blue-400';
        } else if (isDanloisLetter) {
          className = 'danlois-letter !text-gray-900 dark:!text-white';
        }

        return (
          <span 
            key={i} 
            style={{ transform, WebkitTransform: transform }}
            className={className}
            data-accent={shouldAccent ? 'true' : 'false'}
            data-danlois={isDanloisLetter ? 'true' : 'false'}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
