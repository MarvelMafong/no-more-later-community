'use client'
import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import StoriesRow from '@/components/wall/StoriesRow'
import FilterPills from '@/components/wall/FilterPills'
import PostCard from '@/components/wall/PostCard'
import ComposeModal from '@/components/wall/ComposeModal'
import BottomNav from '@/components/wall/BottomNav'

// Sample posts — replaced with real Supabase data in Batch 9
const SAMPLE_POSTS = [
  {
    id: '1', type: 'quote', category: 'Mindset', featured: true,
    content: 'The most dangerous sentence you will ever say is "I will start tomorrow." Tomorrow does not exist. It never did.',
    author: 'Amara K.', time: '2 hours ago',
    avatarColor: 'linear-gradient(135deg,#FACC15,#d97706)',
  },
  {
    id: '2', type: 'video', category: 'Video',
    title: 'Chapter 3 of Atomic Habits changed how I think about identity forever',
    ghostText: 'ATOMIC HABITS', videoBg: 'linear-gradient(135deg,#0f1a2e,#1a2a4a)',
    duration: '4:32', author: 'Kofi M.', time: '5 hours ago',
    avatarColor: 'linear-gradient(135deg,#38BDF8,#0284c7)',
  },
  {
    id: '3', type: 'text', category: 'Life', slug: 'failed-exam-same-day',
    title: 'I failed my exam and started studying again the same day.',
    excerpt: 'Three weeks ago I failed my second attempt. I sat with that failure for about four hours. Then I opened my notes. Not because I felt ready. Because I remembered something I read here. The road does not care how you feel. It only responds to whether you move.',
    author: 'Ngozi A.', time: 'Yesterday',
    avatarColor: 'linear-gradient(135deg,#34D399,#059669)',
  },
  {
    id: '4', type: 'image', category: 'Mindset',
    title: 'Made this for anyone who needed to see it today',
    ghostText: 'LATER IS A LIE', imageBg: 'linear-gradient(135deg,#0f0a2e,#1a1040)',
    author: 'Bola F.', time: '2 days ago',
    avatarColor: 'linear-gradient(135deg,#34D399,#0d9488)',
  },
  {
    id: '5', type: 'quote', category: 'Action', anonymous: true,
    content: 'I applied for the job I thought I was not qualified for. I got it. The only thing standing between me and most of my goals was the story I kept telling myself.',
    time: '4 days ago',
  },
  {
    id: '6', type: 'text', category: 'Growth', slug: '30-days-showing-up',
    title: '30 days of showing up. Here is what actually changed.',
    excerpt: 'I did not become a different person. What changed was simpler and more powerful than that. I stopped waiting to feel ready and started trusting the process of just showing up every single day no matter what.',
    author: 'Miriam T.', time: '1 week ago',
    avatarColor: 'linear-gradient(135deg,#FACC15,#f59e0b)',
  },
  {
    id: '7', type: 'video', category: 'Growth',
    title: 'How I built a 5am discipline routine from scratch with zero motivation',
    ghostText: 'DISCIPLINE', videoBg: 'linear-gradient(135deg,#0f2010,#1a3020)',
    duration: '7:14', author: 'Chidi O.', time: '5 days ago',
    avatarColor: 'linear-gradient(135deg,#FB923C,#ea580c)',
  },
]

export default function WallPage() {
  const [composeOpen, setComposeOpen] = useState(false)
  const [filter, setFilter] = useState('All')

  const filteredPosts = filter === 'All'
    ? SAMPLE_POSTS
    : SAMPLE_POSTS.filter(p => {
        if (filter === 'Book Notes') return p.category === 'Book Note'
        if (filter === 'Videos') return p.category === 'Video'
        return p.category === filter
      })

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '56px', paddingBottom: '80px', maxWidth: '680px', margin: '0 auto' }}>

        {/* Page header */}
        <div style={{
          padding: '1.5rem 1.25rem 0.5rem',
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>
          <div>
            <span style={{
              display: 'block', fontSize: '0.62rem', fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#FACC15', marginBottom: '0.35rem',
            }}>
              Community Voice
            </span>
            <h1 style={{
              fontFamily: 'var(--font-head)', fontWeight: 800,
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              color: '#fff', letterSpacing: '-0.025em', lineHeight: 1,
            }}>
              The <span style={{ color: '#FACC15' }}>Wall</span>
            </h1>
            <p style={{ fontSize: '0.82rem', color: '#6B7280', marginTop: '0.3rem' }}>
              Real stories. Real growth. From real people moving forward.
            </p>
          </div>
          <button onClick={() => setComposeOpen(true)} className="btn-gold" style={{ flexShrink: 0 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Share Your Story
          </button>
        </div>

        {/* Stories */}
        <StoriesRow onCompose={() => setComposeOpen(true)} />

        {/* Filter */}
        <FilterPills onFilter={setFilter} />

        {/* Feed */}
        <div>
          {filteredPosts.length === 0 ? (
            <div style={{ padding: '4rem 1.25rem', textAlign: 'center', color: '#6B7280' }}>
              No posts in this category yet. Be the first to share.
            </div>
          ) : (
            filteredPosts.map((post, i) => (
              <PostCard key={post.id} post={post} isOwn={i === 0} />
            ))
          )}
        </div>

        {/* Load more */}
        <div style={{ padding: '1.5rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <button style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
            color: '#D1D5DB', fontFamily: 'var(--font-head)',
            fontWeight: 600, fontSize: '0.82rem',
            padding: '0.7rem 2rem', borderRadius: '999px', cursor: 'pointer',
          }}>
            Load More Posts
          </button>
        </div>
      </main>

      {/* Compose modal */}
      <ComposeModal open={composeOpen} onClose={() => setComposeOpen(false)} />

      {/* Bottom nav (mobile) */}
      <BottomNav onCompose={() => setComposeOpen(true)} />

      <style>{`
        @media (min-width: 769px) {
          nav.bottom-nav-hide { display: none !important; }
        }
      `}</style>
    </>
  )
}