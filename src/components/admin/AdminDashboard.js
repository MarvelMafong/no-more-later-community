'use client'
import { useState, useEffect } from 'react'

function StatCard({ label, value, color }) {
  return (
    <div style={{
      background: '#0d1424', border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '12px', padding: '1.25rem',
    }}>
      <div style={{
        fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em',
        textTransform: 'uppercase', color: '#6B7280', marginBottom: '0.5rem',
      }}>
        {label}
      </div>
      <div style={{
        fontFamily: 'var(--font-head)', fontWeight: 800,
        fontSize: '1.75rem', color: color || '#fff', lineHeight: 1,
      }}>
        {value}
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div style={{
      background: '#111827', border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '16px', overflow: 'hidden', marginBottom: '1.5rem',
    }}>
      <div style={{
        padding: '1.25rem 1.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        fontFamily: 'var(--font-head)', fontWeight: 700,
        fontSize: '0.9rem', color: '#fff',
      }}>
        {title}
      </div>
      <div style={{ padding: '1.5rem' }}>
        {children}
      </div>
    </div>
  )
}

export default function AdminDashboard() {
  const pw = typeof window !== 'undefined' ? sessionStorage.getItem('nml_admin_pw') : ''

  // ── STATE
  const [tab, setTab] = useState('posts')
  const [posts, setPosts] = useState([])
  const [book, setBook] = useState({})
  const [stats, setStats] = useState({})
  const [testimonials, setTestimonials] = useState([])
  const [announcement, setAnnouncement] = useState('')
  const [newTestimonial, setNewTestimonial] = useState({ name: '', location: '', quote: '', impact: '' })
  const [toast, setToast] = useState('')
  const [loading, setLoading] = useState(false)

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  // ── LOAD DATA
  useEffect(() => {
    loadPosts()
    loadBook()
    loadStats()
    loadTestimonials()
  }, [])

  const loadPosts = async () => {
    try {
      const res = await fetch('/api/posts?all=true')
      const data = await res.json()
      setPosts(data.posts || [])
    } catch {}
  }

  const loadBook = async () => {
    try {
      const res = await fetch('/api/book')
      const data = await res.json()
      if (data.book) setBook(data.book)
    } catch {}
  }

  const loadStats = async () => {
    try {
      const res = await fetch('/api/members')
      const data = await res.json()
      if (data.stats) setStats(data.stats)
    } catch {}
  }

  const loadTestimonials = async () => {
    try {
      const res = await fetch('/api/testimonials')
      const data = await res.json()
      setTestimonials(data.testimonials || [])
    } catch {}
  }

  // ── APPROVE POST
  const approvePost = async (id) => {
    try {
      await fetch('/api/posts', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pw, id, action: 'approve' }),
      })
      setPosts(prev => prev.map(p => p.id === id ? { ...p, approved: true } : p))
      showToast('Post approved and live on The Wall')
    } catch { showToast('Error approving post') }
  }

  const rejectPost = async (id) => {
    try {
      await fetch('/api/posts', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pw, id, action: 'reject' }),
      })
      setPosts(prev => prev.filter(p => p.id !== id))
      showToast('Post removed')
    } catch { showToast('Error removing post') }
  }

  const featurePost = async (id, featured) => {
    try {
      await fetch('/api/posts', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pw, id, action: featured ? 'unfeature' : 'feature' }),
      })
      setPosts(prev => prev.map(p => p.id === id ? { ...p, featured: !featured } : p))
      showToast(featured ? 'Post unfeatured' : 'Post featured')
    } catch { showToast('Error updating post') }
  }

  // ── UPDATE BOOK
  const saveBook = async () => {
    setLoading(true)
    try {
      await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pw, book }),
      })
      showToast('Book updated successfully')
    } catch { showToast('Error saving book') }
    setLoading(false)
  }

  // ── UPDATE STATS
  const saveStats = async () => {
    setLoading(true)
    try {
      await fetch('/api/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pw, stats }),
      })
      showToast('Stats updated successfully')
    } catch { showToast('Error saving stats') }
    setLoading(false)
  }

  // ── ANNOUNCEMENT
  const pushAnnouncement = async () => {
    if (!announcement.trim()) return
    try {
      await fetch('/api/announcements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pw, action: 'create', message: announcement }),
      })
      setAnnouncement('')
      showToast('Announcement is now live on the site')
    } catch { showToast('Error pushing announcement') }
  }

  const clearAnnouncement = async () => {
    try {
      await fetch('/api/announcements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pw, action: 'clear' }),
      })
      showToast('Announcement cleared')
    } catch { showToast('Error clearing announcement') }
  }

  // ── ADD TESTIMONIAL
  const addTestimonial = async () => {
    if (!newTestimonial.name || !newTestimonial.quote) return
    try {
      await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pw, action: 'add', testimonial: newTestimonial }),
      })
      setNewTestimonial({ name: '', location: '', quote: '', impact: '' })
      loadTestimonials()
      showToast('Testimonial added')
    } catch { showToast('Error adding testimonial') }
  }

  const removeTestimonial = async (id) => {
    try {
      await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pw, action: 'remove', id }),
      })
      loadTestimonials()
      showToast('Testimonial removed')
    } catch { showToast('Error removing testimonial') }
  }

  const logout = () => {
    sessionStorage.removeItem('nml_admin_auth')
    sessionStorage.removeItem('nml_admin_pw')
    window.location.reload()
  }

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,0.04)',
    border: '1.5px solid rgba(255,255,255,0.07)', borderRadius: '8px',
    padding: '0.7rem 0.9rem', fontSize: '0.88rem', color: '#fff',
    outline: 'none', transition: 'border-color 0.2s',
    marginBottom: '0.75rem',
  }
  const focus = (e) => e.target.style.borderColor = '#FACC15'
  const blur = (e) => e.target.style.borderColor = 'rgba(255,255,255,0.07)'
  const labelStyle = {
    fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em',
    textTransform: 'uppercase', color: '#6B7280',
    display: 'block', marginBottom: '0.35rem',
  }
  const btnGold = {
    background: '#FACC15', color: '#0B0F19',
    fontFamily: 'var(--font-head)', fontWeight: 700,
    fontSize: '0.82rem', padding: '0.65rem 1.35rem',
    borderRadius: '999px', border: 'none', cursor: 'pointer',
    transition: 'opacity 0.2s',
  }
  const btnDanger = {
    background: 'rgba(248,113,113,0.1)', color: '#F87171',
    fontSize: '0.75rem', fontWeight: 600,
    padding: '0.4rem 0.85rem', borderRadius: '999px',
    border: '1px solid rgba(248,113,113,0.2)', cursor: 'pointer',
  }
  const btnGhost = {
    background: 'transparent', color: '#9CA3AF',
    fontSize: '0.75rem', fontWeight: 600,
    padding: '0.4rem 0.85rem', borderRadius: '999px',
    border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer',
  }

  const pendingPosts = posts.filter(p => !p.approved)
  const approvedPosts = posts.filter(p => p.approved)

  const TABS = [
    { key: 'posts', label: `Posts (${pendingPosts.length} pending)` },
    { key: 'book', label: 'Current Book' },
    { key: 'stats', label: 'Stats' },
    { key: 'testimonials', label: 'Testimonials' },
    { key: 'announcement', label: 'Announcement' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#0B0F19', color: '#D1D5DB' }}>

      {/* Admin nav */}
      <div style={{
        background: '#111827', borderBottom: '1px solid rgba(255,255,255,0.07)',
        padding: '0 5vw', height: '56px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div style={{
          fontFamily: 'var(--font-head)', fontWeight: 800,
          fontSize: '0.85rem', color: '#fff',
        }}>
          NO <span style={{ color: '#FACC15' }}>MORE</span> LATER
          <span style={{
            marginLeft: '0.75rem', fontSize: '0.62rem', fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#FACC15', background: 'rgba(250,204,21,0.1)',
            padding: '0.2rem 0.55rem', borderRadius: '999px',
            border: '1px solid rgba(250,204,21,0.2)',
          }}>
            Admin
          </span>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <a href="/" target="_blank" style={{
            fontSize: '0.75rem', color: '#6B7280', textDecoration: 'none',
          }}>
            View Site &#8599;
          </a>
          <button onClick={logout} style={btnGhost}>Log Out</button>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 5vw 4rem' }}>

        {/* Overview stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          gap: '1rem', marginBottom: '2rem',
        }} className="admin-stats-grid">
          <StatCard label="Members" value={stats.member_count || '—'} color="#FACC15" />
          <StatCard label="Wall Posts" value={approvedPosts.length} color="#34D399" />
          <StatCard label="Pending Review" value={pendingPosts.length} color={pendingPosts.length > 0 ? '#F472B6' : '#6B7280'} />
          <StatCard label="Testimonials" value={testimonials.length} color="#818CF8" />
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex', gap: '0.4rem', marginBottom: '1.5rem',
          overflowX: 'auto', scrollbarWidth: 'none',
        }}>
          {TABS.map(t => (
            <button key={t.key} onClick={() => setTab(t.key)} style={{
              fontSize: '0.75rem', fontWeight: 600, padding: '0.5rem 1rem',
              borderRadius: '999px', border: 'none', cursor: 'pointer',
              background: tab === t.key ? '#FACC15' : 'rgba(255,255,255,0.05)',
              color: tab === t.key ? '#0B0F19' : '#9CA3AF',
              whiteSpace: 'nowrap', transition: 'all 0.18s',
            }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* ── POSTS TAB */}
        {tab === 'posts' && (
          <>
            {pendingPosts.length > 0 && (
              <Section title={`Pending Review (${pendingPosts.length})`}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {pendingPosts.map(post => (
                    <div key={post.id} style={{
                      background: '#0d1424', borderRadius: '10px',
                      padding: '1.25rem', border: '1px solid rgba(250,204,21,0.15)',
                    }}>
                      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                        <span style={{
                          fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em',
                          textTransform: 'uppercase', color: '#FACC15',
                          background: 'rgba(250,204,21,0.1)', padding: '0.18rem 0.5rem', borderRadius: '999px',
                        }}>
                          {post.post_type}
                        </span>
                        <span style={{
                          fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em',
                          textTransform: 'uppercase', color: '#818CF8',
                          background: 'rgba(129,140,248,0.1)', padding: '0.18rem 0.5rem', borderRadius: '999px',
                        }}>
                          {post.category}
                        </span>
                        {post.anonymous && (
                          <span style={{
                            fontSize: '0.6rem', fontWeight: 700, color: '#6B7280',
                            padding: '0.18rem 0.5rem', borderRadius: '999px',
                            border: '1px solid rgba(255,255,255,0.07)',
                          }}>
                            Anonymous
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: '0.9rem', color: '#D1D5DB', lineHeight: 1.65, marginBottom: '1rem' }}>
                        {post.content}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                        <span style={{ fontSize: '0.72rem', color: '#6B7280' }}>
                          By {post.author_name || 'Anonymous'} · {new Date(post.created_at).toLocaleDateString()}
                        </span>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button onClick={() => rejectPost(post.id)} style={btnDanger}>Reject</button>
                          <button onClick={() => approvePost(post.id)} style={btnGold}>Approve & Publish</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            <Section title={`Live Posts (${approvedPosts.length})`}>
              {approvedPosts.length === 0 ? (
                <p style={{ color: '#6B7280', fontSize: '0.88rem' }}>No approved posts yet.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {approvedPosts.map((post, i) => (
                    <div key={post.id} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '0.85rem 0', gap: '1rem',
                      borderBottom: i < approvedPosts.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{
                          fontSize: '0.85rem', color: '#D1D5DB', lineHeight: 1.5,
                          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                        }}>
                          {post.content}
                        </p>
                        <span style={{ fontSize: '0.68rem', color: '#6B7280' }}>
                          {post.author_name || 'Anonymous'} · {post.category}
                        </span>
                      </div>
                      <div style={{ display: 'flex', gap: '0.4rem', flexShrink: 0 }}>
                        <button onClick={() => featurePost(post.id, post.featured)} style={{
                          ...btnGhost,
                          color: post.featured ? '#FACC15' : '#6B7280',
                          borderColor: post.featured ? 'rgba(250,204,21,0.3)' : 'rgba(255,255,255,0.1)',
                        }}>
                          {post.featured ? 'Unfeature' : 'Feature'}
                        </button>
                        <button onClick={() => rejectPost(post.id)} style={btnDanger}>Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Section>
          </>
        )}

        {/* ── BOOK TAB */}
        {tab === 'book' && (
          <Section title="Edit Current Book">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="admin-two-col">
              <div>
                <label style={labelStyle}>Book Title</label>
                <input style={inputStyle} value={book.title || ''} onChange={e => setBook({ ...book, title: e.target.value })} onFocus={focus} onBlur={blur} />
              </div>
              <div>
                <label style={labelStyle}>Author</label>
                <input style={inputStyle} value={book.author || ''} onChange={e => setBook({ ...book, author: e.target.value })} onFocus={focus} onBlur={blur} />
              </div>
              <div>
                <label style={labelStyle}>Month (e.g. June 2025)</label>
                <input style={inputStyle} value={book.month || ''} onChange={e => setBook({ ...book, month: e.target.value })} onFocus={focus} onBlur={blur} />
              </div>
              <div>
                <label style={labelStyle}>Progress % (0-100)</label>
                <input style={inputStyle} type="number" min="0" max="100" value={book.progress || ''} onChange={e => setBook({ ...book, progress: e.target.value })} onFocus={focus} onBlur={blur} />
              </div>
              <div>
                <label style={labelStyle}>Current Chapter</label>
                <input style={inputStyle} type="number" value={book.chapter || ''} onChange={e => setBook({ ...book, chapter: e.target.value })} onFocus={focus} onBlur={blur} />
              </div>
              <div>
                <label style={labelStyle}>Total Chapters</label>
                <input style={inputStyle} type="number" value={book.total || ''} onChange={e => setBook({ ...book, total: e.target.value })} onFocus={focus} onBlur={blur} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Book Cover Image URL</label>
              <input style={inputStyle} value={book.cover || ''} onChange={e => setBook({ ...book, cover: e.target.value })} placeholder="/images/book-cover.jpg" onFocus={focus} onBlur={blur} />
            </div>
            <button onClick={saveBook} disabled={loading} style={{ ...btnGold, opacity: loading ? 0.6 : 1 }}>
              {loading ? 'Saving...' : 'Save Book Details'}
            </button>
          </Section>
        )}

        {/* ── STATS TAB */}
        {tab === 'stats' && (
          <Section title="Edit Community Stats">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }} className="admin-three-col">
              <div>
                <label style={labelStyle}>Member Count</label>
                <input style={inputStyle} value={stats.member_count || ''} onChange={e => setStats({ ...stats, member_count: e.target.value })} placeholder="1,200+" onFocus={focus} onBlur={blur} />
              </div>
              <div>
                <label style={labelStyle}>Books Read</label>
                <input style={inputStyle} type="number" value={stats.books_read || ''} onChange={e => setStats({ ...stats, books_read: e.target.value })} onFocus={focus} onBlur={blur} />
              </div>
              <div>
                <label style={labelStyle}>Weeks Active</label>
                <input style={inputStyle} type="number" value={stats.weeks_active || ''} onChange={e => setStats({ ...stats, weeks_active: e.target.value })} onFocus={focus} onBlur={blur} />
              </div>
            </div>
            <button onClick={saveStats} disabled={loading} style={{ ...btnGold, opacity: loading ? 0.6 : 1 }}>
              {loading ? 'Saving...' : 'Save Stats'}
            </button>
          </Section>
        )}

        {/* ── TESTIMONIALS TAB */}
        {tab === 'testimonials' && (
          <>
            <Section title="Add New Testimonial">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="admin-two-col">
                <div>
                  <label style={labelStyle}>Name</label>
                  <input style={inputStyle} value={newTestimonial.name} onChange={e => setNewTestimonial({ ...newTestimonial, name: e.target.value })} placeholder="Community member name" onFocus={focus} onBlur={blur} />
                </div>
                <div>
                  <label style={labelStyle}>Location</label>
                  <input style={inputStyle} value={newTestimonial.location} onChange={e => setNewTestimonial({ ...newTestimonial, location: e.target.value })} placeholder="City, Country" onFocus={focus} onBlur={blur} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Their Story</label>
                <textarea style={{ ...inputStyle, minHeight: '100px', resize: 'vertical', lineHeight: 1.65 }}
                  value={newTestimonial.quote} onChange={e => setNewTestimonial({ ...newTestimonial, quote: e.target.value })}
                  placeholder="What changed for them..." onFocus={focus} onBlur={blur}
                />
              </div>
              <div>
                <label style={labelStyle}>Impact (short phrase)</label>
                <input style={inputStyle} value={newTestimonial.impact} onChange={e => setNewTestimonial({ ...newTestimonial, impact: e.target.value })} placeholder="e.g. Got her first client" onFocus={focus} onBlur={blur} />
              </div>
              <button onClick={addTestimonial} style={btnGold}>Add Testimonial</button>
            </Section>

            <Section title={`Live Testimonials (${testimonials.length})`}>
              {testimonials.length === 0 ? (
                <p style={{ color: '#6B7280', fontSize: '0.88rem' }}>No testimonials yet.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {testimonials.map((t, i) => (
                    <div key={t.id} style={{
                      display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                      padding: '1rem 0', gap: '1rem',
                      borderBottom: i < testimonials.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: '0.85rem', color: '#fff', marginBottom: '0.25rem' }}>
                          {t.name} <span style={{ color: '#6B7280', fontWeight: 400 }}>— {t.location}</span>
                        </div>
                        <p style={{ fontSize: '0.82rem', color: '#9CA3AF', lineHeight: 1.6 }}>
                          {t.quote.slice(0, 120)}{t.quote.length > 120 ? '...' : ''}
                        </p>
                      </div>
                      <button onClick={() => removeTestimonial(t.id)} style={{ ...btnDanger, flexShrink: 0 }}>Remove</button>
                    </div>
                  ))}
                </div>
              )}
            </Section>
          </>
        )}

        {/* ── ANNOUNCEMENT TAB */}
        {tab === 'announcement' && (
          <Section title="Site Announcement Banner">
            <p style={{ fontSize: '0.85rem', color: '#6B7280', marginBottom: '1.25rem', lineHeight: 1.65 }}>
              This message appears as a sticky banner at the top of every page on the site. Visitors can dismiss it. Only one announcement can be active at a time.
            </p>
            <label style={labelStyle}>Announcement Message</label>
            <textarea
              style={{ ...inputStyle, minHeight: '80px', resize: 'vertical', lineHeight: 1.65 }}
              value={announcement}
              onChange={e => setAnnouncement(e.target.value)}
              placeholder="e.g. New book announcement: We are reading Atomic Habits this month! Request your free copy now."
              onFocus={focus} onBlur={blur}
            />
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button onClick={pushAnnouncement} disabled={!announcement.trim()} style={{ ...btnGold, opacity: announcement.trim() ? 1 : 0.4 }}>
                Push Live
              </button>
              <button onClick={clearAnnouncement} style={btnDanger}>
                Clear Current Announcement
              </button>
            </div>
          </Section>
        )}
      </div>

      {/* Toast */}
      {toast && (
        <div style={{
          position: 'fixed', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)',
          background: '#1a2235', border: '1px solid rgba(250,204,21,0.3)',
          color: '#fff', fontSize: '0.82rem', fontWeight: 500,
          padding: '0.65rem 1.25rem', borderRadius: '999px',
          zIndex: 400, whiteSpace: 'nowrap',
          boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
        }}>
          {toast}
        </div>
      )}

      <style>{`
        .admin-stats-grid { grid-template-columns: repeat(4,1fr) !important; }
        .admin-two-col { grid-template-columns: 1fr 1fr !important; }
        .admin-three-col { grid-template-columns: 1fr 1fr 1fr !important; }
        @media (max-width: 768px) {
          .admin-stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .admin-two-col { grid-template-columns: 1fr !important; }
          .admin-three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}