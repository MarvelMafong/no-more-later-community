import { WHAT_WE_DO } from '@/lib/data'

export default function WhatWeDo() {
  return (
    <section style={{ background: '#0d1120', padding: '100px 5vw' }} id="what-we-do">
      <div className="max-w">
        <span className="section-label reveal">Our Focus</span>
        <h2 className="section-title reveal reveal-d1">What We Do</h2>

        <div style={{
          marginTop: '4rem',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}>
          {WHAT_WE_DO.map((item, i) => (
            <div key={item.num}
              className={`reveal reveal-d${Math.min(i + 1, 4)}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '72px 1fr auto',
                alignItems: 'center', gap: '2rem',
                padding: '2rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                transition: 'all 0.25s',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-head)', fontWeight: 800,
                fontSize: '0.7rem', letterSpacing: '0.12em',
                color: '#FACC15', opacity: 0.6,
              }}>
                {item.num}
              </span>
              <div>
                <div className="svc-title" style={{
                  fontFamily: 'var(--font-head)', fontWeight: 600,
                  fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                  color: '#fff', marginBottom: '0.4rem',
                  transition: 'color 0.25s',
                }}>
                  {item.title}
                </div>
                <div style={{
                  fontSize: '0.9rem', color: '#6B7280',
                  lineHeight: 1.65, maxWidth: '520px',
                }}>
                  {item.desc}
                </div>
              </div>
              <div className="svc-arrow" style={{
                color: '#FACC15', opacity: 0,
                transition: 'opacity 0.25s, transform 0.25s',
                fontSize: '1.25rem', flexShrink: 0,
              }}>
                &#8594;
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .svc-arrow { display: none !important; }
        }
      `}</style>
    </section>
  )
}