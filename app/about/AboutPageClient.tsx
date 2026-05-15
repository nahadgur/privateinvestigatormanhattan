'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, UserCheck, Award, Clock, CheckCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { services } from '@/data/services';

export function AboutPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero */}
      <section className="bg-ink text-white py-12 md:py-16">
        <div className="container-width">
          <Breadcrumbs items={[{ label: 'About' }]} light />
          <div className="max-w-3xl mt-3">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-primary mb-3">About</div>
            <h1 className="text-[32px] md:text-[42px] font-extrabold tracking-tight leading-[1.1] mb-5">
              About P.I. Manhattan
            </h1>
            <p className="text-[16px] md:text-[18px] text-white/80 leading-[1.55]">
              We connect Manhattan residents, businesses, and attorneys with licensed private investigators who match the specific case type and experience required. The service is free, confidential, and structured around getting you to the right investigator faster than you would find one on your own.
            </p>
          </div>
        </div>
      </section>

      {/* The model */}
      <section className="py-10 md:py-14 bg-paper">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight text-ink mb-5 pb-2 border-b-2 border-primary inline-block">
              What We Actually Are
            </h2>
            <div className="text-[15px] text-gray-dark leading-[1.75] space-y-4">
              <p>
                P.I. Manhattan is a referral and matching service. We are not an investigative agency ourselves. We do not conduct investigations. What we do is maintain a vetted network of NYS-licensed private investigators across Manhattan, assess each incoming case to understand what type of work it requires, and match the client with an investigator whose experience and specialization fit the specific situation.
              </p>
              <p>
                This model exists because hiring a private investigator is different from hiring most professional services. Most Manhattan residents hire a PI once in their life, often under stressful circumstances, and rarely know how to distinguish a specialist in their specific case type from a generalist who is taking any work that comes in. The quality variance across investigators is substantial. Matching based on case type, investigator background, and the specific demands of the situation produces meaningfully better outcomes than the default "call the first PI who comes up in a search."
              </p>
              <p>
                Every investigator in our network holds a current New York State Department of State license under Article 7 of the General Business Law. We verify licensing on admission and re-verify periodically. Beyond the license requirement, we look at experience background (former law enforcement, former federal agents, forensic accountants, specialized investigators), case specialization, track record with similar case types, and the professional standards the investigator holds themselves to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why this model */}
      <section className="py-10 md:py-14 bg-gray-light/30">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight text-ink mb-5 pb-2 border-b-2 border-primary inline-block">
              Why a Matching Model
            </h2>
            <div className="text-[15px] text-gray-dark leading-[1.75] space-y-4">
              <p>
                Consider what happens if you search "private investigator manhattan" cold. You get a list of results. Some are national lead-generation companies that will sell your inquiry to whichever investigator pays the highest referral fee. Some are legitimate Manhattan PIs, but you cannot tell from their website whether they specialize in your specific case type. Some are thinly-staffed operators using marketing to look larger than they are. A few are not licensed at all.
              </p>
              <p>
                Picking from that list under pressure, as a first-time buyer, is a recipe for a bad hire. The matching model exists to do the work that is hard to do yourself: maintain a verified network of genuine specialists, assess your situation against what each investigator actually does well, and introduce you to the right fit.
              </p>
              <p>
                There is no charge for the matching service itself. The investigator you work with handles their own engagement agreement and fees directly with you — we are not a middle layer in the billing. The model works because investigators value access to qualified, pre-scoped clients, and clients value skipping the friction of vetting PIs themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we look for in network PIs */}
      <section className="py-10 md:py-14 bg-paper">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight text-ink mb-5 pb-2 border-b-2 border-primary inline-block">
              Investigator Standards
            </h2>
            <p className="text-[15px] text-gray-dark leading-[1.75] mb-6">
              Every investigator in the network meets the following standards before we refer any client to them.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: <Award className="w-5 h-5" />, title: 'Current NYS License', desc: 'Active Department of State license under Article 7 of the General Business Law, verified on admission and re-verified periodically.' },
                { icon: <UserCheck className="w-5 h-5" />, title: 'Documented Track Record', desc: 'Demonstrated experience in the case types we refer to them — matrimonial specialists for matrimonial cases, corporate investigators for corporate cases.' },
                { icon: <ShieldCheck className="w-5 h-5" />, title: 'Insurance and Bond', desc: 'Full professional liability insurance in addition to the required $10,000 surety bond. For corporate and high-stakes work, coverage commonly reaches seven figures.' },
                { icon: <Clock className="w-5 h-5" />, title: 'Responsive Consultation', desc: 'Commitment to initial consultation within 24 hours of referral, with genuine willingness to turn down cases that are outside their specialty or unlikely to produce useful evidence.' },
                { icon: <CheckCircle className="w-5 h-5" />, title: 'Court-Ready Evidence Standards', desc: 'Work product structured for New York court admissibility — chain of custody, timestamped documentation, testimony availability when required.' },
                { icon: <ShieldCheck className="w-5 h-5" />, title: 'Confidentiality Practice', desc: 'Operation within Article 7\'s confidentiality framework and professional standards beyond what the statute itself requires.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-paper border border-gray-mid rounded-tile shadow-card">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-extrabold text-ink text-[14px] mb-1.5">{item.title}</div>
                    <div className="text-[13px] text-gray-dark leading-[1.6]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services covered */}
      <section className="py-10 md:py-14 bg-gray-light/30">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight text-ink mb-5 pb-2 border-b-2 border-primary inline-block">
              Services We Match For
            </h2>
            <p className="text-[15px] text-gray-dark leading-[1.75] mb-6">
              The network covers the full range of Manhattan private investigation practice. If your case falls into any of these categories — or combines several of them — we can match you with an investigator who handles cases like yours regularly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map(service => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="block p-4 bg-paper border border-gray-mid rounded-tile hover:border-primary hover:shadow-card transition-all"
                >
                  <div className="font-extrabold text-ink text-[13px] mb-1">{service.title}</div>
                  <div className="text-[12px] text-gray-dark leading-[1.5] line-clamp-2">{service.description}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-10 md:py-14 bg-paper">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight text-ink mb-5 pb-2 border-b-2 border-primary inline-block">
              Coverage
            </h2>
            <div className="text-[15px] text-gray-dark leading-[1.75] space-y-4">
              <p>
                Our focus is Manhattan — all 57 neighborhoods from the Financial District through Harlem and up to Inwood and Marble Hill. The investigators in our network know the specific operational considerations of Manhattan work: doorman buildings, co-op privacy infrastructure, dense pedestrian surveillance environments, the 24-hour rhythm of the city, and the specific court and administrative venues where Manhattan cases are heard.
              </p>
              <p>
                Cases that extend beyond Manhattan — other NYC boroughs, upstate New York, other states, or international components — are regularly handled through investigators in the network who are either licensed in the other jurisdictions or coordinate with counterpart investigators elsewhere. What we do not do is send Manhattan generalists to work outside their specialty or territory. If your case has a meaningful non-Manhattan component, we match that component to appropriate specialist coverage rather than force-fitting one investigator across every angle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14 bg-ink text-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-primary mb-3">Ready to Talk?</div>
            <h2 className="text-[22px] md:text-[26px] font-extrabold mb-3">Start with a Free Consultation</h2>
            <p className="text-[14px] text-white/80 mb-5 max-w-xl mx-auto leading-[1.6]">
              Tell us about your situation. We will match you with the licensed investigator in our network whose experience fits your specific case. No obligation, no commitment until you decide to proceed.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-white px-6 py-3 rounded-chip text-[12px] font-bold uppercase tracking-widest hover:bg-white hover:text-ink transition-colors"
            >
              Start a Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
