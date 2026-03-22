export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '48px 24px 32px',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px',
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="https://replychief.com/asset/logo.png"
              alt="ReplyChief"
              style={{ height: '32px', width: 'auto' }}
            />
            <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#e2e8f0', letterSpacing: '-0.01em' }}>
              ReplyChief
            </span>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px', alignItems: 'center' }}>
            {[
              { label: 'Privacy Policy', href: 'https://replychief.com/privacy' },
              { label: 'Terms of Service', href: 'https://replychief.com/terms' },
              { label: 'Support', href: 'https://replychief.com/support' },
              { label: 'Website', href: 'https://replychief.com/' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.88rem',
                  color: 'rgba(148,163,184,0.65)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#60a5fa')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(148,163,184,0.65)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{
            fontSize: '0.82rem',
            color: 'rgba(148,163,184,0.45)',
            margin: 0,
          }}>
            © 2026 ReplyChief. A product of{' '}
            <a
              href="https://replychief.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(148,163,184,0.6)', textDecoration: 'none' }}
            >
              Inoviqa
            </a>
          </p>
          <p style={{ fontSize: '0.82rem', color: 'rgba(148,163,184,0.35)', margin: 0 }}>
            Free LinkedIn Comment Generator — AI-Powered Chrome Extension
          </p>
        </div>
      </div>
    </footer>
  );
}
