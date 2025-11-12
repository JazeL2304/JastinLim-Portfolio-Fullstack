import { useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { 
  IoHeartOutline,
  IoMailOutline,
  IoLocationOutline,
  IoCallOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoCafeOutline,
  IoCodeSlashOutline,
  IoBugOutline,
  IoHappyOutline,
  IoCloseOutline,
  IoCheckmarkCircleOutline
} from 'react-icons/io5';
import { BiCodeAlt } from "react-icons/bi";

function Footer() {
  const { isDark, cardBg, textColor, textMuted, neumorph, neumorphInset } = useDarkMode();
  
  const [showEasterEggModal, setShowEasterEggModal] = useState(false);

  const handleEasterEggClick = () => {
    setShowEasterEggModal(true);
  };

  // Modal Component for Easter Egg
  const EasterEggModal = () => {
    if (!showEasterEggModal) return null;

    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowEasterEggModal(false)}
        />
        
        <div className={`relative ${cardBg} ${neumorph} rounded-3xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 animate-bounce-in`}>
          <button
            onClick={() => setShowEasterEggModal(false)}
            className={`absolute top-4 right-4 w-10 h-10 ${cardBg} ${neumorph} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300`}
          >
            <IoCloseOutline className={`w-6 h-6 ${textColor}`} />
          </button>

          <div className="flex justify-center mb-6">
            <div className={`w-20 h-20 ${cardBg} ${neumorphInset} rounded-full flex items-center justify-center`}>
              <IoCheckmarkCircleOutline className="w-12 h-12 text-orange-500 animate-scale-in" />
            </div>
          </div>

          <h3 className={`text-2xl font-bold ${textColor} text-center mb-4`}>
            🎉 You Found the Easter Egg! 🥚
          </h3>
          <p className={`${textMuted} text-center mb-6 leading-relaxed`}>
            Thanks for exploring my portfolio! Your curiosity is appreciated. Keep being awesome! 🚀
          </p>

          <button
            onClick={() => setShowEasterEggModal(false)}
            className={`w-full ${cardBg} ${neumorph} rounded-xl py-4 ${textColor} font-bold text-lg hover:scale-105 transition-all duration-300`}
          >
            Awesome! 🎊
          </button>
        </div>
      </div>
    );
  };

  return (
    <footer className="py-16 relative overflow-hidden transition-all duration-500">
      <EasterEggModal />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                <BiCodeAlt size={28} />
              </div>  
              <h3 className={`text-xl font-bold ${textColor}`}>
                Jastin Lim
              </h3>
            </div>
            <p className={`${textMuted} mb-6 text-sm leading-relaxed`}>
              Full-Stack Developer passionate about creating beautiful and functional digital experiences.
            </p>
            <div className="flex gap-3">
              {[
                { icon: IoLogoGithub, link: 'https://github.com/JazeL2304', color: 'from-gray-600 to-gray-800' },
                { icon: IoLogoLinkedin, link: 'https://www.linkedin.com/in/jastin-lim-30a20228a/', color: 'from-blue-600 to-blue-800' },
                { icon: IoLogoInstagram, link: 'https://www.instagram.com/jast.lim/', color: 'from-pink-500 to-purple-600' }
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <button
                    key={i}
                    onClick={() => window.open(social.link, '_blank')}
                    className={`w-12 h-12 ${cardBg} ${neumorph} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group relative overflow-hidden`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`} />
                    <div className={`relative z-10 ${textMuted} group-hover:text-white transition-colors duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-bold ${textColor} mb-6`}>Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`${textMuted} hover:text-orange-500 transition-colors duration-300 text-sm font-medium`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`text-lg font-bold ${textColor} mb-6`}>Services</h4>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Mobile Apps',
                'UI/UX Design',
                'Game Development'
              ].map((service, i) => (
                <li key={i}>
                  <span className={`${textMuted} text-sm block`}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-bold ${textColor} mb-6`}>Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className={`w-10 h-10 ${cardBg} ${neumorph} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <IoMailOutline className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <p className={`text-xs ${textMuted} mb-1`}>Email</p>
                  <a href="mailto:jastinlim2304@gmail.com" className={`text-sm ${textColor} hover:text-orange-500 transition-colors duration-300 break-all`}>
                    jastinlim2304@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className={`w-10 h-10 ${cardBg} ${neumorph} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <IoCallOutline className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <p className={`text-xs ${textMuted} mb-1`}>Phone</p>
                  <a href="tel:+6281239133300" className={`text-sm ${textColor} hover:text-orange-500 transition-colors duration-300`}>
                    +62 812-3913-3300
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className={`w-10 h-10 ${cardBg} ${neumorph} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <IoLocationOutline className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <p className={`text-xs ${textMuted} mb-1`}>Location</p>
                  <span className={`text-sm ${textColor}`}>
                    Tangerang, Indonesia
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px mb-12 ${isDark ? 'bg-gray-700/20' : 'bg-gray-300/20'}`} />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Copyright */}
          <div className={`${textMuted} text-sm text-center md:text-left`}>
            <p className="flex items-center justify-center md:justify-start gap-2">
              © 2025 Jastin Lim. Made with 
              <IoHeartOutline className="w-4 h-4 text-red-500 animate-pulse" /> 
              and lots of 
              <IoCafeOutline className="w-4 h-4" />
            </p>
          </div>
        </div>

        {/* Fun Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: IoCafeOutline, value: '100+', label: 'Cups of Coffee' },
            { icon: IoCodeSlashOutline, value: '20K+', label: 'Lines of Code' },
            { icon: IoBugOutline, value: '200+', label: 'Bugs Fixed' },
            { icon: IoHappyOutline, value: '5+', label: 'Happy Clients' }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`${cardBg} ${neumorph} rounded-xl p-4 text-center hover:scale-105 transition-all duration-300`}
              >
                <Icon className={`w-8 h-8 ${textColor} mx-auto mb-2`} />
                <div className={`text-xl font-bold ${textColor} mb-1`}>{stat.value}</div>
                <div className={`text-xs ${textMuted}`}>{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Easter Egg */}
        <div className="text-center">
          <button
            onClick={handleEasterEggClick}
            className={`text-xs ${textMuted} hover:text-orange-500 transition-colors duration-300 cursor-pointer`}
          >
            Click here for a surprise 🥚
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% { transform: scale(0.9); opacity: 0; }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes scale-in {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .animate-bounce-in {
          animation: bounce-in 0.4s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
      `}</style>
    </footer>
  );
}

export default Footer;