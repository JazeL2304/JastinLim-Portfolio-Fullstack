import { useState, useEffect } from 'react';
import { IoLogoGithub } from 'react-icons/io5';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'certificate', 'projects', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home',    label: 'Work' },
    { id: 'about',   label: 'About' },
    { id: 'skills',  label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: '#000',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 40px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: '28px',
              color: '#fff',
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            JL<span style={{ color: '#FF3300' }}>.</span>
          </button>

          {/* Desktop Nav Links */}
          <div style={{ display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: '32px' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '13px',
                  color: activeSection === item.id ? '#FF3300' : '#fff',
                  letterSpacing: '0.02em',
                  padding: '4px 0',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => { if (activeSection !== item.id) e.target.style.color = '#FF3300'; }}
                onMouseLeave={(e) => { if (activeSection !== item.id) e.target.style.color = '#fff'; }}
              >
                {item.label}
              </button>
            ))}

            {/* GitHub icon link */}
            <a
              href="https://github.com/JazeL2304"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center',
                color: '#fff', transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FF3300'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
            >
              <IoLogoGithub size={22} />
            </a>

            {/* Resume Button */}
            <button
              onClick={() => scrollToSection('contact')}
              style={{
                background: '#FF3300',
                color: '#fff',
                border: '2px solid #FF3300',
                padding: '8px 20px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.color = '#FF3300';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FF3300';
                e.currentTarget.style.color = '#fff';
              }}
            >
              RESUME
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: isMobile ? 'flex' : 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: '#fff',
                transition: 'all 0.2s',
                transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: '#fff',
                transition: 'all 0.2s',
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: '#fff',
                transition: 'all 0.2s',
                transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            style={{
              background: '#000',
              borderTop: '1px solid #222',
              padding: '16px 40px 24px',
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  color: activeSection === item.id ? '#FF3300' : '#fff',
                  padding: '10px 0',
                  borderBottom: '1px solid #222',
                  letterSpacing: '0.02em',
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              style={{
                marginTop: '16px',
                background: '#FF3300',
                color: '#fff',
                border: '2px solid #FF3300',
                padding: '10px 24px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.05em',
                cursor: 'pointer',
              }}
            >
              RESUME
            </button>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;