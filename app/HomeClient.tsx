'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Typewriter } from './components/Typewriter';
import { SITE_FLOW } from './lib/flowData';
import { FooterNav } from './components/FooterNav';
import { FullSiteNav } from './components/FullSiteNav';
import { STEP_COMPONENTS } from './lib/stepComponents';
import StepOptions from './components/StepOptions';
import { useAudio } from './context/AudioContext';
import { AudioControls, SubtitleDisplay } from './components/AudioOverlays';
import { AudioId } from './lib/audioConfig';
import { ThemeControls } from './components/ThemeControls';
import { useRouter, useSearchParams } from 'next/navigation';

const GuyLogo = () => (
  <img
    src="/Infinity-Logo-Color.png"
    alt="PROJECT GUY"
    className="w-xl h-xl sm:w-l sm:h-l object-contain relative z-10"
  />
);

export default function HomeState() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const currentStepId = searchParams.get('p') || 'greeting';

  const [stage, setStage] = useState<'floating' | 'chat'>('floating');
  const [showOptions, setShowOptions] = useState(false);
  const [isSiteNavOpen, setIsSiteNavOpen] = useState(false);

  const { playTriggered } = useAudio();

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage('chat');
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleOptionClick = (targetId: string) => {
    setShowOptions(false);
    setIsSiteNavOpen(false);

    const params = new URLSearchParams(searchParams.toString());
    params.set('p', targetId);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const isChatMode = stage === 'chat';
  const currentStepData = SITE_FLOW[currentStepId];

  const ActiveStepComponent = currentStepData?.componentId 
    ? STEP_COMPONENTS[currentStepData.componentId] 
    : null;

  return (
    <main className="relative w-full h-screen bg-background flex items-center justify-center overflow-hidden">
      
      <ThemeControls />
      <SubtitleDisplay />
      <AudioControls />

      {/* Background & Logo Container */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center overflow-visible w-full"
        initial={{ filter: 'blur(0px)', opacity: 1 }}
        animate={{ 
          filter: isChatMode ? 'blur(16px)' : 'blur(0px)', 
          opacity: isChatMode ? 0.3 : 1
        }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <div className="relative flex flex-col items-center justify-center gap-6 overflow-visible w-full">

          <motion.div 
            className="absolute w-full h-[200%] rounded-full opacity-10 bg-[radial-gradient(circle,rgba(56,189,248,0.35)_0%,rgba(168,85,247,0.15)_50%,transparent_70%)] blur-3xl pointer-events-none"
            animate={{ 
              scale: [0.9, 1.1, 0.9],
              opacity: [0.05, 0.2, 0.05]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          />
        
          {/* Floating Animation Wrapper for Logo */}
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="drop-shadow-2xl z-10 relative flex items-center justify-center overflow-visible"
          >
            <GuyLogo />

            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] z-20 mix-blend-multiply pointer-events-none"
              animate={{
                '--g-tightness': ['100%', '70%', '100%'], 
                '--g-strength': [0.1, 0.25, 0.1], 
              }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              style={{
                backgroundImage: `
                  radial-gradient(
                    circle at center, 
                    transparent 0%,
                    rgba(168, 85, 247, calc(var(--g-strength) * 0.3)) calc(100% - (var(--g-tightness) * 0.5)), 
                    rgba(30, 41, 59, var(--g-strength)) var(--g-tightness)
                  )
                `
              }}
            />
          </motion.div>

          {/* Dynamic Pulsing Shadow Underneath */}
          <motion.div
            animate={{ 
              scale: [0.7, 1.1, 0.7], 
              opacity: [0.2, 0.5, 0.2] 
            }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="w-96 h-6 bg-gray-900/20 rounded-full blur-lg mt-2"
          />
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {isChatMode && currentStepData && !isSiteNavOpen && (
          <motion.div 
            key={currentStepId}
            className="z-10 absolute inset-0 flex flex-col items-center justify-center max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >

            {/* Guy's Text */}
            <div className="flex-1 flex items-center justify-center w-full min-h-[50vh]">
              {ActiveStepComponent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full flex justify-center"
                >
                  <ActiveStepComponent onAnimationComplete={() => setShowOptions(true)} />
                </motion.div>
              ) : (
                currentStepData.text && (
                  <Typewriter 
                    text={currentStepData.text} 
                    delay={0.2} 
                    className="text-3xl sm:text-5xl lg:text-6xl text-center p-8 font-bold text-foreground"
                    onComplete={() => setShowOptions(true)}
                  />
                )
              )}
            </div>

            <StepOptions 
              options={currentStepData.options}
              showOptions={showOptions}
              onOptionClick={(targetId) => {
                handleOptionClick(targetId);
                playTriggered(AudioId.CLICK);
              }}
              isOverlapping={!!ActiveStepComponent}
              side={currentStepData.optionsSide}
            />

          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-Page Screen Navigation Mega-Menu Overlay */}
      <AnimatePresence>
        {isSiteNavOpen && (
          <FullSiteNav 
            isOpen={isSiteNavOpen}
            onClose={() => setIsSiteNavOpen(false)}
            onNavigate={(targetId) => handleOptionClick(targetId)}
          />
        )}
      </AnimatePresence>

      {!isSiteNavOpen &&
        <FooterNav 
          onNavigate={(targetId) => handleOptionClick(targetId)} 
          onOpenFullNav={() => setIsSiteNavOpen(!isSiteNavOpen)}
          isFullNavOpen={isSiteNavOpen}
        />
      }
      
    </main>
  );
}
