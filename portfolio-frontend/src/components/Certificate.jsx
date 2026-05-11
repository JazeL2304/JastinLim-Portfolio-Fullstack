import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  IoCloseOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoRibbonOutline,
} from 'react-icons/io5';

import AIHuaweiImg from '../assets/photo/certificate/AIHuawei.jpg';
import DatabaseHuaweiImg from '../assets/photo/certificate/DatabaseHuawei.jpg';
import IntroductiontoPythonImg from '../assets/photo/certificate/IntroductiontoPython.jpg';
import PythonintermediateImg from '../assets/photo/certificate/PythonIntermediate.jpg';
import DataScienceDicodingImg from '../assets/photo/certificate/DataScienceDicoding.png';

const certificates = [
  {
    id: 1,
    title: 'HCIA-AI V3.5 Course',
    issuer: 'Huawei',
    date: 'Mei 2025',
    image: AIHuaweiImg,
    description:
      'Completed Huawei ICT Academy\'s HCIA-AI V3.5 certification course covering fundamentals of artificial intelligence, machine learning, deep learning, and the application of AI technology in real-world scenarios. Gained hands-on experience with Huawei\'s MindSpore AI framework and ModelArts platform.',
  },
  {
    id: 2,
    title: 'HCIA-openGauss V1.0 Course',
    issuer: 'Huawei',
    date: 'Desember 2024',
    image: DatabaseHuaweiImg,
    description:
      'Completed the HCIA-openGauss V1.0 certification covering relational database management, SQL programming, database architecture design, and performance tuning using Huawei\'s openGauss open-source database system. Acquired skills in enterprise-grade database administration and optimization.',
  },
  {
    id: 3,
    title: 'Introduction to Python',
    issuer: 'Sololearn',
    date: 'February 2025',
    image: IntroductiontoPythonImg,
    description:
      'Completed Sololearn\'s Introduction to Python course covering core programming fundamentals including variables, data types, conditionals, loops, functions, and object-oriented programming concepts. Built a solid Python programming foundation through interactive exercises and challenges.',
  },
  {
    id: 4,
    title: 'Python Intermediate',
    issuer: 'Sololearn',
    date: 'Mei 2025',
    image: PythonintermediateImg,
    description:
      'Completed the Python Intermediate certification covering advanced topics such as functional programming, generators, decorators, regular expressions, file handling, and threading. Strengthened ability to write efficient, Pythonic code for real-world applications.',
  },
  {
    id: 5,
    title: 'Belajar Dasar Visualisasi Data',
    issuer: 'Dicoding',
    date: '2025',
    image: DataScienceDicodingImg,
    description:
      'Menyelesaikan kursus Belajar Dasar Visualisasi Data dari Dicoding yang mencakup konsep dasar visualisasi data, penggunaan library Python seperti Matplotlib dan Seaborn, teknik storytelling dengan data, serta penerapan prinsip desain visual yang efektif untuk komunikasi data.',
  },
];

// ─── Detail Modal (reference style) ──────────────────────────────
function CertModal({ cert, onClose }) {
  if (!cert) return null;
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.75)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          border: '3px solid #000',
          boxShadow: '8px 8px 0 #000',
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '24px 24px 16px',
          borderBottom: '2px solid #f0f0f0',
          display: 'flex', alignItems: 'flex-start', gap: '12px',
        }}>
          <IoRibbonOutline size={24} color="#FF3300" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900, fontSize: '20px',
              color: '#000', margin: 0, marginBottom: '4px',
            }}>
              {cert.title}
            </h3>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '13px', color: '#888', margin: 0,
            }}>
              {cert.issuer} • {cert.date}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}
          >
            <IoCloseOutline size={22} color="#000" />
          </button>
        </div>

        {/* Certificate image */}
        <div style={{ padding: '16px 24px', borderBottom: '2px solid #f0f0f0' }}>
          <img
            src={cert.image}
            alt={cert.title}
            style={{
              width: '100%',
              display: 'block',
              border: '2px solid #eee',
              boxShadow: '4px 4px 0 #FF3300',
            }}
          />
        </div>

        {/* About this certification */}
        <div style={{ padding: '20px 24px 28px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            marginBottom: '12px',
          }}>
            <IoRibbonOutline size={18} color="#000" />
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, fontSize: '15px', color: '#000',
            }}>
              About this certification
            </span>
          </div>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '14px', color: '#555', lineHeight: 1.7, margin: 0,
          }}>
            {cert.description}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Nav Button ────────────────────────────────────────────────────
function NavBtn({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: '44px', height: '44px',
        background: disabled ? '#ddd' : '#000',
        border: `3px solid ${disabled ? '#ccc' : '#000'}`,
        boxShadow: disabled ? 'none' : '3px 3px 0 #000',
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.15s', flexShrink: 0,
      }}
      onMouseEnter={(e) => { if (!disabled) { e.currentTarget.style.background = '#FF3300'; e.currentTarget.style.borderColor = '#FF3300'; } }}
      onMouseLeave={(e) => { if (!disabled) { e.currentTarget.style.background = '#000'; e.currentTarget.style.borderColor = '#000'; } }}
    >
      {children}
    </button>
  );
}

// ─── Certificate Card ───────────────────────────────────────────────
function CertCard({ cert, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(cert)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `3px solid ${hovered ? '#FF3300' : '#000'}`,
        boxShadow: hovered ? '2px 2px 0 #000' : '5px 5px 0 #000',
        transform: hovered ? 'translate(3px, 3px)' : 'none',
        cursor: 'pointer',
        overflow: 'hidden',
        background: '#fff',
        transition: 'all 0.18s ease',
        position: 'relative',
      }}
    >
      {/* Image container */}
      <div style={{ position: 'relative', borderBottom: '3px solid #000', overflow: 'hidden' }}>
        <img
          src={cert.image}
          alt={cert.title}
          style={{
            width: '100%',
            display: 'block',
            objectFit: 'cover',
            height: '200px',
            transition: 'transform 0.4s ease',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
        />

        {/* Hover overlay — slides up from bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'rgba(0,0,0,0.82)',
            padding: '12px 14px',
            transform: hovered ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <IoRibbonOutline size={14} color="#FF3300" />
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '12px', color: '#fff', fontWeight: 700,
            letterSpacing: '0.04em',
          }}>
            CLICK TO VIEW DETAILS
          </span>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '16px' }}>
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700, fontSize: '15px',
          color: '#000', marginBottom: '8px', marginTop: 0,
        }}>
          {cert.title}
        </h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span style={{
            fontSize: '12px', color: '#555',
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500,
          }}>
            {cert.issuer}
          </span>
          <span style={{ fontSize: '11px', color: '#888', fontFamily: "'Space Grotesk', sans-serif" }}>
            {cert.date}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────
function Certificate() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [startIdx, setStartIdx] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalCerts = certificates.length;
  const maxStart = Math.max(0, totalCerts - visibleItems);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIdx((prev) => (prev >= maxStart ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxStart]);

  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [bodyRef, bodyVisible] = useScrollAnimation(0.1);
  const [statsRef, statsVisible] = useScrollAnimation(0.2);

  const uniqueIssuers = [...new Set(certificates.map((c) => c.issuer))].length;

  const stats = [
    { label: 'CERTIFICATES', value: totalCerts },
    { label: 'ISSUERS',      value: uniqueIssuers },
    { label: 'CATEGORIES',   value: 2 },
  ];

  const canPrev = startIdx > 0;
  const canNext = startIdx < maxStart;
  const visibleCerts = certificates.slice(startIdx, startIdx + visibleItems);

  return (
    <div style={{ background: '#F5F5F5', padding: '100px 40px', overflow: 'hidden' }}>
      <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* ── Header row with nav buttons ── */}
        <div
          ref={headerRef}
          className={`scroll-hidden ${headerVisible ? 'animate-slide-down' : ''}`}
          style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', flexWrap: 'wrap',
            gap: '16px', marginBottom: '40px',
          }}
        >
          <div>
            <div className="section-label" style={{ marginBottom: '12px' }}>/ CREDENTIALS</div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900, fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#000', margin: 0, letterSpacing: '-0.02em',
            }}>
              CREDENTIALS.
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{
              fontSize: '12px', color: '#888',
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, marginRight: '8px',
            }}>
              {startIdx + 1} – {Math.min(startIdx + visibleItems, totalCerts)} / {totalCerts}
            </span>
            <NavBtn onClick={() => setStartIdx((i) => Math.max(0, i - 1))} disabled={!canPrev}>
              <IoChevronBackOutline size={18} color={canPrev ? '#fff' : '#aaa'} />
            </NavBtn>
            <NavBtn onClick={() => setStartIdx((i) => Math.min(maxStart, i + 1))} disabled={!canNext}>
              <IoChevronForwardOutline size={18} color={canNext ? '#fff' : '#aaa'} />
            </NavBtn>
          </div>
        </div>

        {/* ── Certificates carousel ── */}
        <div
          ref={bodyRef}
          className={`scroll-hidden ${bodyVisible ? 'animate-zoom-in' : ''}`}
          style={{ marginBottom: '64px' }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${visibleItems}, 1fr)`,
            gap: '24px',
          }}>
            {visibleCerts.map((cert) => (
              <CertCard key={cert.id} cert={cert} onClick={setSelectedCert} />
            ))}
            {visibleCerts.length < visibleItems &&
              Array.from({ length: visibleItems - visibleCerts.length }).map((_, i) => (
                <div key={`ghost-${i}`} style={{ border: '3px dashed #ddd', background: 'transparent' }} />
              ))
            }
          </div>

          {/* Dot indicators */}
          {maxStart > 0 && (
            <div style={{ display: 'flex', gap: '6px', marginTop: '24px', justifyContent: 'center' }}>
              {Array.from({ length: maxStart + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStartIdx(i)}
                  style={{
                    width: i === startIdx ? '24px' : '8px', height: '8px',
                    background: i === startIdx ? '#FF3300' : '#ccc',
                    border: 'none', cursor: 'pointer', transition: 'all 0.2s', padding: 0,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* ── Stats row ── */}
        <div
          ref={statsRef}
          className={`scroll-hidden ${statsVisible ? 'animate-fade-in delay-200' : ''}`}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} style={{
              background: '#000', border: '3px solid #000',
              padding: '32px 16px', textAlign: 'center',
            }}>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900, fontSize: '48px', color: '#fff',
                lineHeight: 1, marginBottom: '8px',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '11px', fontWeight: 700, color: '#FF3300',
                letterSpacing: '0.1em', fontFamily: "'Space Grotesk', sans-serif",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificate;