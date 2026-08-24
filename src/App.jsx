import React from 'react';
import Preloader from './components/ui/Preloader';
import CustomCursor from './components/ui/CustomCursor';
import BackgroundBlobs from './components/layout/BackgroundBlobs';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Journey from './components/sections/Journey';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import FloatingHeart from './components/ui/FloatingHeart';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useActiveNav } from './hooks/useActiveNav';
import './index.css';

function App() {
  useScrollReveal();
  const activeSection = useActiveNav();

  return (
    <div className="overflow-x-hidden font-sans min-h-screen">
      <CustomCursor />
      <Preloader />
      <BackgroundBlobs />
      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <FloatingHeart />
    </div>
  );
}

export default App;
