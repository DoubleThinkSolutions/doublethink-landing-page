import { StepComponentProps } from "@/app/lib/stepComponents";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimationStep } from "../nodes/AnimationStep";
import LaptopNode from "../nodes/LaptopNode";
import PhoneNode from "../nodes/PhoneNode";
import ServerNode from "../nodes/ServerNode";
import { Typewriter } from "../Typewriter";

export default function OspOverviewStep({ onAnimationComplete }: StepComponentProps) {
  const [animStep, setAnimStep] = useState<AnimationStep>('idle');

  useEffect(() => {
    // Fallback
    const timer = setTimeout(() => {
      if (onAnimationComplete) onAnimationComplete();
    }, 25000);
    
    return () => clearTimeout(timer);
  }, []);

  const triggerPipeline = () => {
    if (animStep !== 'idle' && animStep !== 'complete') return;
    setAnimStep('flash');
  };

  useEffect(() => {
    if (animStep === 'flash') {
      const timer = setTimeout(() => setAnimStep('packet1'), 100);
      return () => clearTimeout(timer);
    }
    if (animStep === 'server_sign') {
      const timer = setTimeout(() => setAnimStep('server_score'), 1400);
      return () => clearTimeout(timer);
    }
    if (animStep === 'server_score') {
      const timer = setTimeout(() => setAnimStep('packet2'), 1500);
      return () => clearTimeout(timer);
    }
    if (animStep === 'laptop_show') {
      const timer = setTimeout(() => {
        setAnimStep('complete');
        if (onAnimationComplete) onAnimationComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [animStep, onAnimationComplete]);

  return (
    <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center justify-center px-4 py-8">
      
      {/* LEFT COLUMN: EXPLANATORY BLOCK */}
      <div className="lg:col-span-5 flex flex-col space-y-4 text-left select-none">
        
        <Typewriter
            text="The Open Source Panopticon is our solution to online misinformation." 
            delay={0.2} 
            className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900"
        />
        
        <Typewriter
            text="When media is captured with the OSP app, it is immediately uploaded with 92-channels of sensor data to our secure server.
The server cryptographicaly signs the package and assigns it a trust score, establishing the ground truth for events around the world." 
            delay={3.5} 
            className="text-sm md:text-base text-gray-600 leading-relaxed"
            speedScale={0.08}
        />
      </div>

      {/* RIGHT COLUMN: INTERACTIVE VISUALIZATION GRAPHIC */}
      <div className="lg:col-span-7 w-full aspect-4/3 max-h-[380px] sm:max-h-[420px] relative overflow-hidden flex items-center justify-center">
        
        {/* Absolute Background SVG Infrastructure: Dashed Structural Network Pipelines */}
        <svg className="absolute inset-0 w-full h-full text-gray-200" preserveAspectRatio="none" viewBox="0 0 100 100">
          <line x1="15" y1="75" x2="50" y2="25" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
          <line x1="50" y1="25" x2="85" y2="75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
        </svg>

        {/* Dynamic Flying Data Packets Traveling the Vector Layout Channels */}
        <AnimatePresence>
          {animStep === 'packet1' && (
            <motion.div
              initial={{ left: '15%', top: '75%', scale: 0.6, opacity: 0 }}
              animate={{ left: '50%', top: '25%', scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              onAnimationComplete={() => setAnimStep('server_sign')}
              className="absolute w-7 h-7 bg-white border border-blue-500 rounded-md shadow-lg flex items-center justify-center text-blue-500 z-40 -translate-x-1/2 -translate-y-1/2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </motion.div>
          )}

          {animStep === 'packet2' && (
            <motion.div
              initial={{ left: '50%', top: '25%', scale: 0.6, opacity: 0 }}
              animate={{ left: '85%', top: '75%', scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              onAnimationComplete={() => setAnimStep('laptop_show')}
              className="absolute w-7 h-7 bg-white border border-emerald-500 rounded-md shadow-lg flex items-center justify-center text-emerald-500 z-40 -translate-x-1/2 -translate-y-1/2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hardware Node UI Graphics Group */}
        <PhoneNode animStep={animStep} onCapture={triggerPipeline} />
        <ServerNode animStep={animStep} />
        <LaptopNode animStep={animStep} />
      </div>

    </div>
  );
}
