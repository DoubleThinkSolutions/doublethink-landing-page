'use client'
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <a href="/" className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              DoubleThink <span className="text-teal-600 font-light">Solutions</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">

            {/* Products Dropdown Trigger */}
            <div 
            className="relative"
            onMouseEnter={() => setProductDropdown(true)}
            onMouseLeave={() => setProductDropdown(false)}
            >
            <button
                className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors"
                onClick={() => setProductDropdown(!productDropdown)}
            >
                Products <ChevronDown size={14} />
            </button>

            <div 
                className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 transition-all duration-200
                ${productDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
            >
                <div className="py-1" role="menu">
                <a href="/osp-enterprise" className="block px-4 py-2">OSP Enterprise</a>
                <a href="/osp-contributors" className="block px-4 py-2">OSP Contributors</a>
                <a href="/eclipse" className="block px-4 py-2">Eclipse</a>
                <a href="/guy" className="block px-4 py-2">Project Guy</a>
                <a href="/gremlin" className="block px-4 py-2">GREMLIN</a>
                </div>
            </div>
            </div>
            
            <a href="/#contact" className="px-4 py-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-bold hover:opacity-90 transition-opacity">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/#about" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800">Mission</a>
            <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Products</div>
            <a href="/osp-enterprise" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-slate-800 pl-6">OSP Enterprise</a>
            <a href="/osp-contributors" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-slate-800 pl-6">OSP Contributors</a>
            <a href="/eclipse" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-800 pl-6">Eclipse</a>
            <a href="/guy" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-800 pl-6">Project Guy</a>
            <a href="/gremlin" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-fuchsia-50 dark:hover:bg-slate-800 pl-6">GREMLIN</a>
            <a href="/#founders" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800">Team</a>
          </div>
        </div>
      )}
    </nav>
  );
}
