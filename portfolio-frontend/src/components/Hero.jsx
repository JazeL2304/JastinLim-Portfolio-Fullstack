import { useState, useEffect } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import Lanyard from './Lanyard';
import { 
  IoMoonOutline, 
  IoSunnyOutline
} from 'react-icons/io5';
import reactIcon from '../assets/photo/react.png';
import laravelIcon from '../assets/photo/laravel.png';
import tailwindIcon from '../assets/photo/tailwind.png';
import myPhoto from '../assets/photo/FOTO_JASTIN_1.jpg';

function Hero() {
  const { isDark, toggleDarkMode, cardBg, textColor, textMuted, neumorph, neumorphInset } = useDarkMode();
  
  const [displayText, setDisplayText] = useState('');
  const fullText = "Learning, Building, Growing";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen transition-all duration-500 relative pt-20" style={{ position: 'relative' }}>
      {/* Canvas Background - Full Hero Section, bisa interact */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <Lanyard
          name="Jastin Lim"
          role="CS Student | Web Developer"
          location="Tangerang, Indonesia"
          status="Student"
          focus="Full-Stack Dev"
          photo={myPhoto}
          isDark={isDark}
          cardBg={cardBg}
          textColor={textColor}
          textMuted={textMuted}
          neumorph={neumorph}
          neumorphInset={neumorphInset}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${isDark ? 'bg-orange-500' : 'bg-orange-400'} opacity-20 animate-float`}
            style={{
              width: Math.random() * 8 + 4 + 'px',
              height: Math.random() * 8 + 4 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 15 + 15 + 's'
            }}
          />
        ))}
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className={`fixed top-20 right-8 w-14 h-14 rounded-full ${cardBg} ${neumorph} flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl`}
        style={{ zIndex: 100 }}
        aria-label="Toggle Dark Mode"
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {isDark ? (
          <IoMoonOutline className={`w-7 h-7 ${textColor}`} />
        ) : (
          <IoSunnyOutline className={`w-7 h-7 ${textColor}`} />
        )}
      </button>

      {/* Main Content - pointer-events hanya untuk elemen yang perlu diklik */}
      <div className="max-w-7xl mx-auto px-8 py-20 relative pointer-events-none" style={{ zIndex: 10 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-10rem)]">
          
          {/* Left Content - Aktifkan pointer events hanya untuk konten ini */}
          <div className="space-y-6 relative pointer-events-auto">
            {/* Status Badge */}
            <div className={`inline-flex items-center gap-2 ${cardBg} ${neumorph} rounded-full px-5 py-2.5`}>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className={`text-sm font-medium ${textColor}`}>Open to Internship</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className={`text-5xl md:text-6xl font-black ${textColor} mb-4 leading-tight font-inter`}>
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-orange-500 via-red-600 to-orange-700 bg-clip-text text-transparent">
                  Jastin Lim
                </span>
              </h1>
              <div className={`${cardBg} ${neumorphInset} rounded-2xl p-5 mb-4`}>
                <h2 className={`text-xl md:text-2xl font-bold ${textColor} mb-2`}>
                  Computer Science Student
                </h2>
                <p className={`text-base ${textMuted} font-mono min-h-[30px]`}>
                  {displayText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <p className={`${textMuted} text-sm mb-3 font-semibold`}>Technologies I Work With:</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'React', icon: reactIcon },
                  { name: 'Laravel', icon: laravelIcon },
                  { name: 'Tailwind', icon: tailwindIcon }
                ].map((tech, i) => (
                  <div
                    key={i}
                    className={`${cardBg} ${neumorph} rounded-xl px-4 py-3 flex items-center gap-3 hover:scale-105 transition-transform duration-300`}
                  >
                    <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                    <span className={`text-sm font-semibold ${textColor}`}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className={`${cardBg} ${neumorph} hover:shadow-2xl px-7 py-3.5 rounded-xl ${textColor} font-bold text-base transition-all duration-300 hover:scale-105`}
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`${cardBg} ${neumorph} hover:shadow-2xl px-7 py-3.5 rounded-xl ${textColor} font-bold text-base transition-all duration-300 hover:scale-105`}
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Content - Hanya glow effects, tidak blocking canvas */}
          <div className="relative h-[700px] pointer-events-none">
            {/* Background Glow Effects */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-br from-red-600/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none" style={{ zIndex: 20 }}>
        <div className={`w-7 h-11 ${cardBg} ${neumorph} rounded-full flex items-center justify-center`}>
          <div className={`w-1.5 h-1.5 ${isDark ? 'bg-orange-500' : 'bg-orange-600'} rounded-full animate-pulse`} />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Hero;