'use client';

import { StepComponentProps } from '@/app/lib/stepComponents';
import { useState } from 'react';
import { Typewriter } from '../Typewriter';

type FormState = 'idle' | 'loading' | 'success' | 'error';
type FormMessage = string | null;

export default function ContactStep({ onAnimationComplete }: StepComponentProps) {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [formMessage, setFormMessage] = useState<FormMessage>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setFormMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name,
          email, 
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'System error. Please try again.');
      }

      setFormState('success');
      
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setFormState('error');
      setFormMessage(error instanceof Error ? error.message : 'An error occurred. Please try again later.');
      console.error('Contact form error:', error);
    }
  };

  return (
    <div className="w-full mx-auto px-4 py-12 space-y-12 select-none">
      {formState === 'success' ? (
          <Typewriter
            text="Your message was received. We'll be in touch soon."
            delay={0.05}
            className="text-4xl md:text-5xl font-light tracking-tight text-foreground"
            onComplete={onAnimationComplete}
          />
      ) : (
        <>
        <div className="bottom-12 text-center">
          <Typewriter
            text="The humans await your transpondence." 
            delay={0.1} 
            className="text-4xl md:text-5xl font-light tracking-tight text-foreground"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-10 text-left">
          
          {/* Name Input */}
          <div className="group relative border-b border-neural/30 focus-within:border-teal-sovereign transition-colors duration-300">
            <label htmlFor="name" className="block font-ui text-[10px] text-neural uppercase tracking-widest pointer-events-none">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="off"
              className="block w-full pt-2 pb-3 bg-transparent text-foreground placeholder-neutral/40 focus:outline-none font-sans text-base transition-all"
            />
          </div>

          {/* Email Input */}
          <div className="group relative border-b border-neural/30 focus-within:border-teal-sovereign transition-colors duration-300">
            <label htmlFor="email" className="block font-ui text-[10px] text-neural uppercase tracking-widest pointer-events-none">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="off"
              className="block w-full pt-2 pb-3 bg-transparent text-foreground placeholder-neutral/40 focus:outline-none font-sans text-base transition-all"
            />
          </div>

          {/* Message Input */}
          <div className="group relative border-b border-neural/30 focus-within:border-teal-sovereign transition-colors duration-300">
            <label htmlFor="message" className="block font-ui text-[10px] text-neural uppercase tracking-widest pointer-events-none mb-1">
              What do you have to say?
            </label>
            <textarea
              id="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Your Words..."
              className="block w-full pt-1 pb-3 bg-transparent text-foreground placeholder-neutral/40 focus:outline-none font-sans text-base resize-none transition-all leading-relaxed"
            />
          </div>

          {/* Action Button */}
          <div className="pt-4 flex items-center justify-end gap-6">
            {/* System Feedback Notification - Displayed to the left of the send button */}
            {formState === 'error' && formMessage && (
              <div className="text-right text-red-ethical/90 font-sans text-xs tracking-wide uppercase max-w-md animate-fade-in">
                {formMessage}
              </div>
            )}

            {/* Action Button */}
            <button
              type="submit"
              disabled={formState === 'loading'}
              className="group relative flex items-center justify-center px-0 py-2 bg-transparent text-foreground font-ui text-xs uppercase tracking-widest transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            >
              <span className="relative z-10 flex items-center gap-2">
                {formState === 'loading' ? 'Processing' : 'Send'}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              {/* Minimal Underline Indicator */}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-teal-sovereign transition-all duration-300 group-hover:w-full" />
            </button>
          </div>
        </form>
        </>
      )}
    </div>
  );
}
