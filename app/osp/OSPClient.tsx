'use client';

import { Camera, Shield, Lock, Globe, ArrowRight } from 'lucide-react';
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

const OSPLogo = () => (
  <>
  <img 
    src="/OSP-Logo-Color.png" 
    alt="OSP"
    className="h-64 w-auto mb-6 object-contain dark:brightness-150 block dark:hidden" 
  />

  <img 
    src="/OSP-Logo-Inverted.png" 
    alt="OSP"
    className="h-64 w-auto mb-6 object-contain dark:brightness-150 hidden dark:block" 
  />
  </>
);

const architectureSteps = [
  {
    title: "Capture",
    number: "01",
    desc: "We start with the device you already own. Your experiences and memories are gathered securely, creating a private library without silently sending your data to the cloud.",
    icon: Camera
  },
  {
    title: "Protect",
    number: "02",
    desc: "Acting as a cognitive immune system, the tool can gently soften or filter harmful content, protecting your attention before you are overwhelmed by the noise.",
    icon: Shield
  },
  {
    title: "Empower",
    number: "03",
    desc: "You always remain in charge of the rules. Nothing is secretly deleted or censored. We provide transparent tools and context, never overriding your personal judgment.",
    icon: Lock
  }
];

const techSpecs = [
  {
    title: "On-Device Protection",
    description: "The system works directly on the device you already own. It does not silently send your information to distant servers or sell your memories to advertisers. Your data stays yours."
  },
  {
    title: "Tools, Not Authority",
    description: "We provide transparency, not censorship. The system does not decide what is true or false for you. It empowers you with context, ensuring nothing is hidden without your knowledge."
  },
  {
    title: "A Natural Evolution",
    description: "Technology has evolved quickly, and this is the natural next step. First, we protected our personal data. Now, we provide a stabilizing layer to protect your perception."
  }
];

export default function OSPClient() {
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
          {/* Swapped hardcoded #1f2933 for adaptive var(--color-slate-deep) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-slate-deep)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-slate-deep)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <OSPLogo />
            <p className="font-sans text-lg sm:text-xl text-neural max-w-2xl leading-relaxed mb-10">
              Open Source Panopticon cryptographically verifies real-world events at the moment they are recorded, creating trusted public evidence in a world flooded with synthetic media.
            </p>
          </div>
        </motion.section>
        

        {/* CORE ARCHITECTURE */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="py-32 px-6 bg-background border-b border-slate-deep overflow-hidden"
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <span className="font-ui text-teal-sovereign uppercase tracking-[0.3em] text-xs mb-4 block">A Cognitive Immune System</span>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter text-foreground max-w-2xl">
                The Protection <span className="text-neural">Pipeline</span>
              </h2>
            </div>
            
            <div className="relative">
              {/* Desktop Connecting Line */}
              <div className="hidden md:block absolute top-[40px] left-0 w-full h-[1px] bg-gradient-to-r from-teal-sovereign/50 via-slate-deep to-transparent z-0" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                {architectureSteps.map((step, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={fadeInUp} 
                    className="group"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-20 h-20 rounded-full bg-background border border-slate-deep flex items-center justify-center group-hover:border-teal-sovereign transition-all duration-500 shadow-xl group-hover:shadow-teal-sovereign/10 relative">
                        <step.icon size={28} className="text-neural group-hover:text-teal-sovereign transition-colors duration-500" strokeWidth={1} />
                        <span className="absolute -top-2 -right-2 font-display text-xs text-teal-sovereign bg-background px-2 border border-slate-deep">
                          {step.number}
                        </span>
                      </div>
                      <div className="md:hidden flex-1 h-[1px] bg-slate-deep" />
                    </div>

                    <h3 className="font-display text-xl uppercase tracking-widest text-foreground mb-4 group-hover:translate-x-2 transition-transform duration-500">
                      {step.title}
                    </h3>
                    
                    <p className="font-sans text-neural leading-relaxed text-sm md:text-base border-l border-slate-deep pl-6 py-2 group-hover:border-teal-sovereign transition-colors duration-500">
                      {step.desc}
                    </p>

                    <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-teal-sovereign font-ui">
                        <span>Phase Secure</span>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* SYSTEM PHILOSOPHY & DEEP DIVE */}
        <section className="py-24 px-6 bg-background relative overflow-hidden">
             <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                
                {/* Left: Communication / Control */}
                <div className="flex-1">
                   <h3 className="font-display text-2xl uppercase tracking-widest text-foreground mb-6">A Stabilizing Presence</h3>
                   <p className="font-sans text-lg text-neural leading-relaxed mb-8">
                     Most of us already sense that the internet is overwhelming, manipulative, or hostile to our attention. You may know the feeling of seeing something you didn’t want to see, or receiving a scam message that created a false sense of urgency. We start there. Project Guy is designed as a calming partner that understands your experience and quietly improves your daily digital life.
                   </p>
                   
                   <div className="grid gap-8 mt-10">
                      {techSpecs.map((spec, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <Lock className="text-teal-sovereign mt-1 opacity-80 shrink-0" size={20} strokeWidth={1.5} />
                          <div>
                            <span className="block font-ui uppercase tracking-wider text-sm text-foreground mb-2">{spec.title}</span>
                            <span className="font-sans text-neural text-sm leading-relaxed block">{spec.description}</span>
                          </div>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Right: Technical Diagram / Info */}
                <div className="flex-1 w-full bg-card p-8 md:p-10 border border-slate-deep">
                   <div className="flex items-center gap-4 mb-8 border-b border-slate-deep pb-6">
                      <Shield className="text-teal-sovereign opacity-80" size={24} strokeWidth={1.5} />
                      <h4 className="font-display text-xl uppercase tracking-widest text-foreground">Safety in Practice</h4>
                   </div>
                   
                   <div className="space-y-6">
                      <div>
                         <h5 className="font-ui text-sm uppercase tracking-wider text-foreground mb-2">Show, Don’t Abstract</h5>
                         <p className="font-sans text-sm text-neural leading-relaxed">
                           Imagine a parent wanting to safely blur violent imagery before a child sees it. Picture a scam message annotated with a clear note explaining the psychological tactic being used. Think of organizing a private library for your memories without them being surveilled. This is about practical, concrete protection.
                         </p>
                      </div>
                      
                      <div>
                         <h5 className="font-ui text-sm uppercase tracking-wider text-foreground mb-2">Accessibility As Alignment</h5>
                         <p className="font-sans text-sm text-neural leading-relaxed">
                           If technology is not safe for children, trauma survivors, or neurodivergent individuals, it is not safe for anyone. We view accessibility not as a philosophical design principle, but as basic fairness and protection. Everyone deserves control over what reaches their minds.
                         </p>
                      </div>

                      <div className="pt-6 mt-6">
                        <div className="px-4 py-3 bg-background border border-slate-deep flex justify-between items-center">
                            <span className="font-ui text-xs uppercase tracking-widest text-neural">System Status</span>
                            <span className="font-ui text-xs uppercase tracking-widest text-teal-sovereign flex items-center gap-2">
                                <Globe size={12} /> User In Control
                            </span>
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
              Engage with Project Guy regarding the Open Source Panopticon architecture.
            </p>
            <div className="bg-card p-8 border border-slate-deep text-left shadow-2xl shadow-black/50">
              <ContactForm source='osp' />
            </div>
          </div>
        </motion.section>

      </main>
      <Footer />
    </div>
  );
}
