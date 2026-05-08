import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MarqueeTicker from './components/MarqueeTicker';
import LoadingAnimation from './components/LoadingAnimation';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <CustomCursor />
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <MarqueeTicker />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="certificate">
        <Certificate />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;