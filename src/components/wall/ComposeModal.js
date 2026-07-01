'use client'
import { useState } from 'react'

const TYPES = [
  { key: 'text', label: 'Story' },
  { key: 'quote', label: 'Quote' },
  { key: 'booknote', label: 'Book Note' },
  { key: 'image', label: 'Image' },
  { key: 'video', label: 'Video' },
]

const CATEGORIES = ['Growth', 'Book Note', 'Mindset', 'Action', 'Life', 'Video']

export default function ComposeModal({ open, onClose }) {
  const [step, setStep] = useState(1)
  const [type, setType] = useState('text')
  const [form, setForm] = useState({ name: '', category: 'Growth', text: '', anonymous: false })
  const [status, setStatus] = useState('idle')

  const handle = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const submit = async () => {
    if (!form.text.trim()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type }),
      })
      if (res.ok) {
        setStatus('success')
        setTimeout(() => {
          setStatus('idle')
          setStep(1)
          setForm({ name: '', category: 'Growth', text: '', anonymous: false })
          onClose()
        }, 2500)
      } else setStatus('error')
    } catch { setStatus('error') }
  }

  if (!open) return null

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,0.04)',
    border: '1.5px solid rgba(255,255,255,0.07)', borderRadius: '10px',
    padding: '0.7rem 0.9rem', fontSize: '0.9rem', color: '#fff',
    outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
  }
  const focusStyle = (e) => { e.target.style.borderColor = '#FACC15'; e.target.style.boxShadow = '0 0 0 3px rgba(250,204,21,0.07)' }
  const blurStyle = (e) => { e.target.style.borderColor = 'rgba(255,255,255,0.07)'; e.target.style.boxShadow = 'none' }

  return (
    <>
      {/* Overlay */}
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, zIndex: 300,
        background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(8px)',
      }} />

      {/* Modal sheet */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 301,
        background: '#111827', borderRadius: '24px 24px 0 0',
        border: '1px solid rgba(255,255,255,0.08)',
        maxHeight: '95vh', overflowY: 'auto',
        maxWidth: '640px', margin: '0 auto',
      }}>
        {/* Pull bar */}
        <div style={{
          width: '40px', height: '4px', background: 'rgba(255,255,255,0.12)',
          borderRadius: '2px', margin: '0.65rem auto 0',
        }} />

        {/* Step tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          {['1. Write', '2. Template'].map((label, i) => (
            <div key={label} style={{
              flex: 1, padding: '0.85rem', textAlign: 'center',
              fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.04em',
              color: step === i + 1 ? '#FACC15' : '#6B7280',
              borderBottom: step === i + 1 ? '2px solid #FACC15' : '2px solid transparent',
              transition: 'all 0.2s',
            }}>
              {label}
            </div>
          ))}
        </div>

        {/* Step 1: Write */}
        {step === 1 && (
          <div style={{ padding: '1.25rem' }}>
            <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1rem', color: '#fff', marginBottom: '0.25rem' }}>
              Share with The Wall
            </h3>
            <p style={{ fontSize: '0.78rem', color: '#6B7280', marginBottom: '1rem' }}>
              Write something real. The community is listening.
            </p>

            {/* Type buttons */}
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              {TYPES.map(t => (
                <button key={t.key} onClick={() => setType(t.key)} style={{
                  fontSize: '0.7rem', fontWeight: 600, padding: '0.42rem 0.8rem',
                  borderRadius: '999px',
                  border: type === t.key ? '1px solid #FACC15' : '1px solid rgba(255,255,255,0.07)',
                  background: type === t.key ? 'rgba(250,204,21,0.1)' : 'transparent',
                  color: type === t.key ? '#FACC15' : '#6B7280', cursor: 'pointer',
                }}>
                  {t.label}
                </button>
              ))}
            </div>

            <textarea
              style={{ ...inputStyle, minHeight: '140px', resize: 'vertical', lineHeight: 1.7, marginBottom: '0.85rem' }}
              placeholder="Write your story, lesson, quote, or truth. Keep it real. Keep it honest."
              value={form.text} onChange={e => handle('text', e.target.value)}
              maxLength={400} onFocus={focusStyle} onBlur={blurStyle}
            />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.85rem' }}>
              <div>
                <label style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6B7280', display: 'block', marginBottom: '0.35rem' }}>
                  Your Name
                </label>
                <input style={inputStyle} type="text" placeholder="How to appear"
                  value={form.name} onChange={e => handle('name', e.target.value)}
                  onFocus={focusStyle} onBlur={blurStyle}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6B7280', display: 'block', marginBottom: '0.35rem' }}>
                  Category
                </label>
                <select style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                  value={form.category} onChange={e => handle('category', e.target.value)}
                  onFocus={focusStyle} onBlur={blurStyle}
                >
                  {CATEGORIES.map(c => <option key={c} value={c} style={{ background: '#111827' }}>{c}</option>)}
                </select>
              </div>
            </div>

            {/* Anon toggle */}
            <div onClick={() => handle('anonymous', !form.anonymous)} style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              padding: '0.65rem 0.85rem', background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px',
              cursor: 'pointer', marginBottom: '0.85rem',
            }}>
              <div style={{
                width: '34px', height: '18px', borderRadius: '999px',
                background: form.anonymous ? '#FACC15' : 'rgba(255,255,255,0.1)',
                position: 'relative', transition: 'background 0.2s', flexShrink: 0,
              }}>
                <div style={{
                  width: '13px', height: '13px', borderRadius: '50%',
                  background: '#fff', position: 'absolute', top: '2.5px',
                  left: form.anonymous ? '18.5px' : '2.5px', transition: 'left 0.2s',
                }} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#D1D5DB' }}>Post anonymously</div>
                <div style={{ fontSize: '0.65rem', color: '#6B7280', marginTop: '0.05rem' }}>
                  Your name will not appear. Only your story will.
                </div>
              </div>
            </div>

            {/* Upload zone */}
            <div style={{
              border: '2px dashed rgba(250,204,21,0.2)', borderRadius: '10px',
              padding: '1.25rem', textAlign: 'center', cursor: 'pointer',
              marginBottom: '0.85rem', transition: 'all 0.2s',
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.5" style={{ margin: '0 auto 0.4rem' }}>
                <polyline points="16 16 12 12 8 16"/>
                <line x1="12" y1="12" x2="12" y2="21"/>
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/>
              </svg>
              <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>
                <span style={{ color: '#FACC15', fontWeight: 600 }}>Upload image or video</span> — optional
              </p>
            </div>
          </div>
        )}

        {/* Step 2: Template picker placeholder */}
        {step === 2 && (
          <div style={{ padding: '1.25rem' }}>
            <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1rem', color: '#fff', marginBottom: '0.25rem' }}>
              Choose a Template
            </h3>
            <p style={{ fontSize: '0.78rem', color: '#6B7280', marginBottom: '1.25rem' }}>
              Optional — style your post before publishing.
            </p>

            {/* No template option */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.75rem 0.9rem',
              border: '1.5px solid #FACC15', borderRadius: '10px',
              background: 'rgba(250,204,21,0.06)', cursor: 'pointer',
              marginBottom: '0.75rem',
            }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '8px',
                background: 'rgba(255,255,255,0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#6B7280', flexShrink: 0,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#D1D5DB' }}>Post as plain text</div>
                <div style={{ fontSize: '0.68rem', color: '#6B7280' }}>No template. Just your words on The Wall.</div>
              </div>
            </div>

            <p style={{ fontSize: '0.75rem', color: '#6B7280', textAlign: 'center', padding: '1.5rem 0' }}>
              Full template studio coming soon. For now, submit as plain text.
            </p>
          </div>
        )}

        {/* Footer */}
        <div style={{
          padding: '1rem 1.25rem',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: '0.75rem',
          position: 'sticky', bottom: 0, background: '#111827',
        }}>
          <span style={{ fontSize: '0.7rem', color: '#6B7280' }}>
            {step === 2 ? 'Goes to review before publishing.' : `${form.text.length} / 400 characters`}
          </span>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {step === 2 && (
              <button onClick={() => setStep(1)} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                fontSize: '0.78rem', fontWeight: 600, padding: '0.6rem 1rem',
                borderRadius: '999px', border: '1px solid rgba(255,255,255,0.07)',
                color: '#6B7280', background: 'transparent', cursor: 'pointer',
              }}>
                &#8592; Back
              </button>
            )}
            {step === 1 ? (
              <button onClick={() => { if (form.text.trim()) setStep(2) }} disabled={!form.text.trim()} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                background: '#FACC15', color: '#0B0F19',
                fontFamily: 'var(--font-head)', fontWeight: 700,
                fontSize: '0.82rem', padding: '0.65rem 1.35rem',
                borderRadius: '999px', border: 'none', cursor: 'pointer',
                opacity: form.text.trim() ? 1 : 0.4,
              }}>
                Next: Template &#8594;
              </button>
            ) : (
              <button onClick={submit} disabled={status === 'loading'} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                background: status === 'success' ? '#34D399' : '#FACC15',
                color: '#0B0F19', fontFamily: 'var(--font-head)', fontWeight: 700,
                fontSize: '0.82rem', padding: '0.65rem 1.35rem',
                borderRadius: '999px', border: 'none', cursor: 'pointer',
                opacity: status === 'loading' ? 0.6 : 1,
              }}>
                {status === 'loading' ? 'Submitting...' : status === 'success' ? 'Submitted!' : 'Submit Post &#8594;'}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}