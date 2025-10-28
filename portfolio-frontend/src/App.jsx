import { useState, useEffect } from 'react';
import LoadingAnimation from './components/LoadingAnimation';
import Navbar from './components/Navbar'; // Hanya navbar
import Footer from './components/Footer'; // Footer terpisah
import Hero from './components/Hero';
import AboutContact from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading selesai setelah 3 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Tampilkan loading dulu
  if (isLoading) {
    return <LoadingAnimation />;
  }

  // Setelah loading selesai, tampilkan website
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar - Fixed di atas */}
      <Navbar />
      
      {/* Main Content - Flex grow untuk push footer ke bawah */}
      <main className="flex-1">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <AboutContact />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>
      </main>

      {/* Footer - Akan berada di paling bawah */}
      <Footer />
    </div>
  );
}

export default App;