// data/guides.ts
import { guideFeaturedImages } from './featuredImages';
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
  featuredImage?: string;
  featuredImageAlt?: string;
  heroEyebrow: string;       // short category label above H1
  heroDescription: string;   // ~30-50 word lead paragraph shown in hero
  intro: string[];           // intro paragraphs shown above TOC
  sections: GuideSection[];
  relatedServices: string[]; // service slugs to link at bottom
  faqs?: { question: string; answer: string }[]; // optional FAQ block + FAQPage schema
  relatedGuides?: string[];  // sideways links to adjacent hub slugs
}

const guideEntries: Guide[] = [
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
    relatedGuides: ['hire-a-pi-manhattan', 'pi-licensing-new-york'],
  },

  // ============================================================
  // Hiring Guide
  // ============================================================
  {
    slug: 'hire-a-pi-manhattan',
    title: 'How to Hire a Private Investigator in Manhattan',
    metaTitle: 'How to Hire a Private Investigator in Manhattan | P.I. Manhattan',
    metaDescription: 'Complete guide to hiring a private investigator in Manhattan. What to look for, questions to ask, red flags to avoid, and how to know you are hiring the right professional.',
    publishDate: '2026-04-17',
    lastUpdated: '2026-04-17',
    readingTimeMinutes: 16,
    heroEyebrow: 'Hiring Guide',
    heroDescription: 'Hiring a private investigator in Manhattan is not like hiring an accountant or a lawyer. The industry is less transparent, the quality variance is larger, and the stakes of choosing wrong are higher. This guide walks through what to look for, what to ask, and what to avoid.',
    intro: [
      'Most people who end up hiring a private investigator are doing so for the first time. That is not a coincidence — investigation is typically a response to a specific situation (a divorce, a business dispute, a concern about a family member, a judgment that needs enforcing) rather than an ongoing professional relationship. By the time you are in the market for a PI, you are also usually under some kind of pressure.',
      'That combination — first-time buyer, pressured circumstances — makes it easy to hire the wrong person. The industry has genuine professionals who produce excellent results, and it has operators who will take your retainer and deliver very little. Telling the difference is not intuitive, but there is a clear framework for doing it.',
      'This guide walks through what to look for before you sign, what questions to ask in the initial consultation, what should be in the written engagement agreement, and what signals should make you walk away. It is written assuming you have never hired a PI before and do not want to rely on guesswork.',
    ],
    sections: [
      {
        id: 'short-answer',
        heading: 'The Short Answer',
        content: [
          { type: 'p', text: 'If you only read one section of this guide, read this one. Four things separate a good Manhattan PI hire from a bad one.' },
          { type: 'ol', items: [
            'Verified NYS license. Private investigation is regulated in New York under Article 7 of the General Business Law. Every legitimate PI operating in the state has a current Department of State license, and you can verify it online in two minutes. Anyone without a current license is either breaking the law or operating under an agency license held by someone else — in either case, you need to understand which.',
            'Specialization that matches your case. Manhattan investigators differ significantly in what they actually do well. A matrimonial-surveillance specialist is not the right hire for a corporate fraud case, and vice versa. Match the investigator\'s track record to the specific case type you have.',
            'Written engagement with clear scope and pricing. Never hire a PI on a handshake or an email thread. A written engagement agreement specifying scope, hourly rates, retainer amount, and deliverables protects both parties. Investigators who resist putting things in writing are telling you something.',
            'Transparent pricing including retainer and billing rhythm. You should know what you are paying, what the hourly rate covers, how the retainer is billed against, and what the approximate total range for your case is. Vague pricing is a warning sign.',
          ] },
          { type: 'callout', variant: 'key-fact', heading: 'If anything is missing', text: 'If an investigator will not put their license number in writing, will not specify scope, or will not commit to a pricing structure — the problem is not that they are busy. The problem is that they are not who you should be hiring.' },
        ],
      },
      {
        id: 'why-manhattan-different',
        heading: 'Why Hiring in Manhattan Is Different',
        content: [
          { type: 'p', text: 'Manhattan is one of the most demanding environments for private investigation work in the country, and that affects both who you should hire and how the work should be structured. Three factors matter most.' },
          { type: 'h3', text: 'Investigation is harder here, and cheap investigators cannot do it' },
          { type: 'p', text: 'Single-investigator surveillance does not work in Manhattan. The pedestrian density means an agent gets visually burned within an hour in most neighborhoods. Doorman buildings, co-op privacy infrastructure, and the layered residential-entry systems that Manhattan buildings use all make basic tasks (verifying an address, observing someone entering or leaving) substantially harder than in suburban or lower-density urban environments.' },
          { type: 'p', text: 'The practical consequence is that Manhattan investigation commonly requires multi-agent teams, experienced specialists familiar with the specific neighborhood environment, and longer timelines than equivalent work elsewhere. PIs who charge rural-market pricing for Manhattan work are either not actually doing the work (single-agent surveillance that gets burned immediately) or losing money on every case and cutting corners to compensate.' },
          { type: 'h3', text: 'The stakes per case are often higher' },
          { type: 'p', text: 'Manhattan cases commonly involve substantial financial exposure — high-asset matrimonial proceedings, corporate IP matters, major commercial fraud, significant estate matters. The evidence quality required to resolve these cases is correspondingly higher. Evidence that would close a midsize-city case commonly falls short of the admissibility threshold for the high-stakes litigation that Manhattan matters frequently become.' },
          { type: 'p', text: 'This means the investigator you hire needs to understand New York court evidentiary standards specifically, work to chain-of-custody protocols that hold up under cross-examination, and produce reports structured for legal use. Not every licensed PI meets this bar, even among Manhattan practitioners.' },
          { type: 'h3', text: 'The industry here includes substantial specialization' },
          { type: 'p', text: 'Manhattan has enough investigative volume to support investigators who specialize narrowly — matrimonial specialists, corporate fraud specialists, high-net-worth asset-tracing specialists, medical-industry background specialists, and others. Outside of Manhattan, most investigators are generalists working whatever case comes in. Here, you can (and should) match the specialist to your specific situation.' },
        ],
      },
      {
        id: 'licensing',
        heading: 'What NY Licensing Actually Means — and How to Verify It',
        content: [
          { type: 'p', text: 'Private investigators in New York are licensed under Article 7 of the General Business Law, administered by the New York Department of State through its Division of Licensing Services. This is not a symbolic credential. The license is what makes an investigator\'s work legally defensible and their evidence admissible in court.' },
          { type: 'h3', text: 'What the license signals' },
          { type: 'p', text: 'To hold a NY PI license, an investigator must be at least 25 years old, have documented qualifying experience (typically three or more years in investigation, law enforcement, or a closely related field), have passed the state examination, have no disqualifying criminal record, and have posted a $10,000 surety bond. The license must be renewed every two years.' },
          { type: 'p', text: 'The practical meaning for you is threefold. First, a licensed PI has been vetted for basic competence and character. Second, they are operating under a regulatory framework that can discipline misconduct. Third, evidence they gather is presumptively admissible in New York courts, where evidence from unlicensed sources may not be.' },
          { type: 'h3', text: 'How to verify a license yourself' },
          { type: 'p', text: 'License verification takes about two minutes. The NY Department of State operates a public licensing lookup at appext20.dos.ny.gov/lcns_public/chk_load where you can search by business name or UID number. Look up the investigator or agency you are considering and confirm the license is current and in good standing. If you cannot find a record, ask for the exact name under which the license is held — sole-proprietor investigators sometimes hold licenses under a name that differs from their trade name.' },
          { type: 'p', text: 'If verification still fails, call the Division of Licensing Services directly at (518) 474-4429. They can confirm licensing status by UID. An investigator who refuses to provide their UID number or the name their license is held under is almost certainly not someone you want to hire.' },
          { type: 'h3', text: 'Solo license vs. agency license' },
          { type: 'p', text: 'Some investigators hold their own individual license; others work under an agency license held by the firm that employs them. Both arrangements are legal and common. What matters is that the specific person doing your work is either licensed themselves or employed by a licensed agency under proper supervision. If you are working with a lead investigator who is not personally licensed, the agency license under which they operate should be clearly identified.' },
          { type: 'callout', variant: 'warning', heading: 'Unlicensed operators', text: 'New York has a functional unlicensed-investigator economy — operators who market investigative services without licensure, particularly online. Evidence produced by unlicensed investigators is commonly inadmissible, and hiring one can expose you to liability. The license check is not optional.' },
        ],
      },
      {
        id: 'matching-case-type',
        heading: 'Matching the Investigator to Your Case Type',
        content: [
          { type: 'p', text: 'One of the most important and least-understood factors in hiring a Manhattan PI is specialization. A seasoned investigator working outside their specialty commonly produces worse results than a less-experienced specialist who works that case type regularly. This is particularly true for cases likely to end up in court.' },
          { type: 'h3', text: 'Matrimonial and custody cases' },
          { type: 'p', text: 'These are surveillance-heavy cases requiring multi-agent Manhattan foot-surveillance capability, familiarity with New York matrimonial law and family court evidentiary standards, and the emotional professionalism to work one of the most charged case types in the industry. Former police, particularly former NYPD detectives with matrimonial-surveillance specialization, are common choices. For custody matters, experience with family court specifically matters — the standards are different from Supreme Court matrimonial work.' },
          { type: 'h3', text: 'Corporate and commercial investigation' },
          { type: 'p', text: 'Corporate investigation work — IP theft, internal fraud, executive misconduct, M&A diligence — requires a different skill set entirely. Common backgrounds include former FBI agents with white-collar or financial-crimes experience, forensic accountants with investigation credentials, and investigators who have spent time at major firms doing corporate work specifically. Surveillance specialists are generally not the right hire for corporate matters, and vice versa.' },
          { type: 'h3', text: 'Asset searches and judgment enforcement' },
          { type: 'p', text: 'Asset tracing requires deep database access, forensic-accounting coordination, and often cross-border records capability. Specialists in this area commonly come from financial-industry backgrounds or have spent substantial time doing due-diligence work. For high-asset matrimonial cases or complex commercial judgments, a specialist in asset work who partners with a surveillance specialist when needed is frequently the right structure.' },
          { type: 'h3', text: 'Background checks' },
          { type: 'p', text: 'Background checks sound simple but vary enormously in depth. A basic tenant-screening background check is a database exercise. An executive due-diligence background check on a C-suite hire involves multi-jurisdictional records, source interviews, and reputational investigation. Match the depth of the check to the decision you are making — and match the investigator\'s credentials to the depth of check required.' },
          { type: 'h3', text: 'Missing persons and skip tracing' },
          { type: 'p', text: 'These are database-and-source-interview specialties distinct from surveillance work. Skip tracers commonly specialize in specific types of cases — service of process, judgment enforcement, witness location, beneficiary location. Match the specialization to the purpose of the search.' },
          { type: 'callout', variant: 'note', heading: 'If your case crosses types', text: 'Many Manhattan cases have multiple components — a high-asset divorce might involve surveillance, asset tracing, and background investigation all at once. In these situations, hire the specialist in the primary component and let them bring in coordinators for secondary work, rather than hiring one generalist to handle everything.' },
        ],
      },
      {
        id: 'questions-to-ask',
        heading: 'Questions to Ask Before You Hire',
        content: [
          { type: 'p', text: 'A good initial consultation is a two-way interview. The investigator is assessing whether your case is one they can help with; you are assessing whether their approach fits your situation. The following questions are organized by category — you do not need to ask all of them, but the answers to the core ones should be unambiguous.' },
          { type: 'h3', text: 'About licensing and credentials' },
          { type: 'ul', items: [
            'What is your NYS license UID number, or the UID of the agency whose license you operate under?',
            'How long have you been licensed, and how long have you been doing investigation work professionally?',
            'What is your background before private investigation — law enforcement, military, corporate investigation, other?',
            'Do you carry professional liability insurance beyond the bond? What is the coverage amount?',
          ] },
          { type: 'h3', text: 'About case-specific experience' },
          { type: 'ul', items: [
            'How many cases of this type have you worked in the past year? In the past five years?',
            'What is your typical outcome on cases like mine? What does a successful result usually look like?',
            'Can you describe, without identifying details, a recent case you handled that was similar to mine?',
            'Are there aspects of my case that are outside your primary experience? If so, how would you handle those?',
          ] },
          { type: 'h3', text: 'About scope, pricing, and process' },
          { type: 'ul', items: [
            'What is your recommended approach for a case like mine? What would the investigation actually look like?',
            'What is your hourly rate, and how many agents would this case typically require?',
            'What retainer would you propose, and what is the likely total cost range?',
            'How often will you provide updates? What format do reports take?',
            'What happens if the investigation does not produce what I am hoping for? Do you charge for unsuccessful work?',
          ] },
          { type: 'h3', text: 'About legal considerations' },
          { type: 'ul', items: [
            'Will the evidence you gather be admissible in court if my case ends up there?',
            'How do you handle chain of custody for photographs and video?',
            'Are you available to testify about your observations if needed?',
            'Are there legal boundaries on what you can do in my case that I should understand upfront?',
          ] },
          { type: 'h3', text: 'About confidentiality' },
          { type: 'ul', items: [
            'How is my information handled during the investigation and afterward?',
            'If my spouse or opposing party asks for information about whether they are being investigated, how do you respond?',
            'How long do you retain case records, and what happens to them afterward?',
          ] },
        ],
      },
      {
        id: 'red-flags',
        heading: 'Red Flags That Should Make You Walk Away',
        content: [
          { type: 'p', text: 'Not every red flag is a deal-breaker on its own, but the combination of two or three should stop you from proceeding. These are the signals that most often indicate either incompetence, unlicensed operation, or outright fraud.' },
          { type: 'h3', text: 'Will not provide a license number in writing' },
          { type: 'p', text: 'An investigator who is evasive about licensing — cannot produce the UID number, refuses to put it in an email, or gives a name you cannot verify in the state system — is almost always either unlicensed or operating under someone else\'s license without proper authorization. This is the single clearest signal. If licensing verification fails, the hire stops there.' },
          { type: 'h3', text: 'Guarantees specific outcomes' },
          { type: 'p', text: 'Legitimate investigators promise their best effort, not specific results. An investigator who guarantees they will catch your spouse cheating, promises a specific evidence outcome, or commits to findings before the investigation even begins is either dishonest or inexperienced. Real investigation produces whatever evidence exists; it does not manufacture it.' },
          { type: 'h3', text: 'Pricing that is dramatically below market' },
          { type: 'p', text: 'Manhattan surveillance below about $100 per hour per agent is almost always a signal that the work is not being done properly — either the investigator is cutting corners, using unlicensed subagents, or operating below the threshold at which the work can be sustainably performed. Low-cost investigation occasionally reflects genuine value, but more often reflects a business model that depends on clients not understanding what they are actually getting.' },
          { type: 'h3', text: 'Resistance to written engagement' },
          { type: 'p', text: 'Some investigators will push to operate on handshake agreements, verbal scope understanding, or emailed summaries in place of formal engagement agreements. This is always a warning sign. Written engagements protect both parties; an investigator who resists writing things down is usually someone who wants flexibility to change terms later.' },
          { type: 'h3', text: 'Pressure tactics during the consultation' },
          { type: 'p', text: 'A reputable Manhattan investigator will never pressure you to decide during the consultation itself. They understand you are making a significant decision, often in stressful circumstances, and that you deserve time to think. Pressure tactics — "I have another case starting Monday so I need to know today," "my retainer goes up next week" — are sales tactics. Good investigators do not need them.' },
          { type: 'h3', text: 'Offering to do things that are clearly illegal' },
          { type: 'p', text: 'Any investigator who offers to access bank records without subpoena, obtain call logs, intercept text messages, install GPS trackers on vehicles they do not own, or access email accounts is proposing illegal conduct. This is not just a red flag — it can expose you to criminal and civil liability, and evidence obtained this way is not admissible in any legitimate proceeding. Walk away immediately.' },
          { type: 'h3', text: 'Vague answers about methods' },
          { type: 'p', text: 'A professional investigator can explain, at least at a high level, how they would approach your case. Vague answers ("we have our ways," "trust the process") suggest either that they do not have a specific plan or that they do not want you understanding what they will actually do. You should understand the basic method the investigator proposes to use.' },
        ],
      },
      {
        id: 'consultation',
        heading: 'What a Good Consultation Looks Like',
        content: [
          { type: 'p', text: 'The initial consultation is where most of the information you need actually surfaces. Done well, it takes 30-60 minutes, covers specific ground, and leaves you with the information needed to make a decision.' },
          { type: 'h3', text: 'What should happen' },
          { type: 'p', text: 'A good consultation starts with you describing the situation — what is going on, what you already know, what you hope the investigation will accomplish. The investigator listens, asks clarifying questions, and then explains what a realistic investigation would look like for your specific situation. They should explain their recommended approach, the likely timeline, the approximate cost range, and any legal or practical limitations you should understand.' },
          { type: 'p', text: 'By the end, you should have clear answers to: what would the investigation actually do, what would it likely cost, what would success look like, what are the risks of failure, and what would the next concrete step be if you wanted to proceed.' },
          { type: 'h3', text: 'What should not happen' },
          { type: 'p', text: 'A consultation that feels like a sales pitch is a warning sign. If you leave the conversation with excitement about what the investigator will accomplish but without specific answers about scope, pricing, or methodology, the consultation was not actually serving its purpose. Push for specifics; watch how the investigator handles the request.' },
          { type: 'p', text: 'Equally, an investigator who tells you too little — who will not explain their approach until after you sign, who treats all methodology as proprietary — is probably not who you want. Some case details are confidential for good reasons (you should not know the identities of other clients, for example) but the methodology of your own case should be clearly communicable.' },
          { type: 'h3', text: 'When the honest answer is "I cannot help with this"' },
          { type: 'p', text: 'Good investigators turn down cases they cannot help with. If your consultation ends with the investigator explaining why the case as described is unlikely to produce useful results, or recommending a different professional (an attorney, a forensic specialist, a different type of investigator), that is often the most valuable consultation you will have. It saves you from spending money on an investigation that would not succeed.' },
        ],
      },
      {
        id: 'engagement-agreement',
        heading: 'The Engagement Agreement: What Should Be in Writing',
        content: [
          { type: 'p', text: 'A written engagement agreement is the single most important document in the relationship with your investigator. It defines what work will be done, what it will cost, and what happens in the common scenarios that arise during active cases. Before signing, the agreement should clearly specify the following.' },
          { type: 'h3', text: 'Scope of work' },
          { type: 'p', text: 'The agreement should specify what the investigator will do: what type of investigation, what specific activities (surveillance, background research, source interviews), what the deliverable looks like, and over what timeframe. Scope is the most common source of disputes later, and ambiguity at the start almost always costs money.' },
          { type: 'h3', text: 'Hourly rate and how billing works' },
          { type: 'p', text: 'The agreement should specify the hourly rate, per-agent billing where multi-agent work is expected, what hours are billable (travel time, preparation, reporting time), and what overhead or expenses pass through to you separately. Clear billing structure prevents surprise line items.' },
          { type: 'h3', text: 'Retainer amount, billing cadence, and replenishment' },
          { type: 'p', text: 'The agreement should specify the retainer amount, how often you receive statements showing retainer depletion, when additional retainer is required, and what happens if retainer runs out mid-case. Good investigators offer weekly or bi-weekly retainer reports.' },
          { type: 'h3', text: 'Scope change procedure' },
          { type: 'p', text: 'Cases change as they develop — new information surfaces, the initial approach does not work, additional angles emerge. The agreement should specify how scope expansion is authorized, documented, and priced. The typical standard is written authorization (email is fine) before additional work begins.' },
          { type: 'h3', text: 'Confidentiality and information handling' },
          { type: 'p', text: 'The agreement should specify the investigator\'s confidentiality obligations, how long case records are retained, what happens to records when the case concludes, and the circumstances under which records may be disclosed (subpoena compliance, etc.).' },
          { type: 'h3', text: 'Termination terms' },
          { type: 'p', text: 'Either party should be able to terminate the engagement; the agreement should specify notice requirements, what happens to unused retainer balance, what the investigator delivers on termination, and any wind-down fees. Avoid agreements that make termination costly or difficult.' },
          { type: 'h3', text: 'Testimony and court appearance' },
          { type: 'p', text: 'If your case may end up in court, the agreement should address whether the investigator is available to testify, how testimony is billed (commonly a flat day rate separate from investigation work), and any conditions or limitations on availability.' },
          { type: 'callout', variant: 'note', heading: 'Work with your attorney', text: 'If you have an attorney, the attorney should review the engagement agreement before you sign. Investigation agreements often intersect with litigation strategy (privilege, evidence handling, discovery implications), and attorneys who work with investigators regularly can flag issues you would miss.' },
        ],
      },
      {
        id: 'common-mistakes',
        heading: 'Common Mistakes People Make',
        content: [
          { type: 'h3', text: 'Hiring on urgency rather than fit' },
          { type: 'p', text: 'The most common mistake is hiring the first investigator you speak with because you want the investigation to start immediately. Urgency feels real in the moment; the consequences of hiring wrong last longer. Almost every case benefits from interviewing at least two investigators before signing.' },
          { type: 'h3', text: 'Confusing agency size with capability' },
          { type: 'p', text: 'Larger agencies have more resources but are not always better for your specific case. Solo specialists commonly outperform large-agency generalists for matrimonial, asset-tracing, and specialized case types where depth matters more than agent-count. Larger firms are more valuable for multi-agent surveillance operations and cases requiring simultaneous multi-angle coverage.' },
          { type: 'h3', text: 'Paying too much or too little' },
          { type: 'p', text: 'Paying too much for Manhattan investigation is often less costly than it appears — an experienced specialist at a premium rate frequently produces results in fewer hours than a cheaper generalist, and the total case cost ends up similar or lower. Paying too little almost always costs more in the long run, either because the work has to be redone or because the evidence produced is not usable.' },
          { type: 'h3', text: 'Over-specifying what you want found' },
          { type: 'p', text: 'Clients sometimes tell investigators exactly what they want the investigation to find, rather than what concerns they have and what evidence would resolve them. This is counterproductive — the investigator needs latitude to follow the actual facts. A good investigator takes your concerns seriously but will be honest if the evidence goes a different direction.' },
          { type: 'h3', text: 'Not involving your attorney early enough' },
          { type: 'p', text: 'If the investigation is connected to active or anticipated litigation, your attorney should be involved in scoping the work. Evidence admissibility, privilege handling, and discovery implications all affect how the investigation should be structured. Attorneys who have never worked with a PI before should not be scoping the work alone, but they should be coordinating with the investigator from the start.' },
          { type: 'h3', text: 'Expecting certainty that does not exist' },
          { type: 'p', text: 'Investigation produces evidence; evidence supports conclusions; conclusions inform decisions. But investigation rarely produces mathematical certainty, and expecting it to do so leads to disappointment. A good investigator will tell you what the evidence shows and what it does not — and you should expect some ambiguity rather than a dramatic reveal.' },
        ],
      },
      {
        id: 'next-steps',
        heading: 'Next Steps',
        content: [
          { type: 'p', text: 'If you are at the point of actively hiring, the most useful step is to have two or three initial consultations before you make a decision. Consultations are free and confidential — you are not committing to anything by scheduling them, and the comparative view across two or three investigators is far more informative than any single consultation alone.' },
          { type: 'p', text: 'Come to each consultation prepared: a clear description of your situation, specific questions from the list above, and a general sense of what outcome would be useful to you. Leave with the investigator\'s license UID, their proposed approach, their pricing structure, and an honest assessment of what they can and cannot do for you.' },
          { type: 'p', text: 'Then compare. The right investigator for your case is the one whose approach fits your situation, whose pricing is transparent and sustainable, and whose consultation left you more confident rather than less about what the investigation would actually accomplish.' },
        ],
      },
    ],
    relatedServices: ['infidelity-investigation', 'corporate-investigations', 'background-checks', 'surveillance', 'asset-searches', 'child-custody-investigations'],
    relatedGuides: ['investigator-costs-manhattan', 'pi-licensing-new-york'],
  },

  // ============================================================
  // Licensing Guide
  // ============================================================
  {
    slug: 'pi-licensing-new-york',
    title: 'Private Investigator Licensing in New York',
    metaTitle: 'Private Investigator Licensing in New York | P.I. Manhattan',
    metaDescription: 'Complete guide to private investigator licensing in New York State. Article 7 requirements, what a NYS license actually means, and how to verify that an investigator is properly licensed.',
    publishDate: '2026-04-17',
    lastUpdated: '2026-04-17',
    readingTimeMinutes: 13,
    heroEyebrow: 'Licensing Guide',
    heroDescription: 'New York is one of the strictest states in the country for private investigator regulation. This guide explains what the New York PI license actually requires, what a licensed investigator is permitted and prohibited from doing, and how to verify any investigator you are considering.',
    intro: [
      'Private investigation in New York has been a regulated profession since 1939, and the rules have tightened over the decades. The state licenses private investigators through the Department of State under Article 7 of the General Business Law, and the framework is meaningfully stricter than most other U.S. states — higher experience requirements, a mandatory state examination, a surety bond, and a discipline structure that can revoke licenses for misconduct.',
      'For clients, this regulatory framework matters in three practical ways. First, it means there is a clear public record of who is legitimately operating as a PI. Second, evidence gathered by licensed investigators is presumptively admissible in New York courts, while evidence from unlicensed sources often is not. Third, if something goes wrong, there is a complaint and discipline path — unlike in states with looser regulation.',
      'This guide walks through what the New York PI license requires, what licensed investigators can and cannot do, how to verify a license yourself, and the common misconceptions about what regulation does and does not cover.',
    ],
    sections: [
      {
        id: 'short-answer',
        heading: 'The Short Answer',
        content: [
          { type: 'p', text: 'Yes, private investigators in New York are required to be licensed. The license is issued by the New York Department of State, Division of Licensing Services, under Article 7 of the General Business Law. To qualify, a candidate must be at least 25 years old, have at least three years of qualifying investigative experience (or 20 years as a police officer or fire marshal), pass the state examination, post a $10,000 surety bond, pass a fingerprint-based background check, and pay the application fee. The license must be renewed every two years.' },
          { type: 'p', text: 'For anyone hiring a private investigator in New York, verifying the license is simple and takes about two minutes through the Department of State\'s public licensing lookup system. Any legitimate New York PI will provide their license information without hesitation.' },
          { type: 'callout', variant: 'key-fact', heading: 'Why this matters', text: 'Evidence from a licensed PI is admissible in New York courts. Evidence from an unlicensed operator commonly is not, and hiring an unlicensed "investigator" can expose you to civil and even criminal liability in some circumstances.' },
        ],
      },
      {
        id: 'article-7',
        heading: 'Article 7 of the General Business Law',
        content: [
          { type: 'p', text: 'The legal foundation for PI regulation in New York is Article 7 of the General Business Law, which originated as the Private Detective Act of 1939. The statute covers private investigators, bail enforcement agents, and watch/guard/patrol agencies — three distinct categories with overlapping but separate regulatory frameworks.' },
          { type: 'h3', text: 'What Article 7 regulates' },
          { type: 'p', text: 'Article 7 defines who must be licensed to perform investigative work for hire in New York, what qualifications are required, how licenses are issued and renewed, the scope of permitted activities, the surety bond requirements, the disciplinary framework for misconduct, and the criminal penalties for unlicensed operation. The statute is administered by the Department of State, Division of Licensing Services.' },
          { type: 'p', text: 'The scope of regulated activity is broad. Under the statute, a private investigator is anyone hired to obtain information about the identity, habits, conduct, movements, whereabouts, affiliations, associations, transactions, reputation, or character of any person or entity — which covers nearly all substantive investigative work. Related covered activities include credibility assessment of witnesses, missing persons location, recovery of lost or stolen property, and investigation into the causes and origin of fires or losses.' },
          { type: 'h3', text: 'Why the regulation exists' },
          { type: 'p', text: 'Licensing serves three purposes. It establishes minimum competence standards — you cannot legally operate as a PI without documented experience and demonstrated knowledge of the legal framework. It creates consumer protection mechanisms — the bond, the complaint process, and the discipline structure give clients recourse when things go wrong. And it supports the legal system — licensed investigators operating within Article 7 produce evidence that can be used in court, which unlicensed operators generally cannot.' },
        ],
      },
      {
        id: 'who-needs-license',
        heading: 'Who Needs a License — and the Limited Exemptions',
        content: [
          { type: 'p', text: 'The default rule under Article 7 is that anyone conducting investigative work for compensation in New York needs either an individual PI license or must be operating under an agency license held by a licensed firm. The exemptions are narrow and commonly misunderstood.' },
          { type: 'h3', text: 'Who is exempt' },
          { type: 'p', text: 'Active law enforcement officers performing their official duties are exempt — NYPD detectives conducting NYPD investigations do not need a PI license. Licensed attorneys conducting investigation in the course of representing a client are exempt. Insurance adjusters conducting investigation within their adjuster licensing framework are exempt. Certain categories of credit reporting and financial due diligence activity are exempt, though the lines here are narrower than many practitioners realize.' },
          { type: 'h3', text: 'What is not exempt' },
          { type: 'p', text: 'Several activities that some practitioners assume are exempt are actually not. Process servers are separately licensed through the New York City Department of Consumer and Worker Protection (for service within NYC) — but if a process server is also conducting investigative work to locate a defendant, that investigative component generally requires a PI license. Skip tracing for compensation requires licensure. So does background investigation for employment screening. "Information broker" and "asset locator" work generally falls under the PI licensing requirement regardless of the title used to describe the work.' },
          { type: 'p', text: 'The practical test: if you are being paid to find out information about someone, and your method involves investigation beyond simple database queries that consumers can run themselves, you probably need a license under Article 7.' },
          { type: 'h3', text: 'Agency licensing vs. individual licensing' },
          { type: 'p', text: 'Article 7 recognizes both individual licenses (held by a specific investigator) and agency licenses (held by a firm that employs investigators). Both are legal. The practical distinction is that an agency license allows the firm to employ investigators who are not themselves individually licensed, operating under the supervision of the license-holding principal.' },
          { type: 'p', text: 'For hiring purposes, either structure is legitimate. What matters is that the specific person doing your work is either individually licensed or employed by a licensed agency under proper supervision. If you are working with an agency, you should know the agency\'s license UID; if you are working with a solo investigator, you should know their individual UID. "I work under my boss\'s license" is not an adequate answer without the underlying agency UID being verifiable.' },
          { type: 'callout', variant: 'warning', heading: 'The unlicensed economy', text: 'New York has a functional unlicensed-investigator market, particularly online. Operators market investigative services without licensure, often at below-market prices. Hiring them produces inadmissible evidence and can expose the client to liability. The license check is not optional due diligence — it is the foundation of the hire.' },
        ],
      },
      {
        id: 'requirements',
        heading: 'What It Takes to Get a New York PI License',
        content: [
          { type: 'p', text: 'The qualification requirements are substantial, which is part of why New York investigator quality tends to run higher than in less-regulated states. Every applicant must meet the following.' },
          { type: 'h3', text: 'Basic eligibility' },
          { type: 'ul', items: [
            'At least 25 years old at the time of application',
            'United States citizen or legal resident alien',
            'High school diploma or GED equivalent',
            'No disqualifying criminal convictions (felonies and certain misdemeanors disqualify; the specifics are fact-dependent)',
          ] },
          { type: 'h3', text: 'Qualifying experience' },
          { type: 'p', text: 'This is the most substantive barrier. An applicant must have one of the following:' },
          { type: 'ul', items: [
            'Three years of full-time investigative experience as an employee of a licensed private investigator, an investigator for a government agency, or a law enforcement officer',
            'Three years of equivalent experience in a role where the primary duties were conducting investigations',
            'Three years of experience supervising at least three people who conducted investigations',
            'Twenty years of service as a police officer or fire marshal',
          ] },
          { type: 'p', text: 'The experience must be documented through sworn statements from employers and, commonly, proof of earnings establishing the full-time nature of the work. The state reviews experience claims carefully — candidates do not get licensed on weak or undocumented experience histories.' },
          { type: 'h3', text: 'State examination' },
          { type: 'p', text: 'All applicants must pass the New York private investigator examination, a multiple-choice test covering the legal framework (Article 7), investigative methods, ethics, and related topics. The passing score is 70 percent. The exam fee is $15, and results are valid for two years — a candidate who passes the exam has two years to complete the rest of the application process before retaking it.' },
          { type: 'h3', text: 'Fingerprinting and background check' },
          { type: 'p', text: 'Electronic fingerprinting is required, submitted to the state through the designated vendor. The fingerprint-based background check screens for disqualifying criminal history. The fingerprinting fee is paid separately to the vendor, typically in the $88.50 range.' },
          { type: 'h3', text: 'Surety bond' },
          { type: 'p', text: 'Licensees must post a $10,000 surety bond, which provides a financial recovery mechanism for clients or third parties injured by the licensee\'s willful, malicious, or wrongful acts. The bond is obtained from a surety company and is a recurring annual cost for the investigator.' },
          { type: 'h3', text: 'Application fees' },
          { type: 'p', text: 'Application fees as of 2026 are $400 for an individual license, $500 for a business or corporate license, and $500 for each branch office. Fees are non-refundable and are in addition to the bond and fingerprinting costs.' },
          { type: 'h3', text: 'Supporting documentation' },
          { type: 'p', text: 'The application itself requires sworn experience statements, character references (typically five people with direct knowledge of the applicant\'s character and qualifications), a DMV informed consent form, passport-style photographs, and proof of the various fees and prerequisites. The application package is substantial and the review process is not cursory.' },
          { type: 'callout', variant: 'note', heading: 'Why this matters for hiring', text: 'The qualification process means that a licensed New York PI has at minimum three years of documented investigative experience, has demonstrated knowledge of the legal framework, and has cleared a criminal background check. This is a meaningfully higher baseline than in states with looser regulation.' },
        ],
      },
      {
        id: 'verify-license',
        heading: 'How to Verify a New York PI License',
        content: [
          { type: 'p', text: 'License verification is free, fast, and essential. There are two ways to do it, and you should do at least one before you hire.' },
          { type: 'h3', text: 'Option 1: Online lookup' },
          { type: 'p', text: 'The Department of State operates a public licensing status page where you can search by business name or UID number. The URL is appext20.dos.ny.gov/lcns_public/chk_load. Search by the exact name under which the license is held. If the investigator cannot give you the exact licensed name, that is itself a warning sign.' },
          { type: 'p', text: 'A valid result shows the license type, current status (active or inactive), issue date, expiration date, and the licensed name and address. Check that the license is currently active, is specifically a Private Investigator license (not just Watch, Guard or Patrol, which is a different and more limited license), and has a future expiration date.' },
          { type: 'h3', text: 'Option 2: Phone verification' },
          { type: 'p', text: 'Call the Division of Licensing Services directly at (518) 474-4429. They can confirm licensing status by UID number or licensee name. This is the faster option if online verification is ambiguous or if you want direct confirmation before a time-sensitive hire.' },
          { type: 'h3', text: 'What to do if verification fails' },
          { type: 'p', text: 'If you cannot verify the license, either the information you were given is incorrect, the person is unlicensed, or the license is inactive or expired. Any of these is a reason to pause. Ask the investigator for the exact licensed name and UID in writing; a legitimate investigator provides this without hesitation. If they do not, the hiring decision has effectively made itself.' },
          { type: 'h3', text: 'What license verification does not tell you' },
          { type: 'p', text: 'Verification confirms that someone holds a valid license — it does not tell you whether they are good at their job, whether they have the right specialization for your case, or whether they have a history of client complaints below the threshold of formal discipline. Licensing is a necessary condition, not a sufficient one. You should verify the license, but the license check alone is not a complete hiring decision.' },
        ],
      },
      {
        id: 'permitted-prohibited',
        heading: 'What Licensed PIs Can and Cannot Do',
        content: [
          { type: 'p', text: 'One of the most common misconceptions about private investigators is that the license grants broad authority to conduct surveillance, access records, or operate in quasi-law-enforcement capacity. It does not. Licensed PIs operate within essentially the same legal constraints as any private citizen — the license establishes that they are permitted to do investigative work for hire, not that they have expanded legal authority.' },
          { type: 'h3', text: 'What a licensed PI can legally do' },
          { type: 'ul', items: [
            'Conduct surveillance in public places where the subject has no reasonable expectation of privacy — streets, sidewalks, restaurants, lobbies, and similar public settings',
            'Document observations through timestamped photography and video of events occurring in public view',
            'Conduct interviews with willing witnesses, sources, and informants',
            'Access public records, court filings, and properly licensed professional investigative databases',
            'Serve as a witness in court proceedings regarding their observations and findings',
            'Gather evidence for civil litigation, family court, matrimonial proceedings, and commercial matters',
            'Locate missing persons, conduct skip tracing, and perform background investigations within legal boundaries',
          ] },
          { type: 'h3', text: 'What a licensed PI cannot legally do' },
          { type: 'ul', items: [
            'Trespass on private property without authorization from the property owner',
            'Intercept private communications — no wiretaps, no reading someone\'s email, no accessing private accounts',
            'Obtain bank records, medical records, or other protected records without a subpoena or consent',
            'Install GPS trackers or recording devices on property they do not own or have authorization to access',
            'Impersonate law enforcement, government officials, or any licensed professional the PI is not',
            'Use investigative techniques that would be illegal for any private citizen (hacking, unauthorized database access, etc.)',
            'Detain individuals or conduct arrests outside the very limited circumstances where any citizen could do so',
            'Provide legal advice or hold themselves out as attorneys',
          ] },
          { type: 'h3', text: 'Why this distinction matters' },
          { type: 'p', text: 'Investigators who offer to obtain bank records, intercept communications, or install tracking devices on a target\'s vehicle are proposing illegal conduct — which not only exposes them to criminal liability but produces evidence that is inadmissible and can expose the client to liability as well. Any investigator who proposes methods outside the legal framework is not an asset to your case; they are a liability in it.' },
          { type: 'callout', variant: 'warning', heading: 'Pretexting', text: 'The federal Gramm-Leach-Bliley Act and various state laws prohibit "pretexting" — impersonating someone to obtain protected records. Investigators who offer to obtain bank or phone records through pretexting are proposing a federal crime. This practice was a common industry technique in the 2000s; it is not any more.' },
        ],
      },
      {
        id: 'consumer-protection',
        heading: 'Consumer Protection Under Article 7',
        content: [
          { type: 'p', text: 'Article 7 includes several consumer-protection mechanisms that are worth understanding both for hiring confidence and in case something goes wrong.' },
          { type: 'h3', text: 'The surety bond' },
          { type: 'p', text: 'Every licensed PI posts a $10,000 surety bond. If an investigator commits a "willful, malicious, or wrongful act" that injures a client or third party, the injured party can bring a claim against the bond. The amount is modest relative to the total financial harm some investigations can produce, but it creates a recovery path that would not exist in an unregulated market.' },
          { type: 'h3', text: 'Complaints and discipline' },
          { type: 'p', text: 'Clients who believe an investigator has acted improperly can file a complaint with the Department of State, Division of Licensing Services. The division investigates complaints and, where warranted, can suspend or revoke licenses. Disciplinary actions are public record and would appear on subsequent license verification checks. Serious misconduct can also result in criminal prosecution under Article 7\'s penalty provisions.' },
          { type: 'h3', text: 'The confidentiality obligation' },
          { type: 'p', text: 'Article 7 prohibits licensed investigators and their employees from divulging client information to anyone other than the client, except as required by law. Breach of this obligation is grounds for license discipline and, in serious cases, criminal liability. This is a meaningfully stronger confidentiality framework than exists in most service-industry relationships.' },
          { type: 'h3', text: 'Criminal penalties for unlicensed operation' },
          { type: 'p', text: 'Operating as a private investigator in New York without a license is a misdemeanor under Article 7. Repeat or aggravated violations can carry more serious consequences. For consumers, this means that "unlicensed PI" and "licensed PI offering a lower price" are not economic equivalents — the unlicensed operator is committing a crime, and evidence they produce comes with corresponding legal risk.' },
        ],
      },
      {
        id: 'misconceptions',
        heading: 'Common Misconceptions About PI Licensing',
        content: [
          { type: 'h3', text: '"A PI license is like a police badge."' },
          { type: 'p', text: 'It is not. A PI license is a professional credential that permits the holder to conduct investigative work for hire within the legal framework applicable to private citizens. It does not confer law enforcement authority, arrest powers, or special access to restricted records. Investigators who cultivate an impression otherwise are either confused or marketing misleadingly.' },
          { type: 'h3', text: '"Licensed PIs can access any record if they have a good reason."' },
          { type: 'p', text: 'They cannot. Bank records, medical records, phone records, and other protected records require a subpoena or the account holder\'s consent. A licensed PI has the same access to these records as any other private citizen, which is to say, essentially none without process. Investigators who claim otherwise are either misrepresenting or describing illegal methods.' },
          { type: 'h3', text: '"If a PI is licensed, everything they do is legal."' },
          { type: 'p', text: 'Not exactly. The license permits the holder to conduct investigative work; it does not immunize them from the ordinary criminal and civil law. A licensed PI who trespasses is still trespassing. A licensed PI who intercepts communications is still violating federal and state wiretap law. Licensure is not a free pass; it is permission to operate within the legal framework, not outside it.' },
          { type: 'h3', text: '"Any PI can work anywhere in the state."' },
          { type: 'p', text: 'A New York PI license permits investigative work throughout New York State. However, investigators doing work that crosses state lines may need to consider other states\' licensing requirements — some states have reciprocity arrangements, others do not. For cases involving substantial out-of-state investigation, the investigator should be upfront about the jurisdictional considerations.' },
          { type: 'h3', text: '"If I hire an unlicensed ‘investigator\' at a lower price, what\'s the worst that can happen?"' },
          { type: 'p', text: 'Several things, any of which can be substantial. Evidence gathered by an unlicensed operator is commonly inadmissible, meaning the investigation\'s output has no legal value. Unlicensed operators are not bound by Article 7\'s confidentiality provisions, creating information-exposure risk. Their methods are less likely to be legally defensible, which can expose you to counterclaims. And if the operator commits misconduct, there is no bond to recover against and no discipline path. The apparent savings rarely survive first contact with the actual cost.' },
          { type: 'h3', text: '"Out-of-state PIs can work in New York under their home-state license."' },
          { type: 'p', text: 'Generally no. An investigator operating in New York must be licensed in New York (either individually or through a licensed New York agency). Some limited work that is incidental to a primarily out-of-state case may be permissible, but substantive investigative work performed in New York by out-of-state-licensed investigators is generally a violation of Article 7.' },
        ],
      },
      {
        id: 'next-steps',
        heading: 'Next Steps',
        content: [
          { type: 'p', text: 'If you are considering hiring a Manhattan private investigator, license verification is the first concrete step. Before any substantive conversation about your case, get the investigator\'s exact licensed name and UID and verify the license through the Department of State\'s online system or by phone. This takes a few minutes and filters out the operators who should not be hiring you in the first place.' },
          { type: 'p', text: 'Once licensing is confirmed, the substantive hiring process — matching specialization to your case, asking the right questions, reviewing the engagement agreement — can proceed. License verification is not the whole due diligence process, but it is the foundation on which the rest of the process rests.' },
        ],
      },
    ],
    relatedServices: ['infidelity-investigation', 'surveillance', 'background-checks', 'corporate-investigations', 'asset-searches', 'child-custody-investigations'],
    relatedGuides: ['hire-a-pi-manhattan', 'surveillance-investigations-manhattan'],
  },

  // ─── H4. Infidelity and cheating-spouse investigations ────────────────────
  {
    slug: 'infidelity-investigations-manhattan',
    title: 'Infidelity and Cheating-Spouse Investigations in Manhattan',
    metaTitle: 'Infidelity Investigations in Manhattan: What to Know | PIM',
    metaDescription: 'How infidelity and cheating-spouse investigations work in Manhattan: what licensed investigators can legally document, what proof is admissible in New York, and typical cost.',
    publishDate: '2026-02-04',
    lastUpdated: '2026-04-20',
    readingTimeMinutes: 11,
    heroEyebrow: 'Infidelity',
    heroDescription: 'If you suspect a partner is cheating, a licensed investigator can document the facts discreetly and lawfully. This guide explains how infidelity investigations work in Manhattan, what evidence holds up, and what to expect on cost and timeline.',
    intro: [
      'An infidelity investigation is one of the most emotionally difficult reasons to hire a private investigator, and one of the most common. The goal is rarely confrontation. It is clarity: knowing the facts so you can make decisions about your relationship, your finances, and, where children are involved, your family.',
      'This guide explains what a licensed Manhattan investigator can and cannot do, how surveillance evidence is documented for New York proceedings, and what an infidelity investigation typically costs. We are a matching service and do not investigate ourselves; we connect you with NYS-licensed investigators who handle these cases discreetly.',
    ],
    sections: [
      {
        id: 'how-it-works',
        heading: 'How an Infidelity Investigation Works',
        content: [
          { type: 'p', text: 'A licensed investigator starts by reviewing what you already know: routines, locations, times of unexplained absence, and any specific concerns. From there they build a surveillance plan. Manhattan density means most infidelity work is foot surveillance by a small team rather than a single agent in a car, because a parked vehicle is conspicuous and the subject moves on foot, by subway, or by rideshare.' },
          { type: 'p', text: 'Surveillance is documented with time-stamped photography and video and a written log of movements. The investigator records what happens in public view: who the subject meets, where they go, and how long they stay. The output is a factual report, not an interpretation, structured so it can be handed to a matrimonial attorney if the matter moves toward divorce.' },
          { type: 'callout', variant: 'note', heading: 'Discretion first', text: 'A competent investigator prioritizes not being detected. If a subject becomes aware they are being watched, behavior changes and the evidentiary value of the operation drops. This is a core reason to use a licensed professional rather than attempting it yourself.' },
        ],
      },
      {
        id: 'what-is-legal',
        heading: 'What Is Legal in New York',
        content: [
          { type: 'p', text: 'Surveillance and photography in public spaces are fully legal in New York. A licensed investigator can follow and document a person anywhere the public can be. What they cannot do is also clear, and a reputable investigator will tell you so before you hire them.' },
          { type: 'ul', items: [
            'No trespassing onto private property to observe or photograph.',
            'No intercepting phone calls, texts, or email (this implicates the federal Wiretap Act and New York eavesdropping law).',
            'No accessing private accounts, devices, or financial records without authorization.',
            'GPS tracking is restricted: placing a tracker on a vehicle you do not own or jointly own raises legal exposure, so investigators handle tracking conservatively and within the law.',
          ] },
          { type: 'p', text: 'Evidence gathered legally and documented with a chain of custody is regularly accepted in New York matrimonial proceedings. New York is a no-fault divorce state, so proof of infidelity is rarely needed to obtain a divorce itself, but it can be relevant to issues like the dissipation of marital assets or, in some cases, custody and parenting decisions.' },
        ],
      },
      {
        id: 'cost-timeline',
        heading: 'Cost and Timeline',
        content: [
          { type: 'p', text: 'Most Manhattan infidelity investigations run between $2,000 and $8,000, covering one to three weeks of active surveillance plus the evidence package. Surveillance is usually billed per hour per agent, with Manhattan cases commonly requiring two agents for reliable coverage. A retainer of $2,000 to $3,500 is typical.' },
          { type: 'p', text: 'Timeline depends on how often the subject is active and how quickly patterns establish. A subject with a predictable routine can be documented in days; an irregular schedule takes longer. A good investigator gives you a realistic estimate after reviewing what you know, and will tell you honestly if the facts you have do not yet justify the spend.' },
        ],
      },
    ],
    relatedServices: ['infidelity-investigation', 'surveillance'],
    relatedGuides: ['family-custody-investigations-manhattan', 'surveillance-investigations-manhattan'],
    faqs: [
      { question: 'Is it legal to investigate my spouse in New York?', answer: 'Yes. Surveillance and photography in public spaces are legal in New York. A licensed investigator cannot trespass, intercept communications, or access private accounts, but they can document everything that happens in public view, which is usually enough to establish the facts.' },
      { question: 'Do I need proof of cheating to get divorced in New York?', answer: 'No. New York allows no-fault divorce, so you do not need to prove infidelity to end a marriage. Evidence can still matter for related issues such as dissipation of marital assets or, in some situations, custody and parenting decisions. An attorney can advise on relevance to your case.' },
      { question: 'How much does an infidelity investigation cost in Manhattan?', answer: 'Most cases run $2,000 to $8,000 for one to three weeks of surveillance plus the evidence package, with a retainer of $2,000 to $3,500. The range reflects how often the subject is active and how many agents the case requires.' },
    ],
  },

  // ─── H5. Surveillance investigations ──────────────────────────────────────
  {
    slug: 'surveillance-investigations-manhattan',
    title: 'Surveillance Investigations in Manhattan',
    metaTitle: 'Surveillance Investigations in Manhattan: A Practical Guide | PIM',
    metaDescription: 'How professional surveillance works in Manhattan: covert versus overt methods, what is legal under New York law, GPS rules, and how surveillance evidence holds up in court.',
    publishDate: '2026-02-06',
    lastUpdated: '2026-04-20',
    readingTimeMinutes: 10,
    heroEyebrow: 'Surveillance',
    heroDescription: 'Surveillance is the backbone of most private investigations. This guide explains how it works in a dense city, what New York law allows, and how the resulting evidence is documented to hold up if your case reaches court.',
    intro: [
      'Surveillance is the documented observation of a person or location over time. It supports infidelity cases, custody disputes, insurance and workers compensation claims, and corporate matters. In Manhattan, surveillance is a specialized skill because the environment is unlike anywhere else: vertical, crowded, and constantly moving.',
      'This guide covers the methods professional investigators use, the legal lines under New York law, and what makes surveillance evidence admissible. We match you with NYS-licensed investigators who run these operations; we do not conduct surveillance ourselves.',
    ],
    sections: [
      {
        id: 'methods',
        heading: 'How Surveillance Works in Manhattan',
        content: [
          { type: 'p', text: 'Outside dense cities, surveillance often means an investigator in a vehicle watching a driveway. Manhattan rarely works that way. Subjects move on foot, by subway, and by rideshare, and a stationary vehicle stands out. Effective Manhattan surveillance is usually a coordinated foot operation by two or more agents who rotate position so no single face is seen too often.' },
          { type: 'p', text: 'Investigators use cameras capable of clear capture from a distance and maintain a written log alongside the footage. The deliverable is a report with timestamped entries, photographs and video, and, where relevant, a record of locations and durations, packaged so an attorney can use it.' },
          { type: 'h3', text: 'Covert versus overt' },
          { type: 'p', text: 'Most investigative surveillance is covert: the subject does not know they are being observed, which preserves natural behavior. Overt surveillance, where a visible presence is intended to deter or to prompt a reaction, is occasional and case-specific. Your investigator will recommend the approach that fits your objective.' },
        ],
      },
      {
        id: 'legal',
        heading: 'What New York Law Allows',
        content: [
          { type: 'p', text: 'The governing principle is the reasonable expectation of privacy. There is no such expectation in a public place, so observing and recording someone on a sidewalk, in a park, or in a publicly accessible business is lawful. There is an expectation of privacy inside a home, a private office, or a bathroom, and recording there is not.' },
          { type: 'ul', items: [
            'Public-space observation and photography: legal.',
            'Audio recording of conversations: New York is a one-party-consent state for recording a conversation you are part of, but a third party recording others without consent can violate eavesdropping law. Investigators handle audio conservatively.',
            'GPS tracking: placing a tracker on a vehicle you do not own raises real legal exposure, so investigators apply it only where lawful.',
            'Trespass: never. Evidence from a trespass is both unlawful and likely inadmissible.',
          ] },
        ],
      },
      {
        id: 'court',
        heading: 'How Surveillance Evidence Holds Up',
        content: [
          { type: 'p', text: 'Surveillance evidence is admitted in New York courts routinely when three things are true: it was gathered legally, it is documented with a clear chain of custody, and the investigator who gathered it is prepared to testify to its authenticity. Footage with gaps, no logs, or an unlicensed source is far easier for opposing counsel to challenge.' },
          { type: 'p', text: 'This is the practical case for using a licensed investigator rather than gathering material yourself. A professional builds the record to evidentiary standards from the first hour, which is difficult to reconstruct after the fact.' },
        ],
      },
    ],
    relatedServices: ['surveillance', 'infidelity-investigation'],
    relatedGuides: ['infidelity-investigations-manhattan', 'pi-licensing-new-york'],
    faqs: [
      { question: 'Is surveillance legal in New York?', answer: 'Yes, in public spaces. There is no reasonable expectation of privacy on a sidewalk, in a park, or in a publicly accessible business, so observation and photography there are lawful. Recording inside a home or other private space, or trespassing to observe, is not.' },
      { question: 'Can an investigator put a GPS tracker on a car?', answer: 'It depends on ownership. Placing a tracker on a vehicle you do not own or jointly own raises legal exposure under New York and federal law, so licensed investigators use tracking only where it is clearly lawful and advise against it where it is not.' },
      { question: 'How many investigators does Manhattan surveillance need?', answer: 'Most Manhattan surveillance needs at least two agents so coverage continues if one is spotted. Busy commercial areas or complex movements can require three or four to maintain a seamless watch without detection.' },
    ],
  },

  // ─── H6. Background checks and due diligence ──────────────────────────────
  {
    slug: 'background-checks-due-diligence-manhattan',
    title: 'Background Checks and Due Diligence in Manhattan',
    metaTitle: 'Background Checks and Due Diligence in Manhattan | PIM',
    metaDescription: 'What a professional background check covers, how it differs from an online service, and what the FCRA requires. Pre-employment, tenant, and pre-relationship due diligence in Manhattan.',
    publishDate: '2026-02-09',
    lastUpdated: '2026-04-20',
    readingTimeMinutes: 11,
    heroEyebrow: 'Background and Due Diligence',
    heroDescription: 'A professional background investigation goes far beyond a database lookup. This guide explains what a licensed investigator verifies, where the FCRA applies, and when due diligence is worth it for individuals and businesses.',
    intro: [
      'Background checks and due diligence answer one question: is this person or business who they say they are? The stakes vary from a new hire to a tenant to a romantic partner to a business acquisition, but the discipline is the same: verify claims against primary sources rather than trusting a profile.',
      'This guide explains what a licensed investigator actually checks, how that differs from a consumer people-search site, and the legal rules that govern certain checks. We match you with NYS-licensed investigators; we do not run the checks ourselves.',
    ],
    sections: [
      {
        id: 'what-covered',
        heading: 'What a Professional Check Covers',
        content: [
          { type: 'p', text: 'A professional background investigation combines database access with verification work that consumer services do not perform. Depending on the purpose, it can include criminal history across multiple jurisdictions, civil litigation records, bankruptcies and liens, address and employment history, professional license verification, and analysis of public social media.' },
          { type: 'p', text: 'The difference that matters is verification. A licensed investigator can confirm a claim through direct contact and source interviews, not just report what a database returned. For high-stakes decisions, that distinction is the whole point.' },
        ],
      },
      {
        id: 'fcra',
        heading: 'When the FCRA Applies',
        content: [
          { type: 'p', text: 'The Fair Credit Reporting Act (FCRA) governs background checks used for employment, tenancy, and credit. When a check is run for one of those purposes, specific rules apply: the subject must consent, and if an adverse decision is based on the report, the subject is entitled to notice and a copy. This is federal law, and New York layers on additional protections, including limits on the use of criminal history in hiring.' },
          { type: 'callout', variant: 'warning', heading: 'Purpose drives the rules', text: 'A pre-employment or tenant-screening check is FCRA-regulated and requires consent and disclosure. A personal pre-relationship check on someone you are dating is not an FCRA purpose, but it still cannot rely on unlawful access to private records. A reputable investigator scopes the check to the purpose and stays inside the rules.' },
        ],
      },
      {
        id: 'when-worth-it',
        heading: 'When Due Diligence Is Worth It',
        content: [
          { type: 'p', text: 'Due diligence pays for itself when the downside of being wrong is large: hiring an executive with financial authority, signing a lease with a high-value tenant, entering a business partnership, or committing to a relationship that involves shared finances or children. In each case the cost of a check is small against the cost of the risk it surfaces.' },
          { type: 'p', text: 'A standard background check is often completed in three to seven business days. Multi-jurisdiction or executive-level due diligence, including source interviews and regulatory records, takes longer and is scoped individually.' },
        ],
      },
    ],
    relatedServices: ['background-checks', 'corporate-investigations'],
    relatedGuides: ['corporate-fraud-investigations-manhattan', 'hire-a-pi-manhattan'],
    faqs: [
      { question: 'How is a PI background check different from an online service?', answer: 'Consumer services pull limited, often outdated public records. A licensed investigator has access to professional databases, can verify information through direct contact and source interviews, and produces a report that carries evidentiary weight. The difference is verification, which matters most in high-stakes decisions.' },
      { question: 'Do I need someone\'s consent to run a background check?', answer: 'For employment, tenant, or credit purposes the FCRA requires the subject\'s consent and disclosure if an adverse decision follows. A personal pre-relationship check is not an FCRA purpose and does not require consent, but it still cannot use unlawful access to private records.' },
      { question: 'How long does a background check take?', answer: 'A standard check is usually completed in three to seven business days. Multi-jurisdiction or executive due diligence involving source interviews and regulatory records takes longer and is scoped to the specific case.' },
    ],
  },

  // ─── H7. Corporate and fraud investigations ───────────────────────────────
  {
    slug: 'corporate-fraud-investigations-manhattan',
    title: 'Corporate and Fraud Investigations in Manhattan',
    metaTitle: 'Corporate and Fraud Investigations in Manhattan | PIM',
    metaDescription: 'How corporate and fraud investigations work for Manhattan businesses: employee theft, IP loss, partner due diligence, and insurance fraud, handled within a legal and privileged framework.',
    publishDate: '2026-02-11',
    lastUpdated: '2026-04-20',
    readingTimeMinutes: 12,
    heroEyebrow: 'Corporate and Fraud',
    heroDescription: 'When a business suspects theft, fraud, or misconduct, a licensed investigator gathers the facts in a way that protects the company legally. This guide explains the common case types and how investigators work alongside counsel.',
    intro: [
      'Corporate investigations cover the matters a business cannot afford to get wrong: employee theft of money or information, intellectual property loss, vendor and procurement fraud, insurance fraud, and due diligence on a partner or acquisition target. Manhattan\'s concentration of finance, media, and professional services makes it one of the busiest corporate-investigation markets in the country.',
      'This guide explains the common case types, how investigators coordinate with attorneys to keep work within a privileged framework, and what to expect on scope and cost. We connect businesses with NYS-licensed investigators experienced in corporate matters; we do not investigate ourselves.',
    ],
    sections: [
      {
        id: 'case-types',
        heading: 'Common Corporate Case Types',
        content: [
          { type: 'p', text: 'Most Manhattan corporate engagements fall into a few categories. The investigator scopes each to the evidence the business actually needs, not a fishing expedition.' },
          { type: 'ul', items: [
            'Employee theft and embezzlement, including diversion of funds and inventory.',
            'Intellectual property and trade-secret loss, often when a departing employee takes proprietary information.',
            'Vendor, procurement, and kickback fraud.',
            'Insurance fraud, including exaggerated or staged claims.',
            'Pre-deal due diligence on executives, partners, or acquisition targets.',
          ] },
        ],
      },
      {
        id: 'legal-framework',
        heading: 'Working Within a Legal Framework',
        content: [
          { type: 'p', text: 'Corporate investigations carry legal risk if handled poorly. An employer has legitimate grounds to investigate suspected misconduct, but the work must comply with New York labor law and cannot involve unlawful surveillance or access. The safest path is for the investigation to be directed by counsel.' },
          { type: 'p', text: 'When an attorney directs the engagement, the work can often be conducted under attorney-client privilege or as attorney work product, which protects the findings and keeps them aligned with any litigation strategy. Investigators in our network routinely work this way with New York firms and understand courtroom evidence standards.' },
          { type: 'callout', variant: 'note', heading: 'Investigating a current employee', text: 'Employers can investigate an employee where there is reasonable suspicion of misconduct, using lawful methods: surveillance of public activity, authorized document review, and interviews. The investigator advises on the legal boundaries before any work begins.' },
        ],
      },
      {
        id: 'cost',
        heading: 'Scope and Cost',
        content: [
          { type: 'p', text: 'Corporate work is the widest cost range in the field because scope varies so much. A focused single-issue inquiry can run a few thousand dollars; a complex fraud or IP investigation with forensic and multi-jurisdiction elements can reach the tens of thousands or more. Most M&A diligence and IP-theft matters land in a mid five-figure range.' },
          { type: 'p', text: 'A capable investigator scopes the engagement to a defined objective with a budget and a reporting cadence, so the business controls spend against the value of the evidence sought.' },
        ],
      },
    ],
    relatedServices: ['corporate-investigations', 'background-checks'],
    relatedGuides: ['background-checks-due-diligence-manhattan', 'asset-searches-manhattan'],
    faqs: [
      { question: 'Can a business investigate a current employee in New York?', answer: 'Yes, where there is reasonable suspicion of misconduct. The investigation must comply with New York labor law and use lawful methods such as public surveillance, authorized document review, and interviews. A licensed investigator advises on the legal boundaries before starting.' },
      { question: 'How do corporate investigators work with attorneys?', answer: 'Most corporate investigations are directed by counsel so the work can be conducted under attorney-client privilege or as work product, protecting the findings and aligning them with litigation strategy. Investigators in our network have extensive experience working with New York law firms.' },
      { question: 'What do corporate investigations cost?', answer: 'The range is wide. A focused inquiry can be a few thousand dollars; complex fraud, IP, or M&A diligence with forensic elements commonly runs into the tens of thousands. The engagement is scoped to a defined objective with a budget so the business controls spend.' },
    ],
  },

  // ─── H8. Asset searches and financial investigations ──────────────────────
  {
    slug: 'asset-searches-manhattan',
    title: 'Asset Searches and Financial Investigations in Manhattan',
    metaTitle: 'Asset Searches in Manhattan: How They Work | PIM',
    metaDescription: 'How asset searches work in New York: locating real estate, business interests, and financial holdings for divorce, judgment recovery, and business disputes, and what is legal versus not.',
    publishDate: '2026-02-13',
    lastUpdated: '2026-04-20',
    readingTimeMinutes: 11,
    heroEyebrow: 'Asset and Financial',
    heroDescription: 'An asset search establishes what someone actually owns. This guide explains how licensed investigators locate property and financial holdings, when an asset search is worth it, and the legal lines around financial information.',
    intro: [
      'An asset search is the disciplined process of identifying what a person or business owns and is owed. It is central to three situations: divorce, where one spouse may be hiding marital assets; judgment enforcement, where a creditor needs collectible property to recover on a win; and business disputes, where a party\'s real financial position determines strategy.',
      'This guide explains the methods a licensed investigator uses, what is legal under New York and federal law, and when an asset search pays for itself. We match you with NYS-licensed investigators who conduct these searches lawfully; we do not perform them ourselves.',
    ],
    sections: [
      {
        id: 'what-found',
        heading: 'What an Asset Search Can Locate',
        content: [
          { type: 'p', text: 'Through lawful database access, public records, and skip-tracing methods, a licensed investigator can locate a wide range of holdings. The reachable picture is broader than public records alone, though no legal search reaches everything.' },
          { type: 'ul', items: [
            'Real estate holdings and recorded mortgages and liens.',
            'Business ownership, corporate officer positions, and UCC filings.',
            'Vehicle, vessel, and aircraft registrations.',
            'Publicly recorded financial instruments and judgments.',
            'Professional licenses and regulatory filings.',
          ] },
          { type: 'p', text: 'For concealed or offshore assets, investigators work with forensic accountants and vetted international networks. They are transparent at the outset about what the search is likely to reveal given how well assets have been hidden.' },
        ],
      },
      {
        id: 'whats-legal',
        heading: 'What Is Legal, and What Is Not',
        content: [
          { type: 'p', text: 'The hard line in financial investigation is pretexting for financial records. Federal law, the Gramm-Leach-Bliley Act, makes it illegal to obtain a person\'s bank or financial account information through false pretenses. A legitimate investigator does not call a bank pretending to be the account holder, and you should walk away from anyone who offers to.' },
          { type: 'callout', variant: 'warning', heading: 'No pretexting', text: 'If an investigator promises to pull exact bank balances quickly, treat it as a red flag. Lawful asset work locates and documents ownership through legal channels. Account-level balances generally come through formal discovery, subpoena, or court process, not a phone call.' },
          { type: 'p', text: 'What is lawful is substantial: public records across jurisdictions, proprietary databases, and analysis that connects a subject to entities and property. In litigation, the investigator\'s findings frequently guide where an attorney directs formal discovery.' },
        ],
      },
      {
        id: 'when-worth-it',
        heading: 'When an Asset Search Is Worth It',
        content: [
          { type: 'p', text: 'Asset searches are most valuable in high-asset divorce where disclosure is incomplete, in judgment enforcement where you need to know whether a debtor has collectible property before spending on collection, and in due diligence before extending credit or entering a deal. Standard searches start in the low four figures; multi-jurisdiction or offshore work runs higher and is scoped individually.' },
        ],
      },
    ],
    relatedServices: ['asset-searches', 'corporate-investigations'],
    relatedGuides: ['family-custody-investigations-manhattan', 'corporate-fraud-investigations-manhattan'],
    faqs: [
      { question: 'Can a private investigator find hidden bank accounts?', answer: 'A licensed investigator can lawfully locate evidence of banking relationships and many financial holdings through legal database and records work. They cannot obtain account balances by pretexting, which federal law prohibits. Exact balances generally come through formal discovery or subpoena in litigation.' },
      { question: 'When is an asset search most useful?', answer: 'Most often in high-asset divorce to identify undisclosed marital assets, in judgment enforcement to find collectible property before spending on collection, and in due diligence before extending credit or entering a partnership.' },
      { question: 'How much does an asset search cost?', answer: 'Standard searches start in the low four figures. Multi-jurisdiction or offshore searches, and matters involving forensic accounting, run higher and are scoped individually. A good investigator tells you what the search is likely to reveal before you commit.' },
    ],
  },

  // ─── H9. Family, divorce and child custody investigations ─────────────────
  {
    slug: 'family-custody-investigations-manhattan',
    title: 'Family, Divorce and Child Custody Investigations in Manhattan',
    metaTitle: 'Child Custody and Divorce Investigations in Manhattan | PIM',
    metaDescription: 'How investigators support divorce and custody cases in New York: what evidence family courts accept, proving cohabitation for alimony, and documenting parenting concerns lawfully.',
    publishDate: '2026-02-16',
    lastUpdated: '2026-04-20',
    readingTimeMinutes: 11,
    heroEyebrow: 'Family and Custody',
    heroDescription: 'In divorce and custody matters, documented facts carry weight that accusations do not. This guide explains what a licensed investigator can lawfully gather, what New York family courts accept, and when an investigation helps.',
    intro: [
      'Family and custody investigations are about protecting children and securing a fair outcome with evidence rather than allegation. New York family courts decide custody on the best interests of the child, and a judge weighs documented facts far more heavily than one parent\'s word against the other\'s.',
      'This guide explains what licensed investigators can lawfully document, what evidence New York courts accept, and the related issue of proving cohabitation in alimony disputes. We match you with NYS-licensed investigators experienced in family matters; we do not investigate ourselves.',
    ],
    sections: [
      {
        id: 'what-evidence',
        heading: 'What Evidence Helps a Custody Case',
        content: [
          { type: 'p', text: 'Custody investigations are documentation-focused. Through lawful observation in public spaces, an investigator can document a parent\'s living environment, sobriety, supervision of the children, who the children are exposed to, and compliance with an existing custody order. The output is timestamped video and photography, a written log, and where relevant, witness interviews.' },
          { type: 'p', text: 'The standard is the best interests of the child. Evidence that bears on a child\'s safety and welfare, a documented parenting-plan violation, or exposure to risk is the kind a court will consider. A reputable investigator will tell you honestly if your concern does not yet rise to the level where an investigation produces useful evidence.' },
        ],
      },
      {
        id: 'admissibility',
        heading: 'What New York Family Courts Accept',
        content: [
          { type: 'p', text: 'Evidence gathered by a licensed investigator is regularly admitted in New York family court. Three conditions matter: it was gathered legally, it is documented with a clear chain of custody, and the investigator is prepared to testify to it. Material gathered through trespass, device access, or other unlawful means is both inadmissible and damaging to your credibility.' },
          { type: 'callout', variant: 'note', heading: 'Lawful methods only', text: 'A custody investigation that cuts legal corners can backfire badly. Courts take a dim view of a parent who broke the law to gather evidence. Using a licensed investigator who works within New York law protects both the evidence and your standing in the case.' },
        ],
      },
      {
        id: 'divorce-cohabitation',
        heading: 'Divorce and Cohabitation',
        content: [
          { type: 'p', text: 'Beyond custody, investigators support divorce in two common ways. The first is documenting cohabitation: under New York law and many separation agreements, a former spouse\'s maintenance (alimony) can be affected if they are cohabiting with a new partner, and that often must be proven with surveillance. The second is supporting asset work where one spouse suspects hidden marital property, which connects to a financial investigation.' },
          { type: 'p', text: 'Investigators in our network coordinate with matrimonial attorneys so the evidence is gathered and packaged for the specific issue before the court.' },
        ],
      },
    ],
    relatedServices: ['child-custody-investigations', 'infidelity-investigation'],
    relatedGuides: ['infidelity-investigations-manhattan', 'asset-searches-manhattan'],
    faqs: [
      { question: 'What evidence can a PI gather for a custody case in New York?', answer: 'Through lawful observation in public, an investigator can document a parent\'s living environment, sobriety, supervision of the children, who the children are exposed to, and compliance with a custody order, using timestamped video, photography, a written log, and witness interviews where relevant.' },
      { question: 'Will custody evidence hold up in New York family court?', answer: 'Yes, when it was gathered legally, documented with a clear chain of custody, and the investigator is prepared to testify. Evidence obtained through trespass or device access is inadmissible and can damage your credibility, so lawful methods are essential.' },
      { question: 'Can an investigator prove cohabitation for alimony?', answer: 'Yes. New York maintenance can be affected if a former spouse is cohabiting with a new partner, which often must be proven through surveillance. A licensed investigator documents the pattern and packages it for your matrimonial attorney.' },
    ],
  },

  // ─── H10. Locating people: skip tracing and missing persons ───────────────
  {
    slug: 'skip-tracing-locating-people-manhattan',
    title: 'Locating People: Skip Tracing and Missing Persons in Manhattan',
    metaTitle: 'Skip Tracing and Locating People in Manhattan | PIM',
    metaDescription: 'How investigators locate people in New York: skip tracing for service of process and judgment debtors, finding missing relatives, and what information speeds a search.',
    publishDate: '2026-02-18',
    lastUpdated: '2026-04-20',
    readingTimeMinutes: 10,
    heroEyebrow: 'Locating People',
    heroDescription: 'Whether you need to serve a defendant, collect on a judgment, or reconnect with a relative, locating someone who is hard to find is a specialized skill. This guide explains how skip tracing and missing-persons work in New York.',
    intro: [
      'Locating people covers two related needs. Skip tracing is finding someone who is hard to locate on purpose or whose address history is unusually opaque: a defendant avoiding service, a judgment debtor, a witness, or a beneficiary. Missing-persons work is finding someone you have lost touch with: an estranged relative, a birth parent, an old friend, or a former business contact.',
      'This guide explains how licensed investigators locate people, what information speeds a search, and the line between this work and an active-danger case that belongs with the police. We match you with NYS-licensed investigators; we do not run searches ourselves.',
    ],
    sections: [
      {
        id: 'skip-tracing',
        heading: 'How Skip Tracing Works',
        content: [
          { type: 'p', text: 'Skip tracing combines proprietary investigative databases, public records across multiple jurisdictions, social-network analysis, and targeted source interviews to assemble a current location. Consumer people-search sites usually fail on a true skip case because the subject has taken steps to avoid conventional tracking, and the data those sites resell is stale.' },
          { type: 'p', text: 'Manhattan attorneys use skip tracers most often for service of process on a defendant who moved without a forwarding address, judgment enforcement on a debtor who relocated, witness location for depositions or trial, and beneficiary location in estate matters. Under New York\'s CPLR, valid service depends on locating the right person at the right address, which is where this work directly supports a case.' },
        ],
      },
      {
        id: 'missing-persons',
        heading: 'Finding a Missing Person',
        content: [
          { type: 'p', text: 'Missing-persons investigations range from straightforward to difficult. A person who is simply out of touch but not hiding can often be located in days. Someone deliberately avoiding contact, using alternate identities, or who has left the state takes longer, sometimes weeks. An investigator gives realistic expectations after the initial review.' },
          { type: 'callout', variant: 'warning', heading: 'Active danger belongs with the police', text: 'If a person is in immediate danger, contact the NYPD first. Licensed investigators take cases where someone is not in active danger but standard methods have stalled: estranged family, birth parents or adoptees, old friends, debtors, witnesses, and cold trails.' },
        ],
      },
      {
        id: 'what-to-provide',
        heading: 'What Speeds a Search',
        content: [
          { type: 'p', text: 'The more identifying information you provide at the outset, the faster and cheaper the search. Helpful inputs include full legal name and any aliases or maiden names, date of birth, last known addresses and employers, phone numbers and email addresses, names of relatives and associates, photographs, and the context of why the person is hard to find.' },
          { type: 'p', text: 'Simple service-of-process or judgment-debtor locates are often billed as a flat fee and completed in days. Deliberate-avoidance or sealed-record cases are scoped individually.' },
        ],
      },
    ],
    relatedServices: ['skip-tracing', 'missing-persons'],
    relatedGuides: ['corporate-fraud-investigations-manhattan', 'pi-licensing-new-york'],
    faqs: [
      { question: 'How is skip tracing different from an address search?', answer: 'Skip tracing targets people who are deliberately hard to find or whose address history is opaque. It combines proprietary databases, multi-jurisdiction public records, social-network analysis, and source interviews. Consumer people-search sites usually fail on these cases because the subject has avoided conventional tracking.' },
      { question: 'When should I hire a PI for a missing person in Manhattan?', answer: 'When the person is not in immediate danger but standard methods have not worked: estranged relatives, birth parents or adoptees, old friends, debtors, or witnesses whose trail has gone cold. If someone is in active danger, contact the NYPD first.' },
      { question: 'What information helps locate someone fastest?', answer: 'At minimum a full legal name, date of birth, and last known address or employer. Aliases, phone numbers, email addresses, relatives\' names, photographs, and the context of the search all speed the work and lower the cost.' },
    ],
  },
];

export const guides: Guide[] = guideEntries.map(guide => {
  const featuredImage = guideFeaturedImages[guide.slug];

  return featuredImage
    ? { ...guide, featuredImage: featuredImage.src, featuredImageAlt: featuredImage.alt }
    : guide;
});

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
