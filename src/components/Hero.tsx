import { useEffect, useRef } from 'react';

const CHROME_EXT_URL =
  'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = heroRef.current?.querySelectorAll('.fade-up, .fade-in');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '72px',
      }}
    >
      {/* Background effects */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div className="bg-grid noise-overlay" style={{ position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none' }} />

      {/* Floating orbs */}
      <div className="float-anim" style={{
        position: 'absolute',
        top: '15%',
        left: '8%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        animationDelay: '0s',
      }} />
      <div className="float-anim" style={{
        position: 'absolute',
        bottom: '20%',
        right: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(29,78,216,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        animationDelay: '2s',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 24px',
        textAlign: 'center',
        paddingTop: '50px',
      }}>
        {/* Launch badge */}
        <div className="fade-up" style={{ marginBottom: '32px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(59,130,246,0.12)',
            border: '1px solid rgba(59,130,246,0.3)',
            borderRadius: '50px',
            padding: '8px 20px',
            fontSize: '0.88rem',
            fontWeight: 600,
            color: '#93c5fd',
            letterSpacing: '0.02em',
          }}>
            🚀 Just Launched — AI-Powered LinkedIn Comments
          </span>
        </div>

        {/* H1 */}
        <h1 className="fade-up" style={{
          fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          marginBottom: '24px',
          animationDelay: '0.1s',
        }}>
          <span className="text-gradient-white">Free LinkedIn Comment</span>
          <br />
          <span className="text-gradient">Generator</span>
          <span className="text-gradient-white"> – Start Engaging Today</span>
        </h1>

        {/* Subtitle */}
        <p className="fade-up" style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'rgba(148,163,184,0.9)',
          fontWeight: 400,
          marginBottom: '16px',
          lineHeight: 1.6,
          animationDelay: '0.2s',
        }}>
          <strong style={{ color: '#94a3b8', fontWeight: 600 }}>No credit card. No trial period. No catch.</strong>
        </p>

        <p className="fade-up" style={{
          fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
          color: 'rgba(148,163,184,0.75)',
          fontWeight: 400,
          marginBottom: '12px',
          lineHeight: 1.75,
          maxWidth: '750px',
          margin: '0 auto 12px',
          animationDelay: '0.25s',
        }}>
          The most powerful{' '}
          <a href="https://replychief.com/ai-linkedin-comment-generator" style={{ color: '#60a5fa', textDecoration: 'none', borderBottom: '1px solid rgba(96,165,250,0.35)', transition: 'border-color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.borderColor = '#60a5fa')} onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(96,165,250,0.35)')}>AI LinkedIn comment generator</a>
          {' '}— context-aware comments on any LinkedIn post, every single day, forever.
          Install the{' '}
          <a href="https://replychief.com/linkedin-engagement-chrome-extension" style={{ color: '#60a5fa', textDecoration: 'none', borderBottom: '1px solid rgba(96,165,250,0.35)', transition: 'border-color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.borderColor = '#60a5fa')} onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(96,165,250,0.35)')}>LinkedIn engagement Chrome extension</a>
          , scroll your feed, click one button, and watch as intelligent, human-sounding comments appear in seconds.
        </p>

        <p className="fade-up" style={{
          fontSize: '1rem',
          color: 'rgba(148,163,184,0.7)',
          marginBottom: '40px',
          lineHeight: 1.7,
          maxWidth: '600px',
          margin: '16px auto 40px',
          animationDelay: '0.3s',
        }}>
          Ten free comments per day.{' '}
          <span style={{ color: '#60a5fa' }}>Five tone options.</span>{' '}
          Full contextual analysis.{' '}
          <span style={{ color: '#60a5fa' }}>Completely free. Permanently.</span>
        </p>

        {/* CTA Buttons */}
        <div className="fade-up" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center',
          marginBottom: '48px',
          animationDelay: '0.35s',
        }}>
          <a
            href={CHROME_EXT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand pulse-glow"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 36px',
              borderRadius: '50px',
              fontSize: '1.05rem',
              fontWeight: 700,
              color: '#fff',
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ChromeIcon />
              Add ReplyChief to Chrome – 100% Free
            </span>
          </a>
        </div>

        {/* Social proof */}
        <div className="fade-up" style={{ animationDelay: '0.4s' }}>
          <p style={{
            fontSize: '0.9rem',
            color: 'rgba(148,163,184,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
          }}>
            <span style={{ display: 'flex', gap: '2px' }}>
              {'★★★★★'.split('').map((s, i) => (
                <span key={i} style={{ color: '#fbbf24', fontSize: '1rem' }}>{s}</span>
              ))}
            </span>
            <span>Join <strong style={{ color: '#e2e8f0' }}>10,000+</strong> professionals already generating smarter LinkedIn comments — for free.</span>
          </p>
        </div>

        {/* Floating mockup card */}
        <div className="fade-in float-anim" style={{
          marginTop: '64px',
          animationDelay: '0.5s',
          animationDuration: '5s',
        }}>
          <div className="glass-card" style={{
            borderRadius: '20px',
            padding: '24px',
            maxWidth: '620px',
            margin: '0 auto',
            textAlign: 'left',
          }}>
            {/* Post mockup */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#fff',
              }}>J</div>
              <div>
                <p style={{ fontSize: '0.88rem', fontWeight: 600, color: '#e2e8f0', margin: 0 }}>Jane Doe · CEO at TechCorp</p>
                <p style={{ fontSize: '0.75rem', color: 'rgba(148,163,184,0.6)', margin: 0 }}>Posted 2h ago · LinkedIn</p>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <div className="badge">AI Analyzing...</div>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'rgba(203,213,225,0.8)', lineHeight: 1.6, marginBottom: '20px' }}>
              We just hit 1M users at TechCorp! 🎉 It took us 3 years, lots of coffee, and an incredible team. 
              Here's what I learned about scaling a B2B SaaS product from 0 to 1M...
            </p>
            {/* Generated comment options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#60a5fa', marginBottom: '4px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                ✨ AI-Generated Comments (Pick One)
              </p>
              {[
                { tone: 'Insightful', text: 'Congratulations! The journey from 0 to 1M in B2B SaaS is rarely linear — the real milestone is the compounding trust you\'ve built along the way. What was the single biggest inflection point?', color: '#3b82f6' },
                { tone: 'Supportive', text: 'This is a massive achievement. 1M users represents 1M problems solved. Huge congratulations to you and the entire team — this kind of growth is a testament to real product-market fit.', color: '#10b981' },
                { tone: 'Concise', text: '1M users in B2B SaaS is exceptional — not just the number, but what it signals about retention and real value delivery. Well deserved. 🚀', color: '#f59e0b' },
              ].map((opt, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${opt.color}30`,
                  borderRadius: '10px',
                  padding: '12px 14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: opt.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '6px',
                    display: 'block',
                  }}>{opt.tone}</span>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(203,213,225,0.8)', margin: 0, lineHeight: 1.5 }}>
                    {opt.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChromeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="4" fill="white" opacity="0.9"/>
      <path d="M12 2C6.48 2 2 6.48 2 12h5a5 5 0 0 1 5-5V2z" fill="white" opacity="0.9"/>
      <path d="M22 12c0-5.52-4.48-10-10-10v5a5 5 0 0 1 5 5h5z" fill="white" opacity="0.7"/>
      <path d="M12 22c5.52 0 10-4.48 10-10h-5a5 5 0 0 1-5 5v5z" fill="white" opacity="0.8"/>
    </svg>
  );
}
