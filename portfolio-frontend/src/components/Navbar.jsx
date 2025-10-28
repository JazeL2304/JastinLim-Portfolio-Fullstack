import { useState, useEffect } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';

function NavbarFooter() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Ambil dark mode dari Context (TANPA toggleDarkMode)
  const { isDark, textColor, neumorph, neumorphInset } = useDarkMode();

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
    { id: 'home', label: 'Home', emoji: '🏠' },
    { id: 'about', label: 'About', emoji: '👤' },
    { id: 'projects', label: 'Projects', emoji: '💼' },
    { id: 'skills', label: 'Skills', emoji: '⚡' },
    { id: 'contact', label: 'Contact', emoji: '✉️' }
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? `bg-gray-800 ${neumorph}` : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className={`text-2xl font-bold ${textColor} hover:scale-105 transition-transform duration-300 flex items-center gap-2`}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                JL
              </div>
              <span className="hidden md:block">
                Jastin<span className="text-orange-500">Lim</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`bg-gray-800 ${
                    activeSection === item.id ? neumorphInset : neumorph
                  } px-5 py-2.5 rounded-full ${textColor} font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
                    activeSection === item.id ? 'text-orange-500' : ''
                  }`}
                >
                  <span>{item.emoji}</span>
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle - HANYA INI, TIDAK ADA DARK MODE TOGGLE */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden w-11 h-11 bg-gray-800 ${neumorph} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-xl`}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ${
              isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className={`bg-gray-800 ${neumorph} rounded-2xl p-4 space-y-2`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full bg-gray-800 ${
                    activeSection === item.id ? neumorphInset : neumorph
                  } px-5 py-3 rounded-xl ${textColor} font-medium transition-all duration-300 hover:scale-105 flex items-center gap-3 ${
                    activeSection === item.id ? 'text-orange-500' : ''
                  }`}
                >
                  <span className="text-xl">{item.emoji}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className={`h-1 bg-gray-800/30 ${scrolled ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
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
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gray-800 ${neumorph} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 text-xl ${
          scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } z-50`}
      >
        ⬆️
      </button>
    </>
  );
}

export default NavbarFooter;