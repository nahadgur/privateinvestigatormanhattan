'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { getPublishedGuides } from '@/data/guides';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function GuidesIndexClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const guides = getPublishedGuides();

  return (
    <>
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div id="main-content" tabIndex={-1} />

      <section className="bg-ink text-white py-12 md:py-16">
        <div className="container-width">
          <Breadcrumbs items={[{ label: 'Guides' }]} light />
          <div className="max-w-3xl mt-3">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-primary mb-3">Pillar Guides</div>
            <h1 className="text-[32px] md:text-[42px] font-extrabold tracking-tight leading-[1.1] mb-5">
              Manhattan Private Investigator Guides
            </h1>
            <p className="text-[16px] md:text-[18px] text-white/80 leading-[1.55]">
              Long-form guides covering what you need to know before hiring a private investigator in Manhattan — pricing, process, licensing, and how the industry actually works.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-paper">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {guides.map(guide => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}/`}
                className="group block bg-paper border border-gray-mid rounded-tile overflow-hidden hover:border-primary hover:shadow-card transition-all"
              >
                {guide.featuredImage && (
                  <div className="aspect-[3/2] overflow-hidden bg-gray-light">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={guide.featuredImage}
                      alt={guide.featuredImageAlt || guide.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-primary mb-3">{guide.heroEyebrow}</div>
                  <h2 className="text-[18px] md:text-[20px] font-extrabold text-ink leading-tight mb-3 group-hover:text-primary transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-[13px] text-gray-dark leading-[1.6] mb-5">{guide.heroDescription}</p>
                  <div className="flex items-center justify-between text-[11px] text-gray-dark">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {guide.readingTimeMinutes} min
                      </span>
                      <span>Updated {formatDate(guide.lastUpdated)}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {guides.length === 0 && (
            <div className="text-center text-gray-dark py-12">
              No guides published yet. Check back soon.
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
