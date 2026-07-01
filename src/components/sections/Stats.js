import { HANDLES } from '@/lib/data'

export default function Hero() {
  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '120px 5vw 80px', overflow: 'hidden',
      background: '#0B0F19',
    }}>
      {/* Radial glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 80% 60% at 50% 0%, rgba(250,204,21,0.09) 0%, transparent 70%),
          radial-gradient(ellipse 60% 40% at 80% 100%, rgba(250,204,21,0.05) 0%, transparent 60%)
        `,
      }} />

      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)',
        maskImage: 'radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        textAlign: 'center', maxWidth: '900px', width: '100%',
      }}>
        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: '#FACC15',
          marginBottom: '2rem', opacity: 0.9,
        }}>
          <span style={{ display: 'block', width: '28px', height: '1px', background: '#FACC15', opacity: 0.5 }} />
          A Free Personal Growth Community
          <span style={{ display: 'block', width: '28px', height: '1px', background: '#FACC15', opacity: 0.5 }} />
        </div>

        {/* Heading */}
        <h1 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
          <span style={{ display: 'block', fontSize: 'clamp(3.5rem, 10vw, 8rem)', color: '#fff' }}>NO</span>
          <span style={{ display: 'block', fontSize: 'clamp(3.5rem, 10vw, 8rem)', color: '#fff' }}>MORE</span>
          {/* LATER with strikethrough */}
          <span style={{
            display: 'inline-block', position: 'relative',
            fontSize: 'clamp(3.5rem, 10vw, 8rem)', color: '#FACC15',
          }}>
            LATER
            <span style={{
              position: 'absolute', left: '-4%', right: '-4%', top: '50%',
              height: '6px', background: '#FACC15', borderRadius: '3px',
              transform: 'translateY(-50%) rotate(-1.5deg)',
            }} />
          </span>
        </h1>

        <p style={{
          fontFamily: 'var(--font-head)', fontWeight: 600,
          fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
          color: '#D1D5DB', marginBottom: '1rem',
        }}>
          Stop waiting. Start doing.
        </p>

        <p style={{
          fontSize: '1rem', color: '#6B7280',
          maxWidth: '480px', margin: '0 auto 2.5rem',
          lineHeight: 1.75,
        }}>
          A free community for people who are tired of procrastinating and ready to take action.
        </p>

        {/* Buttons */}
        <div style={{
          display: 'flex', gap: '1rem',
          justifyContent: 'center', flexWrap: 'wrap',
        }}>
          <a href={HANDLES.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
            </svg>
            Join WhatsApp Community
          </a>
          <a href={HANDLES.telegram} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Join Telegram Channel
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        color: '#6B7280', fontSize: '0.7rem', letterSpacing: '0.12em',
        textTransform: 'uppercase', animation: 'nmlBounce 2.4s ease-in-out infinite',
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
        Scroll
      </div>

      <style>{`
        @keyframes nmlBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  )
}