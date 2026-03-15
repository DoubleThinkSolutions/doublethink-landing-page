'use client';

import { Eye, BrainCircuit, Shield, Layers, Lock, Sliders, EyeOff } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

import ContactForm from '../ContactForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const EclipseLogo = () => (
  <img 
    src="/Eclipse-Logo-Color.png" 
    alt="ECLIPSE" 
    className="h-50 w-auto mb-6 object-contain" 
  />
);

const steps = [
  {
    title: "1. Monitor",
    desc: "Eclipse runs persistently on-device, processing screen frames and audio streams in real-time within your boundaries.",
    icon: Eye
  },
  {
    title: "2. Evaluate",
    desc: "Local architecture analyzes data against your structural alignment instantly, without outward connection.",
    icon: BrainCircuit
  },
  {
    title: "3. Interpose",
    desc: "You decide what gets blurred, muted, or flagged. Protection before perception.",
    icon: Shield
  },
  {
    title: "4. Log",
    desc: "Events are logged mathematically. The system remains radically legible without storing raw, compromised media.",
    icon: Layers
  }
];

export default function EclipseClient() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-teal-sovereign selection:text-cream-library">
      <Header />
      
      <main>
        {/* HERO SECTION */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-background border-b border-slate-deep"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2933_1px,transparent_1px),linear-gradient(to_bottom,#1f2933_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <EclipseLogo />
            <p className="font-sans text-lg sm:text-xl text-neural max-w-2xl leading-relaxed mb-10">
              Eclipse sits between your device and your senses. It is a sovereign software layer that lets you control what reaches your eyes and ears before it affects you.
            </p>
          </div>
        </motion.section>

        {/* STRUCTURAL ARCHITECTURE - PIPELINE VERSION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="py-32 px-6 bg-background border-b border-slate-deep relative overflow-hidden"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
              <div className="max-w-xl">
                <h2 className="font-display text-4xl uppercase tracking-tighter text-foreground">
                  The Interposition Loop
                </h2>
                <p className="font-sans text-neural mt-4 text-lg">
                  Structural alignment executing in <span className="text-teal-sovereign font-mono">milliseconds</span>.
                </p>
              </div>
              <div className="hidden md:block font-mono text-[10px] text-slate-deep uppercase tracking-[0.2em]">
                System_Status: Operational // Latency: 0.004ms
              </div>
            </div>
            
            {/* The Pipeline Interface */}
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-0 border border-slate-deep divide-y md:divide-y-0 md:divide-x divide-slate-deep bg-card">
              
              {/* Background Scanning Animation for the whole row */}
              <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(30,95,110,0.2)_50%,transparent_100%)] w-[200%] animate-[scan_8s_linear_infinite]" />
              </div>

              {steps.map((step, idx) => (
                <motion.div 
                key={idx} 
                variants={fadeInUp} 
                className="group relative p-8 md:p-10 flex flex-col transition-all duration-500 hover:bg-teal-sovereign/2 min-h-80"
              >
                {/* 1. Top Bar & Step ID */}
                <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-teal-sovereign transition-all duration-700" />
                
                <div className="flex items-center justify-between mb-8">
                  <div className="p-2 border border-slate-deep group-hover:border-teal-sovereign/50 transition-colors bg-background">
                    <step.icon size={20} className="text-teal-sovereign" strokeWidth={1} />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-slate-deep group-hover:text-amber-signal">
                    PHASE_0{idx + 1}
                  </span>
                </div>

                {/* 2. Fixed Title Area */}
                <div className="mb-6">
                  <h3 className="font-ui text-xs uppercase tracking-[0.3em] text-amber-signal/80 min-h-8 flex items-center">
                    {step.title.split('. ')[1]}
                  </h3>
                  {/* Decorative Technical Divider */}
                  <div className="w-12 h-px bg-slate-deep mt-2 group-hover:w-full group-hover:bg-teal-sovereign/30 transition-all duration-500" />
                </div>

                {/* 3. Description Area (Aligned to top) */}
                <div className="grow">
                  <p className="font-sans text-sm text-neural leading-relaxed group-hover:text-foreground transition-colors duration-500">
                    {step.desc}
                  </p>
                </div>

                {/* 4. Bottom Metric (Optional - Adds to the architecture feel) */}
                <div className="mt-8 font-mono text-[9px] uppercase tracking-widest text-slate-deep/50 overflow-hidden whitespace-nowrap">
                  LATENCY_CHECK: OK // STACK: LOCAL_OS
                </div>
              </motion.div>
              ))}
            </div>

            {/* Footer Technical readout */}
            <div className="mt-12 flex flex-wrap gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
              {['On-Device', 'Zero-Cloud', 'Verifiable', 'Sovereign'].map((tag) => (
                <div key={tag} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-teal-sovereign" />
                  <span className="font-mono text-[10px] uppercase tracking-widest">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* SYSTEM PHILOSOPHY */}
        <section className="py-24 px-6 bg-background relative overflow-hidden">
             <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
                
                {/* Left: Communication / Control */}
                <div className="flex-1">
                   <h3 className="font-display text-2xl uppercase tracking-widest text-foreground mb-6">Protection Before Perception</h3>
                   <p className="font-sans text-lg text-neural leading-relaxed mb-8">
                     Eclipse is built to protect your cognition without inducing panic. It functions quietly and confidently as a perceptual prosthetic. It does not scream danger or create anxiety; it simply handles what needs handling and lets you move through your digital world with steadiness and control.
                   </p>
                   <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                        <Sliders className="text-amber-signal mt-1 opacity-80" size={20} strokeWidth={1.5} />
                        <div>
                           <span className="block font-ui uppercase tracking-wider text-sm text-foreground mb-1">You Set the Boundaries</span>
                           <span className="font-sans text-neural text-sm leading-relaxed">You define the parameters of what is acceptable. The system enforces your structural alignment without judgment.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <EyeOff className="text-teal-sovereign mt-1 opacity-80" size={20} strokeWidth={1.5} />
                        <div>
                           <span className="block font-ui uppercase tracking-wider text-sm text-foreground mb-1">Unreactive Filtering</span>
                           <span className="font-sans text-neural text-sm leading-relaxed">Content is steadily blurred or muted. The system never escalates drama; it maintains a calm, protective baseline.</span>
                        </div>
                      </li>
                   </ul>
                </div>

                {/* Right: Sovereignty / Privacy */}
                <div className="flex-1 bg-card p-8 md:p-10 border border-slate-deep">
                   <div className="flex items-center gap-4 mb-8">
                      <Lock className="text-teal-sovereign opacity-80" size={24} strokeWidth={1.5} />
                      <h4 className="font-display text-xl uppercase tracking-widest text-foreground">Sovereignty by Design</h4>
                   </div>
                   
                   <div className="space-y-8">
                      <div>
                         <h5 className="font-ui text-sm uppercase tracking-wider text-foreground mb-2">Immutable Privacy</h5>
                         <p className="font-sans text-sm text-neural leading-relaxed">
                           Eclipse processes entirely on-device. There are no hidden connections and no cloud APIs parsing your sensory environment. Trust is engineered into the local architecture.
                         </p>
                      </div>
                      
                      <div>
                         <h5 className="font-ui text-sm uppercase tracking-wider text-foreground mb-2">Radical Legibility</h5>
                         <p className="font-sans text-sm text-neural leading-relaxed">
                           Protection must never become manipulation. When Eclipse interposes, the action is labeled and inspectable. The system explains itself, ensuring that your perception is protected, not curated by a black box.
                         </p>
                      </div>

                      <div className="pt-6 border-t border-slate-deep">
                         <div className="flex justify-between font-ui text-xs tracking-widest text-neural uppercase mb-3">
                            <span>Processing Latency</span>
                            <span className="text-teal-sovereign">Millisecond Scale</span>
                         </div>
                         <div className="w-full bg-slate-deep h-0.5 overflow-hidden">
                            <div className="bg-amber-signal w-1/4 h-full"></div>
                         </div>
                      </div>
                   </div>
                </div>

             </div>
        </section>

        {/* CONTACT SECTION */}
        <motion.section 
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-6 bg-background border-t border-slate-deep"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl text-foreground mb-4 uppercase tracking-wide">Initiate Contact</h2>
            <p className="font-sans text-neural mb-10">
              Engage with Project Guy and secure your cognitive sovereignty.
            </p>
            <div className="bg-background p-8 border border-slate-deep text-left shadow-2xl shadow-black/50">
              <ContactForm source='eclipse' />
            </div>
          </div>
        </motion.section>

      </main>
      <Footer />
    </div>
  );
}
