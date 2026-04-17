import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  showCta?: boolean;
  showTrust?: boolean;
  onOpenModal?: () => void;
}

export function Hero({ title, subtitle, image, showCta = true, showTrust = true, onOpenModal }: HeroProps) {
  const hasImage = image && image.length > 0;

  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <div className="absolute inset-0">
        {hasImage ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="" className="w-full h-full object-cover opacity-50" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(185,55,41,0.25),transparent_60%)]" />
        )}
      </div>

      <div className="relative container-width py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-[2rem] md:text-[2.8rem] lg:text-[3.2rem] font-extrabold tracking-tight leading-[1.05] mb-5 text-white">
            {title}
          </h1>
          <p className="text-[16px] md:text-[17px] text-white/80 mb-7 leading-[1.5]">{subtitle}</p>

          {showCta && (
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              {onOpenModal ? (
                <button onClick={onOpenModal} className="btn-primary">
                  Request Consultation
                </button>
              ) : (
                <Link href="/services/" className="btn-primary">
                  Request Consultation
                </Link>
              )}
              <Link
                href="/services/"
                className="inline-flex items-center justify-center gap-2 rounded-chip border border-white/25 bg-white/5 px-5 py-3 text-[12px] font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-colors"
              >
                View Services
              </Link>
            </div>
          )}

          {showTrust && (
            <div className="flex flex-wrap gap-5 text-[12px] font-medium text-white/75">
              {['NYS-Licensed Investigators', 'Confidential Consultation', 'Matched Within 24 Hours'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
