'use client'
import { useState } from 'react'

const FILTERS = [
  { label: 'All', color: null },
  { label: 'Book Notes', color: '#818CF8' },
  { label: 'Mindset', color: '#34D399' },
  { label: 'Action', color: '#F472B6' },
  { label: 'Videos', color: '#38BDF8' },
  { label: 'Life', color: '#FB923C' },
  { label: 'Growth', color: '#FACC15' },
]

export default function FilterPills({ onFilter }) {
  const [active, setActive] = useState('All')

  const select = (label) => {
    setActive(label)
    if (onFilter) onFilter(label)
  }

  return (
    <div style={{
      padding: '0.75rem 1rem',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      overflowX: 'auto', scrollbarWidth: 'none',
    }}>
      <div style={{ display: 'flex', gap: '0.4rem', width: 'max-content' }}>
        {FILTERS.map((f) => (
          <button key={f.label} onClick={() => select(f.label)} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
            fontSize: '0.7rem', fontWeight: 600,
            padding: '0.38rem 0.8rem', borderRadius: '999px',
            border: active === f.label
              ? '1px solid #FACC15'
              : '1px solid rgba(255,255,255,0.07)',
            background: active === f.label
              ? '#FACC15' : 'rgba(255,255,255,0.02)',
            color: active === f.label ? '#0B0F19' : '#6B7280',
            cursor: 'pointer', whiteSpace: 'nowrap',
            transition: 'all 0.18s',
          }}>
            {f.color && (
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: f.color, flexShrink: 0,
              }} />
            )}
            {f.label}
          </button>
        ))}
      </div>
    </div>
  )
}