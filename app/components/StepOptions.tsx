import { AnimatePresence, motion } from "framer-motion";

interface Option {
  label: string;
  target: string;
}

interface StepOptionsProps {
  options: Option[];
  showOptions: boolean;
  onOptionClick: (target: string) => void;
  isOverlapping: boolean;
  side?: 'right' | 'left' | 'center';
}

export default function StepOptions({ options, showOptions, onOptionClick, isOverlapping, side = 'center' }: StepOptionsProps) {
  const positionClasses = {
    center: isOverlapping 
      ? "absolute bottom-20 left-1/2 -translate-x-1/2 items-center" 
      : "items-center",
    left: isOverlapping 
      ? "absolute bottom-20 sm:left-1/6 sm:translate-x-0 items-center sm:items-start" 
      : "items-center sm:pl-[0.15%] sm:items-start",
    right: isOverlapping 
      ? "absolute bottom-20 sm:right-1/6 sm:left-auto sm:translate-x-0 items-center sm:items-end" 
      : "items-center sm:pr-[0.15%] sm:items-end"
  };

  return (
    <div 
      className={`
        w-full flex flex-col gap-4
        ${isOverlapping ? "z-20" : "h-[30vh] justify-start pointer-events-none"}
        ${positionClasses[side]}
      `}
    >
      <AnimatePresence>
        {showOptions && options.map((option, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(index, 0) * 0.1, duration: 0.3 }}
            onClick={() => onOptionClick(option.target)}
            className={`
            px-8 py-4 rounded-full border border-gray-300 
            bg-white/70 backdrop-blur-md hover:bg-gray-100 
            text-lg sm:text-xl font-medium transition-colors shadow-lg pointer-events-auto
            ${index > 0 ? "hidden sm:block" : ""} 
            `}
            >
            {option.label}
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  );
}
