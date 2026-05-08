import { useState } from 'react';
import Lanyard from './Lanyard';
import {
  IoMailOutline,
  IoLocationOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoSendOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoCloseOutline,
} from 'react-icons/io5';
import myPhoto from '../assets/photo/FOTO_JASTIN_1.jpg';

// ─── Result Modal ──────────────────────────────────────────────────
function ResultModal({ type, message, onClose }) {
  if (!type) return null;
  const isSuccess = type === 'success';
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
      }}
    >
      <div
        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)' }}
        onClick={onClose}
      />
      <div
        style={{
          position: 'relative',
          background: '#111',
          border: '3px solid #fff',
          boxShadow: '8px 8px 0 #FF3300',
          padding: '40px 32px',
          maxWidth: '420px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '12px', right: '12px',
            background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
          }}
        >
          <IoCloseOutline size={24} color="#fff" />
        </button>
        <div style={{ marginBottom: '16px' }}>
          {isSuccess
            ? <IoCheckmarkCircleOutline size={56} color="#22c55e" />
            : <IoCloseCircleOutline size={56} color="#FF3300" />}
        </div>
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 900, fontSize: '22px', color: '#fff',
          marginBottom: '12px', marginTop: 0,
        }}>
          {isSuccess ? 'MESSAGE SENT!' : 'OOPS!'}
        </h3>
        <p style={{
          fontSize: '14px', color: '#888', lineHeight: 1.6,
          marginBottom: '24px', fontFamily: "'Space Grotesk', sans-serif",
        }}>
          {message}
        </p>
        <button className="nb-btn" style={{ width: '100%', justifyContent: 'center' }} onClick={onClose}>
          GOT IT
        </button>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(null); // { type: 'success'|'error', message: '' }

  const socialLinks = [
    { label: 'LINKEDIN',  link: 'https://www.linkedin.com/in/jastin-lim-30a20228a/', Icon: IoLogoLinkedin },
    { label: 'GITHUB',    link: 'https://github.com/JazeL2304',                       Icon: IoLogoGithub   },
    { label: 'INSTAGRAM', link: 'https://www.instagram.com/jast.lim/',               Icon: IoLogoInstagram },
  ];

  const contactItems = [
    { Icon: IoMailOutline,     value: 'jastinlim2304@gmail.com',  link: 'https://mail.google.com/mail/?view=cm&fs=1&to=jastinlim2304@gmail.com' },
    { Icon: IoLocationOutline, value: 'Tangerang, Indonesia',      link: 'https://www.google.com/maps/place/Tangerang,+Banten,+Indonesia' },
  ];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'e5e8d917-86ed-4390-98ce-15d309750dec',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: 'jastinlim2304@gmail.com',
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setModal({ type: 'success', message: 'Thank you! Your message has been sent. I\'ll get back to you soon!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed');
      }
    } catch {
      setModal({ type: 'error', message: 'Something went wrong. Please email me directly at jastinlim2304@gmail.com' });
    } finally {
      setLoading(false);
    }
  };

  // Input style
  const inputStyle = {
    width: '100%',
    background: '#111',
    border: '2px solid #333',
    color: '#fff',
    padding: '12px 16px',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.15s',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ background: '#000', padding: '100px 40px', overflow: 'hidden' }}>
      <ResultModal
        type={modal?.type}
        message={modal?.message}
        onClose={() => setModal(null)}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* ── TOP SECTION: Info + Lanyard ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'center',
            marginBottom: '80px',
          }}
        >
          {/* LEFT: Contact info */}
          <div>
            <div className="section-label" style={{ marginBottom: '16px' }}>/ CONTACT</div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(40px, 7vw, 64px)',
                color: '#fff',
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                margin: 0,
                marginBottom: '24px',
              }}
            >
              LET&apos;S <span style={{ color: '#FF3300' }}>TALK.</span>
            </h2>
            <p style={{
              fontSize: '14px', color: '#888', maxWidth: '360px',
              marginBottom: '32px', lineHeight: 1.7,
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              Open to internship opportunities, collaborations, or just a conversation about design and code.
            </p>

            {/* Contact items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              {contactItems.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <item.Icon style={{ color: '#FF3300', width: '16px', height: '16px', flexShrink: 0 }} />
                  <span style={{ color: '#fff', fontSize: '13px', fontWeight: 500, fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.value}
                  </span>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    color: '#fff', textDecoration: 'none', fontSize: '12px',
                    fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: '0.05em', transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF3300'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                >
                  <social.Icon size={14} />
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: 3D Lanyard — bigger container */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '500px',
                height: '650px',
                background: 'transparent',
                position: 'relative',
              }}
            >
              <Lanyard
                name="Jastin Lim"
                role="CS Student | Web Developer"
                location="Tangerang, Indonesia"
                status="Student"
                focus="Full-Stack Dev"
                photo={myPhoto}
                isDark={true}
                cardBg="bg-gray-800"
                textColor="text-white"
                textMuted="text-gray-400"
                neumorph="shadow-[8px_8px_16px_#0a0a0a,-8px_-8px_16px_#2a2a2a]"
                neumorphInset="shadow-[inset_8px_8px_16px_#0a0a0a,inset_-8px_-8px_16px_#2a2a2a]"
                position={[0, 0, 20]} 
                fov={22}
              />
            </div>
            <p style={{
              textAlign: 'center', fontSize: '11px', color: '#444',
              marginTop: '16px', fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: '0.05em',
            }}>
              / drag to interact
            </p>
          </div>
        </div>

        {/* ── BOTTOM SECTION: Contact Form ── */}
        <div
          style={{
            border: '3px solid #222',
            boxShadow: '5px 5px 0 #FF3300',
            padding: '48px',
            background: '#0a0a0a',
          }}
        >
          <div style={{ marginBottom: '32px' }}>
            <div className="section-label" style={{ marginBottom: '8px' }}>/ SEND A MESSAGE</div>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900, fontSize: '32px',
              color: '#fff', margin: 0, letterSpacing: '-0.02em',
            }}>
              START A CONVERSATION.
            </h3>
          </div>

          <form onSubmit={sendEmail}>
            {/* Row: Name + Email */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginBottom: '16px',
            }}>
              <div>
                <label style={{
                  display: 'block', fontSize: '11px', fontWeight: 700,
                  color: '#555', letterSpacing: '0.08em',
                  fontFamily: "'Space Grotesk', sans-serif", marginBottom: '6px',
                }}>
                  FULL NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FF3300'}
                  onBlur={(e) => e.target.style.borderColor = '#333'}
                />
              </div>
              <div>
                <label style={{
                  display: 'block', fontSize: '11px', fontWeight: 700,
                  color: '#555', letterSpacing: '0.08em',
                  fontFamily: "'Space Grotesk', sans-serif", marginBottom: '6px',
                }}>
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#FF3300'}
                  onBlur={(e) => e.target.style.borderColor = '#333'}
                />
              </div>
            </div>

            {/* Message */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block', fontSize: '11px', fontWeight: 700,
                color: '#555', letterSpacing: '0.08em',
                fontFamily: "'Space Grotesk', sans-serif", marginBottom: '6px',
              }}>
                MESSAGE *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={loading}
                rows={5}
                placeholder="Describe your project or just say hi..."
                style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                onFocus={(e) => e.target.style.borderColor = '#FF3300'}
                onBlur={(e) => e.target.style.borderColor = '#333'}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                background: loading ? '#333' : '#FF3300',
                color: '#fff',
                border: `3px solid ${loading ? '#333' : '#FF3300'}`,
                padding: '16px 40px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.05em',
                cursor: loading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.15s',
              }}
              onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#FF3300'; e.currentTarget.style.borderColor = '#FF3300'; } }}
              onMouseLeave={(e) => { if (!loading) { e.currentTarget.style.background = '#FF3300'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#FF3300'; } }}
            >
              {loading ? (
                <>
                  <div style={{
                    width: '14px', height: '14px', border: '2px solid #fff',
                    borderTopColor: 'transparent', animation: 'spin 0.6s linear infinite',
                  }} />
                  SENDING...
                </>
              ) : (
                <>
                  <IoSendOutline size={14} />
                  SEND MESSAGE
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input:-webkit-autofill, textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px #111 inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      `}</style>
    </div>
  );
}

export default Contact;