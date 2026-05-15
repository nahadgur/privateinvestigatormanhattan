'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { LeadFormModal } from '@/components/LeadFormModal';
import { TrustBadges } from '@/components/TrustBadges';

export function ServicesIndexClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main id="main-content" className="flex-grow">
        <Hero
          title={`${siteConfig.name} Services`}
          subtitle="Browse our specialist investigation categories. Select the service that matches your situation and we will connect you with vetted, NYS-licensed Manhattan investigators."
          image="/images/hero-services.png"
          showCta={false}
          showTrust={false}
        />

        <TrustBadges />

        <section className="section-padding">
          <div className="container-width">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}/`}
                  className="group flex gap-5 p-5 bg-paper rounded-tile border border-gray-light shadow-card hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-28 h-28 rounded-tile overflow-hidden flex-shrink-0 bg-gray-light">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <h2 className="text-[17px] font-extrabold text-ink group-hover:text-primary tracking-tight mb-1.5 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-[12px] text-gray-dark mb-3 flex-grow leading-[1.5] line-clamp-3">{service.description}</p>
                    <span className="text-primary font-bold uppercase tracking-widest text-[11px] flex items-center gap-1">
                      View Service <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
