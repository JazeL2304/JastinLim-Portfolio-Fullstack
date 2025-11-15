import { useState, useEffect } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import Lanyard from './Lanyard';
import { 
  IoMoonOutline, 
  IoSunnyOutline,
  IoDownloadOutline,
  IoCheckmarkCircleOutline,
  IoAlertCircleOutline
} from 'react-icons/io5';
import reactIcon from '../assets/photo/react.png';
import tailwindIcon from '../assets/photo/tailwind.png';
import myPhoto from '../assets/photo/FOTO_JASTIN_1.jpg';
import cvFile from '../assets/cv/Jastin Lim-resume.pdf';

function Hero() {
  const { isDark, toggleDarkMode, cardBg, textColor, textMuted, neumorph, neumorphInset } = useDarkMode();
  
  const [displayText, setDisplayText] = useState('');
  const [downloadStatus, setDownloadStatus] = useState('idle');
  const [isMobile, setIsMobile] = useState(false);
  const fullText = "Learning, Building, Growing";
  
  // Check screen size untuk responsive
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
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

  const handleDownloadCV = async () => {
    try {
      setDownloadStatus('downloading');
      
      const response = await fetch(cvFile);
      
      if (!response.ok) {
        throw new Error('CV file not found');
      }
      
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
      
      setTimeout(() => {
        setDownloadStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Error downloading CV:', error);
      setDownloadStatus('error');
      
      setTimeout(() => {
        setDownloadStatus('idle');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen transition-all duration-500 relative">
      {/* Canvas Background - Responsive positioning */}
      {!isMobile && (
        <div className="absolute inset-0 top-0 pointer-events-auto" style={{ zIndex: 1 }}>
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
      )}

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
        className={`fixed top-20 right-8 w-14 h-14 rounded-full ${cardBg} ${neumorph} flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl z-[100]`}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative pointer-events-none" style={{ zIndex: 10 }}>
        <div className={`grid grid-cols-1 ${isMobile ? '' : 'lg:grid-cols-2'} gap-16 items-center min-h-[calc(100vh-6rem)]`}>
          
          {/* Left Content */}
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
              <p className={`${textMuted} text-sm mb-3 font-semibold`}>Built with modern technologies:</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'React', icon: reactIcon },
                  { name: 'Tailwind CSS', icon: tailwindIcon }
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

            {/* CTA Button */}
            <div className="flex gap-4 pt-4">
              <button 
                onClick={handleDownloadCV}
                disabled={downloadStatus === 'downloading'}
                className={`${cardBg} ${neumorph} hover:shadow-2xl px-7 py-3.5 rounded-xl ${textColor} font-bold text-base transition-all duration-300 flex items-center gap-2 ${
                  downloadStatus === 'downloading' ? 'opacity-70 cursor-wait' : 'hover:scale-105'
                } ${
                  downloadStatus === 'success' ? 'bg-green-500/10' : ''
                } ${
                  downloadStatus === 'error' ? 'bg-red-500/10' : ''
                }`}
              >
                {downloadStatus === 'downloading' && (
                  <>
                    <div className="w-5 h-5 border-2 border-t-orange-500 border-r-transparent border-b-orange-500 border-l-transparent rounded-full animate-spin" />
                    Downloading...
                  </>
                )}
                {downloadStatus === 'success' && (
                  <>
                    <IoCheckmarkCircleOutline className="w-5 h-5 text-green-500" />
                    Downloaded!
                  </>
                )}
                {downloadStatus === 'error' && (
                  <>
                    <IoAlertCircleOutline className="w-5 h-5 text-red-500" />
                    File Not Found
                  </>
                )}
                {downloadStatus === 'idle' && (
                  <>
                    <IoDownloadOutline className="w-5 h-5" />
                    Download CV
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Content - Mobile Lanyard atau Desktop Glow */}
          <div className="relative pointer-events-none">
            {isMobile ? (
              // Mobile: Lanyard di bawah - CENTERED with RESPONSIVE positioning
              <div className="relative w-full flex items-center justify-center pointer-events-auto" style={{ height: '500px' }}>
                <div className="w-full h-full">
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
                    position={[0, 0, 22]}
                    gravity={[0, -30, 0]}
                    fov={25}
                  />
                </div>
              </div>
            ) : (
              // Desktop: Glow effects
              <div className="h-[700px]">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-br from-red-600/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            )}
          </div>
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