'use client'
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <span className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              DoubleThink <span className="text-teal-600 font-light">Solutions</span>
            </span>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Accessibility-first AI architectures and hardware-attested verification systems.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">Ecosystem</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/osp-enterprise" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400">OSP Enterprise</a></li>
              <li><a href="/osp-contributors" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400">OSP Contributors</a></li>
              <li><a href="/eclipse" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400">Eclipse</a></li>
              <li><a href="/guy" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400">Project Guy</a></li>
              <li><a href="/gremlin" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400">GREMLIN</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#contact" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/DoubleThinkSolutions" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/company/doublethink-solutions" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            &copy; {new Date().getFullYear()} DoubleThink Solutions LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
