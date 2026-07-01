export default function AboutSummary() {
  const manifesto = ['Read More.', 'Learn More.', 'Do More.', 'Become More.']

  return (
    <section className="section-dark" id="about">
      <div className="max-w">
        <span className="section-label reveal">Our Story</span>
        <h2 className="section-title reveal reveal-d1">About Us</h2>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '5vw', marginTop: '4rem', alignItems: 'start',
        }} className="about-grid">

          {/* Left: text */}
          <div>
            {[
              'No More Later is a personal growth community built for people who want more from life.',
              'We believe that success is not created by motivation alone. It is created by discipline, consistency, learning, and action.',
              'Through books, challenges, lessons, accountability, and practical growth strategies, we help members become better versions of themselves — one step at a time.',
              'Our goal is simple. Read more. Learn more. Do more. Become more.',
              'Because tomorrow is later. And later is a lie.',
            ].map((para, i) => (
              <p key={i} className={`reveal reveal-d${Math.min(i + 1, 4)}`} style={{
                fontSize: '1rem', lineHeight: 1.85,
                color: '#9CA3AF', marginBottom: '1.1rem',
              }}>
                {para}
              </p>
            ))}
          </div>

          {/* Right: manifesto */}
          <div style={{
            position: 'sticky', top: '80px',
            display: 'flex', flexDirection: 'column', gap: '0',
            border: '1.5px solid rgba(255,255,255,0.07)',
            borderRadius: '16px', overflow: 'hidden',
          }} className="reveal reveal-d2">
            <div style={{
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              fontSize: '0.62rem', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#6B7280',
            }}>
              Our Manifesto
            </div>
            {manifesto.map((line, i) => (
              <div key={line} style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '1.1rem 1.5rem',
                borderBottom: i < manifesto.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}>
                <span style={{
                  fontFamily: 'var(--font-head)', fontWeight: 800,
                  fontSize: '0.62rem', color: 'rgba(255,255,255,0.2)',
                  letterSpacing: '0.08em', flexShrink: 0,
                }}>
                  0{i + 1}
                </span>
                <span style={{
                  fontFamily: 'var(--font-head)', fontWeight: 800,
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)',
                  color: i === manifesto.length - 1 ? '#FACC15' : '#fff',
                  letterSpacing: '-0.02em', lineHeight: 1,
                }}>
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-grid > div:last-child { position: static !important; }
        }
      `}</style>
    </section>
  )
}