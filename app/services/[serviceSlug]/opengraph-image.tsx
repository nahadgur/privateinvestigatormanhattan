import { ImageResponse } from 'next/og';
import { services, getServiceBySlug } from '@/data/services';

export const runtime = 'edge';
export const alt = 'Manhattan private investigator — licensed NYS specialist';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const headlineMap: Record<string, string> = {
  'infidelity-investigation':     'Infidelity investigations, Manhattan',
  'surveillance':                 'Surveillance operations, Manhattan',
  'background-checks':            'Background checks, Manhattan',
  'corporate-investigations':     'Corporate investigations, Manhattan',
  'asset-searches':               'Asset searches, Manhattan',
  'child-custody-investigations': 'Child custody investigations, Manhattan',
};

export function generateStaticParams() {
  return services.map(s => ({ serviceSlug: s.slug }));
}

export default function Image({ params }: { params: { serviceSlug: string } }) {
  const service = getServiceBySlug(params.serviceSlug);
  const headline = service ? (headlineMap[service.slug] ?? service.title) : 'Manhattan investigator';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg, #0e0e0e 0%, #1a1a1a 55%, #25110e 100%)',
          color: '#ffffff',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ width: 6, background: '#B93729', display: 'flex' }} />
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '80px 88px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: 16,
                letterSpacing: '0.3em',
                color: 'rgba(255,255,255,0.55)',
                marginBottom: 38,
                fontWeight: 800,
                display: 'flex',
              }}
            >
              NYS LICENSED INVESTIGATORS · MANHATTAN
            </div>
            <div
              style={{
                fontSize: 84,
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                maxWidth: 980,
                display: 'flex',
              }}
            >
              {headline}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              width: '100%',
            }}
          >
            <div
              style={{
                fontSize: 20,
                fontWeight: 500,
                color: 'rgba(255,255,255,0.55)',
                display: 'flex',
                gap: 14,
              }}
            >
              <span style={{ display: 'flex' }}>Licensed and insured</span>
              <span style={{ display: 'flex' }}>·</span>
              <span style={{ display: 'flex' }}>Court-admissible evidence</span>
              <span style={{ display: 'flex' }}>·</span>
              <span style={{ display: 'flex' }}>Free consultation</span>
            </div>
            <div
              style={{
                fontSize: 20,
                color: '#B93729',
                fontWeight: 700,
                display: 'flex',
              }}
            >
              privateinvestigatormanhattan.com
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
