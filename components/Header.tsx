'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '@/data/services';

interface HeaderProps {
  onOpenModal?: () => void;
}

export function Header({ onOpenModal }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-ink text-white w-full flex flex-col justify-center items-center shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      <div className="container-width py-3 min-h-[60px] flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-extrabold text-[1.2rem] tracking-[-0.5px] z-50 relative">
          P.I. <span className="text-primary">MANHATTAN</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 text-[11px] uppercase tracking-widest font-bold">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link href="/services/" className="flex items-center gap-1 hover:text-primary transition-colors">
              Services <ChevronDown className="w-3 h-3" />
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-0 w-72 bg-ink border border-white/10 rounded-tile shadow-xl pt-2 pb-2 z-50">
                {services.map((s) => (
                  <Link
                    key={s.id}
                    href={`/services/${s.slug}/`}
                    className="block px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white/85 hover:text-primary hover:bg-white/5 transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/location/" className="hover:text-primary transition-colors">Locations</Link>
          <Link href="/blog/" className="hover:text-primary transition-colors">Blog</Link>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <span className="text-gray-dark px-2">|</span>
          <button
            onClick={onOpenModal}
            className="bg-primary text-white px-4 py-2 rounded-chip hover:bg-white hover:text-ink transition-colors shadow-sm text-[11px] uppercase tracking-widest font-bold"
          >
            Free Consultation
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-3 z-50 relative">
          <button
            onClick={onOpenModal}
            className="bg-primary text-white px-3 py-1.5 rounded-chip text-[10px] font-bold uppercase tracking-widest shadow-sm"
          >
            Consult
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-1"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden w-full bg-ink border-t border-white/10 px-4 py-4 flex flex-col gap-4 font-bold uppercase tracking-widest text-[12px] absolute top-full left-0 shadow-xl">
          <Link href="/" onClick={() => setMobileOpen(false)} className="py-2 hover:text-primary">Home</Link>
          <div className="py-1">
            <Link href="/services/" onClick={() => setMobileOpen(false)} className="py-2 hover:text-primary block">Services</Link>
            <div className="pl-3 mt-2 space-y-2 text-[11px] text-white/70 font-semibold tracking-wider">
              {services.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}/`}
                  onClick={() => setMobileOpen(false)}
                  className="block py-1 hover:text-primary"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/location/" onClick={() => setMobileOpen(false)} className="py-2 hover:text-primary">Locations</Link>
          <Link href="/blog/" onClick={() => setMobileOpen(false)} className="py-2 hover:text-primary">Blog</Link>
          <div className="h-[1px] bg-white/10 my-1 w-full" />
          <button
            onClick={() => {
              onOpenModal?.();
              setMobileOpen(false);
            }}
            className="py-2 text-primary font-extrabold text-lg tracking-wider text-left"
          >
            Free Consultation
          </button>
        </div>
      )}
    </header>
  );
}
