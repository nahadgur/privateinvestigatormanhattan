'use client';

import { ArrowRight } from 'lucide-react';

/**
 * Contained brand-band lead-capture banner used inside blog and guide article
 * bodies. Opens the existing pop-up lead modal (LeadFormModal) via `onOpen`.
 */
export function ArticleCtaBanner({ eyebrow, heading, subtext, buttonText, onOpen }: {
  eyebrow: string; heading: string; subtext: string; buttonText: string; onOpen: () => void;
}) {
  return (
    <div className="not-prose my-10 rounded-tile bg-ink text-white px-6 py-6 md:px-10 md:py-7 shadow-lg overflow-hidden relative">
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/15 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
        <div className="flex-1 min-w-0">
          <p className="text-primary text-[10px] font-extrabold uppercase tracking-widest mb-1.5">{eyebrow}</p>
          <h3 className="text-[18px] md:text-[22px] font-extrabold text-white mb-2 leading-snug tracking-tight">{heading}</h3>
          <p className="text-white/75 text-[13px] leading-relaxed">{subtext}</p>
        </div>
        <div className="flex-shrink-0">
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-2 bg-primary text-white font-bold text-[12px] uppercase tracking-widest py-3 px-5 rounded-chip hover:bg-white hover:text-ink transition-colors shadow-md whitespace-nowrap"
          >
            {buttonText} <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
