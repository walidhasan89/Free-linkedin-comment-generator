import { useEffect, useRef } from 'react';

const CHROME_EXT_URL =
  'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig';

function ILink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{ color: '#60a5fa', textDecoration: 'none', borderBottom: '1px solid rgba(96,165,250,0.35)', fontWeight: 600 }}
      onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = '#60a5fa'}
      onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(96,165,250,0.35)'}
    >
      {children}
    </a>
  );
}

const steps = [
  {
    step: '01',
    title: 'Install the Extension',
    details: [
      "Extension size: Under 2MB — won't slow your browser",
      'Minimal permissions — only accesses LinkedIn pages',
      'Works on Chrome, Edge, Brave, Arc, Opera',
      'Automatic updates — always the latest version',
    ],
    cta: { label: 'Add to Chrome — Free', url: CHROME_EXT_URL },
  },
  {
    step: '02',
    title: 'Click Generate on Any Post',
    details: [
      'Reads the full post text — every word, every paragraph',
      'Analyzes images, infographics, carousels',
      'Checks author profile and existing comments',
      'Detects post sentiment and tone automatically',
    ],
    cta: null as null | { label: string; url: string },
  },
  {
    step: '03',
    title: 'Customize and Post',
    details: [
      'Post as-is — click and publish instantly',
      'Edit before posting — make it yours',
      'Regenerate unlimited times — never counts against limit',
      'Skip posts — daily count only charges on POST, not generate',
    ],
    cta: null as null | { label: string; url: string },
  },
];

export function HowItWorks() {
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
    const elements = sectionRef.current?.querySelectorAll('.fade-up');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stepDescs = [
    <>
      Click "Add to Chrome" and install the{' '}
      <ILink href="https://replychief.com/linkedin-engagement-chrome-extension">
        LinkedIn engagement Chrome extension
      </ILink>
      . Under 60 seconds. No email. No account. No credit card. Just install and go.
    </>,
    <>
      Open LinkedIn and scroll your feed. A subtle ReplyChief icon appears near every post's comment box.
      Click it to get instant{' '}
      <ILink href="https://replychief.com/linkedin-ai-reply-suggestions">
        AI reply suggestions
      </ILink>
      {' '}tailored to each post's exact context in under 2 seconds.
    </>,
    <>
      Get 3–4 contextually perfect comment suggestions. Pick one, edit it, or regenerate freely. This{' '}
      <ILink href="https://replychief.com/ai-writing-assistant-for-linkedin">
        AI writing assistant for LinkedIn
      </ILink>
      {' '}gives you full control over every comment before it goes live.
    </>,
  ];

  return (
    <section id="how-it-works" ref={sectionRef} style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 70% 50% at 100% 50%, rgba(59,130,246,0.06) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-block' }}>How It Works</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '20px',
          }}>
            <span className="text-gradient-white">How the Free Comment </span>
            <span className="text-gradient">Generator Works</span>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(148,163,184,0.75)',
            maxWidth: '580px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            ReplyChief's free plan uses the exact same AI engine as paid plans.
            Full power, zero cost. Here's the complete workflow in three steps.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="fade-up"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '48px',
                alignItems: 'center',
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              {/* Content */}
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: '#3b82f6',
                    background: 'rgba(59,130,246,0.1)',
                    border: '1px solid rgba(59,130,246,0.25)',
                    borderRadius: '8px',
                    padding: '6px 12px',
                    letterSpacing: '0.05em',
                  }}>
                    STEP {step.step}
                  </div>
                </div>
                <h3 style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: '#e2e8f0',
                  marginBottom: '16px',
                  lineHeight: 1.2,
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(148,163,184,0.8)',
                  lineHeight: 1.75,
                  marginBottom: '24px',
                }}>
                  {stepDescs[i]}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {step.details.map((detail, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'rgba(148,163,184,0.75)' }}>
                      <span style={{ color: '#3b82f6', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                {step.cta && (
                  <a
                    href={step.cta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brand"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '13px 28px',
                      borderRadius: '50px',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: '#fff',
                      textDecoration: 'none',
                    }}
                  >
                    <span style={{ position: 'relative', zIndex: 1 }}>{step.cta.label}</span>
                  </a>
                )}
              </div>

              {/* Visual Card */}
              <div className="card-3d" style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <StepVisual step={i} />
              </div>
            </div>
          ))}
        </div>

        {/* Comment example */}
        <div className="fade-up" style={{ marginTop: '80px' }}>
          <div className="glass" style={{ borderRadius: '24px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #3b82f6, #1d4ed8, transparent)',
            }} />
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#e2e8f0',
              marginBottom: '8px',
              textAlign: 'center',
            }}>
              Example: AI Comment Generation in Action
            </h3>
            <p style={{ textAlign: 'center', color: 'rgba(148,163,184,0.7)', fontSize: '0.9rem', marginBottom: '32px' }}>
              A marketing director posts about short-form video engagement results. ReplyChief generates these in under 2 seconds:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              {[
                { tone: 'Insightful', color: '#3b82f6', text: "The 3x engagement lift is compelling, but I'd be curious to see the conversion metrics downstream. Video content drives higher top-of-funnel engagement but text posts often outperform for driving actual profile visits. Have you seen any difference?" },
                { tone: 'Supportive', color: '#10b981', text: "Love that you're sharing the actual data behind this experiment, not just the conclusion. The willingness to test, measure, and share transparently is exactly what makes LinkedIn valuable for marketing practitioners." },
                { tone: 'Questioning', color: '#f59e0b', text: "Really interesting results. Quick question — did you control for posting time and day of week? I've seen those variables skew engagement comparisons significantly, especially on LinkedIn where timing impacts reach." },
                { tone: 'Concise', color: '#a78bfa', text: "Data-backed content experiments like this are exactly what LinkedIn needs more of. The video numbers speak for themselves. Curious what you'll test next." },
              ].map((c, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${c.color}25`,
                  borderRadius: '12px',
                  padding: '16px',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${c.color}60`;
                  (e.currentTarget as HTMLElement).style.background = `${c.color}10`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${c.color}25`;
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                }}
                >
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: c.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '8px',
                    display: 'block',
                  }}>{c.tone}</span>
                  <p style={{ fontSize: '0.83rem', color: 'rgba(203,213,225,0.8)', margin: 0, lineHeight: 1.6 }}>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section#how-it-works .fade-up {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function StepVisual({ step }: { step: number }) {
  const visuals = [
    // Step 1: Install
    <div key="s1" style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(59,130,246,0.2)',
      borderRadius: '20px',
      padding: '32px',
      textAlign: 'center',
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        margin: '0 auto 20px',
        borderRadius: '20px',
        background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2.5rem',
      }}>
        🔧
      </div>
      <p style={{ color: '#60a5fa', fontWeight: 700, fontSize: '1rem', marginBottom: '8px' }}>Chrome Web Store</p>
      <div style={{
        background: 'rgba(59,130,246,0.1)',
        border: '1px solid rgba(59,130,246,0.25)',
        borderRadius: '10px',
        padding: '12px 20px',
        color: '#e2e8f0',
        fontSize: '0.9rem',
        fontWeight: 600,
        cursor: 'pointer',
        display: 'inline-block',
      }}>
        + Add to Chrome
      </div>
      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {['❌ No email required', '❌ No credit card', '❌ No account creation', '✅ Just install & go'].map((item, i) => (
          <p key={i} style={{ fontSize: '0.83rem', color: item.startsWith('✅') ? '#4ade80' : 'rgba(148,163,184,0.7)', margin: 0 }}>
            {item}
          </p>
        ))}
      </div>
    </div>,

    // Step 2: Generate
    <div key="s2" style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(59,130,246,0.2)',
      borderRadius: '20px',
      padding: '28px',
    }}>
      <p style={{ fontSize: '0.75rem', color: 'rgba(148,163,184,0.5)', marginBottom: '16px' }}>linkedin.com · Your Feed</p>
      <div style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '16px',
      }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #10b981, #059669)', flexShrink: 0 }} />
          <div>
            <p style={{ margin: 0, fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>Sarah Chen · VP Marketing</p>
          </div>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'rgba(203,213,225,0.7)', margin: 0, lineHeight: 1.5 }}>
          Just published: Our Q3 content strategy drove 340% more pipeline than last year...
        </p>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 14px',
        background: 'rgba(59,130,246,0.08)',
        border: '1px solid rgba(59,130,246,0.25)',
        borderRadius: '10px',
        cursor: 'pointer',
      }}>
        <div style={{ fontSize: '1rem' }}>✨</div>
        <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#60a5fa' }}>ReplyChief — Generate AI Comment</span>
        <div style={{
          marginLeft: 'auto',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#3b82f6',
          animation: 'pulseGlow 1.5s ease-in-out infinite',
        }} />
      </div>
    </div>,

    // Step 3: Customize
    <div key="s3" style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(59,130,246,0.2)',
      borderRadius: '20px',
      padding: '28px',
    }}>
      <p style={{ fontSize: '0.75rem', color: '#4ade80', marginBottom: '12px', fontWeight: 600 }}>⚡ Generated in 1.8 seconds</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[
          { t: 'Insightful', c: '#3b82f6', selected: true },
          { t: 'Supportive', c: '#10b981', selected: false },
          { t: 'Concise', c: '#f59e0b', selected: false },
        ].map((opt, i) => (
          <div key={i} style={{
            padding: '10px 14px',
            borderRadius: '10px',
            border: `1px solid ${opt.selected ? opt.c + '60' : opt.c + '20'}`,
            background: opt.selected ? `${opt.c}12` : 'transparent',
            cursor: 'pointer',
          }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: opt.c, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {opt.selected ? '✓ ' : ''}{opt.t}
            </span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
        <div style={{
          flex: 1,
          padding: '8px 14px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
          textAlign: 'center',
          fontSize: '0.82rem',
          fontWeight: 700,
          color: '#fff',
          cursor: 'pointer',
        }}>
          Post Comment
        </div>
        <div style={{
          padding: '8px 14px',
          borderRadius: '8px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          fontSize: '0.82rem',
          color: 'rgba(148,163,184,0.8)',
          cursor: 'pointer',
        }}>
          🔄
        </div>
      </div>
    </div>,
  ];

  return visuals[step] || null;
}
