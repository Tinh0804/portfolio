import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, Stars, Sparkles, OrbitControls, Preload } from '@react-three/drei';
import { motion, useScroll } from 'motion/react';
import { useTranslation, Trans } from 'react-i18next';
import MacbookModel from '../ui/MacbookModel';
import { useTheme } from '../../context/ThemeContext';

const Hero = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const { theme } = useTheme();
  
  // Capture scroll progress relative to the hero section to animate the macbook hinge
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  return (
    <section ref={containerRef} id="home" className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col justify-center items-center">
      
      {/* Three.js 3D Background - Lightweight GPU context (depth & stencil off for speed) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Canvas 
          camera={{ position: [0, 0, 1] }} 
          dpr={[1, 1.2]} 
          performance={{ min: 0.5 }}
          gl={{ 
            powerPreference: 'high-performance',
            antialias: false,
            alpha: true,
            depth: false,
            stencil: false
          }}
        >
          {theme === 'dark' ? (
            <Stars radius={50} depth={50} count={1200} factor={4} saturation={0} fade speed={1.2} />
          ) : (
            <Sparkles count={150} scale={50} size={2} speed={0.3} opacity={0.3} color="#38bdf8" />
          )}
          {/* Subtle floating ambient depth sparkles */}
          <Sparkles count={40} scale={14} size={3} speed={0.3} opacity={theme === 'dark' ? 0.3 : 0.4} color="#38bdf8" />
          <Sparkles count={40} scale={14} size={3} speed={0.3} opacity={theme === 'dark' ? 0.25 : 0.35} color="#818cf8" />
        </Canvas>
      </div>

      {/* Container 50/50 Grid */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mt-20 lg:mt-0">
        
        {/* LEFT SIDE: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left w-full lg:w-[58%] xl:w-[56%] shrink-0 relative z-30 pointer-events-auto"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 mb-8 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className="text-slate-600 dark:text-zinc-300 font-mono text-[11px] uppercase tracking-wider font-semibold">{t('hero.status')}</span>
          </div>

          {/* Elegant Title */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[2.65rem] xl:text-[3.15rem] 2xl:text-[3.65rem] font-bold font-display leading-[1.22] text-slate-900 dark:text-white tracking-tight mb-6 drop-shadow-sm dark:drop-shadow-lg max-w-2xl text-balance">
            <span>{t('hero.titlePart1')}</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400">
              {t('hero.titlePart2')}
            </span>
            <span className="sr-only"> - Lê Hoàng Quách Tỉnh | Fullstack Software Engineer</span>
          </h1>

          <p className="text-slate-600 dark:text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed mb-10 font-light drop-shadow-sm dark:drop-shadow-md">
            <Trans i18nKey="hero.description">
              Hi, I'm <span className="text-slate-900 dark:text-zinc-200 font-medium">Lê Hoàng Quách Tỉnh</span>. A Full-Stack Engineer merging high-performance backend microservices with dynamic web interfaces and robust cloud deployments.
            </Trans>
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a href="#projects" className="w-full sm:w-auto text-center px-7 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-full transition-all hover:scale-105 shadow-md shadow-sky-500/25 text-sm md:text-base">
              {t('hero.explore')}
            </a>
            <a href="#contact" className="w-full sm:w-auto text-center px-7 py-3.5 bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/10 font-medium rounded-full transition-all hover:scale-105 shadow-sm text-sm md:text-base">
              {t('hero.contact')} <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
            </a>
          </div>

          {/* Core Tech Stack Information */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mt-12 pt-8 border-t border-slate-200/80 dark:border-white/5 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="text-slate-400 dark:text-zinc-500 font-mono text-[10px] uppercase tracking-widest font-semibold">{t('hero.coreStack')}</span>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200/70 dark:border-white/10 flex items-center justify-center hover:scale-110 hover:border-sky-400/40 transition-all shadow-sm" title="Java">
                <i className="fa-brands fa-java text-[#f89820] text-base sm:text-lg"></i>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200/70 dark:border-white/10 flex items-center justify-center hover:scale-110 hover:border-sky-400/40 transition-all shadow-sm" title="Spring Boot">
                <i className="fa-solid fa-leaf text-[#6db33f] text-sm sm:text-base"></i>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200/70 dark:border-white/10 flex items-center justify-center hover:scale-110 hover:border-sky-400/40 transition-all shadow-sm" title="Docker">
                <i className="fa-brands fa-docker text-[#0db7ed] text-base sm:text-lg"></i>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200/70 dark:border-white/10 flex items-center justify-center hover:scale-110 hover:border-sky-400/40 transition-all shadow-sm" title="AWS">
                <i className="fa-brands fa-aws text-[#ff9900] text-sm sm:text-base"></i>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200/70 dark:border-white/10 flex items-center justify-center hover:scale-110 hover:border-sky-400/40 transition-all shadow-sm" title="Databases & Redis">
                <i className="fa-solid fa-database text-slate-500 dark:text-zinc-300 text-xs sm:text-sm"></i>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* RIGHT SIDE: 3D Macbook (Unbounded Canvas with zero clipping) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full lg:w-[42%] xl:w-[44%] h-[340px] xs:h-[400px] sm:h-[480px] lg:h-[650px] relative flex justify-center items-center pointer-events-none"
        >
          {/* Expansive canvas container with zero cage clipping and responsive bounds */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[96vw] max-w-[420px] sm:max-w-[620px] lg:max-w-[1050px] xl:max-w-[1150px] h-[360px] xs:h-[420px] sm:h-[520px] lg:h-[800px] pointer-events-auto cursor-grab active:cursor-grabbing overflow-visible">
            <Canvas 
              camera={{ position: [0, 1.2, 5.0], fov: 42 }} 
              dpr={[1, 1.5]} 
              performance={{ min: 0.5 }}
              gl={{ 
                powerPreference: 'high-performance', 
                antialias: true, 
                alpha: true,
                stencil: false
              }}
            >
              <Environment preset="city" />
              <ambientLight intensity={theme === 'dark' ? 0.5 : 1} />
              <directionalLight position={[10, 10, 10]} intensity={theme === 'dark' ? 1 : 1.5} />
              
              <Suspense fallback={null}>
                {/* Free 3D Drag Rotation with physics damping */}
                <OrbitControls 
                  enableZoom={false}
                  enablePan={false}
                  minPolarAngle={Math.PI / 3.4}
                  maxPolarAngle={Math.PI / 1.75}
                  rotateSpeed={0.8}
                  enableDamping
                  dampingFactor={0.06}
                  target={[0, -0.3, 0]}
                />

                {/* Floating animation */}
                <Float rotationIntensity={0.2} floatIntensity={0.9} speed={1.4}>
                  <MacbookModel 
                    scrollYProgress={scrollYProgress} 
                    rotation={[0.1, -0.2, 0]} 
                  />
                </Float>

                {/* Preload and warm up all shaders and geometry into GPU cache */}
                <Preload all />
              </Suspense>
              
            </Canvas>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
