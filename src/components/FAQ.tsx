import { useEffect, useRef, useState } from 'react';

const faqs = [
  {
    q: 'Is the Free plan really free forever?',
    a: 'Yes. No expiration date. No trial period. No "free for 30 days then we charge you." The Free plan gives you 10 comments per day, 5 tones, and full AI analysis — permanently. We will never remove or downgrade the Free plan.',
  },
  {
    q: "What's the catch?",
    a: "There isn't one. Our business model is simple: the Free plan demonstrates our quality, and a percentage of Free users eventually upgrade to Pro or Lifetime because they want more. We earn your business by delivering value first — not by tricking you with bait-and-switch tactics.",
  },
  {
    q: 'Do I need to create an account?',
    a: "Not for the Free plan. Just install the Chrome extension and start generating comments. If you later upgrade to Pro or Lifetime, you'll create an account at that point.",
  },
  {
    q: 'Can I use the Free plan for business purposes?',
    a: "Absolutely. Whether you're a solopreneur, a startup founder, a sales professional, or a Fortune 500 executive — the Free plan is yours to use however you want. No restrictions on commercial use.",
  },
  {
    q: "What happens at the end of the day when my 10 comments are used?",
    a: "The daily count resets at midnight (your local time). You'll have 10 fresh comments available the next day. You can still browse LinkedIn, generate suggestions to preview (without posting), and use the extension normally — you just can't post additional AI-generated comments until the reset.",
  },
  {
    q: 'Will the Free plan always have 10 comments per day?',
    a: "We have no plans to reduce the Free plan's daily limit. If anything, we're more likely to increase it over time as our AI becomes more efficient.",
  },
  {
    q: 'Is the Free plan the same AI as the paid plans?',
    a: "Yes. The exact same AI engine, the exact same context analysis, the exact same comment quality. The only differences between Free and paid plans are the daily comment limit, the number of tone options, and advanced personalization features. The core AI is identical.",
  },
  {
    q: 'Which browsers are supported?',
    a: 'ReplyChief works on all Chromium-based browsers: Google Chrome, Microsoft Edge, Brave, Arc, and Opera. Firefox and Safari are not currently supported.',
  },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fade-up"
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        transitionDelay: `${index * 0.06}s`,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '24px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{
          fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
          fontWeight: 600,
          color: open ? '#60a5fa' : '#e2e8f0',
          lineHeight: 1.4,
          transition: 'color 0.2s ease',
        }}>
          {faq.q}
        </span>
        <span style={{
          flexShrink: 0,
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: open ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.06)',
          border: `1px solid ${open ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.1)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1rem',
          color: open ? '#60a5fa' : 'rgba(148,163,184,0.6)',
          transition: 'all 0.3s ease',
          transform: open ? 'rotate(45deg)' : 'none',
        }}>
          +
        </span>
      </button>
      <div style={{
        overflow: 'hidden',
        maxHeight: open ? '300px' : '0',
        transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <p style={{
          fontSize: '0.95rem',
          color: 'rgba(148,163,184,0.8)',
          lineHeight: 1.75,
          paddingBottom: '24px',
          margin: 0,
        }}>
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
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
    <section id="faq" ref={sectionRef} style={{ padding: '120px 0', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(59,130,246,0.07) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-block' }}>FAQ</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '20px',
          }}>
            <span className="text-gradient-white">Still Have </span>
            <span className="text-gradient">Questions?</span>
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: 'rgba(148,163,184,0.75)',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Everything you need to know about ReplyChief's free plan and how it works.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="glass" style={{ borderRadius: '24px', padding: '0 40px', overflow: 'hidden' }}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Related pages block */}
        <div className="fade-up" style={{ marginTop: '48px' }}>
          <div style={{
            background: 'rgba(59,130,246,0.05)',
            border: '1px solid rgba(59,130,246,0.15)',
            borderRadius: '16px',
            padding: '24px 32px',
          }}>
            <p style={{ fontSize: '0.85rem', color: 'rgba(148,163,184,0.6)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              🔗 Learn More About ReplyChief
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 28px' }}>
              {[
                { href: 'https://replychief.com/ai-linkedin-comment-generator', label: 'AI LinkedIn comment generator' },
                { href: 'https://replychief.com/linkedin-comment-automation-tool', label: 'LinkedIn comment automation tool' },
                { href: 'https://replychief.com/linkedin-ai-reply-suggestions', label: 'LinkedIn AI reply suggestions' },
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

        {/* Support link */}
        <div className="fade-up" style={{ textAlign: 'center', marginTop: '32px' }}>
          <p style={{ fontSize: '0.95rem', color: 'rgba(148,163,184,0.65)' }}>
            Still have questions?{' '}
            <a
              href="https://replychief.com/support"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 600 }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              Contact our support team →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
