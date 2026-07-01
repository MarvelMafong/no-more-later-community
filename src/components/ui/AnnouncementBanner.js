'use client'
import { useState, useEffect } from 'react'

export default function AnnouncementBanner() {
  const [announcement, setAnnouncement] = useState(null)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    fetch('/api/announcements')
      .then(r => r.json())
      .then(data => {
        if (data.announcement) setAnnouncement(data.announcement)
      })
      .catch(() => {})
  }, [])

  if (!announcement || dismissed) return null

  return (
    <div style={{
      background: announcement.color || '#FACC15',
      padding: '0.65rem 5vw',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', gap: '1rem',
      position: 'sticky', top: '60px', zIndex: 99,
    }}>
      <p style={{
        fontSize: '0.82rem', fontWeight: 600,
        color: '#0B0F19', textAlign: 'center', flex: 1,
      }}>
        {announcement.message}
      </p>
      <button onClick={() => setDismissed(true)} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        color: 'rgba(11,15,25,0.5)', fontSize: '1.1rem',
        flexShrink: 0, lineHeight: 1,
      }}>
        &#10005;
      </button>
    </div>
  )
}