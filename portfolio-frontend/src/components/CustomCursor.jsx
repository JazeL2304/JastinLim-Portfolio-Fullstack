import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Dot follows instantly
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const loop = () => {
      // Ring follows with slight delay (increased speed from 0.2 to 0.4)
      ringX += (mouseX - ringX) * 0.4;
      ringY += (mouseY - ringY) * 0.4;
      
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove);
    requestAnimationFrame(loop);

    // Add global style to hide default cursor
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    // Hover logic
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('nb-btn')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [mounted]);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Exact pointer (instant) */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: '-4px', // center the 8px dot
          left: '-4px',
          width: '8px',
          height: '8px',
          backgroundColor: '#FF3300',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          mixBlendMode: 'difference',
        }}
      />
      {/* Trailing ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: '-16px', // center the 32px ring
          left: '-16px',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '2px solid #FF3300',
          backgroundColor: isHovering ? 'rgba(255, 51, 0, 0.2)' : 'transparent',
          transform: `scale(${isHovering ? 1.5 : 1})`,
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.2s, height 0.2s, background-color 0.2s, transform 0.2s',
          mixBlendMode: 'difference',
        }}
      />
    </>,
    document.body
  );
}

export default CustomCursor;
