'use client'
import { useState } from 'react'
import Link from 'next/link'

const CAT_COLORS = {
  'Mindset':    { bg: 'rgba(52,211,153,0.12)',  text: '#34D399' },
  'Book Note':  { bg: 'rgba(129,140,248,0.12)', text: '#818CF8' },
  'Action':     { bg: 'rgba(244,114,182,0.12)', text: '#F472B6' },
  'Life':       { bg: 'rgba(251,146,60,0.12)',  text: '#FB923C' },
  'Growth':     { bg: 'rgba(250,204,21,0.12)',  text: '#FACC15' },
  'Video':      { bg: 'rgba(56,189,248,0.12)',  text: '#38BDF8' },
}

function CatPill({ cat }) {
  const c = CAT_COLORS[cat] || { bg: 'rgba(255,255,255,0.08)', text: '#9CA3AF' }
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      fontSize: '0.58rem', fontWeight: 700,
      letterSpacing: '0.14em', textTransform: 'uppercase',
      padding: '0.2rem 0.55rem', borderRadius: '999px',
      background: c.bg, color: c.text,
    }}>
      {cat}
    </span>
  )
}

function Reactions({ postId }) {
  const [active, setActive] = useState(null)
  const [counts, setCounts] = useState({ fire: 142, heart: 89, comment: 23 })

  const react = (type) => {
    if (active === type) {
      setActive(null)
      setCounts(prev => ({ ...prev, [type]: prev[type] - 1 }))
    } else {
      if (active) setCounts(prev => ({ ...prev, [active]: prev[active] - 1 }))
      setActive(type)
      setCounts(prev => ({ ...prev, [type]: prev[type] + 1 }))
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
      {[
        { key: 'fire', emoji: '🔥' },
        { key: 'heart', emoji: '💛' },
        { key: 'comment', emoji: '💬' },
      ].map(({ key, emoji }) => (
        <button key={key} onClick={() => react(key)} style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.28rem',
          background: active === key ? 'rgba(250,204,21,0.1)' : 'rgba(255,255,255,0.04)',
          border: active === key ? '1px solid rgba(250,204,21,0.3)' : '1px solid rgba(255,255,255,0.07)',
          borderRadius: '999px', padding: '0.28rem 0.55rem',
          fontSize: '0.7rem', color: active === key ? '#FACC15' : '#6B7280',
          cursor: 'pointer', transition: 'all 0.15s',
        }}>
          <span style={{ fontSize: '0.8rem' }}>{emoji}</span>
          {counts[key]}
        </button>
      ))}
    </div>
  )
}

function AuthorRow({ name, time, isAnon, avatarColor }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', flexShrink: 0 }}>
      <div style={{
        width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
        background: isAnon ? '#1f2937' : (avatarColor || 'linear-gradient(135deg,#FACC15,#d97706)'),
        border: '1.5px solid rgba(255,255,255,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-head)', fontWeight: 700,
        fontSize: '0.68rem', color: isAnon ? '#6B7280' : '#0B0F19',
      }}>
        {isAnon ? '?' : name[0]}
      </div>
      <div>
        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: isAnon ? '#6B7280' : '#D1D5DB' }}>
          {isAnon ? 'Anonymous' : name}
        </div>
        <div style={{ fontSize: '0.6rem', color: '#6B7280' }}>{time}</div>
      </div>
    </div>
  )
}

// ── POST TYPES ───────────────────────────────────────────

function QuotePost({ post }) {
  const accentColor = CAT_COLORS[post.category]?.text || '#FACC15'
  return (
    <div style={{ padding: '1.75rem 1.25rem 1.25rem', position: 'relative' }}>
      {/* Accent bar */}
      <div style={{
        position: 'absolute', left: 0, top: '1.75rem', bottom: '1.25rem',
        width: '3px', borderRadius: '0 2px 2px 0', background: accentColor,
      }} />
      {post.featured && (
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
          fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.14em',
          color: '#FACC15', background: 'rgba(250,204,21,0.1)',
          padding: '0.18rem 0.5rem', borderRadius: '999px',
          border: '1px solid rgba(250,204,21,0.2)', marginBottom: '0.75rem',
        }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          Featured
        </div>
      )}
      <div style={{ marginBottom: '0.85rem' }}>
        <CatPill cat={post.category} />
      </div>
      <p style={{
        fontFamily: 'var(--font-head)', fontWeight: 800,
        fontSize: 'clamp(1.25rem, 4.5vw, 1.85rem)',
        color: '#fff', lineHeight: 1.25, letterSpacing: '-0.02em',
      }}>
        {post.content}
      </p>
    </div>
  )
}

function TextPost({ post }) {
  return (
    <div style={{ padding: '1.5rem 1.25rem 1rem' }}>
      <div style={{ marginBottom: '0.75rem' }}>
        <CatPill cat={post.category} />
      </div>
      <h3 style={{
        fontFamily: 'var(--font-head)', fontWeight: 800,
        fontSize: 'clamp(1rem, 3.5vw, 1.4rem)',
        color: '#fff', lineHeight: 1.25, letterSpacing: '-0.015em',
        marginBottom: '0.6rem',
      }}>
        {post.title}
      </h3>
      {post.excerpt && (
        <p style={{
          fontSize: '0.875rem', color: '#9CA3AF', lineHeight: 1.75,
          display: '-webkit-box', WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {post.excerpt}
        </p>
      )}
      <Link href={`/wall/${post.slug || post.id}`} style={{
        fontSize: '0.72rem', fontWeight: 600, color: '#FACC15',
        textDecoration: 'none', display: 'inline-block', marginTop: '0.4rem',
      }}>
        Read full story &#8594;
      </Link>
    </div>
  )
}

function ImagePost({ post }) {
  return (
    <div>
      <div style={{
        width: '100%', aspectRatio: '4/3',
        background: post.imageBg || 'linear-gradient(135deg,#0f0a2e,#1a1040)',
        position: 'relative', overflow: 'hidden', display: 'flex',
        alignItems: 'flex-end',
      }}>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center', padding: '1rem',
        }}>
          <div style={{
            fontFamily: 'var(--font-head)', fontWeight: 800,
            fontSize: 'clamp(2rem, 8vw, 4rem)',
            color: 'rgba(255,255,255,0.06)', lineHeight: 0.9,
            letterSpacing: '-0.04em', textAlign: 'center',
          }}>
            {post.ghostText || 'NML'}
          </div>
        </div>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.05) 55%, transparent 100%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '1.25rem' }}>
          <div style={{ marginBottom: '0.4rem' }}><CatPill cat={post.category} /></div>
          <h3 style={{
            fontFamily: 'var(--font-head)', fontWeight: 800,
            fontSize: 'clamp(1rem, 3.5vw, 1.35rem)', color: '#fff',
            lineHeight: 1.2, letterSpacing: '-0.01em',
          }}>
            {post.title}
          </h3>
        </div>
      </div>
    </div>
  )
}

function VideoPost({ post }) {
  return (
    <div>
      <div style={{
        width: '100%', aspectRatio: '16/9',
        background: post.videoBg || 'linear-gradient(135deg,#0f1a2e,#1a2a4a)',
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center', padding: '1rem',
        }}>
          <div style={{
            fontFamily: 'var(--font-head)', fontWeight: 800,
            fontSize: 'clamp(2.5rem, 10vw, 6rem)',
            color: 'rgba(255,255,255,0.05)', lineHeight: 0.9,
            letterSpacing: '-0.05em', textAlign: 'center',
          }}>
            {post.ghostText || 'NML'}
          </div>
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />
        <div style={{
          position: 'relative', zIndex: 1, width: '56px', height: '56px',
          borderRadius: '50%', background: 'rgba(250,204,21,0.92)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(250,204,21,0.4)',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#0B0F19">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
        </div>
        <div style={{
          position: 'absolute', bottom: '0.75rem', right: '0.75rem',
          display: 'flex', gap: '0.3rem',
        }}>
          <span style={{
            fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.06em',
            background: 'rgba(56,189,248,0.2)', color: '#38BDF8',
            padding: '0.2rem 0.5rem', borderRadius: '4px',
          }}>VIDEO</span>
          <span style={{
            fontSize: '0.62rem', fontWeight: 700,
            background: 'rgba(0,0,0,0.75)', color: '#fff',
            padding: '0.2rem 0.5rem', borderRadius: '4px',
          }}>{post.duration || '3:45'}</span>
        </div>
      </div>
      <div style={{ padding: '0.85rem 1.25rem 0' }}>
        <div style={{ marginBottom: '0.5rem' }}><CatPill cat={post.category} /></div>
        <h3 style={{
          fontFamily: 'var(--font-head)', fontWeight: 800,
          fontSize: 'clamp(1rem, 3.5vw, 1.35rem)', color: '#fff',
          lineHeight: 1.25, letterSpacing: '-0.015em',
        }}>
          {post.title}
        </h3>
      </div>
    </div>
  )
}

// ── MAIN POST CARD ────────────────────────────────────────
export default function PostCard({ post, isOwn }) {
  const renderContent = () => {
    switch (post.type) {
      case 'quote': return <QuotePost post={post} />
      case 'image': return <ImagePost post={post} />
      case 'video': return <VideoPost post={post} />
      default:      return <TextPost post={post} />
    }
  }

  return (
    <article style={{
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      background: '#0B0F19', transition: 'background 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.012)'}
      onMouseLeave={e => e.currentTarget.style.background = '#0B0F19'}
    >
      {renderContent()}

      {/* Footer */}
      <div style={{
        padding: '0.75rem 1.25rem',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: '0.5rem',
      }}>
        <AuthorRow
          name={post.author || 'Member'}
          time={post.time || '2 hours ago'}
          isAnon={post.anonymous}
          avatarColor={post.avatarColor}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Reactions postId={post.id} />
          <button onClick={() => navigator.clipboard?.writeText(window.location.origin + '/wall/' + (post.slug || post.id))} style={{
            width: '28px', height: '28px', borderRadius: '50%',
            background: 'transparent', border: '1px solid rgba(255,255,255,0.07)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#6B7280', transition: 'all 0.15s',
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Own post actions — download / share */}
      {isOwn && (
        <div style={{
          padding: '0 1.25rem 0.85rem',
          display: 'flex', gap: '0.5rem',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: '0.65rem',
        }}>
          <button style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            fontSize: '0.72rem', fontWeight: 700,
            padding: '0.45rem 0.9rem', borderRadius: '999px',
            background: '#FACC15', color: '#0B0F19', border: 'none',
            cursor: 'pointer', transition: 'opacity 0.2s',
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download as Image
          </button>
          <button style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            fontSize: '0.72rem', fontWeight: 600,
            padding: '0.45rem 0.9rem', borderRadius: '999px',
            background: 'rgba(255,255,255,0.04)',
            color: '#9CA3AF', border: '1px solid rgba(255,255,255,0.07)',
            cursor: 'pointer', transition: 'all 0.18s',
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
            Share to Facebook
          </button>
        </div>
      )}
    </article>
  )
}