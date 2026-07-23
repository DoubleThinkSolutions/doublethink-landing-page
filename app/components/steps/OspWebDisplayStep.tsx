import { StepComponentProps } from "@/app/lib/stepComponents";
import { Typewriter } from "../Typewriter";
import { ExternalLink } from "lucide-react";

export default function OspWebDisplayStep({ onAnimationComplete }: StepComponentProps) {

  return (
    <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center justify-center px-4 py-8 mx-auto">
      
      {/* LEFT COLUMN: EXPLANATORY TYPEWRITER BLOCK */}
      <div className="lg:col-span-5 flex flex-col space-y-5 text-left select-none">
        <Typewriter
          text="Explore Verified Media via the OSP Public Platform." 
          delay={0.2} 
          className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground"
        />

        <Typewriter
          text="Watch as media gets uploaded live or filter for a specific time down to the minute. View the sensor data and watch it change frame by frame." 
          delay={2.8} 
          className="text-sm md:text-base text-foreground-secondary leading-relaxed"
          onComplete={onAnimationComplete}
          speedScale={0.1}
        />
      </div>

      {/* RIGHT COLUMN: LARGER STANDALONE LAPTOP SHOWCASING LIVE SCREENSHOT */}
      <div className="lg:col-span-7 w-full flex items-center justify-center py-6">
        <div className="flex flex-col items-center relative select-none">
          
          {/* Upscaled Laptop Display Shell */}
          <div className="w-72 h-44 sm:w-96 sm:h-56 bg-white border-[3px] border-gray-200 rounded-t-2xl p-2 shadow-2xl relative">
            <div className="w-full h-full bg-gray-50 rounded-lg border border-gray-100 relative overflow-hidden flex items-center justify-center">
              
              <img 
                src="/OSP-Web-Screen.png" 
                alt="OSP Web Platform Dashboard and Map Interface" 
                className="w-full h-full object-cover select-none"
                draggable={false}
              />

                <a
                  href="https://osp.doublethinksolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute flex items-center space-x-2 bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 transform hover:scale-105 backdrop-blur-sm"
                >
                  <span>Visit</span>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              
            </div>
          </div>

          {/* Upscaled Laptop Deck Base Platform */}
          <div className="w-80 h-3.5 sm:w-[440px] sm:h-4 bg-gray-200 rounded-b-2xl border-x-2 border-b-2 border-gray-300 relative shadow-md">
            {/* Front Lip Display Notch */}
            <div className="w-16 h-1 bg-gray-300 rounded-full mx-auto mt-px" />
          </div>

        </div>
      </div>

    </div>
  );
}
