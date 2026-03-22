import { useEffect, useRef } from 'react';

const tableData = [
  { time: '1 week', comments: '70', impressions: '3,500 – 7,000', increase: '20-40%' },
  { time: '1 month', comments: '300', impressions: '15,000 – 30,000', increase: '80-150%' },
  { time: '3 months', comments: '900', impressions: '45,000 – 90,000', increase: '200-350%' },
  { time: '6 months', comments: '1,800', impressions: '90,000 – 180,000', increase: '300-500%' },
  { time: '1 year', comments: '3,650', impressions: '180,000 – 365,000', increase: '500%+' },
];

export function ImpactStats() {
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
    <section ref={sectionRef} style={{ padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, transparent 0%, rgba(30,58,138,0.06) 50%, transparent 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.2,
            marginBottom: '16px',
          }}>
            <span className="text-gradient-white">The Math of </span>
            <span className="text-gradient">10 Daily Comments</span>
          </h2>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(148,163,184,0.7)',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            10 comments/day = 70 comments/week = 300+ comments/month. 
            Whether you're a founder building investor visibility or a sales rep warming up prospects, 
            this{' '}
            <a href="https://replychief.com/linkedin-commenting-tool-for-sales" style={{ color: '#60a5fa', textDecoration: 'none', borderBottom: '1px solid rgba(96,165,250,0.35)', fontWeight: 600 }} onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = '#60a5fa'} onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(96,165,250,0.35)'}>LinkedIn commenting tool for sales</a>
            {' '}and{' '}
            <a href="https://replychief.com/linkedin-personal-branding-ai-tool" style={{ color: '#60a5fa', textDecoration: 'none', borderBottom: '1px solid rgba(96,165,250,0.35)', fontWeight: 600 }} onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = '#60a5fa'} onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(96,165,250,0.35)'}>personal branding AI tool</a>
            {' '}compounds over time:
          </p>
        </div>

        {/* Impact table */}
        <div className="fade-up" style={{ overflowX: 'auto', marginBottom: '56px' }}>
          <div className="glass" style={{ borderRadius: '20px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {['Timeframe', 'Comments Posted', 'Estimated Impressions', 'Profile View Increase'].map((h) => (
                    <th key={h} style={{
                      padding: '16px 24px',
                      textAlign: 'left',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#60a5fa',
                      background: 'rgba(59,130,246,0.1)',
                      whiteSpace: 'nowrap',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr
                    key={i}
                    style={{ transition: 'background 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(59,130,246,0.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <td style={{
                      padding: '16px 24px',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      color: '#e2e8f0',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}>{row.time}</td>
                    <td style={{
                      padding: '16px 24px',
                      fontSize: '0.92rem',
                      color: '#60a5fa',
                      fontWeight: 600,
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}>{row.comments}</td>
                    <td style={{
                      padding: '16px 24px',
                      fontSize: '0.9rem',
                      color: 'rgba(203,213,225,0.8)',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}>{row.impressions}</td>
                    <td style={{
                      padding: '16px 24px',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}>
                      <span style={{
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: '#4ade80',
                        background: 'rgba(74,222,128,0.1)',
                        padding: '3px 10px',
                        borderRadius: '50px',
                        border: '1px solid rgba(74,222,128,0.2)',
                      }}>
                        +{row.increase}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key insight cards */}
        <div className="fade-up" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
        }}>
          {[
            { icon: '📈', title: '3,650 Comments/Year', desc: 'In under 10 minutes per day — without spending a single dollar' },
            { icon: '👁️', title: '365K+ Impressions', desc: 'Your name in front of investors, prospects, peers, and hiring managers' },
            { icon: '⏰', title: '5-7 Min/Day', desc: 'A complete LinkedIn engagement strategy faster than morning coffee' },
            { icon: '💰', title: '$0 Cost', desc: 'Free forever. No catch. No credit card. Genuinely free.' },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(59,130,246,0.12)',
              borderRadius: '16px',
              padding: '24px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.3)';
              (e.currentTarget as HTMLElement).style.background = 'rgba(59,130,246,0.07)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.12)';
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{item.icon}</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '8px' }}>{item.title}</div>
              <div style={{ fontSize: '0.83rem', color: 'rgba(148,163,184,0.65)', lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
