import { Award, ShieldCheck, UserCheck, Lock } from 'lucide-react';

const badges = [
  {
    icon: Award,
    title: 'NYS Licensed',
    desc: 'Every investigator in our network holds a current New York State license under Article 7.',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Insured',
    desc: 'All investigators carry comprehensive liability insurance and are bonded for professional standards.',
  },
  {
    icon: UserCheck,
    title: 'Former Law Enforcement',
    desc: 'Our network includes investigators with NYPD, FBI, and federal agency backgrounds.',
  },
  {
    icon: Lock,
    title: 'Strict Confidentiality',
    desc: 'All consultations are confidential. Your information is never shared with third parties.',
  },
];

export function TrustBadges() {
  return (
    <section className="container-width py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {badges.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-paper rounded-tile p-5 shadow-card border border-gray-light">
            <div className="inline-flex p-2 rounded-chip bg-primary/10 text-primary mb-3">
              <Icon className="w-4 h-4" />
            </div>
            <h3 className="text-[13px] font-bold text-ink tracking-tight mb-1">{title}</h3>
            <p className="text-[11px] text-gray-dark leading-[1.4]">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
