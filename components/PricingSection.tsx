'use client';

import { DollarSign, CheckCircle, CreditCard } from 'lucide-react';
import { pricingTiers, treatmentIncludes, financeInfo, getPricingForService } from '@/data/pricing';

interface PricingSectionProps {
  cityName?: string;
  serviceId?: string;
  serviceName?: string;
}

export function PricingSection({ cityName, serviceId, serviceName }: PricingSectionProps) {
  const tiers = serviceId ? getPricingForService(serviceId) : pricingTiers;

  const heading = cityName && serviceName
    ? `How Much Does ${serviceName} Cost in ${cityName}?`
    : cityName
    ? `How Much Do Investigation Services Cost in ${cityName}?`
    : serviceName
    ? `${serviceName} Pricing Guide`
    : 'Investigation Pricing Guide';

  const intro = cityName
    ? `Prices in ${cityName} vary by case type and investigation complexity. Below are typical retainer and hourly ranges from licensed investigators serving the ${cityName} area.`
    : 'Prices vary by case type and complexity. Below are typical retainer and hourly ranges from licensed investigators in our Manhattan network.';

  return (
    <section className="mb-14">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-primary/10 p-2 rounded-chip">
          <DollarSign className="w-4 h-4 text-primary" />
        </div>
        <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight text-ink">{heading}</h2>
      </div>
      <p className="text-gray-dark text-[14px] mb-7 leading-[1.6]">{intro}</p>

      {/* Pricing Table */}
      <div className="overflow-x-auto mb-7">
        <table className="w-full text-[13px] border border-gray-light rounded-tile overflow-hidden">
          <thead>
            <tr className="bg-gray-light text-left">
              <th className="px-5 py-3 font-extrabold uppercase text-[11px] tracking-widest text-ink">Service Type</th>
              <th className="px-5 py-3 font-extrabold uppercase text-[11px] tracking-widest text-ink">Price Range</th>
              <th className="px-5 py-3 font-extrabold uppercase text-[11px] tracking-widest text-ink hidden md:table-cell">Timeline</th>
              <th className="px-5 py-3 font-extrabold uppercase text-[11px] tracking-widest text-ink hidden lg:table-cell">What Is Included</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier, i) => (
              <tr key={tier.slug} className={i % 2 === 0 ? 'bg-paper' : 'bg-gray-light/40'}>
                <td className="px-5 py-4">
                  <div className="font-bold text-ink text-[13px]">{tier.treatment}</div>
                  <p className="text-gray-dark text-[11px] mt-0.5 hidden sm:block leading-[1.4]">{tier.description}</p>
                </td>
                <td className="px-5 py-4">
                  <span className="font-extrabold text-primary text-[14px]">
                    ${tier.priceFrom.toLocaleString()} &ndash; ${tier.priceTo.toLocaleString()}
                  </span>
                </td>
                <td className="px-5 py-4 text-ink hidden md:table-cell">{tier.typicalDuration}</td>
                <td className="px-5 py-4 text-gray-dark hidden lg:table-cell text-[12px]">{tier.serviceIncludes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile pricing cards */}
      <div className="md:hidden space-y-3 mb-7">
        {tiers.map((tier) => (
          <div key={tier.slug} className="bg-paper border border-gray-light rounded-tile p-4">
            <div className="flex justify-between items-start mb-2 gap-3">
              <span className="font-bold text-ink text-[13px]">{tier.treatment}</span>
              <span className="font-extrabold text-primary text-[13px] whitespace-nowrap">
                ${tier.priceFrom.toLocaleString()}&ndash;${tier.priceTo.toLocaleString()}
              </span>
            </div>
            <div className="flex flex-col gap-1 text-[11px] text-gray-dark">
              <span>{tier.typicalDuration}</span>
              <span>{tier.serviceIncludes}</span>
            </div>
          </div>
        ))}
      </div>

      {/* What's Included + Billing */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-primary/5 rounded-tile p-6 border border-primary/15">
          <h3 className="font-extrabold text-ink text-[14px] tracking-tight mb-4 uppercase">What&apos;s Included in the Price</h3>
          <ul className="space-y-2.5">
            {treatmentIncludes.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-[12px] text-gray-dark">
                <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-light/60 rounded-tile p-6 border border-gray-light">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="w-4 h-4 text-primary" />
            <h3 className="font-extrabold text-ink text-[14px] tracking-tight uppercase">Billing &amp; Retainers</h3>
          </div>
          <p className="text-[12px] text-gray-dark leading-[1.6] mb-3">
            {financeInfo.description}
          </p>
          <div className="bg-paper rounded-chip p-4 border border-gray-light">
            <div className="text-[11px] font-extrabold text-ink uppercase tracking-widest mb-1">Typical Arrangement</div>
            <span className="text-[12px] text-gray-dark">
              Retainer against hourly billing. Staged invoicing standard for ongoing cases.
            </span>
          </div>
        </div>
      </div>

      {/* SEO paragraph */}
      {cityName && (
        <div className="mt-7 text-[12px] text-gray-dark leading-[1.6]">
          <p>
            The cost of private investigation in {cityName} depends on case type, required hours, and team size. Investigators provide a transparent retainer estimate after an initial confidential consultation.
          </p>
        </div>
      )}
    </section>
  );
}
