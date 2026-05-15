import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { GuidesIndexClient } from './GuidesIndexClient';

export const metadata: Metadata = {
  title: 'Investigations Guides — Manhattan Private Investigator Resources',
  description: 'In-depth guides on hiring a Manhattan private investigator, evidence admissibility in New York courts, infidelity surveillance, corporate investigations, and what each case type actually involves.',
  alternates: { canonical: '/guides/' },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/guides/`,
    siteName: siteConfig.name,
    title: 'Investigations Guides',
    description: 'Practical guides for clients hiring a Manhattan private investigator.',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'Investigations Guides', description: 'Practical guides for clients hiring a Manhattan private investigator.' },
  robots: { index: true, follow: true },
};

export default function GuidesIndexPage() {
  return <GuidesIndexClient />;
}
