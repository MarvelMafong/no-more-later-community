'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function BottomNav({ onCompose }) {
  const pathname = usePathname()

  const items = [
    {
      label: 'Home', href: '/',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
    },
    {
      label: 'Wall', href: '/wall',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
      ),
    },
    {
      label: 'Reads', href: '/current-read',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
        </svg>
      ),
    },
    {
      label: 'Community', href: '/community',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87"/>
          <path d="M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
    },
  ]

  return (
    <nav style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
      height: '64px', background: 'rgba(11,15,25,0.97)',
      backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-around', padding: '0 0.5rem',
    }}>
      {items.slice(0, 2).map((item) => {
        const active = pathname === item.href
        return (
          <Link key={item.href} href={item.href} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: '0.2rem', flex: 1, padding: '0.5rem',
            textDecoration: 'none',
          }}>
            <div style={{
              color: active ? '#FACC15' : '#6B7280',
              position: 'relative', transition: 'color 0.2s',
            }}>
              {item.icon}
              {active && (
                <div style={{
                  position: 'absolute', bottom: '-6px', left: '50%',
                  transform: 'translateX(-50%)',
                  width: '4px', height: '4px',
                  borderRadius: '50%', background: '#FACC15',
                }} />
              )}
            </div>
            <span style={{
              fontSize: '0.58rem', fontWeight: 600,
              letterSpacing: '0.04em', textTransform: 'uppercase',
              color: active ? '#FACC15' : '#6B7280',
              transition: 'color 0.2s',
            }}>
              {item.label}
            </span>
          </Link>
        )
      })}

      {/* Compose button */}
      <button onClick={onCompose} style={{
        width: '48px', height: '48px', borderRadius: '50%',
        background: '#FACC15', color: '#0B0F19',
        border: 'none', cursor: 'pointer', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(250,204,21,0.35)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(250,204,21,0.45)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(250,204,21,0.35)' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      </button>

      {items.slice(2).map((item) => {
        const active = pathname === item.href
        return (
          <Link key={item.href} href={item.href} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: '0.2rem', flex: 1, padding: '0.5rem',
            textDecoration: 'none',
          }}>
            <div style={{
              color: active ? '#FACC15' : '#6B7280',
              position: 'relative', transition: 'color 0.2s',
            }}>
              {item.icon}
              {active && (
                <div style={{
                  position: 'absolute', bottom: '-6px', left: '50%',
                  transform: 'translateX(-50%)',
                  width: '4px', height: '4px',
                  borderRadius: '50%', background: '#FACC15',
                }} />
              )}
            </div>
            <span style={{
              fontSize: '0.58rem', fontWeight: 600,
              letterSpacing: '0.04em', textTransform: 'uppercase',
              color: active ? '#FACC15' : '#6B7280',
              transition: 'color 0.2s',
            }}>
              {item.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}