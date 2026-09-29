import { Award, ShieldCheck, UserCheck, Lock } from 'lucide-react';

const badges = [
  {
    icon: Award,
    title: 'Verify the License',
    desc: 'Check the agency name and current New York State license before engaging an investigator.',
  },
  {
    icon: ShieldCheck,
    title: 'Ask About Insurance',
    desc: 'Ask the agency to explain its insurance coverage and provide evidence relevant to the proposed work.',
  },
  {
    icon: UserCheck,
    title: 'Check Relevant Experience',
    desc: 'Discuss similar assignments, who will do the work and how the investigator will report findings.',
  },
  {
    icon: Lock,
    title: 'Agree on Information Handling',
    desc: 'Ask who receives your details, how records are stored and what confidentiality terms apply.',
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
