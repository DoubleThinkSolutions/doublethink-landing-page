'use client';

import { motion, type Variants } from 'framer-motion';

interface TypewriterProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  speedScale?: number;
}

export const Typewriter = ({ text, delay = 0, className = '', onComplete, speedScale }: TypewriterProps) => {
  const lines = text.split('\n');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05 * (speedScale || 1.0),
        delayChildren: delay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      className={`whitespace-pre-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onAnimationComplete={() => onComplete && onComplete()}
    >
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block whitespace-nowrap">
              {Array.from(word).map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={childVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
              {wordIndex < line.split(' ').length - 1 && '\u00A0'}
            </span>
          ))}
          {lineIndex < lines.length - 1 && <br />}
        </span>
      ))}
    </motion.div>
  );
};
