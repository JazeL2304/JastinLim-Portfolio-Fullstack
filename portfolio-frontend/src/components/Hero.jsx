import { useState, useEffect } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { 
  IoMoonOutline, 
  IoSunnyOutline,
  IoLocationOutline,
  IoSchoolOutline,
  IoCodeSlashOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoMailOutline
} from 'react-icons/io5';
import reactIcon from '../assets/photo/react.png';
import laravelIcon from '../assets/photo/laravel.png';
import tailwindIcon from '../assets/photo/tailwind.png';
import myPhoto from '../assets/photo/FOTO_JASTIN_1.jpg';

function Hero() {
  const { isDark, toggleDarkMode, bgClass, cardBg, textColor, textMuted, neumorph, neumorphInset } = useDarkMode();
  
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
    <div className={`min-h-screen ${bgClass} transition-all duration-500 relative overflow-hidden`}>
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        className={`fixed top-20 right-8 z-[999] w-14 h-14 rounded-full ${cardBg} ${neumorph} flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl`}
        aria-label="Toggle Dark Mode"
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {isDark ? (
          <IoMoonOutline className={`w-7 h-7 ${textColor}`} />
        ) : (
          <IoSunnyOutline className={`w-7 h-7 ${textColor}`} />
        )}
      </button>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left Content */}
          <div className="space-y-6">
            {/* Status Badge */}
            <div className={`inline-flex items-center gap-2 ${cardBg} ${neumorph} rounded-full px-5 py-2.5`}>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className={`text-sm font-medium ${textColor}`}>Open to Internship</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className={`text-5xl md:text-6xl font-extrabold ${textColor} mb-4 leading-tight`}>
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-orange-500 via-red-600 to-orange-700 bg-clip-text text-transparent font-playfair">
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

          {/* Right Content - Profile Card */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-br from-red-600/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className={`relative ${cardBg} ${neumorph} rounded-3xl p-6 transform hover:scale-105 transition-all duration-500`}>
              <div className={`relative ${cardBg} ${neumorphInset} rounded-2xl p-3 mb-5 overflow-hidden`}>
                <div className="aspect-[3/4] rounded-xl relative overflow-hidden">
                  <img 
                    src={myPhoto}
                    alt="Jastin Lim"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-gray-900">Available</span>
                  </div>
                </div>
              </div>

              <div className="text-center mb-5">
                <h3 className={`text-xl font-bold ${textColor} mb-1`}>Jastin Lim</h3>
                <p className={`${textMuted} text-sm mb-4`}>CS Student | Web Developer</p>
                
                <div className="flex justify-center gap-3">
                  {[
                    { icon: IoLogoLinkedin, label: 'LinkedIn' },
                    { icon: IoLogoGithub, label: 'GitHub' },
                    { icon: IoMailOutline, label: 'Email' }
                  ].map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <button
                        key={i}
                        className={`w-11 h-11 ${cardBg} ${neumorph} rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300`}
                        title={social.label}
                      >
                        <Icon className={`w-5 h-5 ${textColor}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className={`${cardBg} ${neumorphInset} rounded-xl p-4 space-y-2.5`}>
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${textMuted} flex items-center gap-2`}>
                    <IoLocationOutline className="w-4 h-4" />
                    Location
                  </span>
                  <span className={`text-xs font-semibold ${textColor}`}>Tangerang, Indonesia</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${textMuted} flex items-center gap-2`}>
                    <IoSchoolOutline className="w-4 h-4" />
                    Status
                  </span>
                  <span className={`text-xs font-semibold ${textColor}`}>Student</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${textMuted} flex items-center gap-2`}>
                    <IoCodeSlashOutline className="w-4 h-4" />
                    Focus
                  </span>
                  <span className={`text-xs font-semibold ${textColor}`}>Full-Stack Dev</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
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