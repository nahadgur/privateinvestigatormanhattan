import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { HomePageClient } from './HomePageClient';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Licensed Private Investigators in Manhattan NYC`,
    description: siteConfig.description,
    locale: 'en_US',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
