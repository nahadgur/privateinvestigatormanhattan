'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = { question: string; answer: string };

// NOTE: This component does not emit FAQPage JSON-LD. The pages that render
// it (service, service×location, location) emit their own FAQPage schema via
// buildFAQSchema() in data/schema-helpers.ts — emitting it here as well would
// duplicate the schema on every page that uses this component.

export function FAQ({ faqs, title = 'Frequently Asked Questions' }: { faqs: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section>
      <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight text-ink mb-5">{title}</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-paper border border-gray-light rounded-tile overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left font-bold text-[14px] text-ink hover:bg-gray-light/50 transition-colors"
            >
              <span className="pr-4">{faq.question}</span>
              <span className={`flex-shrink-0 transition-transform duration-300 bg-gray-light p-1 rounded-full ${openIndex === i ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-4 h-4 text-ink" />
              </span>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-5 text-gray-dark text-[13px] leading-[1.6] border-t border-gray-light pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
