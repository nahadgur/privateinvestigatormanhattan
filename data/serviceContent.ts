// data/serviceContent.ts
export const serviceContent: Record<string, {
  intro: string[]; benefits: { title: string; desc: string }[];
  candidateIntro: string; candidates: string[]; process: { title: string; desc: string }[];
}> = {
  "infidelity-investigation": {
  "intro": [
    "Private Investigator Manhattan helps you request an introduction for an infidelity investigation. We do not conduct the investigation. You decide whether to engage an independent provider after discussing your question, the proposed methods, and a written quote.",
    "A change in a partner’s behavior is not proof of an affair. Define what you need to establish and what decision the answer would support. If the purpose is a divorce or custody case, ask your attorney whether the proposed research is relevant before paying for surveillance.",
    "An investigator may propose lawful observation and records research, with a report of what they observed and any gaps. Staffing and timing depend on the assignment. No provider can guarantee evidence of infidelity, undetected surveillance, or a court outcome."
  ],
  "benefits": [
    {
      "title": "A defined question",
      "desc": "Discuss the uncertainty you need resolved and whether the proposed work can address it within your budget."
    },
    {
      "title": "A written scope",
      "desc": "Agree on methods, hours, staffing, permitted expenses, and approval before additional work."
    },
    {
      "title": "Factual reporting",
      "desc": "Ask for dated observations, available media, and clear separation between what was seen and what was inferred."
    },
    {
      "title": "Attorney coordination",
      "desc": "If litigation is involved, agree how the investigator and your attorney will communicate and handle records."
    }
  ],
  "candidateIntro": "An initial discussion may help you assess work such as:",
  "candidates": [
    "Documenting activity relevant to a specific relationship question through lawful observation.",
    "Clarifying a factual issue that your matrimonial attorney has identified.",
    "Assessing whether a records-based inquiry would be more useful than surveillance.",
    "Planning a limited first phase with a clear budget and review point."
  ],
  "process": [
    {
      "title": "Describe your question",
      "desc": "Provide the case type, Manhattan locations, relevant timing, and preferred contact method. Keep the initial inquiry brief."
    },
    {
      "title": "Discuss provider fit",
      "desc": "Before engaging anyone, ask about their New York license, relevant experience, staffing, insurance, and availability."
    },
    {
      "title": "Agree on the work",
      "desc": "Review the written scope, price, cancellation terms, reporting arrangements, and approval limit. An introduction does not start an investigation."
    },
    {
      "title": "Review the findings",
      "desc": "Compare the report with the agreed question. Discuss inconclusive results and any proposed extension before authorizing further work."
    }
  ]
},
  "surveillance": {
    intro: [
      "Professional surveillance is both the most fundamental and most technically demanding service in private investigation. In Manhattan, where subjects move through one of the world's densest urban environments, effective surveillance requires trained teams, proper equipment, and specific knowledge of how the city actually operates.",
      "Single-agent surveillance in Manhattan fails more often than it succeeds. Subjects exit buildings through different doors, jump into cabs, or disappear into subway stations. Multi-agent operations that can maintain a seamless observation bubble — rotating agents to prevent detection — are the standard our network works to.",
      "Every surveillance engagement produces documented evidence: HD video and photography with timestamps, written activity logs, GPS data where legally authorized, and a chain of custody report. Output is structured for potential use in legal proceedings whether or not litigation is anticipated at the time of investigation."
    ],
    benefits: [
      { "title": "Multi-Agent Manhattan Operations", "desc": "Two to four-agent teams for cases in Midtown, the Financial District, and other high-density areas. Proper coverage in Manhattan requires multiple agents — we match you with investigators who deploy teams rather than send a single operative." },
      { "title": "HD Documentation", "desc": "High-definition video and photography captured from distance and at multiple angles. Evidence quality matters in court — footage that is unclear, dark, or improperly timestamped can be challenged. Our investigators use professional-grade equipment calibrated for urban environments." },
      { "title": "Legally Sound Evidence", "desc": "All surveillance is conducted within New York privacy law. Investigators document their legal basis for each observation, maintain chain of custody logs, and produce evidence that meets New York court admissibility standards." },
      { "title": "Regular Client Updates", "desc": "You receive regular updates during active surveillance — not silence until a report arrives. Investigators communicate findings in real time within the bounds of operational security, keeping you informed without compromising the case." }
    ],
    candidateIntro: "Surveillance services are used across a wide range of Manhattan cases:",
    candidates: [
      "Infidelity and marital cases requiring documented evidence of a spouse or partner's activities",
      "Corporate cases requiring observation of an employee suspected of misconduct or theft of proprietary information",
      "Insurance fraud investigations where a claimant's physical activity needs to be documented",
      "Child custody cases requiring documentation of a parent's lifestyle, activities, and associates",
      "Civil litigation support where a party's activities or representations need to be independently verified"
    ],
    process: [
      { "title": "Case Intake and Planning", "desc": "Your investigator reviews all known information about the subject — address, workplace, vehicle, known routines — and develops a surveillance plan with realistic objectives and a transparent cost estimate." },
      { "title": "Team Deployment", "desc": "The appropriate number of agents is deployed based on the environment and case complexity. Manhattan operations are coordinated in advance with agent positioning, communication protocols, and contingency plans for common scenarios." },
      { "title": "Active Surveillance", "desc": "Surveillance is conducted with real-time documentation of all observations. Evidence is captured and logged continuously with timestamps, location data, and descriptive activity notes." },
      { "title": "Report Delivery", "desc": "A complete evidence package is delivered at case conclusion or at agreed intervals for ongoing cases. Written report, photographs, video footage, and GPS logs are all included and organized for attorney review." }
    ],
  },
  "background-checks": {
    intro: [
      "A professional background investigation conducted by a licensed New York private investigator produces fundamentally different results from consumer background check services. Investigators have access to professional databases not available to the public, can conduct source interviews, verify credentials directly, and produce reports that carry evidentiary weight in legal and business contexts.",
      "In Manhattan, where business stakes are high and the cost of a bad hiring decision or a compromised partnership can be enormous, proper due diligence is essential. The person you are about to hire, partner with, or bring into your life deserves genuine scrutiny — not a three-minute online search that misses sealed records, out-of-state litigation, and undisclosed financial problems.",
      "Background investigations range from standard pre-employment screening to comprehensive executive due diligence that examines a subject's full history across multiple jurisdictions. We match you with investigators who have specific experience with the type and depth of investigation your situation requires."
    ],
    benefits: [
      { "title": "Professional Database Access", "desc": "Licensed investigators access investigative-grade databases that surface criminal records, civil judgments, liens, bankruptcies, and professional license issues that consumer services miss. The difference in coverage is substantial." },
      { "title": "Verification Through Direct Contact", "desc": "Investigators verify employment history, professional credentials, and educational claims through direct contact with employers, licensing boards, and institutions — not just database records that may be outdated or incomplete." },
      { "title": "Multi-Jurisdiction Coverage", "desc": "New York is a state where people move from all over the country. Records in one jurisdiction don't always appear in another. Investigators conduct searches across relevant states based on the subject's known history." },
      { "title": "Legally Structured Reports", "desc": "Reports produced by licensed investigators are structured to meet FCRA requirements for employment screening and are admissible as evidence in civil proceedings where required. Consumer services cannot provide this." }
    ],
    candidateIntro: "Background investigations are essential in these Manhattan contexts:",
    candidates: [
      "Employers conducting pre-employment screening on senior hires, financial roles, or positions of trust",
      "Business owners conducting due diligence on potential partners before signing contracts or investment agreements",
      "Individuals considering high-value personal relationships — romantic partners, household staff, or financial advisors",
      "Landlords screening high-value tenants for significant Manhattan rental commitments",
      "Attorneys conducting adverse party background investigations in support of civil litigation preparation"
    ],
    process: [
      { "title": "Scope Definition", "desc": "The investigator defines the scope based on your purpose, the subject's known history, and the jurisdictions to be covered. You receive a clear deliverable description and timeline before work begins." },
      { "title": "Database and Records Research", "desc": "Comprehensive records search across criminal, civil, financial, and professional databases covering all relevant jurisdictions. Public records are supplemented with investigative database access." },
      { "title": "Verification and Source Contact", "desc": "Key findings are verified through direct contact with employers, institutions, and licensing authorities. Discrepancies between claimed and documented history are identified and noted." },
      { "title": "Report Delivery", "desc": "Comprehensive written report delivered within the agreed timeframe — typically 3 to 7 business days for standard cases. Reports include source citations and are structured for attorney review or employment compliance purposes as required." }
    ],
  },
  "corporate-investigations": {
    intro: [
      "Corporate investigations in Manhattan operate at the intersection of private investigation, financial forensics, and New York law — a combination that requires investigators with genuine experience in the city's business environment. Whether the issue is employee misconduct, financial fraud, competitive intelligence, or executive due diligence, the investigative approach must be calibrated for the legal and evidentiary standards that Manhattan courts and arbitration panels apply.",
      "Manhattan's concentration of financial services, law, media, and technology creates a specific corporate investigation landscape. Financial fraud cases involve instruments and structures unique to Wall Street. Technology IP theft cases require understanding of how proprietary information is stored and transferred in modern development environments. Our matched investigators bring domain expertise to the cases they accept.",
      "Corporate clients — whether internal HR and legal teams or outside counsel — require investigators who communicate professionally, produce litigation-ready documentation, and understand the importance of confidentiality in sensitive business matters. Our network investigators have extensive experience working alongside New York law firms and in-house legal departments."
    ],
    benefits: [
      { "title": "Financial and Legal Sector Expertise", "desc": "Investigators with backgrounds in financial crimes, securities, and corporate law enforcement. Understanding the financial products, corporate structures, and regulatory frameworks specific to Manhattan's industries produces better investigations in these environments." },
      { "title": "Attorney-Coordinated Investigations", "desc": "Corporate investigations frequently operate within attorney work-product privilege. Our network investigators are experienced in working under legal counsel direction, structuring evidence for litigation, and producing reports that hold up to opposing counsel scrutiny." },
      { "title": "Comprehensive Evidence Documentation", "desc": "Corporate cases produce substantial documentary evidence. Investigators organize and present findings in structured reports that enable attorneys and executives to understand the full scope of misconduct and act decisively." },
      { "title": "Operational Security", "desc": "Internal investigations must be conducted without tipping off the subject. Investigators are experienced in covert corporate work — gathering evidence without the subject, or anyone who might warn the subject, becoming aware that an investigation is underway." }
    ],
    candidateIntro: "Corporate investigation services are most commonly needed in these Manhattan situations:",
    candidates: [
      "Companies suspecting employee theft of trade secrets, client lists, or proprietary financial models",
      "Financial institutions investigating potential fraud, embezzlement, or unauthorized trading activity",
      "Law firms requiring pre-litigation investigation support for corporate disputes and commercial litigation",
      "Private equity and investment firms conducting due diligence on acquisition targets or key management personnel",
      "Companies facing insurance fraud by employees or third parties requiring documented evidence for claim denial or prosecution"
    ],
    process: [
      { "title": "Confidential Case Intake", "desc": "Initial discussion with the client or outside counsel to understand the matter, define investigative objectives, and establish the legal framework — particularly whether the investigation is to operate under attorney-client privilege." },
      { "title": "Investigation Design", "desc": "A case plan is developed covering the specific investigative methods — surveillance, background research, document analysis, database investigation — appropriate to the matter and legally available to private investigators in New York." },
      { "title": "Field and Research Investigation", "desc": "Active investigation conducted per the case plan with regular status updates to the client or counsel. Significant findings are communicated promptly. All evidence is documented and preserved with chain of custody." },
      { "title": "Litigation-Ready Report", "desc": "A comprehensive report structured for use in employment proceedings, civil litigation, arbitration, or regulatory submissions. Investigators are available to provide testimony or affidavits in support of legal proceedings where required." }
    ],
  },
  "asset-searches": {
  "intro": [
    "An asset-search investigator can research lawful records for property and business leads. Private Investigator Manhattan provides introductions; independent investigators conduct the work you agree to commission.",
    "Define whether the question concerns divorce disclosure, an unpaid judgment, or a business decision. A record match needs verification. Identifying a property interest does not prove concealment, current equity, or availability for collection.",
    "Ask the provider to explain the sources, jurisdictions, dates, and limits of the proposed search. A PI license does not authorize unrestricted access to bank accounts or other protected records."
  ],
  "benefits": [
    {
      "title": "Focused records research",
      "desc": "Agree on the subject, identifiers, jurisdictions, and factual question before work starts."
    },
    {
      "title": "Source-based reporting",
      "desc": "Request references and dates for findings, with uncertainty and coverage limits stated."
    },
    {
      "title": "Useful legal follow-up",
      "desc": "Your attorney can evaluate leads for disclosure or enforcement without treating a search report as an ownership ruling."
    },
    {
      "title": "Controlled scope",
      "desc": "Set an initial budget and require approval before research expands into new entities or jurisdictions."
    }
  ],
  "candidateIntro": "Asset research can support questions such as:",
  "candidates": [
    "A possible discrepancy in divorce financial disclosure.",
    "Whether an unpaid judgment merits further collection research.",
    "Property or entity connections that need independent verification.",
    "A business matter requiring a defined public-records inquiry."
  ],
  "process": [
    {
      "title": "Define the decision",
      "desc": "Explain what you need to establish and any legal deadlines. Discuss the scope with counsel if proceedings are involved."
    },
    {
      "title": "Agree on sources and cost",
      "desc": "Review subject identifiers, jurisdictions, lawful access, estimated fees, and the first-phase spending limit."
    },
    {
      "title": "Review record matches",
      "desc": "The investigator checks sources and distinguishes corroborated findings from leads requiring further work."
    },
    {
      "title": "Choose the next step",
      "desc": "Use the report with your adviser to decide whether further research, disclosure, or enforcement is appropriate. Recovery is not guaranteed."
    }
  ]
},
  "child-custody-investigations": {
    intro: [
      "Child custody investigations are among the most consequential cases a private investigator handles — the evidence gathered can directly affect a child's living situation and a parent's access to their children. It is also one of the most legally sensitive areas, where evidence must meet specific New York family court standards to be useful.",
      "Judges in New York family court assess the best interests of the child based on documented facts about each parent's fitness, lifestyle, and parenting behavior. A PI report that documents unsafe conditions, substance abuse, neglect, parenting plan violations, or exposure to unsuitable individuals provides the court with objective evidence that moves beyond the competing claims of two parties in dispute.",
      "Investigators in our network who handle custody cases understand New York family court specifically. They know what evidence the court finds persuasive, how reports must be structured to withstand challenge from opposing counsel, and when an investigation is and isn't likely to produce genuinely useful evidence. They'll tell you honestly which applies to your situation."
    ],
    benefits: [
      { "title": "New York Family Court Standards", "desc": "Evidence is gathered and documented specifically to meet New York family court admissibility requirements. Reports are structured for direct use by your family law attorney and for potential investigator testimony at hearings." },
      { "title": "Objective Third-Party Documentation", "desc": "Family court judges deal with competing parental narratives daily. An independent licensed investigator's documented observations carry weight that a parent's own testimony cannot — precisely because they are objective and professionally documented." },
      { "title": "Specific Pattern Documentation", "desc": "Custody cases benefit most from documented patterns rather than single incidents. Investigators conduct surveillance over sufficient time to establish whether concerning behaviors are consistent and ongoing — which is what family courts require." },
      { "title": "Honest Case Assessment", "desc": "Investigators will tell you upfront if your specific concerns are unlikely to produce useful evidence through investigation. Not every custody situation warrants investigation, and a good investigator will tell you when yours doesn't rather than billing you for unproductive work." }
    ],
    candidateIntro: "Child custody investigations are appropriate in these situations:",
    candidates: [
      "Parents with genuine safety concerns about a child's welfare in the other parent's care that they cannot document independently",
      "Individuals seeking modification of an existing custody order who need documented evidence of changed circumstances",
      "Parents who suspect the other party is violating a current custody or visitation order in specific ways",
      "Individuals whose concerns about substance abuse, neglect, or dangerous associates need objective documentation",
      "Attorneys representing parents in contested custody proceedings who require independent investigative support"
    ],
    process: [
      { "title": "Case Assessment", "desc": "The investigator reviews the specific concerns, the existing custody arrangement, and what evidence would be most useful in your legal proceeding. An honest assessment is provided of what investigation is likely to produce." },
      { "title": "Surveillance Planning", "desc": "A surveillance plan is developed focused on the times and locations most likely to document the concerning behaviors. Planning considers the legal framework — all surveillance is conducted in public or semi-public spaces consistent with New York law." },
      { "title": "Documentation Phase", "desc": "Active surveillance and documentation over a sufficient period to establish behavioral patterns. Investigators document who the children are with, activities observed, conditions visible, and any specific incidents of concern." },
      { "title": "Family Court Report", "desc": "A comprehensive report is delivered structured for New York family court use. Your attorney receives documentation ready for use in proceedings, and the investigator is available to provide testimony at hearings if required." }
    ],
  }
};
