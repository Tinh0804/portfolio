import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const journeyData = [
  {
    id: 1,
    year: "2026 - Present",
    title: "Fullstack Engineer",
    desc: "Expanding expertise across the entire application stack. Seamlessly integrating highly scalable backend microservices with modern, responsive, and dynamic frontend architectures.",
    tech: ["System Design", "Spring Boot", "AWS","React", "Tailwind CSS","Redis","GCP"],
    icon: "fa-solid fa-layer-group"
  },
  {
    id: 2,
    year: "2025",
    title: "Backend Engineer",
    desc: "Spearheading the transition to highly scalable microservices. Focusing on optimizing database transactions, implementing robust caching strategies, and establishing strict CI/CD pipelines.",
    tech: ["Java", "Spring Boot", "Docker", "PostgreSQL"],
    icon: "fa-solid fa-server"
  },
  {
    id: 3,
    year: "2024 - 2025",
    title: "Mobile App Development",
    desc: "Explored the mobile ecosystem, building cross-platform applications with fluid UIs and integrating complex third-party APIs.",
    tech: ["Flutter", "SwiftUI", "Firebase"],
    icon: "fa-solid fa-mobile-screen-button"
  },
  {
    id: 4,
    year: "2023 - 2024",
    title: "Programming Fundamentals",
    desc: "Built a rock-solid foundation in Computer Science. Focused heavily on algorithms, data structures, and object-oriented programming principles.",
    tech: ["C++", "Algorithms", "Data Structures"],
    icon: "fa-solid fa-code"
  }
];

const Journey = () => {
  const [activeId, setActiveId] = useState(1);
  const activeItem = journeyData.find(item => item.id === activeId);

  return (
    <section id="journey" className="relative py-24 md:py-32 bg-[#09090b] overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-sky-500"></div>
            <span className="text-sky-400 font-mono text-sm uppercase tracking-widest">Evolution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Journey.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          
          {/* Left: Interactive Timeline Track */}
          <div className="w-full md:w-1/3 relative">
            {/* Background Track Line */}
            <div className="absolute left-[31px] top-4 bottom-4 w-[1px] bg-white/10 hidden md:block"></div>
            
            <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 hide-scrollbar snap-x snap-mandatory relative z-10">
              {journeyData.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <button 
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className="relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group text-left min-w-[200px] md:min-w-0 snap-start shrink-0"
                  >
                    {/* Glowing Dot (Desktop only indicator) */}
                    <div className={`hidden md:flex relative items-center justify-center w-8 h-8 rounded-full z-10 transition-colors duration-300 ${isActive ? 'bg-sky-500/20' : 'bg-[#09090b]'}`}>
                      <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${isActive ? 'bg-sky-400 scale-125 shadow-[0_0_10px_rgba(56,189,248,0.8)]' : 'bg-zinc-700 group-hover:bg-zinc-500 scale-100'}`}></div>
                    </div>
                    
                    {/* Mobile Background indicator */}
                    <div className={`absolute inset-0 rounded-2xl transition-colors duration-300 md:hidden ${isActive ? 'bg-sky-500/10 border border-sky-500/20' : 'bg-white/[0.02] border border-white/5'}`}></div>

                    {/* Text */}
                    <div className="flex flex-col relative z-10">
                      <span className={`font-mono text-xs mb-1 transition-colors duration-300 ${isActive ? 'text-sky-400' : 'text-zinc-500 group-hover:text-zinc-400'}`}>
                        {item.year}
                      </span>
                      <span className={`font-medium text-sm md:text-base transition-colors duration-300 ${isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                        {item.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Detailed Content Card (AnimatePresence) */}
          <div className="w-full md:w-2/3 min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeItem.id}
                initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative rounded-3xl bg-white/[0.02] border border-white/5 p-8 md:p-12 overflow-hidden shadow-2xl"
              >
                {/* Watermark Icon */}
                <i className={`${activeItem.icon} absolute -bottom-10 -right-10 text-[12rem] text-white/[0.02] -rotate-12 pointer-events-none`}></i>
                
                {/* Top glow accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-indigo-500 opacity-70"></div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center gap-5 mb-8">
                    <div className="w-16 h-16 rounded-full bg-sky-500/10 flex items-center justify-center border border-sky-500/20 text-sky-400 text-2xl shadow-[0_0_20px_rgba(56,189,248,0.15)] shrink-0">
                      <i className={activeItem.icon}></i>
                    </div>
                    <div>
                      <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest">{activeItem.year}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">{activeItem.title}</h3>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light mb-10">
                    {activeItem.desc}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-3">
                    {activeItem.tech.map((tech, i) => (
                      <span key={i} className="px-4 py-2 rounded-full text-xs font-mono text-zinc-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors hover:border-sky-500/30 cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
      
      {/* CSS for hide-scrollbar (Tailwind utility addition via standard CSS approach if needed) */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Journey;
