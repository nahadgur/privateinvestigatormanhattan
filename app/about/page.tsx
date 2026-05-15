import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { AboutPageClient } from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About — Manhattan Private Investigator Matching Service',
  description: 'How we vet New York State-licensed private investigators and match them to Manhattan clients by case type. Confidential, no-obligation referrals from former NYPD and federal investigators.',
  alternates: { canonical: '/about/' },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/about/`,
    siteName: siteConfig.name,
    title: 'About the Matching Service',
    description: 'NYS-licensed investigators, matched to your case type. Confidential, no obligation, no direct fees to you.',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'About the Matching Service', description: 'NYS-licensed investigators, matched to your case type.' },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
