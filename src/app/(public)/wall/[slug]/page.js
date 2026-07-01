import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { getSupabaseAdmin } from '@/lib/supabase'
import Link from 'next/link'

export async function generateMetadata({ params }) {
  try {
    const supabase = getSupabaseAdmin()
    const { data } = await supabase
      .from('wall_posts')
      .select('content, author_name, category')
      .eq('slug', params.slug)
      .eq('approved', true)
      .single()

    if (!data) return { title: 'Post — No More Later' }

    return {
      title: `${data.content.slice(0, 60)}... — No More Later`,
      description: data.content.slice(0, 160),
      openGraph: {
        title: `${data.author_name || 'Community Member'} on No More Later`,
        description: data.content.slice(0, 160),
      },
    }
  } catch {
    return { title: 'Post — No More Later' }
  }
}

async function getPost(slug) {
  try {
    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('wall_posts')
      .select('*')
      .eq('slug', slug)
      .eq('approved', true)
      .single()

    if (error) return null
    return data
  } catch {
    return null
  }
}

const CAT_COLORS = {
  'Mindset':   '#34D399',
  'Book Note': '#818CF8',
  'Action':    '#F472B6',
  'Life':      '#FB923C',
  'Growth':    '#FACC15',
  'Video':     '#38BDF8',
}

export default async function WallPostPage({ params }) {
  const post = await getPost(params.slug)

  if (!post) {
    return (
      <>
        <Navbar />
        <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 5vw' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '2rem', color: '#fff', marginBottom: '1rem' }}>
              Post not found
            </h1>
            <p style={{ color: '#6B7280', marginBottom: '2rem' }}>
              This post may have been removed or does not exist.
            </p>
            <Link href="/wall" className="btn-gold">Back to The Wall</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const catColor = CAT_COLORS[post.category] || '#FACC15'
  const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '60px' }}>

        {/* Post hero */}
        <section style={{
          background: '#0B0F19', padding: '80px 5vw 60px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>

            {/* Breadcrumb */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.75rem', color: '#6B7280', marginBottom: '2rem',
            }}>
              <Link href="/wall" style={{ color: '#6B7280', textDecoration: 'none', transition: 'color 0.2s' }}
              >
                The Wall
              </Link>
              <span>&#8594;</span>
              <span style={{ color: catColor }}>{post.category}</span>
            </div>

            {/* Category */}
            <span style={{
              display: 'inline-flex', alignItems: 'center',
              fontSize: '0.6rem', fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '0.22rem 0.6rem', borderRadius: '999px',
              background: `${catColor}20`, color: catColor,
              marginBottom: '1.5rem',
            }}>
              {post.category}
            </span>

            {/* Content */}
            <div style={{
              fontFamily: 'var(--font-head)', fontWeight: 800,
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              color: '#fff', lineHeight: 1.25,
              letterSpacing: '-0.025em', marginBottom: '2rem',
              position: 'relative', paddingLeft: '1.25rem',
            }}>
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0,
                width: '4px', borderRadius: '2px', background: catColor,
              }} />
              {post.content}
            </div>

            {/* Author row */}
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: post.anonymous ? '#1f2937' : 'linear-gradient(135deg,#FACC15,#d97706)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-head)', fontWeight: 800,
                  fontSize: '0.9rem', color: post.anonymous ? '#6B7280' : '#0B0F19',
                }}>
                  {post.anonymous ? '?' : (post.author_name?.[0] || 'M')}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: '0.9rem', color: post.anonymous ? '#6B7280' : '#fff' }}>
                    {post.anonymous ? 'Anonymous' : (post.author_name || 'Community Member')}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#6B7280', marginTop: '0.1rem' }}>
                    {formattedDate}
                  </div>
                </div>
              </div>

              {/* Share */}
              <button
                onClick={() => typeof navigator !== 'undefined' && navigator.clipboard?.writeText(window.location.href)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  fontSize: '0.78rem', fontWeight: 600,
                  padding: '0.5rem 1rem', borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#D1D5DB', background: 'transparent',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
                Copy Link
              </button>
            </div>
          </div>
        </section>

        {/* Back to wall + more posts */}
        <section style={{ background: '#0d1120', padding: '60px 5vw' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              This post is from the No More Later community. Join us and share your own story.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/wall" className="btn-gold">Back to The Wall</Link>
              <Link href="/" className="btn-ghost">Join the Community</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}