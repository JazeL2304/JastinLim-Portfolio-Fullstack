import React, { useState } from 'react';
import About from './About';
import Contact from './Contact';
import myPhoto from '../assets/photo/FOTO_JASTIN_1.jpg'; // Pastikan path ini benar

function NeumorphismContainer() {
  const [isDark, setIsDark] = useState(true);

  const bgClass = isDark
    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'
    : 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300';

  const cardBg = isDark ? 'bg-gray-800' : 'bg-gray-200';
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-600';

  const neumorph = isDark
    ? 'shadow-[8px_8px_16px_#0a0a0a,-8px_-8px_16px_#2a2a2a]'
    : 'shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]';

  const neumorphInset = isDark
    ? 'shadow-[inset_8px_8px_16px_#0a0a0a,inset_-8px_-8px_16px_#2a2a2a]'
    : 'shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]';

  const styleProps = {
    isDark, cardBg, textColor, textMuted, neumorph, neumorphInset, myPhoto
  };

  return (
    <div className={`min-h-screen ${bgClass} py-20 transition-all duration-500 relative overflow-hidden`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-8 right-8 z-50 w-14 h-14 rounded-full ${cardBg} ${neumorph} flex items-center justify-center transition-all duration-300 hover:scale-110 text-2xl`}
      >
        {isDark ? '🌙' : '☀️'}
      </button>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <About {...styleProps} />
        <Contact {...styleProps} />
      </div>
    </div>
  );
}

export default NeumorphismContainer;