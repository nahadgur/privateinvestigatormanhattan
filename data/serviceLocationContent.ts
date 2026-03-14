// data/serviceLocationContent.ts
export const serviceLocationContent: Record<string, {
  intro: (city: string) => string[]; steps: (city: string) => string[]; whyPoints: (city: string) => string[];
}> = {
  "infidelity-investigation": {
    intro: (city) => [
      `Infidelity investigations in ${city} are handled by licensed New York State investigators who understand the specific surveillance challenges of Manhattan's urban environment. Evidence is documented for potential use in divorce and family court proceedings.`,
      `Our matched investigators in ${city} conduct multi-agent surveillance operations, deliver HD-documented evidence, and treat every case with the discretion the subject matter demands.`
    ],
    steps: (city) => [
      `Confidential consultation — share what you know and what you need to establish`,
      `Matched with an investigator experienced in infidelity cases in the ${city} area`,
      `Surveillance plan developed based on the subject's known patterns and locations`,
      `Active multi-agent surveillance conducted over agreed time period`,
      `Real-time updates with final written report and all documentation`,
      `Evidence package delivered structured for attorney use if legal proceedings follow`
    ],
    whyPoints: (city) => [
      `NYS-licensed investigators with specific infidelity case experience in ${city}`,
      `Multi-agent Manhattan surveillance — not single-operative operations that get burned`,
      `Evidence structured for New York divorce and family court admissibility`,
      `Complete discretion from first contact through evidence delivery`
    ],
  },
  "surveillance": {
    intro: (city) => [
      `Surveillance operations in ${city} require experienced teams familiar with Manhattan's unique urban environment — the density, the transit system, and the 24-hour pace that makes this city unlike any other in the country.`,
      `Our matched investigators deploy properly resourced teams for ${city} cases, producing HD-documented evidence that meets New York court standards.`
    ],
    steps: (city) => [
      `Case intake — share all known information about the subject and investigation objective`,
      `Investigator matched based on case type and ${city} area experience`,
      `Surveillance plan developed with team size, positioning, and operational approach`,
      `Active surveillance with real-time documentation and client updates`,
      `Evidence package compiled with video, photographs, and written activity log`,
      `Final report delivered with chain of custody documentation`
    ],
    whyPoints: (city) => [
      `Multi-agent operations for ${city} — single-agent surveillance fails in Manhattan's density`,
      `Professional HD documentation at New York court evidence standards`,
      `Investigators who know ${city}'s geography, transit routes, and building layouts`,
      `Legally sound surveillance with full chain of custody documentation`
    ],
  },
  "background-checks": {
    intro: (city) => [
      `Background investigations in ${city} conducted by licensed private investigators go significantly beyond consumer services — accessing professional databases, verifying credentials through direct contact, and producing reports that carry legal weight.`,
      `Whether for employment screening, business due diligence, or personal matters, our matched investigators in ${city} deliver comprehensive background reports within agreed timeframes.`
    ],
    steps: (city) => [
      `Define the scope — subject information, investigation purpose, and jurisdictions to cover`,
      `Matched with an investigator experienced in the type of background check required`,
      `Comprehensive database investigation covering criminal, civil, financial, and professional records`,
      `Credential and employment verification through direct contact`,
      `Discrepancies identified and documented with source citations`,
      `Complete written report delivered within 3 to 7 business days`
    ],
    whyPoints: (city) => [
      `Professional database access that surfaces what consumer services miss`,
      `Direct verification of credentials and employment claims`,
      `Multi-jurisdiction coverage appropriate to the subject's history`,
      `Reports structured for employment compliance or legal proceedings as required`
    ],
  },
  "corporate-investigations": {
    intro: (city) => [
      `Corporate investigations in ${city} require investigators with genuine financial sector and New York legal experience — not general private investigators unfamiliar with the specific evidence standards and operational security requirements of business cases.`,
      `Our matched investigators bring domain expertise to ${city} corporate matters and routinely work alongside New York law firms and in-house legal teams.`
    ],
    steps: (city) => [
      `Confidential intake with client and outside counsel to define objectives and legal framework`,
      `Investigation design covering approved methods and operational security protocols`,
      `Background and database research phase covering relevant subjects and entities`,
      `Surveillance and field investigation where applicable to the case`,
      `Regular status updates to client or counsel throughout the investigation`,
      `Comprehensive litigation-ready report and investigator availability for testimony`
    ],
    whyPoints: (city) => [
      `Financial and legal sector experience specific to ${city}'s business environment`,
      `Attorney-coordinated investigations operating within appropriate privilege frameworks`,
      `Operational security — investigations conducted without alerting the subject`,
      `Reports structured for New York court, arbitration, or regulatory proceedings`
    ],
  },
  "asset-searches": {
    intro: (city) => [
      `Asset searches in ${city} uncover real estate holdings, financial accounts, business interests, and other assets that a party has failed to disclose — giving attorneys a roadmap for formal discovery and a basis for challenging financial affidavits.`,
      `Our matched investigators bring specific experience with New York's complex asset structures and deliver reports that your ${city} attorney can use immediately.`
    ],
    steps: (city) => [
      `Subject profile development — gather all known identifying and financial information`,
      `Comprehensive database search across real estate, corporate, financial, and court records`,
      `Trace corporate structures to beneficial ownership where relevant`,
      `Identify and document all located assets with source citations`,
      `Expand investigation into additional jurisdictions where subject history indicates`,
      `Deliver structured asset report organized by category for attorney use`
    ],
    whyPoints: (city) => [
      `Database access beyond what public records or basic searches reveal`,
      `New York real estate and LLC structure tracing experience`,
      `Reports formatted for immediate use by ${city} matrimonial and litigation attorneys`,
      `Honest assessment of what is and isn't locatable before work begins`
    ],
  },
  "child-custody-investigations": {
    intro: (city) => [
      `Child custody investigations in ${city} gather documented, court-admissible evidence about a parent's fitness, lifestyle, and compliance with existing custody orders — evidence that New York family courts weigh in best-interest determinations.`,
      `Our matched investigators understand New York family court standards and produce evidence packages that your ${city} attorney can use directly in custody proceedings.`
    ],
    steps: (city) => [
      `Case assessment — review existing custody arrangement, specific concerns, and court context`,
      `Honest evaluation of what investigation is likely to produce for your situation`,
      `Surveillance plan focused on times and locations most relevant to documented concerns`,
      `Active documentation over sufficient period to establish behavioral patterns`,
      `Compilation of evidence package with photographs, video, and written observations`,
      `Family court ready report delivered with investigator available to testify if required`
    ],
    whyPoints: (city) => [
      `Evidence gathered to New York family court admissibility standards`,
      `Objective third-party documentation that carries weight judges respect`,
      `Pattern-based surveillance — courts want consistent behavior, not isolated incidents`,
      `Honest case assessment — investigators advise when investigation won't produce useful evidence`
    ],
  }
};
