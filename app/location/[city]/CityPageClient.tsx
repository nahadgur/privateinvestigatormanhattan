'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle, Clock, Shield, Star } from 'lucide-react';
import { services } from '@/data/services';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { LeadFormModal } from '@/components/LeadFormModal';
import { PricingSection } from '@/components/PricingSection';
import { NearbyAreasGrid } from '@/components/NearbyAreasGrid';
import { siteConfig } from '@/data/site';
import { cityPageContent } from '@/data/cityContent';
import { buildLocationPageSchema, buildFAQSchema } from '@/data/schema-helpers';

export function CityPageClient({ cityName, citySlug }: { cityName: string; citySlug: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cityFaqs = cityPageContent.faqs(cityName);
  const whyCards = cityPageContent.matchingCards(cityName);
  const introParagraphs = cityPageContent.introParagraphs(cityName);

  const localBusinessSchema = buildLocationPageSchema({
    cityName,
    citySlug,
    description: `Find licensed private investigators in ${cityName}. Free confidential consultation, no obligation.`,
  });

  const faqSchema = buildFAQSchema(cityFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-ink text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(185,55,41,0.25),transparent_60%)] pointer-events-none" />
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[{ label: 'Locations', href: '/location/' }, { label: cityName }]} light />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-chip text-[11px] font-extrabold uppercase tracking-widest mb-5 border border-primary/30">
                  <MapPin className="w-3.5 h-3.5" /> Private Investigators in {cityName}
                </div>
                <h1 className="text-[2rem] md:text-[2.6rem] lg:text-[3rem] font-extrabold tracking-tight leading-[1.05] mb-5">
                  Private Investigators in <span className="text-primary">{cityName}</span>
                </h1>
                <p className="text-[16px] text-white/80 leading-[1.55]">
                  Find licensed private investigators in {cityName}. Free confidential consultation, no obligation to proceed.
                </p>
              </div>
              <div>
                <HeroLeadForm city={cityName} />
              </div>
            </div>
          </div>
        </section>

        <div className="container-width py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <section className="mb-10">
                <h2 className="text-[24px] md:text-[28px] font-extrabold tracking-tight text-ink mb-4">
                  {cityPageContent.introHeading(cityName)}
                </h2>
                <div className="max-w-none text-gray-dark text-[14px] leading-[1.7] space-y-4">
                  {introParagraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-[22px] font-extrabold tracking-tight text-ink mb-5">
                  Services Available in {cityName}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}/${citySlug}/`}
                      className="block group bg-paper rounded-tile shadow-card hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-light hover:border-primary/30"
                    >
                      <div className="h-32 overflow-hidden bg-gray-light">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-[15px] font-extrabold tracking-tight text-ink group-hover:text-primary mb-1.5 transition-colors">
                          {service.title} in {cityName}
                        </h3>
                        <p className="text-[12px] text-gray-dark mb-3 line-clamp-2 leading-[1.5]">
                          {service.description}
                        </p>
                        <span className="text-primary font-bold uppercase tracking-widest text-[11px] flex items-center gap-1">
                          Get Matched <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              <PricingSection cityName={cityName} />

              <section className="mb-12">
                <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight text-ink mb-5">
                  What You Get When We Match You in {cityName}
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {whyCards.map((item, i) => {
                    const icons: Record<string, React.ReactNode> = {
                      Star: <Star className="w-4 h-4" />,
                      Shield: <Shield className="w-4 h-4" />,
                      Clock: <Clock className="w-4 h-4" />,
                      CheckCircle: <CheckCircle className="w-4 h-4" />,
                    };
                    return (
                      <div key={i} className="flex gap-4 p-5 bg-paper rounded-tile shadow-card border border-gray-light">
                        <div className="bg-primary/10 p-2 rounded-chip text-primary flex-shrink-0 h-fit">
                          {icons[item.iconName] || <Star className="w-4 h-4" />}
                        </div>
                        <div>
                          <h3 className="font-bold text-ink text-[14px] mb-1">{item.title}</h3>
                          <p className="text-[12px] text-gray-dark leading-[1.5]">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <NearbyAreasGrid cityName={cityName} />

              <div className="mb-10">
                <FAQ faqs={cityFaqs} title={`${siteConfig.name} in ${cityName}: Common Questions`} />
              </div>

            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <div className="bg-paper p-6 rounded-tile shadow-card border border-gray-light">
                  <h3 className="text-[15px] font-extrabold tracking-tight text-ink mb-2">
                    {cityPageContent.sidebarCta(cityName).heading}
                  </h3>
                  <p className="text-gray-dark text-[12px] mb-5 leading-[1.5]">
                    {cityPageContent.sidebarCta(cityName).description}
                  </p>
                  <button onClick={() => setIsModalOpen(true)} className="btn-primary w-full">
                    Request Consultation
                  </button>
                  <div className="mt-5 pt-5 border-t border-gray-light space-y-3">
                    {cityPageContent.sidebarTrustPoints(cityName).map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="bg-primary/10 p-1.5 rounded-full">
                          {
                            [
                              <Clock key="c" className="w-3.5 h-3.5 text-primary" />,
                              <Shield key="s" className="w-3.5 h-3.5 text-primary" />,
                              <Star key="st" className="w-3.5 h-3.5 text-primary" />,
                            ][i % 3]
                          }
                        </div>
                        <span className="text-[12px] font-medium text-ink">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-ink text-white p-6 rounded-tile">
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-primary mb-2">
                    {cityPageContent.sidebarFinance(cityName).heading}
                  </div>
                  <p className="text-white/70 text-[12px] mb-4 leading-[1.5]">
                    {cityPageContent.sidebarFinance(cityName).description}
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="block w-full bg-white text-ink text-center font-bold uppercase tracking-widest py-3 px-5 rounded-chip hover:bg-primary hover:text-white transition-colors text-[12px]"
                  >
                    Get Free Quote
                  </button>
                </div>
              </div>
            </aside>
          </div>

          <div className="bg-ink rounded-tile p-8 md:p-12 text-center mt-10">
            <h2 className="text-[24px] md:text-[28px] font-extrabold tracking-tight text-white mb-3">
              {cityPageContent.bottomCta(cityName).heading}
            </h2>
            <p className="text-white/70 mb-7 max-w-2xl mx-auto text-[14px] leading-[1.6]">
              {cityPageContent.bottomCta(cityName).description}
            </p>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary">
              Request Free Consultation
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
