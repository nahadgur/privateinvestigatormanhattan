// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/site';
import { buildWebsiteSchema, buildOrganizationSchema } from '@/data/schema-helpers';
import { ConsentBanner } from '@/components/ConsentBanner';
import { AttributionCapture } from '@/components/AttributionCapture';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name + ' | Licensed Private Investigators in Manhattan NYC',
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
  robots: { index: true, follow: true },
  verification: {
    google: 'ene2w-CEA6rRdgmqL2PczBvhadyT9_P84yymlWU8594',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    locale: 'en_US',
    // og:image supplied by opengraph-image.tsx file convention
    // (homepage default + per-route overrides under services + location).
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    // twitter falls back to og:image from the file convention.
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const websiteSchema = buildWebsiteSchema();
  const organizationSchema = buildOrganizationSchema();
  return (
    <html lang="en-US" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* First-touch attribution into sessionStorage. Captures UTM
            params + referrer that are already exposed to the page —
            no analytics cookies, fires before consent. */}
        <AttributionCapture />
        {/* GA4 only loads after the visitor accepts the cookie banner.
            CCPA: visitor can reject analytics entirely. */}
        <ConsentBanner gaId="G-4E5K6WPYT9" />
        {children}
      </body>
    </html>
  );
}
