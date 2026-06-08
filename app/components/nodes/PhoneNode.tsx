import { AnimatePresence, motion } from "framer-motion";

import { AnimationStep } from "./AnimationStep";
import { useAudio } from "@/app/context/AudioContext";
import { AudioId } from "@/app/lib/audioConfig";

export interface PhoneNodeProps {
  animStep: AnimationStep;
  onCapture: () => void;
}

export default function PhoneNode({ animStep, onCapture }: PhoneNodeProps) {
  const { playTriggered } = useAudio();
  return (
    <div className="absolute left-[20%] top-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 select-none z-20">
      <div className="w-20 h-36 bg-white border-2 border-gray-200 rounded-2xl p-1.5 relative shadow-xl flex flex-col justify-between">
        {/* Inner Screen */}
        <div className="w-full h-full bg-gray-50 rounded-[10px] overflow-hidden relative border border-gray-100 flex flex-col justify-between items-center py-2">
          {/* Camera Notch */}
          <div className="w-6 h-2 bg-gray-200 rounded-full" />
          
          {/* Mock Camera Viewfinder UI */}
          <div className="w-12 h-12 border border-dashed border-gray-300 rounded flex items-center justify-center opacity-60">
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            </svg>
          </div>

          {/* Capture Trigger Button */}
          <button
            onClick={() => {
              playTriggered(AudioId.CLACK);
              onCapture();
            }}
            disabled={animStep !== 'idle' && animStep !== 'complete'}
            className="w-7 h-7 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm z-30"
          >
            <div className="w-4 h-4 rounded-full bg-gray-900" />
          </button>

          {/* Flash Animation Overlay */}
          <AnimatePresence>
            {animStep === 'flash' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute inset-0 bg-white z-20 pointer-events-none"
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
