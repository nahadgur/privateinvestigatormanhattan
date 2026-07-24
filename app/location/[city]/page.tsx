import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LOCATIONS, toSlug, getCityBySlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { locationDirectoryFeaturedImage, locationFeaturedImages } from '@/data/featuredImages';
import { CityPageClient } from './CityPageClient';

export function generateStaticParams() {
  const allCities = Object.values(LOCATIONS).flat();
  return allCities.map(city => ({ city: toSlug(city) }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const cityName = getCityBySlug(params.city);
  if (!cityName) return { title: 'Area not found' };

  const title = `Private Investigators in ${cityName} | Licensed NYC Investigators`;
  const description = `Licensed private investigators serving ${cityName}. Surveillance, infidelity, background checks, corporate cases, asset searches, and child custody investigations. Free confidential consultation, no obligation.`;
  const url = `${siteConfig.url}/location/${params.city}/`;
  const image = locationFeaturedImages[params.city] ?? locationDirectoryFeaturedImage;

  return {
    title,
    description,
    alternates: { canonical: `/location/${params.city}/` },
    openGraph: {
      type: 'article',
      url,
      siteName: siteConfig.name,
      title,
      description,
      locale: 'en_US',
      images: [{ url: image.src, width: 1536, height: 1024, alt: image.alt }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image.src] },
    robots: { index: true, follow: true },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const cityName = getCityBySlug(params.city);
  if (!cityName) notFound();
  return <CityPageClient cityName={cityName} citySlug={params.city} />;
}
