'use client'

import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-slate-deep pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <span className="font-display text-xl uppercase tracking-wide text-foreground">
              DoubleThink <span className="text-teal-sovereign">Solutions</span>
            </span>
            <p className="mt-4 font-sans text-sm text-neural leading-relaxed">
              Accessibility-first AI architectures and hardware-attested verification systems. Designed for sovereignty.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-ui text-xs text-amber-signal uppercase tracking-widest mb-6">Ecosystem</h4>
            <ul className="space-y-3 font-sans text-sm">
              <li><a href="/eclipse" className="text-neural hover:text-teal-sovereign transition-colors">Eclipse</a></li>
              <li><a href="/libraric" className="text-neural hover:text-teal-sovereign transition-colors">Libraric</a></li>
              <li><a href="/osp" className="text-neural hover:text-teal-sovereign transition-colors">OSP</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-ui text-xs text-amber-signal uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-3 font-sans text-sm">
              <li><a href="/#contact" className="text-neural hover:text-teal-sovereign transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-ui text-xs text-amber-signal uppercase tracking-widest mb-6">Connect</h4>
            <div className="flex space-x-5">
              <a href="https://github.com/DoubleThinkSolutions" target="_blank" rel="noopener noreferrer" className="text-neural hover:text-teal-sovereign transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/company/doublethink-solutions" target="_blank" rel="noopener noreferrer" className="text-neural hover:text-teal-sovereign transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-deep pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="font-sans text-xs text-slate-deep uppercase tracking-widest">
            Structural Alignment Built In.
          </p>
          <p className="font-sans text-xs text-neural">
            &copy; {new Date().getFullYear()} DoubleThink Solutions LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
