'use client';

import { useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';
type FormMessage = string | null;

interface ContactFormProps {
  source: string;
  buttonText?: string;
  messageLabel?: string;
  placeholder?: string;
}

export default function ContactForm({ 
  source, 
  buttonText = 'Send Message', 
  messageLabel = 'Message', 
  placeholder = 'How can we help you achieve structural alignment?' 
}: ContactFormProps) {
  
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
          source
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'System error. Please try again.');
      }

      setFormState('success');
      setFormMessage('Message received. We stay in the conversation.');
      
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setFormState('error');
      setFormMessage(error instanceof Error ? error.message : 'A structural error occurred. Please try again later.');
      console.error('Contact form error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <div>
        <label htmlFor="name" className="block font-ui text-xs text-neural uppercase tracking-widest mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="block w-full px-4 py-3 bg-background border border-neural text-foreground placeholder-slate-deep focus:outline-none focus:border-teal-sovereign focus:ring-1 focus:ring-teal-sovereign transition-colors font-sans rounded-sm shadow-inner"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-ui text-xs text-neural uppercase tracking-widest mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="block w-full px-4 py-3 bg-background border border-neural text-foreground placeholder-slate-deep focus:outline-none focus:border-teal-sovereign focus:ring-1 focus:ring-teal-sovereign transition-colors font-sans rounded-sm shadow-inner"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-ui text-xs text-neural uppercase tracking-widest mb-2">
          {messageLabel}
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder={placeholder}
          className="block w-full px-4 py-3 bg-background border border-neural text-foreground placeholder-slate-deep focus:outline-none focus:border-teal-sovereign focus:ring-1 focus:ring-teal-sovereign transition-colors font-sans rounded-sm resize-none shadow-inner"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={formState === 'loading'}
          className="w-full sm:w-auto px-8 py-3 bg-teal-sovereign text-cream-library font-ui text-sm uppercase tracking-widest hover:border-foreground/50 hover:-translate-y-1 hover:shadow-lg transition-all shadow-[0_0_15px_rgba(30,95,110,0.2)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
        >
          {formState === 'loading' ? 'Processing...' : buttonText}
        </button>
      </div>

      {formMessage && (
        <div className={`p-4 border font-sans text-sm ${
          formState === 'error' 
            ? 'bg-red-ethical/10 border-red-ethical text-red-ethical' 
            : 'bg-teal-sovereign/10 border-teal-sovereign text-teal-sovereign'
        }`}>
          {formMessage}
        </div>
      )}
    </form>
  );
}
