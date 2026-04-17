// data/guides.ts
//
// Pillar guide data model. Each guide is a long-form article targeting a head-term
// search query. Guides are structured with a TOC that renders from the sections array.
//
// Content structure:
//   - intro: short lede paragraphs that appear above the TOC
//   - sections: array of {id, heading, content} where content is an array of blocks
//   - blocks can be paragraphs, lists, pricing tables, callouts, or H3 subheaders

export type GuideBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; variant: 'note' | 'warning' | 'key-fact'; heading?: string; text: string }
  | { type: 'pricing-table'; heading?: string; note?: string; rows: { service: string; typicalRange: string; retainer: string; notes: string }[] }
  | { type: 'quote'; text: string; attribution: string };

export interface GuideSection {
  id: string;           // slug-style, used for anchor links in TOC
  heading: string;      // H2 heading text
  content: GuideBlock[];
}

export interface Guide {
  slug: string;
  title: string;             // H1 page title
  metaTitle: string;         // <title> tag
  metaDescription: string;   // <meta name="description">
  publishDate: string;       // ISO date
  lastUpdated: string;       // ISO date
  readingTimeMinutes: number;
  heroEyebrow: string;       // short category label above H1
  heroDescription: string;   // ~30-50 word lead paragraph shown in hero
  intro: string[];           // intro paragraphs shown above TOC
  sections: GuideSection[];
  relatedServices: string[]; // service slugs to link at bottom
}

export const guides: Guide[] = [
  {
    slug: 'investigator-costs-manhattan',
    title: 'How Much Does a Private Investigator Cost in Manhattan?',
    metaTitle: 'Private Investigator Cost in Manhattan — 2026 Pricing Guide | P.I. Manhattan',
    metaDescription: 'Complete guide to private investigator costs in Manhattan. Typical hourly rates, retainer ranges, and total case costs by service type. Updated April 2026.',
    publishDate: '2025-11-12',
    lastUpdated: '2026-04-17',
    readingTimeMinutes: 14,
    heroEyebrow: 'Pricing Guide',
    heroDescription: 'Manhattan private investigator pricing is specific to the city, the work type, and what the investigator actually does. This guide explains what you will typically pay, what drives the range, and how to read a quote.',
    intro: [
      'If you are considering hiring a private investigator in Manhattan, the first question is almost always price. And the honest answer is that it varies more than almost any other professional service in the city, because the underlying work varies that much.',
      'A one-day background check on a single subject costs a fraction of a multi-agent surveillance operation running for three weeks. A straightforward service-of-process skip trace costs a fraction of a multi-jurisdiction asset search involving forensic accounting. The ranges are wide not because investigators are vague about pricing, but because the real cost of real investigative work depends on the real scope of the case.',
      'This guide walks through Manhattan PI pricing by service type, explains what drives the range in each, and gives you the framework for reading a quote so you know whether you are being quoted fairly. Figures reflect April 2026 Manhattan market ranges.',
    ],
    sections: [
      {
        id: 'quick-answer',
        heading: 'The Quick Answer',
        content: [
          { type: 'p', text: 'Most Manhattan private investigators charge between $95 and $300 per hour, with a retainer of $1,500 to $5,000 for typical cases. Simple background checks start around $300. Multi-week complex cases — high-asset divorce surveillance, corporate fraud investigation — can run $15,000 to $100,000 or more.' },
          { type: 'p', text: 'The range is wide because the nature of the work varies significantly. A single-investigator database background check takes hours. A multi-agent surveillance operation covering a cheating spouse across multiple Manhattan venues takes weeks. The hourly rate reflects investigator seniority and expertise; the total cost reflects case complexity, duration, and the number of agents required.' },
          { type: 'callout', variant: 'key-fact', heading: 'Rule of thumb', text: 'Most Manhattan clients end up paying between $2,000 and $10,000 for a typical case. Outside that range, either the case is unusually simple (basic background check) or unusually complex (high-asset matrimonial, corporate investigation, federal-adjacent matters).' },
        ],
      },
      {
        id: 'pricing-table',
        heading: 'Manhattan PI Pricing by Service Type',
        content: [
          { type: 'p', text: 'The table below reflects April 2026 Manhattan market ranges across the core investigation services. Hourly rates and retainers vary with investigator seniority, case complexity, and urgency. Figures exclude specialized add-ons like forensic accounting, cross-border records access, or executive protection.' },
          {
            type: 'pricing-table',
            heading: 'Typical Manhattan PI Pricing — April 2026',
            note: 'Ranges reflect Manhattan-specific market rates as of April 2026. Rural and outer-borough pricing is commonly lower; high-profile specialist engagements can exceed the ranges shown.',
            rows: [
              { service: 'Background Check (Standard)', typicalRange: '$300 – $1,500', retainer: 'Often flat-fee', notes: 'Employment, tenant, or basic pre-relationship due diligence. 3–7 business days.' },
              { service: 'Background Check (Executive)', typicalRange: '$3,000 – $10,000+', retainer: '$2,500 – $5,000', notes: 'Multi-jurisdiction, SEC/FINRA records, source interviews. 2–4 weeks.' },
              { service: 'Infidelity Investigation', typicalRange: '$2,000 – $8,000', retainer: '$2,000 – $3,500', notes: 'Typical range covers 1–3 weeks of surveillance plus evidence package.' },
              { service: 'Surveillance (per hour, per agent)', typicalRange: '$150 – $300', retainer: '$2,500 – $5,000', notes: 'Manhattan typically requires 2–3 agents. Add-ons for vehicles, equipment, overnight work.' },
              { service: 'Corporate Investigations', typicalRange: '$5,000 – $100,000+', retainer: '$5,000 – $25,000', notes: 'Scope-dependent. IP theft, fraud, M&A diligence commonly in $15k–$50k range.' },
              { service: 'Asset Searches', typicalRange: '$1,000 – $15,000+', retainer: '$1,500 – $5,000', notes: 'Standard searches at low end; multi-jurisdiction or offshore at high end.' },
              { service: 'Child Custody Investigations', typicalRange: '$3,000 – $15,000', retainer: '$2,500 – $5,000', notes: 'Typical: 2–4 weeks of documentation-focused surveillance.' },
              { service: 'Missing Persons', typicalRange: '$500 – $5,000', retainer: 'Varies', notes: 'Simple locate at low end; deliberate-avoidance or sealed-record cases higher.' },
              { service: 'Skip Tracing', typicalRange: '$200 – $2,000', retainer: 'Often flat-fee', notes: 'Service-of-process or judgment-debtor location. 3–10 business days typical.' },
            ],
          },
        ],
      },
      {
        id: 'how-investigators-charge',
        heading: 'How Manhattan Investigators Actually Charge',
        content: [
          { type: 'p', text: 'Private investigators in Manhattan generally use one of three pricing structures, and the right structure depends on the type of case.' },
          { type: 'h3', text: 'Hourly Rates' },
          { type: 'p', text: 'Most active investigation — surveillance, active case work, interviews — is billed hourly. A typical Manhattan PI hourly rate in 2026 runs $150 to $300 per hour. The range reflects investigator seniority (former federal agents and specialized investigators charge more), case complexity (multi-agent Manhattan surveillance costs more than single-agent work), and urgency premiums for same-day or overnight work.' },
          { type: 'p', text: 'When a case requires multiple agents — and most Manhattan surveillance does — the hourly rate applies to each agent separately. Three agents working a four-hour surveillance shift at $200 per hour each means $2,400 for that shift, not $200 for the shift total.' },
          { type: 'h3', text: 'Flat Fees' },
          { type: 'p', text: 'Some services have standardized enough workflows that flat-fee pricing is common. Background checks, skip tracing, and simple asset searches are the main examples. A standard background check might be priced at a flat $500; a comprehensive executive background check at a flat $5,000. The client knows the total cost upfront, the investigator absorbs the variability.' },
          { type: 'p', text: 'Flat fees tend to price in a cushion for cases that run longer than average. If your case is actually straightforward, you may be paying slightly more than true hourly cost; if your case is unusually complex, flat fees protect you from runaway billing.' },
          { type: 'h3', text: 'Retainers' },
          { type: 'p', text: 'Most Manhattan investigations that run beyond a day or two require a retainer. The investigator holds an upfront deposit (commonly $1,500 to $5,000, higher for complex cases) and bills against it. When the retainer is exhausted, the client either replenishes it or the case stops.' },
          { type: 'p', text: 'Retainers protect both parties. The investigator knows they will be paid for the work they do; the client has a capped commitment until they decide whether to continue. Good investigators provide regular updates on how much of the retainer has been spent and what remains.' },
        ],
      },
      {
        id: 'what-drives-cost',
        heading: 'What Actually Drives the Price',
        content: [
          { type: 'p', text: 'Two cases that sound similar on paper can differ by an order of magnitude in cost. The factors that drive the gap are not mysterious — they are just rarely explained to clients in advance.' },
          { type: 'h3', text: 'Case Duration' },
          { type: 'p', text: 'Surveillance pricing scales almost linearly with hours. A three-day operation at eight hours per day with two agents at $200 per hour is $9,600. The same operation across two weeks is closer to $32,000. The duration variable is usually the single biggest driver of total cost.' },
          { type: 'h3', text: 'Number of Agents Required' },
          { type: 'p', text: 'Manhattan surveillance almost always requires more agents than non-urban work. A single investigator working foot surveillance through Midtown pedestrian density gets burned within an hour. Two-agent coverage is the minimum; three-agent rotations are common for subjects with complex routines; four-agent operations are normal for cases involving multiple simultaneous venues.' },
          { type: 'p', text: 'If a Manhattan investigator quotes single-agent surveillance pricing, that is a red flag. The work will not produce the evidence quality you need.' },
          { type: 'h3', text: 'Complexity and Jurisdictions' },
          { type: 'p', text: 'Asset searches provide the clearest example. A single-jurisdiction search across New York public records might be $1,500 and take a week. The same type of search extending across multiple states, offshore jurisdictions, and private investment vehicles might be $15,000 and take six weeks. The work is fundamentally different despite the same case label.' },
          { type: 'h3', text: 'Evidence Requirements' },
          { type: 'p', text: 'Investigation for court-admissible evidence costs more than investigation for personal knowledge. Court-ready work requires proper chain of custody, timestamped documentation, investigator testimony availability, and reports structured for legal use. The additional rigor adds both time and specialized effort.' },
          { type: 'h3', text: 'Investigator Experience' },
          { type: 'p', text: 'A former FBI agent with 25 years of financial-crimes experience does not charge the same as a newly licensed investigator two years out of NYPD patrol. For routine work the experience premium may not matter; for complex commercial fraud, high-asset matrimonial investigation, or cases likely to end up in court, experienced investigators produce better outcomes and the higher hourly rate is usually the cheaper choice when you look at total case cost.' },
        ],
      },
      {
        id: 'reading-a-quote',
        heading: 'How to Read a Manhattan PI Quote',
        content: [
          { type: 'p', text: 'A well-structured quote from a Manhattan investigator should tell you four things clearly. If any of these are missing from the quote, ask before you sign.' },
          { type: 'ol', items: [
            'Hourly rate and agent count. For any surveillance or active-investigation component, you should see a per-agent hourly rate and an estimate of how many agents the case requires. Total hourly cost per hour is the product of these.',
            'Retainer amount and how it is billed. You should know the upfront retainer and the schedule for how the investigator bills against it. Good investigators provide weekly or bi-weekly retainer-balance updates.',
            'Scope of work. The quote should specify what is included — surveillance hours, database searches, source interviews, reporting — and what is not. Scope creep is the main reason investigation budgets run over.',
            'Deliverables. You should know what you get at the end: a written report, photographs and video, an evidence package structured for court, or something else. Vague deliverables often mean unclear scope.',
          ] },
          { type: 'callout', variant: 'warning', heading: 'Red flags', text: 'Be cautious of investigators who will not put pricing in writing, who promise specific outcomes ("I guarantee we will catch him cheating"), who quote flat fees for genuinely hourly work like surveillance, or whose pricing is dramatically below market (below $75/hour for Manhattan surveillance typically indicates either inexperience or unlicensed operation).' },
        ],
      },
      {
        id: 'vs-other-cities',
        heading: 'Manhattan PI Costs vs. Other Cities',
        content: [
          { type: 'p', text: 'Manhattan private investigator rates are generally higher than the national average for two clear reasons. The first is cost of doing business — insurance, office space, equipment, and investigator living costs are all meaningfully higher in New York City than in most U.S. markets.' },
          { type: 'p', text: 'The second is that Manhattan investigation work is genuinely harder than equivalent work in most cities. Dense pedestrian environments require more agents. Doorman buildings and co-op privacy infrastructure complicate residential surveillance. The 24-hour nature of Manhattan means operations commonly extend into evening and overnight hours. Multi-borough cases introduce logistics that suburban investigation does not.' },
          { type: 'p', text: 'A case that might cost $5,000 in a midsize U.S. city commonly costs $8,000 to $12,000 in Manhattan. The work itself is proportionally harder, and the investigators who produce reliable results in Manhattan are commonly the most experienced in the country at urban investigation.' },
        ],
      },
      {
        id: 'what-to-expect',
        heading: 'What to Expect at Each Stage of a Case',
        content: [
          { type: 'h3', text: 'Initial Consultation' },
          { type: 'p', text: 'Initial consultations in Manhattan are almost always free and confidential. This is the investigator learning your situation, explaining what they can and cannot do, and scoping what the investigation would likely look like. You are not committed to anything by having a consultation — and no reputable Manhattan investigator will pressure you to decide on the call.' },
          { type: 'h3', text: 'Retainer and Engagement' },
          { type: 'p', text: 'Once you decide to proceed, the investigator provides a written engagement agreement specifying scope, hourly rates, retainer amount, and deliverables. You pay the retainer and the case begins. The agreement should also cover confidentiality, scope expansion procedures, and termination terms.' },
          { type: 'h3', text: 'Active Investigation' },
          { type: 'p', text: 'During active investigation, expect regular updates — weekly at minimum for multi-week cases, more frequently when the work is producing evidence. You should receive interim reports that summarize what has been found, how many retainer hours have been consumed, and what the recommended next steps are.' },
          { type: 'h3', text: 'Final Reporting and Evidence Package' },
          { type: 'p', text: 'At the conclusion of the investigation, you receive a written report with full documentation of what was found, photographs and video where applicable, source-interview notes, and any specialized evidence (asset reports, background findings, etc.). For cases heading to court, the evidence package is structured for admissibility and the investigator is available to testify.' },
        ],
      },
      {
        id: 'common-questions',
        heading: 'Common Questions About Manhattan PI Costs',
        content: [
          { type: 'h3', text: 'Are PI fees tax-deductible?' },
          { type: 'p', text: 'Sometimes, depending on context. Investigation fees incurred in the course of generating income (business due diligence, corporate investigation, judgment enforcement) are generally deductible as business expenses. Personal investigation fees (infidelity, personal background checks) are generally not deductible under current tax law. Consult your accountant for your specific situation; this is not tax advice.' },
          { type: 'h3', text: 'Can I get the other party to pay in a divorce case?' },
          { type: 'p', text: 'In some New York matrimonial cases, courts will order one party to contribute to the other\'s reasonable investigation costs where the investigation produced evidence material to the proceedings. This is not automatic and depends on the specific financial circumstances, the outcome of the investigation, and the judge. Your divorce attorney can advise on whether this is realistic in your case.' },
          { type: 'h3', text: 'Do I pay for unsuccessful investigations?' },
          { type: 'p', text: 'Yes — you are paying for the work performed, not the outcome. A reputable investigator will only take cases they believe can produce useful results, and will be honest if they think a case is unlikely to succeed. But if surveillance does not capture a subject in the documented conduct you suspected, you still pay for the surveillance time. This is why honest initial consultations matter: a good investigator will tell you when a case is unlikely to produce what you hope for.' },
          { type: 'h3', text: 'How do payment plans work?' },
          { type: 'p', text: 'Most Manhattan investigators operate on retainer rather than payment plans, but for longer-running cases some investigators work on monthly retainer replenishment schedules. Payment plans for single-case engagements are less common; if cashflow is a constraint, a scoped lower-budget investigation is usually the better path than a payment-plan arrangement for a larger engagement.' },
          { type: 'h3', text: 'What if I run out of money mid-case?' },
          { type: 'p', text: 'If you exhaust the retainer and cannot replenish it, the investigator stops work. A good investigator will give you what has been gathered to that point and explain what is incomplete. Running out mid-investigation is bad for both parties — this is why honest scoping at the outset is important, and why it is generally better to start with a tightly-scoped investigation you can afford fully than an ambitious one that may stall before completion.' },
        ],
      },
      {
        id: 'next-steps',
        heading: 'Next Steps',
        content: [
          { type: 'p', text: 'If you are weighing whether to hire an investigator, the most useful thing you can do is have an initial consultation. You will learn what is actually feasible for your specific situation, what it would realistically cost, and whether an investigation makes sense at all.' },
          { type: 'p', text: 'Consultations are free and confidential. The investigator is assessing whether your case is one they can help with; you are assessing whether their approach and pricing fit your situation. No commitment until you decide to proceed.' },
        ],
      },
    ],
    relatedServices: ['infidelity-investigation', 'surveillance', 'background-checks', 'corporate-investigations', 'asset-searches', 'child-custody-investigations'],
  },

  // ============================================================
  // STUB — Sprint 4b will populate this
  // ============================================================
  {
    slug: 'hire-a-pi-manhattan',
    title: 'How to Hire a Private Investigator in Manhattan',
    metaTitle: 'How to Hire a Private Investigator in Manhattan | P.I. Manhattan',
    metaDescription: 'Complete guide to hiring a private investigator in Manhattan. What to look for, questions to ask, pitfalls to avoid, and how to know you are hiring the right professional.',
    publishDate: '2026-04-17',
    lastUpdated: '2026-04-17',
    readingTimeMinutes: 14,
    heroEyebrow: 'Hiring Guide',
    heroDescription: 'This guide is being prepared and will be published shortly. Check back soon.',
    intro: ['Coming soon.'],
    sections: [],
    relatedServices: ['infidelity-investigation', 'corporate-investigations', 'background-checks'],
  },

  // ============================================================
  // STUB — Sprint 4c will populate this
  // ============================================================
  {
    slug: 'pi-licensing-new-york',
    title: 'Private Investigator Licensing in New York',
    metaTitle: 'Private Investigator Licensing in New York | P.I. Manhattan',
    metaDescription: 'Complete guide to private investigator licensing in New York State. Article 7 requirements, what a NYS license means, how to verify an investigator is licensed.',
    publishDate: '2026-04-17',
    lastUpdated: '2026-04-17',
    readingTimeMinutes: 12,
    heroEyebrow: 'Licensing Guide',
    heroDescription: 'This guide is being prepared and will be published shortly. Check back soon.',
    intro: ['Coming soon.'],
    sections: [],
    relatedServices: ['infidelity-investigation', 'corporate-investigations'],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}
export function getAllGuideSlugs(): string[] {
  return guides.map(g => g.slug);
}
export function isGuidePublished(g: Guide): boolean {
  return g.sections.length > 0;
}
export function getPublishedGuides(): Guide[] {
  return guides.filter(isGuidePublished);
}
