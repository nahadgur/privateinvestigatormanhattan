import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { HomePageClient } from './HomePageClient';

export const metadata: Metadata = {
  title: { absolute: 'Private Investigator Manhattan | Find a Licensed PI' },
  description: 'Find a private investigator in Manhattan. Compare services, costs and hiring checks, then request an introduction to discuss your case.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Private Investigator Manhattan | Find a Licensed PI',
    description: 'Compare Manhattan investigation services, costs and hiring checks. Request an introduction to discuss your case.',
    locale: 'en_US',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
