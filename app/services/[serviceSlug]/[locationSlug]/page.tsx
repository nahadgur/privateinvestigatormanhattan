'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, MapPin, Star, Clock, Shield, Award, Users } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { LOCATIONS, getCityBySlug } from '@/data/locations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Testimonials } from '@/components/Testimonials';
import { LeadFormModal } from '@/components/LeadFormModal';
import { PricingSection } from '@/components/PricingSection';
import { NearbyAreasGrid } from '@/components/NearbyAreasGrid';
import { siteConfig } from '@/data/site';
import { serviceLocationContent } from '@/data/serviceLocationContent';

const benefitIcons = [
  <Award key="a" className="w-5 h-5" />,
  <Clock key="c" className="w-5 h-5" />,
  <Shield key="s" className="w-5 h-5" />,
  <Users key="u" className="w-5 h-5" />,
];

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
  const benefits = content.benefits(cityName);
  const intro = content.intro(cityName);
  const introHeading = content.introHeading(cityName);
  const stepsHeading = content.stepsHeading(cityName);
  const whyHeading = content.whyHeading(cityName);
  const steps = content.steps(cityName);
  const whyPoints = content.whyPoints(cityName);
  const faqs = content.faqs(cityName);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${service.title} in ${cityName}`,
    url: `${siteConfig.url}/services/${service.slug}/${params.locationSlug}/`,
    description: heroDesc,
    areaServed: { '@type': 'City', name: cityName, containedInPlace: { '@type': 'AdministrativeArea', name: 'Manhattan' } },
    serviceType: service.title,
    priceRange: '$$',
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 p-5 bg-paper rounded-tile shadow-card border border-gray-light">
                <div className="bg-primary/10 p-2 rounded-chip text-primary">{benefitIcons[idx % benefitIcons.length]}</div>
                <div>
                  <h3 className="font-bold text-ink text-[13px] mb-1">{benefit.title}</h3>
                  <p className="text-[12px] text-gray-dark leading-[1.5]">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <section className="mb-10">
                <h2 className="text-[24px] md:text-[28px] font-extrabold tracking-tight text-ink mb-4">{introHeading}</h2>
                <div className="max-w-none text-gray-dark text-[14px] leading-[1.7] space-y-4">
                  {intro.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>

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

              <section className="mb-10">
                <h3 className="text-[22px] font-extrabold tracking-tight text-ink mb-4">{whyHeading}</h3>
                <div className="space-y-2.5">
                  {whyPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 bg-primary/5 p-4 rounded-tile border border-primary/15">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-ink text-[13px] leading-[1.5]">{point}</span>
                    </div>
                  ))}
                </div>
              </section>

              {faqs.length > 0 && (
                <div className="mb-10">
                  <FAQ faqs={faqs} title={`${service.title} in ${cityName}: Common Questions`} />
                </div>
              )}

              <section className="mt-10 mb-10">
                <h2 className="text-[22px] font-extrabold tracking-tight text-ink mb-5">What Manhattan Clients Are Saying</h2>
                <Testimonials limit={2} />
              </section>
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

                <div className="bg-ink text-white p-6 rounded-tile">
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-primary mb-2">Starting Retainer</div>
                  <h3 className="text-[24px] font-extrabold tracking-tight mb-2">From $1,500</h3>
                  <p className="text-white/70 text-[12px] mb-4 leading-[1.5]">
                    Confidential consultations. Licensed, bonded, and insured investigators serving {cityName}.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="block w-full bg-white text-ink text-center font-bold uppercase tracking-widest py-3 px-5 rounded-chip hover:bg-primary hover:text-white transition-colors text-[12px]"
                  >
                    Request Consultation
                  </button>
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
