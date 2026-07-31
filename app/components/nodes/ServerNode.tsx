import { AnimatePresence, motion } from "framer-motion";
import { AnimationStep } from "./AnimationStep";

export default function ServerNode({ animStep }: { animStep: AnimationStep }) {
  return (
    <div className="absolute left-[50%] top-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 select-none z-20">
      {/* Absolute Dynamic Overlay Panel for Server State Animations */}
      <div className="absolute -top-14 h-12 w-44 flex items-center justify-center font-sans pointer-events-none">
        <AnimatePresence mode="wait">
          {animStep === 'server_score' && (
            <motion.div
              key="score"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [1.1, 1, 1, 0.75] }}
              transition={{ duration: 1.4, times: [0, 0.15, 0.8, 1] }}
              className="text-xs font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-md shadow-sm tracking-wider"
            >
              TRUST_SCORE: 95
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Physical Hardware Chassis Stack */}
      <div className="w-36 bg-white border border-gray-200 rounded-xl p-2 shadow-xl flex flex-col space-y-1.5">
        
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-5 bg-gray-50 border border-gray-100 rounded px-2 flex items-center justify-between">
            <div className="flex space-x-1 items-center">
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="w-8 h-0.5 bg-gray-200 rounded" />
            </div>
            <div className="flex space-x-1">
              <motion.div 
                animate={{ opacity: [0.4, 1, 0.4] }} 
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }} 
                className="w-1 h-1 rounded-full bg-emerald-500" 
              />
              <div className="w-1 h-1 rounded-full bg-blue-500 opacity-60" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
