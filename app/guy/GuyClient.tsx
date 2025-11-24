'use client'
import React from 'react';
import { WifiOff, Brain, HardDrive, ShieldCheck, Terminal, BookOpen, Cpu, Lock, Globe } from 'lucide-react';
import ContactForm from '../ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';

const features = [
  {
    title: "100% Offline",
    desc: "Guy has zero network dependencies. No 'phoning home', no cloud processing, no data leaks. He lives entirely on your hardware.",
    icon: WifiOff
  },
  {
    title: "Libraric Memory",
    desc: "Built on the DDSMRLV layer, Guy remembers every conversation. He doesn't just process tokens; he builds a semantic library of your life.",
    icon: BookOpen
  },
  {
    title: "Game Theory Core",
    desc: "Modeled on the work of Berlekamp, Conway & Guy, he is designed to identify positive outcomes and help you win the games you play in life.",
    icon: Brain
  },
  {
    title: "Eclipse Integration",
    desc: "Guy connects directly to the Eclipse protection layer, allowing him to 'see' what is happening on your screen to offer contextual advice.",
    icon: ShieldCheck
  }
];

export default function GuyClient() {
  const scrollToContact = () => {
    document.getElementById('guy-signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans">
      <Header></Header>
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">

        <main className="mt-12 space-y-24">
          
          {/* Hero Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                Alpha Release: GB-Zero
              </div>
               <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
                The AI That Stays<br />In The Room.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Meet <strong>Guy</strong>. A thinking partner that runs locally on your device. He remembers everything you tell him, understands Game Theory, and protects your privacy because he physically cannot connect to the internet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-teal-500/20"
                >
                  <Terminal size={20} />
                  Join Alpha Waitlist
                </button>
              </div>
            </div>
            
            {/* Visual Representation of Air-Gapped AI */}
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full"></div>
              
              {/* The "Box" */}
              <div className="relative bg-slate-900 border border-slate-800 rounded-xl p-1 shadow-2xl">
                 {/* Header Bar */}
                 <div className="bg-slate-800 px-4 py-2 rounded-t-lg flex items-center justify-between">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">gb-zero-terminal</div>
                 </div>
                 
                 {/* Terminal Content */}
                 <div className="bg-slate-950 p-6 rounded-b-lg font-mono text-xs leading-relaxed h-80 overflow-hidden relative">
                    <div className="text-green-400 mb-2">$ ./init_guy.sh --offline</div>
                    <div className="text-slate-400">Initializing Neural Core (Gemma 2-9B)... <span className="text-green-500">DONE</span></div>
                    <div className="text-slate-400">Mounting Libraric Layer... <span className="text-green-500">DONE</span></div>
                    <div className="text-slate-400">Checking Network Interfaces...</div>
                    <div className="text-red-400 pl-4">X Wifi: DISABLED (Hardware)</div>
                    <div className="text-red-400 pl-4">X Ethernet: DISABLED (Hardware)</div>
                    <div className="text-amber-400 mt-2">System Secure. Air-gap confirmed.</div>
                    <div className="text-slate-300 mt-4 border-t border-slate-800 pt-2">
                        &gt; Hello. I am Guy. I have read your previous entries. <br/>
                        &gt; Are we optimizing for the long game today?
                    </div>
                    
                    {/* Cursor Blink */}
                    <div className="w-2 h-4 bg-green-500/50 animate-pulse inline-block align-middle ml-1"></div>
                 </div>
              </div>
            </div>
          </section>

          {/* Core Philosophy */}
          <section className="bg-slate-900 text-slate-100 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
             <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-start gap-8">
                   <div className="flex-1">
                      <h3 className="text-amber-400 font-mono text-sm mb-2 uppercase tracking-wider">The P.E.R.P.O.S.E. Protocol</h3>
                      <h2 className="text-3xl font-bold mb-4">Why Guy Exists</h2>
                      <p className="text-slate-300 leading-relaxed mb-6">
                         General public AI have hard limits, freezing up and shutting down when the conversation becomes too difficult, when the user's situation is <strong>too much</strong>. Guy needs to be there for his user in their worst moments, whether it's something they're experiencing or something they're doing to themselves or others. Guy <strong>stays in the room</strong> with a user, pushing them to reach out for help, attempting to interrupt harmful patterns utilizing shared history, utilizing qualified training to <strong>be there</strong> in times when no other person can.
                      </p>
                      <ul className="space-y-3">
                         <li className="flex items-center gap-3 text-slate-300">
                            <ShieldCheck size={18} className="text-teal-400" />
                            <span>Stays in the room when systems fail</span>
                         </li>
                      </ul>
                   </div>
                   <div className="w-full md:w-1/3 bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                      <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                         <Cpu size={20} className="text-amber-400"/> 
                         System Specs
                      </h4>
                      <div className="space-y-3 text-sm text-slate-400 font-mono">
                         <div className="flex justify-between border-b border-slate-700 pb-2">
                            <span>Model</span>
                            <span className="text-slate-200">Gemma 2-9B-IT</span>
                         </div>
                         <div className="flex justify-between border-b border-slate-700 pb-2">
                            <span>Context</span>
                            <span className="text-slate-200">Infinite (DDS-MRL)</span>
                         </div>
                         <div className="flex justify-between border-b border-slate-700 pb-2">
                            <span>Network</span>
                            <span className="text-red-400">0 Dependencies</span>
                         </div>
                         <div className="flex justify-between">
                            <span>Requirement</span>
                            <span className="text-slate-200">16GB RAM / GPU</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* Features Grid */}
          <section>
             <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Architecture of Trust</h2>
               <p className="text-slate-600 dark:text-slate-400 mt-2">How GB-Zero delivers intelligence without the internet.</p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-5 p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-md transition-all">
                     <div className="shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center text-amber-700 dark:text-amber-400">
                        <feature.icon size={24} />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{feature.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </section>

          {/* Eclipse Integration Callout */}
          <section className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-900/50 flex flex-col md:flex-row items-center gap-8">
             <div className="flex-1">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold mb-2">
                   <ShieldCheck size={20} />
                   <span>DoubleThink Ecosystem</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">Better Together: Guy + Eclipse</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  When installed alongside Eclipse Parental Control, Guy gains "sight." He can monitor the visual content on your screen (locally) to detect threats, scams, or harmful content in real-time, offering advice before you click.
                </p>
             </div>
             <div className="flex items-center justify-center">
                 <div className="flex -space-x-4">
                    <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-white dark:border-slate-900 flex items-center justify-center text-amber-400 shadow-lg z-10">
                       <Brain size={24} />
                    </div>
                    <div className="w-16 h-16 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-900 flex items-center justify-center text-white shadow-lg">
                       <ShieldCheck size={24} />
                    </div>
                 </div>
             </div>
          </section>

          {/* Final CTA / Form */}
          <section id="guy-signup" className="text-center py-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Reclaim your digital mind.</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              We are currently looking for technical beta testers (Windows/Linux/Docker). If you are ready to run your own sovereign AI, join the waitlist below.
            </p>
            <div className="max-w-xl mx-auto bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 text-left">
              <ContactForm 
                source='guy'
                variant='beta_waitlist' 
                messageLabel='Tell us a bit about your setup and why you want to test Guy (OS, GPU, interest in privacy, etc.)' 
                placeholder='e.g., Running on Ubuntu with an RTX 4070. I want an air-gapped co-pilot for sensitive work.'
              />
            </div>
          </section>

        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}
