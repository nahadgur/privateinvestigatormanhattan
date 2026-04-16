import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  Lock,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Clock3,
  BadgeCheck,
} from 'lucide-react';
import { services } from '@/data/services';
import { toSlug } from '@/data/locations';
import { siteConfig } from '@/data/site';

const faqs = [
  {
    q: 'Are you the investigator?',
    a: 'No. We are a referral service that helps connect enquiries with vetted private investigators and agencies that appear suitable for the case type and location.',
  },
  {
    q: 'Is my enquiry confidential?',
    a: 'Yes. The initial enquiry is handled discreetly. You decide whether to move forward with an introduction.',
  },
  {
    q: 'How quickly can I hear back?',
    a: 'For many enquiry types, introductions can begin the same day or within one business day, depending on complexity and availability.',
  },
  {
    q: 'Do you guarantee outcomes?',
    a: 'No. We do not promise investigative results. We aim to help you reach an appropriate, vetted provider for the matter described.',
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Referral-first positioning',
    text: 'Clear, accurate positioning that explains you are being matched with investigators rather than hiring a mystery brand.',
  },
  {
    icon: UserCheck,
    title: 'Vetted network',
    text: 'Introductions are oriented around case fit, discretion, and Manhattan familiarity.',
  },
  {
    icon: Clock3,
    title: 'Fast response',
    text: 'Built for users who need to move quickly without filling out a low-trust generic form.',
  },
  {
    icon: BadgeCheck,
    title: 'Sensitive-case tone',
    text: 'Professional language and cleaner design to support trust in a high-stakes category.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      <section className="border-b border-black/5 bg-[radial-gradient(circle_at_top_left,rgba(185,55,41,0.10),transparent_25%),linear-gradient(180deg,#0f1012_0%,#16181c_100%)] text-white">
        <div className="container-width py-5">
          <header className="flex items-center justify-between gap-6 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur md:px-6">
            <Link href="/" className="text-sm font-black uppercase tracking-[0.22em]">
              P.I. <span className="text-accent-400">Manhattan</span>
            </Link>
            <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 md:flex">
              <a href="#services">Services</a>
              <a href="#process">Process</a>
              <a href="#coverage">Coverage</a>
              <a href="#faq">FAQ</a>
            </nav>
            <div className="flex items-center gap-3">
              <a
                href="tel:+12125550198"
                className="hidden items-center gap-2 text-sm font-semibold text-white/90 md:inline-flex"
              >
                <Phone className="h-4 w-4" /> 212-555-0198
              </a>
              <a href="#enquiry" className="btn-primary !rounded-full !px-5 !py-3 !text-xs !tracking-[0.14em] uppercase">
                Free assessment
              </a>
            </div>
          </header>

          <div className="grid gap-6 pb-8 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-16 lg:pt-12">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:p-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/80">
                <Sparkles className="h-4 w-4 text-accent-300" /> Premier referral network
              </div>
              <h1 className="max-w-[11ch] font-display text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
                Discreet access to Manhattan investigators.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 md:text-lg">
                {siteConfig.name} is a confidential referral service. We help connect enquiries with vetted private investigators and agencies suited to the case type, urgency, and Manhattan location involved.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#enquiry" className="btn-primary !rounded-full !px-6">Request confidential review</a>
                <a href="#process" className="btn-secondary !rounded-full !border-white/15 !bg-white/5 !px-6 !text-white hover:!bg-white/10 hover:!text-white">
                  See how matching works
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-white/68">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Confidential initial enquiry</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Referral service positioning</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Manhattan-focused coverage</span>
              </div>
            </div>

            <div id="enquiry" className="rounded-[2rem] border border-white/10 bg-white p-6 text-slate-900 shadow-2xl md:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">Secure enquiry</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em]">Request a private consultation</h2>
                </div>
                <div className="rounded-2xl bg-accent-50 p-3 text-accent-700">
                  <Lock className="h-5 w-5" />
                </div>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Enquiry type</label>
                  <select className="form-input">
                    <option>Surveillance / infidelity</option>
                    <option>Background checks</option>
                    <option>Corporate fraud</option>
                    <option>Child custody evidence</option>
                    <option>Missing persons</option>
                    <option>General enquiry</option>
                  </select>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Full name</label>
                    <input className="form-input" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Phone</label>
                    <input className="form-input" placeholder="Phone number" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Email</label>
                  <input className="form-input" placeholder="Email address" />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Message</label>
                  <textarea className="form-input min-h-[120px]" placeholder="Tell us briefly what you need help with" />
                </div>
                <button type="submit" className="btn-primary w-full !rounded-2xl !py-4 !text-sm uppercase tracking-[0.14em]">
                  Request private consultation
                </button>
                <p className="text-center text-xs leading-6 text-slate-500">
                  No obligation. Your enquiry remains confidential until you choose to proceed with an introduction.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="container-width -mt-8 relative z-10 pb-6">
        <div className="grid gap-4 rounded-[2rem] border border-black/5 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:grid-cols-4 md:p-6">
          {trustPoints.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[1.5rem] bg-stone-50 p-5">
              <div className="mb-4 inline-flex rounded-2xl bg-accent-50 p-3 text-accent-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold tracking-[-0.02em] text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="section-padding">
        <div className="container-width">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-600">Investigative specializations</p>
              <h2 className="mt-3 max-w-xl font-display text-4xl font-bold tracking-[-0.04em] text-slate-900 md:text-5xl">
                Case categories commonly referred through our Manhattan network.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600 md:text-base">
              We are not the direct investigator. We help route suitable enquiries toward vetted providers with relevant experience and location fit.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}/`}
                className="group rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="rounded-full bg-accent-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-accent-700">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <ChevronRight className="h-5 w-5 text-slate-300 transition group-hover:text-accent-600" />
                </div>
                <h3 className="text-2xl font-bold tracking-[-0.03em] text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-700">
                  View service page <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-padding bg-white">
        <div className="container-width grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-300">Referral process</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em]">A clearer path from enquiry to introduction.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/72 md:text-base">
              The process is designed to feel direct and private. We collect the essentials, review suitability, and help point you toward a vetted investigator or agency where appropriate.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['01', 'Submit your enquiry', 'Tell us the matter, timing, and location. Sensitive details can stay high level at the first step.'],
              ['02', 'We review for fit', 'We assess case type and identify suitable referral options within the network.'],
              ['03', 'You choose whether to proceed', 'If a match is appropriate, you decide whether to move forward with the introduction.'],
            ].map(([num, title, copy]) => (
              <div key={num} className="rounded-[1.75rem] border border-black/5 bg-stone-50 p-6">
                <div className="text-5xl font-black tracking-[-0.08em] text-accent-200">{num}</div>
                <h3 className="mt-8 text-xl font-bold tracking-[-0.02em] text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="coverage" className="section-padding">
        <div className="container-width grid gap-6 lg:grid-cols-[1fr_0.92fr]">
          <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-600">Manhattan coverage</p>
            <h2 className="mt-4 max-w-lg font-display text-4xl font-bold tracking-[-0.04em] text-slate-900">Designed for Manhattan leads, neighborhoods, and case logistics.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              Coverage pages can support borough-level intent, but the brand still needs to feel premium and credible. This redesign keeps the conversion focus while making the site look more deliberate and less templated.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
              {['Upper East Side', 'Tribeca', 'Chelsea', 'SoHo', 'Midtown', 'Financial District'].map((area) => (
                <Link
                  key={area}
                  href={`/location/${toSlug(area)}/`}
                  className="inline-flex items-center gap-2 rounded-2xl bg-stone-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-accent-50 hover:text-accent-700"
                >
                  <MapPin className="h-4 w-4" /> {area}
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-accent-600 p-8 text-white shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">Why choose a referral service</p>
            <h3 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em]">A more selective first step for sensitive enquiries.</h3>
            <ul className="mt-8 space-y-5 text-sm leading-7 text-white/82 md:text-base">
              <li className="flex gap-3"><ShieldCheck className="mt-1 h-5 w-5 flex-none text-white" /> More honest positioning than pretending to be the investigator on every page.</li>
              <li className="flex gap-3"><ShieldCheck className="mt-1 h-5 w-5 flex-none text-white" /> Cleaner expectation-setting around what happens after a lead is submitted.</li>
              <li className="flex gap-3"><ShieldCheck className="mt-1 h-5 w-5 flex-none text-white" /> Better suited to matching by case type, urgency, and local coverage requirements.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="faq" className="section-padding bg-white">
        <div className="container-width grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-600">Common questions</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-slate-900">Answers that build trust before the enquiry.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
              The page should reduce friction, not create uncertainty. Keeping the referral model explicit usually improves trust in a category like this.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-[1.5rem] border border-black/5 bg-stone-50 p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold tracking-[-0.02em] text-slate-900">
                  {item.q}
                  <span className="rounded-full bg-white p-2 text-slate-400 transition group-open:rotate-45 group-open:text-accent-600">+</span>
                </summary>
                <p className="pt-4 text-sm leading-7 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950 text-white">
        <div className="container-width rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-2xl md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-300">Ready to continue</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold tracking-[-0.04em] md:text-6xl">
            Request a confidential review and we will help point you in the right direction.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
            Premium visual direction, better hierarchy, and a cleaner referral narrative — while still fitting your current Next.js and Tailwind stack.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#enquiry" className="btn-primary !rounded-full !px-6">Request consultation</a>
            <a href="tel:+12125550198" className="btn-secondary !rounded-full !border-white/15 !bg-white/5 !px-6 !text-white hover:!bg-white/10 hover:!text-white">
              Call 212-555-0198
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
