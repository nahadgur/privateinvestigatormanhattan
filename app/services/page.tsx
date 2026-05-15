import type { Metadata } from 'next';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';
import { ServicesIndexClient } from './ServicesIndexClient';

export const metadata: Metadata = {
  title: 'Investigation Services in Manhattan | Infidelity, Surveillance, Corporate, Background',
  description: 'Browse Manhattan private investigation services: infidelity investigations, surveillance, background checks, corporate cases, asset searches, and child custody investigations. Match with the right licensed specialist.',
  alternates: { canonical: '/services/' },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/services/`,
    siteName: siteConfig.name,
    title: 'Manhattan Investigation Services',
    description: 'Six investigation specializations from NYS-licensed Manhattan investigators.',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'Manhattan Investigation Services', description: 'Six investigation specializations from NYS-licensed Manhattan investigators.' },
  robots: { index: true, follow: true },
};

export default function ServicesIndexPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteConfig.url}/services/#webpage`,
    name: 'Manhattan Investigation Services',
    description: 'Six core investigation specializations from licensed Manhattan investigators.',
    url: `${siteConfig.url}/services/`,
    isPartOf: { '@id': `${siteConfig.url}#website` },
    mentions: services.map(s => ({
      '@type': 'Service',
      name: s.title,
      description: s.description,
      url: `${siteConfig.url}/services/${s.slug}/`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicesIndexClient />
    </>
  );
}
