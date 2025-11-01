import { useState, useEffect } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { 
  IoHome, 
  IoPersonOutline, 
  IoBriefcaseOutline, 
  IoFlashOutline, 
  IoMailOutline,
  IoMenuOutline,
  IoCloseOutline,
  IoArrowUpOutline
} from 'react-icons/io5';
import { BiCodeAlt } from "react-icons/bi";

function NavbarFooter() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { isDark, bgClass, cardBg, textColor, textMuted, neumorph, neumorphInset } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: IoHome },
    { id: 'about', label: 'About', icon: IoPersonOutline },
    { id: 'projects', label: 'Projects', icon: IoBriefcaseOutline },
    { id: 'skills', label: 'Skills', icon: IoFlashOutline },
    { id: 'contact', label: 'Contact', icon: IoMailOutline }
  ];

  const navBg = scrolled 
    ? (isDark ? 'bg-gray-800/95' : 'bg-gray-200/95')
    : 'bg-transparent';

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 backdrop-blur-md ${navBg} ${scrolled ? neumorph : ''}`}
      >
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className={`text-2xl font-bold ${textColor} hover:scale-105 transition-transform duration-300 flex items-center gap-2`}
            >
   <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold">
  <BiCodeAlt size={28} />
</div>
             <span className="hidden md:block font-inter font-bold tracking-tight">
              JazeL<span className="text-orange-500">Portfolio</span>
            </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`${cardBg} ${
                      activeSection === item.id ? neumorphInset : neumorph
                    } px-5 py-2.5 rounded-full ${textColor} font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
                      activeSection === item.id ? 'text-orange-500' : ''
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden w-11 h-11 ${cardBg} ${neumorph} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${textColor}`}
            >
              {isMenuOpen ? <IoCloseOutline className="w-6 h-6" /> : <IoMenuOutline className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ${
              isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className={`${cardBg} ${neumorph} rounded-2xl p-4 space-y-2`}>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full ${cardBg} ${
                      activeSection === item.id ? neumorphInset : neumorph
                    } px-5 py-3 rounded-xl ${textColor} font-medium transition-all duration-300 hover:scale-105 flex items-center gap-3 ${
                      activeSection === item.id ? 'text-orange-500' : ''
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className={`h-1 ${isDark ? 'bg-gray-800/30' : 'bg-gray-300/30'} ${scrolled ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-300"
            style={{
              width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
            }}
          />
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 w-12 h-12 ${cardBg} ${neumorph} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } z-50`}
      >
        <IoArrowUpOutline className={`w-6 h-6 ${textColor}`} />
      </button>
    </>
  );
}

export default NavbarFooter;