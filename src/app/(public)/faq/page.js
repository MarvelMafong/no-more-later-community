'use client'
import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { FAQS } from '@/lib/data'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: '1rem',
          padding: '1.5rem 0', background: 'none', border: 'none',
          cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-head)', fontWeight: 600,
          fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
          color: open ? '#FACC15' : '#fff',
          lineHeight: 1.4, transition: 'color 0.2s',
        }}>
          {q}
        </span>
        <span style={{
          flexShrink: 0, width: '28px', height: '28px',
          borderRadius: '50%', background: open ? '#FACC15' : 'rgba(255,255,255,0.06)',
          border: open ? 'none' : '1px solid rgba(255,255,255,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.2s', color: open ? '#0B0F19' : '#6B7280',
          fontSize: '1.1rem', lineHeight: 1,
        }}>
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div style={{
          paddingBottom: '1.5rem',
          fontSize: '0.95rem', color: '#9CA3AF',
          lineHeight: 1.75,
        }}>
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
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
              Got Questions?
            </span>
            <h1 style={{
              fontFamily: 'var(--font-head)', fontWeight: 800,
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              color: '#fff', lineHeight: 1.05,
              letterSpacing: '-0.03em', marginBottom: '1.5rem',
            }}>
              Frequently Asked Questions
            </h1>
            <p style={{
              fontSize: '1.1rem', color: '#6B7280',
              lineHeight: 1.75, maxWidth: '520px',
            }}>
              Everything you need to know about No More Later.
            </p>
          </div>
        </section>

        {/* FAQ List */}
        <section style={{ background: '#0B0F19', padding: '20px 5vw 100px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {FAQS.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </section>

        {/* Still have questions */}
        <section style={{
          background: '#111827', padding: '80px 5vw',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontFamily: 'var(--font-head)', fontWeight: 800,
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#fff', marginBottom: '0.75rem',
            }}>
              Still have questions?
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Send us a message and we will get back to you.
            </p>
            <a href="/contact" className="btn-gold">
              Contact Us
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}