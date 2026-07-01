import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { CURRENT_BOOK, HANDLES } from '@/lib/data'

export const metadata = {
  title: 'Current Read — No More Later',
  description: 'The No More Later community is currently reading ' + CURRENT_BOOK.title + ' by ' + CURRENT_BOOK.author + '. Request your free copy today.',
}

const PAST_BOOKS = [
  { title: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', month: 'May 2025', members: 1100 },
  { title: 'Deep Work', author: 'Cal Newport', month: 'April 2025', members: 980 },
  { title: 'Think and Grow Rich', author: 'Napoleon Hill', month: 'March 2025', members: 870 },
  { title: 'The Power of Now', author: 'Eckhart Tolle', month: 'February 2025', members: 760 },
  { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', month: 'January 2025', members: 640 },
]

export default function CurrentReadPage() {
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
              Reading Together
            </span>
            <h1 style={{
              fontFamily: 'var(--font-head)', fontWeight: 800,
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              color: '#fff', lineHeight: 1.05,
              letterSpacing: '-0.03em', marginBottom: '1.5rem',
            }}>
              Current Community Read
            </h1>
            <p style={{
              fontSize: '1.1rem', color: '#6B7280',
              lineHeight: 1.75, maxWidth: '520px',
            }}>
              Every month we read one book together. Apply what you learn. Grow one page at a time.
            </p>
          </div>
        </section>

        {/* Current book featured */}
        <section style={{ background: '#F7F4EF', padding: '80px 5vw' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{
              background: '#0B0F19',
              border: '1px solid rgba(250,204,21,0.2)',
              borderRadius: '24px', overflow: 'hidden',
              display: 'grid', gridTemplateColumns: '280px 1fr',
              boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
            }} className="read-hero-card">

              {/* Book spine */}
              <div style={{
                background: '#FACC15',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'space-between',
                padding: '3rem 2rem', position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg,rgba(255,255,255,0.15) 0%,transparent 60%)',
                }} />
                {/* NOW READING badge */}
                <div style={{
                  position: 'relative', zIndex: 1,
                  background: '#0B0F19', color: '#FACC15',
                  fontSize: '0.6rem', fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  padding: '0.3rem 0.75rem', borderRadius: '999px',
                }}>
                  Now Reading
                </div>
                <div style={{
                  writingMode: 'vertical-rl', textOrientation: 'mixed',
                  transform: 'rotate(180deg)',
                  fontFamily: 'var(--font-head)', fontWeight: 800,
                  fontSize: 'clamp(1.4rem, 3vw, 2.25rem)',
                  color: '#0B0F19', letterSpacing: '0.04em',
                  position: 'relative', zIndex: 1,
                }}>
                  {CURRENT_BOOK.title}
                </div>
                <div style={{
                  fontSize: '0.7rem', fontWeight: 600,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'rgba(11,15,25,0.6)', position: 'relative', zIndex: 1,
                }}>
                  {CURRENT_BOOK.author}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '3rem' }}>
                <div style={{
                  fontSize: '0.65rem', fontWeight: 600,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: '#FACC15', marginBottom: '0.75rem',
                }}>
                  {CURRENT_BOOK.month} — Community Pick
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-head)', fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                  color: '#fff', letterSpacing: '-0.025em',
                  lineHeight: 1.1, marginBottom: '0.5rem',
                }}>
                  {CURRENT_BOOK.title}
                </h2>
                <p style={{ fontSize: '0.88rem', color: '#6B7280', marginBottom: '2rem' }}>
                  by {CURRENT_BOOK.author}
                </p>

                <p style={{ fontSize: '0.95rem', color: '#9CA3AF', lineHeight: 1.75, marginBottom: '2rem' }}>
                  Reading one chapter at a time. Growing one day at a time. Small changes compound into extraordinary results when applied consistently over time.
                </p>

                {/* Progress */}
                <div style={{ marginBottom: '2.5rem' }}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    marginBottom: '0.6rem',
                  }}>
                    <span style={{ fontSize: '0.72rem', color: '#6B7280', fontWeight: 500 }}>
                      Community Progress
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#FACC15', fontWeight: 600 }}>
                      {CURRENT_BOOK.progress}% — Chapter {CURRENT_BOOK.chapter} of {CURRENT_BOOK.totalChapters}
                    </span>
                  </div>
                  <div style={{
                    height: '6px', background: 'rgba(255,255,255,0.07)',
                    borderRadius: '3px', overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%', width: `${CURRENT_BOOK.progress}%`,
                      background: 'linear-gradient(90deg, #FACC15, #f59e0b)',
                      borderRadius: '3px',
                    }} />
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href={HANDLES.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
                    </svg>
                    Request This Book — Free of Charge
                  </a>
                  <a href="/wall" className="btn-ghost">
                    See Discussions on The Wall
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section style={{ background: '#0B0F19', padding: '80px 5vw' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{
              display: 'block', fontSize: '0.65rem', fontWeight: 600,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#FACC15', marginBottom: '0.75rem',
            }}>
              How It Works
            </span>
            <h2 style={{
              fontFamily: 'var(--font-head)', fontWeight: 800,
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: '#fff', letterSpacing: '-0.025em', marginBottom: '3rem',
            }}>
              Reading Together Is Different
            </h2>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
            }} className="how-grid">
              {[
                { num: '01', title: 'Request the book', desc: 'Ask for the current month\'s book through WhatsApp or the button above. It is free.' },
                { num: '02', title: 'Read together', desc: 'Follow along with the community. Share your highlights and lessons on The Wall.' },
                { num: '03', title: 'Apply and share', desc: 'Put what you learn into practice. Your story might be what someone else needs to start.' },
              ].map(item => (
                <div key={item.num} style={{
                  background: '#111827', borderRadius: '16px',
                  padding: '2rem', border: '1px solid rgba(255,255,255,0.07)',
                  textAlign: 'left',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-head)', fontWeight: 800,
                    fontSize: '0.7rem', color: '#FACC15',
                    letterSpacing: '0.12em', marginBottom: '1rem',
                  }}>
                    {item.num}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-head)', fontWeight: 700,
                    fontSize: '1rem', color: '#fff', marginBottom: '0.6rem',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#6B7280', lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past reads */}
        <section style={{ background: '#0d1120', padding: '80px 5vw' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span style={{
              display: 'block', fontSize: '0.65rem', fontWeight: 600,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#FACC15', marginBottom: '0.75rem',
            }}>
              Our Reading History
            </span>
            <h2 style={{
              fontFamily: 'var(--font-head)', fontWeight: 800,
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: '#fff', letterSpacing: '-0.025em', marginBottom: '2.5rem',
            }}>
              Books We Have Read Together
            </h2>

            <div style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', overflow: 'hidden' }}>
              {PAST_BOOKS.map((book, i) => (
                <div key={book.title} style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', gap: '1rem',
                  padding: '1.25rem 1.5rem',
                  borderBottom: i < PAST_BOOKS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '40px', height: '56px', borderRadius: '4px',
                      background: '#FACC15', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B0F19" strokeWidth="2">
                        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-head)', fontWeight: 600,
                        fontSize: '0.92rem', color: '#fff', marginBottom: '0.2rem',
                      }}>
                        {book.title}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>
                        {book.author}
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontSize: '0.72rem', color: '#FACC15', fontWeight: 600, marginBottom: '0.15rem' }}>
                      {book.month}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#6B7280' }}>
                      {book.members.toLocaleString()} members
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .read-hero-card { grid-template-columns: 280px 1fr !important; }
        .how-grid { grid-template-columns: repeat(3, 1fr) !important; }
        @media (max-width: 768px) {
          .read-hero-card { grid-template-columns: 1fr !important; }
          .how-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}