// app/components/Header.tsx
'use client'

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background backdrop-blur-md border-b border-slate-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <a href="/" className="font-display text-2xl uppercase tracking-wide text-foreground">
              DoubleThink <span className="text-teal-sovereign">Solutions</span>
            </a>
          </div>

          {/* Desktop Navigation - Row of Buttons/Links */}
          <div className="hidden md:flex space-x-8 items-center">
            
            <div className="flex space-x-8 items-center border-r border-slate-deep pr-8">
              <a href="/eclipse" className="font-ui text-sm uppercase tracking-widest text-neural hover:text-teal-sovereign transition-colors">
                Eclipse
              </a>
              <a href="/serapeum" className="font-ui text-sm uppercase tracking-widest text-neural hover:text-teal-sovereign transition-colors">
                Serapeum
              </a>
              <a href="/osp" className="font-ui text-sm uppercase tracking-widest text-neural hover:text-teal-sovereign transition-colors">
                OSP
              </a>
            </div>
            
            <a href="/#contact" className="px-6 py-2.5 bg-teal-sovereign text-cream-library font-ui text-sm uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-[0_0_15px_rgba(30,95,110,0.2)]">
              Initiate Contact
            </a>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-neural hover:text-cream-library focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-eclipse border-b border-slate-deep">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <div className="py-2 text-xs font-ui text-neural uppercase tracking-widest border-b border-slate-deep mb-2">
              Architecture
            </div>
            <a href="/eclipse" className="block px-3 py-3 text-sm font-ui uppercase tracking-widest text-cream-library hover:bg-slate-deep transition-colors">
              Eclipse
            </a>
            <a href="/libraric" className="block px-3 py-3 text-sm font-ui uppercase tracking-widest text-cream-library hover:bg-slate-deep transition-colors">
              Libraric
            </a>
            <a href="/osp" className="block px-3 py-3 text-sm font-ui uppercase tracking-widest text-cream-library hover:bg-slate-deep transition-colors">
              OSP
            </a>
            <div className="pt-4">
              <a href="/#contact" className="block w-full text-center px-4 py-4 bg-teal-sovereign text-cream-library font-ui text-sm uppercase tracking-widest hover:bg-opacity-90 transition-all">
                Initiate Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
