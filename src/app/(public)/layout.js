'use client'
import { useEffect } from 'react'
import AnnouncementBanner from '@/components/ui/AnnouncementBanner'

export default function PublicLayout({ children }) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <AnnouncementBanner />
      {children}
    </>
  )
}