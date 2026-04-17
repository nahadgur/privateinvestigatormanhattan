'use client';

import { siteConfig } from '@/data/site';
import { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyO96Pk25jkWPqYmbYKILz3POJm4YWNtM7IKuy_3yMKDIkHcrp7u1oI9Pu12VXkHCcT/exec';

export function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [animationState, setAnimationState] = useState<'idle' | 'entering' | 'exiting'>('idle');

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setAnimationState('entering');
    } else if (shouldRender) {
      setAnimationState('exiting');
      const timer = setTimeout(() => {
        setShouldRender(false);
        setAnimationState('idle');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const form = e.currentTarget;
      const fullName = (form.elements[0] as HTMLInputElement).value;
      const phone = (form.elements[1] as HTMLInputElement).value;
      const email = (form.elements[2] as HTMLInputElement).value;
      const location = (form.elements[3] as HTMLInputElement).value;

      const payload = {
        fullName,
        phone,
        email,
        location,
        page: window.location.href,
        source: siteConfig.name,
      };

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data: any = {};
      try { data = JSON.parse(text); } catch {}

      if (data && data.ok === false) throw new Error(data.error || 'Submission failed');

      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => { setIsSuccess(false); onClose(); }, 3000);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const inputClass =
    "w-full px-4 py-3 rounded-chip border border-gray-mid bg-gray-light text-ink placeholder-gray-dark text-[14px] focus:outline-none focus:ring-2 focus:ring-ink focus:border-transparent transition";

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm
        ${animationState === 'entering' ? 'animate-backdrop-in' : animationState === 'exiting' ? 'animate-backdrop-out' : 'opacity-100'}`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative w-full max-w-lg overflow-hidden bg-paper rounded-tile shadow-2xl
          ${animationState === 'entering' ? 'animate-modal-in' : 'animate-modal-out'}`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-dark hover:text-ink hover:bg-gray-light rounded-full transition-all z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {isSuccess ? (
            <div className="flex flex-col items-center text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">Request Received.</h2>
              <p className="text-gray-dark text-[13px]">We&apos;ve matched you with a licensed private investigator. Check your email for next steps.</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-widest rounded-chip mb-3">
                  Free Matching Service
                </span>
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">Find Your Investigator</h2>
                <p className="text-gray-dark text-[12px] mt-1">Share your details and we will connect you with vetted specialists.</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input required type="text" placeholder="Full name" className={inputClass} />
                <input required type="tel" placeholder="Phone number" className={inputClass} />
                <input required type="email" placeholder="Email address" className={inputClass} />
                <input required type="text" placeholder="Manhattan area / neighborhood" className={inputClass} />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-ink disabled:opacity-60 text-white font-bold uppercase tracking-widest py-3 px-6 rounded-chip transition-colors text-[12px] mt-1"
                >
                  {isSubmitting ? 'Sending...' : 'Request Consultation'}
                </button>

                <p className="text-center text-[11px] text-gray-dark mt-1">
                  Free service. No obligation. Strictly confidential.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
