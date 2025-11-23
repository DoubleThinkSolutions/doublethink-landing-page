'use client'
import React from 'react';
import { Binary, RefreshCw, Shield, MessageSquareDashed, Cpu, Lock, Globe, Network, Shuffle } from 'lucide-react';
import ContactForm from '../ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';

const features = [
  {
    title: "Ephemeral Languages",
    desc: "Gremlin generates completely novel languages on-demand. Once a conversation is finished, the language is forgotten forever.",
    icon: RefreshCw
  },
  {
    title: "One-Time Word Usage",
    desc: "Every concept has thousands of random Unicode representations. Once a specific 'word' is used, it is burned, preventing pattern analysis.",
    icon: Shuffle
  },
  {
    title: "AI-Native Protocol",
    desc: "Built for the machine age. Large Language Models (LLMs) learn these synthetic languages instantly from compact JSON packs.",
    icon: Cpu
  },
  {
    title: "MRL Vector Security",
    desc: "Traffic is tracked using Matryoshka Representation Learning, ensuring that even if words change, the semantic intent is verified.",
    icon: Shield
  }
];

export default function GremlinClient() {
  const scrollToContact = () => {
    document.getElementById('gremlin-signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans">
      <Header></Header>
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">

        <main className="mt-12 space-y-24">
          
          {/* Hero Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-800 dark:text-fuchsia-300 text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                Research Preview
              </div>
               <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
                When Gremlins Jabber,<br />Only Gremlins Understand.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                <strong>G</strong>enerative <strong>R</strong>epresentation <strong>E</strong>ncoding for <strong>M</strong>ulti-<strong>L</strong>ayer <strong>I</strong>dentity <strong>N</strong>egotiation. <br/><br/>
                We are building the first synthetic language generator for secure, ephemeral AI-to-AI communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-teal-500/20"
                >
                  <Binary size={20} />
                  Join Research Waitlist
                </button>
              </div>
            </div>
            
            {/* Visual Representation of Encrypted Traffic */}
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-0 bg-fuchsia-500/20 blur-3xl rounded-full"></div>
              
              {/* The Terminal Window */}
              <div className="relative bg-slate-950 border border-slate-800 rounded-lg shadow-2xl overflow-hidden font-mono text-xs">
                 {/* Title Bar */}
                 <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex justify-between items-center text-slate-500">
                    <span>network_traffic.log</span>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                    </div>
                 </div>

                 {/* Traffic Simulation */}
                 <div className="p-4 space-y-4">
                    
                    {/* Step 1: Clear Text (Internal) */}
                    <div className="opacity-50">
                        <div className="text-teal-500 mb-1"># INTERNAL INTENT (Machine A)</div>
                        <div className="text-slate-300">"Authenticating: User_ID_404"</div>
                    </div>

                    {/* Step 2: GREMLIN Translation */}
                    <div className="relative py-2">
                        <div className="absolute left-0 top-0 h-full w-0.5 bg-fuchsia-500"></div>
                        <div className="pl-3">
                            <div className="flex justify-between text-fuchsia-400 mb-1">
                                <span># GREMLIN PACK [Active]</span>
                                <span className="text-[10px] border border-fuchsia-500/50 px-1 rounded">SECURE</span>
                            </div>
                            <div className="text-fuchsia-200 break-all">
                                ⍙⍙⍦⍙ → ⍎⍱⍦⍙⍦⍙⍎⍱<br/>
                                ⌘⌥⌫⌧ ⇪⇪↹ ⇲⇱
                            </div>
                        </div>
                    </div>

                    {/* Step 3: MITM Perspective */}
                    <div className="bg-red-900/10 border border-red-900/30 p-2 rounded">
                        <div className="text-red-400 mb-1 text-[10px] uppercase font-bold">⚠️ MITM Interception Attempt</div>
                        <div className="text-red-300/50 italic">Unintelligible stream. No pattern detected.</div>
                    </div>
                 </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section>
             <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Security Through Obsolescence</h2>
               <p className="text-slate-600 dark:text-slate-400 mt-2">Why encrypt static words when you can just change the language?</p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="group p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-fuchsia-500/50 transition-colors">
                     <div className="w-12 h-12 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-lg flex items-center justify-center mb-4 text-fuchsia-700 dark:text-fuchsia-400 group-hover:scale-110 transition-transform">
                        <feature.icon size={24} />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{feature.title}</h3>
                     <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
             </div>
          </section>

          {/* Demo / Use Cases */}
          <section className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
             <div className="flex flex-col lg:flex-row gap-12">
                
                {/* Left: The Security Use Case */}
                <div className="flex-1 space-y-6">
                   <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">The "Man In The Middle" Test</h3>
                   <p className="text-slate-600 dark:text-slate-400">
                     In traditional encryption, an attacker captures the data and tries to decrypt it later. With GREMLIN, capturing the data is useless.
                   </p>
                   
                   <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300 border-l-4 border-teal-500">
                      <p className="text-xs text-slate-500 mb-2">// Client to Server (Translated)</p>
                      <p>"Checking in, this is <span className="text-teal-400">[NAME]</span> with <span className="text-teal-400">[COMPANY]</span>..."</p>
                   </div>

                   <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300 border-l-4 border-red-500">
                      <p className="text-xs text-slate-500 mb-2">// What the Network Sees</p>
                      <p className="break-all text-slate-500">
                         H∆§∑ ¶ø†µ §å¬¬... [NO_KEY_FOUND] ... ˚¬∆˙©
                      </p>
                   </div>
                   <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                      Even if the attacker has the dictionary, words are "burned" upon use. The language evolves faster than it can be cracked.
                   </p>
                </div>

                {/* Right: Future Applications */}
                <div className="flex-1 lg:border-l border-slate-200 dark:border-slate-700 lg:pl-12">
                   <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Beyond Security</h3>
                   <p className="text-slate-600 dark:text-slate-400 mb-6">
                     GREMLIN's arbitrary concept-to-utterance mapping engine has potential applications far beyond cryptography.
                   </p>
                   
                   <div className="space-y-6">
                      <div className="flex gap-4">
                         <div className="mt-1 text-fuchsia-600 dark:text-fuchsia-400"><MessageSquareDashed /></div>
                         <div>
                            <h4 className="font-bold text-slate-900 dark:text-slate-100">Aphasia & Accessibility</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                               Creating personal language evolution for patients with neurological conditions, mapping their unique vocalizations to semantic concepts.
                            </p>
                         </div>
                      </div>

                      <div className="flex gap-4">
                         <div className="mt-1 text-fuchsia-600 dark:text-fuchsia-400"><Network /></div>
                         <div>
                            <h4 className="font-bold text-slate-900 dark:text-slate-100">Adaptive Interfaces</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                               Systems that dynamically translate non-standard communication patterns into executable commands.
                            </p>
                         </div>
                      </div>
                   </div>
                </div>

             </div>
          </section>

          {/* Final CTA / Form */}
          <section id="gremlin-signup" className="text-center py-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Define the next language.</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              We are currently building the foundation: Concept Dictionary, Word Generator, and Grammar Engine. Join the waitlist to access the Python library when it launches.
            </p>
            <div className="max-w-xl mx-auto bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 text-left">
              <ContactForm 
                source='gremlin'
                variant='beta_waitlist' 
                messageLabel='Tell us about your research or application interest in ephemeral AI communication.' 
                placeholder='e.g., Interested in testing GREMLIN for securing inter-container communication on Kubernetes, or for LLM red-teaming.'
              />
            </div>
          </section>

        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}
