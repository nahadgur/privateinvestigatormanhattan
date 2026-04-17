'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, MapPin, Star } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { LOCATIONS, getCityBySlug } from '@/data/locations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { PricingSection } from '@/components/PricingSection';
import { NearbyAreasGrid } from '@/components/NearbyAreasGrid';
import { siteConfig } from '@/data/site';
import { serviceLocationContent } from '@/data/serviceLocationContent';
import { getCasePattern } from '@/data/locationCasePatterns';
import { toSlug } from '@/data/locations';
import { buildServiceLocationSchema, buildFAQSchema } from '@/data/schema-helpers';

export default function ServiceLocationPage({ params }: { params: { serviceSlug: string; locationSlug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const service = getServiceBySlug(params.serviceSlug);
  const cityName = getCityBySlug(params.locationSlug);
  if (!service || !cityName) notFound();

  const allCities = Object.values(LOCATIONS).flat();
  const content = serviceLocationContent[service.id] || serviceLocationContent['infidelity-investigation'];
  const heroDesc = content.heroDesc(cityName);
  const heroBullets = content.heroBullets(cityName);
  const trustLine = content.trustLine(cityName);
  const stepsHeading = content.stepsHeading(cityName);
  const steps = content.steps(cityName).slice(0, 3);
  const faqs = content.faqs(cityName).slice(0, 2);
  const casePattern = getCasePattern(service.slug, toSlug(cityName));

  const localBusinessSchema = buildServiceLocationSchema({
    serviceName: service.title,
    serviceSlug: service.slug,
    cityName,
    citySlug: params.locationSlug,
    description: heroDesc,
  });
  const faqSchema = buildFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-ink text-white relative overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt="" className="w-full h-full object-cover opacity-40" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
          </div>
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs
              items={[
                { label: 'Services', href: '/services/' },
                { label: service.title, href: `/services/${service.slug}/` },
                { label: cityName },
              ]}
              light
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-chip text-[11px] font-extrabold uppercase tracking-widest mb-5 border border-primary/30">
                  <MapPin className="w-3.5 h-3.5" /> Licensed Investigators in {cityName}
                </div>
                <h1 className="text-[2rem] md:text-[2.6rem] lg:text-[3rem] font-extrabold tracking-tight leading-[1.05] mb-5">
                  {service.title} in <span className="text-primary">{cityName}</span>
                </h1>
                <p className="text-[16px] text-white/80 mb-7 leading-[1.55]">{heroDesc}</p>
                <div className="space-y-3 mb-7">
                  {heroBullets.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-[14px] text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-[12px] text-white/60">
                  <div className="flex text-primary">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span>{trustLine}</span>
                </div>
              </div>
              <div>
                <HeroLeadForm city={cityName} service={service.title} />
              </div>
            </div>
          </div>
        </section>

        <div className="container-width py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              {casePattern && (
                <section className="mb-10 bg-paper rounded-tile border border-gray-light shadow-card p-6 md:p-8">
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-primary mb-5 flex items-center">
                    Local Case Patterns in {cityName}
                    <div className="flex-grow h-[1px] bg-gray-mid opacity-50 ml-3" />
                  </div>
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-[13px] font-bold uppercase tracking-wider text-ink mb-2">Common Case Profile</h3>
                      <p className="text-gray-dark text-[14px] leading-[1.7]">{casePattern.casePattern}</p>
                    </div>
                    <div>
                      <h3 className="text-[13px] font-bold uppercase tracking-wider text-ink mb-2">{cityName} Investigation Logistics</h3>
                      <p className="text-gray-dark text-[14px] leading-[1.7]">{casePattern.logistics}</p>
                    </div>
                    <div>
                      <h3 className="text-[13px] font-bold uppercase tracking-wider text-ink mb-2">Court Venue</h3>
                      <p className="text-gray-dark text-[14px] leading-[1.7]">{casePattern.venue}</p>
                    </div>
                  </div>
                </section>
              )}

              <NearbyAreasGrid cityName={cityName} serviceSlug={service.slug} serviceName={service.title} />

              <section className="mb-10">
                <h2 className="text-[22px] font-extrabold tracking-tight text-ink mb-5">{stepsHeading}</h2>
                <div className="space-y-3">
                  {steps.map((step, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-paper rounded-tile shadow-card border border-gray-light">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-[12px]">
                        {i + 1}
                      </div>
                      <p className="text-ink text-[13px] font-medium pt-1 leading-[1.5]">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              <PricingSection cityName={cityName} serviceId={service.id} serviceName={service.title} />

              {faqs.length > 0 && (
                <div className="mb-10">
                  <FAQ faqs={faqs} title={`${service.title} in ${cityName}: Common Questions`} />
                </div>
              )}
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <div className="bg-paper p-6 rounded-tile shadow-card border border-gray-light">
                  <h3 className="text-[14px] font-extrabold text-ink uppercase tracking-widest mb-4">
                    Other Services in {cityName}
                  </h3>
                  <ul className="space-y-2 mb-7">
                    {services
                      .filter((s) => s.id !== service.id)
                      .map((s) => (
                        <li key={s.id}>
                          <Link
                            href={`/services/${s.slug}/${params.locationSlug}/`}
                            className="block px-3 py-2.5 rounded-chip bg-gray-light border border-gray-light hover:border-primary/30 hover:bg-primary/5 text-ink hover:text-primary transition-all text-[12px] font-medium"
                          >
                            {s.title} in {cityName}
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <h3 className="text-[14px] font-extrabold text-ink uppercase tracking-widest mb-4">
                    {service.title} Elsewhere
                  </h3>
                  <ul className="space-y-2">
                    {allCities
                      .filter((c) => c !== cityName)
                      .slice(0, 5)
                      .map((city) => {
                        const slug = city
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, '-')
                          .replace(/(^-|-$)/g, '');
                        return (
                          <li key={city}>
                            <Link
                              href={`/services/${service.slug}/${slug}/`}
                              className="block px-3 py-2.5 rounded-chip bg-gray-light border border-gray-light hover:border-primary/30 hover:bg-primary/5 text-ink hover:text-primary transition-all text-[12px] font-medium"
                            >
                              {service.title} in {city}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom CTA */}
          <div className="bg-ink rounded-tile p-8 md:p-12 text-center mt-10">
            <h2 className="text-[24px] md:text-[28px] font-extrabold tracking-tight text-white mb-3">
              Get {service.title} Advice in {cityName}
            </h2>
            <p className="text-white/70 mb-7 max-w-2xl mx-auto text-[14px] leading-[1.6]">
              Submit your inquiry in under two minutes. We match you with vetted {cityName} private investigators with no obligation.
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
