'use client'

const STORIES = [
  { name: 'Amara', color: 'linear-gradient(135deg,#818CF8,#6366f1)', seen: false },
  { name: 'Kofi', color: 'linear-gradient(135deg,#34D399,#059669)', seen: false },
  { name: 'Ngozi', color: 'linear-gradient(135deg,#F472B6,#db2777)', seen: false },
  { name: 'Tunde', color: 'linear-gradient(135deg,#FB923C,#ea580c)', seen: true },
  { name: 'Fatou', color: 'linear-gradient(135deg,#38BDF8,#0284c7)', seen: true },
  { name: 'Miriam', color: 'linear-gradient(135deg,#FACC15,#d97706)', seen: false },
  { name: 'Bola', color: 'linear-gradient(135deg,#34D399,#0d9488)', seen: true },
  { name: 'Chidi', color: 'linear-gradient(135deg,#FB923C,#dc2626)', seen: false },
]

export default function StoriesRow({ onCompose }) {
  return (
    <div style={{
      padding: '1rem 1rem 0.85rem',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      overflowX: 'auto', scrollbarWidth: 'none',
    }}>
      <div style={{
        display: 'flex', gap: '0.85rem',
        width: 'max-content',
      }}>
        {/* Add story */}
        <div onClick={onCompose} style={{ cursor: 'pointer' }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '50%',
            background: '#111827',
            border: '2px dashed rgba(250,204,21,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'border-color 0.2s',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FACC15" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </div>
          <div style={{
            fontSize: '0.58rem', color: '#FACC15',
            textAlign: 'center', marginTop: '0.4rem',
            fontWeight: 600,
          }}>
            Post
          </div>
        </div>

        {/* Stories */}
        {STORIES.map((s) => (
          <div key={s.name} style={{ cursor: 'pointer' }}>
            <div style={{
              width: '56px', height: '56px', borderRadius: '50%', padding: '2.5px',
              background: s.seen
                ? 'rgba(255,255,255,0.1)'
                : 'linear-gradient(135deg,#FACC15,#f59e0b,#ef4444)',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{
                width: '100%', height: '100%', borderRadius: '50%',
                background: s.color,
                border: '2.5px solid #0B0F19',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-head)', fontWeight: 800,
                fontSize: '1rem', color: '#fff',
              }}>
                {s.name[0]}
              </div>
            </div>
            <div style={{
              fontSize: '0.58rem', color: '#6B7280',
              textAlign: 'center', marginTop: '0.4rem',
              maxWidth: '56px', overflow: 'hidden',
              textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>
              {s.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}