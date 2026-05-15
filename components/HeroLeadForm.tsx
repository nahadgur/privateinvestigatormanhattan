'use client';

import { services } from '@/data/services';
import { useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { readAttribution } from './AttributionCapture';

interface HeroLeadFormProps {
  city?: string;
  service?: string;
}

export function HeroLeadForm({ city, service }: HeroLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const startedRef = useRef<number>(Date.now());
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: city || '',
    treatment: service || '',
    _hp_company: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    const att = readAttribution();
    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location || city || '',
        treatment: formData.treatment || service || '',
        page: window.location.pathname,
        source: 'hero-form',
        _hp_company: formData._hp_company,
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
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setError('Something went wrong. Please try again.');
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-chip border border-gray-mid bg-gray-light text-ink placeholder-gray-dark text-[14px] focus:outline-none focus:ring-2 focus:ring-ink focus:border-transparent transition";

  if (isSuccess) {
    return (
      <div className="bg-paper text-ink rounded-tile p-8 shadow-2xl border border-gray-light flex flex-col items-center justify-center text-center gap-4 min-h-[340px]">
        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-extrabold tracking-tight">Request Received.</h3>
        <p className="text-gray-dark text-[13px] leading-[1.5]">
          We&apos;ve matched you with a licensed private investigator{city ? ` in ${city}` : ''}. Check your email for next steps.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-paper text-ink rounded-tile p-6 md:p-7 shadow-2xl border border-gray-light">
      <div className="mb-5">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-widest rounded-chip mb-3">
          Free Matching Service
        </span>
        <h3 className="text-[20px] font-extrabold leading-tight tracking-tight">
          Get Matched{city ? ` in ${city}` : ''}
        </h3>
        <p className="text-gray-dark text-[12px] mt-1">
          A licensed investigator will contact you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Honeypot — hidden from real users, bots fill it */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}>
          <label htmlFor="hlf-hp">Company name (leave blank)</label>
          <input id="hlf-hp" name="_hp_company" type="text" tabIndex={-1} autoComplete="off" value={formData._hp_company} onChange={handleChange} />
        </div>

        <input required name="fullName" type="text" value={formData.fullName} onChange={handleChange} placeholder="Full Name *" className={inputClass} />

        <div className="grid grid-cols-2 gap-3">
          <input required name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number *" className={inputClass} />
          <input required name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" className={inputClass} />
        </div>

        <select required name="treatment" value={formData.treatment} onChange={handleChange} className={inputClass + " appearance-none cursor-pointer"}>
          <option value="" disabled>What type of service? *</option>
          {services.map(s => (
            <option key={s.id} value={s.title}>{s.title}</option>
          ))}
        </select>

        {!city && (
          <input required name="location" type="text" value={formData.location} onChange={handleChange} placeholder="Manhattan area or ZIP *" className={inputClass} />
        )}

        {error && (
          <p className="text-[12px] text-red-600 font-medium" role="alert">{error}</p>
        )}

        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full bg-primary hover:bg-ink disabled:opacity-60 text-white font-bold uppercase tracking-widest py-3 px-6 rounded-chip transition-colors text-[12px] mt-1"
        >
          {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
        </button>

        <div className="flex items-center justify-center gap-4 pt-1">
          {['100% Free', 'No Spam', '24hr Response'].map(item => (
            <span key={item} className="flex items-center gap-1 text-xs text-green-600 font-medium">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              {item}
            </span>
          ))}
        </div>
      </form>
    </div>
  );
}
