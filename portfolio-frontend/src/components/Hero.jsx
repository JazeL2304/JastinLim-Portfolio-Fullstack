import { useState } from 'react';
import { 
  IoDownloadOutline,
  IoCheckmarkCircleOutline,
  IoAlertCircleOutline
} from 'react-icons/io5';
import myPhoto from '../assets/photo/FOTO_JASTIN_2.png';
import cvFile from '../assets/cv/Jastin Lim-resume.pdf';

// Tech icon assets
import reactIcon from '../assets/photo/react.png';
import tailwindIcon from '../assets/photo/tailwind.png';
import phpIcon from '../assets/photo/php.png';
import laravelIcon from '../assets/photo/laravel.png';
import pythonIcon from '../assets/photo/python.png';
import mysqlIcon from '../assets/photo/mysql.png';
import javascriptIcon from '../assets/photo/javascript.png';
import kotlinIcon from '../assets/photo/kotlin.png';
import unityIcon from '../assets/photo/unity.png';
import figmaIcon from '../assets/photo/figma.png';

// Scattered across the entire hero — positions in % of viewport
// Left side: 5 icons, Right side: 5 icons, spread top-to-bottom
const FLOATING_ICONS = [
  // LEFT column (top to bottom)
  { name: 'React',      icon: reactIcon,      top: '14%', left: '4%',   animName: 'floatA', delay: '0s'   },
  { name: 'Python',     icon: pythonIcon,     top: '28%', left: '12%',  animName: 'floatE', delay: '0.5s' },
  { name: 'Tailwind',   icon: tailwindIcon,   top: '45%', left: '5%',   animName: 'floatB', delay: '1.0s' },
  { name: 'PHP',        icon: phpIcon,        top: '62%', left: '14%',  animName: 'floatC', delay: '0.3s' },
  { name: 'Laravel',    icon: laravelIcon,    top: '78%', left: '6%',   animName: 'floatD', delay: '0.8s' },

  // RIGHT column (top to bottom)
  { name: 'MySQL',      icon: mysqlIcon,      top: '14%', left: '84%',  animName: 'floatF', delay: '0.6s' },
  { name: 'JavaScript', icon: javascriptIcon, top: '28%', left: '88%',  animName: 'floatA', delay: '0.2s' },
  { name: 'Figma',      icon: figmaIcon,      top: '45%', left: '82%',  animName: 'floatD', delay: '1.1s' },
  { name: 'Kotlin',     icon: kotlinIcon,     top: '62%', left: '88%',  animName: 'floatB', delay: '0.4s' },
  { name: 'Unity',      icon: unityIcon,      top: '78%', left: '83%',  animName: 'floatC', delay: '0.9s' },
];

function Hero() {
  const [downloadStatus, setDownloadStatus] = useState('idle');

  const handleDownloadCV = async () => {
    try {
      setDownloadStatus('downloading');
      const response = await fetch(cvFile);
      if (!response.ok) throw new Error('CV file not found');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Jastin_Lim_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      setDownloadStatus('success');
      setTimeout(() => setDownloadStatus('idle'), 3000);
    } catch (error) {
      console.error('Error downloading CV:', error);
      setDownloadStatus('error');
      setTimeout(() => setDownloadStatus('idle'), 3000);
    }
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      style={{
        background: '#000',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px 60px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Scattered floating circular icons (absolute, full page width) ── */}
      {FLOATING_ICONS.map((tech) => (
        <div
        className="nb-circle"
          key={tech.name}
          title={tech.name}
          style={{
            position: 'absolute',
            top: tech.top,
            left: tech.left,
            width: '60px',
            height: '60px',
            background: '#fff',
            border: '2px solid #333',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            animation: `${tech.animName} 3s ease-in-out ${tech.delay} infinite alternate`,
            boxShadow: '0 4px 20px rgba(255,51,0,0.08)',
            transition: 'box-shadow 0.2s, border-color 0.2s',
            cursor: 'default',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 0 3px #FF3300, 0 4px 24px rgba(255,51,0,0.3)';
            e.currentTarget.style.borderColor = '#FF3300';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,51,0,0.08)';
            e.currentTarget.style.borderColor = '#333';
          }}
        >
          <img
            src={tech.icon}
            alt={tech.name}
            style={{ width: '32px', height: '32px', objectFit: 'contain' }}
          />
        </div>
      ))}

      {/* ── Main content (z-index above icons) ── */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Availability badge */}
        <div
          className="nb-tag"
          style={{ marginBottom: '24px', fontSize: '11px', letterSpacing: '0.08em', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
        >
          <span style={{ color: '#22c55e', fontSize: '10px' }}>●</span>
          AVAILABLE FOR INTERNSHIP
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(56px, 10vw, 96px)',
            letterSpacing: '-0.04em',
            color: '#fff',
            lineHeight: 0.95,
            margin: 0,
            marginBottom: '32px',
          }}
        >
          JASTIN
          <br />
          <span style={{ color: '#FF3300' }}>LIM.</span>
        </h1>

        {/* Photo */}
        <div style={{ marginBottom: '32px' }}>
          <img
            src={myPhoto}
            alt="Jastin Lim"
            style={{
              width: '280px',
              objectFit: 'contain',
              filter: 'grayscale(20%) contrast(1.1)',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </div>

        {/* Description */}
        <p
          style={{
            color: '#888',
            fontSize: '14px',
            maxWidth: '400px',
            margin: '0 auto 32px',
            lineHeight: 1.7,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          Computer Science Student based in Tangerang, Indonesia.
          Crafting interfaces with structural integrity and raw aesthetics.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            className="nb-btn nb-shadow"
            onClick={handleDownloadCV}
            disabled={downloadStatus === 'downloading'}
            style={{
              opacity: downloadStatus === 'downloading' ? 0.7 : 1,
              cursor: downloadStatus === 'downloading' ? 'wait' : 'pointer',
            }}
          >
            {downloadStatus === 'downloading' && (
              <>
                <div
                  style={{
                    width: '14px', height: '14px',
                    border: '2px solid #fff', borderTopColor: '#FF3300',
                    borderRadius: '50%', animation: 'spin 0.6s linear infinite',
                  }}
                />
                DOWNLOADING...
              </>
            )}
            {downloadStatus === 'success' && (<><IoCheckmarkCircleOutline size={16} />DOWNLOADED!</>)}
            {downloadStatus === 'error' && (<><IoAlertCircleOutline size={16} />FILE NOT FOUND</>)}
            {downloadStatus === 'idle' && (<><IoDownloadOutline size={16} />DOWNLOAD CV</>)}
          </button>

          <button
            className="nb-btn nb-btn-outline nb-border"
            onClick={scrollToProjects}
          >
            VIEW PROJECTS
          </button>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

export default Hero;