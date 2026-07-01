'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { HANDLES } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 5vw', height: '60px',
        background: 'rgba(11,15,25,0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none',
        transition: 'box-shadow 0.3s',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily: 'var(--font-head)',
          fontWeight: 800, fontSize: '0.88rem',
          color: '#fff', letterSpacing: '0.06em',
          textDecoration: 'none',
        }}>
          NO <span style={{ color: '#FACC15' }}>MORE</span> LATER
        </Link>

        {/* Desktop Links */}
        <ul style={{
          display: 'flex', gap: '2rem', listStyle: 'none',
          alignItems: 'center',
        }} className="nav-desktop-links">
          {[
            { label: 'About', href: '/about' },
            { label: 'What We Do', href: '/how-it-works' },
            { label: 'The Wall', href: '/wall' },
            { label: 'Current Read', href: '/current-read' },
            { label: 'FAQ', href: '/faq' },
          ].map((link) => (
            <li key={link.href}>
              <Link href={link.href} style={{
                fontSize: '0.78rem', fontWeight: 500,
                color: '#9CA3AF', letterSpacing: '0.04em',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = '#9CA3AF'}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href={HANDLES.whatsapp} target="_blank" rel="noopener noreferrer"
          className="nav-desktop-links"
          style={{
            background: '#FACC15', color: '#0B0F19',
            fontFamily: 'var(--font-head)', fontWeight: 700,
            fontSize: '0.75rem', padding: '0.5rem 1.25rem',
            borderRadius: '999px', textDecoration: 'none',
            letterSpacing: '0.03em', transition: 'opacity 0.2s',
            whiteSpace: 'nowrap',
          }}>
          Join Free
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="nav-hamburger"
          style={{
            display: 'none', flexDirection: 'column', gap: '5px',
            background: 'none', border: 'none', padding: '4px', cursor: 'pointer',
          }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '2px',
              background: '#fff', borderRadius: '2px', transition: 'all 0.3s',
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '60px', left: 0, right: 0,
          background: '#0d1120', borderBottom: '1px solid rgba(255,255,255,0.07)',
          padding: '1.5rem 5vw', zIndex: 99,
          display: 'flex', flexDirection: 'column', gap: '1.25rem',
        }}>
          {[
            { label: 'About', href: '/about' },
            { label: 'What We Do', href: '/how-it-works' },
            { label: 'The Wall', href: '/wall' },
            { label: 'Current Read', href: '/current-read' },
            { label: 'Community', href: '/community' },
            { label: 'FAQ', href: '/faq' },
            { label: 'Contact', href: '/contact' },
          ].map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu} style={{
              fontSize: '0.9rem', color: '#9CA3AF',
              fontWeight: 500, textDecoration: 'none',
            }}>
              {link.label}
            </Link>
          ))}
          <a href={HANDLES.whatsapp} target="_blank" rel="noopener noreferrer"
            onClick={closeMenu}
            style={{
              background: '#FACC15', color: '#0B0F19',
              fontFamily: 'var(--font-head)', fontWeight: 700,
              fontSize: '0.85rem', padding: '0.75rem 1.5rem',
              borderRadius: '999px', textDecoration: 'none',
              textAlign: 'center', marginTop: '0.5rem',
            }}>
            Join Free
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}