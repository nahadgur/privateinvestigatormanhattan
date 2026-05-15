'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { MapPin, Search } from 'lucide-react';
import { LOCATIONS, toSlug } from '@/data/locations';
import { siteConfig, FAQS_LOCATION } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';
import { TrustBadges } from '@/components/TrustBadges';

export function LocationIndexClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = useMemo(() => {
    if (!searchQuery) return LOCATIONS;
    const result: Record<string, string[]> = {};
    Object.entries(LOCATIONS).forEach(([region, cities]) => {
      const filtered = cities.filter((city) => city.toLowerCase().includes(searchQuery.toLowerCase()));
      if (filtered.length > 0) result[region] = filtered;
    });
    return result;
  }, [searchQuery]);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main id="main-content" className="flex-grow">
        <Hero
          title={`${siteConfig.name} by Location`}
          subtitle="We cover neighborhoods across Manhattan. Search your area to see which licensed investigators serve it."
          image="/images/hero-main.png"
          onOpenModal={() => setIsModalOpen(true)}
        />

        <TrustBadges />

        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-xl mx-auto mb-10">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-dark w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search Manhattan areas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-chip border border-gray-mid bg-paper text-ink text-[14px] focus:outline-none focus:ring-2 focus:ring-ink focus:border-transparent transition"
                />
              </div>
            </div>

            <div className="space-y-10">
              {Object.entries(filteredLocations).map(([region, cities]) => (
                <div key={region}>
                  <h2 className="text-[13px] font-extrabold uppercase tracking-widest text-primary mb-4 flex items-center">
                    {region}
                    <div className="flex-grow h-[1px] bg-gray-mid opacity-50 ml-3" />
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                    {cities.map((city) => (
                      <Link
                        key={city}
                        href={`/location/${toSlug(city)}/`}
                        className="group block bg-paper hover:bg-primary/5 border border-gray-light hover:border-primary/30 rounded-chip p-3 transition-all"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span className="font-medium text-ink group-hover:text-primary text-[12px] truncate">{city}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-paper">
          <div className="container-width max-w-3xl">
            <FAQ faqs={FAQS_LOCATION} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
