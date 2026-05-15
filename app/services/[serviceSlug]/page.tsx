import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { siteConfig } from '@/data/site';
import { ServiceDetailClient } from './ServiceDetailClient';

export function generateStaticParams() {
  return services.map(s => ({ serviceSlug: s.slug }));
}

export function generateMetadata({ params }: { params: { serviceSlug: string } }): Metadata {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) return { title: 'Service not found' };

  const title = `${service.title} in Manhattan | NYS-Licensed Investigators`;
  const description = service.description;
  const url = `${siteConfig.url}/services/${service.slug}/`;

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}/` },
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

export default function ServicePage({ params }: { params: { serviceSlug: string } }) {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) notFound();
  return <ServiceDetailClient service={service} />;
}
