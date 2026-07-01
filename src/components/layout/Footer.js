import Link from 'next/link'
import { HANDLES, SITE } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: '#060912',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '3rem 5vw',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', flexDirection: 'column', gap: '2rem',
      }}>

        {/* Top row */}
        <div style={{
          display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem',
        }}>
          {/* Brand */}
          <div style={{ maxWidth: '300px' }}>
            <div style={{
              fontFamily: 'var(--font-head)', fontWeight: 800,
              fontSize: '0.9rem', color: '#fff', letterSpacing: '0.06em',
              marginBottom: '0.6rem',
            }}>
              NO <span style={{ color: '#FACC15' }}>MORE</span> LATER
            </div>
            <p style={{ fontSize: '0.82rem', color: '#6B7280', lineHeight: 1.7 }}>
              A free personal growth community for people who are done waiting and ready to move.
            </p>
            <a href={SITE.donationLink} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                marginTop: '1rem', fontSize: '0.75rem', fontWeight: 600,
                color: '#FACC15', textDecoration: 'none',
                border: '1px solid rgba(250,204,21,0.3)',
                padding: '0.4rem 0.9rem', borderRadius: '999px',
                transition: 'background 0.2s',
              }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              Support Our Work
            </a>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{
                fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.16em',
                textTransform: 'uppercase', color: '#6B7280', marginBottom: '0.85rem',
              }}>
                Pages
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { label: 'About', href: '/about' },
                  { label: 'How It Works', href: '/how-it-works' },
                  { label: 'The Wall', href: '/wall' },
                  { label: 'Current Read', href: '/current-read' },
                  { label: 'Testimonials', href: '/testimonials' },
                  { label: 'FAQ', href: '/faq' },
                  { label: 'Contact', href: '/contact' },
                ].map(link => (
                  <Link key={link.href} href={link.href} style={{
                    fontSize: '0.82rem', color: '#9CA3AF',
                    textDecoration: 'none', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = '#9CA3AF'}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div style={{
                fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.16em',
                textTransform: 'uppercase', color: '#6B7280', marginBottom: '0.85rem',
              }}>
                Community
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { label: 'WhatsApp', href: HANDLES.whatsapp },
                  { label: 'Telegram', href: HANDLES.telegram },
                  { label: 'Instagram', href: HANDLES.instagram },
                  { label: 'TikTok', href: HANDLES.tiktok },
                  { label: 'Facebook', href: HANDLES.facebook },
                  { label: 'LinkedIn', href: HANDLES.linkedin },
                  { label: 'X (Twitter)', href: HANDLES.x },
                ].map(link => (
                  <a key={link.label} href={link.href}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      fontSize: '0.82rem', color: '#9CA3AF',
                      textDecoration: 'none', transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = '#9CA3AF'}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
        }}>
          <p style={{ fontSize: '0.75rem', color: '#4B5563' }}>
            &copy; {year} No More Later. All rights reserved.
          </p>
          <p style={{
            fontSize: '0.72rem', color: '#4B5563',
            fontFamily: 'var(--font-head)', fontWeight: 700,
            letterSpacing: '0.08em',
          }}>
            Tomorrow is Later. Later is a Lie.
          </p>
        </div>
      </div>
    </footer>
  )
}