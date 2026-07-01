import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { HOW_IT_WORKS, HANDLES } from '@/lib/data'

export const metadata = {
  title: 'How It Works — No More Later',
  description: 'Five simple steps to joining No More Later and starting your personal growth journey today.',
}

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section style={{
          background: '#0B0F19', padding: '140px 5vw 80px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(250,204,21,0.08) 0%, transparent 70%)',
          }} />
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <span style={{
              display: 'block', fontSize: '0.65rem', fontWeight: 600,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#FACC15', marginBottom: '1.25rem',
            }}>
              Getting Started
            </span>
            <h1 style={{
              fontFamily: 'var(--font-head)', fontWeight: 800,
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              color: '#fff', lineHeight: 1.05,
              letterSpacing: '-0.03em', marginBottom: '1.5rem',
            }}>
              How It Works
            </h1>
            <p style={{
              fontSize: '1.1rem', color: '#6B7280',
              lineHeight: 1.75, maxWidth: '520px',
            }}>
              Five simple steps. No cost. No conditions. Just a decision to start.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section style={{ background: '#0B0F19', padding: '20px 5vw 100px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {HOW_IT_WORKS.map((item, i) => (
              <div key={item.step} style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '2rem', alignItems: 'start',
                padding: '2.5rem 0',
                borderBottom: i < HOW_IT_WORKS.length - 1
                  ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}>
                {/* Step number */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '50%',
                    background: i === 0 ? '#FACC15' : 'rgba(250,204,21,0.1)',
                    border: i === 0 ? 'none' : '1.5px solid rgba(250,204,21,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-head)', fontWeight: 800,
                      fontSize: '1rem',
                      color: i === 0 ? '#0B0F19' : '#FACC15',
                    }}>
                      {item.step}
                    </span>
                  </div>
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div style={{
                      width: '1px', height: '40px',
                      background: 'rgba(255,255,255,0.07)',
                      margin: '0.75rem auto 0',
                    }} />
                  )}
                </div>

                {/* Content */}
                <div style={{ paddingTop: '0.75rem' }}>
                  <h2 style={{
                    fontFamily: 'var(--font-head)', fontWeight: 800,
                    fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)',
                    color: '#fff', letterSpacing: '-0.015em',
                    marginBottom: '0.6rem',
                  }}>
                    {item.title}
                  </h2>
                  <p style={{
                    fontSize: '0.95rem', color: '#9CA3AF',
                    lineHeight: 1.75,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{
          background: '#111827', padding: '80px 5vw',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontFamily: 'var(--font-head)', fontWeight: 800,
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: '#fff', letterSpacing: '-0.025em',
              marginBottom: '1rem',
            }}>
              Ready to start?
            </h2>
            <p style={{
              fontSize: '1rem', color: '#6B7280',
              lineHeight: 1.7, marginBottom: '2rem',
            }}>
              Join the community today. It is free, it is real, and it starts the moment you decide.
            </p>
            <div style={{
              display: 'flex', gap: '1rem',
              justifyContent: 'center', flexWrap: 'wrap',
            }}>
              <a href={HANDLES.whatsapp} target="_blank" rel="noopener noreferrer"
                className="btn-gold">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                Join WhatsApp Community
              </a>
              <a href={HANDLES.telegram} target="_blank" rel="noopener noreferrer"
                className="btn-ghost">
                Join Telegram Channel
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}