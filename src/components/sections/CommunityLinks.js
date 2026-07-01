import { HANDLES } from '@/lib/data'

const PLATFORMS = [
  {
    name: 'WhatsApp Community', handle: 'Join the main community',
    href: 'whatsapp', color: '#25D366',
    icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>,
  },
  {
    name: 'Telegram Channel', handle: '@nomorelater',
    href: 'telegram', color: '#229ED9',
    icon: <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>,
  },
  {
    name: 'Instagram', handle: '@nomorelater',
    href: 'instagram', color: '#E1306C',
    icon: <><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></>,
  },
  {
    name: 'TikTok', handle: '@nomorelater',
    href: 'tiktok', color: '#fff',
    icon: <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.07 8.07 0 004.74 1.52V6.75a4.86 4.86 0 01-.97-.06z"/>,
  },
  {
    name: 'Facebook', handle: '@nomorelater',
    href: 'facebook', color: '#1877F2',
    icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>,
  },
  {
    name: 'LinkedIn', handle: '@nomorelater',
    href: 'linkedin', color: '#0077B5',
    icon: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></>,
  },
  {
    name: 'X (Twitter)', handle: '@nomorelater',
    href: 'x', color: '#fff',
    icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>,
  },
]

export default function CommunityLinks() {
  return (
    <section className="section-dark" id="community">
      <div className="max-w">
        <span className="section-label reveal">Stay Connected</span>
        <h2 className="section-title reveal reveal-d1">Join Us Everywhere</h2>
        <p className="reveal reveal-d2" style={{
          fontSize: '1rem', color: '#6B7280',
          marginTop: '0.5rem', marginBottom: '3rem',
        }}>
          Stay connected with No More Later across all our platforms.
        </p>

        {/* Platform list */}
        <div style={{
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '16px', overflow: 'hidden',
        }} className="reveal reveal-d2">
          {PLATFORMS.map((p, i) => (
            <a key={p.name}
              href={HANDLES[p.href]}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', padding: '1.25rem 1.75rem',
                borderBottom: i < PLATFORMS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                textDecoration: 'none', transition: 'background 0.2s',
                background: 'transparent',
              }}}}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '38px', height: '38px', borderRadius: '8px',
                  background: '#111827', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={p.color}>
                    {p.icon}
                  </svg>
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-head)', fontWeight: 600,
                    fontSize: '0.95rem', color: '#fff',
                  }}>
                    {p.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#6B7280', marginTop: '0.1rem' }}>
                    {p.handle}
                  </div>
                </div>
              </div>
              <span className="arrow" style={{
                color: '#FACC15', fontSize: '1.1rem',
                transition: 'transform 0.2s',
              }}>
                &#8594;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}