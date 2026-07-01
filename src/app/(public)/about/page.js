import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'About â€” No More Later',
  description: 'The story behind No More Later. A personal growth community born from a random day, an ironic realization, and a decision to stop waiting.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section style={{
          background: '#0B0F19', padding: '140px 5vw 80px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(250,204,21,0.08) 0%, transparent 70%)',
          }} />
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <span style={{
              display: 'block', fontSize: '0.65rem', fontWeight: 600,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#FACC15', marginBottom: '1.25rem',
            }}>
              Our Story
            </span>
            <h1 style={{
              fontFamily: 'var(--font-head)', fontWeight: 800,
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              color: '#fff', lineHeight: 1.05,
              letterSpacing: '-0.03em', marginBottom: '1.5rem',
            }}>
              About Us
            </h1>
            <p style={{
              fontSize: '1.1rem', color: '#6B7280',
              lineHeight: 1.75, maxWidth: '560px',
            }}>
              There was no special day. No Monday morning energy. No perfect conditions.
            </p>
          </div>
        </section>

        {/* Story */}
        <section style={{ background: '#0B0F19', padding: '0 5vw 100px' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            {[
              `There was no special day.`,
              `No Monday morning energy. No first of January resolution. No "new week new me" moment. No perfect conditions. No fully formed plan waiting to be executed.`,
              `Just a random day. A thought that had lived in the back of our mind for far too long. An idea that kept being told to wait. Wait until things are clearer. Wait until the timing is right. Wait until you feel ready.`,
              `Then the irony became impossible to sit with any longer.`,
              `We were procrastinating on building a community whose entire existence was about stopping people from procrastinating.`,
              `So we started. Unready. Unpolished. Uncertain about almost everything. Within two days the community was alive and the first link was in the world. Not because everything was figured out. Not because we had all the answers. But because later was a lie we refused to keep telling ourselves.`,
              `That is the truth about starting. It never feels like the right time because the right time is not a feeling. It is a decision.`,
              `No More Later was not born from a perfect plan or a perfect person. It was born from one ordinary decision made on one completely ordinary day. And that decision is the only thing that separates where you are right now from where you want to be.`,
              `We do not know exactly where this community goes. We do not know how many lives it touches or how far the ripple reaches. But we know this with complete certainty. If one person reads something here and finally starts the thing they have been putting off, every single thing we have poured into building this is worth it completely and without question.`,
              `Because that is the point of all of this.`,
              `You do not need a Monday. You do not need a new month. You do not need a new year or a better situation or more confidence or more certainty about how things end.`,
              `You need today. This moment. This exact ordinary unremarkable day that could quietly become the day everything changed.`,
              `Whatever you have been delaying, whatever dream has been sitting in the back of your mind collecting dust while life keeps moving, whatever version of yourself you keep promising you will become someday when things settle down.`,
              `Start it today.`,
              `Not prepared. Not perfect. Not certain.`,
              `Just start.`,
              `Do it scared. Do it messy. Do it without knowing the next ten steps. Do it without permission. Do it without waiting for someone to tell you the time is right because nobody is coming to tell you that. Nobody ever was.`,
              `The world does not need your perfect version. It needs your present version moving.`,
              `Later is not a place you arrive at. Later is where dreams go to die quietly while you wait for conditions that never fully come.`,
              `There is no later.`,
              `There never was.`,
              `There is only now and what you choose to do with it.`,
              `Welcome to No More Later. We are glad you are here. Now go start something.`,
            ].map((para, i) => {
              const isBold = [
                'So we started.',
                'Just start.',
                'There is no later.',
                'There never was.',
                'Welcome to No More Later.',
              ].some(s => para.startsWith(s))

              const isGold = para === 'There is no later.' || para === 'There never was.'

              return (
                <p key={i} style={{
                  fontSize: isBold ? '1.05rem' : '1rem',
                  lineHeight: 1.9,
                  color: isGold ? '#FACC15' : isBold ? '#fff' : '#9CA3AF',
                  fontWeight: isBold ? 700 : 400,
                  fontFamily: isBold ? 'var(--font-head)' : 'var(--font-body)',
                  marginBottom: '1.35rem',
                  letterSpacing: isGold ? '-0.01em' : 'normal',
                }}>
                  {para}
                </p>
              )
            })}
          </div>
        </section>

        {/* Manifesto block */}
        <section style={{ background: '#FACC15', padding: '80px 5vw' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontFamily: 'var(--font-head)', fontWeight: 800,
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              color: '#0B0F19', letterSpacing: '-0.025em',
              lineHeight: 1.2, marginBottom: '1rem',
            }}>
              Read more. Learn more. Do more. Become more.
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(11,15,25,0.6)', lineHeight: 1.7 }}>
              Because tomorrow is later. And later is a lie.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
