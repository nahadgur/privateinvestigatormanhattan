import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { siteConfig } from '@/data/site';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items, light = false }: { items: BreadcrumbItem[]; light?: boolean }) {
  const allItems = [{ label: 'Home', href: '/' }, ...items];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
    })),
  };

  const linkClass = light ? 'text-white/70 hover:text-primary transition-colors' : 'text-gray-dark hover:text-primary transition-colors';
  const activeClass = light ? 'text-white font-semibold' : 'text-ink font-semibold';
  const chevronClass = light ? 'w-3.5 h-3.5 text-white/40' : 'w-3.5 h-3.5 text-gray-mid';

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ol className={`flex items-center flex-wrap gap-1 text-[12px] ${light ? 'text-white/70' : 'text-gray-dark'}`}>
        {allItems.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className={chevronClass} />}
            {item.href ? (
              <Link href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ) : (
              <span className={activeClass}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
