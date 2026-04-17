import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/site';
import { cn } from '@/lib/utils';

export function Testimonials({ limit = 3, className }: { limit?: number; className?: string }) {
  const items = TESTIMONIALS.slice(0, limit);
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5', className)}>
      {items.map((t) => (
        <div key={t.id} className="bg-paper p-5 rounded-tile shadow-card border border-gray-light">
          <div className="flex text-primary mb-3">
            {Array.from({ length: t.rating || 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <p className="text-gray-dark text-[13px] leading-[1.55] mb-4">&ldquo;{t.text}&rdquo;</p>
          <div className="border-t border-gray-light pt-3">
            <div className="font-bold text-ink text-[13px]">{t.name}</div>
            <div className="text-[11px] text-gray-dark uppercase tracking-wider mt-0.5">
              {t.location} &middot; {t.service}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
