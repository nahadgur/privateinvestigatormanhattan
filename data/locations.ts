// data/locations.ts
export const LOCATIONS: Record<string, string[]> = {
  "Midtown Manhattan": ["Midtown East","Midtown West","Hell's Kitchen","Murray Hill","Koreatown","Turtle Bay","Sutton Place","Tudor City","Kips Bay","Gramercy Park","Flatiron District","NoMad"],
  "Downtown Manhattan": ["Financial District","Tribeca","Battery Park City","Water Street","Wall Street","Fulton","Civic Center","Two Bridges","Chinatown","Little Italy","SoHo","NoHo"],
  "Lower East Side and East Village": ["Lower East Side","East Village","Alphabet City","Stuy Town","Peter Cooper Village","Bowery","Nolita"],
  "Upper East Side": ["Upper East Side","Lenox Hill","Yorkville","Carnegie Hill","East Harlem","Spanish Harlem","Randalls Island"],
  "Upper West Side": ["Upper West Side","Lincoln Square","Riverside Drive","Manhattan Valley","Morningside Heights","Hamilton Heights","Washington Heights"],
  "Harlem and North Manhattan": ["Harlem","West Harlem","Central Harlem","South Harlem","Inwood","Fort George","Marble Hill"],
  "West Village and Chelsea": ["West Village","Greenwich Village","Chelsea","Meatpacking District","Hudson Yards"]
};
export function getCityBySlug(slug: string): string | undefined {
  const all = Object.values(LOCATIONS).flat();
  return all.find(city => toSlug(city) === slug);
}
export function toSlug(city: string): string {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
