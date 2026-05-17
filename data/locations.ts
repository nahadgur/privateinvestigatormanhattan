// data/locations.ts
//
// Manhattan neighborhood anchors. Trimmed 2026-05-17 from 57 fine-
// grained neighborhoods to 10 high-demand zones to kill sitemap bloat
// and concentrate ranking authority on pages that actually get searched.
// Retired neighborhood + combo URLs are 410'd in middleware.ts.
export const LOCATIONS: Record<string, string[]> = {
  "Midtown": ["Midtown East", "Midtown West"],
  "Downtown": ["Financial District", "Tribeca", "SoHo"],
  "West Side": ["Greenwich Village", "Chelsea"],
  "Uptown": ["Upper East Side", "Upper West Side", "Harlem"],
};
export function getCityBySlug(slug: string): string | undefined {
  const all = Object.values(LOCATIONS).flat();
  return all.find(city => toSlug(city) === slug);
}
export function toSlug(city: string): string {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
