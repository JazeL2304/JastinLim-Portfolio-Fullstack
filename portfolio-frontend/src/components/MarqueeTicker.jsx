function MarqueeTicker() {
  const items = [
    'NEXT JS',
    'REACT.JS',
    'TAILWIND CSS',
    'LARAVEL',
    'MYSQL',
    'KOTLIN',
    'UNITY',
    'FIGMA',
    'JAVASCRIPT',
    'PHP',
    'PYTHON',
  ];

  // Double items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        background: '#000',
        borderTop: '1px solid #222',
        borderBottom: '1px solid #222',
        padding: '14px 0',
        overflow: 'hidden',
        userSelect: 'none',
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              color: '#fff',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              fontFamily: "'Space Grotesk', sans-serif",
              whiteSpace: 'nowrap',
            }}
          >
            {item}
            <span
              style={{
                color: '#FF3300',
                margin: '0 20px',
                fontSize: '16px',
                lineHeight: 1,
              }}
            >
              ●
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default MarqueeTicker;
