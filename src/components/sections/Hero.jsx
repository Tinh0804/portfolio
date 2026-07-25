import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import { motion } from 'motion/react';

const MajesticWavesScene = () => {
  return (
    <>
      <ambientLight intensity={1} />
      
      {/* Floating Sparkles tinted with a soft icy blue */}
      <Sparkles count={300} scale={15} size={1} speed={0.2} opacity={0.2} color="#e0f2fe" />
      
      {/* Graceful flowing motion */}
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.5} position={[0, -2, -2]}>
        <group rotation={[-Math.PI / 2.2, 0, 0]} scale={2.5}>
          
          {/* Front Wave - Soft Silver/White */}
          <mesh position={[0, 0, 0.8]}>
            <planeGeometry args={[15, 15, 64, 64]} />
            <MeshDistortMaterial 
              color="#f8fafc" 
              wireframe={true} 
              transparent 
              opacity={0.4} 
              distort={0.35} 
              speed={1.5} 
            />
          </mesh>
          
          {/* Mid Wave - Gentle Sky Blue */}
          <mesh position={[0, 0, 0.4]}>
            <planeGeometry args={[15, 15, 64, 64]} />
            <MeshDistortMaterial 
              color="#7dd3fc" 
              wireframe={true} 
              transparent 
              opacity={0.25} 
              distort={0.45} 
              speed={1.2} 
            />
          </mesh>
          
          {/* Deep Wave - Muted Indigo/Blue */}
          <mesh position={[0, 0, 0]}>
            <planeGeometry args={[15, 15, 64, 64]} />
            <MeshDistortMaterial 
              color="#38bdf8" 
              wireframe={true} 
              transparent 
              opacity={0.1} 
              distort={0.55} 
              speed={0.8} 
            />
          </mesh>
          
        </group>
      </Float>
    </>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] w-full bg-[#09090b] overflow-hidden flex flex-col justify-center items-center text-center">
      
      {/* Background 3D Majestic Waves (Gentle/Soft) */}
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 45 }} gl={{ antialias: true, powerPreference: "high-performance" }}>
          <MajesticWavesScene />
        </Canvas>
        
        {/* Soft Gradients to blend edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b] z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-transparent to-[#09090b] z-10 pointer-events-none"></div>
      </div>

      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 py-24 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5 mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className="text-zinc-400 font-mono text-[10px] md:text-xs uppercase tracking-wider">Available for new opportunities</span>
          </div>

          {/* Elegant Title */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[6rem] font-bold font-display leading-[1.05] text-white tracking-tight mb-6">
            Building Scalable <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Web Experiences.</span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-light">
            Hi, I'm <span className="text-zinc-200 font-medium">Lê Hoàng Quách Tỉnh</span>. A Full-Stack Engineer merging high-performance backend microservices with dynamic web interfaces and robust cloud deployments.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <a href="#projects" className="px-8 py-4 bg-white/10 text-white border border-white/5 font-semibold rounded-lg hover:bg-white/15 transition-colors backdrop-blur-sm">
              Explore Works
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent text-zinc-300 hover:text-white font-medium rounded-lg transition-colors">
              Contact Me <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
            </a>
          </div>

          {/* Core Tech Stack Information */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-12 sm:mt-16 pt-8 border-t border-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Core Stack</span>
            <div className="flex gap-6 text-2xl">
              <i className="fa-brands fa-java text-[#f89820] hover:scale-110 transition-transform cursor-pointer" title="Java"></i>
              <i className="fa-solid fa-leaf text-[#6db33f] hover:scale-110 transition-transform cursor-pointer" title="Spring Boot"></i>
              <i className="fa-brands fa-docker text-[#0db7ed] hover:scale-110 transition-transform cursor-pointer" title="Docker"></i>
              <i className="fa-brands fa-aws text-[#ff9900] hover:scale-110 transition-transform cursor-pointer" title="AWS"></i>
              <i className="fa-solid fa-database text-zinc-300 hover:scale-110 transition-transform cursor-pointer" title="Databases"></i>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
