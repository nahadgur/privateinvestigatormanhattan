import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { LOCATIONS, toSlug, getCityBySlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { ServiceLocationClient } from './ServiceLocationClient';

export function generateStaticParams() {
  const allCities = Object.values(LOCATIONS).flat();
  const params: { serviceSlug: string; locationSlug: string }[] = [];
  for (const service of services) {
    for (const city of allCities) {
      params.push({ serviceSlug: service.slug, locationSlug: toSlug(city) });
    }
  }
  return params;
}

export function generateMetadata({ params }: { params: { serviceSlug: string; locationSlug: string } }): Metadata {
  const service = getServiceBySlug(params.serviceSlug);
  const cityName = getCityBySlug(params.locationSlug);
  if (!service || !cityName) return { title: 'Page not found' };

  const title = `${service.title} in ${cityName} | NYS-Licensed PI`;
  const description = `Licensed private investigators serving ${cityName} for ${service.title.toLowerCase()}. Free confidential consultation, no obligation.`;
  const url = `${siteConfig.url}/services/${service.slug}/${params.locationSlug}/`;

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}/${params.locationSlug}/` },
    openGraph: {
      type: 'article',
      url,
      siteName: siteConfig.name,
      title,
      description,
      locale: 'en_US',
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: { index: true, follow: true },
  };
}

export default function ServiceLocationPage({ params }: { params: { serviceSlug: string; locationSlug: string } }) {
  const service = getServiceBySlug(params.serviceSlug);
  const cityName = getCityBySlug(params.locationSlug);
  if (!service || !cityName) notFound();
  return <ServiceLocationClient service={service} cityName={cityName} locationSlug={params.locationSlug} />;
}
