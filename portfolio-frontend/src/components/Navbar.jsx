import { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#000000]/80 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 
            onClick={() => scrollToSection('home')}
            className="font-sans text-2xl font-bold text-white cursor-pointer hover:text-[#DC5F00] transition"
          >
            JazeL_Portfolio.com
          </h1>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="font-sans text-white hover:text-[#DC5F00] transition font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="font-sans text-white hover:text-[#DC5F00] transition font-medium">About</button>
            <button onClick={() => scrollToSection('projects')} className="font-sans text-white hover:text-[#DC5F00] transition font-medium">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="font-sans text-white hover:text-[#DC5F00] transition font-medium">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="font-sans text-white hover:text-[#DC5F00] transition font-medium">Contact</button>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 bg-[#000000]/90 backdrop-blur-lg rounded-lg p-4">
            <button onClick={() => scrollToSection('home')} className="font-sans block w-full text-left py-2 px-4 text-white hover:bg-[#DC5F00] rounded transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="font-sans block w-full text-left py-2 px-4 text-white hover:bg-[#DC5F00] rounded transition">About</button>
            <button onClick={() => scrollToSection('projects')} className="font-sans block w-full text-left py-2 px-4 text-white hover:bg-[#DC5F00] rounded transition">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="font-sans block w-full text-left py-2 px-4 text-white hover:bg-[#DC5F00] rounded transition">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="font-sans block w-full text-left py-2 px-4 text-white hover:bg-[#DC5F00] rounded transition">Contact</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
