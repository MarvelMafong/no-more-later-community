import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { HANDLES } from '@/lib/data'

export const metadata = {
  title: 'Testimonials — No More Later',
  description: 'Real stories from real No More Later community members whose lives have been impacted by taking action.',
}

// Sample testimonials — replaced with real Supabase data when admin adds them
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Amara K.',
    location: 'Lagos, Nigeria',
    avatar: 'A',
    color: 'linear-gradient(135deg,#FACC15,#d97706)',
    quote: 'I joined No More Later three months ago thinking it was just another motivational group. It is not. It is the first community that actually made me move. I applied for a job I was scared of applying for. I got it.',
    impact: 'Got the job I was scared to apply for',
  },
  {
    id: 2,
    name: 'Kofi M.',
    location: 'Accra, Ghana',
    avatar: 'K',
    color: 'linear-gradient(135deg,#38BDF8,#0284c7)',
    quote: 'Reading Atomic Habits with the community changed something in me. It was not the book alone. It was reading it with people who were applying it in real time and sharing their results. That accountability is different.',
    impact: 'Built a consistent morning routine for the first time',
  },
  {
    id: 3,
    name: 'Ngozi A.',
    location: 'Abuja, Nigeria',
    avatar: 'N',
    color: 'linear-gradient(135deg,#34D399,#059669)',
    quote: 'I failed my exam twice. After joining this community I studied differently. Not harder. Smarter. I passed on my third attempt. The Wall posts reminded me every day that the road does not care how you feel — it responds to whether you move.',
    impact: 'Passed professional exam on third attempt',
  },
  {
    id: 4,
    name: 'Fatou D.',
    location: 'Dakar, Senegal',
    avatar: 'F',
    color: 'linear-gradient(135deg,#818CF8,#6366f1)',
    quote: 'I had been wanting to start my business for two years. I kept waiting for the right time. No More Later reminded me daily that the right time is a lie. I registered my business in January. We have our first three clients now.',
    impact: 'Started and registered her business',
  },
  {
    id: 5,
    name: 'Tunde B.',
    location: 'Ibadan, Nigeria',
    avatar: 'T',
    color: 'linear-gradient(135deg,#FB923C,#ea580c)',
    quote: 'The anonymous posting feature on The Wall is brilliant. I shared something I was embarrassed about. The response from the community pushed me to address it. Growth happens when you are honest, even if it is anonymously.',
    impact: 'Addressed a personal challenge through community support',
  },
  {
    id: 6,
    name: 'Miriam T.',
    location: 'Douala, Cameroon',
    avatar: 'M',
    color: 'linear-gradient(135deg,#FACC15,#f59e0b)',
    quote: 'Thirty days of showing up to something every day. That is all it took to rebuild my confidence. This community does not let you disappear. Someone always notices when you have been quiet.',
    impact: 'Rebuilt confidence through 30-day consistency',
  },
]

export default function TestimonialsPage() {
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
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <span style={{
              display: 'block', fontSize: '0.65rem', fontWeight: 600,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#FACC15', marginBottom: '1.25rem',
            }}>
              Real People. Real Results.
            </span>
            <h1 style={{
              fontFamily: 'var(--font-head)', fontWeight: 800,
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              color: '#fff', lineHeight: 1.05,
              letterSpacing: '-0.03em', marginBottom: '1.5rem',
            }}>
              Community Stories
            </h1>
            <p style={{
              fontSize: '1.1rem', color: '#6B7280',
              lineHeight: 1.75, maxWidth: '520px', margin: '0 auto',
            }}>
              One person whose life changes because of this community means everything to us.
            </p>
          </div>
        </section>

        {/* Testimonials grid */}
        <section style={{ background: '#0B0F19', padding: '20px 5vw 100px' }}>
          <div style={{
            maxWidth: '1100px', margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.25rem',
          }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={t.id} style={{
                background: '#111827',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px', padding: '2rem',
                display: 'flex', flexDirection: 'column', gap: '1.25rem',
                transition: 'border-color 0.2s, transform 0.2s',
                position: 'relative', overflow: 'hidden',
              }}
              >
                {/* Quote mark */}
                <div style={{
                  position: 'absolute', top: '1rem', right: '1.25rem',
                  fontFamily: 'Georgia, serif', fontSize: '4rem',
                  color: 'rgba(250,204,21,0.08)', lineHeight: 1,
                  pointerEvents: 'none',
                }}>
                  &#8220;
                </div>

                {/* Quote */}
                <p style={{
                  fontSize: '0.92rem', color: '#D1D5DB',
                  lineHeight: 1.75, flex: 1,
                  fontStyle: 'normal',
                }}>
                  {t.quote}
                </p>

                {/* Impact badge */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  background: 'rgba(250,204,21,0.1)',
                  border: '1px solid rgba(250,204,21,0.2)',
                  borderRadius: '999px', padding: '0.3rem 0.75rem',
                  width: 'fit-content',
                }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="#FACC15">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#FACC15', letterSpacing: '0.06em' }}>
                    {t.impact}
                  </span>
                </div>

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '0.25rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: t.color, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-head)', fontWeight: 800,
                    fontSize: '0.9rem', color: '#0B0F19',
                  }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-head)', fontWeight: 700,
                      fontSize: '0.88rem', color: '#fff',
                    }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#6B7280', marginTop: '0.1rem' }}>
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{
          background: '#FACC15', padding: '80px 5vw',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', bottom: '-3vw', right: '-2vw',
            fontFamily: 'var(--font-head)', fontWeight: 800,
            fontSize: 'clamp(6rem, 18vw, 18rem)',
            color: 'rgba(11,15,25,0.06)', lineHeight: 1,
            letterSpacing: '-0.05em', pointerEvents: 'none', userSelect: 'none',
          }}>
            YOU
          </div>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontFamily: 'var(--font-head)', fontWeight: 800,
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              color: '#0B0F19', letterSpacing: '-0.025em',
              lineHeight: 1.2, marginBottom: '1rem',
            }}>
              Your story could be next.
            </h2>
            <p style={{
              fontSize: '1rem', color: 'rgba(11,15,25,0.6)',
              lineHeight: 1.7, marginBottom: '2rem',
            }}>
              Join the community today. It is free and it starts the moment you decide.
            </p>
            <a href={HANDLES.whatsapp} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: '#0B0F19', color: '#FACC15',
              fontFamily: 'var(--font-head)', fontWeight: 700,
              fontSize: '0.95rem', padding: '1rem 2.25rem',
              borderRadius: '3px', textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            }}>
              Join WhatsApp Community
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}