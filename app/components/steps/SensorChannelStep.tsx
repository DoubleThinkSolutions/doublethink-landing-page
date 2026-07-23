'use client';

import { useRef, useState, MouseEvent } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { SENSOR_CHANNELS, SensorChannel } from '@/app/lib/sensorChannels';
import { StepComponentProps } from '@/app/lib/stepComponents';
import { useAudio } from '@/app/context/AudioContext';
import { AudioId } from '@/app/lib/audioConfig';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function SensorChannelsStep({ onAnimationComplete }: StepComponentProps) {
  const [hoveredChannel, setHoveredChannel] = useState<SensorChannel | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const { playTriggered } = useAudio();

  const radius = 130;
  const totalChannels = SENSOR_CHANNELS.length;

  const handleMouseEnter = () => {
    if (containerRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!rectRef.current && containerRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect();
    }
    if (!rectRef.current) return;

    const rect = rectRef.current;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);

    if (distance < 50 || distance > radius + 300) {
      setHoveredChannel(null);
      return;
    }

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    if (angle < 0) angle += 360;

    const anglePerStep = 360 / totalChannels;
    
    const closestIndex = Math.floor((angle + anglePerStep / 2) % 360 / anglePerStep);

    const targetChannel = SENSOR_CHANNELS[closestIndex];
    if (hoveredChannel?.id !== targetChannel.id) {
      playTriggered(AudioId.TICK);
      setHoveredChannel(targetChannel);
    }
  };

  const handleMouseLeave = () => {
    rectRef.current = null;
    setHoveredChannel(null);
  };

  const handleAnimationComplete = () => {
    const timer = setTimeout(() => {
      if (onAnimationComplete) onAnimationComplete()
    }, 3000);
    
    return () => clearTimeout(timer);
  }

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      onAnimationComplete={handleAnimationComplete}
      className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center justify-center px-4"
    >

      {/* LEFT SIDE: Interactive Radial Text Wheel */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex items-center justify-center w-full aspect-square order-1 shrink-0 mx-auto"
      >
        <motion.div 
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          variants={containerVariants}
          className="relative flex items-center justify-center h-96 sm:h-[400px] md:h-[450px] w-full select-none cursor-default py-12 pointer-events-none"
        >
          
          {/* Central Display Area for Channel Code */}
          <motion.div 
            variants={itemVariants}
            className="absolute flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary/50 backdrop-blur-sm border border-primary-border/50 shadow-inner z-10"
          >
            <AnimatePresence mode="popLayout">
              <motion.span
                key={hoveredChannel ? hoveredChannel.code : 'empty'}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="font-sans text-xl font-bold tracking-wider text-foreground-soft"
              >
                {hoveredChannel ? hoveredChannel.code : '---'}
              </motion.span>
            </AnimatePresence>
            <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-foreground-soft mt-0.5 md:mt-1 font-medium">
              Channel
            </span>
          </motion.div>

          {/* Radial Layout Elements */}
          {SENSOR_CHANNELS.map((channel, index) => {
            const totalChannels = SENSOR_CHANNELS.length;
            const angle = (index / totalChannels) * 360;
            const isCurrentHovered = hoveredChannel?.id === channel.id;

            return (
              <motion.div
                key={channel.id}
                className="absolute origin-left pointer-events-none"
                style={{
                  transform: `rotate(${angle}deg) translateX(${radius}px)`,
                  top: '50%',
                  left: '50%',
                }}
                variants={{
                  hidden: { opacity: 0, transform: `rotate(${angle}deg) translateX(${radius - 15}px)` },
                  visible: { 
                    opacity: 1, 
                    transform: `rotate(${angle}deg) translateX(${radius}px)`,
                    transition: {
                      delay: index * 0.01,
                      duration: 0.4,
                      ease: 'easeOut'
                    }
                  }
                }}
              >
                <motion.div
                  className="whitespace-nowrap px-3 py-1 text-xs font-medium transition-colors duration-300 focus:outline-none"
                  animate={{
                    letterSpacing: isCurrentHovered ? '0.12em' : '0.02em',
                    color: isCurrentHovered 
                      ? 'var(--color-foreground)' 
                      : 'var(--color-foreground-secondary)',
                    scale: isCurrentHovered ? 1.05 : 1,
                  }}
                  style={{
                    transformOrigin: 'left center',
                  }}
                >
                  {/* Visual indicator prefix line */}
                  <span className={`inline-block w-2 h-0.5 mr-2 bg-current transition-opacity ${isCurrentHovered ? 'opacity-100' : 'opacity-40'}`} />
                  <span className="transition-colors">
                    {channel.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* RIGHT SIDE: Context Details Block */}
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } }
        }}
        className="relative w-full h-60 md:h-[280px] flex flex-col justify-start p-2 md:p-8 overflow-hidden pointer-events-none z-10 order-2 shrink-0"
      >

        <AnimatePresence mode="popLayout">
          {!hoveredChannel ? (
            /* DEFAULT / NON-HOVERED VIEW */
            <motion.div
              key="default-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-sm md:text-lg text-foreground-soft leading-relaxed font-normal italic text-center md:text-left"
            >
              Hover over a channel name to learn more.
            </motion.div>
          ) : (
            /* ACTIVE CHANNEL HOVER VIEW */
            <motion.div
              key={hoveredChannel.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col space-y-2 md:space-y-4 pointer-events-none bg-primary/10 md:bg-transparent p-3 md:p-0 rounded-xl backdrop-blur-sm md:backdrop-blur-none border border-primary-border/40 md:border-none shadow-lg md:shadow-none"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between md:flex-col md:items-start md:justify-start gap-1">
                <h3 className="text-base md:text-2xl font-bold tracking-tight text-foreground">
                  {hoveredChannel.name}
                </h3>
                
                <div className="flex flex-wrap items-center gap-1.5 md:mt-2">
                  <span className="text-[9px] md:text-[11px] px-2 py-0.5 font-bold tracking-wider rounded-md border border-primary-border text-primary-foreground">
                    {hoveredChannel.sampleType}
                  </span>
                </div>
              </div>

              <div className="text-primary-foreground text-xs md:text-base leading-relaxed line-clamp-2 sm:line-clamp-none">
                {hoveredChannel.description}
              </div>

              <div className="pt-2 md:pt-4 border-t border-secondary-border flex flex-col space-y-2">
                <span className="text-[9px] md:text-xs font-semibold tracking-widest text-secondary-foreground uppercase shrink-0">
                  Components ({hoveredChannel.dims}D):
                </span>
                <div className="flex flex-col space-y-2 w-full max-h-40 overflow-y-auto pr-1">
                  {hoveredChannel.components.map((comp, idx) => (
                    <div 
                      key={`${comp.name}-${idx}`}
                      className="text-xs md:text-sm text-secondary-foreground bg-secondary/30 p-2 rounded border border-secondary-border flex flex-col space-y-1"
                    >
                      <div className="flex justify-between items-center font-sans">
                        <span className="font-semibold text-foreground">{comp.name}</span>
                        <span className="text-[10px] font-mono bg-secondary px-1.5 py-0.5 rounded border border-secondary-border">
                          {comp.unit}
                        </span>
                      </div>
                      <div className="flex space-x-4 text-[11px] text-foreground-soft font-mono">
                        <span>Indices: {comp.indices.start === comp.indices.endInclusive ? comp.indices.start : `${comp.indices.start}-${comp.indices.endInclusive}`}</span>
                        <span>Type: {comp.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
