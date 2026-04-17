import Link from 'next/link';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';
import { topAreas } from '@/data/homepage';
import { toSlug } from '@/data/locations';

export function Footer() {
  const footerLocations = topAreas.slice(0, 8);

  return (
    <footer className="w-full bg-paper mt-auto">
      {/* Main sitemap section */}
      <div className="container-width py-8 border-t border-gray-mid/50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-extrabold text-[1.2rem] tracking-[-0.5px] text-ink block mb-3">
              P.I. <span className="text-primary">MANHATTAN</span>
            </Link>
            <p className="text-[12px] text-gray-dark leading-[1.5] mb-3">
              Confidential referral service connecting clients with vetted, NYS-licensed private investigators across Manhattan.
            </p>
            <p className="text-[10px] text-gray-dark/80 italic border-l-2 border-gray-mid pl-3 leading-[1.4]">
              We are a referral and matching service, not an investigative agency. All work is carried out by independent licensed investigators in our vetted network.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-ink mb-3">Services</h4>
            <ul className="space-y-2 text-[12px]">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}/`} className="text-gray-dark hover:text-primary transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Locations */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-ink mb-3">Popular Areas</h4>
            <ul className="space-y-2 text-[12px]">
              {footerLocations.map((area) => (
                <li key={area}>
                  <Link href={`/location/${toSlug(area)}/`} className="text-gray-dark hover:text-primary transition-colors">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-ink mb-3">Resources</h4>
            <ul className="space-y-2 text-[12px]">
              <li><Link href="/about/" className="text-gray-dark hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/how-it-works/" className="text-gray-dark hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/faq/" className="text-gray-dark hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/guides/" className="text-gray-dark hover:text-primary transition-colors">Guides</Link></li>
              <li><Link href="/services/" className="text-gray-dark hover:text-primary transition-colors">All Services</Link></li>
              <li><Link href="/location/" className="text-gray-dark hover:text-primary transition-colors">All Locations</Link></li>
              <li><Link href="/blog/" className="text-gray-dark hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/sitemap.xml" className="text-gray-dark hover:text-primary transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="container-width border-t border-gray-mid/50 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px]">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-bold uppercase tracking-widest text-ink text-center sm:text-left">
          <span>Licensed Referral Service</span>
          <span className="hidden sm:inline opacity-30">&bull;</span>
          <span>&copy; {new Date().getFullYear()} {siteConfig.name}</span>
        </div>
        <div className="flex gap-2">
          <span className="bg-gray-mid px-3 py-1.5 sm:px-2.5 sm:py-1 rounded-chip text-ink uppercase font-bold tracking-widest shadow-sm">
            Privacy
          </span>
          <span className="bg-gray-mid px-3 py-1.5 sm:px-2.5 sm:py-1 rounded-chip text-ink uppercase font-bold tracking-widest shadow-sm">
            Terms
          </span>
        </div>
      </div>
    </footer>
  );
}
