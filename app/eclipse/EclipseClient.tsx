'use client'
import React from 'react';
import { Eye, BrainCircuit, ShieldAlert, Activity, Monitor, Lock, VolumeX, ScanEye, Globe } from 'lucide-react';
import ContactForm from '../ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';

const steps = [
  {
    title: "1. Observe",
    desc: "Eclipse runs quietly in the background, monitoring screen frames (5-10 FPS) and audio streams in real-time.",
    icon: Eye
  },
  {
    title: "2. Comprehend",
    desc: "Our Local AI analyzes visual and audio data instantly using NudeNet and contextual semantic understanding.",
    icon: BrainCircuit
  },
  {
    title: "3. React",
    desc: "Inappropriate content is blurred and profanity is bleeped before it reaches the user's senses.",
    icon: ShieldAlert
  },
  {
    title: "4. Report",
    desc: "Events are logged privately using MRL Vectors, giving parents a smart summary without exposing raw explicit images.",
    icon: Activity
  }
];

export default function EclipseClient() {
  const scrollToContact = () => {
    document.getElementById('eclipse-signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans">
      <Header></Header>
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        
        <main className="mt-12 space-y-24">
          
          {/* Hero Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                Free Public Beta
              </div>
               <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
                The Ultimate Shield<br />For Their Digital World.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Standard filters just block URLs. Eclipse uses <strong>real-time AI</strong> to see the screen and hear the audio before your child does. It blocks porn, profanity, and violence instantly—right on the device.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-teal-500/20"
                >
                  <Monitor size={20} />
                  Join Beta Waitlist
                </button>
              </div>
            </div>
            
            {/* Visual Representation of Eclipse (Monitor Scanning) */}
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-0 bg-indigo-500/30 blur-3xl rounded-full"></div>
              
              {/* Monitor Frame */}
              <div className="relative bg-slate-800 border-b-8 border-slate-700 rounded-t-xl p-2 shadow-2xl mx-auto w-full aspect-video flex flex-col">
                 <div className="bg-slate-900 flex-1 relative overflow-hidden rounded-md group">
                    
                    {/* Scanning Line */}
                    <div className="absolute top-0 w-full h-1 bg-teal-400/50 shadow-[0_0_15px_rgba(45,212,191,0.8)] z-20 animate-[scan_3s_ease-in-out_infinite]"></div>
                    
                    {/* Screen Content Mock */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-4 w-3/4 opacity-20">
                            <div className="h-12 bg-slate-600 rounded"></div>
                            <div className="h-12 bg-slate-600 rounded"></div>
                            <div className="h-32 bg-slate-600 rounded col-span-2"></div>
                        </div>
                    </div>

                    {/* Detection Overlay */}
                    <div className="absolute inset-0 backdrop-blur-sm bg-slate-900/40 flex flex-col items-center justify-center z-10">
                       <ShieldAlert size={48} className="text-teal-400 mb-2" />
                       <div className="px-3 py-1 bg-slate-800 border border-teal-500/50 rounded text-[10px] font-mono text-teal-400">
                          CONTENT FILTERED
                       </div>
                    </div>

                    {/* UI HUD */}
                    <div className="absolute top-2 right-2 flex gap-2">
                        <div className="flex items-center gap-1 bg-slate-800/80 px-2 py-1 rounded text-[8px] text-slate-300">
                            <Eye size={10} className="text-green-400" /> OCRR: ACTIVE
                        </div>
                    </div>
                 </div>
              </div>
              {/* Monitor Stand */}
              <div className="mx-auto w-1/3 h-4 bg-slate-700 rounded-b-lg relative">
                 <div className="absolute top-full left-1/2 -translate-x-1/2 w-24 h-2 bg-slate-600/50 rounded-full mt-1 blur-sm"></div>
              </div>
            </div>
          </section>

          {/* How it Works (OCRR Loop) */}
          <section>
             <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">The OCRR Loop</h2>
               <p className="text-slate-600 dark:text-slate-400 mt-2">From observation to action in under 500 milliseconds.</p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-teal-500/50 transition-colors">
                     <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4 text-indigo-700 dark:text-indigo-300">
                        <step.icon size={20} />
                     </div>
                     <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{step.title}</h3>
                     <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
             </div>
          </section>

          {/* Feature Deep Dive */}
          <section className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
             <div className="flex flex-col md:flex-row gap-12">
                
                {/* Left: What it blocks */}
                <div className="flex-1">
                   <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Triple Threat Protection</h3>
                   <p className="text-slate-600 dark:text-slate-400 mb-6">
                     Eclipse is built specifically to handle the three most concerning categories of content for parents.
                   </p>
                   <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="mt-1 bg-red-100 dark:bg-red-900/30 p-1.5 rounded text-red-600 dark:text-red-400">
                           <ScanEye size={16} />
                        </div>
                        <div>
                           <span className="block font-bold text-slate-900 dark:text-slate-100">Pornography & Nudity</span>
                           <span className="text-sm text-slate-500 dark:text-slate-400">Detects skin exposure and explicit scenes using computer vision.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 bg-orange-100 dark:bg-orange-900/30 p-1.5 rounded text-orange-600 dark:text-orange-400">
                           <VolumeX size={16} />
                        </div>
                        <div>
                           <span className="block font-bold text-slate-900 dark:text-slate-100">Profanity</span>
                           <span className="text-sm text-slate-500 dark:text-slate-400">Real-time audio bleeping and on-screen text redaction.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 bg-slate-100 dark:bg-slate-700 p-1.5 rounded text-slate-600 dark:text-slate-300">
                           <ShieldAlert size={16} />
                        </div>
                        <div>
                           <span className="block font-bold text-slate-900 dark:text-slate-100">Graphic Violence</span>
                           <span className="text-sm text-slate-500 dark:text-slate-400">Identifies gore, weapons, and violent imagery.</span>
                        </div>
                      </li>
                   </ul>
                </div>

                {/* Right: Privacy/Architecture */}
                <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                   <div className="flex items-center gap-2 mb-6">
                      <Lock className="text-teal-500" size={24} />
                      <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">Local-First Privacy</h4>
                   </div>
                   
                   <div className="space-y-6">
                      <div>
                         <h5 className="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-1">No Cloud Uploads</h5>
                         <p className="text-xs text-slate-500 dark:text-slate-400">
                           Unlike other filters, Eclipse processes everything locally on your CPU/GPU. Your screen recordings never leave your device.
                         </p>
                      </div>
                      
                      <div>
                         <h5 className="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-1">MRL Vector Logging</h5>
                         <p className="text-xs text-slate-500 dark:text-slate-400">
                           We don't save screenshots of blocked content. We save abstract mathematical vectors that describe the content without revealing the image.
                         </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                         <div className="flex justify-between text-xs font-mono text-slate-500">
                            <span>Detection Latency</span>
                            <span className="text-teal-500">~200ms</span>
                         </div>
                         <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div className="bg-teal-500 w-1/4 h-full rounded-full"></div>
                         </div>
                      </div>
                   </div>
                </div>

             </div>
          </section>

          {/* Final CTA / Form */}
          <section id="eclipse-signup" className="text-center py-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Secure their screen.</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              We are currently looking for free beta testers for the Windows application. Sign up to get early access and help shape the future of parental controls.
            </p>
            <div className="max-w-xl mx-auto bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 text-left">
              <ContactForm variant='beta_waitlist' source='eclipse'/>
            </div>
          </section>

        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}
