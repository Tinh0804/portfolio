import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-slate-50 dark:bg-[#09090b] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-sky-500"></div>
            <span className="text-sky-500 dark:text-sky-400 font-mono text-sm uppercase tracking-widest">Get to know me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white">
            Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-sky-400 dark:to-indigo-400">Code.</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* 1. Avatar Card */}
          <motion.div 
            className="col-span-1 md:col-span-2 lg:col-span-1 rounded-3xl overflow-hidden relative group bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-sm dark:shadow-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full h-[400px] md:h-[450px] lg:h-full min-h-[400px] relative">
              <img 
                src="/assets/images/avatar.jpeg" 
                alt="Lê Hoàng Quách Tỉnh" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 flex">
                <div className="flex items-center gap-3 px-4 py-2 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-full border border-black/10 dark:border-white/10 shadow-lg">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 dark:bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600 dark:bg-green-500"></span>
                  </span>
                  <span className="text-slate-900 dark:text-white font-medium text-sm">Available for work</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Main Bio Card */}
          <motion.div 
            className="col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 shadow-sm dark:shadow-none p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group hover:border-sky-500/20 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
            
            <i className="fa-solid fa-quote-left text-3xl text-sky-500/20 mb-6"></i>
            <div className="space-y-4 text-slate-600 dark:text-zinc-300 text-lg md:text-xl leading-relaxed font-light relative z-10">
              <p>
                Hello! I'm <strong className="text-slate-900 dark:text-white font-medium">Lê Hoàng Quách Tỉnh</strong>. I engineer the unseen foundation of digital products. 
              </p>
              <p>
                My expertise lies in architecting resilient backend systems, orchestrating microservices, and optimizing complex data flows. I don't just write code; I build infrastructure that scales effortlessly under pressure while remaining remarkably easy to maintain and secure.
              </p>
            </div>

            {/* Social & CV Actions */}
            <div className="mt-16 pt-10 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-6 relative z-10">
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {/* GitHub */}
                <a href="https://github.com/Tinh0804" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10 border border-transparent dark:border-white/10 hover:scale-110 transition-all duration-300 shadow-sm group">
                  <i className="fa-brands fa-github text-2xl group-hover:scale-110 transition-transform"></i>
                </a>
                
                {/* LinkedIn */}
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-sky-100 text-sky-600 hover:bg-sky-200 dark:bg-sky-500/10 dark:text-sky-400 dark:hover:bg-sky-500/20 border border-transparent dark:border-sky-500/20 hover:scale-110 transition-all duration-300 shadow-sm group">
                  <i className="fa-brands fa-linkedin-in text-2xl group-hover:scale-110 transition-transform"></i>
                </a>
                
                {/* Facebook */}
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-indigo-100 text-indigo-600 hover:bg-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:hover:bg-indigo-500/20 border border-transparent dark:border-indigo-500/20 hover:scale-110 transition-all duration-300 shadow-sm group">
                  <i className="fa-brands fa-facebook-f text-2xl group-hover:scale-110 transition-transform"></i>
                </a>
              </div>
              
              {/* CV Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a href="/assets/LeHoangQuachTinh_FullstackDeveloper_CV.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none justify-center px-6 py-3 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 font-medium hover:bg-slate-200 dark:hover:bg-white/10 transition-colors flex items-center gap-2 text-sm shadow-sm dark:shadow-none">
                  <i className="fa-regular fa-eye text-base"></i> View CV
                </a>
                <a href="/assets/LeHoangQuachTinh_FullstackDeveloper_CV.pdf" download="LeHoangQuachTinh_FullstackDeveloper_CV.pdf" className="flex-1 sm:flex-none justify-center px-6 py-3 rounded-full bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20 font-medium hover:bg-sky-100 dark:hover:bg-sky-500/20 transition-colors flex items-center gap-2 text-sm shadow-sm dark:shadow-[0_0_15px_rgba(56,189,248,0.1)]">
                  <i className="fa-solid fa-download text-base"></i> Download CV
                </a>
              </div>
            </div>
          </motion.div>

          {/* 3. Skill/Stat Cards */}
          <motion.div 
            className="col-span-1 rounded-3xl bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 shadow-sm dark:shadow-none p-8 flex flex-col hover:bg-slate-50 dark:hover:bg-white/[0.04] hover:border-indigo-400/30 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-500 dark:text-indigo-400 text-xl mb-6">
              <i className="fa-solid fa-network-wired"></i>
            </div>
            <h3 className="text-slate-900 dark:text-white font-medium mb-2 text-lg">Microservices</h3>
            <p className="text-sm text-slate-500 dark:text-zinc-500 font-light">Deconstructing complexity into scalable, isolated systems.</p>
          </motion.div>

          <motion.div 
            className="col-span-1 rounded-3xl bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 shadow-sm dark:shadow-none p-8 flex flex-col hover:bg-slate-50 dark:hover:bg-white/[0.04] hover:border-sky-400/30 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="w-12 h-12 rounded-full bg-sky-50 dark:bg-sky-500/10 flex items-center justify-center text-sky-500 dark:text-sky-400 text-xl mb-6">
              <i className="fa-solid fa-server"></i>
            </div>
            <h3 className="text-slate-900 dark:text-white font-medium mb-2 text-lg">Cloud / DevOps</h3>
            <p className="text-sm text-slate-500 dark:text-zinc-500 font-light">Automating deployments for 99.9% uptime.</p>
          </motion.div>

          <motion.div 
            className="col-span-1 rounded-3xl bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 shadow-sm dark:shadow-none p-8 flex flex-col hover:bg-slate-50 dark:hover:bg-white/[0.04] hover:border-indigo-400/30 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-500 dark:text-indigo-400 text-xl mb-6">
              <i className="fa-solid fa-cogs"></i>
            </div>
            <h3 className="text-slate-900 dark:text-white font-medium mb-2 text-lg">Backend Engineering</h3>
            <p className="text-sm text-slate-500 dark:text-zinc-500 font-light">Building robust, scalable, and secure APIs.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
