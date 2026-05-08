import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5';

function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home',    label: 'Work'    },
    { id: 'about',   label: 'About'   },
    { id: 'skills',  label: 'Skills'  },
    { id: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    { label: 'LINKEDIN',  link: 'https://www.linkedin.com/in/jastin-lim-30a20228a/', Icon: IoLogoLinkedin },
    { label: 'GITHUB',    link: 'https://github.com/JazeL2304',                       Icon: IoLogoGithub   },
    { label: 'INSTAGRAM', link: 'https://www.instagram.com/jast.lim/',               Icon: IoLogoInstagram },
  ];

  return (
    <footer
      style={{
        background: '#000',
        borderTop: '3px solid #FF3300',
        padding: '24px 40px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* Left: Logo + Copyright */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: '20px',
              color: '#fff',
              letterSpacing: '-0.02em',
            }}
          >
            JL<span style={{ color: '#FF3300' }}>.</span>
          </span>
          <span
            style={{
              fontSize: '11px',
              color: '#555',
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: '0.02em',
            }}
          >
            © 2025 JASTIN LIM. ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Center: Nav links */}
        <nav style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '12px',
                color: '#888',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                letterSpacing: '0.03em',
                transition: 'color 0.15s',
                padding: 0,
              }}
              onMouseEnter={(e) => { e.target.style.color = '#FF3300'; }}
              onMouseLeave={(e) => { e.target.style.color = '#888'; }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: Social links */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: '#888',
                textDecoration: 'none',
                fontSize: '12px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                letterSpacing: '0.03em',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#FF3300'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}
            >
              <social.Icon size={13} />
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;