'use client'
import { useState } from 'react'

export default function SuggestionsForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (!form.message.trim()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'suggestion' }),
      })
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', message: '' }) }
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', background: '#F9FAFB',
    border: '1.5px solid #E5E7EB', borderRadius: '10px',
    padding: '0.8rem 1rem', fontSize: '0.92rem', color: '#111827',
    outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
  }

  const labelStyle = {
    fontSize: '0.72rem', fontWeight: 600,
    letterSpacing: '0.08em', color: '#374151',
    textTransform: 'uppercase', marginBottom: '0.4rem', display: 'block',
  }

  return (
    <section style={{ background: '#F7F4EF', padding: '100px 5vw' }} id="suggestions">
      <div className="max-w" style={{ textAlign: 'center' }}>
        <span className="section-label reveal" style={{ color: '#8B5E0C' }}>Your Voice Matters</span>
        <h2 className="section-title dark reveal reveal-d1">Suggestions &amp; Questions</h2>
        <p className="reveal reveal-d2" style={{
          color: '#6B7280', fontSize: '1rem',
          margin: '0.75rem auto 3rem', maxWidth: '420px', lineHeight: 1.7,
        }}>
          Have an idea? Want to suggest a book? Need help with something? We would love to hear from you.
        </p>

        <div className="reveal reveal-d2" style={{
          background: '#fff', borderRadius: '24px',
          padding: '3rem', maxWidth: '600px',
          margin: '0 auto', boxShadow: '0 8px 48px rgba(0,0,0,0.08)',
          textAlign: 'left',
        }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FACC15" strokeWidth="2" style={{ margin: '0 auto' }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.25rem', color: '#0B0F19', marginBottom: '0.5rem' }}>
                Sent. Thank you.
              </h3>
              <p style={{ color: '#6B7280', fontSize: '0.9rem' }}>
                We read every single message and will get back to you soon.
              </p>
              <button onClick={() => setStatus('idle')} className="btn-dark" style={{ marginTop: '1.5rem' }}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={labelStyle}>Name (Optional)</label>
                  <input style={inputStyle} type="text" name="name" value={form.name}
                    onChange={handle} placeholder="Your name"
                    onFocus={e => { e.target.style.borderColor = '#FACC15'; e.target.style.boxShadow = '0 0 0 3px rgba(250,204,21,0.12)' }}
                    onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none' }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email (Optional)</label>
                  <input style={inputStyle} type="email" name="email" value={form.email}
                    onChange={handle} placeholder="your@email.com"
                    onFocus={e => { e.target.style.borderColor = '#FACC15'; e.target.style.boxShadow = '0 0 0 3px rgba(250,204,21,0.12)' }}
                    onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none' }}
                  />
                </div>
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>Message</label>
                <textarea
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '130px', lineHeight: 1.6 }}
                  name="message" value={form.message} onChange={handle} required
                  placeholder="Share your idea, suggestion, or question..."
                  onFocus={e => { e.target.style.borderColor = '#FACC15'; e.target.style.boxShadow = '0 0 0 3px rgba(250,204,21,0.12)' }}
                  onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none' }}
                />
              </div>
              {status === 'error' && (
                <p style={{ color: '#EF4444', fontSize: '0.82rem', marginBottom: '1rem' }}>
                  Something went wrong. Please try again.
                </p>
              )}
              <button type="submit" disabled={status === 'loading'} style={{
                width: '100%', background: '#0B0F19', color: '#FACC15',
                fontFamily: 'var(--font-head)', fontWeight: 700,
                fontSize: '0.9rem', padding: '0.9rem 2rem',
                borderRadius: '999px', border: 'none', cursor: 'pointer',
                transition: 'opacity 0.2s', letterSpacing: '0.02em',
                opacity: status === 'loading' ? 0.6 : 1,
              }}>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}