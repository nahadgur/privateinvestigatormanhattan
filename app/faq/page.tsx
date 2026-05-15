import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { FAQPageClient } from './FAQPageClient';

export const metadata: Metadata = {
  title: 'FAQ — Hiring a Private Investigator in Manhattan',
  description: 'Honest answers about how the matching service works, NYS licensing under Article 7, what a Manhattan investigation typically costs, legal admissibility of evidence, and how investigators handle surveillance in a dense urban environment.',
  alternates: { canonical: '/faq/' },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/faq/`,
    siteName: siteConfig.name,
    title: 'Frequently Asked Questions',
    description: 'How the matching service works, NYS licensing, typical costs, and evidence admissibility.',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'FAQ — Manhattan Private Investigator Matching', description: 'How the matching service works, NYS licensing, typical costs, and evidence admissibility.' },
  robots: { index: true, follow: true },
};

export default function FAQPage() {
  return <FAQPageClient />;
}
