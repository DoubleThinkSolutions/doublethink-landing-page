'use client'
import React from 'react';
import { ShieldCheck, Map, Database, Search, FileJson, Lock, ArrowRight, ArrowDown } from 'lucide-react';
import ContactForm from '../ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';

const enterpriseInfo = {
  title: "The Source of Truth for Modern Newsrooms",
  subtitle: "Access the world's first marketplace for cryptographically verified media. 100% guaranteed provenance from lens to ledger.",
};

const features = [
  {
    title: "Verified Bulk Datasets",
    description: "Acquire verified media in bulk based on time and location. Example: 'All verified footage from Ukraine, March 1-31, 2025'.",
    icon: Database
  },
  {
    title: "Geospatial Exploration",
    description: "Browse our live 'Open Source Panopticon' map to find content verified by GPS metadata and hardware attestation.",
    icon: Map
  },
  {
    title: "Assignment Requests",
    description: "Need eyes on the ground? Request specific media coverage (e.g., 'Presidential Debate Venue') and alert nearby verified journalists.",
    icon: Search
  }
];

const techSpecs = [
  {
    title: "Hardware-Backed Keystore",
    description: "Keys are generated inside the device's Trusted Execution Environment (TEE). They never leave the secure hardware vault."
  },
  {
    title: "Attestation Challenges",
    description: "We embed media metadata (time, GPS) directly into the cryptographic challenge, creating an inseparable link between content and context."
  },
  {
    title: "Google Root of Trust",
    description: "All certificates are validated against authoritative roots, ensuring the device is genuine and uncompromised."
  }
];

export default function EnterpriseClient() {
    const scrollToContact = () => {
        document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <div className="min-h-screen font-sans">
      <Header></Header>
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">

        <main className="mt-12 space-y-24">
          
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
              For News Agencies & Intelligence
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              Eliminate Doubt.<br /><span className="text-teal-600 dark:text-teal-400">Publish Truth.</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              {enterpriseInfo.subtitle} Secure commercial licensing for media backed by Android Hardware Key Attestation.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={scrollToContact}
                className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-teal-500/20 flex items-center gap-2"
              >
                Inquire About Early Access <ArrowDown size={20} />
              </button>
            </div>
          </section>

          {/* Features Grid */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-teal-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/30 transition-colors">
                    <feature.icon className="text-teal-600 dark:text-teal-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* The Tech / Verification Architecture */}
          <section className="relative overflow-hidden bg-slate-900 rounded-2xl p-8 sm:p-12 text-white">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Lock size={400} />
            </div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">The "Lens-to-Ledger" Guarantee</h3>
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  Standard digital signatures aren't enough. Our backend validates the physical origin of data using the <strong>Trusted Execution Environment (TEE)</strong>. 
                </p>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  We verify that the signing key was generated inside a tamper-resistant hardware vault specifically for that unique moment in time.
                </p>
                <ul className="space-y-4">
                  {techSpecs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FileJson className="text-teal-400 mt-1 shrink-0" size={18} />
                      <div>
                        <strong className="text-teal-400 block text-sm uppercase tracking-wide">{spec.title}</strong>
                        <span className="text-slate-400 text-sm">{spec.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 font-mono text-xs text-teal-300 overflow-hidden">
                <p className="opacity-50 mb-2">// Sample Backend Verification Log</p>
                <div className="space-y-2">
                  <p>{'>'} Initiating handshake...</p>
                  <p>{'>'} Receiving X.509 Certificate Chain...</p>
                  <p>{'>'} <span className="text-white">Verifying Root:</span> Google Hardware Attestation Root OK</p>
                  <p>{'>'} <span className="text-white">Checking Key Origin:</span> Secure Element (StrongBox)</p>
                  <p>{'>'} <span className="text-white">Validating Challenge:</span> SHA-256(Metadata) MATCH</p>
                  <p className="text-green-400">{'>'} STATUS: VERIFIED AUTHENTIC</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact / CTA */}
          <section id="contact-form-section" className="p-8 sm:p-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/3">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Partner with Us</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  We are currently vetting enterprise partners for our private beta. Contact us to discuss integration and licensing opportunities.
                </p>
              </div>
              <div className="md:w-2/3">
                <ContactForm variant='enterprise' source='osp-enterprise'/>
              </div>
            </div>
          </section>

        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}
