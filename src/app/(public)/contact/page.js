'use client'
import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { HANDLES, SITE } from '@/lib/data'

const CONTACTS = [
  {
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="3"/>
        <path d="m2 7 10 7 10-7"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: 'WhatsApp Community',
    href: HANDLES.whatsapp,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
      </svg>
    ),
  },
  {
    label: 'Telegram',
    value: 'Telegram Channel',
    href: HANDLES.telegram,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@nomorelater',
    href: HANDLES.instagram,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    value: '@nomorelater',
    href: HANDLES.tiktok,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.07 8.07 0 004.74 1.52V6.75a4.86 4.86 0 01-.97-.06z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    value: '@nomorelater',
    href: HANDLES.facebook,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    value: '@nomorelater',
    href: HANDLES.x,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (!form.message.trim()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'contact' }),
      })
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,0.04)',
    border: '1.5px solid rgba(255,255,255,0.07)', borderRadius: '10px',
    padding: '0.8rem 1rem', fontSize: '0.92rem', color: '#fff',
    outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
  }

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
              Reach Us
            </span>
            <h1 style={{
              fontFamily: 'var(--font-head)', fontWeight: 800,
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              color: '#fff', lineHeight: 1.05,
              letterSpacing: '-0.03em', marginBottom: '1.5rem',
            }}>
              Contact
            </h1>
            <p style={{
              fontSize: '1.1rem', color: '#6B7280',
              lineHeight: 1.75, maxWidth: '480px',
            }}>
              We read everything. Send us a message or find us on any of our platforms.
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ background: '#0B0F19', padding: '20px 5vw 100px' }}>
          <div style={{
            maxWidth: '1000px', margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '4rem', alignItems: 'start',
          }} className="contact-grid">

            {/* Platform links */}
            <div>
              <h2 style={{
                fontFamily: 'var(--font-head)', fontWeight: 700,
                fontSize: '1.1rem', color: '#fff',
                marginBottom: '1.5rem',
              }}>
                Find Us Everywhere
              </h2>
              <div style={{
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px', overflow: 'hidden',
              }}>
                {CONTACTS.map((c, i) => (
                  <a key={c.label} href={c.href}
                    target={c.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between', padding: '1rem 1.25rem',
                      borderBottom: i < CONTACTS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                      textDecoration: 'none', transition: 'background 0.2s',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div style={{
                        width: '36px', height: '36px', borderRadius: '8px',
                        background: 'rgba(250,204,21,0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#FACC15', flexShrink: 0,
                      }}>
                        {c.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.65rem', color: '#6B7280', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>
                          {c.label}
                        </div>
                        <div style={{ fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: '0.88rem', color: '#fff' }}>
                          {c.value}
                        </div>
                      </div>
                    </div>
                    <span className="c-arrow" style={{ color: '#6B7280', transition: 'transform 0.2s' }}>
                      &#8594;
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 style={{
                fontFamily: 'var(--font-head)', fontWeight: 700,
                fontSize: '1.1rem', color: '#fff',
                marginBottom: '1.5rem',
              }}>
                Send a Message
              </h2>

              {status === 'success' ? (
                <div style={{
                  background: 'rgba(52,211,153,0.08)',
                  border: '1px solid rgba(52,211,153,0.2)',
                  borderRadius: '16px', padding: '2.5rem',
                  textAlign: 'center',
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" style={{ margin: '0 auto 1rem' }}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                    Message sent.
                  </h3>
                  <p style={{ color: '#6B7280', fontSize: '0.88rem' }}>We will get back to you soon.</p>
                  <button onClick={() => setStatus('idle')} className="btn-ghost" style={{ marginTop: '1.5rem' }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B7280', display: 'block', marginBottom: '0.4rem' }}>
                        Name (Optional)
                      </label>
                      <input style={inputStyle} type="text" name="name" value={form.name}
                        onChange={handle} placeholder="Your name"
                        onFocus={e => { e.target.style.borderColor = '#FACC15'; e.target.style.boxShadow = '0 0 0 3px rgba(250,204,21,0.07)' }}
                        onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.07)'; e.target.style.boxShadow = 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B7280', display: 'block', marginBottom: '0.4rem' }}>
                        Email (Optional)
                      </label>
                      <input style={inputStyle} type="email" name="email" value={form.email}
                        onChange={handle} placeholder="your@email.com"
                        onFocus={e => { e.target.style.borderColor = '#FACC15'; e.target.style.boxShadow = '0 0 0 3px rgba(250,204,21,0.07)' }}
                        onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.07)'; e.target.style.boxShadow = 'none' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B7280', display: 'block', marginBottom: '0.4rem' }}>
                      Message
                    </label>
                    <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: '140px', lineHeight: 1.65 }}
                      name="message" value={form.message} onChange={handle} required
                      placeholder="What would you like to say?"
                      onFocus={e => { e.target.style.borderColor = '#FACC15'; e.target.style.boxShadow = '0 0 0 3px rgba(250,204,21,0.07)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.07)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                  {status === 'error' && (
                    <p style={{ color: '#F87171', fontSize: '0.82rem' }}>
                      Something went wrong. Please try again.
                    </p>
                  )}
                  <button type="submit" disabled={status === 'loading'} className="btn-gold"
                    style={{ opacity: status === 'loading' ? 0.6 : 1, justifyContent: 'center' }}>
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </>
  )
}