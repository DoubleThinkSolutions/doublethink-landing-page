'use client';

import { useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';
type FormMessage = string | null;

interface ContactFormProps {
  source: string;
  /** 
   * 'general': Standard contact form (default)
   * 'enterprise': Includes Company field, professional button text
   * 'contributor': Message is optional, "Join Waitlist" button
   * 'beta_waitlist': For product beta testers (Eclipse), simplified fields
   */
  variant?: 'general' | 'enterprise' | 'contributor' | 'beta_waitlist';
  buttonText?: string;
  messageLabel?: string;
  placeholder?: string;
}

export default function ContactForm({ variant = 'general', buttonText, messageLabel, placeholder, source }: ContactFormProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [formMessage, setFormMessage] = useState<FormMessage>(null);

  // Configuration based on variant
  const isEnterprise = variant === 'enterprise';
  const isContributor = variant === 'contributor';
  const isBeta = variant === 'beta_waitlist';
  
  const showCompanyField = isEnterprise;
  // Message is optional for contributors and beta testers
  const isMessageOptional = isContributor || isBeta;
  
  const getButtonText = () => {
    if (formState === 'loading') return 'Processing...';
    if (buttonText) return buttonText;
    if (isContributor) return 'Join Stringer Waitlist';
    if (isBeta) return 'Join Beta Waitlist';
    if (isEnterprise) return 'Request Access';
    return 'Send Message';
  };

  const getMessageLabel = () => {
      if (messageLabel) return messageLabel;
      if (isContributor) return "Additional Details";
      if (isBeta) return "What are you looking to filter? (Optional)";
      return "Message";
  };

  const getPlaceholder = () => {
      if (placeholder) return placeholder;
      if (isContributor) return "Tell us where you are located or what equipment you use...";
      if (isBeta) return "e.g. Profanity in games, NSFW on web...";
      return "";
  }

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
          company: showCompanyField ? company : null,
          email, 
          message,
          formType: variant, // Send the variant so the backend knows the context
          source
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setFormState('success');
      
      if (isBeta) {
        setFormMessage('You are on the list! We will email you when the Windows beta is ready.');
      } else if (isContributor) {
        setFormMessage('You have been added to the waitlist! We will contact you soon.');
      } else {
        setFormMessage('Thank you! Your message has been sent.');
      }
      
      // Reset form fields
      setName('');
      setCompany('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setFormState('error');
      setFormMessage(error instanceof Error ? error.message : 'An error occurred. Please try again later.');
      console.error('Contact form error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="block w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 shadow-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-400/20 transition-colors"
        />
      </div>

      {showCompanyField && (
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Company / Organization
          </label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            className="block w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 shadow-sm focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-400/20 transition-colors"
          />
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="block w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 shadow-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-400/20 transition-colors"
        />
      </div>

      <div>
        <div className="flex justify-between mb-2">
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                {getMessageLabel()}
            </label>
            {isMessageOptional && (
                <span className="text-xs text-slate-500 dark:text-slate-400 italic">Optional</span>
            )}
        </div>
        <textarea
          id="message"
          rows={isContributor || isBeta ? 3 : 5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required={!isMessageOptional}
          placeholder={getPlaceholder()}
          className="block w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 shadow-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-400/20 transition-colors resize-none"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={formState === 'loading'}
          className="w-full sm:w-auto inline-flex justify-center py-3 px-6 border border-transparent text-base font-medium rounded-lg text-white bg-teal-600 dark:bg-teal-500 transition-all hover:bg-teal-700 dark:hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-800 focus:ring-teal-500 disabled:bg-slate-400 dark:disabled:bg-slate-600 disabled:cursor-not-allowed hover:shadow-lg disabled:shadow-none"
        >
          {getButtonText()}
        </button>
      </div>

      {formMessage && (
        <p className={`mt-4 text-sm font-medium ${formState === 'error' ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
          {formMessage}
        </p>
      )}
    </form>
  );
}
