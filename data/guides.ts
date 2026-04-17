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
