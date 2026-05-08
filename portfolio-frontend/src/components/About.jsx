import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import myPhoto from '../assets/photo/FOTO_JASTIN_1.jpg';
import { IoLogoGithub, IoBriefcaseOutline, IoSchoolOutline, IoOpenOutline } from 'react-icons/io5';
import { GitHubCalendar } from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

function About() {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [imageRef, imageVisible] = useScrollAnimation(0.1);
  const [contentRef, contentVisible] = useScrollAnimation(0.1);
  const [trackRef, trackVisible] = useScrollAnimation(0.1);

  const facts = [
    { label: 'LOCATION', value: 'Tangerang, ID' },
    { label: 'EDUCATION', value: 'Universitas Multimedia Nusantara' },
    { label: 'STATUS', value: 'Fullstack Developer Intern' },
    { label: 'COMPANY', value: 'PT. Folks Global Group' },
  ];

  const interests = ['BRUTALISM', 'TYPOGRAPHY', 'UX DESIGN', 'CHESS', 'CODING'];

  const timeline = [
    {
      type: 'work',
      title: 'Fullstack Developer Intern',
      org: 'PT. Folks Global Group',
      period: '2026 – Present',
      desc: 'Building and maintaining full-stack web applications. Collaborating with cross-functional teams to design, develop, and deploy scalable solutions for enterprise clients.',
    },
    {
      type: 'edu',
      title: 'Computer Science',
      org: 'Universitas Multimedia Nusantara (UMN)',
      period: '2023 – Present',
      desc: 'Pursuing a Bachelor\'s degree in Computer Science with focus on software engineering, UI/UX design, and mobile development.',
    },
  ];

  return (
    <div
      style={{
        background: '#fff',
        padding: '100px 40px',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div
          ref={headerRef}
          className={`scroll-hidden ${headerVisible ? 'animate-slide-down' : ''}`}
          style={{ marginBottom: '48px' }}
        >
          <div className="section-label" style={{ marginBottom: '12px' }}>/ ABOUT ME</div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#000',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            STRUCTURED CREATIVITY.
          </h2>
        </div>

        {/* Two column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '60px',
            alignItems: 'start',
            marginBottom: '60px',
          }}
        >
          {/* Left: Photo */}
          <div
            ref={imageRef}
            className={`scroll-hidden ${imageVisible ? 'animate-slide-left' : ''}`}
          >
            <img
              src={myPhoto}
              alt="Jastin Lim"
              style={{
                width: '100%',
                maxWidth: '320px',
                border: '3px solid #000',
                boxShadow: '8px 8px 0 #000',
                objectFit: 'cover',
                aspectRatio: '3/4',
                filter: 'grayscale(15%) contrast(1.05)',
                display: 'block',
              }}
            />

            {/* GitHub card below photo */}
            <a
              href="https://github.com/JazeL2304"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  marginTop: '16px',
                  maxWidth: '320px',
                  background: '#000',
                  border: '3px solid #000',
                  boxShadow: '5px 5px 0 #FF3300',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.15s, transform 0.15s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '2px 2px 0 #FF3300';
                  e.currentTarget.style.transform = 'translate(3px, 3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '5px 5px 0 #FF3300';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <IoLogoGithub size={28} color="#fff" />
                <div>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700, fontSize: '13px', color: '#fff',
                    letterSpacing: '0.03em',
                  }}>
                    github.com/JazeL2304
                  </div>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '11px', color: '#888', marginTop: '2px',
                  }}>
                    222 contributions in the last year
                  </div>
                </div>
                <IoOpenOutline size={14} color="#888" style={{ marginLeft: 'auto' }} />
              </div>
            </a>
          </div>

          {/* Right: Content */}
          <div
            ref={contentRef}
            className={`scroll-hidden ${contentVisible ? 'animate-slide-right' : ''}`}
          >
            {/* Main paragraph */}
            <p
              style={{
                fontSize: '15px',
                color: '#555',
                lineHeight: 1.7,
                marginBottom: '32px',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Currently pursuing a Computer Science degree at UMN while interning as a Fullstack Developer at PT. Folks Global Group. I specialize in bridging the gap between technical backends and raw, impactful frontends — building things that are functional, accessible, and aesthetically uncompromising.
            </p>

            {/* Core Facts */}
            <div className="section-label" style={{ marginBottom: '12px' }}>CORE FACTS</div>
            <div style={{ marginBottom: '24px' }}>
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '140px 1fr',
                    gap: '16px',
                    padding: '8px 0',
                    borderBottom: '1px solid #eee',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#888',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {fact.label}
                  </span>
                  <span
                    style={{
                      fontSize: '13px',
                      color: '#000',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div className="section-label" style={{ marginBottom: '12px' }}>INTERESTS</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {interests.map((tag) => (
                <span
                  key={tag}
                  className="nb-tag"
                  style={{ padding: '6px 14px' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* GitHub Contributions Full Width */}
        <div
          style={{
            marginBottom: '60px',
            background: '#000',
            border: '3px solid #000',
            boxShadow: '8px 8px 0 #FF3300',
            padding: '24px',
            color: '#fff',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', borderBottom: '1px solid #222', paddingBottom: '16px' }}>
            <IoLogoGithub size={36} color="#fff" />
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '18px', color: '#fff', letterSpacing: '0.02em' }}>
                Jastin Lim's GitHub Activity
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', color: '#888', marginTop: '2px' }}>
                <a href="https://github.com/JazeL2304" target="_blank" rel="noopener noreferrer" style={{ color: '#FF3300', textDecoration: 'none' }}>@JazeL2304</a>
              </div>
            </div>
          </div>
          <div style={{ overflowX: 'auto', paddingBottom: '12px', scrollbarWidth: 'thin', scrollbarColor: '#333 #000' }}>
            <div style={{ minWidth: '800px', display: 'flex', justifyContent: 'center' }}>
              <GitHubCalendar
                username="JazeL2304"
                colorScheme="dark"
                blockSize={14}
                blockMargin={5}
                fontSize={14}
                theme={{
                  dark: ['#1a1a1a', '#661400', '#a32000', '#cc2900', '#FF3300']
                }}
                showWeekdayLabels={true}
                renderBlock={(block, activity) => React.cloneElement(block, {
                  'data-tooltip-id': 'react-tooltip',
                  'data-tooltip-html': `${activity.count} contributions on ${activity.date}`,
                })}
              />
              <ReactTooltip id="react-tooltip" effect="solid" style={{ zIndex: 10001 }} />
            </div>
          </div>
        </div>

        {/* Track Record Timeline */}
        <div
          ref={trackRef}
          className={`scroll-hidden ${trackVisible ? 'animate-slide-up' : ''}`}
        >
          <div className="section-label" style={{ marginBottom: '20px' }}>TRACK RECORD</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {timeline.map((item, idx) => (
              <div
                key={idx}
                style={{
                  border: '3px solid #000',
                  boxShadow: '5px 5px 0 #000',
                  padding: '24px',
                  background: idx === 0 ? '#000' : '#fff',
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '20px',
                  alignItems: 'start',
                }}
              >
                {/* Icon */}
                <div style={{
                  width: '44px', height: '44px',
                  background: idx === 0 ? '#FF3300' : '#000',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {item.type === 'work'
                    ? <IoBriefcaseOutline size={20} color="#fff" />
                    : <IoSchoolOutline size={20} color="#fff" />
                  }
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4px', marginBottom: '4px' }}>
                    <h3 style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 900, fontSize: '16px',
                      color: idx === 0 ? '#fff' : '#000',
                      margin: 0,
                    }}>
                      {item.title}
                    </h3>
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '11px', fontWeight: 700,
                      color: idx === 0 ? '#FF3300' : '#888',
                      letterSpacing: '0.05em',
                    }}>
                      {item.period}
                    </span>
                  </div>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '13px', fontWeight: 700,
                    color: idx === 0 ? '#ccc' : '#555',
                    marginBottom: '8px', letterSpacing: '0.02em',
                  }}>
                    {item.org}
                  </div>
                  <p style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '13px', color: idx === 0 ? '#aaa' : '#666',
                    lineHeight: 1.6, margin: 0,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;