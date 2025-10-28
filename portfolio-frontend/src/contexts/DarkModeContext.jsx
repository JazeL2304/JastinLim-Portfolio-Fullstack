import { createContext, useContext, useState, useEffect } from 'react';

// Create Context
const DarkModeContext = createContext();

// Custom Hook untuk menggunakan Dark Mode
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within DarkModeProvider');
  }
  return context;
};

// Provider Component
export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  // Load dari localStorage saat pertama kali
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setIsDark(savedMode === 'true');
    }
  }, []);

  // Save ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem('darkMode', isDark.toString());
    
    // Apply ke document class
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(prev => !prev);
  };

  // Style Classes (bisa digunakan di semua komponen)
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

  const value = {
    isDark,
    toggleDarkMode,
    bgClass,
    cardBg,
    textColor,
    textMuted,
    neumorph,
    neumorphInset
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};