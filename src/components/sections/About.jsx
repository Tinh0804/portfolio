import React from 'react';
import { motion } from 'motion/react';
import { useTranslation, Trans } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="relative py-24 md:py-32 bg-slate-50 dark:bg-[#09090b] transition-colors duration-300">
      
      {/* Subtle Hairline Section Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 pointer-events-none">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 mb-4 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            <span className="text-slate-600 dark:text-zinc-400 font-mono text-xs uppercase tracking-wider font-semibold">{t('about.subtitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
            {t('about.title1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-sky-400 dark:to-indigo-400">{t('about.title2')}</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* 1. Avatar Card */}
          <motion.div 
            className="col-span-1 md:col-span-2 lg:col-span-1 rounded-3xl overflow-hidden relative group bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-white/5 shadow-sm dark:shadow-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full h-[320px] sm:h-[400px] md:h-[450px] lg:h-full min-h-[300px] sm:min-h-[400px] relative">
              <img 
                src="/assets/images/avatar.jpeg" 
                alt="Lê Hoàng Quách Tỉnh - Fullstack Software Engineer" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex">
                <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-1.5 sm:py-2 bg-white/85 dark:bg-black/60 backdrop-blur-md rounded-full border border-black/10 dark:border-white/10 shadow-lg">
                  <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-slate-900 dark:text-white font-medium text-xs md:text-sm">{t('about.status')}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Main Bio Card */}
          <motion.div 
            className="col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 shadow-sm dark:shadow-none p-6 sm:p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group hover:border-sky-500/20 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="space-y-4 sm:space-y-5 text-slate-600 dark:text-zinc-300 text-base md:text-lg leading-relaxed font-light relative z-10">
              <p className="text-lg sm:text-xl md:text-2xl font-normal text-slate-800 dark:text-zinc-100">
                <Trans i18nKey="about.bio1">
                  Hello! I'm <strong className="text-slate-900 dark:text-white font-semibold">Lê Hoàng Quách Tỉnh</strong>. A Software Engineer passionate about backend architecture, real-time distributed systems, and modern web applications.
                </Trans>
              </p>
              <p>
                {t('about.bio2')}
              </p>
            </div>

            {/* Social & CV Actions */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200/80 dark:border-white/5 flex flex-wrap items-center justify-between gap-4 sm:gap-6 relative z-10">
              {/* Social Icons */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                {/* GitHub */}
                <a href="https://github.com/Tinh0804" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10 border border-slate-200/60 dark:border-white/10 hover:scale-110 transition-all duration-300 shadow-sm group">
                  <i className="fa-brands fa-github text-lg sm:text-xl group-hover:scale-110 transition-transform"></i>
                </a>
                
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/lê-hoàng-quách-tỉnh-56a0a0376" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-sky-50 text-sky-600 hover:bg-sky-100 dark:bg-sky-500/10 dark:text-sky-400 dark:hover:bg-sky-500/20 border border-sky-200 dark:border-sky-500/20 hover:scale-110 transition-all duration-300 shadow-sm group">
                  <i className="fa-brands fa-linkedin-in text-lg sm:text-xl group-hover:scale-110 transition-transform"></i>
                </a>
                
                {/* Email Direct */}
                <a href="mailto:lhqtinh2005@gmail.com" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 dark:hover:bg-indigo-500/20 border border-indigo-200 dark:border-indigo-500/20 hover:scale-110 transition-all duration-300 shadow-sm group">
                  <i className="fa-solid fa-envelope text-base sm:text-lg group-hover:scale-110 transition-transform"></i>
                </a>
              </div>
              
              {/* CV Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                <a href="/assets/LeHoangQuachTinh_FullstackDeveloper_CV.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 font-medium hover:bg-slate-200 dark:hover:bg-white/10 transition-colors flex items-center gap-2 text-xs sm:text-sm border border-slate-200/60 dark:border-white/10 shadow-sm dark:shadow-none whitespace-nowrap">
                  <i className="fa-regular fa-eye text-xs sm:text-sm"></i> {t('about.viewCv')}
                </a>
                <a href="/assets/LeHoangQuachTinh_FullstackDeveloper_CV.pdf" download="LeHoangQuachTinh_FullstackDeveloper_CV.pdf" className="flex-1 sm:flex-none justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20 font-medium hover:bg-sky-100 dark:hover:bg-sky-500/20 transition-colors flex items-center gap-2 text-xs sm:text-sm shadow-sm dark:shadow-[0_0_15px_rgba(56,189,248,0.1)] whitespace-nowrap">
                  <i className="fa-solid fa-download text-xs sm:text-sm"></i> {t('about.downloadCv')}
                </a>
              </div>
            </div>
          </motion.div>

          {/* 3. Engineering Pillar Cards */}
          <motion.div 
            className="col-span-1 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 shadow-sm dark:shadow-none p-6 sm:p-8 flex flex-col hover:border-indigo-400/30 transition-colors group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/60 dark:border-indigo-500/20 flex items-center justify-center text-indigo-500 dark:text-indigo-400 text-lg sm:text-xl mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-diagram-project"></i>
            </div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-2 text-base sm:text-lg">{t('about.card1Title')}</h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-light leading-relaxed">{t('about.card1Desc')}</p>
          </motion.div>

          <motion.div 
            className="col-span-1 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 shadow-sm dark:shadow-none p-6 sm:p-8 flex flex-col hover:border-sky-400/30 transition-colors group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-sky-50 dark:bg-sky-500/10 border border-sky-200/60 dark:border-sky-500/20 flex items-center justify-center text-sky-500 dark:text-sky-400 text-lg sm:text-xl mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-bolt-lightning"></i>
            </div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-2 text-base sm:text-lg">{t('about.card2Title')}</h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-light leading-relaxed">{t('about.card2Desc')}</p>
          </motion.div>

          <motion.div 
            className="col-span-1 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 shadow-sm dark:shadow-none p-6 sm:p-8 flex flex-col hover:border-emerald-400/30 transition-colors group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20 flex items-center justify-center text-emerald-500 dark:text-emerald-400 text-lg sm:text-xl mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-2 text-base sm:text-lg">{t('about.card3Title')}</h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-light leading-relaxed">{t('about.card3Desc')}</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
