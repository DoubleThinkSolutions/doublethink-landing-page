'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from './Typewriter';
import { useAudio } from '../context/AudioContext';
import { AudioId } from '../lib/audioConfig';

interface FooterNavProps {
  onNavigate: (targetId: string) => void;
  onOpenFullNav: () => void;
  isFullNavOpen: boolean;
}

export function FooterNav({ onNavigate, onOpenFullNav, isFullNavOpen }: FooterNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerReady, setDrawerReady] = useState(false);
  const { playTriggered } = useAudio();

  const navLinks = [
    { label: 'About Us', target: 'about' },
    { label: 'OSP', target: 'osp_intro' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none">
      
      {/* Control Action Bottom Bar */}
      <div className="w-full max-w-7xl mx-auto px-6 mb-2 flex items-center justify-between">

        {/* Center Target Arrow */}
        <button
          onClick={() => {
            playTriggered(AudioId.CLICK);
            const nextState = !isOpen;
            setIsOpen(nextState);
            if (!nextState) setDrawerReady(false);
          }}
          className="pointer-events-auto flex items-center justify-center p-3 rounded-full bg-secondary/80 hover:bg-secondary-hover transition-colors backdrop-blur-sm shadow-sm mx-auto group"
          aria-label="Toggle drawer panel"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5 text-secondary-foreground group-hover:text-secondary-foreground-hover"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: 'spring', damping: 15 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </motion.svg>
        </button>
      </div>

      {/* Slide-up Base Actions List Drawer */}
      <AnimatePresence>
        {isOpen && !isFullNavOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            onAnimationComplete={(definition) => {
              if ((definition as any).height === 'auto') {
                setDrawerReady(true);
              }
            }}
            className="w-full pointer-events-auto overflow-hidden border-t border-primary-border/30 bg-background"
          >
            <div className="w-full px-8 pt-10 pb-8 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 relative min-h-[100px]">
              
              <div className="absolute top-2 left-6 h-4">
                {drawerReady && (
                  <Typewriter
                    text="Going somewhere?"
                    className="text-xs font-sans tracking-wider text-foreground-soft uppercase"
                  />
                )}
              </div>

              {navLinks.map((link, index) => (
                <motion.button
                  key={link.target}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.08, type: 'spring', stiffness: 100 }}
                  onMouseEnter={() => {
                    playTriggered(AudioId.TICK);
                  }}
                  onClick={() => {
                    onNavigate(link.target);
                    setIsOpen(false);
                  }}
                  className="text-primary-foreground hover:text-primary-foreground-hover font-medium tracking-wide text-base transition-colors relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-foreground transition-all duration-300 group-hover:w-full" />
                </motion.button>
              ))}

              {/* Right Corner: Full Site Navigation Map Trigger Toggle */}
              <div className="absolute top-2 right-6 h-4">
                <button
                onClick={onOpenFullNav}
                className="pointer-events-auto text-xs font-sans font-semibold tracking-widest text-foreground-secondary hover:text-foreground-secondary-hover uppercase px-3 py-1.5 transition-colors"
                >
                {isFullNavOpen ? '[ Close ]' : 'Table of Contents'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
