'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { CheckCircle, MapPin, Search } from 'lucide-react';
import { LOCATIONS, toSlug } from '@/data/locations';
import { locationDirectoryFeaturedImage, locationFeaturedImages } from '@/data/featuredImages';
import { siteConfig, FAQS_LOCATION } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
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
        <section className="relative min-h-[440px] overflow-hidden bg-ink text-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={locationDirectoryFeaturedImage.src}
            alt={locationDirectoryFeaturedImage.alt}
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          <div className="container-width relative flex min-h-[440px] items-end py-10 md:items-center md:py-16">
            <div className="max-w-2xl rounded-tile border border-white/10 bg-black/60 p-6 shadow-lg backdrop-blur-[2px] md:p-8">
              <h1 className="text-[2rem] font-extrabold leading-[1.05] tracking-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.8)] md:text-[2.8rem] lg:text-[3.2rem]">
                {siteConfig.name} by Location
              </h1>
              <p className="mt-5 text-[16px] leading-[1.5] text-white/85 md:text-[17px]">
                We cover neighborhoods across Manhattan. Search your area to see which licensed investigators serve it.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => setIsModalOpen(true)} className="btn-primary">
                  Request Consultation
                </button>
                <Link
                  href="/services/"
                  className="inline-flex items-center justify-center rounded-chip border border-white/25 bg-white/10 px-5 py-3 text-[12px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/20"
                >
                  View Services
                </Link>
              </div>
              <div className="mt-7 flex flex-wrap gap-5 text-[12px] font-medium text-white/80">
                {['NYS-Licensed Investigators', 'Confidential Consultation', 'Matched Within 24 Hours'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

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
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {cities.map((city) => {
                      const slug = toSlug(city);
                      const image = locationFeaturedImages[slug];

                      return (
                        <Link
                          key={city}
                          href={`/location/${slug}/`}
                          className="group block overflow-hidden rounded-tile border border-gray-light bg-paper shadow-card transition-all hover:border-primary/30 hover:shadow-lg"
                        >
                          {image && (
                            <div className="aspect-[3/2] overflow-hidden bg-gray-light">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                              />
                            </div>
                          )}
                          <div className="flex items-center gap-2 p-4">
                            <MapPin className="h-4 w-4 flex-shrink-0 text-primary" />
                            <span className="truncate text-[13px] font-bold text-ink transition-colors group-hover:text-primary">{city}</span>
                          </div>
                        </Link>
                      );
                    })}
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
