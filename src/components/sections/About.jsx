import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-sky-500"></div>
            <span className="text-sky-400 font-mono text-sm uppercase tracking-widest">Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white">
            Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Code.</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* 1. Avatar Card (Wider: 1/3 of screen instead of 1/4) */}
          <motion.div 
            className="col-span-1 md:col-span-2 lg:col-span-1 rounded-3xl overflow-hidden relative group bg-zinc-900 border border-white/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Aspect ratio to ensure it's not too tall and narrow */}
            <div className="w-full h-[400px] md:h-[450px] lg:h-full min-h-[400px] relative">
              <img 
                src="/assets/images/avatar.jpeg" 
                alt="Lê Hoàng Quách Tỉnh" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-white font-medium text-sm drop-shadow-md">Available for work</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Main Bio Card */}
          <motion.div 
            className="col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl bg-white/[0.02] border border-white/5 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group hover:border-sky-500/20 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
            
            <i className="fa-solid fa-quote-left text-3xl text-sky-500/20 mb-6"></i>
            <div className="space-y-4 text-zinc-300 text-lg md:text-xl leading-relaxed font-light relative z-10">
              <p>
                Hello! I'm <strong className="text-white font-medium">Lê Hoàng Quách Tỉnh</strong>. I engineer the unseen foundation of digital products. 
              </p>
              <p>
                My expertise lies in architecting resilient backend systems, orchestrating microservices, and optimizing complex data flows. I don't just write code; I build infrastructure that scales effortlessly under pressure while remaining remarkably easy to maintain and secure.
              </p>
            </div>
          </motion.div>

          {/* 3. Skill/Stat Cards (Perfectly aligns to 3 columns) */}
          <motion.div 
            className="col-span-1 rounded-3xl bg-white/[0.02] border border-white/5 p-8 flex flex-col hover:bg-white/[0.04] hover:border-indigo-400/30 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-xl mb-6">
              <i className="fa-solid fa-network-wired"></i>
            </div>
            <h3 className="text-white font-medium mb-2 text-lg">Microservices</h3>
            <p className="text-sm text-zinc-500 font-light">Deconstructing complexity into scalable, isolated systems.</p>
          </motion.div>

          <motion.div 
            className="col-span-1 rounded-3xl bg-white/[0.02] border border-white/5 p-8 flex flex-col hover:bg-white/[0.04] hover:border-sky-400/30 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 text-xl mb-6">
              <i className="fa-solid fa-server"></i>
            </div>
            <h3 className="text-white font-medium mb-2 text-lg">Cloud / DevOps</h3>
            <p className="text-sm text-zinc-500 font-light">Automating deployments for 99.9% uptime.</p>
          </motion.div>

          <motion.div 
            className="col-span-1 rounded-3xl bg-white/[0.02] border border-white/5 p-8 flex flex-col hover:bg-white/[0.04] hover:border-indigo-400/30 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-xl mb-6">
              <i className="fa-solid fa-database"></i>
            </div>
            <h3 className="text-white font-medium mb-2 text-lg">Data Engineering</h3>
            <p className="text-sm text-zinc-500 font-light">Highly optimized queries and schemas.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
