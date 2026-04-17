'use client';
import Link from 'next/link';
import { Shield, ArrowRight } from 'lucide-react';
import type { Service } from '@/data/services';

export function ServiceBanner({ service }: { service: Service }) {
  return (
    <div className="not-prose my-10 rounded-tile bg-ink text-white p-6 md:p-8 shadow-lg overflow-hidden relative">
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/15 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 bg-primary/20 border border-primary/30 rounded-tile flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-primary text-[10px] font-extrabold uppercase tracking-widest mb-1.5">Featured Service</p>
          <h3 className="text-[18px] md:text-[22px] font-extrabold text-white mb-2 leading-snug tracking-tight">
            {service.title}
          </h3>
          <p className="text-white/75 text-[13px] leading-relaxed line-clamp-2">{service.description}</p>
        </div>
        <div className="flex-shrink-0">
          <Link
            href={`/services/${service.slug}/`}
            className="inline-flex items-center gap-2 bg-primary text-white font-bold text-[12px] uppercase tracking-widest py-3 px-5 rounded-chip hover:bg-white hover:text-ink transition-colors shadow-md whitespace-nowrap"
          >
            Find Investigators <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
