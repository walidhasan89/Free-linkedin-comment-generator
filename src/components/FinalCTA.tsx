import { useEffect, useRef } from 'react';

const CHROME_EXT_URL =
  'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig';

const seconds = [
  { time: '0-10s', desc: 'You click "Add to Chrome" and the extension installs' },
  { time: '10-20s', desc: 'You open LinkedIn in your browser' },
  { time: '20-30s', desc: 'You see a post in your feed you want to engage with' },
  { time: '30-32s', desc: 'You click the ReplyChief icon next to the comment box' },
  { time: '32-34s', desc: '3-4 contextually perfect comment suggestions appear' },
  { time: '34-40s', desc: 'You scan the options, pick your favorite, and click post' },
  { time: '40-60s', desc: 'You realize you just wrote a better LinkedIn comment in 10 seconds than in 5 minutes manually' },
];

export function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.fade-up, .fade-in');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="get-started" ref={sectionRef} style={{ padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
      {/* Big glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '900px',
        height: '600px',
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.18) 0%, rgba(29,78,216,0.08) 40%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="badge" style={{ marginBottom: '24px', display: 'inline-block' }}>Get Started Free</span>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}>
            <span className="text-gradient-white">Get Started –</span>
            <br />
            <span className="shimmer-text">100% Free</span>
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(148,163,184,0.75)',
            maxWidth: '640px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            In 60 seconds, you could have the most powerful{' '}
            <a href="https://replychief.com/ai-linkedin-comment-generator" style={{ color: '#60a5fa', textDecoration: 'none', borderBottom: '1px solid rgba(96,165,250,0.35)', fontWeight: 600 }} onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = '#60a5fa'} onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(96,165,250,0.35)'}>
              AI LinkedIn comment generator
            </a>
            {' '}installed in your browser — ready to transform every post interaction from now on.
          </p>
        </div>

        {/* Timeline */}
        <div className="fade-up glass" style={{
          borderRadius: '24px',
          padding: '40px',
          marginBottom: '56px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #3b82f6, #1d4ed8, transparent)',
          }} />
          <h3 style={{
            fontSize: '1.15rem',
            fontWeight: 700,
            color: '#e2e8f0',
            marginBottom: '32px',
            textAlign: 'center',
          }}>
            ⚡ Here's what happens in the next 60 seconds:
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {seconds.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', position: 'relative' }}>
                {/* Line */}
                {i < seconds.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    left: '36px',
                    top: '36px',
                    bottom: '-8px',
                    width: '1px',
                    background: 'rgba(59,130,246,0.2)',
                  }} />
                )}
                <div style={{
                  flexShrink: 0,
                  width: '72px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(59,130,246,0.1)',
                  border: '1px solid rgba(59,130,246,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#3b82f6',
                  letterSpacing: '0.02em',
                  marginTop: '4px',
                }}>
                  {s.time}
                </div>
                <p style={{
                  fontSize: '0.92rem',
                  color: i === seconds.length - 1 ? '#60a5fa' : 'rgba(203,213,225,0.8)',
                  fontWeight: i === seconds.length - 1 ? 600 : 400,
                  lineHeight: 1.6,
                  padding: '4px 0 24px',
                  margin: 0,
                }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA */}
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '32px' }}>
          <a
            href={CHROME_EXT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand pulse-glow"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '20px 48px',
              borderRadius: '60px',
              fontSize: '1.15rem',
              fontWeight: 800,
              color: '#fff',
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.3rem' }}>🚀</span>
              Add ReplyChief to Chrome – 100% Free, Forever
            </span>
          </a>
          <p style={{
            marginTop: '20px',
            fontSize: '0.85rem',
            color: 'rgba(148,163,184,0.55)',
          }}>
            Works with Chrome · Edge · Brave · Arc · Opera &nbsp;|&nbsp; LinkedIn account required &nbsp;|&nbsp; No credit card &nbsp;|&nbsp; No signup
          </p>
        </div>

        {/* Final CTA small */}
        <div className="fade-up" style={{ textAlign: 'center', marginTop: '48px' }}>
          <a
            href={CHROME_EXT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: 700,
              color: '#fff',
              textDecoration: 'none',
              background: 'transparent',
              border: '2px solid rgba(59,130,246,0.4)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.8)';
              (e.currentTarget as HTMLElement).style.background = 'rgba(59,130,246,0.1)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.4)';
              (e.currentTarget as HTMLElement).style.background = 'transparent';
            }}
          >
            Install Free — Zero Cost, Zero Risk, Zero Excuses
          </a>
          <p style={{
            marginTop: '16px',
            fontSize: '0.88rem',
            color: 'rgba(148,163,184,0.5)',
            fontStyle: 'italic',
          }}>
            Your LinkedIn engagement transformation starts with one click. Make it now.
          </p>
        </div>
      </div>
    </section>
  );
}
