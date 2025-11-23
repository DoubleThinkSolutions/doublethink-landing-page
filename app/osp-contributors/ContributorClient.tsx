'use client'
import React from 'react';
import { Camera, Smartphone, DollarSign, UploadCloud, Shield, ChevronRight, Globe, Info } from 'lucide-react';
import ContactForm from '../ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';

const steps = [
  {
    title: "Capture",
    desc: "Use the OSP App to take photos or video. The app automatically locks in GPS, orientation, and timestamp data.",
    icon: Camera
  },
  {
    title: "Verify",
    desc: "Your device's secure hardware signs the content instantly. No post-processing needed. It is cryptographically sealed.",
    icon: Shield
  },
  {
    title: "Upload",
    desc: "Content is uploaded to the marketplace. You retain anonymity if desired, while the content remains verified.",
    icon: UploadCloud
  },
  {
    title: "Earn",
    desc: "When enterprise customers (news agencies) license your footage, you get paid directly.",
    icon: DollarSign
  }
];

export default function ContributorClient() {
  const scrollToContact = () => {
    document.getElementById('stringer-signup')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen font-sans">
      <Header></Header>
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">

        <main className="mt-12 space-y-24">
          
          {/* Hero Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                Waitlist Open
              </div>
               <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
                Turn Your Truth<br />Into Income.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                You are on the ground. You see what's happening. We are building the technology to prove it—and the platform to sell it. Join the waitlist to be a Verified Stringer at launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-teal-500/20"
                >
                  <Smartphone size={20} />
                  Join the Waitlist
                </button>
              </div>
            </div>
            
            {/* Visual Representation of App */}
            <div className="relative mx-auto">
              <div className="absolute inset-0 bg-teal-500/30 blur-3xl rounded-full"></div>
              <div className="relative bg-slate-900 border-4 border-slate-800 rounded-[2.5rem] p-4 w-64 shadow-2xl">
                <div className="bg-slate-800 rounded-4xl overflow-hidden h-96 flex flex-col items-center justify-center relative">
                   {/* Mock UI */}
                   <div className="absolute top-4 px-4 w-full flex justify-between text-xs text-white/50">
                      <span>REC ●</span>
                      <span>GPS: 39.96N, 82.99W</span>
                   </div>
                   <Camera size={48} className="text-white/20 mb-4" />
                   <div className="text-center p-4">
                      <p className="text-teal-400 font-mono text-xs mb-2">HARDWARE ATTESTATION ACTIVE</p>
                      <p className="text-white font-bold">Verifying Metadata...</p>
                   </div>
                   <div className="absolute bottom-8 w-16 h-16 border-4 border-teal-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </section>

          {/* How it Works */}
          <section>
             <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">How It Works</h2>
               <p className="text-slate-600 dark:text-slate-400 mt-2">From the lens to the ledger in four steps.</p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                     <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4 text-teal-700 dark:text-teal-300">
                        <step.icon size={20} />
                     </div>
                     <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{step.title}</h3>
                     <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
             </div>
          </section>

          <section className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">

             <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                   <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Projected Demand</h3>
                   <p className="text-slate-600 dark:text-slate-400 mb-6">
                     Our enterprise partners will use the platform to issue "Bounties" for specific coverage. Example scenarios might include:
                   </p>
                   <ul className="space-y-3">
                      {['Political Rallies in Swing States', 'Severe Weather Events (Midwest)', 'Urban Infrastructure Development'].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                           <div className="w-2 h-2 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
                <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 w-full opacity-90">
                   <div className="flex justify-between items-center mb-4">
                      <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Example Payout Model</h4>
                      <span className="text-[10px] bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-slate-500">Hypothetical</span>
                   </div>
                   <div className="space-y-4">
                      <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-2">
                         <span className="text-slate-900 dark:text-slate-100">Protest Coverage (Clip)</span>
                         <span className="text-teal-600 dark:text-teal-400 font-bold">$150.00</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-2">
                         <span className="text-slate-900 dark:text-slate-100">Storm Damage (Set)</span>
                         <span className="text-teal-600 dark:text-teal-400 font-bold">$450.00</span>
                      </div>
                      <div className="flex justify-between items-center">
                         <span className="text-slate-900 dark:text-slate-100">Local Election (Live)</span>
                         <span className="text-teal-600 dark:text-teal-400 font-bold">$300.00</span>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* Final CTA / Form */}
          <section id="stringer-signup" className="text-center py-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Ready to capture history?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              We are currently in private development. Sign up below to be notified when the OSP App is available for beta testing in your region.
            </p>
            <div className="max-w-xl mx-auto bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 text-left">
              <ContactForm variant='contributor' source='osp-contributor'/>
            </div>
          </section>

        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}
