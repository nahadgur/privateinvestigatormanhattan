'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MessageSquare, UserCheck, ClipboardList, FileCheck, ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const steps = [
  {
    number: '1',
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Free Consultation Request',
    duration: 'Takes about 2 minutes',
    summary: 'Tell us about your situation through the consultation form or by phone.',
    detail: 'The consultation request asks for the basic facts — what type of case (infidelity, corporate, custody, background check, etc.), what you already know, what you hope the investigation would accomplish, and a way to reach you. The form takes a few minutes. Every inquiry is treated as fully confidential, and we do not share your information with anyone outside the specific investigator we match you with.',
  },
  {
    number: '2',
    icon: <UserCheck className="w-6 h-6" />,
    title: 'Case Review and Investigator Match',
    duration: 'Same day for most cases; within 24 hours',
    summary: 'We review your situation and identify the investigator in our network whose experience fits your specific case type.',
    detail: 'Most Manhattan cases fit recognizable patterns, and the match process is usually straightforward — matrimonial cases go to matrimonial specialists, corporate cases to investigators with corporate or federal backgrounds, high-asset matters to investigators who handle them regularly. For cases that span multiple specialties (a high-asset matrimonial with an asset-tracing component, for example), we match the primary specialization and ensure the investigator has access to the specialists they need for secondary components.',
  },
  {
    number: '3',
    icon: <ClipboardList className="w-6 h-6" />,
    title: 'Direct Consultation with the Investigator',
    duration: 'Scheduled at your convenience',
    summary: 'You speak directly with the matched investigator — by phone, video, or in person — in a free consultation.',
    detail: 'The consultation typically runs 30-60 minutes. The investigator asks detailed questions about your situation, explains what an investigation would realistically look like, and gives you a realistic estimate of timeline and cost. You ask the questions you need to ask — experience, specialization, methodology, pricing. Nothing is committed at this stage; you are deciding whether this specific investigator is the right fit for your case.',
  },
  {
    number: '4',
    icon: <FileCheck className="w-6 h-6" />,
    title: 'Engagement and Active Investigation',
    duration: 'Case-dependent; days to weeks typically',
    summary: 'If you decide to proceed, you engage directly with the investigator — written agreement, retainer, and active work.',
    detail: 'You and the investigator handle the engagement directly. The written engagement agreement specifies scope, hourly rates, retainer, and deliverables. You pay the retainer directly to the investigator (we are not a billing intermediary), and active investigation begins. During the case, you receive regular updates — weekly at minimum for multi-week cases, more frequently when the work is actively producing evidence.',
  },
  {
    number: '5',
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Evidence Delivery and Case Conclusion',
    duration: 'End of active investigation',
    summary: 'The investigator delivers the final report and evidence package — structured for whatever the case requires.',
    detail: 'At conclusion, you receive a written report with full documentation, photographs and video where applicable, source-interview notes, and any specialized evidence (background findings, asset reports, etc.). For cases heading to court, the evidence package is structured for admissibility and the investigator is available to testify. For personal-information cases, the final delivery may be a more conversational debrief. The format matches the underlying purpose of the investigation.',
  },
];

export function HowItWorksClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero */}
      <section className="bg-ink text-white py-12 md:py-16">
        <div className="container-width">
          <Breadcrumbs items={[{ label: 'How It Works' }]} light />
          <div className="max-w-3xl mt-3">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-primary mb-3">How It Works</div>
            <h1 className="text-[32px] md:text-[42px] font-extrabold tracking-tight leading-[1.1] mb-5">
              How the Matching Process Works
            </h1>
            <p className="text-[16px] md:text-[18px] text-white/80 leading-[1.55]">
              From initial consultation request to case conclusion — five steps, no obligation until you decide to engage. Here is what the process actually looks like.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-16 bg-paper">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-5 md:gap-7">
                  {/* Number + line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-extrabold text-[20px] shadow-card">
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gray-mid my-3 min-h-[40px]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-primary">{step.icon}</div>
                      <h2 className="text-[19px] md:text-[22px] font-extrabold text-ink tracking-tight">{step.title}</h2>
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-gray-dark mb-3">{step.duration}</div>
                    <p className="text-[14px] text-gray-dark leading-[1.7] mb-3 font-medium">{step.summary}</p>
                    <p className="text-[13px] text-gray-dark leading-[1.7]">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-12 md:py-16 bg-gray-light/30">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight text-ink mb-5 pb-2 border-b-2 border-primary inline-block">
              How the Process Is Structured
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
              <div className="bg-paper border border-gray-mid rounded-tile p-5 shadow-card">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-ink text-[14px] mb-2">Fully Confidential</h3>
                <p className="text-[13px] text-gray-dark leading-[1.65]">
                  Your inquiry and all case information are held in strict confidence. We do not share your information with anyone outside the specific investigator we match you with, and the investigator operates under Article 7 confidentiality obligations.
                </p>
              </div>
              <div className="bg-paper border border-gray-mid rounded-tile p-5 shadow-card">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-ink text-[14px] mb-2">No Obligation</h3>
                <p className="text-[13px] text-gray-dark leading-[1.65]">
                  The consultation is free and carries no commitment. If the investigator we match you with is not the right fit, you can decline and we will match you with another. If no investigation is warranted, the investigator will tell you — a good PI turns down cases that should not be pursued.
                </p>
              </div>
              <div className="bg-paper border border-gray-mid rounded-tile p-5 shadow-card">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-ink text-[14px] mb-2">Direct Engagement</h3>
                <p className="text-[13px] text-gray-dark leading-[1.65]">
                  Once matched, you engage directly with the investigator. We are not a billing intermediary; you work with the investigator under their standard engagement agreement. This keeps the relationship clean and the accountability clear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-10 md:py-14 bg-paper">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[18px] md:text-[20px] font-extrabold tracking-tight text-ink mb-4">Related Reading</h2>
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
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-primary mb-3">Ready to Start?</div>
            <h2 className="text-[22px] md:text-[26px] font-extrabold mb-3">Start with a Free Consultation</h2>
            <p className="text-[14px] text-white/80 mb-5 max-w-xl mx-auto leading-[1.6]">
              Step one takes about two minutes. We will take it from there.
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
