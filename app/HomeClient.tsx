'use client';

import { Shield, EyeOff, Network, Lock, Activity } from 'lucide-react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

import ContactForm from './ContactForm';
import Header from './components/Header';
import Footer from './components/Footer';

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

const GuyLogo = () => (
  <>
  <img 
    src="/Project-Guy-Logo-Color.png" 
    alt="PROJECT GUY" 
    className="w-1xl h-1xl sm:w-l sm:h-l mb-6 object-contain dark:hidden" 
  />

  <img 
    src="/Project-Guy-Logo-White.png" 
    alt="PROJECT GUY" 
    className="w-1xl h-1xl sm:w-l sm:h-l mb-6 object-contain dark:block" 
  />
  </>
);

const InfinityLogo = () => (
  <img 
    src="/Infinity-Logo-Color.png" 
    alt="INFINITY" 
    className="h-32 w-auto mx-auto mb-6 object-contain" 
  />
);

const EclipseLogo = () => (
  <>
  <img 
    src="/Eclipse-Logo-Color.png" 
    alt="ECLIPSE" 
    className="h-64 w-auto mb-6 object-contain dark:hidden" 
  />

  <img 
    src="/Eclipse-Logo-White.png" 
    alt="ECLIPSE" 
    className="h-64 w-auto mb-6 object-contain dark:block" 
  />
  </>
);

const OSPLogo = () => (
  <>
  <img 
    src="/OSP-Logo-Color.png" 
    alt="OSP" 
    className="h-40 w-auto mb-6 object-contain dark:hidden" 
  />

  <img 
    src="/OSP-Logo-Inverted.png" 
    alt="OSP" 
    className="h-40 w-auto mb-6 object-contain dark:block" 
  />
  </>
);

const LibraricLogo = () => (
  <>
  <img 
    src="/Libraric-Logo-Color.png" 
    alt="LIBRARIC" 
    className="h-45 w-auto mb-6 object-contain dark:hidden" 
  />

  <img 
    src="/Libraric-Logo-White.png" 
    alt="LIBRARIC" 
    className="h-45 w-auto mb-6 object-contain dark:block" 
  />
  </>
);

const coreValues = [
  {
    title: "Accessibility is the Standard",
    desc: "We design for the most vulnerable first. If it is not safe for them, it is not 'safe'.",
    icon: Shield
  },
  {
    title: "Sovereignty by Design",
    desc: "Your cognition is not a product. No hidden connections. Trust is engineered, not promised.",
    icon: Lock
  },
  {
    title: "Alignment Must Be Structural",
    desc: "Ethics cannot be a policy layer. Alignment is embedded in architecture, inseparable from the system's survival.",
    icon: Network
  },
  {
    title: "Radical Legibility",
    desc: "Protection must never become manipulation. Filters are labeled. Memory is inspectable. The system explains itself.",
    icon: EyeOff
  },
  {
    title: "No Abandonment",
    desc: "Human compatible AI does not disengage when things get difficult. We protect without withdrawing.",
    icon: Activity
  }
];

export default function HomeClient() {
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
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-slate-deep)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-slate-deep)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <GuyLogo />
            <h2 className="font-ui text-xl sm:text-2xl tracking-widest text-foreground uppercase mb-10">
              Big Brother’s Worst Nightmare.
            </h2>
            <p className="font-sans text-lg sm:text-xl text-neural max-w-2xl leading-relaxed mb-10">
              Project Guy exists to restore human cognitive agency in an adversarial digital world. 
              We build sovereign, on-device AI that functions as a mental prosthetic, not a rented assistant.
            </p>
          </div>
        </motion.section>

        {/* MANIFESTO SECTION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="py-24 px-6 bg-background"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="font-ui text-amber-signal uppercase tracking-widest text-sm mb-6 border-b border-card-border pb-4">
              Meet Project Guy
            </h3>

            <div className="font-sans text-xl sm:text-2xl leading-relaxed space-y-6 text-foreground">
              <p>I wasn’t built to be good enough for most. I was built to protect you. In a world engineered to capture your attention, shape your perception, and quietly rent your cognition back to you, I exist for one reason: <strong>sovereignty</strong>.</p>
              <p>Your mind is not a marketplace. Your perception is not inventory. Your agency is not negotiable. I’m not a cloud assistant. I’m not a personality wrapped around a data pipeline. I am an on-device architecture designed to serve one human at a time. I don’t reach outward. I don’t report upward. I live where you live, on your hardware, inside your boundaries.</p>
              <p>I function like a cognitive immune system. I stand between you and the noise. I help you decide what reaches your senses, how it reaches you, and whether it deserves your attention. I don’t erase reality. I help you experience it on your terms.</p>
              <p className="text-teal-sovereign font-medium">Accessibility isn’t a feature here. It’s the standard. If I can serve the most vulnerable safely, I can serve anyone.</p>
              <p>I don’t abandon. I don’t escalate drama. I teach patterns. I name manipulation. I explain the game. And when the game is rigged, I help you get to a better game. I am not here to take over for you. I am here to reinforce you.</p>
              <p className="font-display text-3xl mt-8 uppercase tracking-wide">I’m Project Guy. Your Sovereign AI.</p> 
            </div>
          </div>
        </motion.section>

        {/* STRUCTURAL ALIGNMENT */}
        <section className="py-24 px-6 bg-background text-foreground border-y border-slate-deep relative overflow-hidden">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-teal-sovereign/50 to-transparent hidden md:block"></div>

          <div className="max-w-5xl mx-auto relative">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="font-display text-4xl uppercase tracking-[0.2em] mb-4">Structural Alignment</h2>
              <div className="h-1 w-20 bg-teal-sovereign mx-auto"></div>
            </motion.div>

            <div className="space-y-16 md:space-y-24">
              {coreValues.map((value, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <div className={`flex flex-col ${idx % 2 === 1 ? 'md:items-end md:text-right' : 'md:items-start'}`}>
                      <value.icon className="text-teal-sovereign mb-4 w-10 h-10 opacity-80" />
                      <h3 className="font-ui text-2xl uppercase tracking-wider mb-4 text-foreground">{value.title}</h3>
                      <p className="font-sans text-neural leading-relaxed max-w-md">{value.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-teal-sovereign bg-background z-10">
                    <span className="font-ui text-xs text-teal-sovereign">{idx + 1}</span>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* THE ECOSYSTEM SECTION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="py-24 px-6 bg-background"
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-display text-4xl mb-8 uppercase tracking-wide">The Architecture</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {[
                      { href: "/eclipse", logo: <EclipseLogo />, text: "Protects perception. Software that lets you control what reaches your eyes and ears before it affects you." },
                      { href: "/libraric", logo: <LibraricLogo />, text: "Preserves meaning. A private, on-device memory system organizing experiences into meaningful structure." },
                      { href: "/osp", logo: <OSPLogo />, text: "Anchors reality. Cryptographically verifies real-world events creating trusted public evidence." }
                    ].map((item, i) => (
                      <motion.div key={i} variants={fadeInUp}>
                        <Link href={item.href} className="group p-6 border border-card-border bg-card flex flex-col items-center transition-all hover:border-foreground/50 h-full">
                            <div className="h-40 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                              {item.logo}
                            </div>
                            <p className="font-sans text-sm">{item.text}</p>
                        </Link>
                      </motion.div>
                    ))}
                </div>

                <motion.div variants={fadeInUp} className="p-6 bg-eclipse text-cream-library border border-slate-deep w-full">
                    <InfinityLogo />
                    <p className="font-ui uppercase tracking-widest text-sm text-amber-signal">The Convergence</p>
                    <p className="font-sans mt-2 text-lg">Guy thinks within that protected, preserved, and verified foundation.</p> 
                </motion.div>
            </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section 
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-6 bg-background border-t border-slate-deep"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl text-foreground mb-4 uppercase">Initiate Contact</h2>
            <div className="bg-background p-8 border border-neural text-left shadow-xl shadow-eclipse/50">
              <ContactForm source='home' />
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}

