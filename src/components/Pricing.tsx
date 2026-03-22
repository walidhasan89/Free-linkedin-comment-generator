import { useEffect, useRef, useState } from 'react';

const CHROME_EXT_URL =
  'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig';

const features = [
  'Daily comments',
  'Tone options',
  'Custom prompt instructions',
  'Industry context settings',
  'Personal details integration',
  'Multiple voice profiles',
  'Tone memory (AI learns style)',
  'Image/carousel analysis',
  'Devices',
  'Support',
  'Context analysis',
  'Multiple suggestions per post',
  'Regeneration',
  'Human review',
  'Account safety',
  'Credit card required',
];

// Monthly pricing = $5.99/mo | Yearly pricing = $59/yr ($4.92/mo)
// Exact saving: $5.99 × 12 = $71.88 − $59.00 = $12.88/year saved
const MONTHLY_PRICE = 5.99;
const YEARLY_PRICE = 59;
const YEARLY_MONTHLY_EQUIV = (YEARLY_PRICE / 12).toFixed(2); // "4.92"
const MONTHLY_ANNUAL_TOTAL = (MONTHLY_PRICE * 12).toFixed(2); // "71.88"
const EXACT_SAVING = (MONTHLY_PRICE * 12 - YEARLY_PRICE).toFixed(2); // "12.88"

const planValues = {
  free: [
    '10/day', '5 basic tones', '❌', '❌', '❌', '❌', '❌',
    'Basic', '1', 'Basic', '✅ Full', '✅ 3-4/post', '✅ Unlimited', '✅ Always', '✅ Zero risk', '❌ No',
  ],
  pro: [
    'Unlimited', 'All 8 tones', '✅ Full', '✅', '✅', '✅', '✅',
    '✅ Advanced', '2', 'Priority', '✅ Full', '✅ 3-4/post', '✅ Unlimited', '✅ Always', '✅ Zero risk', '✅ Yes',
  ],
  lifetime: [
    'Unlimited forever', 'All 8 tones', '✅ Full', '✅', '✅', '✅', '✅',
    '✅ Advanced', '5', 'Lifetime priority', '✅ Full', '✅ 3-4/post', '✅ Unlimited', '✅ Always', '✅ Zero risk', '✅ One-time',
  ],
};

export function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showTable, setShowTable] = useState(false);
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

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

  const isYearly = billing === 'yearly';

  const plans = [
    {
      name: 'Free',
      price: '$0',
      priceMonthly: null,
      sub: 'Forever',
      subYearly: null,
      savingBadge: null,
      badge: null,
      desc: 'Perfect for getting started',
      cta: 'Add to Chrome — Free',
      ctaUrl: CHROME_EXT_URL,
      ctaStyle: 'outline',
      highlight: false,
      values: planValues.free,
      keyFeatures: [
        '10 AI comments per day',
        '5 tone options',
        'Full context analysis',
        'No credit card ever',
        'Zero signup friction',
      ],
    },
    {
      name: 'Pro',
      price: `$${MONTHLY_PRICE}`,
      priceYearly: `$${YEARLY_MONTHLY_EQUIV}`,
      sub: '/month',
      subYearly: `/mo · billed $${YEARLY_PRICE}/year`,
      savingBadge: `Save $${EXACT_SAVING}/year`,
      badge: 'Most Popular',
      desc: 'For professionals who want unlimited engagement',
      cta: isYearly ? `Upgrade to Pro — $${YEARLY_PRICE}/yr` : `Upgrade to Pro — $${MONTHLY_PRICE}/mo`,
      ctaUrl: 'https://replychief.com/',
      ctaStyle: 'brand',
      highlight: false,
      values: planValues.pro,
      keyFeatures: [
        'Unlimited AI comments',
        'All 8 tone options',
        'Advanced personalization',
        'Priority support',
        '2 devices',
      ],
    },
    {
      name: 'Lifetime',
      price: '$149',
      priceYearly: null,
      sub: 'one-time',
      subYearly: null,
      savingBadge: null,
      badge: '⭐ Best Value',
      desc: 'Pay once, use forever. All future features included.',
      cta: 'Claim Lifetime – $149',
      ctaUrl: 'https://replychief.com/',
      ctaStyle: 'lifetime',
      highlight: true,
      values: planValues.lifetime,
      keyFeatures: [
        'Unlimited forever',
        'All 8 tone options',
        'All future features',
        '5 devices + VIP access',
        'Lifetime priority support',
      ],
    },
  ];

  return (
    <section id="pricing" ref={sectionRef} style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(59,130,246,0.1) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-block' }}>Simple Pricing</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '20px',
          }}>
            <span className="text-gradient-white">Upgrade When </span>
            <span className="text-gradient">You're Ready</span>
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: 'rgba(148,163,184,0.75)',
            maxWidth: '550px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            No pressure. No countdown timer. No "upgrade or lose access" nonsense.{' '}
            The free plan is yours forever.
          </p>
        </div>

        {/* ── Billing Toggle ── */}
        <div className="fade-up" style={{ display: 'flex', justifyContent: 'center', marginBottom: '52px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '50px',
            padding: '5px',
            gap: '4px',
            position: 'relative',
          }}>
            {/* Monthly tab */}
            <button
              onClick={() => setBilling('monthly')}
              style={{
                padding: '10px 28px',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.92rem',
                fontWeight: 700,
                transition: 'all 0.25s ease',
                background: !isYearly
                  ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
                  : 'transparent',
                color: !isYearly ? '#fff' : 'rgba(148,163,184,0.7)',
                boxShadow: !isYearly ? '0 4px 16px rgba(59,130,246,0.35)' : 'none',
              }}
            >
              Monthly
            </button>

            {/* Yearly tab */}
            <button
              onClick={() => setBilling('yearly')}
              style={{
                padding: '10px 28px',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.92rem',
                fontWeight: 700,
                transition: 'all 0.25s ease',
                background: isYearly
                  ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
                  : 'transparent',
                color: isYearly ? '#fff' : 'rgba(148,163,184,0.7)',
                boxShadow: isYearly ? '0 4px 16px rgba(59,130,246,0.35)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Yearly
              {/* Saving pill on the tab itself */}
              <span style={{
                background: isYearly ? 'rgba(255,255,255,0.2)' : 'rgba(74,222,128,0.15)',
                color: isYearly ? '#fff' : '#4ade80',
                border: isYearly ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(74,222,128,0.3)',
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: '50px',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}>
                Save ${EXACT_SAVING}
              </span>
            </button>
          </div>
        </div>

        {/* Yearly context note */}
        {isYearly && (
          <div style={{ textAlign: 'center', marginTop: '-32px', marginBottom: '40px' }}>
            <p style={{ fontSize: '0.85rem', color: 'rgba(148,163,184,0.55)', lineHeight: 1.5 }}>
              Yearly billing: <strong style={{ color: '#4ade80' }}>${YEARLY_PRICE}/year</strong> instead of{' '}
              <s style={{ color: 'rgba(148,163,184,0.4)' }}>${MONTHLY_ANNUAL_TOTAL}/year</s>
              {' '}— you save exactly{' '}
              <strong style={{ color: '#4ade80' }}>${EXACT_SAVING}</strong> every year.
            </p>
          </div>
        )}

        {/* Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '64px',
          alignItems: 'stretch',
        }}>
          {plans.map((plan, i) => {
            const displayPrice =
              plan.name === 'Pro' && isYearly
                ? `$${YEARLY_MONTHLY_EQUIV}`
                : plan.price;
            const displaySub =
              plan.name === 'Pro' && isYearly
                ? `/mo · billed $${YEARLY_PRICE}/yr`
                : plan.sub;

            return (
              <div
                key={i}
                className="fade-up"
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  position: 'relative',
                }}
              >
                {plan.highlight && (
                  <div style={{
                    position: 'absolute',
                    inset: '-2px',
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, #3b82f6, #7c3aed, #1d4ed8)',
                    zIndex: 0,
                    padding: '2px',
                  }}>
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '23px',
                      background: '#050a14',
                    }} />
                  </div>
                )}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    background: plan.highlight
                      ? 'rgba(59,130,246,0.08)'
                      : 'rgba(255,255,255,0.03)',
                    border: plan.highlight
                      ? '1px solid rgba(59,130,246,0.3)'
                      : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '22px',
                    padding: '36px 32px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {plan.badge && (
                    <div style={{ marginBottom: '16px' }}>
                      <span style={{
                        background: plan.highlight
                          ? 'linear-gradient(135deg, #3b82f6, #7c3aed)'
                          : 'rgba(59,130,246,0.15)',
                        color: '#fff',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '4px 12px',
                        borderRadius: '50px',
                        letterSpacing: '0.04em',
                      }}>
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: '#e2e8f0',
                    marginBottom: '8px',
                    letterSpacing: '-0.02em',
                  }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(148,163,184,0.65)', marginBottom: '24px', lineHeight: 1.5 }}>
                    {plan.desc}
                  </p>

                  {/* Price row */}
                  <div style={{ marginBottom: plan.name === 'Pro' && isYearly ? '8px' : '28px' }}>
                    {/* Strikethrough original price for Pro on yearly */}
                    {plan.name === 'Pro' && isYearly && (
                      <div style={{ marginBottom: '4px' }}>
                        <s style={{ fontSize: '1rem', color: 'rgba(148,163,184,0.35)', fontWeight: 500 }}>
                          ${MONTHLY_PRICE}/mo
                        </s>
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.2rem)',
                        fontWeight: 900,
                        letterSpacing: '-0.04em',
                        color: plan.highlight ? '#60a5fa' : '#e2e8f0',
                        transition: 'all 0.3s ease',
                      }}>
                        {displayPrice}
                      </span>
                      <span style={{ fontSize: '0.88rem', color: 'rgba(148,163,184,0.6)' }}>
                        {displaySub}
                      </span>
                    </div>

                    {/* Exact saving badge — only Pro + yearly */}
                    {plan.name === 'Pro' && isYearly && (
                      <div style={{ marginTop: '10px' }}>
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          background: 'rgba(74,222,128,0.12)',
                          border: '1px solid rgba(74,222,128,0.3)',
                          color: '#4ade80',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          padding: '4px 12px',
                          borderRadius: '50px',
                        }}>
                          🎉 You save ${EXACT_SAVING}/year vs monthly billing
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={plan.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={plan.ctaStyle === 'brand' || plan.ctaStyle === 'lifetime' ? 'btn-brand' : ''}
                    style={{
                      display: 'block',
                      padding: '14px 24px',
                      borderRadius: '50px',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: '#fff',
                      textDecoration: 'none',
                      textAlign: 'center',
                      marginBottom: '32px',
                      marginTop: plan.name === 'Pro' && isYearly ? '20px' : '0',
                      ...(plan.ctaStyle === 'outline' ? {
                        background: 'transparent',
                        border: '2px solid rgba(255,255,255,0.15)',
                        transition: 'all 0.2s ease',
                      } : {}),
                      ...(plan.ctaStyle === 'lifetime' ? {
                        boxShadow: '0 0 30px rgba(59,130,246,0.4)',
                      } : {}),
                    }}
                    onMouseEnter={(e) => {
                      if (plan.ctaStyle === 'outline') {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.4)';
                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (plan.ctaStyle === 'outline') {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                      }
                    }}
                  >
                    <span style={{ position: 'relative', zIndex: 1 }}>
                      {plan.name === 'Pro'
                        ? isYearly
                          ? `Upgrade to Pro — $${YEARLY_PRICE}/yr`
                          : `Upgrade to Pro — $${MONTHLY_PRICE}/mo`
                        : plan.cta}
                    </span>
                  </a>

                  {plan.name === 'Lifetime' && (
                    <div style={{
                      background: 'rgba(239,68,68,0.1)',
                      border: '1px solid rgba(239,68,68,0.2)',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      marginBottom: '24px',
                      fontSize: '0.83rem',
                      color: '#fca5a5',
                      textAlign: 'center',
                    }}>
                      ⏳ Early adopter pricing — increases to $299 after first 100 slots
                    </div>
                  )}

                  {/* Key features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                    {plan.keyFeatures.map((feat, j) => (
                      <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ color: '#3b82f6', fontWeight: 700, flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: '0.88rem', color: 'rgba(203,213,225,0.8)' }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Toggle full comparison table */}
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: '32px' }}>
          <button
            onClick={() => setShowTable(!showTable)}
            style={{
              background: 'rgba(59,130,246,0.1)',
              border: '1px solid rgba(59,130,246,0.25)',
              borderRadius: '10px',
              padding: '12px 24px',
              color: '#60a5fa',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {showTable ? '▲ Hide' : '▼ Show'} Full Feature Comparison Table
          </button>
        </div>

        {showTable && (
          <div className="fade-up" style={{ overflowX: 'auto' }}>
            <div className="glass" style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                <thead>
                  <tr>
                    <th style={{
                      padding: '16px 20px',
                      textAlign: 'left',
                      color: '#60a5fa',
                      fontWeight: 700,
                      background: 'rgba(59,130,246,0.1)',
                      fontSize: '0.85rem',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}>Feature</th>
                    {plans.map((p, i) => (
                      <th key={i} style={{
                        padding: '16px 20px',
                        textAlign: 'center',
                        color: p.highlight ? '#60a5fa' : '#e2e8f0',
                        fontWeight: 700,
                        background: 'rgba(59,130,246,0.1)',
                        fontSize: '0.9rem',
                        whiteSpace: 'nowrap',
                      }}>
                        {p.name}
                        {p.badge && (
                          <span style={{ display: 'block', fontSize: '0.7rem', color: '#a78bfa', marginTop: '2px' }}>
                            {p.badge}
                          </span>
                        )}
                        {p.name === 'Pro' && (
                          <span style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(148,163,184,0.6)', marginTop: '2px', fontWeight: 500 }}>
                            {isYearly
                              ? `$${YEARLY_MONTHLY_EQUIV}/mo · $${YEARLY_PRICE}/yr`
                              : `$${MONTHLY_PRICE}/mo`}
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feat, i) => (
                    <tr key={i}>
                      <td style={{
                        padding: '13px 20px',
                        color: 'rgba(203,213,225,0.8)',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        fontWeight: 500,
                      }}>
                        {feat}
                      </td>
                      {plans.map((p, j) => (
                        <td key={j} style={{
                          padding: '13px 20px',
                          textAlign: 'center',
                          borderBottom: '1px solid rgba(255,255,255,0.05)',
                          color: p.values[i].startsWith('✅')
                            ? '#4ade80'
                            : p.values[i].startsWith('❌')
                            ? 'rgba(148,163,184,0.4)'
                            : '#e2e8f0',
                          fontWeight: 500,
                        }}>
                          {p.values[i]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Internal links block */}
        <div className="fade-up" style={{ marginTop: '56px', marginBottom: '0' }}>
          <div style={{
            background: 'rgba(59,130,246,0.05)',
            border: '1px solid rgba(59,130,246,0.15)',
            borderRadius: '16px',
            padding: '24px 32px',
          }}>
            <p style={{ fontSize: '0.85rem', color: 'rgba(148,163,184,0.6)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              🔗 Compare & Explore
            </p>
            <p style={{ fontSize: '0.93rem', color: 'rgba(148,163,184,0.75)', marginBottom: '14px', lineHeight: 1.6 }}>
              Not sure which plan is right for you? See how ReplyChief compares in our{' '}
              <a href="https://replychief.com/best-linkedin-engagement-tools-2026" style={{ color: '#60a5fa', textDecoration: 'none', borderBottom: '1px solid rgba(96,165,250,0.35)', fontWeight: 600 }} onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = '#60a5fa'} onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(96,165,250,0.35)'}>
                best LinkedIn engagement tools 2026
              </a>{' '}
              guide, or explore our specialized versions for{' '}
              <a href="https://replychief.com/linkedin-commenting-tool-for-sales" style={{ color: '#60a5fa', textDecoration: 'none', borderBottom: '1px solid rgba(96,165,250,0.35)', fontWeight: 600 }} onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = '#60a5fa'} onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(96,165,250,0.35)'}>
                sales professionals
              </a>{' '}
              and{' '}
              <a href="https://replychief.com/linkedin-comment-generator-for-founders" style={{ color: '#60a5fa', textDecoration: 'none', borderBottom: '1px solid rgba(96,165,250,0.35)', fontWeight: 600 }} onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = '#60a5fa'} onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(96,165,250,0.35)'}>
                startup founders
              </a>.
            </p>
          </div>
        </div>

        {/* Guarantees */}
        <div className="fade-up" style={{ marginTop: '40px' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            justifyContent: 'center',
          }}>
            {[
              { icon: '🔒', text: '30-day money-back guarantee on paid plans' },
              { icon: '🔄', text: 'Cancel anytime — no contracts' },
              { icon: '💳', text: 'Secure payment via Stripe' },
              { icon: '🛡️', text: 'Enterprise-grade privacy — zero data storage' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 20px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '50px',
                fontSize: '0.88rem',
                color: 'rgba(203,213,225,0.8)',
              }}>
                <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
