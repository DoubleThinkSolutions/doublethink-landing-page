import { AnimatePresence, motion } from "framer-motion";
import { AnimationStep } from "./AnimationStep";

export default function LaptopNode({ animStep }: { animStep: AnimationStep }) {
  const isShowMapElements = animStep === 'laptop_show' || animStep === 'complete';

  return (
    <div className="absolute right-[0%] top-[75%] -translate-y-1/2 flex flex-col items-center gap-2 select-none z-20">
      <div className="flex flex-col items-center relative">
        {/* Laptop Display Shell */}
        <div className="w-44 h-28 bg-white border-2 border-gray-200 rounded-t-xl p-1.5 shadow-xl relative">
          <div className="w-full h-full bg-gray-50 rounded-md border border-gray-100 relative overflow-hidden flex items-center justify-center">
            
            {/* Base Background: Minimal Stylized Grid Map Layout */}
            <svg className="absolute inset-0 w-full h-full text-gray-200" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M0 20 H180 M0 65 H180 M0 90 H180 M40 0 V120 M110 0 V120 M145 0 V120" />
              <path d="M-10 40 L60 110 M100 -10 L160 50" strokeWidth="1.5" className="opacity-40" />
            </svg>

            {/* Interactive/Animated Layers on Screen */}
            <AnimatePresence>
              {isShowMapElements && (
                <>
                  {/* Map Pin Target Marker */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 180, damping: 12 }}
                    className="absolute left-[55%] top-[45%] -translate-x-1/2 -translate-y-1/2 z-10"
                  >
                    <svg className="w-5 h-5 text-blue-500 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-12-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </motion.div>

                  {/* Fading Hover Mock Visual Popover Thumbnail */}
                  <motion.div
                    initial={{ opacity: 0, y: 4, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="absolute left-[55%] top-[14%] -translate-x-1/2 p-1 bg-white border border-gray-200 rounded shadow-md z-20 flex items-center justify-center"
                  >
                    <div className="w-7 h-5 bg-blue-500/10 border border-blue-500/20 rounded flex items-center justify-center text-blue-500">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Laptop Deck Base Platform */}
        <div className="w-52 h-2.5 bg-gray-200 rounded-b-xl border-x border-b border-gray-300 relative">
          <div className="w-10 h-0.5 bg-gray-300 rounded-full mx-auto mt-px" />
        </div>
      </div>
    </div>
  );
}
