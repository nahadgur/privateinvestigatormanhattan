'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

const categories = [
  {
    id: 'about-service',
    title: 'About the Matching Service',
    faqs: [
      {
        q: 'How is this different from just Googling "private investigator Manhattan"?',
        a: 'The cold search approach produces a mixed list: legitimate Manhattan PIs, national lead-generation companies that sell your inquiry to whichever investigator pays most, thinly-staffed operators using marketing to look bigger than they are, and occasionally unlicensed operators. Picking from that list under pressure is how most bad PI hires happen. We maintain a vetted network of licensed Manhattan specialists, match you based on your specific case type, and skip the vetting work that is hard to do yourself as a first-time buyer.',
      },
      {
        q: 'Are you the investigators, or do you refer cases to other investigators?',
        a: 'We are a referral and matching service. We do not conduct investigations ourselves. What we do is match you with the NYS-licensed investigator in our network whose specialization fits your case. You engage directly with the investigator under their standard agreement — we are not a billing intermediary.',
      },
      {
        q: 'Do I pay you, or the investigator?',
        a: 'You pay the investigator directly under their engagement agreement. The matching service itself is free to you — there is no fee added to the investigator\'s rate, no billing pass-through, no referral fee added to your bill. The matching model works because investigators value access to qualified, pre-scoped clients.',
      },
      {
        q: 'How do I know the investigator is actually qualified?',
        a: 'Every investigator in our network holds a current New York State Department of State license under Article 7. We verify licensing on admission and periodically re-verify. Beyond the license itself, we look at experience background, case specialization, track record, and professional standards. You can also verify any investigator\'s license yourself through the Department of State public lookup at appext20.dos.ny.gov/lcns_public/chk_load or by calling (518) 474-4429.',
      },
    ],
  },
  {
    id: 'consultation',
    title: 'Consultation and Matching',
    faqs: [
      {
        q: 'How quickly can I be matched with an investigator?',
        a: 'Most clients receive an introduction within 24 hours of the initial consultation request. For urgent cases — active surveillance needs, imminent legal deadlines, time-sensitive service of process — we can commonly arrange same-day contact with an available investigator.',
      },
      {
        q: 'What happens during the initial consultation with the investigator?',
        a: 'The consultation typically runs 30-60 minutes by phone, video, or in person. The investigator asks detailed questions about your situation, explains what a realistic investigation would look like, estimates timeline and cost, and answers your questions. Nothing is committed at this stage — you are deciding whether this specific investigator is the right fit for your case.',
      },
      {
        q: 'What if the investigator is not the right fit?',
        a: 'You can decline to proceed and we will match you with another investigator in the network. No charge, no friction. Fit matters in this work — an investigator whose specialty is matrimonial surveillance is not the right hire for a corporate fraud case, even if both are capable professionals. Getting the match right matters more than getting it fast.',
      },
      {
        q: 'Can the investigator turn down my case?',
        a: 'Yes — and that is usually a good sign when it happens. Reputable investigators turn down cases that fall outside their specialty, that are unlikely to produce useful evidence, or that would require methods outside legal boundaries. If the investigator explains why your case is not one they should take, take the conversation seriously. We can match you with a different specialist, or the investigator may be telling you that no investigation is warranted.',
      },
    ],
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality and Privacy',
    faqs: [
      {
        q: 'Is my inquiry actually confidential?',
        a: 'Yes. All information you share is held in strict confidence. We do not share your information with anyone outside the specific investigator we match you with. The investigator you work with operates under Article 7 confidentiality obligations plus whatever additional confidentiality terms are in your engagement agreement.',
      },
      {
        q: 'Will the person I am investigating know I am investigating them?',
        a: 'Not if the investigation is conducted properly. Professional investigators work covertly — the subject does not know they are being observed. The subject typically learns about the investigation only when evidence is presented in a legal proceeding, if at all. Good surveillance produces documented evidence without triggering subject awareness.',
      },
      {
        q: 'How is my case information stored?',
        a: 'We retain inquiry information for a limited period to facilitate the matching process and then minimize retention in line with standard professional practice. The investigator you engage with retains case records under their own professional practice, typically for a period specified in the engagement agreement. Confidentiality of retained records is part of the professional standard licensed investigators operate under.',
      },
      {
        q: 'What if my spouse, business partner, or opposing party contacts you asking if they are being investigated?',
        a: 'We do not disclose client information. The investigator you engage with operates under the same confidentiality obligation. This protection is part of the regulatory framework investigators work within and is fundamental to the profession.',
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing and Engagement',
    faqs: [
      {
        q: 'What does a Manhattan private investigator typically cost?',
        a: 'Most Manhattan cases fall between $2,000 and $10,000. Simple background checks start around $300; complex multi-week investigations or high-asset commercial matters can run $15,000 to $100,000 or more. Hourly rates typically run $150-$300 per agent, with retainers of $1,500-$5,000 for most cases. Our dedicated pricing guide covers the full picture by service type.',
      },
      {
        q: 'Do I have to commit to a retainer before the consultation?',
        a: 'No. The initial consultation is free and carries no obligation. You only commit when you decide to engage the investigator, at which point you and the investigator sign an engagement agreement specifying scope, rates, and retainer.',
      },
      {
        q: 'What happens if the investigation does not produce what I hoped for?',
        a: 'You pay for the work performed, not the outcome. Surveillance captures whatever behavior the subject actually engages in during the observation period — if the subject is not in fact doing what you suspected, that is itself information. A good investigator will tell you before starting if the case is unlikely to produce what you hope for; they will not take cases they believe are unwinnable just to bill hours.',
      },
      {
        q: 'Will the other party pay for the investigation in a divorce case?',
        a: 'Sometimes, in New York matrimonial cases, courts will order one party to contribute to the other\'s reasonable investigation costs where the investigation produced material evidence. This is not automatic and depends on the specific financial circumstances, the investigation outcome, and the judge. Your divorce attorney can advise on whether this is realistic in your case.',
      },
    ],
  },
  {
    id: 'legal',
    title: 'Legal and Evidence',
    faqs: [
      {
        q: 'Is evidence gathered by a private investigator admissible in court?',
        a: 'Yes, when gathered by a licensed investigator operating within legal boundaries. Evidence must comply with New York privacy law, the Federal Wiretapping Act, and related statutes. Licensed investigators in our network understand these standards — documentation is structured with proper chain of custody, timestamped records, and the evidentiary framework New York courts require.',
      },
      {
        q: 'What can a PI legally do in New York?',
        a: 'Licensed NY PIs can conduct surveillance in public places, document observations through photography and video, interview willing witnesses, access public records and properly licensed investigative databases, and gather evidence for civil and criminal legal proceedings. They cannot trespass, intercept private communications, access protected records without subpoena, install GPS trackers on vehicles they do not own, impersonate law enforcement, or use other illegal investigative methods.',
      },
      {
        q: 'Can a PI access someone\'s bank records or phone records?',
        a: 'Not without a subpoena or the account holder\'s consent. Any investigator who offers to obtain bank records or phone records through "pretexting" (impersonating someone to obtain protected records) is proposing a federal crime under the Gramm-Leach-Bliley Act and related statutes. Evidence obtained illegally is inadmissible and exposes the client to liability.',
      },
      {
        q: 'Will the investigator testify in court if needed?',
        a: 'Yes, for cases where their evidence is being presented. Licensed investigators are regularly called as witnesses in matrimonial proceedings, family court hearings, civil litigation, and occasionally criminal matters. Testimony is typically billed separately from investigation work on a day-rate basis. Availability and terms are addressed in the engagement agreement.',
      },
    ],
  },
  {
    id: 'practical',
    title: 'Practical Questions',
    faqs: [
      {
        q: 'Do I need to have active suspicions or proof before hiring a PI?',
        a: 'No. Hiring a PI is appropriate when you have a legitimate interest in gathering information and have reached the limit of what you can discover on your own. This includes due diligence before signing a contract, verifying concerns before confronting a family situation, locating someone you have lost contact with, or any number of situations where professional investigation is the efficient path to answers.',
      },
      {
        q: 'Can I be matched with a PI for a case outside Manhattan?',
        a: 'Yes, in cases that are primarily Manhattan-based or that have a Manhattan component. For cases entirely outside Manhattan, we can often refer you to appropriate specialists in other jurisdictions. Our core focus and network depth is Manhattan specifically.',
      },
      {
        q: 'Can I be matched for a case that has an international component?',
        a: 'Yes. Many Manhattan cases involve international elements — cross-border asset tracing, missing persons with international relocations, commercial disputes with overseas counterparties, subjects who have returned to their country of origin. Investigators in our network either have direct international capability or coordinate with counterpart investigators in the relevant jurisdictions.',
      },
      {
        q: 'What if I change my mind partway through the case?',
        a: 'You can terminate the engagement according to the terms of your agreement with the investigator. Typical terms allow termination with notice, return of unused retainer balance minus any wind-down fees, and delivery of work completed up to that point. Termination terms should be clear in the engagement agreement before you sign.',
      },
    ],
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-mid last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full text-left py-4 flex items-start justify-between gap-4 hover:text-primary transition-colors"
      >
        <span className="font-extrabold text-ink text-[14px] leading-[1.5] pt-0.5">{q}</span>
        <ChevronDown className={`w-5 h-5 flex-shrink-0 text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-5 text-[13px] text-gray-dark leading-[1.7]">
          {a}
        </div>
      )}
    </div>
  );
}

export function FAQPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);

  // Flatten all FAQs for schema.org FAQPage JSON-LD
  const allFaqs = categories.flatMap(cat => cat.faqs);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div id="main-content" tabIndex={-1} />

      {/* Hero */}
      <section className="bg-ink text-white py-12 md:py-16">
        <div className="container-width">
          <Breadcrumbs items={[{ label: 'FAQ' }]} light />
          <div className="max-w-3xl">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-primary mb-3">Frequently Asked Questions</div>
            <h1 className="text-[32px] md:text-[42px] font-extrabold tracking-tight leading-[1.1] mb-5">
              Frequently Asked Questions
            </h1>
            <p className="text-[16px] md:text-[18px] text-white/80 leading-[1.55]">
              The most common questions about hiring a private investigator through {siteConfig.name}, organized by topic. If your question is not here, the free consultation is usually the fastest way to get a specific answer.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 md:py-14 bg-paper">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {/* Category nav */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24">
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-primary mb-3">Topics</div>
                <nav className="space-y-2">
                  {categories.map(cat => (
                    <a
                      key={cat.id}
                      href={`#${cat.id}`}
                      className="block text-[13px] text-gray-dark hover:text-primary transition-colors leading-[1.45] pl-3 border-l-2 border-gray-mid hover:border-primary py-1"
                    >
                      {cat.title}
                    </a>
                  ))}
                </nav>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-6 w-full bg-primary text-white px-4 py-3 rounded-chip text-[11px] font-bold uppercase tracking-widest hover:bg-ink transition-colors shadow-sm"
                >
                  Free Consultation
                </button>
              </div>
            </aside>

            {/* FAQ content */}
            <div className="lg:col-span-3 order-1 lg:order-2 space-y-10">
              {categories.map(cat => (
                <section key={cat.id} id={cat.id} className="scroll-mt-24">
                  <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight text-ink mb-5 pb-2 border-b-2 border-primary inline-block">
                    {cat.title}
                  </h2>
                  <div className="divide-y divide-gray-mid">
                    {cat.faqs.map((faq, i) => {
                      const key = `${cat.id}-${i}`;
                      return (
                        <FAQItem
                          key={key}
                          q={faq.q}
                          a={faq.a}
                          isOpen={openKey === key}
                          onToggle={() => setOpenKey(openKey === key ? null : key)}
                        />
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-10 md:py-14 bg-gray-light/30">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[18px] md:text-[20px] font-extrabold tracking-tight text-ink mb-4">Go Deeper</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link href="/guides/hire-a-pi-manhattan/" className="block p-4 bg-paper border border-gray-mid rounded-tile hover:border-primary hover:shadow-card transition-all">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-primary mb-2">Hiring Guide</div>
                <div className="font-extrabold text-ink text-[13px] mb-1">How to Hire a Manhattan PI</div>
                <div className="flex items-center gap-1 text-[11px] text-gray-dark">
                  Read guide <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
              <Link href="/guides/investigator-costs-manhattan/" className="block p-4 bg-paper border border-gray-mid rounded-tile hover:border-primary hover:shadow-card transition-all">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-primary mb-2">Pricing Guide</div>
                <div className="font-extrabold text-ink text-[13px] mb-1">What a Manhattan PI Costs</div>
                <div className="flex items-center gap-1 text-[11px] text-gray-dark">
                  Read guide <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
              <Link href="/guides/pi-licensing-new-york/" className="block p-4 bg-paper border border-gray-mid rounded-tile hover:border-primary hover:shadow-card transition-all">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-primary mb-2">Licensing Guide</div>
                <div className="font-extrabold text-ink text-[13px] mb-1">NY PI Licensing Explained</div>
                <div className="flex items-center gap-1 text-[11px] text-gray-dark">
                  Read guide <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14 bg-ink text-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-primary mb-3">Question Not Here?</div>
            <h2 className="text-[22px] md:text-[26px] font-extrabold mb-3">Ask During Your Free Consultation</h2>
            <p className="text-[14px] text-white/80 mb-5 max-w-xl mx-auto leading-[1.6]">
              Every case is specific. The free consultation is the fastest way to get answers to the questions that apply to your exact situation.
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
