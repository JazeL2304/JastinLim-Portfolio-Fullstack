import { useState, useRef, useEffect } from 'react';
import Lanyard3D from './Lanyard3D';
import myPhoto from '../assets/photo/FOTO_JASTIN_1.jpg';

function Hero() {
  const [isDragging, setIsDragging] = useState(false);
  const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const [totalRotationY, setTotalRotationY] = useState(0);
  const cardRef = useRef(null);
  const startPosRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ x: 0, y: 0 });

  const use3DLanyard = false;

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startPosRef.current = {
      x: e.clientX,
      y: e.clientY
    };
    rotationRef.current = {
      x: cardRotation.x,
      y: totalRotationY
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startPosRef.current.x;
    const deltaY = e.clientY - startPosRef.current.y;
    
    setCardPosition({ x: deltaX, y: deltaY });
    
    const rotationX = rotationRef.current.x + (deltaY / 3);
    const rotationY = rotationRef.current.y + (deltaX / 2);
    
    setCardRotation({ x: rotationX, y: rotationY % 360 });
    setTotalRotationY(rotationY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => {
      setCardPosition({ x: 0, y: 0 });
      setCardRotation({ x: 0, y: 0 });
      setTotalRotationY(0);
    }, 100);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-gradient-to-br from-[#000000] via-[#CF0A0A] via-[#DC5F00] to-[#EEEEEE] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-white space-y-6">
            <h1 className="font-display text-6xl md:text-7xl font-extrabold">
              Hi, I'm <span className="text-[#EEEEEE]">Jastin Lim</span>
            </h1>
            <p className="font-sans text-2xl">
              Full-Stack Developer | React & Laravel Enthusiast
            </p>
            
            <div className="flex gap-6 pt-6">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-sans bg-[#EEEEEE] text-[#000000] px-10 py-4 rounded-full text-lg font-semibold hover:bg-white transition shadow-lg"
              >
                View Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-sans border-2 border-[#EEEEEE] text-[#EEEEEE] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#EEEEEE] hover:text-[#000000] transition"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="relative select-none flex justify-center" style={{ height: '600px' }}>
            
            {/* Hook */}
            <div 
              className="absolute w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full shadow-xl pointer-events-none flex items-center justify-center"
              style={{
                top: '30px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 50
              }}
            >
              <div className="w-6 h-6 bg-gray-900 rounded-full"></div>
            </div>

            <svg 
              className="absolute w-full h-full pointer-events-none"
              style={{ zIndex: 45, overflow: 'visible' }}
              viewBox="0 0 500 600"
            >
              <defs>
                <filter id="ropeShadow">
                  <feDropShadow dx="0" dy="4" stdDeviation="5" floodOpacity="0.7"/>
                </filter>
              </defs>
              
              <line
                x1="250"
                y1="55"
                x2={250 + cardPosition.x}
                y2={180 + cardPosition.y}
                stroke="#000000"
                strokeWidth="14"
                strokeLinecap="round"
                filter="url(#ropeShadow)"
                opacity="0.9"
                style={{ transition: 'none' }}
              />
            </svg>

            <div className="absolute top-40 left-1/2 -translate-x-1/2">
              <div 
                ref={cardRef}
                onMouseDown={handleMouseDown}
                className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white cursor-grab active:cursor-grabbing"
                style={{
                  transform: `
                    translate(${cardPosition.x}px, ${cardPosition.y}px) 
                    perspective(1000px)
                    rotateX(${cardRotation.x}deg) 
                    rotateY(${cardRotation.y}deg)
                  `,
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center',
                  transition: isDragging ? 'none' : 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  width: '280px',
                  height: '400px',
                  zIndex: 40
                }}
              >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#000000] rounded-full border-4 border-[#333333] z-10 shadow-inner"></div>
                  
                  <img 
                    src={myPhoto}
                    alt="Jastin Lim"
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-[#000000] p-4 text-white text-center">
                    <p className="font-sans text-lg font-bold tracking-wide">Jastin Lim</p>
                    <p className="font-sans text-xs opacity-80">Full-Stack Engineer</p>
                  </div>
                </div>

                {/* Back Side */}
                <div 
                  className="absolute inset-0 backface-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white p-6"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="text-center">
                    <p className="font-sans text-2xl font-bold mb-4">Skills</p>
                    <div className="space-y-2 text-sm font-sans">
                      <p>⚛️ React & Vue.js</p>
                      <p>🎨 Tailwind CSS</p>
                      <p>🔥 Laravel</p>
                      <p>📱 Android Development</p>
                      <p>🎮 Unity Game Dev</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



export default Hero;
