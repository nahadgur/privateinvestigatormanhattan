// data/locationCasePatterns.ts
//
// Post-March-2026 uniqueness layer for service×location pages.
//
// Each entry provides three genuinely unique content blocks that are factually
// grounded in the actual Manhattan geography, case-type patterns, and court/venue
// infrastructure of that specific neighborhood. No fabricated statistics, no
// invented building names, no made-up specifics.
//
// Shape: LOCATION_CASE_PATTERNS[serviceSlug][citySlug] = { casePattern, logistics, venue }
//
// If an entry is missing, the page falls back to a neutral generic block so
// nothing 404s. Entries are added region by region across the Sprint 2 sub-sprints.
//
// Region rollout:
//   - Sprint 2a (2026-04-17): Midtown Manhattan — DONE (this file)
//   - Sprint 2b: Downtown Manhattan
//   - Sprint 2c: Lower East Side + East Village
//   - Sprint 2d: Upper East Side
//   - Sprint 2e: Upper West Side
//   - Sprint 2f: Harlem and North Manhattan
//   - Sprint 2g: West Village and Chelsea

export interface CasePattern {
  casePattern: string;  // Neighborhood-specific case example for this service
  logistics: string;    // Local-logistical fact about delivering this service here
  venue: string;        // Court/authority venue reference where relevant
}

export const LOCATION_CASE_PATTERNS: Record<string, Record<string, CasePattern>> = {

  // ============================================================
  // INFIDELITY INVESTIGATION — Midtown Manhattan (Sprint 2a)
  // ============================================================
  "infidelity-investigation": {
    "midtown-east": {
      casePattern: "Midtown East infidelity investigations typically center on Manhattan professionals whose weekday routines run between Grand Central, the office corridors east of Lexington, and the restaurants and hotels clustered between 42nd and 59th Streets. Common patterns involve documenting conduct during the workday-to-evening transition windows, hotel check-ins around Park and Madison, and routine variations on commuter schedules.",
      logistics: "Midtown East surveillance contends with heavy weekday foot traffic, constant construction staging, and a dense mix of office-tower entrances, hotel lobbies, and transit flows through Grand Central. Investigators rotate agents frequently to stay unseen in crowds and work vantage points at street cafes, lobby-adjacent retail, and the elevated walkways connecting major complexes.",
      venue: "Matrimonial matters proceed through New York County Supreme Court at 60 Centre Street, with related custody elements handled at Family Court, 60 Lafayette Street."
    },
    "midtown-west": {
      casePattern: "Midtown West infidelity investigations concentrate around the Theater District, Times Square-adjacent hotels, and the corporate corridors running west of Sixth Avenue. Common patterns involve documenting conduct during evening entertainment routines, the hotel cluster between 42nd and 57th Streets, and restaurant and bar venues used by finance, media, and hospitality industry professionals.",
      logistics: "Midtown West surveillance works through constant tourist density, high venue turnover, and fast-moving sidewalk traffic between the Theater District and Port Authority. Investigators favor two-agent rotations to blend with pedestrian flow and use the abundance of hotel lobbies, retail, and sidewalk cafe seating as natural observation posts.",
      venue: "New York County Supreme Court matrimonial filings are handled at 60 Centre Street; custody components route to Family Court at 60 Lafayette Street."
    },
    "hell-s-kitchen": {
      casePattern: "Hell's Kitchen infidelity investigations often involve subjects whose routines center on the restaurant corridor along Ninth and Tenth Avenues, the post-work bar scene between 42nd and 57th, and the mixed residential/commercial blocks west of Eighth Avenue. Common patterns involve documenting conduct during evening social routines and the neighborhood's dense hospitality venues.",
      logistics: "Hell's Kitchen surveillance works narrow east-west streets where subjects are exposed for short windows before entering venues. Investigators use the neighborhood's dense restaurant and bar footprint for natural cover and coordinate on foot rather than by vehicle because parking and one-way routing make vehicle tailing unreliable.",
      venue: "Divorce filings proceed through New York County Supreme Court at 60 Centre Street; custody matters are heard at Family Court, 60 Lafayette Street."
    },
    "murray-hill": {
      casePattern: "Murray Hill infidelity investigations commonly involve subjects in the young-professional and early-career-finance demographic that anchors the neighborhood's residential blocks between 34th and 42nd Streets. Patterns often involve documenting conduct tied to the bar corridor along Third Avenue and the post-work socializing that defines the neighborhood after business hours.",
      logistics: "Murray Hill surveillance benefits from predictable foot patterns — subjects tend to cluster in the same bars and restaurants along Third Avenue, making venue-watching more effective than door-to-door tailing. Investigators work two-agent rotations and use the neighborhood's pedestrian density to avoid standing out.",
      venue: "New York County Supreme Court at 60 Centre Street handles matrimonial proceedings; custody elements are heard at Family Court, 60 Lafayette Street."
    },
    "koreatown": {
      casePattern: "Koreatown infidelity investigations typically involve subjects whose routines run through the restaurant, karaoke, and hotel venues concentrated on 32nd Street and adjacent blocks between Fifth and Sixth Avenues. Patterns often involve late-evening and overnight documentation given the area's 24-hour business profile and the hotel cluster that supports it.",
      logistics: "Koreatown surveillance works an unusually dense and vertically stacked venue profile — many relevant destinations are above ground floor in multi-story buildings, requiring investigators to track subjects through building entries rather than observe them at street level. Late-night operations are routine given the area's hours.",
      venue: "Matrimonial cases are filed in New York County Supreme Court at 60 Centre Street; custody matters go to Family Court at 60 Lafayette Street."
    },
    "turtle-bay": {
      casePattern: "Turtle Bay infidelity investigations often involve subjects in the United Nations-adjacent professional community and the residential population of the quieter blocks between 42nd and 53rd Streets east of Second Avenue. Patterns commonly involve documenting conduct around residential buildings, the restaurants of Second and Third Avenues, and the hotels serving the UN and Midtown East corridor.",
      logistics: "Turtle Bay surveillance navigates quieter streets where a stationary investigator is more visible than in higher-traffic areas. Vantage points are limited and require careful positioning at cafes, residential building entrances, and the retail on Second Avenue. Foot surveillance dominates because vehicle traffic is thin.",
      venue: "Divorce proceedings run through New York County Supreme Court at 60 Centre Street; Family Court at 60 Lafayette Street handles related custody matters."
    },
    "sutton-place": {
      casePattern: "Sutton Place infidelity investigations typically involve high-net-worth subjects in the doorman-building residential stock running east of First Avenue in the 50s. Patterns commonly involve documenting conduct tied to private clubs, East Side restaurants, and the discreet hotel options used by affluent Midtown East residents. Co-op and condo dynamics often shape access constraints.",
      logistics: "Sutton Place surveillance must work around doorman and building-staff scrutiny that can identify unusual foot traffic quickly. Investigators rely on vantage points from retail, residential stoops on perimeter blocks, and rotating positions rather than stationary observation. Low street traffic makes blending harder than in higher-density Midtown areas.",
      venue: "Matrimonial filings, often involving substantial marital estates, are handled at New York County Supreme Court, 60 Centre Street, with custody matters routed to Family Court at 60 Lafayette Street."
    },
    "tudor-city": {
      casePattern: "Tudor City infidelity investigations typically involve residents of the enclave's distinctive residential complex between 40th and 43rd Streets, or Midtown East professionals using the area as a quieter transition point. Patterns often involve documenting conduct in adjacent Midtown East and UN-area venues rather than within Tudor City itself, given the enclave's small footprint.",
      logistics: "Tudor City surveillance is difficult inside the complex itself — the enclave is small, quiet, and pedestrian-visible at all times, making stationary observation obvious. Investigators typically work subjects on the approaches from First and Second Avenue and follow into Midtown East or UN-area venues where natural crowd density provides cover.",
      venue: "New York County Supreme Court at 60 Centre Street handles matrimonial proceedings; Family Court at 60 Lafayette Street hears related custody matters."
    },
    "kips-bay": {
      casePattern: "Kips Bay infidelity investigations commonly involve residents of the high-rise residential stock between 23rd and 34th Streets east of Third Avenue, and the medical-professional community tied to NYU Langone and VA Medical Center. Patterns often involve documenting conduct around medical-campus schedules and the restaurant and bar venues running along Second and Third Avenues.",
      logistics: "Kips Bay surveillance benefits from wide avenues with reasonable sightlines and a residential foot-traffic pattern that makes identifying subjects at building entries more reliable than in denser Midtown cores. Medical-campus adjacency means shift schedules create predictable exit windows that structure observation timing.",
      venue: "Matrimonial matters are filed at New York County Supreme Court, 60 Centre Street; Family Court at 60 Lafayette Street handles custody components."
    },
    "gramercy-park": {
      casePattern: "Gramercy Park infidelity investigations often involve subjects from the affluent residential stock surrounding the private park between 20th and 21st Streets, extending through the surrounding co-ops and pre-war buildings. Patterns commonly involve documenting conduct around the private clubs, restaurants, and hotels that anchor the neighborhood's social life.",
      logistics: "Gramercy Park surveillance works an unusually small and observed neighborhood core — the park itself is private and the immediate surrounding blocks are quiet enough that a stationary investigator is visible. Work typically covers approaches from Third Avenue and the Park Avenue South corridor where higher foot traffic provides cover.",
      venue: "New York County Supreme Court matrimonial filings are handled at 60 Centre Street, with custody matters routed to Family Court at 60 Lafayette Street."
    },
    "flatiron-district": {
      casePattern: "Flatiron District infidelity investigations commonly involve subjects in the technology, media, and advertising professional community anchored around the Flatiron Building and surrounding loft office stock. Patterns often involve documenting conduct around the restaurant and bar cluster along Fifth Avenue and Broadway between 14th and 23rd Streets, including hotel venues used for off-hours meetings.",
      logistics: "Flatiron District surveillance benefits from diagonal street geometry that creates unusual sightlines — investigators can watch Fifth Avenue and Broadway simultaneously from the triangular intersections. High pedestrian density throughout business hours supports foot surveillance; after-hours work contends with more exposed streets.",
      venue: "Divorce proceedings run through New York County Supreme Court at 60 Centre Street, with custody matters handled at Family Court, 60 Lafayette Street."
    },
    "nomad": {
      casePattern: "NoMad infidelity investigations often involve subjects tied to the hotel cluster north of Madison Square Park, the restaurant corridor running up Broadway into the 30s, and the technology and media professional community that has concentrated in the area. Patterns commonly involve documenting conduct around hotel check-ins, restaurant routines, and Flatiron-adjacent venues.",
      logistics: "NoMad surveillance works a district with several flagship hotels whose lobbies, bars, and rooftops serve as primary venues for subject activity. Investigators position across multiple hotels simultaneously when patterns are unclear and coordinate on foot given the short distances between the area's main observation points.",
      venue: "Matrimonial cases are filed at New York County Supreme Court, 60 Centre Street; Family Court at 60 Lafayette Street hears custody components."
    },
  },

  // ============================================================
  // SURVEILLANCE — Midtown Manhattan (Sprint 2a)
  // ============================================================
  "surveillance": {
    "midtown-east": {
      casePattern: "Midtown East surveillance assignments commonly cover corporate executives, financial-services professionals, and residential subjects across the office corridors between Park and Third Avenues and the residential stock east of Third. Case types include employee-conduct documentation, workers' compensation fraud verification, and domestic surveillance tied to divorce and custody proceedings.",
      logistics: "Midtown East surveillance operates in one of the highest-density pedestrian environments in the country. Investigators use three-agent rotations during peak hours to maintain coverage without repeat exposure, and coordinate vantage points around Grand Central, the UN approach, and the major office-tower entrances where subjects become identifiable.",
      venue: "Evidence gathered for family-law purposes routes to New York County Supreme Court at 60 Centre Street and Family Court at 60 Lafayette Street; corporate matters often feed into civil proceedings at the same Supreme Court venue."
    },
    "midtown-west": {
      casePattern: "Midtown West surveillance handles a mix of hospitality-industry subjects, media and entertainment professionals, and residential matters running through the Theater District and the residential blocks west of Eighth Avenue. Assignments often involve employee-theft documentation for restaurant and hotel clients, entertainment-industry due diligence, and domestic cases.",
      logistics: "Midtown West surveillance works through constant tourist density, tight east-west street geometry, and venue-heavy environments where subjects disappear quickly into theaters, restaurants, and hotels. Investigators favor multi-agent coverage with one agent positioned at likely destinations rather than trailing through crowds.",
      venue: "Civil and matrimonial matters proceed through New York County Supreme Court at 60 Centre Street; custody elements are heard at Family Court, 60 Lafayette Street."
    },
    "hell-s-kitchen": {
      casePattern: "Hell's Kitchen surveillance often covers the restaurant and nightlife workforce that anchors the neighborhood's hospitality economy, along with residential matters across the mixed-use blocks between Eighth and Eleventh Avenues. Cases commonly involve employee misconduct for restaurant-group clients, insurance fraud on injury claims, and domestic investigations.",
      logistics: "Hell's Kitchen surveillance adapts to narrow side streets, constant restaurant and bar traffic in the evening, and residential blocks where subjects are identifiable at specific doorway entry points. Investigators typically work on foot with overlapping coverage and rely on venue-watching rather than pursuit through the district's tight geometry.",
      venue: "Civil and family-law proceedings are handled at New York County Supreme Court, 60 Centre Street, and Family Court, 60 Lafayette Street, for any Manhattan-venue matter arising from the case."
    },
    "murray-hill": {
      casePattern: "Murray Hill surveillance commonly involves young-professional subjects in the residential blocks between 34th and 42nd Streets and the bar-corridor social patterns that define the neighborhood after 6 p.m. Assignment types include domestic cases, background-verification surveillance for employment or co-op purposes, and support for civil litigation.",
      logistics: "Murray Hill surveillance benefits from highly predictable evening patterns — the neighborhood's after-work social life concentrates in a small number of venues on Third Avenue. Investigators leverage this by positioning at likely destinations rather than attempting to follow through pedestrian-dense streets.",
      venue: "Evidence structured for matrimonial, custody, or civil proceedings routes to New York County Supreme Court at 60 Centre Street and Family Court, 60 Lafayette Street."
    },
    "koreatown": {
      casePattern: "Koreatown surveillance often involves subjects tied to the restaurant, karaoke, and hotel venues concentrated on 32nd Street. Case types include domestic investigations with late-night patterns, business-partner due diligence for the area's small-business community, and workforce surveillance for restaurant-group clients concerned about employee conduct.",
      logistics: "Koreatown surveillance handles a vertical venue profile — subjects enter multi-story buildings and investigators cannot always observe the venue itself, only the building entry. Camera coverage of entry points combined with agent positioning at likely exit routes is more effective than attempting interior observation.",
      venue: "Matters proceeding to Manhattan civil or family courts are filed at New York County Supreme Court, 60 Centre Street, or Family Court, 60 Lafayette Street."
    },
    "turtle-bay": {
      casePattern: "Turtle Bay surveillance often covers the diplomatic and UN-adjacent professional community along with residential subjects in the quieter blocks east of Second Avenue. Case types include due-diligence surveillance, domestic investigations, and verification work for civil proceedings. UN-community cases may involve subjects with unusual protective considerations.",
      logistics: "Turtle Bay surveillance works thin foot traffic that makes stationary observation conspicuous. Investigators typically operate with shorter shifts and more frequent rotation than in high-density Midtown, use cafes and retail as brief vantage points, and coordinate through the nearby higher-traffic corridors of Second and Third Avenues.",
      venue: "Manhattan civil and family matters are heard at New York County Supreme Court, 60 Centre Street, and Family Court at 60 Lafayette Street."
    },
    "sutton-place": {
      casePattern: "Sutton Place surveillance typically covers affluent residential subjects in the doorman-building stock east of First Avenue, including executives, high-net-worth individuals, and estate-related matters. Case types include domestic surveillance for high-asset divorce, matrimonial investigations with substantial financial implications, and civil litigation support.",
      logistics: "Sutton Place surveillance works a low-traffic residential area where doorman scrutiny of unfamiliar foot traffic is immediate. Investigators rely on approach-route coverage rather than stationary observation near buildings and use the busier blocks on First and Second Avenues as vantage-point anchors. Vehicle surveillance is usually ineffective.",
      venue: "High-asset matrimonial cases are filed at New York County Supreme Court, 60 Centre Street, with custody matters handled at Family Court, 60 Lafayette Street."
    },
    "tudor-city": {
      casePattern: "Tudor City surveillance primarily involves residents of the enclave's residential complex or Midtown East professionals transiting through the area. Case types include domestic investigations, background verification, and civil-proceeding support. The small enclave footprint means most observation work happens on the approaches rather than within Tudor City itself.",
      logistics: "Tudor City surveillance is practically impossible inside the enclave — it is small, quiet, and pedestrian-exposed. Investigators work the approach routes from First Avenue and 42nd Street, identify subjects at transit points, and follow into the higher-density Midtown East corridor where natural foot traffic provides cover.",
      venue: "Matters proceeding to Manhattan court routing are handled at New York County Supreme Court, 60 Centre Street, or Family Court at 60 Lafayette Street."
    },
    "kips-bay": {
      casePattern: "Kips Bay surveillance commonly covers the medical-professional community tied to NYU Langone and the surrounding residential high-rises. Case types include domestic investigations with shift-schedule patterns, insurance-fraud work, employment-verification surveillance, and support for civil and family-law proceedings.",
      logistics: "Kips Bay surveillance benefits from wide avenues with clear sightlines and a medical-campus schedule that creates predictable exit windows — shift changes at NYU Langone structure much of the neighborhood's movement. Investigators use these patterns to time observation rather than attempting all-day coverage.",
      venue: "Civil and family-law evidence is prepared for New York County Supreme Court, 60 Centre Street, and Family Court at 60 Lafayette Street."
    },
    "gramercy-park": {
      casePattern: "Gramercy Park surveillance typically covers the affluent residential community around the private park and the professional class using the area's clubs and hotels. Case types include domestic investigations, matrimonial surveillance with significant marital assets, and civil-litigation support where evidence of conduct or association is material.",
      logistics: "Gramercy Park surveillance works a small and quiet residential core where investigators are easily identified if positioned too close. Coverage runs from the outer blocks — Third Avenue, Park Avenue South, Lexington — and follows into the park area only when patterns justify the exposure. Vehicle surveillance is generally ineffective.",
      venue: "Matrimonial and civil cases proceed through New York County Supreme Court, 60 Centre Street; custody components route to Family Court at 60 Lafayette Street."
    },
    "flatiron-district": {
      casePattern: "Flatiron District surveillance commonly covers the technology, advertising, and media professional community working in the loft-office stock around Madison Square Park. Case types include executive due diligence, employee-misconduct documentation for the district's creative and tech employers, and domestic investigations tied to the neighborhood's residential population.",
      logistics: "Flatiron District surveillance exploits the district's unusual diagonal street geometry — the Fifth Avenue/Broadway intersection at the Flatiron Building creates sightlines across three streets at once, and Madison Square Park provides natural stationary cover. High daytime density supports foot surveillance; evening coverage is thinner.",
      venue: "Corporate and matrimonial matters are filed at New York County Supreme Court, 60 Centre Street; Family Court at 60 Lafayette Street handles custody."
    },
    "nomad": {
      casePattern: "NoMad surveillance commonly covers the technology and media professional community, hotel-based business subjects using the area's flagship hotels, and residential cases tied to the high-end residential stock between Madison and Fifth Avenues. Case types include domestic investigations, executive due diligence, and hospitality-industry misconduct documentation.",
      logistics: "NoMad surveillance centers on the area's major hotel lobbies, bars, and rooftop venues where subject activity concentrates. Investigators work multi-hotel coverage when patterns are unclear, using short walks between venues and the natural density of hotel guest traffic as cover for foot rotation.",
      venue: "Evidence for matrimonial, custody, or civil proceedings is prepared for New York County Supreme Court at 60 Centre Street and Family Court, 60 Lafayette Street."
    },
  },

  // ============================================================
  // BACKGROUND CHECKS — Midtown Manhattan (Sprint 2a)
  // ============================================================
  "background-checks": {
    "midtown-east": {
      casePattern: "Midtown East background investigation work is dominated by corporate and financial-services use cases — pre-employment screening for the office corridors between Park and Third Avenues, pre-deal executive due diligence for M&A and financing transactions, and business-partner vetting tied to the area's high concentration of law firms, banks, and private equity offices.",
      logistics: "Midtown East background investigations typically involve subjects with significant professional and public footprints requiring multi-database verification, SEC and FINRA record review for finance-industry candidates, and jurisdiction checks beyond New York. Many engagements are managed under attorney-client privilege through law firm referrals.",
      venue: "Civil findings arising from background investigations are filed at New York County Supreme Court, 60 Centre Street, where the bulk of Manhattan commercial and employment-dispute litigation proceeds."
    },
    "midtown-west": {
      casePattern: "Midtown West background investigations commonly serve media, entertainment, and hospitality clients — talent vetting for production companies around the Theater District, executive screening for media-industry hires, and employee background review for the area's hotels and restaurant groups. Tenant screening also occurs for the neighborhood's high-rise residential stock.",
      logistics: "Midtown West background work often involves subjects with non-standard employment histories — freelance and project-based work in media and hospitality — requiring source verification through direct outreach rather than database confirmation alone. Union-affiliated checks are common for production-industry clients.",
      venue: "Employment and civil disputes arising from background findings route to New York County Supreme Court at 60 Centre Street."
    },
    "hell-s-kitchen": {
      casePattern: "Hell's Kitchen background investigation work is anchored by restaurant-group and hospitality-operator clients screening kitchen, front-of-house, and management staff, along with small-business pre-employment checks for the neighborhood's many independent operators. Residential landlord-screening work is also common given the rental-heavy housing stock.",
      logistics: "Hell's Kitchen background checks often involve candidates with hospitality-industry patterns that public databases cover incompletely — tips-based income, multi-employer histories, and interstate moves. Investigators supplement database work with reference-contact verification and professional-license confirmation where relevant.",
      venue: "Civil disputes arising from hiring or rental decisions are filed at New York County Supreme Court, 60 Centre Street."
    },
    "murray-hill": {
      casePattern: "Murray Hill background investigations serve a mix of young-professional employers in the residential-commercial mix east of Lexington and tenant-screening work for the neighborhood's substantial rental stock. Common use cases include entry-level finance and consulting hires, roommate-vetting in a young-professional-heavy renter market, and personal-relationship background verification.",
      logistics: "Murray Hill background checks are typically straightforward verifications given the young-professional candidate pool — recent education, early career, and limited multi-jurisdiction exposure mean most findings come back through standard database and reference-contact channels within a few business days.",
      venue: "Disputes arising from background-check decisions are filed at New York County Supreme Court, 60 Centre Street."
    },
    "koreatown": {
      casePattern: "Koreatown background investigation work concentrates on small-business ownership verification, restaurant and karaoke operator screening, and business-partner due diligence for the area's concentration of Korean-American-owned commercial operations. Immigration-linked verification is also a common component of due-diligence work.",
      logistics: "Koreatown background checks often require investigators comfortable working across language-barrier source verification and cross-border records — many relevant business histories involve Korea-based entities not covered in U.S. databases. Multi-source verification is standard practice for any substantial engagement.",
      venue: "Civil proceedings arising from commercial or employment disputes are heard at New York County Supreme Court, 60 Centre Street."
    },
    "turtle-bay": {
      casePattern: "Turtle Bay background investigation work is shaped by the area's UN and diplomatic-community presence — employment vetting for nonprofit and international-organization hires, business-partner due diligence for international-commerce engagements, and executive screening where foreign-jurisdiction records are material. Residential tenant screening serves the area's mid-rise co-op and rental stock.",
      logistics: "Turtle Bay background work commonly requires international-jurisdiction searches, language-capable reference verification, and coordination with international-records specialists. Turnaround is typically longer than standard Manhattan background work given cross-border source timelines.",
      venue: "Matters proceeding to Manhattan civil litigation are filed at New York County Supreme Court, 60 Centre Street."
    },
    "sutton-place": {
      casePattern: "Sutton Place background investigation work is dominated by co-op board screening for the neighborhood's premium residential buildings, executive due diligence at the highest end of Midtown East hiring, and domestic-staff vetting for affluent households. Financial-industry executive screening is also a regular workstream given resident demographics.",
      logistics: "Sutton Place background checks routinely involve subjects with substantial financial histories, trust and entity structures, and significant professional records — multi-jurisdiction database work, SEC and FINRA record review, and source-interview verification are standard. Discretion is treated as an operational requirement given resident profile.",
      venue: "Commercial and civil proceedings arising from background findings route to New York County Supreme Court, 60 Centre Street."
    },
    "tudor-city": {
      casePattern: "Tudor City background investigation work is largely residential — tenant screening for the enclave's residential complex and pre-employment or relationship-verification work for the residents themselves. The enclave's small footprint and consistent resident demographic mean the work profile is narrower than adjacent Midtown East.",
      logistics: "Tudor City background checks follow standard Manhattan residential-screening practice. The residential complex has established screening expectations that investigators familiar with the enclave can align to, reducing friction during co-op and rental evaluation processes.",
      venue: "Disputes arising from rental or hiring decisions are filed at New York County Supreme Court, 60 Centre Street."
    },
    "kips-bay": {
      casePattern: "Kips Bay background investigation work is shaped by the neighborhood's medical-professional population — credentialing verification for healthcare-industry hires, professional-license checks for NYU Langone and VA Medical Center-adjacent employers, and tenant-screening for the area's high-rise residential stock. Healthcare-sector due diligence is a regular workstream.",
      logistics: "Kips Bay background checks routinely include medical-license verification through state licensing boards, hospital-credential confirmation, and healthcare-specific database work that consumer services cannot access. Turnaround varies by credential-complexity rather than standard business-day ranges.",
      venue: "Civil and employment disputes arising from background findings are heard at New York County Supreme Court, 60 Centre Street."
    },
    "gramercy-park": {
      casePattern: "Gramercy Park background investigation work is dominated by co-op board screening for the neighborhood's premium residential stock, private-club member vetting, and executive and business-partner due diligence for affluent residents. Estate and trust-related background work is also a regular component of the engagement mix.",
      logistics: "Gramercy Park background checks commonly involve multi-entity and trust-structure verification, significant financial-industry history review, and source-interview work that goes beyond standard database checks. Engagement discretion is standard given the neighborhood's privacy expectations.",
      venue: "Commercial and civil proceedings are filed at New York County Supreme Court, 60 Centre Street; Surrogate's Court at 31 Chambers Street handles estate-related matters."
    },
    "flatiron-district": {
      casePattern: "Flatiron District background investigation work concentrates on technology, advertising, and media hiring — engineering and product candidate vetting for the area's tech employer cluster, executive screening for agency and media hires, and investor due diligence for the neighborhood's substantial startup footprint. Co-founder verification is a recurring workstream.",
      logistics: "Flatiron District background checks routinely involve candidates with multi-employer tech careers, founder histories requiring entity-structure verification, and international-jurisdiction exposure from global tech moves. Standard database work is supplemented with professional-reference and investor-check verification.",
      venue: "Commercial disputes arising from background findings route to New York County Supreme Court, 60 Centre Street."
    },
    "nomad": {
      casePattern: "NoMad background investigation work serves the area's technology and media employer base along with hospitality-industry hiring for its flagship hotels. Common engagements include executive due diligence, co-founder background verification, and senior-hire screening for hotel-management roles. Residential co-op screening is also a regular workstream.",
      logistics: "NoMad background checks frequently involve subjects with hospitality-industry mobility — multi-property and multi-state employment histories requiring reference-contact verification across jurisdictions. Technology-industry subjects commonly have equity and entity-structure histories requiring additional verification beyond standard employment records.",
      venue: "Civil and employment proceedings arising from background findings are heard at New York County Supreme Court, 60 Centre Street."
    },
  },

  // ============================================================
  // CORPORATE INVESTIGATIONS — Midtown Manhattan (Sprint 2a)
  // ============================================================
  "corporate-investigations": {
    "midtown-east": {
      casePattern: "Midtown East corporate investigations are shaped by the neighborhood's concentration of financial services, law firms, and multinational offices between Park and Third Avenues. Common matters include intellectual-property theft ahead of employee departures to competitors, proprietary-information misappropriation, vendor-kickback schemes, executive misconduct investigations, and pre-deal M&A diligence.",
      logistics: "Midtown East corporate investigations typically run under attorney-client privilege coordinated with outside counsel. Work combines electronic-evidence preservation, workplace interviews, targeted surveillance of the subject's external activities, and financial-records review. Manhattan's density makes discreet surveillance of corporate subjects particularly demanding.",
      venue: "Corporate civil litigation proceeds through New York County Supreme Court Commercial Division at 60 Centre Street; federal matters route to the Daniel Patrick Moynihan U.S. Courthouse at 500 Pearl Street."
    },
    "midtown-west": {
      casePattern: "Midtown West corporate investigations commonly involve media, entertainment, and hospitality industry clients — talent-misconduct investigations for production companies, intellectual-property and confidentiality-breach matters for media operators, and employee-theft documentation for restaurant groups and hotels. Entertainment-industry disputes often blend corporate and reputational dimensions.",
      logistics: "Midtown West corporate investigations navigate the industry-specific sensitivities of media and entertainment clients — confidentiality, press exposure, and union considerations all shape case planning. Work typically involves coordinated electronic and physical-surveillance components with strict operational-security protocols.",
      venue: "Commercial matters proceed through the Commercial Division at 60 Centre Street; federal litigation routes to 500 Pearl Street or the Thurgood Marshall Courthouse at 40 Foley Square."
    },
    "hell-s-kitchen": {
      casePattern: "Hell's Kitchen corporate investigations commonly serve restaurant groups and hospitality operators — employee theft and cash-handling schemes, vendor-kickback patterns, and management misconduct across the neighborhood's dense restaurant footprint. Liquor-license compliance and workers' compensation fraud also generate steady referral volume.",
      logistics: "Hell's Kitchen corporate investigations combine point-of-sale-data review, covert staff-behavior observation, and vendor-relationship mapping. Restaurant-group matters frequently extend across multiple locations in the area, requiring coordinated multi-site investigation rather than single-premises work.",
      venue: "Commercial proceedings run through the Commercial Division, New York County Supreme Court, 60 Centre Street; federal matters are heard at 500 Pearl Street."
    },
    "murray-hill": {
      casePattern: "Murray Hill corporate investigations serve a mix of small-to-mid-market professional-services firms and the residential-property management sector in the area. Common matters include employee misconduct, fiduciary breach in small partnership structures, and tenant-related fraud for the neighborhood's rental-heavy residential inventory.",
      logistics: "Murray Hill corporate investigations typically involve smaller-scale engagements than Midtown East or the Financial District. Work often combines financial-records review, employee-interview protocols, and targeted surveillance, usually without the multi-agent operational footprint required for larger financial-industry matters.",
      venue: "Commercial matters proceed through New York County Supreme Court, 60 Centre Street; the Commercial Division handles complex business-to-business disputes."
    },
    "koreatown": {
      casePattern: "Koreatown corporate investigations commonly involve small-business ownership disputes, cross-border commercial matters tied to Korea-based counterparties, and workforce-misconduct cases in the area's restaurant and karaoke-venue economy. Immigration-linked business investigations are a recurring component of the engagement mix.",
      logistics: "Koreatown corporate investigations routinely require language-capable investigators and coordination with specialists in Korean corporate structures and records. Cross-border evidence gathering is common, adding significant time and process complexity compared with standard Manhattan commercial investigations.",
      venue: "Commercial proceedings are heard at New York County Supreme Court, 60 Centre Street; international-commerce components may route through federal court at 500 Pearl Street."
    },
    "turtle-bay": {
      casePattern: "Turtle Bay corporate investigations are shaped by the UN and international-organization presence — nonprofit governance investigations, international-NGO employee misconduct, and cross-border commercial matters where one counterparty is internationally headquartered. Diplomatic-community-linked civil matters also occur, with careful handling of jurisdictional sensitivities.",
      logistics: "Turtle Bay corporate investigations frequently require international-records work, language-capable investigator resources, and careful operational planning where subjects may have diplomatic or international-organization protective considerations. Timelines are typically longer than standard Midtown corporate investigations.",
      venue: "Domestic civil matters route to New York County Supreme Court, 60 Centre Street; federal matters including international-commerce elements proceed at 500 Pearl Street."
    },
    "sutton-place": {
      casePattern: "Sutton Place corporate investigations commonly involve high-net-worth-individual commercial matters — family-office governance, fiduciary disputes across trust and entity structures, executive misconduct at the highest end of financial-services hiring, and pre-deal due diligence for substantial private transactions. Estate-adjacent commercial investigations are a recurring workstream.",
      logistics: "Sutton Place corporate investigations routinely involve complex trust, family-office, and entity structures requiring forensic-accounting coordination and multi-jurisdiction records work. Operational discretion is treated as a primary requirement given resident profile and transaction sensitivity.",
      venue: "Commercial proceedings are filed at New York County Supreme Court Commercial Division, 60 Centre Street; Surrogate's Court at 31 Chambers Street handles estate-linked matters."
    },
    "tudor-city": {
      casePattern: "Tudor City corporate investigations are limited given the enclave's predominantly residential character. When they occur, they typically involve resident professionals or individual-level commercial matters rather than enterprise-scale investigations. Work profile aligns more closely with adjacent Midtown East business than with independent Tudor City-based engagement.",
      logistics: "Tudor City corporate investigation work generally runs out of adjacent Midtown East operating patterns — the enclave is too small to support independent corporate-investigation logistics. Investigators treat Tudor City-based engagements as extensions of Midtown East work for scheduling and coverage purposes.",
      venue: "Commercial matters route to New York County Supreme Court, 60 Centre Street; federal matters proceed at 500 Pearl Street."
    },
    "kips-bay": {
      casePattern: "Kips Bay corporate investigations are shaped by the healthcare-sector presence — medical-practice misconduct investigations, healthcare-billing fraud matters, hospital-adjacent vendor schemes, and medical-device commercial disputes. The NYU Langone and VA Medical Center concentration drives industry-specific engagement volume.",
      logistics: "Kips Bay corporate investigations routinely require healthcare-industry expertise — medical-billing record review, credentialing-database work, and coordination with healthcare-compliance specialists. Matters commonly involve both federal and state regulatory considerations beyond standard commercial investigation scope.",
      venue: "Healthcare-sector federal matters route to 500 Pearl Street; state commercial proceedings are heard at 60 Centre Street; whistleblower and qui tam actions may proceed in either venue."
    },
    "gramercy-park": {
      casePattern: "Gramercy Park corporate investigations commonly involve small-to-mid-market commercial matters tied to the neighborhood's affluent professional community — private-club governance disputes, partnership fiduciary breaches, and executive due diligence for the residents' business activities. Estate-linked commercial investigations are also a regular workstream.",
      logistics: "Gramercy Park corporate investigations typically involve engagements where discretion is the primary operational concern given the neighborhood's privacy expectations. Work commonly combines forensic-accounting coordination, source-interview protocols, and targeted records review rather than extensive surveillance operations.",
      venue: "Commercial proceedings are filed at New York County Supreme Court, 60 Centre Street; estate-linked matters go to Surrogate's Court at 31 Chambers Street."
    },
    "flatiron-district": {
      casePattern: "Flatiron District corporate investigations serve the area's technology, advertising, and media employer cluster — intellectual-property misappropriation by departing employees, co-founder disputes in venture-backed companies, trade-secret investigations, and investor due diligence for the substantial startup footprint. Pre-funding diligence is a regular referral source.",
      logistics: "Flatiron District corporate investigations routinely involve electronic-evidence preservation at technical complexity beyond standard corporate work — source code, development infrastructure, and cloud-resource access require specialized forensic handling. Cross-jurisdiction investigation is common given tech-industry mobility.",
      venue: "Commercial matters proceed through the Commercial Division at 60 Centre Street; federal matters including IP and trade-secret actions route to 500 Pearl Street."
    },
    "nomad": {
      casePattern: "NoMad corporate investigations serve the area's hospitality operators at the flagship hotels along with the technology and media professional community in the surrounding office stock. Common matters include hotel-management misconduct, hospitality-vendor kickback schemes, and technology-industry engagements overflowing from adjacent Flatiron commercial activity.",
      logistics: "NoMad corporate investigations often run across hotel operational environments — guest-privacy, union, and brand-reputation considerations shape engagement planning in ways that pure office-based investigations do not. Multi-property coordination is common for hospitality-group matters.",
      venue: "Commercial proceedings are filed at New York County Supreme Court Commercial Division, 60 Centre Street; federal matters route to 500 Pearl Street."
    },
  },

  // ============================================================
  // ASSET SEARCHES — Midtown Manhattan (Sprint 2a)
  // ============================================================
  "asset-searches": {
    "midtown-east": {
      casePattern: "Midtown East asset search work is dominated by divorce-proceeding engagements for the neighborhood's affluent professional community, judgment-enforcement searches for commercial creditors, and pre-deal counterparty financial-position assessments. High-value financial-services-industry divorces drive significant engagement volume.",
      logistics: "Midtown East asset searches routinely involve multi-entity and trust-structure work — professional subjects commonly hold real estate, business interests, and financial instruments across multiple jurisdictions. Investigators coordinate with forensic-accounting specialists on substantial engagements and handle international-asset components through specialist networks.",
      venue: "Divorce asset findings are presented in matrimonial proceedings at New York County Supreme Court, 60 Centre Street; judgment-enforcement actions route through the same venue's civil calendar."
    },
    "midtown-west": {
      casePattern: "Midtown West asset search work commonly serves media and entertainment industry matters — royalty-stream asset investigation, production-company counterparty diligence, and divorce proceedings involving entertainment-industry subjects. Judgment-enforcement engagements also occur regularly given the area's commercial activity density.",
      logistics: "Midtown West asset searches often involve unusual asset categories — royalty interests, production-company equity, intellectual-property portfolios — that require industry-familiar investigator resources and specialist valuation coordination. Standard real-estate and financial-instrument searches remain the baseline.",
      venue: "Matrimonial matters are filed at 60 Centre Street; civil judgment-enforcement proceeds through the same New York County Supreme Court venue."
    },
    "hell-s-kitchen": {
      casePattern: "Hell's Kitchen asset search work commonly serves small-business commercial disputes, divorce proceedings in the area's mixed-income residential community, and restaurant-group counterparty diligence. Tenant-dispute asset investigation is also a recurring component given the neighborhood's rental-heavy housing profile.",
      logistics: "Hell's Kitchen asset searches typically focus on small-business entity review, real-estate holdings (often through LLC structures given New York's property market), and standard financial-instrument checks. Engagement scope is usually narrower than Midtown East or Financial District work.",
      venue: "Judgment and matrimonial actions are heard at New York County Supreme Court, 60 Centre Street."
    },
    "murray-hill": {
      casePattern: "Murray Hill asset search work serves a young-professional demographic — pre-marital asset verification, divorce proceedings for the neighborhood's early-career finance and consulting professionals, and judgment-enforcement engagements. Asset profiles are typically simpler than in more affluent Midtown locations, with shorter search timelines.",
      logistics: "Murray Hill asset searches commonly cover single-jurisdiction holdings — primary residence (or rental), early-career financial accounts, and limited entity exposure. Searches typically return within standard turnaround windows without the complexity of multi-jurisdiction or multi-entity work.",
      venue: "Matrimonial and civil matters are filed at New York County Supreme Court, 60 Centre Street."
    },
    "koreatown": {
      casePattern: "Koreatown asset search work often involves cross-border components tied to Korea-based assets, small-business ownership interest verification for commercial disputes, and matrimonial proceedings where one or both parties have international family-financial structures. Judgment-enforcement against Korean-community business interests is a regular workstream.",
      logistics: "Koreatown asset searches routinely require international-jurisdiction work covering Korea and related trade partners, language-capable investigator resources, and coordination with international-asset-tracing specialists. Timelines are substantially longer than domestic-only searches.",
      venue: "Matrimonial and commercial matters are heard at New York County Supreme Court, 60 Centre Street; international-component matters may route through federal court at 500 Pearl Street."
    },
    "turtle-bay": {
      casePattern: "Turtle Bay asset search work is heavily international — diplomatic and UN-community matrimonial matters, international-NGO-linked commercial disputes, and cross-border judgment enforcement. Many engagements involve multi-jurisdiction asset structures that require specialist coordination beyond standard Manhattan asset-investigation scope.",
      logistics: "Turtle Bay asset searches routinely involve multi-country records work, diplomatic-immunity and jurisdictional-sovereignty considerations, and specialist international-asset-tracing networks. Engagement timelines commonly extend to weeks rather than days for substantial matters.",
      venue: "Domestic filings route to New York County Supreme Court, 60 Centre Street; federal matters involving international components proceed at 500 Pearl Street."
    },
    "sutton-place": {
      casePattern: "Sutton Place asset search work is dominated by high-net-worth-individual matters — substantial-estate divorce proceedings, family-office and trust-structure investigations, and multi-jurisdiction asset discovery for complex estates. Average engagement asset complexity is significantly higher than Manhattan baseline.",
      logistics: "Sutton Place asset searches routinely span multiple countries, entity layers, and investment vehicles — family-office structures, offshore holdings, trust arrangements, and private-investment positions all require specialist investigation beyond standard real-estate-and-banks searches. Forensic-accounting coordination is standard.",
      venue: "High-asset matrimonial proceedings are heard at New York County Supreme Court, 60 Centre Street; Surrogate's Court at 31 Chambers Street handles estate-adjacent asset matters."
    },
    "tudor-city": {
      casePattern: "Tudor City asset search work is largely residential — enclave-resident divorce proceedings and individual-level commercial matters. Asset profiles typically reflect the enclave's middle-to-upper-middle-income residential demographic, with straightforward primary-residence, retirement-account, and financial-instrument coverage.",
      logistics: "Tudor City asset searches follow standard Manhattan residential-asset-investigation practice. Engagements are typically smaller-scale than those in adjacent Midtown East and complete within standard turnaround windows.",
      venue: "Matrimonial and civil matters route to New York County Supreme Court, 60 Centre Street."
    },
    "kips-bay": {
      casePattern: "Kips Bay asset search work commonly serves medical-professional divorce proceedings — practice valuations, medical-partnership equity, and retirement-plan asset verification for the area's healthcare workforce. Judgment-enforcement engagements for medical-practice creditors are also a recurring component.",
      logistics: "Kips Bay asset searches routinely require medical-practice-specific investigation — partnership interests, retirement-plan structures, and practice-receivables valuation require healthcare-sector-familiar specialists. Standard asset-search coverage applies alongside the sector-specific work.",
      venue: "Matrimonial proceedings and civil judgment actions are heard at New York County Supreme Court, 60 Centre Street."
    },
    "gramercy-park": {
      casePattern: "Gramercy Park asset search work is dominated by affluent-resident matrimonial proceedings, family-office diligence engagements, and substantial estate-related asset investigations. The neighborhood's affluent professional community drives engagement complexity above Manhattan baseline.",
      logistics: "Gramercy Park asset searches commonly involve trust structures, private-investment vehicles, and multi-jurisdiction holdings requiring specialist coordination. Discretion is treated as an operational requirement given the neighborhood's privacy expectations.",
      venue: "Matrimonial and civil matters are filed at New York County Supreme Court, 60 Centre Street; Surrogate's Court at 31 Chambers Street handles estate-linked matters."
    },
    "flatiron-district": {
      casePattern: "Flatiron District asset search work serves the area's technology and media professional community — startup-equity verification in matrimonial proceedings, pre-deal investor-diligence asset mapping, and judgment-enforcement against tech-industry debtors. Founder-divorce engagements commonly involve complex equity structures.",
      logistics: "Flatiron District asset searches routinely require technology-industry-specific investigation — cap-table analysis, convertible-note tracing, cryptocurrency holdings review, and early-stage-equity valuation. Standard asset-search scope is supplemented with these tech-sector-specific elements.",
      venue: "Matrimonial proceedings are heard at New York County Supreme Court, 60 Centre Street; federal matters involving securities or interstate commerce route to 500 Pearl Street."
    },
    "nomad": {
      casePattern: "NoMad asset search work spans the area's technology-industry overflow engagements and hospitality-industry commercial matters at the flagship hotels. Matrimonial proceedings for area residents, hotel-group counterparty diligence, and judgment-enforcement engagements all occur with regular frequency.",
      logistics: "NoMad asset searches combine tech-industry-specific elements (cap tables, convertible instruments) for technology-sector subjects with hospitality-sector specialization (management agreements, royalty interests) for hotel-linked matters. Multi-sector investigator resource pools are routinely drawn on.",
      venue: "Matrimonial and civil proceedings route to New York County Supreme Court, 60 Centre Street."
    },
  },

  // ============================================================
  // CHILD CUSTODY INVESTIGATIONS — Midtown Manhattan (Sprint 2a)
  // ============================================================
  "child-custody-investigations": {
    "midtown-east": {
      casePattern: "Midtown East child custody investigations commonly involve professional-demographic families where custody modifications are tied to career-schedule changes, relocation proposals, and high-income-implications on support orders. Cases often require documenting caregiver exposure during parental work hours and evidence of compliance with existing parenting-time arrangements.",
      logistics: "Midtown East custody investigations work around predictable professional schedules — school-day pickup and drop-off windows, after-school activity routines, and weekend contact patterns all structure investigation planning. Investigators document observed caregivers, residential environment during parental time, and routine variations.",
      venue: "All Manhattan custody matters are heard at New York County Family Court, 60 Lafayette Street; evidence is prepared to meet the court's chain-of-custody and admissibility standards."
    },
    "midtown-west": {
      casePattern: "Midtown West child custody investigations commonly involve media and entertainment-industry parents where nonstandard work schedules, travel demands, and income-variability drive custody-modification matters. Substance-related concerns and residential-environment documentation are also recurring components of the engagement mix.",
      logistics: "Midtown West custody investigations work around the nonstandard hours of entertainment-industry parents — late-evening observation and irregular-schedule coverage are more common than in standard professional-family matters. Investigators document residential environment, caregiver rotation, and activity patterns relevant to fitness determinations.",
      venue: "All custody matters are heard at New York County Family Court, 60 Lafayette Street."
    },
    "hell-s-kitchen": {
      casePattern: "Hell's Kitchen child custody investigations commonly involve families across the neighborhood's mixed-income residential stock — custody-modification matters, parenting-time compliance verification, and residential-environment documentation. Cases frequently involve attorneys working with community legal services alongside private counsel.",
      logistics: "Hell's Kitchen custody investigations navigate the neighborhood's dense mixed-use geography — apartment-entry observation, playground and school-route coverage, and after-school-activity tracking all structure investigation planning. Foot surveillance dominates; vehicle work is usually ineffective in the district's street geometry.",
      venue: "All Manhattan custody proceedings are heard at New York County Family Court, 60 Lafayette Street."
    },
    "murray-hill": {
      casePattern: "Murray Hill child custody investigations typically involve young-professional families in the residential blocks east of Lexington — custody-establishment matters for unmarried parents, post-divorce parenting-time verification, and residential-environment documentation. The young-family demographic drives a steady engagement flow.",
      logistics: "Murray Hill custody investigations work predictable residential and school-route patterns. Investigators document observed caregivers during parental time, residential-environment conditions, and compliance with court-ordered parenting-time structures. The neighborhood's pedestrian-dense character supports natural observation.",
      venue: "Custody filings route to New York County Family Court, 60 Lafayette Street."
    },
    "koreatown": {
      casePattern: "Koreatown child custody investigations often involve families with cross-border elements — custody cases where one parent has international family structures or where relocation to Korea is proposed. Culturally-aware investigator resources and language-capable coverage are commonly required components of these engagements.",
      logistics: "Koreatown custody investigations frequently require language-capable investigators and coordination with specialists in cross-border custody matters. Standard Manhattan custody-investigation techniques apply for local-conduct documentation, with international elements handled through specialist networks where cases involve foreign-jurisdiction elements.",
      venue: "All Manhattan custody matters are heard at New York County Family Court, 60 Lafayette Street, with international-component matters potentially involving separate jurisdictional proceedings."
    },
    "turtle-bay": {
      casePattern: "Turtle Bay child custody investigations commonly involve UN and diplomatic-community families — custody matters with international-relocation proposals, cross-jurisdiction custody enforcement, and cases where diplomatic-immunity considerations shape investigation planning. Cross-border custody enforcement is a regular engagement component.",
      logistics: "Turtle Bay custody investigations routinely require careful planning around diplomatic and international-organization protective considerations. Coordination with international-custody specialists and cross-jurisdiction investigator networks is common for substantial engagements.",
      venue: "Domestic Manhattan custody matters are heard at New York County Family Court, 60 Lafayette Street; international-component matters may involve separate jurisdictional processes."
    },
    "sutton-place": {
      casePattern: "Sutton Place child custody investigations typically involve high-net-worth families where custody matters intersect with substantial financial implications — relocation proposals affecting support orders, private-school decisions, and documentation of parenting conduct in affluent residential environments. Engagements commonly run for extended durations given complexity.",
      logistics: "Sutton Place custody investigations work doorman-building residential environments where observation is challenging and scrutiny of unfamiliar foot traffic is immediate. Investigators rely on approach-route coverage, private-school and activity-venue observation, and multi-day pattern establishment rather than point-in-time documentation.",
      venue: "High-asset custody proceedings are heard at New York County Family Court, 60 Lafayette Street, with substantial-estate implications sometimes routed through Supreme Court matrimonial calendars at 60 Centre Street."
    },
    "tudor-city": {
      casePattern: "Tudor City child custody investigations are relatively uncommon given the enclave's demographic profile but do occur for resident families — standard custody-modification matters, parenting-time compliance, and residential-environment documentation. Engagements typically align with Midtown East-family patterns rather than independent Tudor City-specific approaches.",
      logistics: "Tudor City custody investigations work a small, quiet residential environment where stationary observation is visible. Investigators cover approaches through First Avenue and 42nd Street and follow subjects into the adjacent Midtown East corridor where natural density supports observation.",
      venue: "All Manhattan custody matters proceed through New York County Family Court, 60 Lafayette Street."
    },
    "kips-bay": {
      casePattern: "Kips Bay child custody investigations commonly involve medical-professional families — cases shaped by shift-based parental schedules, on-call obligations affecting parenting time, and healthcare-workforce relocation proposals. Documentation of compliance with shift-structured parenting-time orders is a recurring engagement component.",
      logistics: "Kips Bay custody investigations work medical-campus shift schedules as a structuring variable. NYU Langone and VA Medical Center shift changes create predictable parental availability windows that investigators use to time observation. Standard residential-environment and caregiver-exposure documentation applies alongside the scheduling considerations.",
      venue: "All Manhattan custody matters are heard at New York County Family Court, 60 Lafayette Street."
    },
    "gramercy-park": {
      casePattern: "Gramercy Park child custody investigations commonly involve affluent-family custody matters — private-school enrollment and scheduling considerations, nanny and caregiver documentation, and cases where residential-environment quality is materially contested. Engagements typically involve substantial evidence-gathering scope given case complexity.",
      logistics: "Gramercy Park custody investigations work the neighborhood's quiet residential core where observation is challenging. Investigators use the neighborhood's private-club venues, private-school pickup and drop-off routines, and the surrounding Third Avenue and Park Avenue South corridors as structuring observation points.",
      venue: "High-asset custody matters are heard at New York County Family Court, 60 Lafayette Street; substantial-estate implications may involve related Supreme Court proceedings at 60 Centre Street."
    },
    "flatiron-district": {
      casePattern: "Flatiron District child custody investigations commonly involve technology, media, and advertising-industry parents — custody matters shaped by founder-schedule irregularity, international-travel obligations, and equity-based income considerations. Relocation-proposal matters tied to tech-industry mobility are a recurring component.",
      logistics: "Flatiron District custody investigations work irregular tech-industry schedules — investigators structure observation around known founder-schedule patterns, industry-event attendance, and travel windows. Residential environment documentation covers the area's loft and high-rise residential stock.",
      venue: "All Manhattan custody matters route to New York County Family Court, 60 Lafayette Street."
    },
    "nomad": {
      casePattern: "NoMad child custody investigations combine technology-professional families from the area's overflow from Flatiron and hospitality-industry parents working in the flagship hotels. Case types include custody-modification matters, parenting-time compliance, and residential-environment documentation across the neighborhood's hotel-adjacent residential stock.",
      logistics: "NoMad custody investigations work a mixed-use environment where hotel-industry parental schedules and tech-industry patterns both require tailored observation planning. Investigators adapt between residential-area coverage and hotel-adjacent observation based on case specifics.",
      venue: "All Manhattan custody matters are heard at New York County Family Court, 60 Lafayette Street."
    },
  },

};

// ============================================================
// Helper
// ============================================================
export function getCasePattern(serviceSlug: string, citySlug: string): CasePattern | null {
  const serviceBlock = LOCATION_CASE_PATTERNS[serviceSlug];
  if (!serviceBlock) return null;
  return serviceBlock[citySlug] || null;
}
