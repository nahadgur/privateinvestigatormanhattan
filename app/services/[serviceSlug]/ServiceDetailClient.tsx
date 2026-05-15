'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { MapPin, Clock, Shield, Star, Search, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { services, type Service } from '@/data/services';
import { LOCATIONS, toSlug } from '@/data/locations';
import { FAQS_SERVICES } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TrustBadges } from '@/components/TrustBadges';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { PricingSection } from '@/components/PricingSection';
import { serviceContent } from '@/data/serviceContent';
import { siteConfig } from '@/data/site';
import { buildServicePageSchema, buildFAQSchema } from '@/data/schema-helpers';

export function ServiceDetailClient({ service }: { service: Service }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLocations, setShowLocations] = useState(false);

  const content = serviceContent[service.id] || serviceContent['surveillance'];
  const relatedServices = services.filter((s) => s.id !== service.id);

  const filteredLocations = useMemo(() => {
    if (!searchQuery) return LOCATIONS;
    const result: Record<string, string[]> = {};
    Object.entries(LOCATIONS).forEach(([region, cities]) => {
      const filtered = cities.filter((city) => city.toLowerCase().includes(searchQuery.toLowerCase()));
      if (filtered.length > 0) result[region] = filtered;
    });
    return result;
  }, [searchQuery]);

  const totalCities = Object.values(LOCATIONS).flat().length;

  const combinedFaqs = [...(service.faqs || []), ...FAQS_SERVICES];

  const serviceSchema = buildServicePageSchema({
    serviceName: service.title,
    serviceSlug: service.slug,
    description: service.description,
    faqs: combinedFaqs,
  });

  const faqSchema = buildFAQSchema(combinedFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main id="main-content" className="flex-grow">
        {/* Hero */}
        <section className="bg-ink text-white relative overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt="" className="w-full h-full object-cover opacity-35" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
          </div>
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[{ label: 'Services', href: '/services/' }, { label: service.title }]} light />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-chip text-[11px] font-extrabold uppercase tracking-widest mb-5 border border-primary/30">
                  <Shield className="w-3.5 h-3.5" /> NYS-Licensed Investigators
                </div>
                <h1 className="text-[2rem] md:text-[2.6rem] lg:text-[3rem] font-extrabold tracking-tight leading-[1.05] mb-5">
                  {service.title}
                </h1>
                <p className="text-[16px] text-white/80 mb-7 leading-[1.55]">{service.description}</p>
                <div className="space-y-2.5">
                  {['Free confidential consultation', 'Every investigator NYS-licensed', 'Manhattan + NYC coverage'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-[14px] text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <HeroLeadForm service={service.title} />
              </div>
            </div>
          </div>
        </section>

        <TrustBadges />

        <div className="container-width py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-[24px] md:text-[28px] font-extrabold tracking-tight text-ink mb-5">
                  {service.title}: What You Need to Know
                </h2>
                <div className="max-w-none text-gray-dark text-[14px] leading-[1.7] space-y-4">
                  {content.intro.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-[22px] font-extrabold tracking-tight text-ink mb-5">Benefits of {service.title}</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {content.benefits.map((b, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-paper rounded-tile border border-gray-light shadow-card">
                      <div className="bg-primary/10 p-2 rounded-chip text-primary flex-shrink-0 h-fit">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-ink text-[14px] mb-1">{b.title}</h3>
                        <p className="text-[12px] text-gray-dark leading-[1.5]">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-5">
                  <div>
                    <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight text-ink mb-1.5">
                      Find {service.title} Specialists
                    </h2>
                    <p className="text-gray-dark text-[13px]">
                      Specialists for {service.title.toLowerCase()} covering {totalCities} Manhattan areas.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowLocations(!showLocations)}
                    className="flex items-center gap-1.5 text-primary font-bold text-[11px] uppercase tracking-widest hover:underline self-start md:self-auto whitespace-nowrap"
                  >
                    {showLocations ? 'Hide Locations' : `Show All ${totalCities}+`}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showLocations ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <div className="mb-5 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-dark w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search your area..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        if (!showLocations) setShowLocations(true);
                      }}
                      className="w-full pl-11 pr-4 py-3 rounded-chip border border-gray-mid bg-gray-light text-ink text-[13px] focus:outline-none focus:ring-2 focus:ring-ink focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div
                  className={`transition-all duration-500 overflow-hidden ${showLocations ? 'max-h-[9999px] opacity-100' : 'max-h-0 opacity-0'}`}
                  aria-hidden={!showLocations}
                >
                  <div className="space-y-6 pb-3">
                    {Object.entries(filteredLocations).map(([region, cities]) => (
                      <div key={region}>
                        <h3 className="text-[13px] font-extrabold uppercase tracking-widest text-primary mb-3">
                          {region}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                          {cities.map((city) => (
                            <Link
                              key={city}
                              href={`/services/${service.slug}/${toSlug(city)}/`}
                              className="group flex items-center gap-2 p-2.5 bg-gray-light rounded-chip hover:bg-primary/10 transition-all border border-gray-light hover:border-primary/30"
                            >
                              <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
                              <span className="text-ink group-hover:text-primary text-[11px] font-medium truncate">
                                {city}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {!showLocations && (
                  <p className="text-[12px] text-gray-dark">
                    Search for your area above or{' '}
                    <button onClick={() => setShowLocations(true)} className="text-primary font-bold hover:underline">
                      browse all locations
                    </button>{' '}
                    to find {service.title.toLowerCase()} specialists near you.
                  </p>
                )}
              </section>

              <section className="mb-12">
                <h2 className="text-[22px] font-extrabold tracking-tight text-ink mb-4">Do You Need {service.title}?</h2>
                <p className="text-gray-dark text-[14px] leading-[1.6] mb-4">{content.candidateIntro}</p>
                <div className="bg-primary/5 rounded-tile p-6 border border-primary/15">
                  <ul className="space-y-3">
                    {content.candidates.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-ink">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-[13px] leading-[1.5]">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-dark text-[12px] mt-4 leading-[1.6]">
                  Our matched investigators offer a free confidential consultation to assess your case and provide a transparent cost estimate before any work begins.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-[22px] font-extrabold tracking-tight text-ink mb-5">How the Process Works</h2>
                <div className="space-y-3">
                  {content.process.map((step, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-paper rounded-tile shadow-card border border-gray-light">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-[12px]">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-ink text-[14px] mb-0.5">{step.title}</h3>
                        <p className="text-[12px] text-gray-dark leading-[1.5]">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <PricingSection serviceId={service.id} serviceName={service.title} />

              <div className="mb-12">
                <FAQ faqs={combinedFaqs} title={`${service.title} FAQs`} />
              </div>

            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <div className="bg-paper p-6 rounded-tile shadow-card border border-gray-light">
                  <h3 className="text-[15px] font-extrabold tracking-tight text-ink mb-2">
                    Get Matched for {service.title}
                  </h3>
                  <p className="text-gray-dark text-[12px] mb-5 leading-[1.5]">
                    Free confidential consultation with a licensed Manhattan PI.
                  </p>
                  <button onClick={() => setIsModalOpen(true)} className="btn-primary w-full">
                    Request Consultation
                  </button>
                  <div className="mt-5 pt-5 border-t border-gray-light space-y-3">
                    {[
                      { icon: <Clock className="w-3.5 h-3.5 text-primary" />, text: 'Response within 24 hours' },
                      { icon: <Shield className="w-3.5 h-3.5 text-primary" />, text: 'NYS-licensed investigators' },
                      { icon: <Star className="w-3.5 h-3.5 text-primary" />, text: 'Strictly confidential' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="bg-primary/10 p-1.5 rounded-full">{item.icon}</div>
                        <span className="text-[12px] font-medium text-ink">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-ink text-white p-6 rounded-tile">
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-primary mb-2">Starting Retainer</div>
                  <h3 className="text-[24px] font-extrabold tracking-tight mb-2">From $1,500</h3>
                  <p className="text-white/70 text-[12px] mb-4 leading-[1.5]">
                    Confidential consultations. Flexible retainer arrangements for Manhattan investigations.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="block w-full bg-white text-ink text-center font-bold uppercase tracking-widest py-3 px-5 rounded-chip hover:bg-primary hover:text-white transition-colors text-[12px]"
                  >
                    Get Free Quote
                  </button>
                </div>

                <div className="bg-paper p-5 rounded-tile border border-gray-light">
                  <h3 className="text-[11px] font-extrabold text-ink uppercase tracking-widest mb-3">Other Services</h3>
                  <div className="space-y-2">
                    {relatedServices.map((s) => (
                      <Link
                        key={s.id}
                        href={`/services/${s.slug}/`}
                        className="flex items-center gap-2 text-[12px] text-gray-dark hover:text-primary transition-colors"
                      >
                        <ArrowRight className="w-3 h-3" /> {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
