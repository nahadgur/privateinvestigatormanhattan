import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { HowItWorksClient } from './HowItWorksClient';

export const metadata: Metadata = {
  title: 'How It Works — Manhattan PI Matching in 4 Steps',
  description: 'From confidential consultation to investigator match to case execution. How the matching service works end-to-end and what to expect at each step of a Manhattan private investigation.',
  alternates: { canonical: '/how-it-works/' },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/how-it-works/`,
    siteName: siteConfig.name,
    title: 'How the Matching Service Works',
    description: 'Confidential consultation, vetted match, direct engagement. Four steps end-to-end.',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'How the Matching Service Works', description: 'Confidential consultation, vetted match, direct engagement. Four steps end-to-end.' },
  robots: { index: true, follow: true },
};

export default function HowItWorksPage() {
  return <HowItWorksClient />;
}
