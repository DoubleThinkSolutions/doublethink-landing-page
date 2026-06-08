import { StepComponentProps } from "@/app/lib/stepComponents";
import { Typewriter } from "../Typewriter";

export default function AboutStep({ onAnimationComplete }: StepComponentProps) {

  return (
    <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-top justify-center px-4 py-8">
      
      {/* LEFT COLUMN */}
      <div className="lg:col-span-5 flex flex-col space-y-4 text-left select-none">
        
        <Typewriter
            text="About Doublethink Solutions" 
            delay={0.2} 
            className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900"
        />
        
        <Typewriter
            text="DoubleThink Solutions is what David Berlekamp's lived architecture became when it needed a company to live in. Through Open Source Panopticon, Project Guy, and the infinite local AI memory of Serapeum, the company puts verified evidence, sovereign cognition, and durable memory into the device the user already owns. The work exists where personal necessity becomes civic infrastructure." 
            delay={1.5} 
            className="text-sm md:text-base text-gray-600 leading-relaxed"
            speedScale={0.1}
        />
      </div>

      {/* RIGHT COLUMN */}

      <div className="lg:col-span-5 flex flex-col space-y-4 text-right select-none">
        <Typewriter
            text="The team wants to hear from you." 
            delay={3.0} 
            className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-900"
            onComplete={onAnimationComplete}
        />
      </div>

    </div>
  );
}
