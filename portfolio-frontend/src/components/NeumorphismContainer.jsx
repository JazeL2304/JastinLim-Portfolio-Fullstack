import React from 'react';
import { useDarkMode } from './contexts/DarkModeContext';
import About from './components/About';
import Contact from './components/Contact';
import myPhoto from './assets/photo/FOTO_JASTIN_1.jpg';

function NeumorphismContainer() {
  // Gunakan Context (HAPUS state lokal)
  const { isDark, bgClass, cardBg, textColor, textMuted, neumorph, neumorphInset } = useDarkMode();

  const styleProps = {
    isDark, cardBg, textColor, textMuted, neumorph, neumorphInset, myPhoto
  };

  return (
    <div className={`min-h-screen ${bgClass} py-20 transition-all duration-500 relative overflow-hidden`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      {/* DARK MODE TOGGLE DIHAPUS DARI SINI */}

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <About {...styleProps} />
        <Contact {...styleProps} />
      </div>
    </div>
  );
}

export default NeumorphismContainer;