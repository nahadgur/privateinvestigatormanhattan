import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { LocationIndexClient } from './LocationIndexClient';

export const metadata: Metadata = {
  title: 'Manhattan Coverage Areas | Licensed Private Investigators',
  description: 'Manhattan neighborhood coverage from the Financial District and Tribeca to Midtown, the Upper East and West Sides, Harlem, and Washington Heights. Licensed investigators with intimate knowledge of each area\'s surveillance logistics.',
  alternates: { canonical: '/location/' },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/location/`,
    siteName: siteConfig.name,
    title: 'Manhattan Coverage Areas',
    description: 'Every Manhattan neighborhood, served by investigators who know the local geography.',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'Manhattan Coverage Areas', description: 'Every Manhattan neighborhood, served by investigators who know the local geography.' },
  robots: { index: true, follow: true },
};

export default function LocationIndexPage() {
  return <LocationIndexClient />;
}
