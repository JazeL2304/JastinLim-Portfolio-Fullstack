import { useState, useEffect } from 'react';

function LoadingAnimation() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: '32px' }}>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 900,
            fontSize: '72px',
            color: '#fff',
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          JL<span style={{ color: '#FF3300' }}>.</span>
        </span>
      </div>

      {/* Progress bar container */}
      <div
        style={{
          width: '240px',
          height: '4px',
          background: '#222',
          marginBottom: '16px',
        }}
      >
        <div
          style={{
            height: '4px',
            background: '#FF3300',
            width: `${progress}%`,
            transition: 'width 0.04s linear',
          }}
        />
      </div>

      {/* Percentage */}
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '12px',
          fontWeight: 700,
          color: '#555',
          letterSpacing: '0.1em',
        }}
      >
        {progress}%
      </div>
    </div>
  );
}

export default LoadingAnimation;