import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  IoCodeSlashOutline,
  IoServerOutline,
  IoBrushOutline,
  IoLayersOutline,
} from 'react-icons/io5';

const SKILL_COLUMNS = [
  {
    id: 'frontend',
    label: 'FRONTEND',
    Icon: IoCodeSlashOutline,
    skills: [
      { name: 'React',      pct: 80 },
      { name: 'Tailwind',   pct: 80 },
      { name: 'JavaScript', pct: 75 },
    ],
  },
  {
    id: 'backend',
    label: 'BACKEND',
    Icon: IoServerOutline,
    skills: [
      { name: 'PHP',     pct: 70 },
      { name: 'Laravel', pct: 70 },
      { name: 'MySQL',   pct: 70 },
    ],
  },
  {
    id: 'design',
    label: 'DESIGN',
    Icon: IoBrushOutline,
    skills: [
      { name: 'Figma',    pct: 75 },
      { name: 'Brutal UI', pct: 85 },
    ],
  },
  {
    id: 'others',
    label: 'OTHERS',
    Icon: IoLayersOutline,
    skills: [
      { name: 'Git',    pct: 80 },
      { name: 'Kotlin', pct: 50 },
      { name: 'Unity',  pct: 50 },
      { name: 'C#',     pct: 50 },
    ],
  },
];

function SkillRow({ name, pct }) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '4px',
        }}
      >
        <span
          style={{
            fontSize: '12px',
            color: '#888',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontSize: '11px',
            color: '#555',
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {pct}%
        </span>
      </div>
      <div
        style={{
          background: '#1a1a1a',
          height: '4px',
          width: '100%',
        }}
      >
        <div
          className="skill-bar-fill"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function Skills() {
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  return (
    <div
      style={{
        background: '#0A0A0A',
        padding: '100px 40px',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div
          ref={headerRef}
          className={`scroll-hidden ${headerVisible ? 'animate-slide-down' : ''}`}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          <div>
            <div className="section-label" style={{ marginBottom: '8px' }}>/ TECH STACK</div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: '#fff',
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              CAPABILITIES.
            </h2>
          </div>
          <p
            style={{
              fontSize: '13px',
              color: '#555',
              fontFamily: "'Space Grotesk', sans-serif",
              maxWidth: '260px',
              lineHeight: 1.6,
              marginTop: '8px',
            }}
          >
            Constantly refining my toolset across frontend, backend, design, and beyond.
          </p>
        </div>

        {/* 4-column skill grid */}
        <div
          ref={gridRef}
          className={`scroll-hidden ${gridVisible ? 'animate-zoom-in' : ''}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
          }}
        >
          {SKILL_COLUMNS.map((col) => {
            const Icon = col.Icon;
            return (
              <div
                key={col.id}
                style={{
                  border: '2px solid #222',
                  padding: '24px',
                }}
              >
                <Icon
                  style={{ color: '#FF3300', width: '24px', height: '24px', marginBottom: '8px' }}
                />
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '20px',
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: '0.05em',
                  }}
                >
                  {col.label}
                </div>
                {col.skills.map((skill) => (
                  <SkillRow key={skill.name} name={skill.name} pct={skill.pct} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;