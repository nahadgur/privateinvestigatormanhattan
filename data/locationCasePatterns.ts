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
      casePattern: "Turtle Bay infidelity cases are shaped by the neighborhood's unusually high diplomatic and UN-mission residential presence between 42nd and 53rd east of Second Avenue. Cases commonly involve subjects with diplomatic or UN-staff credentials — a factor that affects investigative approach because of immunity-related sensitivities around direct contact. Residential buildings in the area tend to have distinct security profiles, and documented conduct frequently occurs at specific Second Avenue dining establishments and East Side hotels.",
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
      casePattern: "Kips Bay infidelity cases are structured by the medical-workforce reality of the neighborhood. NYU Langone and the VA Medical Center drive the area's residential mix, and investigations here commonly involve subjects whose schedules are shaped by hospital rotation, on-call rhythm, and night-shift transitions. Documentation often centers around hospital entry and exit patterns, the specific restaurants frequented by medical-campus staff, and the residential-complex density south of 34th Street.",
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

    // --- Sprint 2b: Downtown Manhattan ---
    "financial-district": {
      casePattern: "Financial District infidelity cases exploit the precinct's unusual day-night population swing. The daytime workforce of ~300,000 largely disappears by 8 pm, leaving the growing residential base — roughly 60,000 residents — and a much smaller evening hospitality cluster along Stone Street and the Seaport. Investigation timing is commonly split: office-exit observation during the rush-hour departure, then a second window covering whichever evening district the subject moves toward.",
      logistics: "Financial District surveillance contends with narrow colonial-era street geometry, constant construction, and a workforce whose routines blur the line between office hours and evening activity. Investigators work stationary observation from the district's abundant cafes and lobby-adjacent retail, and coordinate for the after-hours shift when the workforce departs en masse.",
      venue: "Matrimonial proceedings run through New York County Supreme Court at 60 Centre Street, with custody elements heard at Family Court, 60 Lafayette Street."
    },
    "tribeca": {
      casePattern: "Tribeca infidelity cases commonly revolve around the neighborhood's small but high-profile hotel and restaurant cluster — the cluster south of Canal Street running along Greenwich and West Broadway is tightly knit, and documented conduct frequently occurs at a specific set of venues investigators know well. Residential documentation is complicated by the doorman-building density and by a resident population that is unusually aware of professional photographers and surveillance.",
      logistics: "Tribeca surveillance benefits from relatively low foot traffic and wide, quiet streets — but that same quiet makes stationary observation highly visible. Investigators use the restaurant and cafe scene along Greenwich Street and West Broadway as natural vantage points, and favor brief rotations over prolonged stationary positioning.",
      venue: "High-asset matrimonial matters are filed at New York County Supreme Court, 60 Centre Street; custody components route to Family Court, 60 Lafayette Street."
    },
    "battery-park-city": {
      casePattern: "Battery Park City infidelity investigations commonly involve residents of the high-rise residential complexes running along the Hudson waterfront, often finance-industry professionals whose routines cross into the adjacent Financial District. Patterns typically involve documenting conduct tied to the neighborhood's insular residential layout and the restaurant and ferry-terminal corridors.",
      logistics: "Battery Park City surveillance works a deliberately designed master-planned environment with few natural observation points — the neighborhood's parks, waterfront promenade, and limited commercial frontage all make stationary observation conspicuous. Investigators commonly position at entry and exit points rather than within the residential core.",
      venue: "Matrimonial proceedings are heard at New York County Supreme Court at 60 Centre Street, with custody matters at Family Court, 60 Lafayette Street."
    },
    "water-street": {
      casePattern: "Water Street infidelity investigations follow a distinctive linear geography — the corridor runs from the Seaport south to Battery Park, and subjects' routines map cleanly onto the office-tower entry points at specific numbered Water Street addresses. Documentation typically pairs office-exit observation with coverage of the Seaport-adjacent restaurants at the corridor's north end or the Stone Street cluster near its southern end, depending on which direction a subject moves after work.",
      logistics: "Water Street surveillance works a linear corridor where subjects move predictably between office towers, the Seaport cluster, and transit points at Broad Street and Wall Street stations. Investigators leverage the predictable foot-traffic geometry and use the Seaport restaurant density as natural observation cover.",
      venue: "Divorce proceedings run through New York County Supreme Court, 60 Centre Street, with custody components handled at Family Court, 60 Lafayette Street."
    },
    "wall-street": {
      casePattern: "Wall Street infidelity investigations concentrate on subjects in the banking, hedge fund, and securities industries whose routines run between office towers on Broad Street, Wall Street, and William Street and the post-work venues of Stone Street and the Seaport. Patterns often involve long workdays with compressed post-work social windows.",
      logistics: "Wall Street surveillance works narrow pedestrianized and restricted-vehicle streets with heavy security presence around the NYSE. Investigators use the Stone Street outdoor dining cluster and Seaport-adjacent venues as observation anchors, and work short rotations to avoid security-officer recognition in the tightly controlled core blocks.",
      venue: "Matrimonial filings proceed through New York County Supreme Court at 60 Centre Street; custody matters route to Family Court, 60 Lafayette Street."
    },
    "fulton": {
      casePattern: "Fulton infidelity cases are anchored by the Seaport's entertainment complex. Pier 17's rooftop and restaurant venues, the street-level cluster along Front Street, and the Peck Slip corridor define where documented conduct occurs. Many cases involve subjects whose work is in the Financial District but whose after-work patterns shift to the Seaport's more social environment, and investigators plan coverage around this west-to-east evening migration.",
      logistics: "Fulton surveillance works a dense and tourist-heavy environment with natural cover but high ambient noise and motion. Investigators favor multi-agent rotations through the Seaport's pedestrianized blocks and use the Pier 17 and Front Street restaurant density to maintain extended observation without drawing attention.",
      venue: "Manhattan matrimonial matters are heard at New York County Supreme Court, 60 Centre Street, with related custody proceedings at Family Court, 60 Lafayette Street."
    },
    "civic-center": {
      casePattern: "Civic Center infidelity investigations commonly involve subjects tied to the legal, government, and court workforce concentrated around Foley Square and the municipal office complex. Patterns typically involve documenting conduct around the daytime lunch routines, court-adjacent restaurants, and the evening transition windows when the legal workforce departs for Midtown, Tribeca, or home.",
      logistics: "Civic Center surveillance works a dense government and court precinct with heavy security footprint and constant foot traffic during court hours. Investigators use the restaurant clusters around Chambers Street and Worth Street as observation points and time coverage around courthouse dismissal schedules.",
      venue: "Matrimonial proceedings are filed steps away at New York County Supreme Court, 60 Centre Street; custody components are heard at Family Court, 60 Lafayette Street."
    },
    "two-bridges": {
      casePattern: "Two Bridges infidelity investigations commonly involve subjects across the neighborhood's mixed-demographic residential stock between the Manhattan and Brooklyn Bridges. Patterns typically involve documenting conduct across the area's diverse residential building types and the restaurant and bar corridors along East Broadway and the Chinatown border.",
      logistics: "Two Bridges surveillance works a low-traffic residential environment bounded by the river and two major bridges. Investigators use the limited access points — approach routes along East Broadway and the FDR Drive pedestrian crossings — to structure observation, and work foot coverage rather than vehicle-based tailing given street geometry.",
      venue: "Divorce proceedings are handled at New York County Supreme Court, 60 Centre Street; custody matters at Family Court, 60 Lafayette Street."
    },
    "chinatown": {
      casePattern: "Chinatown infidelity investigations commonly involve subjects in the Chinese-American community whose routines run through the neighborhood's restaurant, social-club, and commercial district between Canal Street and East Broadway. Patterns often involve language-capable coverage and documentation across culturally specific venue types including tea houses, community associations, and restaurant back rooms.",
      logistics: "Chinatown surveillance requires language-capable investigators for effective coverage — subjects frequently move between Mandarin and Cantonese-speaking venues where non-speakers are immediately identifiable. The neighborhood's high street-level density supports foot surveillance; cross-border family structures sometimes extend engagement scope internationally.",
      venue: "Manhattan matrimonial proceedings route to New York County Supreme Court at 60 Centre Street, with custody matters at Family Court, 60 Lafayette Street."
    },
    "little-italy": {
      casePattern: "Little Italy infidelity investigations commonly involve subjects tied to the neighborhood's concentrated restaurant district along Mulberry Street and the adjacent residential and commercial blocks. Patterns often involve documenting conduct around the restaurant and cafe venues, the hotels used by the area's tourist-adjacent business activity, and SoHo-spillover nightlife.",
      logistics: "Little Italy surveillance works a compact, heavily pedestrianized neighborhood core with seasonal tourist density that varies surveillance difficulty. Investigators use the street-level cafe seating as natural observation posts and coordinate through the adjacent Nolita and SoHo corridors where foot traffic supports freer movement.",
      venue: "Matrimonial matters are heard at New York County Supreme Court, 60 Centre Street, with custody components routed to Family Court, 60 Lafayette Street."
    },
    "soho": {
      casePattern: "SoHo infidelity cases work the neighborhood's split character — the weekend tourist density that dominates West Broadway contrasts with the weekday-morning quiet of the residential loft blocks to the east. Subjects in the creative-industry professional class commonly use the boutique-hotel cluster along Crosby, Mercer, and Lafayette, and documented conduct frequently occurs at specific restaurants whose patterns investigators can schedule around.",
      logistics: "SoHo surveillance contends with constant tourist and shopper density that varies sharply by time of day and season. Cast-iron building geometry creates useful vantage points but also highly visible stationary positions. Investigators use the neighborhood's dense restaurant and cafe seating and favor foot rotations over fixed observation.",
      venue: "New York County Supreme Court matrimonial filings are handled at 60 Centre Street; Family Court at 60 Lafayette Street hears custody matters."
    },
    "noho": {
      casePattern: "NoHo infidelity investigations commonly involve subjects in the creative-professional and long-term residential community in the compact district between Houston and 8th Streets. Patterns typically involve documenting conduct around the restaurant and bar cluster near Bowery and Broadway, and the venue circuit running into Greenwich Village and the East Village.",
      logistics: "NoHo surveillance works a small, architecturally distinctive neighborhood with limited primary commercial streets — Broadway, Lafayette, and Bowery carry most foot traffic. Investigators use the restaurant and cafe density along these corridors and follow subjects into the more anonymous crowd flows of adjacent Greenwich Village and Soho.",
      venue: "Divorce and custody matters are handled at New York County Supreme Court, 60 Centre Street, and Family Court, 60 Lafayette Street, respectively."
    },

    // --- Sprint 2c: Lower East Side + East Village ---
    "lower-east-side": {
      casePattern: "The Lower East Side's bar-and-restaurant corridor along Ludlow, Orchard, Rivington, and Stanton is one of the most concentrated nightlife zones in Manhattan, and LES infidelity cases frequently turn on documenting conduct in this compact grid. The neighborhood's rapid weekend turnover between different crowd types — early-evening residents, late-night visitors, after-hours industry workers — means pattern identification often takes several sessions to stabilize.",
      logistics: "LES surveillance works a tightly packed venue-to-venue environment where subjects transit in foot-only distances between three or four bars in a single evening. Investigators typically station one agent at the likely destination cluster and rotate another in the approach blocks. Weekend crowds provide cover; weekday evenings are markedly thinner and require more careful positioning.",
      venue: "Matrimonial proceedings are filed at New York County Supreme Court, 60 Centre Street; custody elements route to Family Court at 60 Lafayette Street."
    },
    "east-village": {
      casePattern: "East Village infidelity cases commonly involve subjects in the creative, music, and service-industry community anchored between Avenue A and Third Avenue. Documentation frequently centers on the restaurant and bar cluster along First and Second Avenues and the specific late-night venues — many of them long-standing neighborhood institutions — where the same subjects appear repeatedly.",
      logistics: "East Village surveillance benefits from dense residential-commercial mixing that makes foot-based observation relatively unexposed, but the tight-knit nature of the service-industry community means venue-staff recognition is a real operational concern. Investigators rotate assignments across agents more aggressively here than in most Manhattan neighborhoods.",
      venue: "Divorce proceedings are heard at New York County Supreme Court, 60 Centre Street; custody matters at Family Court, 60 Lafayette Street."
    },
    "alphabet-city": {
      casePattern: "Alphabet City's gentrification over the past two decades has produced an unusual resident mix — long-tenure rent-stabilized tenants alongside market-rate condo buyers — and infidelity cases here frequently span the two demographics in ways that affect investigation approach. Documentation commonly covers the Avenue B and C bar corridors and the Tompkins Square Park perimeter.",
      logistics: "Alphabet City surveillance works quieter streets than the adjacent East Village, meaning stationary observation is more exposed. Investigators rely on the handful of busy corners — Avenue A at St. Marks, Avenue B at 7th Street — as natural anchor points and work shorter rotations through the residential blocks.",
      venue: "Manhattan matrimonial filings route to New York County Supreme Court at 60 Centre Street; custody components to Family Court at 60 Lafayette Street."
    },
    "stuy-town": {
      casePattern: "Stuy Town infidelity investigations are shaped by one of the most unusual residential environments in Manhattan — a private middle-income superblock community with its own interior street grid, security perimeter, and community structure. Documented conduct rarely occurs inside the complex itself; investigation commonly focuses on the exterior — First Avenue, 14th Street, 20th Street — where subjects enter and exit.",
      logistics: "Stuy Town surveillance is essentially impossible inside the complex given resident security awareness and the semi-private character of the interior pathways. Investigators work exclusively at the perimeter access points, identifying subjects as they cross First Avenue or 14th Street, and follow into the adjacent East Village or Kips Bay venues where documentation can occur naturally.",
      venue: "Matrimonial matters are heard at New York County Supreme Court, 60 Centre Street; Family Court at 60 Lafayette Street handles custody components."
    },
    "peter-cooper-village": {
      casePattern: "Peter Cooper Village shares Stuy Town's superblock layout and middle-income-community character, and infidelity cases typically follow similar dynamics — but the complex's tighter footprint (between 20th and 23rd Streets east of First Avenue) means subjects more often transit directly into Gramercy Park and NoMad rather than the East Village. Documented conduct commonly occurs in these adjacent neighborhoods.",
      logistics: "Peter Cooper Village surveillance operates the same way as Stuy Town — perimeter-only, with subject identification at the First Avenue and 23rd Street access points. The complex's smaller size means repeat surveillance passes become recognizable faster, and investigators commonly plan a single identification session followed by pursuit surveillance once subject routines are known.",
      venue: "New York County Supreme Court matrimonial filings are handled at 60 Centre Street; custody elements at Family Court, 60 Lafayette Street."
    },
    "bowery": {
      casePattern: "The Bowery's historic transition from Skid Row to a luxury residential and hospitality strip is the defining fact of infidelity cases in this area. The hotel cluster — the Bowery Hotel, Sixty LES, the Standard East Village nearby — drives much of the documented conduct, and the specific arrival-and-departure patterns at these hotels structure most investigation timelines.",
      logistics: "Bowery surveillance works a main-street corridor with heavy vehicle traffic and uneven pedestrian density by block. Lobby observation is the primary work product at the luxury hotels, and investigators coordinate entry-and-exit timing documentation at specific addresses — 335 Bowery for the Bowery Hotel, 190 Bowery for other venues — where the hotel staff has no reason to recognize an investigator over a single-evening operation.",
      venue: "Divorce and custody matters route to New York County Supreme Court and Family Court, at 60 Centre Street and 60 Lafayette Street respectively."
    },
    "nolita": {
      casePattern: "Nolita's small residential footprint and boutique-retail character produce a distinctive infidelity-case pattern: subjects are commonly not residents but visitors from adjacent neighborhoods using Nolita's concentrated restaurant scene along Mulberry, Mott, and Elizabeth Streets as a meeting zone. Documentation frequently covers the cluster of small restaurants between Prince and Houston.",
      logistics: "Nolita surveillance works an extremely compact area where the same investigator cannot work consecutive evenings without recognition risk. The neighborhood's weekend-heavy traffic provides cover then; weekday evenings are thinner and require more careful positioning, commonly using the Elizabeth Street and Mott Street restaurant seating as observation anchors.",
      venue: "Matrimonial matters are filed at New York County Supreme Court, 60 Centre Street; custody matters at Family Court, 60 Lafayette Street."
    },

    // --- Sprint 2d: Upper East Side ---
    "upper-east-side": {
      casePattern: "UES infidelity cases are shaped by the neighborhood's unusually stable residential pattern — many subjects have lived in the same doorman building for a decade or more, and documented conduct commonly occurs within tight geographic constraints they know well: the same three or four restaurants, the private clubs on the Avenues, the hotels around 60th Street. Private-school drop-off routines at schools like Brearley, Spence, and Dalton create predictable morning observation windows.",
      logistics: "UES surveillance contends with the dense doorman-building network where staff routinely recognize unfamiliar foot traffic within a few passes. Investigators work from perimeter positions along Madison and Lexington rather than stationary observation near buildings, and the avenue geometry supports foot-based coverage while making vehicle surveillance largely ineffective east of Lexington.",
      venue: "Matrimonial proceedings — often involving substantial marital estates — are filed at New York County Supreme Court, 60 Centre Street; custody components route to Family Court at 60 Lafayette Street."
    },
    "lenox-hill": {
      casePattern: "Lenox Hill infidelity cases have a distinctive medical-community dimension given the Lenox Hill Hospital campus at 100 East 77th Street. Investigations here commonly involve subjects whose routines are structured by hospital shift patterns, attending-physician schedules, or the medical professional community's after-work venues on Lexington and Third Avenues. The surrounding residential blocks between 70th and 77th are among the UES's densest doorman-building stock.",
      logistics: "Lenox Hill surveillance works a neighborhood with heavy medical-workforce foot traffic creating natural cover around shift-change hours. Investigators exploit these windows for observation around the hospital perimeter and nearby venues, while working doorman-building approaches on surrounding blocks with the same perimeter-only discipline required elsewhere on the UES.",
      venue: "Divorce proceedings are heard at New York County Supreme Court, 60 Centre Street; custody matters at Family Court at 60 Lafayette Street."
    },
    "yorkville": {
      casePattern: "Yorkville infidelity cases reflect the neighborhood's dual character — the dense rental-and-condo stock along Second and Third Avenues between 79th and 96th Streets producing a younger-professional case type, and the townhouse blocks of East 80s producing a more affluent case type. Documentation commonly centers on the restaurant and bar cluster along Second Avenue in the 80s, which functions as the neighborhood's primary evening social zone.",
      logistics: "Yorkville surveillance benefits from substantially more pedestrian density than the doorman-building UES to its south — the Second Avenue bar corridor provides genuine crowd cover, and the Q-train Second Avenue subway extension has increased daytime foot traffic. Stationary observation is more feasible here than in Lenox Hill or Carnegie Hill.",
      venue: "Matrimonial matters route to New York County Supreme Court at 60 Centre Street; Family Court at 60 Lafayette Street handles custody components."
    },
    "carnegie-hill": {
      casePattern: "Carnegie Hill infidelity cases commonly involve subjects in one of Manhattan's most affluent residential communities — the townhouse and pre-war co-op stock between 86th and 96th Streets east of Fifth Avenue. Documented conduct frequently involves the private-club circuit, Museum Mile hotel venues, and the handful of fine-dining restaurants on Madison Avenue that anchor the neighborhood's evening social life.",
      logistics: "Carnegie Hill surveillance is among the most challenging in Manhattan. Foot traffic is thin, doorman and townhouse staff recognize unfamiliar faces immediately, and the Museum Mile tourist flow along Fifth Avenue is the only block-by-block cover available. Investigators commonly work from Madison Avenue vantage points and extremely short rotations.",
      venue: "High-asset matrimonial proceedings are heard at New York County Supreme Court, 60 Centre Street; custody matters at Family Court, 60 Lafayette Street."
    },
    "east-harlem": {
      casePattern: "East Harlem infidelity cases span the neighborhood's broad demographic range — long-tenure families, newer arrivals to the expanding residential construction along the First Avenue and Third Avenue corridors, and the workforce of the Mount Sinai hospital campus at 98th–102nd and Madison. Documented conduct commonly occurs along the 116th Street commercial strip, the Third Avenue corridor, and the venues serving the medical-campus community.",
      logistics: "East Harlem surveillance benefits from genuinely dense pedestrian activity along the main commercial corridors, providing natural cover that's unavailable in the quieter blocks south of 96th. Investigators work the commercial strips rather than the residential interior blocks and use the medical-campus foot traffic for observation around that specific zone.",
      venue: "Manhattan matrimonial matters are heard at New York County Supreme Court, 60 Centre Street; custody at Family Court, 60 Lafayette Street."
    },
    "spanish-harlem": {
      casePattern: "Spanish Harlem infidelity cases commonly involve the Puerto Rican, Dominican, and broader Latino community between 96th and 125th Streets east of Fifth Avenue. Documented conduct frequently centers on the 116th Street and Third Avenue commercial corridors, the concentration of Latin-American restaurants and music venues, and community-specific gathering places. Language-capable coverage is common given neighborhood demographics.",
      logistics: "Spanish Harlem surveillance commonly requires Spanish-capable investigators for effective venue coverage. The neighborhood's main commercial strips along 116th, 125th, and Third Avenue provide substantial natural cover from foot traffic; the interior residential blocks are quieter and more exposed for observation work.",
      venue: "Matrimonial matters route to New York County Supreme Court at 60 Centre Street; custody to Family Court at 60 Lafayette Street."
    },
    "randalls-island": {
      casePattern: "Randalls Island infidelity cases are unusual in Manhattan — the island's almost-entirely-recreational character means there is no residential population and few ongoing relationships to surveil. When cases arise, they typically involve meetings at the island's sports facilities, the festival-event venues, or the isolation the island offers to subjects from elsewhere in the city seeking privacy.",
      logistics: "Randalls Island surveillance contends with near-zero ambient foot traffic outside active event windows. A stationary investigator anywhere on the island is conspicuous, and access roads and pedestrian bridges provide the only realistic observation positions. Most engagements tied to the island are identification-and-follow rather than on-island observation.",
      venue: "Manhattan matrimonial proceedings route to New York County Supreme Court at 60 Centre Street; custody components to Family Court at 60 Lafayette Street."
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
      casePattern: "Flatiron surveillance assignments are distinctive for their concentration around the Fifth Avenue and Broadway convergence at 23rd Street, where the district's signature diagonal street geometry creates unusual visual lines — the Flatiron Building itself sits at an intersection where six streets meet, which investigators use for rare multi-axis observation. Advertising, design, and tech employers occupy most of the loft-office stock, and case types lean toward executive and IP-related matters rather than standard residential surveillance.",
      logistics: "Flatiron District surveillance exploits the district's unusual diagonal street geometry — the Fifth Avenue/Broadway intersection at the Flatiron Building creates sightlines across three streets at once, and Madison Square Park provides natural stationary cover. High daytime density supports foot surveillance; evening coverage is thinner.",
      venue: "Corporate and matrimonial matters are filed at New York County Supreme Court, 60 Centre Street; Family Court at 60 Lafayette Street handles custody."
    },
    "nomad": {
      casePattern: "NoMad surveillance is built around the district's hotel-centric character. Several flagship hotels — the NoMad Hotel, the Ace, the Gansevoort-family properties — function as primary subject venues, and case planning frequently centers on the lobby bar, rooftop, and restaurant patterns of these specific properties. Tech and media employer presence is lighter than adjacent Flatiron; matters here skew more toward hospitality-executive conduct and high-end residential surveillance for the area's condo stock.",
      logistics: "NoMad surveillance centers on the area's major hotel lobbies, bars, and rooftop venues where subject activity concentrates. Investigators work multi-hotel coverage when patterns are unclear, using short walks between venues and the natural density of hotel guest traffic as cover for foot rotation.",
      venue: "Evidence for matrimonial, custody, or civil proceedings is prepared for New York County Supreme Court at 60 Centre Street and Family Court, 60 Lafayette Street."
    },

    // --- Sprint 2b: Downtown Manhattan ---
    "financial-district": {
      casePattern: "Financial District surveillance assignments cover a high concentration of executive, legal, and workers' compensation-related cases, driven by the density of finance, law-firm, and professional-services offices in the precinct. Case types commonly include pre-litigation conduct documentation, fraud-verification work, and matrimonial surveillance for residents of the neighborhood's growing residential stock.",
      logistics: "Financial District surveillance works compressed colonial-era street geometry, heavy pedestrian density during workday hours, and sharp after-hours drop-off. Investigators use three-agent rotations for workday coverage and two-agent for evening work, leveraging the abundance of lobbies, retail, and outdoor cafe seating as stationary observation anchors.",
      venue: "Civil matters proceed through New York County Supreme Court Commercial Division at 60 Centre Street; federal proceedings route to the Daniel Patrick Moynihan U.S. Courthouse at 500 Pearl Street or Thurgood Marshall U.S. Courthouse at 40 Centre Street."
    },
    "tribeca": {
      casePattern: "Tribeca surveillance typically covers affluent residential subjects, creative and media-industry professionals, and corporate executives living in the neighborhood's converted loft stock. Case types include matrimonial surveillance for high-asset divorces, executive-conduct documentation, and due-diligence-related observation for substantial commercial matters.",
      logistics: "Tribeca surveillance works quiet residential streets where stationary observation is exposed, particularly north of Chambers Street. Investigators use Greenwich Street and West Broadway restaurant seating for natural vantage points and coordinate on foot given the neighborhood's walkable geometry and limited vehicle-tailing options.",
      venue: "High-asset matrimonial matters are heard at New York County Supreme Court, 60 Centre Street; civil proceedings route to the same venue's Commercial Division."
    },
    "battery-park-city": {
      casePattern: "Battery Park City surveillance commonly covers finance-industry residents of the waterfront residential complexes and corporate-relocation executives. Case types include matrimonial surveillance, civil litigation support, and workers' compensation fraud investigation where subjects work in the adjacent Financial District.",
      logistics: "Battery Park City surveillance works a master-planned residential environment with few natural cover points. Investigators rely on approach-route coverage via the Hudson waterfront promenade, the World Financial Center complex, and the limited commercial frontage. Vehicle surveillance is generally ineffective within the neighborhood's pedestrian-oriented internal streets.",
      venue: "Civil and matrimonial matters proceed through New York County Supreme Court, 60 Centre Street."
    },
    "water-street": {
      casePattern: "Water Street surveillance assignments cover the financial-services and legal workforce concentrated along the corridor. Case types include employee-conduct documentation, civil litigation support for the area's substantial commercial disputes, and matrimonial work for resident professionals. Workers' compensation cases are also a recurring component.",
      logistics: "Water Street surveillance works a linear corridor with reasonable sightlines and predictable foot traffic tied to office-tower entrances and transit points. Investigators use the Seaport restaurant cluster as an eastern observation anchor and the Battery Park transit points as a southern anchor, coordinating coverage between the two.",
      venue: "Civil proceedings are filed at New York County Supreme Court Commercial Division, 60 Centre Street; federal matters route to 500 Pearl Street."
    },
    "wall-street": {
      casePattern: "Wall Street surveillance assignments are dominated by financial-industry subjects — investment bank, hedge fund, and securities firm employees and executives. Case types include pre-litigation misconduct documentation, regulatory-matter investigation support, and matrimonial cases for finance-industry professionals with substantial marital estates.",
      logistics: "Wall Street surveillance works an intensively secured and pedestrian-restricted core with constant law-enforcement and private-security presence around the NYSE. Investigators rotate agents frequently to avoid recognition, use the Stone Street and William Street cafe clusters as observation anchors, and coordinate vehicle drops at the district's perimeter.",
      venue: "Commercial and securities matters route to New York County Supreme Court, 60 Centre Street, or Thurgood Marshall U.S. Courthouse at 40 Centre Street for federal proceedings."
    },
    "fulton": {
      casePattern: "Fulton surveillance operations concentrate around the Seaport's unique pedestrianized environment — Front Street, Fulton Street, and the Pier 17 complex have no vehicle traffic, which eliminates vehicle-tailing but creates distinctive pedestrian-flow patterns that investigators exploit. Tourist-density variation is extreme between Sunday-afternoon peaks and weekday mornings, and operation timing is planned around these cycles. Hospitality-industry case mix dominates; maritime-and-festival event programming creates one-off high-density coverage needs.",
      logistics: "Fulton surveillance works the heavily pedestrianized Pier 17 and Front Street cluster where tourist density provides natural cover but also high ambient movement that complicates target tracking. Investigators use the restaurant and retail density, and structure coverage around the Seaport's evening entertainment schedules.",
      venue: "Civil and matrimonial proceedings are heard at New York County Supreme Court, 60 Centre Street."
    },
    "civic-center": {
      casePattern: "Civic Center surveillance primarily covers subjects in the legal, court, and municipal-government workforce concentrated around Foley Square. Case types include civil litigation support where legal-industry subjects are parties, pre-disciplinary documentation for attorneys or court personnel, and matrimonial surveillance for resident or working professionals.",
      logistics: "Civic Center surveillance is difficult within the courthouse complex itself given constant security and attorney-to-attorney familiarity. Investigators work the perimeter — Worth Street, Chambers Street, Park Row — and follow subjects to restaurant, residential, and transit destinations outside the immediate court precinct.",
      venue: "Civil and commercial matters are filed at New York County Supreme Court, 60 Centre Street; federal matters route to 500 Pearl Street or 40 Centre Street, both within the same block."
    },
    "two-bridges": {
      casePattern: "Two Bridges surveillance commonly covers residential subjects across the neighborhood's mixed-demographic housing stock along with subjects transiting the area from Chinatown or the Lower East Side. Case types include matrimonial investigations, landlord-tenant dispute documentation, and family-court-related residential environment verification.",
      logistics: "Two Bridges surveillance works a geographically constrained environment bounded by the river and the two bridge approaches. Low foot traffic makes stationary observation exposed; investigators typically work approach-point coverage and short rotations with emphasis on East Broadway and the adjacent Chinatown transit points.",
      venue: "Civil and family-law proceedings are heard at New York County Supreme Court, 60 Centre Street, and Family Court, 60 Lafayette Street."
    },
    "chinatown": {
      casePattern: "Chinatown surveillance assignments commonly involve business-dispute, immigration-related, and domestic matters within the Chinese-American community. Case types include commercial fraud documentation for community business disputes, matrimonial surveillance with language-specific venue patterns, and civil litigation support where key evidence involves Chinatown businesses.",
      logistics: "Chinatown surveillance requires language-capable investigator coverage for most substantial engagements. The neighborhood's dense street-level commercial activity supports foot surveillance; however, many relevant venues are in upper floors of multi-use buildings, requiring entry-point rather than interior observation.",
      venue: "Civil and matrimonial matters are handled at New York County Supreme Court, 60 Centre Street; international-commerce components may involve federal court at 500 Pearl Street."
    },
    "little-italy": {
      casePattern: "Little Italy surveillance works a tightly bounded four-block commercial spine along Mulberry Street from Canal to Broome. The restaurant operators and families in this compact area know each other professionally and personally, and agent recognition is the single biggest operational risk — investigators commonly cannot return to the same block within a week. The seasonality of San Gennaro and the summer-long sidewalk-cafe season fundamentally changes what surveillance is possible.",
      logistics: "Little Italy surveillance works a highly compact geography where repeated observation by the same agent risks recognition within days. Investigators rotate frequently, use the high seasonal tourist density for natural cover when in season, and work the adjacent SoHo and Nolita corridors during quieter periods.",
      venue: "Civil and matrimonial proceedings route to New York County Supreme Court, 60 Centre Street."
    },
    "soho": {
      casePattern: "SoHo surveillance assignments cover creative, fashion, media, and art-industry subjects along with affluent residents of the neighborhood's loft stock. Case types include intellectual-property and trade-secret investigations for fashion and creative employers, executive due diligence, and matrimonial work for high-net-worth residents.",
      logistics: "SoHo surveillance works variable foot-traffic density — weekend tourist crowds provide cover but weekday mornings in the residential blocks are exposed. Investigators adapt rotations to the time-of-day pattern, use the area's distinctive cast-iron architecture for vantage-point identification, and coordinate through the dense restaurant and gallery cluster.",
      venue: "Commercial and matrimonial matters are filed at New York County Supreme Court, 60 Centre Street; IP and trade-secret actions may route to federal court at 500 Pearl Street."
    },
    "noho": {
      casePattern: "NoHo surveillance typically covers creative-professional subjects and long-term residential subjects in the compact district between Houston and 8th Streets. Case types include matrimonial investigations, executive due diligence for creative-industry employers, and civil litigation support where evidence involves the area's restaurant and venue scene.",
      logistics: "NoHo surveillance works a small district with limited primary commercial streets; investigators typically cover Broadway, Lafayette Street, and Bowery as the core movement corridors. The adjacent higher-density crowd flows of Greenwich Village, the East Village, and SoHo provide natural transition points for extended coverage.",
      venue: "Civil and family-law matters are heard at New York County Supreme Court, 60 Centre Street, and Family Court, 60 Lafayette Street."
    },

    // --- Sprint 2c: Lower East Side + East Village ---
    "lower-east-side": {
      casePattern: "LES surveillance spans a wide case-type range — the neighborhood's nightlife economy drives hospitality-industry investigation, while the growing residential high-rise stock along Essex and Delancey produces standard domestic and civil-proceeding work. The neighborhood's 24-hour activity profile means operations commonly extend into early-morning hours in ways standard Manhattan surveillance does not.",
      logistics: "LES surveillance's defining operational challenge is the sheer number of venue destinations within a few blocks — a single evening can see a subject visit five or six locations. Investigators plan multi-agent coverage with one mobile and one stationary at predictable destination clusters, and use the neighborhood's pedestrianized weekend streets to maintain extended observation.",
      venue: "Civil and family-law matters proceed through New York County Supreme Court at 60 Centre Street and Family Court at 60 Lafayette Street."
    },
    "east-village": {
      casePattern: "East Village surveillance work is dominated by cases tied to the neighborhood's service-industry and creative-professional residents. Investigations here commonly involve hospitality-industry misconduct for the bar and restaurant operators on First and Second Avenues, matrimonial surveillance, and the civil-litigation-adjacent observation that the neighborhood's landlord-tenant dispute density generates.",
      logistics: "East Village surveillance benefits from consistent street-level density from afternoon through late night, which supports extended foot-based observation. The neighborhood's concentration of bars and restaurants makes hospitality-industry case coordination unusually tight — multi-location operations are common and require careful scheduling.",
      venue: "Manhattan civil and family-law matters are heard at New York County Supreme Court, 60 Centre Street, and Family Court, 60 Lafayette Street."
    },
    "alphabet-city": {
      casePattern: "Alphabet City surveillance work includes a distinctive landlord-tenant-dispute component driven by the neighborhood's ongoing gentrification pressure on rent-stabilized housing. Investigations here commonly document illegal-conversion evidence, harassment patterns, and tenant-fraud matters alongside more standard domestic and civil-litigation surveillance.",
      logistics: "Alphabet City surveillance works quiet residential blocks where agent presence is conspicuous. Investigators generally anchor positions at the Tompkins Square Park perimeter, the Avenue A and Avenue B commercial strips, and work short observation windows rather than sustained stationary coverage in the interior residential blocks.",
      venue: "Civil and housing-court matters route to Manhattan Civil Court at 111 Centre Street; broader civil and matrimonial matters to New York County Supreme Court, 60 Centre Street."
    },
    "stuy-town": {
      casePattern: "Stuy Town surveillance is almost entirely residential-perimeter work — matrimonial cases, custody-adjacent observation, and the occasional insurance-fraud matter where a resident's claimed disability conflicts with observed conduct. The private-superblock character of the complex means most documented conduct occurs outside Stuy Town itself, in adjacent neighborhoods where subjects move after exiting the gates.",
      logistics: "Stuy Town surveillance operates exclusively at the complex's perimeter — the gates at First Avenue, 14th Street, and 23rd Street are the only subject-identification points. Investigators station at these access points for identification, then follow subjects into whichever adjacent neighborhood they enter. Interior observation is essentially ruled out by the community's security profile.",
      venue: "Civil and matrimonial matters are filed at New York County Supreme Court, 60 Centre Street."
    },
    "peter-cooper-village": {
      casePattern: "Peter Cooper Village surveillance follows the same perimeter-work pattern as Stuy Town but with a tighter footprint — only three main access points rather than Stuy Town's larger set. Case types include matrimonial, residential-environment documentation for family-law proceedings, and community-association-adjacent investigation where the building's management becomes involved in resident disputes.",
      logistics: "Peter Cooper Village surveillance works the three main gate access points on 20th, 23rd, and First Avenue. Interior work is harder here than at Stuy Town due to the smaller size — an agent visible inside the complex is quickly noticed by residents. Operations are concentrated at identification-and-follow rather than extended on-site observation.",
      venue: "Matrimonial and civil matters are heard at New York County Supreme Court, 60 Centre Street."
    },
    "bowery": {
      casePattern: "Bowery surveillance spans the neighborhood's hospitality workforce — hotel staff investigation, restaurant misconduct, and hotel-guest-subject surveillance for both matrimonial and civil matters. The corridor's transformation into a luxury residential and hospitality strip has also driven higher-end domestic investigation volume than existed a decade ago.",
      logistics: "Bowery surveillance works a long linear corridor with unusual vehicle-and-pedestrian mix — the main street carries significant vehicle traffic unusual for Manhattan nightlife districts. Investigators typically station at specific hotel entrances or restaurant destinations and work short rotations given the relatively exposed sidewalk environment.",
      venue: "Civil and matrimonial proceedings route to New York County Supreme Court, 60 Centre Street."
    },
    "nolita": {
      casePattern: "Nolita surveillance work is unusually boutique-dense — the neighborhood's retail and restaurant operators are small-scale, and investigations here commonly involve retail-theft documentation, boutique-employee misconduct, and subject surveillance tied to Nolita's distinctive restaurant scene. Matrimonial surveillance for area residents is a smaller but consistent workstream.",
      logistics: "Nolita surveillance operates in a concentrated four-block commercial area where agent recognition across consecutive days is almost unavoidable. Investigators rotate assignments aggressively, use the seasonal outdoor-dining weeks as natural cover, and commonly stage from adjacent SoHo or Little Italy for team coordination.",
      venue: "Civil and commercial matters are heard at New York County Supreme Court, 60 Centre Street."
    },

    // --- Sprint 2d: Upper East Side ---
    "upper-east-side": {
      casePattern: "UES surveillance assignments are disproportionately weighted toward high-net-worth matrimonial, pre-divorce documentation, and co-op-board-related investigation given the neighborhood's resident demographic. Corporate investigation volume is lower than Midtown East despite the resident C-suite concentration, because most corporate matters are staged from subjects' offices rather than residences.",
      logistics: "UES surveillance is structurally defined by the doorman-building environment. Every residential tower on Park and Fifth Avenues maintains 24-hour staff who notice unfamiliar foot traffic; investigators rely on approach routes from the avenues east and west, use Madison Avenue's restaurant and retail density as observation anchors, and rotate teams aggressively to avoid recognition.",
      venue: "Matrimonial and civil matters are filed at New York County Supreme Court at 60 Centre Street; Family Court at 60 Lafayette Street for custody."
    },
    "lenox-hill": {
      casePattern: "Lenox Hill surveillance commonly includes a medical-professional case component absent from other UES neighborhoods — physician-misconduct investigation coordinated with hospital risk management, workers' compensation fraud involving hospital-employee subjects, and the pre-litigation observation that medical-malpractice matters sometimes require. Standard UES matrimonial and co-op screening work continues alongside.",
      logistics: "Lenox Hill surveillance benefits from the hospital's foot traffic around shift-change hours — 7 am and 7 pm in particular create dense pedestrian flows that provide genuine cover near the 77th Street corridor. Investigators time operations around these windows where possible, and use the restaurant cluster along Second and Third Avenues as observation anchors.",
      venue: "Civil and matrimonial matters proceed through New York County Supreme Court at 60 Centre Street."
    },
    "yorkville": {
      casePattern: "Yorkville surveillance assignments span standard matrimonial and residential-dispute work for the neighborhood's large rental and condo population, along with the hospitality-industry investigation driven by the Second Avenue bar corridor between 79th and 89th. Insurance fraud documentation is a regular workstream given the neighborhood's high rental turnover and associated claims activity.",
      logistics: "Yorkville surveillance operates in the densest UES pedestrian environment — the Q train entrances, Second Avenue's commercial strip, and the 86th Street transit hub all create sustained foot traffic that supports conventional observation. Vehicle surveillance is modestly effective on the east-west cross streets but rarely on the avenues.",
      venue: "Civil and family-law matters are heard at New York County Supreme Court at 60 Centre Street and Family Court at 60 Lafayette Street."
    },
    "carnegie-hill": {
      casePattern: "Carnegie Hill surveillance assignments are almost exclusively matrimonial and residential-dispute work for the neighborhood's ultra-affluent population. Cases commonly involve documentation of conduct at private clubs, Museum Mile benefit events, and the specific Madison Avenue venues where most neighborhood social life occurs. Executive due diligence observation for resident C-suite and financial-industry subjects is a secondary workstream.",
      logistics: "Carnegie Hill surveillance is the most operationally demanding UES subregion. Foot traffic is thin outside Museum Mile tourist hours, townhouse and doorman staff are highly attentive, and investigator rotation must be aggressive to avoid same-day recognition. Operations typically depend on identification during the Museum Mile and Madison Avenue transit windows.",
      venue: "High-asset matrimonial proceedings proceed at New York County Supreme Court, 60 Centre Street."
    },
    "east-harlem": {
      casePattern: "East Harlem surveillance spans a broad case-type range — the growing condominium development along First Avenue in the 110s and 120s produces new matrimonial work, while the long-tenure residential stock produces continuing insurance-fraud, family-court-adjacent, and civil litigation observation. Small-business commercial investigation for the 116th Street and Third Avenue operator community is also a regular component.",
      logistics: "East Harlem surveillance exploits dense pedestrian activity along the main commercial corridors — 116th Street, 125th Street, and Third Avenue all support sustained observation. The residential interior blocks between the commercial strips are quieter and more exposed for stationary work.",
      venue: "Civil and matrimonial matters route to New York County Supreme Court, 60 Centre Street."
    },
    "spanish-harlem": {
      casePattern: "Spanish Harlem surveillance commonly combines matrimonial and domestic work for the neighborhood's residential community with the commercial-investigation matters tied to the 116th Street Latino-American business corridor and community-specific organizations. Language-capable coverage is essential for most substantial engagements.",
      logistics: "Spanish Harlem surveillance requires Spanish-language investigator coverage for effective operation in community-specific venues. The main commercial corridors provide substantial foot traffic for observation work; community-center and church-adjacent observation requires careful handling given the tightly networked nature of the area's community organizations.",
      venue: "Matrimonial and civil matters are filed at New York County Supreme Court, 60 Centre Street."
    },
    "randalls-island": {
      casePattern: "Randalls Island surveillance work is narrow in scope — event-security matters tied to the island's festival and sports-facility programming, occasional insurance-fraud documentation where an injured-claim subject is observed using the island's sports fields, and the specific narrow window of cases tied to the island's youth programming operators. Standalone resident-based case types are essentially absent given there are no residents.",
      logistics: "Randalls Island surveillance is operationally constrained by geography — the island is accessible only via the RFK Triborough Bridge pedestrian walkway or the 103rd Street footbridge, and all foot traffic passes through a small number of access points. Investigators commonly work identification at these access points, then extended observation in the relevant sports-facility or festival area.",
      venue: "Civil and related matters are heard at New York County Supreme Court, 60 Centre Street."
    },
  },

  // ============================================================
  // BACKGROUND CHECKS — Midtown Manhattan (Sprint 2a)
  // ============================================================
  "background-checks": {
    "midtown-east": {
      casePattern: "Midtown East background work serves the corridor's concentration of biglaw, management consulting, and corporate in-house hiring rather than regulated finance per se. Typical engagements include partner-level lateral vetting for the law firms along Park Avenue, board-level appointments for the area's multinational office stock, and candidate screening for the concentrated consulting and professional-services firm presence along Madison.",
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
      casePattern: "Sutton Place background work centers on one of the most concentrated co-op-screening markets in Manhattan. The neighborhood's pre-war white-glove buildings east of First Avenue maintain some of the most demanding application review processes in the city, and investigators frequently work directly with managing agents on financial-verification, employment-continuity, and reputational-review components that go well beyond standard co-op-application screening.",
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
      casePattern: "Gramercy Park background work has a distinctive private-club dimension — the Gramercy Park Hotel (reopened and reconverted), the National Arts Club, the Players, and park-key-holder vetting all drive engagement volume that exists nowhere else in Manhattan. Residential co-op screening for the park-facing buildings is also demanding given the building stock's historic character and the park-key privilege that accompanies some residences.",
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

    // --- Sprint 2b: Downtown Manhattan ---
    "financial-district": {
      casePattern: "Financial District background work spans the full finance-industry hiring funnel, but the precinct's distinct profile is the sheer density of compliance-sensitive roles — broker-dealer registrations, FINRA-regulated positions, and licensed finance professionals requiring Form U4 disclosure verification. Background engagements here routinely pair candidate screening with regulatory-record reconciliation that consumer services cannot perform.",
      logistics: "Financial District background investigations routinely include SEC and FINRA record review, multi-jurisdiction civil-records coverage given finance-industry mobility, and source-interview verification for senior executive candidates. Attorney-client privilege coordination is standard for substantial engagements.",
      venue: "Commercial and employment disputes arising from background findings route to New York County Supreme Court Commercial Division, 60 Centre Street; federal regulatory matters to 500 Pearl Street."
    },
    "tribeca": {
      casePattern: "Tribeca background investigations are shaped by the neighborhood's mix of converted-loft co-ops, new-construction condos, and the distinct screening cultures of each. Co-op boards in the converted historic buildings typically demand more exhaustive financial documentation than comparable condos; celebrity-resident buildings often have additional privacy-and-paparazzi-history review layers. Estate-planning and family-office-adjacent engagements also form a regular workstream given resident demographics.",
      logistics: "Tribeca background checks routinely involve subjects with complex financial histories, multi-entity structures, and significant professional records requiring database work beyond standard consumer-service scope. Discretion is treated as operational requirement given resident profile.",
      venue: "Civil proceedings arising from background findings are filed at New York County Supreme Court, 60 Centre Street."
    },
    "battery-park-city": {
      casePattern: "Battery Park City background investigation work is largely residential — co-op and condo board screening for the waterfront residential towers, tenant verification for the high-rise rental stock, and pre-relationship and employment verification for the finance-industry-heavy resident population.",
      logistics: "Battery Park City background checks follow standard Manhattan residential-screening practice with finance-industry-specific additions for resident candidates — FINRA record review and multi-employer finance-industry history verification are common components.",
      venue: "Civil matters arising from screening decisions route to New York County Supreme Court, 60 Centre Street."
    },
    "water-street": {
      casePattern: "Water Street background investigation work is shaped by the corridor's financial-services and legal-industry workforce — pre-employment screening for finance and law firm hires, pre-deal due diligence for commercial matters, and tenant and residential screening for the Seaport-area residential growth.",
      logistics: "Water Street background investigations routinely include finance-industry-specific regulatory checks (SEC, FINRA), law-firm candidate verification (state bar records, prior-firm reference work), and standard multi-database coverage supplemented with source-interview verification for senior-level subjects.",
      venue: "Commercial and employment disputes are filed at New York County Supreme Court, 60 Centre Street; federal matters route to 500 Pearl Street."
    },
    "wall-street": {
      casePattern: "Wall Street-specific background work concentrates at the highest seniority end — managing director, partner-track, and C-suite finance candidates where pre-deal diligence, reputational risk, and disclosure-obligation review drive the engagement scope. Many matters originate not from HR but from outside counsel handling employment agreements, and the investigator's output commonly feeds directly into counsel's risk memo rather than a hiring decision.",
      logistics: "Wall Street background investigations are typically the most complex in Manhattan — substantial financial records, multi-jurisdiction regulatory histories, trust and entity structures, and often international exposure all require specialist coordination. Engagement turnaround reflects complexity rather than standard ranges.",
      venue: "Commercial disputes arising from background findings route to Commercial Division, 60 Centre Street; federal regulatory matters to 500 Pearl Street."
    },
    "fulton": {
      casePattern: "Fulton background investigation work serves the Seaport-area hospitality operators and the adjacent Financial District overflow. Common engagements include hotel and restaurant management screening, hospitality-industry employee verification for Pier 17 operators, and standard residential tenant screening.",
      logistics: "Fulton background checks for hospitality-industry candidates routinely involve multi-property and multi-state employment histories requiring reference-contact verification across jurisdictions. Standard database and verification work applies otherwise.",
      venue: "Civil and employment matters are heard at New York County Supreme Court, 60 Centre Street."
    },
    "civic-center": {
      casePattern: "Civic Center background investigation work is shaped by the legal and government workforce concentrated in the precinct — attorney candidate screening for law firm hires, paralegal and legal-support verification, and court-personnel-adjacent vetting. Residential tenant screening also occurs for the neighborhood's limited residential stock.",
      logistics: "Civic Center background investigations routinely include state bar record verification, court-personnel background checks with government-employment-specific considerations, and prior-law-firm reference work. Engagement handling often involves attorney-client privilege coordination.",
      venue: "Civil and employment disputes route to New York County Supreme Court, 60 Centre Street; federal employment matters to 500 Pearl Street."
    },
    "two-bridges": {
      casePattern: "Two Bridges background investigation work is largely residential — landlord and co-op screening for the neighborhood's residential stock, pre-employment checks for small businesses, and relationship-verification engagements. Cross-cultural considerations are regular given the neighborhood's demographic mix.",
      logistics: "Two Bridges background checks typically follow standard residential and small-business screening practice. Language-capable verification resources are drawn on for cases involving Chinese-American community subjects given proximity to Chinatown.",
      venue: "Civil matters are filed at New York County Supreme Court, 60 Centre Street."
    },
    "chinatown": {
      casePattern: "Chinatown background investigation work commonly involves business-ownership verification for commercial disputes, immigration-related due diligence, and family-structure verification for matrimonial and civil matters. Cross-border records are a regular component of engagement mix.",
      logistics: "Chinatown background investigations routinely require Mandarin, Cantonese, or Taishanese-capable investigator resources and coordination with cross-border records specialists for China, Hong Kong, and Taiwan-based history. Turnaround is typically longer than domestic-only work.",
      venue: "Civil and commercial matters proceed through New York County Supreme Court, 60 Centre Street; international-component matters may involve federal court at 500 Pearl Street."
    },
    "little-italy": {
      casePattern: "Little Italy background investigation work is modest in volume given the neighborhood's small commercial and residential footprint — restaurant-industry employee screening, small-business-ownership verification, and occasional tenant screening make up the core engagement mix.",
      logistics: "Little Italy background checks follow standard Manhattan small-business and residential screening practice. Engagements typically complete within standard turnaround windows without specialist-scope work.",
      venue: "Civil matters route to New York County Supreme Court, 60 Centre Street."
    },
    "soho": {
      casePattern: "SoHo background investigation work serves the fashion, creative-industry, and art-market community — executive screening for fashion and advertising hires, art-market-authenticity and provenance verification as a due-diligence adjacent component, and residential co-op screening for the neighborhood's premium loft stock.",
      logistics: "SoHo background investigations for creative-industry candidates often require non-standard reference verification — freelance employment histories, project-based engagement records, and international-work history. Art-market due diligence is a specialized adjacent workstream.",
      venue: "Commercial and civil matters are heard at New York County Supreme Court, 60 Centre Street; IP and fashion-industry federal matters route to 500 Pearl Street."
    },
    "noho": {
      casePattern: "NoHo background investigation work covers creative-professional employer screening for the area's advertising and media operators, loft-stock co-op screening, and tenant verification for the rental residential stock. Engagement volume is moderate given the compact neighborhood footprint.",
      logistics: "NoHo background checks follow creative-industry and residential screening practice — freelance and project-employment verification for candidates, and standard residential screening for rental and co-op evaluations.",
      venue: "Civil and employment matters are filed at New York County Supreme Court, 60 Centre Street."
    },

    // --- Sprint 2c: Lower East Side + East Village ---
    "lower-east-side": {
      casePattern: "LES background investigation work serves a dual client base: the hospitality-industry operators along the nightlife corridor screening bar, restaurant, and club staff; and the new-construction residential building managers screening tenants for the Essex Crossing, Ludlow, and Orchard high-rise stock. The two workstreams have fundamentally different verification requirements and timelines.",
      logistics: "LES background checks for hospitality candidates commonly involve multi-employer, tips-income histories that consumer-database services cover unevenly. Investigator supplementation through prior-employer interviews and industry-reference verification is standard. Residential tenant-screening follows standard Manhattan rental-market practice.",
      venue: "Civil and commercial disputes arising from background findings route to New York County Supreme Court, 60 Centre Street."
    },
    "east-village": {
      casePattern: "East Village background work is dominated by the neighborhood's long-established restaurant and bar operators — pre-employment screening for front-of-house and kitchen staff across the dense First and Second Avenue hospitality corridor. Small-business owner vetting for the neighborhood's concentrated operator community is also a recurring workstream.",
      logistics: "East Village background checks for hospitality candidates frequently require verification across overlapping employer networks — the neighborhood's operators share staff regularly, and reference-contact verification has to distinguish signal from boilerplate recommendation. Standard database work applies alongside this industry-specific layer.",
      venue: "Employment disputes arising from hiring decisions are heard at New York County Supreme Court, 60 Centre Street."
    },
    "alphabet-city": {
      casePattern: "Alphabet City background investigation work is anchored by landlord screening for the area's rent-stabilized building stock — tenant verification where succession rights, subletting compliance, and long-tenure-occupancy factors are material. Small-business screening for the Avenue A and Avenue B commercial strips is a secondary workstream.",
      logistics: "Alphabet City background checks for tenant matters routinely involve verification of rent-stabilization succession-rights claims — occupancy-duration documentation, family-relationship verification, and primary-residence confirmation that goes beyond standard tenant-screening database work. Engagement turnaround reflects the evidence-gathering complexity.",
      venue: "Housing and civil matters route to Manhattan Civil Court at 111 Centre Street and New York County Supreme Court at 60 Centre Street."
    },
    "stuy-town": {
      casePattern: "Stuy Town background work is dominated by the complex's own tenant-screening requirements for the middle-income apartment inventory. The community's middle-income-community character drives a specific candidate profile with predictable records coverage, and engagements are typically tenant-screening rather than employment-screening focused.",
      logistics: "Stuy Town background checks follow the complex's established screening-package expectations with investigators familiar with the community's requirements. Engagement turnaround is generally standard given the relatively predictable candidate profile.",
      venue: "Civil matters arising from tenant-screening decisions route to New York County Supreme Court, 60 Centre Street."
    },
    "peter-cooper-village": {
      casePattern: "Peter Cooper Village background work aligns closely with Stuy Town's pattern — tenant-screening for the complex's middle-income apartment inventory, with candidate profiles similar to the adjacent larger complex. The smaller footprint means engagement volume is proportionally lower but the work type is nearly identical.",
      logistics: "Peter Cooper Village background checks follow the same screening-package expectations as Stuy Town, with coordination through the complex's management. Engagement handling is standard with no unusual specialist requirements.",
      venue: "Civil matters are heard at New York County Supreme Court, 60 Centre Street."
    },
    "bowery": {
      casePattern: "Bowery background investigation work serves the hotel and luxury-hospitality operators along the corridor — general manager, F&B director, and senior-hospitality hiring for the Bowery Hotel, Sixty LES, and adjacent properties. Residential background work for the corridor's new luxury condo buyers is a secondary but growing workstream.",
      logistics: "Bowery background checks for senior hospitality hiring routinely involve multi-property and multi-brand employment histories that standard databases don't aggregate well. Investigator-conducted reference verification and industry cross-referencing is standard practice. Luxury condo purchaser screening follows standard Manhattan high-end residential screening practice.",
      venue: "Employment and commercial matters route to New York County Supreme Court, 60 Centre Street."
    },
    "nolita": {
      casePattern: "Nolita background work is driven by the neighborhood's concentrated boutique-retail and restaurant operator community — small-business owner vetting, boutique-manager hiring, and partnership-diligence work for the neighborhood's operator ecosystem. Residential tenant screening occurs for the small residential population but is a modest workstream.",
      logistics: "Nolita background checks routinely involve candidates with creative-industry histories — freelance work, project-based employment, multi-brand hospitality careers — that standard screening databases cover unevenly. Investigator supplementation through direct reference verification is standard.",
      venue: "Commercial and employment disputes are heard at New York County Supreme Court, 60 Centre Street."
    },

    // --- Sprint 2d: Upper East Side ---
    "upper-east-side": {
      casePattern: "UES background investigation work is anchored by co-op board screening for the neighborhood's premium pre-war residential stock. Brearley, Spence, Chapin, and Dalton family employment verification — as well as domestic-staff vetting for households employing multiple long-tenure staff — are recurring workstreams. Pre-marital asset-and-background investigation for affluent residents is also a regular engagement type.",
      logistics: "UES background checks routinely involve candidates with multi-entity financial histories, trust structures, international-jurisdiction exposure, and the complex records that consumer-database services cannot aggregate. Investigator-conducted reference verification, SEC and FINRA records review for finance-industry candidates, and direct prior-employer contact are standard.",
      venue: "Civil matters arising from background-based decisions route to New York County Supreme Court at 60 Centre Street."
    },
    "lenox-hill": {
      casePattern: "Lenox Hill background investigation work is heavily shaped by the hospital campus at 77th Street — physician credential verification for Northwell Health hiring, medical-professional license and prior-practice record review, and the healthcare-sector-specific background work that a major Manhattan hospital's workforce requires. Standard UES co-op and residential screening continues alongside.",
      logistics: "Lenox Hill background checks for medical-professional candidates routinely include DEA-registration verification, state medical-license board records across all jurisdictions of prior practice, NPDB (National Practitioner Data Bank) queries where authorized, and hospital-credentialing-committee records. Turnaround varies by credential complexity rather than standard ranges.",
      venue: "Civil and employment disputes are heard at New York County Supreme Court at 60 Centre Street."
    },
    "yorkville": {
      casePattern: "Yorkville background work covers a broader case mix than the wealthier UES neighborhoods to its south — the neighborhood's rental and condo stock drives substantial standard tenant-screening volume, while young-professional tenant demographics produce relatively predictable candidate records. Co-op screening for the pre-war buildings along Park Avenue North is the smaller but higher-complexity workstream.",
      logistics: "Yorkville background checks follow standard Manhattan residential and employment screening practice. The young-professional candidate pool generally returns within standard turnaround windows without the specialist-scope work required for more senior-level UES engagements.",
      venue: "Employment and civil disputes are filed at New York County Supreme Court at 60 Centre Street."
    },
    "carnegie-hill": {
      casePattern: "Carnegie Hill background investigation work is among the highest-complexity in Manhattan — ultra-affluent co-op board screening for the pre-war buildings, multi-generational trust-structure verification, and the domestic-staff vetting that households in this neighborhood commonly require involving multi-year tenure verification, prior-principal reference interviews, and household-specific discretion considerations.",
      logistics: "Carnegie Hill background checks routinely run weeks rather than days given the financial complexity typical of candidate and resident profiles — trust and entity structure verification, international-jurisdiction records, and multi-layer ownership structure review are standard. Discretion is treated as an operational requirement baseline.",
      venue: "Civil matters proceed at New York County Supreme Court at 60 Centre Street; estate-related engagements may involve Surrogate's Court at 31 Chambers Street."
    },
    "east-harlem": {
      casePattern: "East Harlem background investigation work is shaped by the Mount Sinai hospital campus at 98th–102nd and Madison — medical-professional credential verification for hospital hires, healthcare-sector employee screening. The growing residential development along First Avenue generates standard tenant-screening workstream, and small-business owner vetting for the 116th and 125th Street commercial communities rounds out the engagement mix.",
      logistics: "East Harlem background checks for medical-professional candidates tied to Mount Sinai require the same healthcare-sector specialist components as the Lenox Hill campus — DEA registration, state medical-license records, hospital-credential verification. Residential and small-business screening follows standard Manhattan practice.",
      venue: "Civil and employment disputes are heard at New York County Supreme Court at 60 Centre Street."
    },
    "spanish-harlem": {
      casePattern: "Spanish Harlem background work commonly serves the Latino-American small-business community along 116th Street and Third Avenue, community-organization hiring for the neighborhood's substantial nonprofit presence, and standard residential tenant screening. Immigration-related background verification is a recurring specialist component given neighborhood demographics.",
      logistics: "Spanish Harlem background checks routinely require Spanish-capable investigator reference-contact work, and cross-border records verification (Puerto Rico, Dominican Republic, Mexico) for candidates with pre-U.S. work histories. Community-organization hiring screening follows standard nonprofit-sector practice.",
      venue: "Civil matters are filed at New York County Supreme Court at 60 Centre Street."
    },
    "randalls-island": {
      casePattern: "Randalls Island background investigation work is narrow — Parks Department and NYC Department of Health contractor screening for the island's facilities, event-staff and volunteer vetting for the major festival and sports programming, and youth-program employee screening where children's activities are involved. Residential screening is absent given there is no residential population.",
      logistics: "Randalls Island background checks for youth-program and children's-activity staff follow the heightened-scrutiny standards that any children's-facility hiring requires — criminal-records checks across all jurisdictions, sex-offender registry verification, and prior-employer verification specifically on child-safety incidents. Engagement handling reflects these elevated standards.",
      venue: "Civil matters arising from screening-related disputes are heard at New York County Supreme Court at 60 Centre Street."
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
      venue: "Commercial matters proceed through the Commercial Division at 60 Centre Street; federal litigation routes to 500 Pearl Street or the Thurgood Marshall Courthouse at 40 Centre Street."
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

    // --- Sprint 2b: Downtown Manhattan ---
    "financial-district": {
      casePattern: "Financial District corporate investigation work is at the core of Manhattan's commercial-investigation market — intellectual-property theft ahead of analyst and trader moves, insider-trading-adjacent misconduct investigations, pre-deal executive diligence, vendor-kickback schemes at banks and funds, and regulatory-exposure investigation ahead of SEC or FINRA inquiry.",
      logistics: "Financial District corporate investigations typically run under attorney-client privilege through outside counsel. Work combines electronic-evidence preservation (commonly at extraordinary technical complexity), targeted surveillance, forensic accounting coordination, and regulated-records review under careful legal framework.",
      venue: "Commercial matters proceed through New York County Supreme Court Commercial Division, 60 Centre Street; federal proceedings (SEC civil, criminal) route to Daniel Patrick Moynihan U.S. Courthouse, 500 Pearl Street."
    },
    "tribeca": {
      casePattern: "Tribeca corporate investigations commonly serve creative-industry, finance, and law firm clients in the neighborhood — executive-misconduct investigations for senior hires, fiduciary-breach investigations in fund and partnership structures, and media-industry IP and contract enforcement matters.",
      logistics: "Tribeca corporate investigations routinely involve senior-level subjects requiring the highest discretion standards and often complex multi-entity structures for forensic-accounting coordination. Surveillance components leverage the neighborhood's restaurant and private-club venue profile.",
      venue: "Commercial matters are filed at 60 Centre Street; IP and media-industry federal matters proceed at 500 Pearl Street."
    },
    "battery-park-city": {
      casePattern: "Battery Park City corporate investigation work is relatively modest given the predominantly residential character. When it occurs, engagements typically involve finance-industry resident subjects in matters that extend from Financial District employers or substantial civil-litigation-related surveillance work.",
      logistics: "Battery Park City corporate investigations generally run as extensions of adjacent Financial District work. Surveillance components in the residential environment contend with master-planned limited-cover geography and typically focus on approach routes rather than interior coverage.",
      venue: "Commercial matters route to New York County Supreme Court Commercial Division, 60 Centre Street; federal matters to 500 Pearl Street."
    },
    "water-street": {
      casePattern: "Water Street corporate investigation work serves the finance, legal, and hospitality-industry tenant mix along the corridor — employee-misconduct investigation, workers' compensation fraud documentation, hospitality-industry vendor-kickback investigation for the Seaport operators, and executive-level misconduct for corporate tenants.",
      logistics: "Water Street corporate investigations combine standard corporate-investigation protocols with the corridor's dense office-tower workforce. Surveillance components use Seaport-cluster venues as observation anchors and leverage the predictable foot-traffic geometry of the linear corridor.",
      venue: "Commercial matters proceed through the Commercial Division, 60 Centre Street; federal actions route to 500 Pearl Street."
    },
    "wall-street": {
      casePattern: "Wall Street corporate investigation work is the most complex in Manhattan — the precinct generates insider-trading-adjacent investigations, hedge fund manager misconduct matters, investment-bank employee departures with proprietary information, and substantial commercial fraud cases frequently intersecting federal regulatory jurisdiction.",
      logistics: "Wall Street corporate investigations routinely run under attorney-client privilege, combining substantial electronic-evidence preservation, specialized forensic accounting, regulatory-adjacent records review, and surveillance carefully planned around the precinct's intensive security environment. Engagement complexity frequently exceeds standard commercial-investigation scope.",
      venue: "Commercial matters proceed through Commercial Division, 60 Centre Street; securities and criminal-adjacent federal matters route to 500 Pearl Street or Thurgood Marshall U.S. Courthouse at 40 Centre Street."
    },
    "fulton": {
      casePattern: "Fulton corporate investigation work is dominated by hospitality-industry matters at the Seaport — Pier 17 operator employee-theft and cash-handling schemes, vendor-kickback investigations, hotel and restaurant management misconduct. Entertainment-venue fraud investigations also occur given the Seaport's concert and event programming.",
      logistics: "Fulton corporate investigations combine point-of-sale data review, covert staff-behavior observation, and vendor-relationship mapping across the Seaport's operator ecosystem. Multi-property coordination is common given most operators run multiple venues across the cluster.",
      venue: "Commercial matters proceed through New York County Supreme Court Commercial Division, 60 Centre Street."
    },
    "civic-center": {
      casePattern: "Civic Center corporate investigation work commonly serves law firms in the precinct as attorney-client-privileged engagements supporting their own matters — investigator-as-extension-of-counsel work, witness-development investigation, and litigation-strategy surveillance. Municipal-employment-related investigations also occur but with significant jurisdictional complexity.",
      logistics: "Civic Center corporate investigations run almost exclusively under attorney-client privilege with counsel located steps from the engagement site. Operational coordination is unusually tight given proximity and engagement turnaround often compressed to match litigation schedules.",
      venue: "Commercial matters are filed at 60 Centre Street; federal and regulatory matters route to 500 Pearl Street or 40 Centre Street within the same complex."
    },
    "two-bridges": {
      casePattern: "Two Bridges corporate investigation work is limited given the predominantly residential character. Engagements typically extend from adjacent Chinatown commercial matters or involve residential property-management disputes tied to the neighborhood's large rental buildings.",
      logistics: "Two Bridges corporate investigations generally run as extensions of adjacent Chinatown, Lower East Side, or Financial District engagement logistics. Standalone Two-Bridges-based commercial matters are uncommon.",
      venue: "Commercial matters route to New York County Supreme Court, 60 Centre Street."
    },
    "chinatown": {
      casePattern: "Chinatown corporate investigations commonly involve cross-border business disputes with Chinese counterparties, community-business partnership fraud, and immigration-adjacent commercial matters. Import-export fraud, counterfeit-goods trade investigation, and cross-border asset-flight cases are recurring engagement types.",
      logistics: "Chinatown corporate investigations routinely require Mandarin, Cantonese, or Taishanese-capable investigator coverage and coordination with China-based records specialists. Cross-border evidence gathering is the rule rather than exception; engagement timelines reflect the cross-jurisdictional complexity.",
      venue: "Commercial matters are heard at New York County Supreme Court, 60 Centre Street; international-commerce federal matters route to 500 Pearl Street."
    },
    "little-italy": {
      casePattern: "Little Italy corporate investigation work concentrates on the restaurant-industry cluster — employee-theft, vendor-kickback schemes, and occasional operator-partnership disputes across the Mulberry Street and adjacent restaurant footprint. Engagement volume is modest given the compact commercial footprint.",
      logistics: "Little Italy corporate investigations work a small operator community where agent recognition is a particular risk; investigators rotate frequently, use cross-operator reference to avoid duplicate assignment footprints, and coordinate through adjacent Nolita and SoHo for team staging.",
      venue: "Commercial matters are filed at 60 Centre Street."
    },
    "soho": {
      casePattern: "SoHo corporate investigations commonly serve fashion, advertising, and art-market clients — counterfeit-goods investigation, fashion-industry IP and trade-secret matters, art-market authenticity and provenance investigation, and executive misconduct for creative-industry employers. The art-market workstream is particularly specialized.",
      logistics: "SoHo corporate investigations routinely require industry-specific specialist resources — art-market forensic specialists, fashion-industry investigation expertise, and electronic-evidence work for the area's tech-adjacent creative-industry tenants. Standard commercial-investigation methods are supplemented with these sector-specific components.",
      venue: "Commercial matters proceed through Commercial Division, 60 Centre Street; IP and counterfeit-goods federal matters route to 500 Pearl Street."
    },
    "noho": {
      casePattern: "NoHo corporate investigation work serves the area's advertising, media, and creative-professional employers — executive-conduct documentation, trade-secret and client-list misappropriation ahead of employee departures, and partnership disputes in creative-industry firms. Engagement profile overlaps significantly with adjacent SoHo.",
      logistics: "NoHo corporate investigations commonly involve creative-industry-specific considerations — project-based employment complicates electronic-evidence scope, and industry inter-relationships mean careful conflicts-of-interest screening is needed before engagement.",
      venue: "Commercial matters are filed at New York County Supreme Court, 60 Centre Street."
    },

    // --- Sprint 2c: Lower East Side + East Village ---
    "lower-east-side": {
      casePattern: "LES corporate investigation work concentrates on hospitality-industry matters for the nightlife-corridor operators — employee-theft schemes, cash-handling fraud, and vendor-kickback arrangements across the bar, restaurant, and club ecosystem. The neighborhood's operator concentration means cross-location investigation is a regular engagement feature.",
      logistics: "LES corporate investigations commonly require coordinated surveillance across multiple related venues operated by the same parent group, with point-of-sale data review, covert staff-conduct observation, and vendor-relationship mapping. Evening and late-night operations are routine given the industry's business hours.",
      venue: "Commercial matters are filed at New York County Supreme Court Commercial Division, 60 Centre Street."
    },
    "east-village": {
      casePattern: "East Village corporate investigation work serves the bar and restaurant operators along First and Second Avenues — cash-handling and employee-theft investigations, vendor-kickback schemes, and the liquor-license-compliance-adjacent investigation that some operator disputes require. Small-business partnership disputes are also a regular workstream.",
      logistics: "East Village corporate investigations contend with the tight-knit character of the neighborhood's operator community — many operators know each other and their staff overlap across venues, which shapes investigation-design to minimize cross-venue information leakage. Standard commercial-investigation methods apply alongside this relational-sensitivity component.",
      venue: "Commercial matters proceed through the Commercial Division, 60 Centre Street."
    },
    "alphabet-city": {
      casePattern: "Alphabet City corporate investigation work is specifically shaped by the landlord-tenant commercial dispute patterns common in the neighborhood — illegal-conversion documentation, tenant-fraud investigation for landlord clients, harassment-documentation work for tenant-side counsel. Small-business operator disputes along the commercial strips form a secondary workstream.",
      logistics: "Alphabet City corporate investigations for housing-court matters require specialized surveillance and documentation approaches — evidence has to meet housing-court evidentiary standards, which differ in some respects from general civil-court requirements. Investigator familiarity with these standards is material to case outcome.",
      venue: "Housing-court matters route to Manhattan Housing Court at 111 Centre Street; broader commercial matters to New York County Supreme Court Commercial Division, 60 Centre Street."
    },
    "stuy-town": {
      casePattern: "Stuy Town corporate investigation work is limited given the predominantly residential character of the complex. When it occurs, engagements commonly involve the complex's own management disputes, vendor-relationship investigation for the community's service providers, and occasional resident-employer-level commercial matters that happen to overlap with the complex.",
      logistics: "Stuy Town corporate investigations generally run as standard commercial-investigation engagements without specific Stuy Town-related operational considerations. Investigation work is typically conducted off-site with only tangential reference to the complex itself.",
      venue: "Commercial matters are filed at New York County Supreme Court Commercial Division, 60 Centre Street."
    },
    "peter-cooper-village": {
      casePattern: "Peter Cooper Village corporate investigations, when they occur, most often involve disputes internal to the complex's own property-management structure — vendor-contract matters, building-staff misconduct allegations, and the construction-defect and renovation-related investigation that a complex of this age routinely generates. Independent operator or tenant-business engagements are rare given the residential-only zoning.",
      logistics: "Peter Cooper Village corporate investigations run as standard commercial-investigation engagements. Community-specific operational considerations are minimal given most work is conducted off-site from the complex itself.",
      venue: "Commercial matters proceed through the Commercial Division at 60 Centre Street."
    },
    "bowery": {
      casePattern: "Bowery corporate investigation work is concentrated on the hotel and hospitality operators along the corridor — hotel-management misconduct, hospitality-vendor investigation, and the employee-fraud matters that hotel F&B operations consistently generate. Restaurant-operator commercial disputes are also a regular workstream given the corridor's restaurant density.",
      logistics: "Bowery corporate investigations for hotel matters commonly involve the full range of hospitality-industry operational concerns — union considerations, guest-privacy constraints, brand-reputation sensitivities, and cross-property evidence patterns. Multi-property investigator coordination is standard for brand-level engagements.",
      venue: "Commercial matters are heard at New York County Supreme Court Commercial Division, 60 Centre Street."
    },
    "nolita": {
      casePattern: "Nolita corporate investigation work is driven by the neighborhood's boutique-retail and restaurant operator community — counterfeit-goods investigation for the fashion boutiques, partnership-dispute work for operator partnerships, and retail-theft and employee-misconduct documentation. The scale is boutique — engagements are typically smaller than SoHo or Tribeca corporate work.",
      logistics: "Nolita corporate investigations work an operator community where everyone knows everyone — confidentiality is an operational challenge at the neighborhood-relationship level, not just within the specific investigation. Engagement discretion is treated as a primary operational requirement.",
      venue: "Commercial matters are filed at New York County Supreme Court Commercial Division, 60 Centre Street."
    },

    // --- Sprint 2d: Upper East Side ---
    "upper-east-side": {
      casePattern: "UES corporate investigation work commonly involves resident C-suite and financial-industry subjects whose professional matters spill into their residential neighborhood — executive due diligence for substantial commercial transactions, family-office governance matters, and the fiduciary-breach investigation that complex personal-financial structures generate. Independent UES-based enterprise investigations are rare given the residential-only character.",
      logistics: "UES corporate investigations typically run under attorney-client privilege through Midtown and Downtown law firms, with the UES component limited to residential-address observation, domestic-staff interview work where relevant, and the social-venue documentation that family-office and estate matters sometimes require. Standard surveillance discretion applies given the doorman-building environment.",
      venue: "Commercial matters proceed at New York County Supreme Court Commercial Division at 60 Centre Street; estate-adjacent matters to Surrogate's Court at 31 Chambers Street."
    },
    "lenox-hill": {
      casePattern: "Lenox Hill corporate investigation work is dominated by the medical-industry matters surrounding the hospital campus — healthcare-billing fraud investigation, physician-group governance disputes, vendor-kickback schemes for medical-supply and pharmaceutical engagements, and the whistleblower-adjacent investigation that healthcare compliance regularly generates. Standard UES commercial work continues alongside but is a smaller component.",
      logistics: "Lenox Hill corporate investigations for healthcare matters routinely require healthcare-industry specialist coordination — medical-billing record review, credentialing-database access, and HIPAA-compliant investigation protocols. Many matters involve both state and federal regulatory considerations, and engagement scope reflects the regulated-industry complexity.",
      venue: "Healthcare and commercial matters proceed at New York County Supreme Court Commercial Division at 60 Centre Street; federal matters including False Claims Act cases at 500 Pearl Street."
    },
    "yorkville": {
      casePattern: "Yorkville corporate investigation work has a distinctive commercial-real-estate component driven by the Second Avenue subway extension — property-value disputes, development-adjacent commercial matters, and the operator-turnover in the Second Avenue bar and restaurant corridor between 79th and 89th Streets. Residential-building management and governance matters for the neighborhood's large rental stock are a secondary workstream.",
      logistics: "Yorkville corporate investigations follow standard small-scale commercial practice. Work typically combines financial-records review, reference-interview protocols, and targeted surveillance without the multi-agent operational footprint of larger Midtown engagements.",
      venue: "Commercial matters route to New York County Supreme Court at 60 Centre Street."
    },
    "carnegie-hill": {
      casePattern: "Carnegie Hill corporate investigation work concentrates on the family-office, trust, and private-wealth engagements characteristic of the neighborhood's ultra-affluent resident population — family-office governance investigation, fiduciary-breach matters in multi-generation trust structures, and executive-misconduct matters at the highest end of financial-industry hiring. Estate-adjacent commercial investigation is a recurring workstream.",
      logistics: "Carnegie Hill corporate investigations routinely involve the most complex entity and trust structures in Manhattan investigation work — multi-jurisdiction records, forensic-accounting specialist coordination, and multi-generation document review are standard. Operational discretion is treated as a defining requirement given the privacy expectations of the resident community.",
      venue: "Commercial proceedings are filed at New York County Supreme Court Commercial Division at 60 Centre Street; Surrogate's Court at 31 Chambers Street handles estate-linked matters."
    },
    "east-harlem": {
      casePattern: "East Harlem corporate investigation work is shaped by Mount Sinai's campus and by the small-business operator community along the main commercial corridors. Healthcare-sector investigations similar to the Lenox Hill pattern are a core workstream, and the 116th Street and Third Avenue commercial communities generate operator-dispute and employee-misconduct engagement volume.",
      logistics: "East Harlem corporate investigations for Mount Sinai-related matters follow the same healthcare-industry specialist pattern as Lenox Hill. Small-business investigation follows standard Manhattan practice with Spanish-capable coordination where relevant.",
      venue: "Commercial matters are heard at New York County Supreme Court Commercial Division at 60 Centre Street; healthcare-sector federal matters at 500 Pearl Street."
    },
    "spanish-harlem": {
      casePattern: "Spanish Harlem corporate investigation work serves the neighborhood's Latino-American small-business community and the substantial nonprofit and community-organization ecosystem. Engagements commonly include small-business partnership disputes, nonprofit-governance matters, and the occasional cross-border commercial investigation tied to the neighborhood's strong links to Puerto Rico and the Dominican Republic.",
      logistics: "Spanish Harlem corporate investigations routinely require Spanish-capable investigator coverage and coordination with specialists familiar with cross-border commercial records. Nonprofit-governance matters follow NY-Attorney-General-regulated-entity standards and engagement scope reflects that regulatory framework.",
      venue: "Commercial matters proceed at New York County Supreme Court at 60 Centre Street."
    },
    "randalls-island": {
      casePattern: "Randalls Island corporate investigation work is limited to the Parks Department and NYC-contractor relationships tied to the island's facilities — facility-contract-management investigation, event-operator-dispute work, and the sponsorship-and-partnership due diligence that major island events require. Matters involving city-government contract counterparties have specific regulatory considerations.",
      logistics: "Randalls Island corporate investigations for city-contract matters follow the regulated-entity standards that NYC public contracting requires — transparency, document-retention, and procurement-integrity considerations shape engagement design. Event-operator investigations follow standard commercial practice.",
      venue: "Commercial matters are heard at New York County Supreme Court Commercial Division at 60 Centre Street."
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

    // --- Sprint 2b: Downtown Manhattan ---
    "financial-district": {
      casePattern: "Financial District asset search work is dominated by the finance-industry demographic — high-asset divorce proceedings involving investment-banker and hedge-fund executive subjects, judgment-enforcement against substantial commercial counterparties, and pre-deal financial-position assessment for major transactions.",
      logistics: "Financial District asset searches routinely involve multi-entity structures, offshore holdings, fund-of-fund investment positions, and international-jurisdiction exposure. Forensic-accounting coordination is standard; cryptocurrency and alternative-asset tracing is an increasingly common specialist component.",
      venue: "Matrimonial and civil enforcement proceedings are filed at New York County Supreme Court, 60 Centre Street; federal asset-forfeiture matters route to 500 Pearl Street."
    },
    "tribeca": {
      casePattern: "Tribeca asset search work is dominated by high-net-worth matrimonial engagements — substantial-marital-estate divorces involving finance, legal, and creative-industry-wealthy subjects. Judgment-enforcement and family-office-structure diligence are also regular engagement components.",
      logistics: "Tribeca asset searches routinely span multi-jurisdiction holdings, trust structures, and complex investment vehicles. The neighborhood's resident demographic drives engagement-asset complexity above Manhattan baseline, with forensic-accounting and international-asset-tracing coordination standard.",
      venue: "Matrimonial proceedings are heard at New York County Supreme Court, 60 Centre Street; estate-related matters route to Surrogate's Court, 31 Chambers Street."
    },
    "battery-park-city": {
      casePattern: "Battery Park City asset search work is largely residential — matrimonial proceedings for finance-industry residents, judgment-enforcement engagements from adjacent Financial District commercial matters, and pre-relationship and pre-marital asset verification for the finance-industry resident population.",
      logistics: "Battery Park City asset searches for finance-industry subjects routinely include investment-vehicle holdings, regulated-account positions, and multi-jurisdiction exposure characteristic of finance-industry compensation structures. Cryptocurrency positions are an increasingly regular component.",
      venue: "Matrimonial and civil matters are filed at New York County Supreme Court, 60 Centre Street."
    },
    "water-street": {
      casePattern: "Water Street asset search work serves the financial-services and legal-industry resident and working population along the corridor. Common engagements include matrimonial asset investigation, commercial judgment-enforcement, and counterparty financial-position assessment for commercial disputes.",
      logistics: "Water Street asset searches routinely cover finance-industry-specific holdings — restricted stock, regulated accounts, fund positions — along with standard real-estate and financial-instrument work. Specialist coordination is common for substantial engagements.",
      venue: "Civil and matrimonial matters route to New York County Supreme Court, 60 Centre Street."
    },
    "wall-street": {
      casePattern: "Wall Street asset search work is the highest-complexity in Manhattan — substantial finance-industry matrimonial proceedings, judgment-enforcement against high-value counterparties, and pre-deal counterparty assessment for transactions frequently running into hundreds of millions. Multi-jurisdiction and offshore asset coverage is standard.",
      logistics: "Wall Street asset searches routinely span multiple countries, entity layers, trust structures, and investment vehicle types that consumer-level asset-search services cannot access. Specialist forensic-accounting, international-asset-tracing, and cryptocurrency-tracing resources are drawn on as standard components.",
      venue: "Matrimonial and civil matters are filed at New York County Supreme Court, 60 Centre Street; federal asset-forfeiture actions route to 500 Pearl Street."
    },
    "fulton": {
      casePattern: "Fulton asset search work commonly serves hospitality-industry commercial matters — Seaport operator-partnership disputes, hotel-management asset investigation, and the adjacent Financial District overflow. Engagement profile combines hospitality-specific and general commercial coverage.",
      logistics: "Fulton asset searches for hospitality-industry matters commonly cover management-agreement positions, royalty interests, and multi-property holdings specific to operator structures. Standard asset-search coverage applies alongside the sector-specific components.",
      venue: "Civil and commercial matters are heard at New York County Supreme Court, 60 Centre Street."
    },
    "civic-center": {
      casePattern: "Civic Center asset search work is relatively modest given the low residential population, but the precinct's law-firm client base drives consistent volume — attorney-client-privileged asset investigation supporting client litigation, judgment-enforcement work, and pre-trial counterparty financial-position assessment.",
      logistics: "Civic Center asset searches run under attorney-client privilege as a matter of course and are typically scoped tightly to match litigation needs. Engagement handling prioritizes rapid turnaround given proximity to active court calendars.",
      venue: "Civil matters are filed at 60 Centre Street, steps from the engagement site."
    },
    "two-bridges": {
      casePattern: "Two Bridges asset search work is primarily residential — matrimonial asset investigation for area residents, judgment-enforcement related to local commercial disputes, and landlord-tenant asset verification for the large rental-building stock. Engagement asset complexity is typically modest.",
      logistics: "Two Bridges asset searches follow standard residential-asset-investigation practice. Language-capable verification resources are drawn on for cases involving Chinese-American community subjects given proximity to Chinatown.",
      venue: "Civil and matrimonial matters route to New York County Supreme Court, 60 Centre Street."
    },
    "chinatown": {
      casePattern: "Chinatown asset search work is heavily international — matrimonial and commercial engagements where one or both subjects have substantial China, Hong Kong, or Taiwan-based assets. Small-business ownership verification, real-estate holdings in both U.S. and Asia-Pacific jurisdictions, and cross-border banking relationships are regular engagement components.",
      logistics: "Chinatown asset searches routinely require cross-border asset-tracing specialists, language-capable investigator resources, and coordination with international records specialists for China, Hong Kong, Taiwan, and related jurisdictions. Engagement timelines typically span weeks for substantial matters.",
      venue: "Domestic filings route to New York County Supreme Court, 60 Centre Street; federal matters involving international components proceed at 500 Pearl Street."
    },
    "little-italy": {
      casePattern: "Little Italy asset search work is modest in volume — primarily restaurant-industry commercial disputes, small-business partnership matters, and occasional matrimonial engagements for area residents. Engagement asset complexity is typically modest.",
      logistics: "Little Italy asset searches follow standard small-business and residential asset-investigation practice. Engagements typically complete within standard turnaround windows.",
      venue: "Civil and matrimonial matters route to New York County Supreme Court, 60 Centre Street."
    },
    "soho": {
      casePattern: "SoHo asset search work commonly serves the fashion, creative-industry, and art-market community — art-and-collectibles asset valuation, intellectual-property portfolio assessment, matrimonial asset investigation for high-net-worth creative-industry residents, and judgment-enforcement engagements.",
      logistics: "SoHo asset searches routinely require art-and-collectibles valuation specialist coordination, intellectual-property portfolio assessment expertise, and standard financial-instrument and real-estate coverage. Art-market authenticity and provenance verification sometimes forms a related parallel workstream.",
      venue: "Matrimonial and civil matters are filed at New York County Supreme Court, 60 Centre Street; estate-linked art and collectibles matters may route to Surrogate's Court, 31 Chambers Street."
    },
    "noho": {
      casePattern: "NoHo asset search work serves the creative-professional resident and working population — matrimonial asset investigation, pre-deal diligence for creative-industry transactions, and judgment-enforcement engagements. Creative-industry income streams (royalties, project-equity) are a regular specialist component.",
      logistics: "NoHo asset searches for creative-industry subjects routinely include royalty-stream and project-equity investigation beyond standard asset-search scope, requiring industry-familiar specialist coordination. Standard coverage applies otherwise.",
      venue: "Civil and matrimonial matters are heard at New York County Supreme Court, 60 Centre Street."
    },

    // --- Sprint 2c: Lower East Side + East Village ---
    "lower-east-side": {
      casePattern: "LES asset search work is shaped by the wealth transition the neighborhood has undergone — matrimonial engagements commonly involve one or both parties with substantial newly-acquired real estate or business assets tied to the neighborhood's nightlife-economy boom. Judgment-enforcement work for commercial creditors against hospitality operators is also a regular engagement type.",
      logistics: "LES asset searches for nightlife-operator subjects commonly require liquor-license-holder records review, point-of-sale-data-derived revenue verification, and multi-venue ownership-structure mapping. Standard real-estate and financial-account coverage applies alongside these industry-specific components.",
      venue: "Matrimonial and civil matters route to New York County Supreme Court, 60 Centre Street."
    },
    "east-village": {
      casePattern: "East Village asset search work commonly serves small-business commercial disputes and matrimonial engagements for the neighborhood's long-tenure resident community. Restaurant and bar operator ownership-structure verification is a recurring engagement component given the concentration of hospitality businesses.",
      logistics: "East Village asset searches for hospitality-operator subjects require liquor-license-holder verification, hospitality-LLC ownership-structure review, and multi-venue asset mapping. Residential-asset work follows standard Manhattan practice with no unusual complexity.",
      venue: "Civil and matrimonial matters are heard at New York County Supreme Court, 60 Centre Street."
    },
    "alphabet-city": {
      casePattern: "Alphabet City asset search work has a distinctive housing-court-related component — cases where landlord or tenant parties need asset verification tied to housing-court litigation over rent-stabilized units, succession rights, or harassment claims. Standard matrimonial and civil asset investigation occurs for the neighborhood's residential population alongside this.",
      logistics: "Alphabet City asset searches for housing-court matters follow a narrower evidentiary scope than general civil asset investigation — the specific financial-position elements the housing court considers drive engagement design. Standard civil asset-search coverage applies for broader engagements.",
      venue: "Housing matters proceed at Manhattan Housing Court at 111 Centre Street; civil and matrimonial matters at New York County Supreme Court, 60 Centre Street."
    },
    "stuy-town": {
      casePattern: "Stuy Town asset search work is primarily matrimonial for the complex's resident community — middle-income family divorce engagements with relatively standard asset profiles (primary residence, retirement accounts, standard investment vehicles). Judgment-enforcement engagements occur but are modest in complexity.",
      logistics: "Stuy Town asset searches follow standard middle-income residential practice. Engagements typically complete within standard turnaround windows without specialist-scope components.",
      venue: "Civil and matrimonial matters route to New York County Supreme Court, 60 Centre Street."
    },
    "peter-cooper-village": {
      casePattern: "Peter Cooper Village asset search work aligns with Stuy Town's pattern — matrimonial engagements for the complex's resident community with relatively standard asset profiles. Engagement volume is proportionally lower given the smaller community size but the work type is nearly identical.",
      logistics: "Peter Cooper Village asset searches follow standard middle-income residential practice with no unusual specialist requirements.",
      venue: "Civil and matrimonial matters are filed at New York County Supreme Court, 60 Centre Street."
    },
    "bowery": {
      casePattern: "Bowery asset search work frequently involves higher-asset matrimonial engagements for the corridor's luxury-condo residents, along with commercial asset investigation tied to the hotel and hospitality operators. Hotel-brand ownership-structure diligence is a specialist workstream given the corridor's hospitality concentration.",
      logistics: "Bowery asset searches for hotel-related matters require hospitality-industry specific verification — management-agreement positions, royalty-interest verification, and brand-and-franchise ownership structures. Standard residential asset-search coverage applies for condo-resident matrimonial engagements.",
      venue: "Matrimonial and civil matters are heard at New York County Supreme Court, 60 Centre Street."
    },
    "nolita": {
      casePattern: "Nolita asset search work is a mix of small-business commercial matters — partnership disputes, judgment enforcement against operators — and matrimonial engagements for the neighborhood's affluent residential population. Intellectual-property and fashion-brand asset verification is a recurring specialist component for boutique-operator matters.",
      logistics: "Nolita asset searches for boutique-operator subjects commonly include IP-portfolio verification, fashion-brand-licensing position review, and multi-brand operator ownership mapping. Standard asset-search coverage applies alongside these industry-specific components.",
      venue: "Commercial and matrimonial matters route to New York County Supreme Court, 60 Centre Street."
    },

    // --- Sprint 2d: Upper East Side ---
    "upper-east-side": {
      casePattern: "UES asset search work is among the highest-value in Manhattan — substantial-marital-estate divorce proceedings involving finance, family-office, and inherited-wealth subjects are the dominant engagement type. Trust-structure investigation, multi-jurisdiction holding verification, and the complex entity structures typical of high-net-worth UES residents drive engagement complexity above standard Manhattan scope.",
      logistics: "UES asset searches routinely involve specialist coordination across forensic accounting, international asset tracing, and trust-and-estate-specific investigation. Resident profiles commonly include multi-country holdings, multiple trust and LLC layers, and private-investment positions that require non-public-database investigation methods. Engagement timelines reflect the complexity.",
      venue: "Matrimonial proceedings are filed at New York County Supreme Court at 60 Centre Street; Surrogate's Court at 31 Chambers Street handles estate-adjacent matters."
    },
    "lenox-hill": {
      casePattern: "Lenox Hill asset search work commonly involves medical-professional matrimonial proceedings — physician-practice valuation, medical-partnership equity verification, and the retirement-plan asset structures specific to hospital-employed medical professionals. Standard UES affluent-resident asset investigation continues alongside for the non-medical resident population.",
      logistics: "Lenox Hill asset searches for medical-professional subjects require practice-valuation specialist coordination, medical-partnership equity verification, and hospital-employer retirement-plan-specific investigation that differs from standard retirement-account searches. Healthcare-sector-familiar specialists are drawn on for substantial engagements.",
      venue: "Matrimonial and civil matters route to New York County Supreme Court at 60 Centre Street."
    },
    "yorkville": {
      casePattern: "Yorkville asset search work serves a younger-professional demographic with simpler asset profiles than the Carnegie Hill and Park Avenue blocks to its south — matrimonial engagements for the neighborhood's rental and condo stock commonly complete within standard turnaround windows. Judgment-enforcement work for local commercial matters is a regular secondary workstream.",
      logistics: "Yorkville asset searches for younger-professional subjects typically cover standard real-estate, financial-account, and early-career-equity holdings without the multi-jurisdiction, multi-entity specialist work required in the wealthier UES subregions. Engagement turnaround is generally standard.",
      venue: "Matrimonial and civil matters are heard at New York County Supreme Court at 60 Centre Street."
    },
    "carnegie-hill": {
      casePattern: "Carnegie Hill asset search work is the most operationally demanding in Manhattan investigation practice — multi-generation trust structures, family-office holdings, international-jurisdiction asset positions, and the private-investment vehicle and collectibles inventories characteristic of ultra-affluent residents. Engagements routinely require months of investigation time rather than weeks.",
      logistics: "Carnegie Hill asset searches routinely involve every specialist resource relevant to high-net-worth investigation — forensic accounting, international asset tracing, cryptocurrency tracing, art-and-collectibles valuation, and multi-country records specialists. Trust-and-estate specialist coordination is standard. Engagement confidentiality is a primary operational requirement.",
      venue: "Matrimonial proceedings route to New York County Supreme Court at 60 Centre Street; Surrogate's Court at 31 Chambers Street for estate matters."
    },
    "east-harlem": {
      casePattern: "East Harlem asset search work spans a broad case-type range — matrimonial engagements for the residential population, judgment-enforcement matters for small-business commercial disputes, and the Mount-Sinai-adjacent medical-professional asset investigation that the campus's workforce generates. The growing residential development adds newer-construction real-estate-holding investigation to the mix.",
      logistics: "East Harlem asset searches for most residential matters follow standard Manhattan practice. Medical-professional cases require the same practice-valuation and retirement-plan specialist components as Lenox Hill engagements.",
      venue: "Matrimonial and civil matters route to New York County Supreme Court at 60 Centre Street."
    },
    "spanish-harlem": {
      casePattern: "Spanish Harlem asset search work frequently includes cross-border components tied to Puerto Rico, the Dominican Republic, and related jurisdictions. Matrimonial matters and small-business commercial disputes both commonly involve property and financial holdings in these jurisdictions, and judgment-enforcement work likewise requires cross-border investigation capability.",
      logistics: "Spanish Harlem asset searches routinely require Spanish-capable investigator resources and coordination with Caribbean and Latin American asset-tracing specialists. Puerto Rico's specific legal framework (as a U.S. territory with distinct records systems) is a regular engagement consideration; Dominican Republic records require separate specialist access.",
      venue: "Civil and matrimonial matters are filed at New York County Supreme Court at 60 Centre Street."
    },
    "randalls-island": {
      casePattern: "Randalls Island asset search work is essentially absent as a standalone engagement type given there is no residential population and no independent commercial operator base. Engagements that touch the island are typically adjacent to city-contractor disputes or event-operator matters rather than island-resident-based.",
      logistics: "Randalls Island-adjacent asset searches are conducted through standard commercial-counterparty investigation practice targeting the city-contractor or event-operator entities rather than island-specific investigation.",
      venue: "Civil matters route to New York County Supreme Court at 60 Centre Street."
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
      casePattern: "Hell's Kitchen custody matters are distinctive for the neighborhood's dense mix of rent-stabilized families, market-rate renters, and condo owners — cases commonly involve documentation of stability-of-residence when one parent is in rent-stabilized housing facing succession-rights issues. Proximity to Port Authority and the theatre district also shapes cases with performing-arts-industry parents whose schedules and travel patterns are routinely contested.",
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
      casePattern: "Sutton Place custody cases commonly turn on a narrow and neighborhood-specific set of facts — which co-op board approved which parent's post-separation residence, whether concierge and building-staff testimony is available, and how international travel schedules tied to family-office or financial-industry roles affect parenting time. Investigators coordinate with family-law counsel on which elements are worth documenting given the court's evidentiary focus.",
      logistics: "Sutton Place custody investigations work doorman-building residential environments where observation is challenging and scrutiny of unfamiliar foot traffic is immediate. Investigators rely on approach-route coverage, private-school and activity-venue observation, and multi-day pattern establishment rather than point-in-time documentation.",
      venue: "High-asset custody proceedings are heard at New York County Family Court, 60 Lafayette Street, with substantial-estate implications sometimes routed through Supreme Court matrimonial calendars at 60 Centre Street."
    },
    "tudor-city": {
      casePattern: "Tudor City child custody investigations are relatively uncommon given the enclave's demographic profile but do occur for resident families — standard custody-modification matters, parenting-time compliance, and residential-environment documentation. Engagements typically align with Midtown East-family patterns rather than independent Tudor City-specific approaches.",
      logistics: "Tudor City custody investigations work a small, quiet residential environment where stationary observation is visible. Investigators cover approaches through First Avenue and 42nd Street and follow subjects into the adjacent Midtown East corridor where natural density supports observation.",
      venue: "All Manhattan custody matters proceed through New York County Family Court, 60 Lafayette Street."
    },
    "kips-bay": {
      casePattern: "Kips Bay custody cases are shaped by the medical-campus reality of the neighborhood. Shift-based parenting time — 12-hour hospital rotations, overnight call, weekend coverage obligations — drives many custody modifications, and investigators commonly document compliance with orders structured around specific on-call schedules rather than standard evening-and-weekend parenting time. Healthcare-workforce relocation for fellowship or residency transitions is also a recurring factor.",
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
      casePattern: "NoMad custody cases commonly involve parents working in the district's hotel ecosystem — general managers, F&B directors, hotel executives whose shift patterns and property-to-property mobility shape parenting availability. The residential demographic skews toward high-end condos between Madison and Broadway in the upper 20s, and school assignments frequently pull between Midtown public schools and the private options further north or south.",
      logistics: "NoMad custody investigations work a mixed-use environment where hotel-industry parental schedules and tech-industry patterns both require tailored observation planning. Investigators adapt between residential-area coverage and hotel-adjacent observation based on case specifics.",
      venue: "All Manhattan custody matters are heard at New York County Family Court, 60 Lafayette Street."
    },

    // --- Sprint 2b: Downtown Manhattan ---
    "financial-district": {
      casePattern: "Financial District custody cases commonly turn on the daily reality of the neighborhood's school-drop-off corridors — P.S. 276 in Battery Park City, P.S. 343 The Peck Slip School, and the private Léman Manhattan just west of the district. Investigators document the specific morning and afternoon routines on these routes, alongside the after-school programming (Pier 16, the Seaport's children's programming, park use at The Battery) that defines Downtown family life.",
      logistics: "Financial District custody investigations work around finance-industry schedules — early-morning and late-evening observation is routine given the extended workday of finance-industry parents. Investigators document residential-environment conditions in the area's growing residential stock, nanny and caregiver exposure patterns, and compliance with parenting-time orders.",
      venue: "All Manhattan custody matters are heard at New York County Family Court, 60 Lafayette Street; evidence is prepared to meet the court's admissibility and chain-of-custody standards."
    },
    "tribeca": {
      casePattern: "Tribeca custody matters frequently involve the neighborhood's dense concentration of private pre-K through grade 12 schools, with custody assessments turning on school-pickup reliability, after-school program attendance, and who manages the complex logistics between school, home, and extracurriculars. Nanny-employment documentation is routine given the residential demographic; creative-industry travel schedules and the neighborhood's production-adjacent work patterns also factor in.",
      logistics: "Tribeca custody investigations work the neighborhood's low-traffic residential streets where observation is exposed. Investigators use the restaurant and cafe footprint along Greenwich Street and West Broadway for structuring coverage, and private-school pickup routines as observation anchors.",
      venue: "All Manhattan custody matters proceed through New York County Family Court, 60 Lafayette Street."
    },
    "battery-park-city": {
      casePattern: "Battery Park City custody matters frequently turn on the neighborhood's distinctive residential structure. Most families live in a small number of doorman high-rise complexes between Rector Place and the World Financial Center, and custody assessments often focus on whether the enclosed, amenity-rich environment adequately supports the children's activity needs. Finance-industry work schedules and the school-assignment pull between P.S. 89, the international schools, and private downtown options are also routine factors.",
      logistics: "Battery Park City custody investigations work a master-planned residential environment with limited natural cover. Investigators use waterfront promenade positioning, school-route observation, and the transit-point geometry at the World Financial Center complex as structuring observation elements.",
      venue: "All Manhattan custody matters are heard at New York County Family Court, 60 Lafayette Street."
    },
    "water-street": {
      casePattern: "Water Street custody matters frequently involve the specific residential growth of the past decade — new-construction high-rises between the Seaport and Battery that drew young finance-industry families. Custody assessments commonly turn on building-amenity-space access (playrooms, outdoor decks) as part of parenting environment, and on the public-school-district assignment to P.S. 276 and 89 that shapes school-decision disputes.",
      logistics: "Water Street custody investigations work the linear corridor with observation anchored at transit-point and residential-building entry locations. The Seaport cluster provides end-of-day observation cover; school-route coverage is straightforward given the predictable morning and afternoon foot patterns.",
      venue: "All Manhattan custody matters route to New York County Family Court, 60 Lafayette Street."
    },
    "wall-street": {
      casePattern: "Wall Street custody cases have become more common as the Financial District's residential conversion has progressed — former office towers like 20 Exchange Place now house substantial finance-industry family populations. Custody matters here routinely involve documentation of the extreme work-hour asymmetry between the finance-industry parent and any caregiver arrangements covering the non-working parent's time, with caregiver credentialing and stability commonly contested.",
      logistics: "Wall Street custody investigations work around the intensely scheduled finance-industry workday — early-morning and evening observation windows structure investigation planning. Investigators document residential-environment conditions in the increasingly residential Wall Street corridor and coordinate closely with family-law counsel on evidence scope.",
      venue: "High-asset custody proceedings are heard at New York County Family Court, 60 Lafayette Street."
    },
    "fulton": {
      casePattern: "Fulton custody cases often involve the specific residential-environment contrast of the Seaport district — mixed historic low-rise stock, new high-rise development, and the pedestrianized Front Street corridor. Hospitality-industry parent schedules are common, along with cases where school assignment pulls between the Financial District public schools and downtown private options becomes material. Weekend-custody documentation commonly covers the Seaport's family-facing programming.",
      logistics: "Fulton custody investigations work around hospitality-industry schedules. Investigators document caregiver exposure during parental work hours, residential-environment conditions, and school-route and after-school activity compliance with parenting-time structures.",
      venue: "All Manhattan custody matters are heard at New York County Family Court, 60 Lafayette Street."
    },
    "civic-center": {
      casePattern: "Civic Center child custody investigations are relatively uncommon given the low residential population. When they occur they typically involve resident legal-industry families with proximity familiarity to the Family Court itself. Engagement handling is otherwise standard Manhattan-custody-investigation practice.",
      logistics: "Civic Center custody investigations work a low-traffic residential environment with significant government and court foot traffic providing incidental cover. Most engagements focus on approach-route and school-route documentation rather than neighborhood-interior observation.",
      venue: "Custody matters are filed at New York County Family Court, 60 Lafayette Street, steps from most Civic Center residences."
    },
    "two-bridges": {
      casePattern: "Two Bridges custody matters are shaped by the neighborhood's concentrated Chinese-American and Latino-American demographics and the language-capable coverage that most cases require. Residential-environment documentation frequently covers the public-housing stock between the Manhattan and Brooklyn Bridges, and cases commonly involve multi-generational caregiving arrangements that affect how parenting-time compliance is assessed. Cross-jurisdictional elements are common.",
      logistics: "Two Bridges custody investigations work the neighborhood's geographically constrained environment. Observation coverage focuses on school-route, playground, and residential-entry documentation, with language-capable investigator deployment for culturally specific engagements.",
      venue: "All Manhattan custody matters route to New York County Family Court, 60 Lafayette Street."
    },
    "chinatown": {
      casePattern: "Chinatown child custody investigations commonly involve Chinese-American community families — custody matters with cross-border relocation-proposal elements, extended-family-structure considerations, and the specific residential and cultural-environment factors that shape community custody cases.",
      logistics: "Chinatown custody investigations routinely require Mandarin, Cantonese, or Taishanese-capable investigator coverage. Cross-border custody cases involving Hague Convention considerations are handled with specialist coordination. Standard neighborhood observation applies otherwise.",
      venue: "Domestic custody matters are heard at New York County Family Court, 60 Lafayette Street; international-component cases may involve separate jurisdictional proceedings."
    },
    "little-italy": {
      casePattern: "Little Italy child custody investigations are limited in volume given the small residential population. Cases that occur follow standard Manhattan residential-custody-investigation patterns — residential-environment documentation, caregiver-exposure verification, and parenting-time compliance.",
      logistics: "Little Italy custody investigations work a small, tourist-dense neighborhood where investigator recognition is a particular risk over extended engagements. Rotation discipline and adjacent-neighborhood staging are standard.",
      venue: "All Manhattan custody matters route to New York County Family Court, 60 Lafayette Street."
    },
    "soho": {
      casePattern: "SoHo custody matters are shaped by the neighborhood's loft-housing reality — open-plan residences with few interior walls, which becomes material in cases where the physical environment is contested. Investigators also commonly document the neighborhood's pedestrian environment during school pickup and drop-off, the reliance on taxis and rideshare for after-school transit, and parental conduct in the restaurant-heavy Broadway and West Broadway corridors where many residents spend evenings.",
      logistics: "SoHo custody investigations work the neighborhood's variable foot-traffic density — weekend tourist crowds provide cover but weekday mornings in the residential-loft blocks are exposed. Private-school pickup and drop-off routines are commonly used as observation anchors.",
      venue: "All Manhattan custody matters are heard at New York County Family Court, 60 Lafayette Street."
    },
    "noho": {
      casePattern: "NoHo custody matters are shaped by the district's small-residential-footprint reality. Most families live in a limited number of converted cast-iron loft buildings, which means custody investigations often focus on specific building-level facts — elevator patterns, package-delivery records, doorman logs where buildings maintain them. Creative-industry work with irregular hours is common; the concentrated restaurant cluster along Bowery and Bond Street commonly appears in conduct documentation.",
      logistics: "NoHo custody investigations work a compact district where Broadway, Lafayette, and Bowery form the primary movement corridors. Investigators use these corridors and the adjacent Greenwich Village and East Village foot traffic for coverage staging.",
      venue: "All Manhattan custody matters route to New York County Family Court, 60 Lafayette Street."
    },

    // --- Sprint 2c: Lower East Side + East Village ---
    "lower-east-side": {
      casePattern: "LES custody cases are commonly shaped by the neighborhood's dual character — newer-construction luxury residents and long-tenure rent-stabilized families — producing a broad case-type mix from high-conflict divorce matters to modest-means modification cases. Documentation frequently covers the Seward Park, Hamilton Fish Park, and East River Park play spaces and after-school program attendance.",
      logistics: "LES custody investigations work a neighborhood with a dense public-school network — P.S. 110, P.S. 140, P.S. 134 — and investigators commonly coordinate school-route observation around these specific locations. After-school programming documentation at community centers and parks supplements the school-route work.",
      venue: "All Manhattan custody matters are heard at New York County Family Court, 60 Lafayette Street."
    },
    "east-village": {
      casePattern: "East Village custody matters commonly involve creative-industry and service-industry parent schedules — nonstandard work hours that affect parenting-time reliability, and custody-modification matters tied to the work-pattern asymmetries between co-parents. Documentation frequently covers the Tompkins Square Park area and the dense residential blocks west of Avenue A.",
      logistics: "East Village custody investigations commonly work around public-school pickup and drop-off routines for P.S. 19, P.S. 61, and the nearby Neighborhood School. Investigators document school-route compliance, after-school care arrangements, and residential-environment conditions in the area's mix of walk-up and elevator building stock.",
      venue: "Manhattan custody cases proceed through New York County Family Court, 60 Lafayette Street."
    },
    "alphabet-city": {
      casePattern: "Alphabet City custody cases commonly involve one parent in rent-stabilized housing and one parent in market-rate housing — a specific residential-instability concern when the rent-stabilized party faces succession-rights issues affecting custody-environment stability. Documentation frequently covers Tompkins Square Park and the Avenue B playgrounds.",
      logistics: "Alphabet City custody investigations routinely include residential-stability documentation where rent-stabilization status is contested — occupancy-duration evidence, primary-residence verification — alongside standard custody-matter observation. The neighborhood's public-school network (P.S. 15, P.S. 34) provides standard school-route observation anchors.",
      venue: "Custody matters are heard at New York County Family Court, 60 Lafayette Street; related housing-court matters at 111 Centre Street."
    },
    "stuy-town": {
      casePattern: "Stuy Town custody cases commonly involve the specific residential-environment features of the complex — access to the interior playgrounds and recreation facilities, the community center programming, and the walk-to-school arrangements for the surrounding public schools. Documentation frequently focuses on how effectively each parent utilizes the community's family amenities during their parenting time.",
      logistics: "Stuy Town custody investigations contend with the complex's semi-private character — interior observation is limited by the community's security awareness. Investigators commonly work with cooperative parent-side testimony and documentation of observed patterns from the perimeter streets, supplementing with school-route coverage at the surrounding public schools.",
      venue: "Custody matters are heard at New York County Family Court, 60 Lafayette Street."
    },
    "peter-cooper-village": {
      casePattern: "Peter Cooper Village custody cases are proportionally fewer than Stuy Town's but follow similar patterns — residential-environment documentation focused on the complex's amenities, community-programming participation, and walk-to-school arrangements. The smaller footprint concentrates observation more tightly than in Stuy Town.",
      logistics: "Peter Cooper Village custody investigations work the same perimeter-plus-cooperative-parent-testimony pattern as Stuy Town. Interior observation is particularly limited given the smaller footprint, and investigators commonly rely more heavily on school-route and external-location coverage than in larger complexes.",
      venue: "All Manhattan custody matters are heard at New York County Family Court, 60 Lafayette Street."
    },
    "bowery": {
      casePattern: "Bowery custody cases are a relatively recent development given the corridor's residential transition — most cases involve young families in the luxury condo stock, often with finance-industry, creative-industry, or hospitality-industry parent schedules. Documentation frequently includes the neighborhood's limited public-school options and the private-school decisions that most Bowery families face.",
      logistics: "Bowery custody investigations work a corridor with heavy street-level traffic and limited residential foot-traffic patterns. Investigators commonly rely on building-entry and school-route observation rather than neighborhood-interior coverage, and use the restaurant and retail cluster along the corridor as natural observation anchors.",
      venue: "Manhattan custody matters proceed at New York County Family Court, 60 Lafayette Street."
    },
    "nolita": {
      casePattern: "Nolita custody matters are modest in volume given the neighborhood's small residential population but commonly involve affluent families with finance, creative-industry, or professional-services parent schedules. Documentation frequently covers De Salvio Playground, Petrosino Square, and the neighborhood's limited but intensively used public-space network.",
      logistics: "Nolita custody investigations work an extremely compact residential footprint where investigator recognition across consecutive days is a real operational concern. Rotation discipline and adjacent-neighborhood staging (from SoHo, Little Italy) are standard, and school-route observation commonly extends into adjacent neighborhoods where the relevant private schools are located.",
      venue: "Manhattan custody cases are heard at New York County Family Court, 60 Lafayette Street."
    },

    // --- Sprint 2d: Upper East Side ---
    "upper-east-side": {
      casePattern: "UES custody cases are frequently shaped by the neighborhood's dense private-school concentration — Brearley, Spence, Chapin, Dalton, Nightingale-Bamford, and Ramaz all sit within blocks of each other, and custody assessments regularly turn on which parent handles school-related logistics, whether school-admissions decisions remain joint, and the financial implications for tuition responsibility. Nanny and domestic-staff documentation is a recurring engagement component.",
      logistics: "UES custody investigations work the predictable morning and afternoon school-route geometry — each private school has a specific 15-20 minute pickup and drop-off window during which parental compliance and caregiver-rotation patterns are observable. Investigators commonly coordinate coverage around these specific windows rather than attempting all-day observation.",
      venue: "All Manhattan custody matters are heard at New York County Family Court at 60 Lafayette Street; high-asset implications may involve Supreme Court matrimonial calendars at 60 Centre Street."
    },
    "lenox-hill": {
      casePattern: "Lenox Hill custody cases commonly involve medical-professional families — parents whose schedules are shaped by hospital rotation, on-call obligations, surgical schedules, or attending-physician responsibilities at the 77th Street campus. Custody-modification matters frequently turn on documentation of shift-schedule compliance with parenting-time orders structured around medical-work patterns.",
      logistics: "Lenox Hill custody investigations structure observation around medical-work schedules — 12-hour shift transitions at the hospital, on-call callback patterns, and the specific weekly coverage rotations that medical-professional parents commonly follow. Investigators coordinate with family-law counsel on evidence scope given the complexity of medical-schedule compliance documentation.",
      venue: "Custody matters are heard at New York County Family Court at 60 Lafayette Street."
    },
    "yorkville": {
      casePattern: "Yorkville custody cases are more demographically varied than the UES subregions to its south — the rental and condo stock attracts young families without the multi-generational wealth concentration of Park Avenue or Carnegie Hill. Cases commonly involve custody-modification matters, standard parenting-time compliance verification, and the residential-environment documentation typical of middle-to-upper-middle-income family cases.",
      logistics: "Yorkville custody investigations work the neighborhood's public-school network (P.S. 158, P.S. 290, P.S. 527, and the nearby 96th Street-area public schools) along with the few private-school options in the area. Observation anchors include Carl Schurz Park, the Second Avenue Q train stations, and the neighborhood's higher-density foot traffic along 86th Street.",
      venue: "All Manhattan custody matters route to New York County Family Court at 60 Lafayette Street."
    },
    "carnegie-hill": {
      casePattern: "Carnegie Hill custody cases commonly involve some of the highest-asset family structures in Manhattan custody practice — multi-generational wealth, trust-structured family holdings, and the complex financial arrangements characteristic of ultra-affluent families. Private-school enrollment decisions, multi-home residential arrangements, and domestic-staff documentation are recurring engagement components.",
      logistics: "Carnegie Hill custody investigations work one of Manhattan's quietest residential environments — foot traffic is thin, townhouse and doorman staff are attentive, and observation requires short rotations and careful positioning. Private-school pickup and drop-off windows, Museum Mile benefit events, and specific Madison Avenue venues provide the primary observation anchors.",
      venue: "High-asset custody matters are heard at New York County Family Court at 60 Lafayette Street; related matrimonial components may route to Supreme Court at 60 Centre Street."
    },
    "east-harlem": {
      casePattern: "East Harlem custody cases reflect the neighborhood's demographic breadth — long-tenure residential families, newer arrivals to the expanding condominium stock, and medical-professional families tied to the Mount Sinai campus. Cases commonly involve custody-modification matters, residential-stability documentation, and the school-assignment factors that neighborhood transitions create.",
      logistics: "East Harlem custody investigations work the neighborhood's substantial public-school network — P.S. 101, P.S. 50, P.S. 96, and the nearby middle-school options — along with the Mount Sinai-adjacent private-school options at the neighborhood's southern edge. Observation routines cover school-route compliance and after-school programming at community-center facilities.",
      venue: "Custody matters are heard at New York County Family Court at 60 Lafayette Street."
    },
    "spanish-harlem": {
      casePattern: "Spanish Harlem custody cases frequently involve multi-generational caregiving arrangements characteristic of the Latino-American community — grandparent, aunt, and extended-family caregivers play roles that affect how parenting-time compliance is assessed. Documentation commonly covers the 116th Street commercial corridor, community-organization programming, and the neighborhood's religious-institution family networks.",
      logistics: "Spanish Harlem custody investigations routinely require Spanish-capable coverage and cultural familiarity with the community's extended-family caregiving norms. School-route observation at P.S. 38, P.S. 72, and the neighborhood's other public schools follows standard practice; community-organization and religious-institution documentation requires careful handling given tightly-networked relationships.",
      venue: "All Manhattan custody matters route to New York County Family Court at 60 Lafayette Street."
    },
    "randalls-island": {
      casePattern: "Randalls Island custody cases are essentially absent as a standalone case type — there is no residential population, so families with Randalls-Island-primary-residence custody matters do not exist. Island-adjacent custody matters occur when investigations incidentally involve the island's youth sports programming, festival-event attendance, or specific Parks Department youth-program contexts.",
      logistics: "Randalls-Island-related custody investigation work is narrow and typically involves event-specific or program-specific observation rather than residential documentation. Investigators work the access-point geometry of the island for identification-and-follow, and conduct any substantive observation in the relevant sports-facility or programming context.",
      venue: "All Manhattan custody matters are heard at New York County Family Court at 60 Lafayette Street."
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
