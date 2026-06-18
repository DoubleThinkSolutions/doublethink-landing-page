'use client';

import { motion, Variants } from 'framer-motion';
import { useEffect } from 'react';
import { Typewriter } from './Typewriter';
import { useAudio } from '../context/AudioContext';
import { AudioId } from '../lib/audioConfig';

interface NavLink {
  label: string;
  target?: string;
  href?: string;
}

interface NavCategory {
  title: string;
  links: NavLink[];
}

interface FullSiteNavProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (targetId: string) => void;
}

export function FullSiteNav({ isOpen, onClose, onNavigate }: FullSiteNavProps) {
  const { playTriggered } = useAudio();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);
  
  const categories: NavCategory[] = [
    {
      title: 'General',
      links: [
        { label: 'Guy', target: 'greeting' },
        { label: 'About Us', target: 'about' },
        { label: 'Contact Team', target: 'contact' },
      ],
    },
    {
      title: 'OSP Ecosystem',
      links: [
        { label: 'Overview', target: 'osp_overview' },
        { label: 'Sensor Channels', target: 'sensor_channels' },
        { label: 'Web Platform', target: 'osp_web' },
      ],
    },
    {
      title: 'Social & Network',
      links: [
        { label: 'GitHub Profile', href: 'https://github.com/DoubleThinkSolutions' },
        { label: 'LinkedIn Network', href: 'https://www.linkedin.com/company/doublethink-solutions' },
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { y: '100%' },
    visible: {
      y: 0,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 150,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      y: '100%',
      transition: { type: 'spring', damping: 30, stiffness: 200 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute inset-0 z-40 bg-background/40 backdrop-blur-xl flex flex-col justify-between p-8 sm:p-16 overflow-y-auto"
    >
      {/* Top Banner Row */}
      <div className="w-full flex justify-between items-center border-b border-primary-border/50 pb-6">
        <Typewriter
          text="There's so much more to see..."
          delay={0.1}
          className="font-sans text-sm tracking-widest text-foreground-soft uppercase"
        />
        <button
          onClick={onClose}
          className="text-xs font-sans uppercase tracking-wider text-primary-foreground hover:text-primary-foreground-hover px-3 py-1 rounded border border-primary-border hover:border-primary-foreground-hover transition-colors"
        >
          Close [Esc]
        </button>
      </div>

      {/* Main Grid Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-auto py-12 max-w-5xl w-full mx-auto">
        {categories.map((category, index) => (
          <motion.div key={index} variants={itemVariants} className="flex flex-col gap-6">
            <h3 className="font-sans text-xs text-primary-foreground font-bold uppercase tracking-widest border-l-2 border-primary-foreground pl-3">
              {category.title}
            </h3>
            <ul className="flex flex-col gap-4">
              {category.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  {link.target ? (
                    <button
                      onClick={() => {
                        onNavigate(link.target!);
                        onClose();
                      }}
                      onMouseEnter={() => playTriggered(AudioId.TICK)}
                      className="text-2xl sm:text-3xl font-bold text-primary-foreground hover:text-primary-foreground-hover transition-colors text-left block group"
                    >
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                        {link.label}
                      </span>
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => playTriggered(AudioId.TICK)}
                      className="text-2xl sm:text-3xl font-bold text-foreground-soft hover:text-primary-foreground-hover transition-colors text-left block group"
                    >
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                        {link.label} <span className="text-sm font-normal align-super">↗</span>
                      </span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Minimal Footer Spacer / Counterweight */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-sans text-foreground-soft/50 border-t border-primary-border/20 pt-4">
        <div className="w-full text-center text-xs font-sans text-foreground-soft/50">
          © 2026 Doublethink Solutions. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a 
            href="/privacy"
            onMouseEnter={() => playTriggered(AudioId.TICK)}
            className="hover:text-foreground-soft transition-colors underline underline-offset-2 decoration-foreground-soft/30 hover:decoration-current"
            >
            Privacy Policy
          </a>
        </div>
      </div>
    </motion.div>
  );
}
