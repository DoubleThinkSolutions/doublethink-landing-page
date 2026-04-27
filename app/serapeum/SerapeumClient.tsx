'use client';

import { Network, Search, Lock, BookOpen, Layers, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

import ContactForm from '../ContactForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Animation Variants - Tuned to feel patient and deliberate
const fadeUpSlow: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1]
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 }
  }
};

const LibraricLogo = () => (
  <>
  <img 
    src="/Libraric-Logo-Color.png" 
    alt="LIBRARIC" 
    className="h-64 w-auto mb-6 object-contain block dark:hidden" 
  />

  <img 
    src="/Libraric-Logo-White.png" 
    alt="LIBRARIC" 
    className="h-64 w-auto mb-6 object-contain hidden dark:block" 
  />
  </>
);

const corePillars = [
  {
    title: "Meaning, Not Chronology",
    desc: "A database stores by date and time. A mind stores by relevance. Your experiences are organized by meaning, allowing the system to understand how your story connects over years, not just days.",
    icon: Network
  },
  {
    title: "Enduring Context",
    desc: "Technology usually forces you to start over with every new session. Serapeum ensures your AI grows with you. It remembers what matters, functioning as a true cognitive partner.",
    icon: BookOpen
  },
  {
    title: "Sovereign Archive",
    desc: "Your memories are not inventory. This is a private, on-device memory system. Nothing is sent to the cloud to be analyzed or monetized. The library belongs exclusively to you.",
    icon: Lock
  }
];

const technicalSpecs = [
  {
    title: "Better Compaction Protocols (BCP)",
    description: "Instead of forcing an entire archive into active memory, BCP uses targeted searches to retrieve only highly relevant snippets. This allows the system to comprehend a lifetime of data without overwhelming your device's resources."
  },
  {
    title: "10,000:1 Dynamic Retrieval",
    description: "Traditional AI loads context statically. Serapeum navigates a 20 to 30 million token corpus using only a fraction of the computational context (less than 2,000 tokens for targeted extraction). It is an unprecedented dynamic retrieval ratio."
  },
  {
    title: "Needle-In-A-Haystack Precision",
    description: "Whether you are recalling a specific conversation from three years ago or connecting a recurring theme across decades of journals, the architecture finds the exact thread instantly, maintaining radical legibility."
  }
];

export default function SerapeumClient() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-teal-sovereign">
      <Header />
      
      <main>
        {/* HERO SECTION */}
        <motion.section 
            initial="hidden"
            animate="visible"
            variants={fadeUpSlow}
            className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-background border-b border-slate-deep"
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2933_1px,transparent_1px),linear-gradient(to_bottom,#1f2933_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-[0.2em] text-foreground mb-8">
                Serapeum
            </h1>
            <p className="font-sans text-lg sm:text-xl text-neural max-w-2xl leading-relaxed mb-10">
                A private, on-device memory system that organizes your experiences into meaningful structure so your AI can grow with you instead of starting over every time.
            </p>
            </div>
        </motion.section>

        {/* CORE PILLARS */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="py-32 px-6 bg-background border-b border-slate-deep"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {corePillars.map((pillar, idx) => (
                <motion.div key={idx} variants={fadeUpSlow} className="flex flex-col">
                  <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-none border border-slate-deep bg-card">
                    <pillar.icon size={24} className="text-teal-sovereign opacity-80" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-widest text-foreground mb-4">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-neural leading-relaxed text-sm md:text-base">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* THE SCALE OF MEMORY (TECHNICAL DEEP DIVE) */}
        <section className="py-32 px-6 bg-background relative overflow-hidden">
             <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                
                {/* Left: The Philosophy */}
                <div className="flex-1">
                   <span className="font-ui text-teal-sovereign uppercase tracking-[0.3em] text-xs mb-4 block">Architectural Scale</span>
                   <h2 className="font-display text-3xl md:text-4xl uppercase tracking-widest text-foreground mb-6">
                     Navigating a Lifetime <br/><span className="text-neural">of Context.</span>
                   </h2>
                   <p className="font-sans text-lg text-neural leading-relaxed mb-8">
                     To truly function as a cognitive prosthetic, a system must be able to hold years of human context without collapsing under its own weight. Serapeum is not a productivity hack; it is a meticulously engineered personal archive capable of searching tens of millions of tokens in seconds.
                   </p>
                   
                   <blockquote className="border-l-2 border-teal-sovereign pl-6 py-2 my-10 font-sans text-foreground/80 italic text-lg">
                     "We can search 30 million tokens of your personal history right now, extracting the exact meaning, using less than 2,000 tokens of active memory."
                   </blockquote>

                   <p className="font-sans text-base text-neural leading-relaxed">
                     This is achieved through targeted search. Rather than attempting to load an entire lifetime into a static window, Serapeum retrieves only the highly relevant snippets needed for the moment. The result is a profoundly capable system that remains light, agile, and entirely on-device.
                   </p>
                </div>

                {/* Right: Technical Breakdown */}
                <div className="flex-1 w-full bg-background p-8 md:p-12 border border-slate-deep relative">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-teal-sovereign/5 blur-[50px] pointer-events-none"></div>
                   
                   <div className="flex items-center gap-4 mb-10 border-b border-slate-deep pb-6">
                      <Search className="text-teal-sovereign opacity-80" size={24} strokeWidth={1.5} />
                      <h4 className="font-display text-xl uppercase tracking-widest text-foreground">System Mechanics</h4>
                   </div>
                   
                   <div className="space-y-8 relative z-10">
                      {technicalSpecs.map((spec, i) => (
                        <div key={i} className="group">
                           <h5 className="font-ui text-sm uppercase tracking-wider text-foreground mb-2 flex items-center gap-2">
                             <Layers size={14} className="text-neural opacity-50 group-hover:text-teal-sovereign transition-colors" />
                             {spec.title}
                           </h5>
                           <p className="font-sans text-sm text-neural leading-relaxed pl-6 border-l border-slate-deep group-hover:border-teal-sovereign transition-colors">
                             {spec.description}
                           </p>
                        </div>
                      ))}

                      <div className="pt-8 mt-4">
                        <div className="px-4 py-3 bg-card border border-slate-deep flex justify-between items-center">
                            <span className="font-ui text-xs uppercase tracking-widest text-neural">Context Ratio</span>
                            <span className="font-ui text-xs uppercase tracking-widest text-teal-sovereign flex items-center gap-2">
                                10,000 : 1 <ArrowRight size={12} /> Optimized
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
            <p className="font-sans text-neural mb-12">
              Engage with Project Guy regarding the Serapeum memory architecture.
            </p>
            <div className="bg-card p-8 border border-slate-deep text-left shadow-2xl shadow-black/50">
              <ContactForm source='serapeum' />
            </div>
          </div>
        </motion.section>

      </main>
      <Footer />
    </div>
  );
}
