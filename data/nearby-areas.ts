// data/nearby-areas.ts
export const NEARBY_AREAS: Record<string, string[]> = {
  "midtown-east": ["Murray Hill","Turtle Bay","Sutton Place","Kips Bay","Grand Central"],
  "midtown-west": ["Hell's Kitchen","Hudson Yards","Times Square","Columbus Circle"],
  "financial-district": ["Tribeca","Battery Park City","Wall Street","Fulton","Water Street"],
  "upper-east-side": ["Lenox Hill","Yorkville","Carnegie Hill","Midtown East","East Harlem"],
  "upper-west-side": ["Lincoln Square","Morningside Heights","Riverside Drive","Hamilton Heights"],
  "tribeca": ["Financial District","SoHo","Battery Park City","Civic Center","Hudson Square"],
  "soho": ["Tribeca","NoHo","Nolita","Little Italy","West Village"],
  "chelsea": ["West Village","Meatpacking District","Hell's Kitchen","Flatiron District","Hudson Yards"],
  "greenwich-village": ["West Village","SoHo","East Village","Chelsea","NoHo"],
  "harlem": ["East Harlem","West Harlem","Hamilton Heights","Washington Heights","Morningside Heights"]
};
export function getNearbyAreas(slug: string): string[] {
  return NEARBY_AREAS[slug] || [];
}
