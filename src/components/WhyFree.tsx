import { useEffect, useRef } from 'react';

const features = [
  {
    icon: '🎯',
    title: '10 Free Comments Per Day',
    desc: 'Every day, ReplyChief gives you 10 AI-generated comments — completely free. That\'s 300+ monthly touchpoints across your professional ecosystem.',
  },
  {
    icon: '🚫',
    title: 'No Credit Card, No Signup',
    desc: 'Just install the Chrome extension and start generating comments. No email. No account. No friction. Under 60 seconds from curious to your first AI comment.',
  },
  {
    icon: '🧠',
    title: 'Full AI Context Analysis',
    desc: 'Same AI engine as paid plans. Reads full post text, analyzes images, checks author context, scans existing comments. 100% contextual — never generic.',
  },
  {
    icon: '🎭',
    title: '5 Tone Options',
    desc: 'Professional, Casual, Thought Leader, Supportive, Direct. Pick the right voice for every post. Every suggestion sounds authentically human.',
  },
  {
    icon: '🔄',
    title: 'Unlimited Regenerations',
    desc: 'Not happy with any suggestion? Regenerate as many times as you want. Regenerations don\'t count toward your 10 daily posts. Explore freely.',
  },
  {
    icon: '🛡️',
    title: 'Zero Risk to Your Account',
    desc: 'Smart pacing, human review required on every comment. Enterprise-grade privacy. Zero data storage. Your account stays 100% safe, always.',
  },
];



export function WhyFree() {
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
    <section id="features" ref={sectionRef} style={{ padding: '120px 0', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(29,78,216,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-block' }}>Why ReplyChief</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '20px',
          }}>
            <span className="text-gradient-white">Why ReplyChief's Free Plan </span>
            <span className="text-gradient">Is Genuinely Generous</span>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(148,163,184,0.75)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Most "free" tools aren't really free. They're bait. ReplyChief is different — 
            we built a free plan that delivers real value from day one, without asking for anything in return.
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {features.map((f, i) => (
            <div
              key={i}
              className="fade-up glass-card animated-border card-3d"
              style={{
                borderRadius: '20px',
                padding: '32px',
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'rgba(59,130,246,0.12)',
                border: '1px solid rgba(59,130,246,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '20px',
              }}>
                {f.icon}
              </div>
              <h3 style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#e2e8f0',
                marginBottom: '12px',
                letterSpacing: '-0.01em',
              }}>{f.title}</h3>
              <p style={{
                fontSize: '0.93rem',
                color: 'rgba(148,163,184,0.8)',
                lineHeight: 1.7,
                margin: 0,
              }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Internal links contextual block */}
        <div className="fade-up" style={{ marginTop: '64px', marginBottom: '0' }}>
          <div style={{
            background: 'rgba(59,130,246,0.05)',
            border: '1px solid rgba(59,130,246,0.15)',
            borderRadius: '16px',
            padding: '24px 32px',
          }}>
            <p style={{ fontSize: '0.85rem', color: 'rgba(148,163,184,0.6)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              🔗 Explore Related Tools
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 28px' }}>
              {[
                { href: 'https://replychief.com/ai-writing-assistant-for-linkedin', label: 'AI writing assistant for LinkedIn' },
                { href: 'https://replychief.com/linkedin-personal-branding-ai-tool', label: 'LinkedIn personal branding AI tool' },
                { href: 'https://replychief.com/linkedin-comment-automation-tool', label: 'LinkedIn comment automation tool' },
                { href: 'https://replychief.com/best-linkedin-engagement-tools-2026', label: 'Best LinkedIn engagement tools 2026' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: '#60a5fa',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    borderBottom: '1px solid rgba(96,165,250,0.3)',
                    paddingBottom: '1px',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#60a5fa'; (e.currentTarget as HTMLAnchorElement).style.color = '#93c5fd'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(96,165,250,0.3)'; (e.currentTarget as HTMLAnchorElement).style.color = '#60a5fa'; }}
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="fade-up" style={{ marginTop: '40px' }}>
          <div className="glass" style={{
            borderRadius: '24px',
            padding: '48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            textAlign: 'center',
          }}>
            {[
              { num: '10', label: 'Free Comments/Day', sub: 'Forever, no expiry' },
              { num: '300+', label: 'Monthly Touchpoints', sub: 'At 10/day pace' },
              { num: '10,000+', label: 'Active Professionals', sub: 'Using ReplyChief daily' },
              { num: '<2s', label: 'Comment Generation', sub: 'Full AI analysis speed' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  marginBottom: '8px',
                  background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '4px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(148,163,184,0.6)' }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
