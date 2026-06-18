import { useTheme } from "@/app/context/ThemeProvider";
import { StepComponentProps } from "@/app/lib/stepComponents";
import { motion } from "framer-motion";

export default function OspIntroStep({ onAnimationComplete }: StepComponentProps) {
  const { theme } = useTheme();

  const isInvertedTheme = ['dark', 'blue-yellow', 'green-magenta'].includes(theme);
  const logoSrc = isInvertedTheme ? "/OSP-Logo-Inverted.png" : "/OSP-Logo-Color.png";

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full max-w-xl mx-auto px-4 text-center">
      
      <motion.div
        initial={{ opacity: 0, scale: 5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut" 
        }}
        onAnimationComplete={onAnimationComplete}
        className="relative mb-12"
      >
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative drop-shadow-xl filter"
        >
          <img 
            key={logoSrc}
            src={logoSrc}
            alt="OSP Logo" 
            className="w-40 h-40 md:w-64 md:h-64 object-contain select-none"
            draggable={false}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
