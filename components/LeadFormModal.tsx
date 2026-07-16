'use client';

import { useState, useEffect, useRef } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { readAttribution } from './AttributionCapture';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [animationState, setAnimationState] = useState<'idle' | 'entering' | 'exiting'>('idle');
  const startedRef = useRef<number>(Date.now());

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setAnimationState('entering');
      setError('');
      startedRef.current = Date.now();
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
    setError('');
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);
      const fullName = String(fd.get('fullName') ?? '');
      const phone = String(fd.get('phone') ?? '');
      const email = String(fd.get('email') ?? '');
      const location = String(fd.get('location') ?? '');
      const hp = String(fd.get('_hp_company') ?? '');
      const att = readAttribution();

      const payload = {
        fullName,
        phone,
        email,
        location,
        page: window.location.pathname,
        source: 'modal',
        _hp_company: hp,
        _form_started: startedRef.current,
        ...att,
      };

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data?.ok) {
        setError('Something went wrong. Please try again.');
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => { setIsSuccess(false); onClose(); }, 3000);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setError('Something went wrong. Please try again.');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const inputClass =
    "w-full px-4 py-3 rounded-chip border border-gray-mid bg-gray-light text-ink placeholder-gray-dark text-base focus:outline-none focus:ring-2 focus:ring-ink focus:border-transparent transition";

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
                {/* Honeypot — hidden from real users, bots fill it */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}>
                  <label htmlFor="m-hp">Company name (leave blank)</label>
                  <input id="m-hp" name="_hp_company" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <input required name="fullName" type="text" placeholder="Full name" className={inputClass} />
                <input required name="phone" type="tel" placeholder="Phone number" className={inputClass} />
                <input required name="email" type="email" placeholder="Email address" className={inputClass} />
                <input required name="location" type="text" placeholder="Manhattan area / neighborhood" className={inputClass} />

                {error && (
                  <p className="text-[12px] text-red-600 font-medium" role="alert">{error}</p>
                )}

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
