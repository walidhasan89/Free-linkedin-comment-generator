import { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'David L.',
    role: 'Product Manager',
    initials: 'DL',
    color: '#3b82f6',
    stars: 5,
    text: 'I installed ReplyChief on a whim during my lunch break. Five minutes later, I\'d generated three comments that were better than anything I\'d written manually all week. I used the free plan for a month before upgrading to Pro — not because the free plan wasn\'t working, but because I was addicted to the results and wanted unlimited access.',
  },
  {
    name: 'Amanda C.',
    role: 'Marketing Director',
    initials: 'AC',
    color: '#10b981',
    stars: 5,
    text: 'As someone who\'s tried every LinkedIn tool under the sun, ReplyChief\'s free plan alone is better than most tools\' paid tiers. The comment quality is genuinely impressive. I recommended it to my entire team — half of them are still on the free plan and seeing great results.',
  },
  {
    name: 'Raj P.',
    role: 'Startup Founder',
    initials: 'RP',
    color: '#f59e0b',
    stars: 5,
    text: 'I\'m a founder bootstrapping my startup. I can\'t afford another SaaS subscription right now. ReplyChief\'s free plan has been a lifeline — 10 comments per day is enough to maintain investor visibility and stay active in industry conversations. When we close our seed round, I\'ll go Lifetime immediately.',
  },
  {
    name: 'Yuki T.',
    role: 'UX Designer',
    initials: 'YT',
    color: '#a78bfa',
    stars: 5,
    text: 'English is my second language and LinkedIn commenting always stressed me out. I found ReplyChief\'s free plan and it changed everything. The comments are fluent, natural, and professional. I\'ve been using it for three months — still on the free plan — and my profile views have tripled.',
  },
  {
    name: 'Mark S.',
    role: 'Sales Development Representative',
    initials: 'MS',
    color: '#ec4899',
    stars: 5,
    text: 'I was skeptical. Very skeptical. "Free AI comment generator" sounds like something that produces garbage. So I installed it expecting to uninstall it in five minutes. That was four months ago. I\'ve posted over 1,000 AI-assisted comments. My LinkedIn engagement has never been higher. And I haven\'t paid a cent.',
  },
  {
    name: 'Sarah K.',
    role: 'Freelance Consultant',
    initials: 'SK',
    color: '#06b6d4',
    stars: 5,
    text: 'The fact that there\'s no signup — just install and go — is what got me to actually try it. Every other tool wants my email, my credit card, and my firstborn child before I can see if it works. ReplyChief just works. Immediately. For free. That level of confidence in your own product is rare.',
  },
  {
    name: 'Jason R.',
    role: 'Social Media Manager',
    initials: 'JR',
    color: '#f97316',
    stars: 5,
    text: 'I manage LinkedIn for three executives at my company. I use ReplyChief\'s free plan for my personal account and Pro for the executive accounts. Even the free version produces comments that are better than what most of the executives were writing themselves. It\'s genuinely the same AI — just with a daily cap.',
  },
  {
    name: 'Elena V.',
    role: 'Business Development Manager',
    initials: 'EV',
    color: '#8b5cf6',
    stars: 5,
    text: 'Started free. Went Pro after two weeks. Went Lifetime after two months. The progression felt natural because each upgrade unlocked tangible value. But I want to be clear: the free plan alone would be worth paying for if they charged. The fact that it\'s actually free is almost suspicious.',
  },
];

export function Testimonials() {
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

  return (
    <section id="testimonials" ref={sectionRef} style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(59,130,246,0.07) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-block' }}>Testimonials</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '20px',
          }}>
            <span className="text-gradient-white">What Users Say About </span>
            <span className="text-gradient">ReplyChief</span>
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: 'rgba(148,163,184,0.75)',
            maxWidth: '550px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Don't take our word for it. Here's what real professionals say — 
            many of whom started on the free plan.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div style={{
          columns: 'auto 320px',
          columnGap: '24px',
          width: '100%',
        }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="fade-up glass-card animated-border"
              style={{
                borderRadius: '20px',
                padding: '28px',
                marginBottom: '24px',
                breakInside: 'avoid',
                transitionDelay: `${(i % 4) * 0.08}s`,
                display: 'inline-block',
                width: '100%',
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                {Array(t.stars).fill(null).map((_, j) => (
                  <span key={j} style={{ color: '#fbbf24', fontSize: '0.9rem' }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <div style={{ marginBottom: '24px', position: 'relative' }}>
                <span style={{
                  fontSize: '3rem',
                  color: t.color,
                  opacity: 0.3,
                  lineHeight: 0,
                  position: 'absolute',
                  top: '8px',
                  left: '-4px',
                  fontFamily: 'Georgia, serif',
                }}>"</span>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'rgba(203,213,225,0.85)',
                  lineHeight: 1.7,
                  margin: 0,
                  paddingLeft: '16px',
                  fontStyle: 'italic',
                }}>
                  {t.text}
                </p>
              </div>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#fff',
                  flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '0.88rem', fontWeight: 700, color: '#e2e8f0' }}>{t.name}</p>
                  <p style={{ margin: 0, fontSize: '0.78rem', color: 'rgba(148,163,184,0.65)' }}>{t.role}</p>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: t.color,
                    background: `${t.color}15`,
                    padding: '3px 10px',
                    borderRadius: '50px',
                  }}>LinkedIn</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Internal links contextual block */}
        <div className="fade-up" style={{ marginTop: '48px', marginBottom: '0' }}>
          <div style={{
            background: 'rgba(59,130,246,0.05)',
            border: '1px solid rgba(59,130,246,0.15)',
            borderRadius: '16px',
            padding: '24px 32px',
          }}>
            <p style={{ fontSize: '0.85rem', color: 'rgba(148,163,184,0.6)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              🔗 Who Uses ReplyChief?
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 28px' }}>
              {[
                { href: 'https://replychief.com/linkedin-comment-generator-for-founders', label: 'LinkedIn comment generator for founders' },
                { href: 'https://replychief.com/linkedin-commenting-tool-for-sales', label: 'LinkedIn commenting tool for sales teams' },
                { href: 'https://replychief.com/linkedin-personal-branding-ai-tool', label: 'LinkedIn personal branding AI tool' },
                { href: 'https://replychief.com/linkedin-comment-automation-tool', label: 'LinkedIn comment automation tool' },
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

        {/* Stats banner */}
        <div className="fade-up" style={{ marginTop: '40px' }}>
          <div className="glass" style={{
            borderRadius: '24px',
            padding: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#60a5fa', letterSpacing: '-0.03em', marginBottom: '4px' }}>4.9/5</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', marginBottom: '4px' }}>
                {'★★★★★'.split('').map((s, i) => <span key={i} style={{ color: '#fbbf24' }}>{s}</span>)}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(148,163,184,0.65)' }}>Average Rating</div>
            </div>
            <div style={{ width: '1px', height: '60px', background: 'rgba(255,255,255,0.08)' }} />
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#60a5fa', letterSpacing: '-0.03em', marginBottom: '8px' }}>10,000+</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(148,163,184,0.65)' }}>Active Users</div>
            </div>
            <div style={{ width: '1px', height: '60px', background: 'rgba(255,255,255,0.08)' }} />
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#60a5fa', letterSpacing: '-0.03em', marginBottom: '8px' }}>1M+</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(148,163,184,0.65)' }}>Comments Generated</div>
            </div>
            <div style={{ width: '1px', height: '60px', background: 'rgba(255,255,255,0.08)' }} />
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#60a5fa', letterSpacing: '-0.03em', marginBottom: '8px' }}>0</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(148,163,184,0.65)' }}>Cost to Start</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
