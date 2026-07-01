'use client'
import { useState, useEffect } from 'react'

export default function AdminGate({ children }) {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const saved = sessionStorage.getItem('nml_admin_auth')
    if (saved === 'true') setAuthed(true)
    setChecking(false)
  }, [])

  const login = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, book: {} }),
      })
      if (res.status === 401) {
        setError(true)
        setLoading(false)
        return
      }
      sessionStorage.setItem('nml_admin_auth', 'true')
      sessionStorage.setItem('nml_admin_pw', password)
      setAuthed(true)
    } catch {
      setError(true)
    }
    setLoading(false)
  }

  if (checking) return null

  if (!authed) {
    return (
      <div style={{
        minHeight: '100vh', background: '#0B0F19',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '2rem',
      }}>
        <div style={{
          background: '#111827', border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '20px', padding: '2.5rem',
          width: '100%', maxWidth: '380px',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{
              fontFamily: 'var(--font-head)', fontWeight: 800,
              fontSize: '0.88rem', color: '#fff',
              letterSpacing: '0.06em', marginBottom: '0.4rem',
            }}>
              NO <span style={{ color: '#FACC15' }}>MORE</span> LATER
            </div>
            <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>
              Admin Access Only
            </div>
          </div>

          <form onSubmit={login} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{
                fontSize: '0.65rem', fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: '#6B7280', display: 'block', marginBottom: '0.4rem',
              }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                style={{
                  width: '100%', background: 'rgba(255,255,255,0.04)',
                  border: error ? '1.5px solid #F87171' : '1.5px solid rgba(255,255,255,0.07)',
                  borderRadius: '10px', padding: '0.8rem 1rem',
                  fontSize: '0.92rem', color: '#fff', outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => { if (!error) e.target.style.borderColor = '#FACC15' }}
                onBlur={e => { if (!error) e.target.style.borderColor = 'rgba(255,255,255,0.07)' }}
              />
              {error && (
                <p style={{ fontSize: '0.75rem', color: '#F87171', marginTop: '0.4rem' }}>
                  Incorrect password. Try again.
                </p>
              )}
            </div>
            <button type="submit" disabled={loading} style={{
              background: '#FACC15', color: '#0B0F19',
              fontFamily: 'var(--font-head)', fontWeight: 700,
              fontSize: '0.9rem', padding: '0.85rem',
              borderRadius: '999px', border: 'none', cursor: 'pointer',
              opacity: loading ? 0.6 : 1, transition: 'opacity 0.2s',
            }}>
              {loading ? 'Checking...' : 'Enter'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  return <>{children}</>
}