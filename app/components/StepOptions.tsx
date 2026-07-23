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
      ? "relative sm:absolute sm:bottom-20 left-1/2 -translate-x-1/2 items-center" 
      : "items-center",
    left: isOverlapping 
      ? "relative sm:absolute sm:bottom-20 sm:left-1/6 sm:translate-x-0 items-center sm:items-start" 
      : "items-center sm:pl-[0.15%] sm:items-start",
    right: isOverlapping 
      ? "relative sm:absolute sm:bottom-20 sm:right-1/6 sm:left-auto sm:translate-x-0 items-center sm:items-end" 
      : "items-center sm:pr-[0.15%] sm:items-end"
  };

  return (
    <div 
      className={`
        w-full flex flex-col gap-3 pointer-events-none z-20 shrink-0
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
              px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-primary-border 
              bg-primary/70 backdrop-blur-md hover:bg-primary-hover 
              text-base sm:text-xl font-medium transition-colors shadow-lg pointer-events-auto
            `}
          >
            {option.label}
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  );
}
