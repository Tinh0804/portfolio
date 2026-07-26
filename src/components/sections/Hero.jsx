import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, Stars, Sparkles } from '@react-three/drei';
import { motion, useScroll } from 'motion/react';
import MacbookModel from '../ui/MacbookModel';
import { useTheme } from '../../context/ThemeContext';

const Hero = () => {
  const containerRef = useRef(null);
  const { theme } = useTheme();
  
  // Capture scroll progress relative to the hero section to animate the macbook hinge
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  return (
    <section ref={containerRef} id="home" className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col justify-center items-center">
      
      {/* Three.js 3D Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
          {theme === 'dark' ? (
            <Stars radius={50} depth={50} count={1500} factor={4} saturation={0} fade speed={1.5} />
          ) : (
            <Sparkles count={800} scale={100} size={1} speed={0.4} opacity={0.2} color="#000000" />
          )}
          {/* Floating glowing particles (cyan and indigo) */}
          <Sparkles count={80} scale={12} size={3} speed={0.4} opacity={theme === 'dark' ? 0.3 : 0.8} color="#38bdf8" />
          <Sparkles count={80} scale={12} size={3} speed={0.4} opacity={theme === 'dark' ? 0.3 : 0.8} color="#818cf8" />
        </Canvas>
      </div>

      {/* Container 50/50 Grid */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mt-20 lg:mt-0">
        
        {/* LEFT SIDE: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left w-full lg:w-[45%] shrink-0"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 mb-8 backdrop-blur-md shadow-sm dark:shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 dark:bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-600 dark:bg-sky-500"></span>
            </span>
            <span className="text-slate-600 dark:text-zinc-300 font-mono text-[10px] md:text-xs uppercase tracking-wider font-semibold">Available for new opportunities</span>
          </div>

          {/* Elegant Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-bold font-display leading-[1.1] text-slate-900 dark:text-white tracking-tight mb-6 drop-shadow-sm dark:drop-shadow-lg">
            Building Scalable <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-sky-400 dark:to-indigo-400">Web Experiences.</span>
          </h1>

          <p className="text-slate-600 dark:text-zinc-400 text-lg max-w-xl leading-relaxed mb-10 font-light drop-shadow-sm dark:drop-shadow-md">
            Hi, I'm <span className="text-slate-900 dark:text-zinc-200 font-medium">Lê Hoàng Quách Tỉnh</span>. A Full-Stack Engineer merging high-performance backend microservices with dynamic web interfaces and robust cloud deployments.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="px-8 py-4 bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20 font-semibold rounded-lg hover:bg-sky-100 dark:hover:bg-sky-500/20 transition-colors backdrop-blur-sm shadow-sm dark:shadow-[0_0_20px_rgba(56,189,248,0.15)]">
              Explore Works
            </a>
            <a href="#contact" className="px-8 py-4 bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 font-medium rounded-lg transition-colors shadow-sm dark:shadow-lg">
              Contact Me <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
            </a>
          </div>

          {/* Core Tech Stack Information */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-12 pt-8 border-t border-black/10 dark:border-white/5 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="text-slate-500 dark:text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Core Stack</span>
            <div className="flex gap-6 text-2xl">
              <i className="fa-brands fa-java text-[#f89820] hover:scale-110 transition-transform cursor-pointer" title="Java"></i>
              <i className="fa-solid fa-leaf text-[#6db33f] hover:scale-110 transition-transform cursor-pointer" title="Spring Boot"></i>
              <i className="fa-brands fa-docker text-[#0db7ed] hover:scale-110 transition-transform cursor-pointer" title="Docker"></i>
              <i className="fa-brands fa-aws text-[#ff9900] hover:scale-110 transition-transform cursor-pointer" title="AWS"></i>
              <i className="fa-solid fa-database text-slate-400 dark:text-zinc-300 hover:scale-110 transition-transform cursor-pointer" title="Databases"></i>
            </div>
          </motion.div>

        </motion.div>

        {/* RIGHT SIDE: 3D Macbook */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full lg:w-[55%] h-[400px] sm:h-[500px] lg:h-[700px] relative flex justify-center items-center"
        >
          {/* 3D Canvas Area */}
          <div className="absolute inset-0 w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 1.5, 4.5], fov: 45 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
              <Environment preset="city" />
              <ambientLight intensity={theme === 'dark' ? 0.5 : 1} />
              <directionalLight position={[10, 10, 10]} intensity={theme === 'dark' ? 1 : 1.5} />
              
              <Suspense fallback={null}>
                {/* Floating animation */}
                <Float rotationIntensity={0.2} floatIntensity={1} speed={1.5}>
                  <MacbookModel 
                    scrollYProgress={scrollYProgress} 
                    position={[0, -0.8, 0]} 
                    rotation={[0.1, -0.2, 0]} 
                    scale={0.98}
                  />
                </Float>
              </Suspense>
              
            </Canvas>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
