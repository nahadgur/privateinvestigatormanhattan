// middleware.ts
//
// Single source of truth for retired URLs on this site.
// 410 Gone is the right signal here — these pages were live, indexed,
// and are now permanently removed. 308/301 to a hub would tell Google
// "moved", which is misleading and slows down deindexation.
//
// What is retired:
//   1. Outer-borough location pages (cull 2026-04-17). Site is Manhattan-only.
//   2. Fine-grained Manhattan neighborhood pages (cull 2026-05-17).
//      Reduced from 57 neighborhoods to 10 anchor zones to kill
//      sitemap bloat and concentrate ranking authority.
//   3. ALL /services/<service>/<location>/ combo pages (cull 2026-05-17).
//      6 services × 57 neighborhoods = 342 thin combo URLs that no
//      one was searching for. Combo route folder deleted alongside.

import { NextResponse, type NextRequest } from 'next/server';

const DEAD_LOCATIONS = new Set<string>([
  // Outer boroughs (2026-04-17)
  'astoria', 'long-island-city', 'flushing', 'brooklyn-heights',
  'williamsburg', 'park-slope', 'bronx', 'staten-island',
  'jamaica', 'forest-hills',

  // Midtown sub-neighborhoods dropped 2026-05-17 (kept: midtown-east, midtown-west)
  'hell-s-kitchen', 'murray-hill', 'koreatown', 'turtle-bay',
  'sutton-place', 'tudor-city', 'kips-bay', 'gramercy-park',
  'flatiron-district', 'nomad',

  // Downtown sub-neighborhoods dropped 2026-05-17 (kept: financial-district, tribeca, soho)
  'battery-park-city', 'water-street', 'wall-street', 'fulton',
  'civic-center', 'two-bridges', 'chinatown', 'little-italy', 'noho',

  // Lower East Side / East Village (entire zone dropped 2026-05-17)
  'lower-east-side', 'east-village', 'alphabet-city', 'stuy-town',
  'peter-cooper-village', 'bowery', 'nolita',

  // Upper East Side sub-neighborhoods dropped 2026-05-17 (kept: upper-east-side)
  'lenox-hill', 'yorkville', 'carnegie-hill', 'east-harlem',
  'spanish-harlem', 'randalls-island',

  // Upper West Side sub-neighborhoods dropped 2026-05-17 (kept: upper-west-side)
  'lincoln-square', 'riverside-drive', 'manhattan-valley',
  'morningside-heights', 'hamilton-heights', 'washington-heights',

  // Harlem / North Manhattan sub-neighborhoods dropped 2026-05-17 (kept: harlem)
  'west-harlem', 'central-harlem', 'south-harlem',
  'inwood', 'fort-george', 'marble-hill',

  // West Village / Chelsea sub-neighborhoods dropped 2026-05-17 (kept: greenwich-village, chelsea)
  'west-village', 'meatpacking-district', 'hudson-yards',
]);

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname.toLowerCase();

  // 410 every /services/<service>/<location>/ combo URL.
  const isCombo = /^\/services\/[^/]+\/[^/]+\/?$/.test(pathname);
  if (isCombo) {
    return new NextResponse('Gone', { status: 410, headers: { 'X-Robots-Tag': 'noindex' } });
  }

  // 410 retired location URLs.
  const locMatch = pathname.match(/^\/location\/([^/]+)\/?$/);
  if (locMatch && DEAD_LOCATIONS.has(locMatch[1])) {
    return new NextResponse('Gone', { status: 410, headers: { 'X-Robots-Tag': 'noindex' } });
  }

  return NextResponse.next();
}

export const config = {
  // Only run on URLs that could possibly be retired — keep middleware
  // off the hot path for everything else.
  matcher: ['/services/:path*', '/location/:path*'],
};
