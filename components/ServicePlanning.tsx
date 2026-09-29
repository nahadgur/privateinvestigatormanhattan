import Link from 'next/link';

export function ServicePlanning({ kind }: { kind: 'infidelity-investigation' | 'asset-searches' }) {
  const infidelity = kind === 'infidelity-investigation';
  const deliverables = infidelity
    ? ['A dated account of observations, including periods when no relevant activity was observed.', 'Photos or video where lawfully obtained, with context and any gaps explained.', 'An agreed update schedule and a report separating observations from conclusions.']
    : ['A record log identifying sources, search dates and the person or entity matched.', 'Ownership and transaction leads with supporting documents and unresolved identity questions.', 'A report distinguishing recorded interests from current value, access and collectibility.'];

  return (
    <section className="mb-12 space-y-6">
      <div>
        <h2 className="text-[22px] font-extrabold text-ink mb-3">Agree on the deliverables</h2>
        <p className="text-sm text-gray-dark leading-relaxed mb-3">Ask a prospective investigator to put the following in the engagement terms. Availability depends on the assignment; findings and court admissibility cannot be guaranteed.</p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-dark leading-relaxed">
          {deliverables.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <div className="bg-paper p-6 rounded-tile border border-gray-light">
        <h2 className="text-[22px] font-extrabold text-ink mb-3">What affects the cost?</h2>
        <p className="text-sm text-gray-dark leading-relaxed mb-3">{infidelity
          ? 'The proposed observation windows, minimum booking, number of investigators, travel, waiting time and report preparation determine the quote. Ask whether an hourly rate is per investigator or for the whole team, and set a limit before approving more time.'
          : 'The number of people and entities, jurisdictions, record fees and depth of verification affect the quote. Separate an initial records search from further investigation, legal process, valuation and enforcement costs.'}</p>
        <p className="text-sm text-gray-dark leading-relaxed">This matching service does not set investigation rates. Ask how a retainer is applied, how unused funds are handled, and whether expenses and applicable tax are included. Use our <Link href="/guides/investigator-costs-manhattan/" className="text-primary underline">quote-comparison checklist</Link> and <Link href="/blog/how-much-does-a-private-investigator-cost-in-manhattan/" className="text-primary underline">researched Manhattan pricing examples</Link>.</p>
      </div>
      {infidelity && <p className="text-sm text-gray-dark leading-relaxed">If divorce or custody proceedings are involved, ask your attorney which facts matter before commissioning surveillance. See our <Link href="/blog/when-to-hire-a-cheating-spouse-investigator-in-manhattan/" className="text-primary underline">infidelity hiring guide and New York legal limits</Link>. An investigator cannot promise a particular divorce or custody outcome.</p>}
    </section>
  );
}
