import React from 'react';
import Preloader from './components/ui/Preloader';
import CustomCursor from './components/ui/CustomCursor';
import BackgroundBlobs from './components/layout/BackgroundBlobs';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { useCustomCursor } from './hooks/useCustomCursor';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useActiveNav } from './hooks/useActiveNav';
import './index.css';

function App() {
  useCustomCursor();
  useScrollReveal();
  const activeSection = useActiveNav();

  return (
    <div className="bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      <Preloader />
      <CustomCursor />
      <BackgroundBlobs />
      <Navbar activeSection={activeSection} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
