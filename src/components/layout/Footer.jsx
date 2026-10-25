import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const [visitors, setVisitors] = useState(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('portfolio_has_visited_v2');
    if (!hasVisited) {
      fetch('https://countapi.mileshilliard.com/api/v1/hit/tinh0804-portfolio-visitors-v2')
        .then(res => res.ok ? res.json() : { value: 1 })
        .then(data => {
          setVisitors(data.value || 1);
          sessionStorage.setItem('portfolio_has_visited_v2', 'true');
        })
        .catch(() => setVisitors(1));
    } else {
      fetch('https://countapi.mileshilliard.com/api/v1/get/tinh0804-portfolio-visitors-v2')
        .then(res => res.ok ? res.json() : { value: 1 })
        .then(data => setVisitors(data.value || 1))
        .catch(() => setVisitors(1));
    }
  }, []);

  return (
    <footer className="relative py-14 px-4 sm:px-6 border-t border-slate-200/80 dark:border-white/5 bg-slate-50 dark:bg-[#09090b] overflow-hidden transition-colors duration-300">
      {/* Subtle Hairline Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 pointer-events-none">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-4 mb-8"
        >
          <a
            href="https://github.com/Tinh0804"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] hover:border-sky-500/30 transition-all duration-300 hover:scale-110 shadow-sm"
          >
            <i className="fa-brands fa-github text-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lê-hoàng-quách-tỉnh-56a0a0376"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 hover:scale-110 shadow-sm"
          >
            <i className="fa-brands fa-linkedin-in text-lg"></i>
          </a>
          <a
            href="mailto:lhqtinh2005@gmail.com"
            className="w-11 h-11 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 hover:scale-110 shadow-sm"
          >
            <i className="fa-solid fa-envelope text-base"></i>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <p className="text-slate-600 dark:text-zinc-400 mb-1.5 font-light text-sm md:text-base">
            © 2026 <span className="text-slate-900 dark:text-zinc-200 font-medium">Lê Hoàng Quách Tỉnh</span>. {t('footer.madeWith')}
          </p>
          <p className="text-slate-400 dark:text-zinc-500 text-xs font-mono tracking-widest uppercase mb-6">
            {t('footer.role')}
          </p>
          {visitors !== null && (
            <div className="flex justify-center mt-4">
              <div className="inline-flex items-center rounded-full border border-slate-200/80 dark:border-white/10 bg-white dark:bg-white/5 font-mono text-xs px-4 py-1.5 text-slate-600 dark:text-zinc-400 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                <span>{t('footer.visitors')}:</span>
                <span className="ml-1.5 font-semibold text-slate-900 dark:text-white font-mono">{visitors.toLocaleString()}</span>
              </div>
            </div>
          )}
        </motion.div>
        
      </div>
    </footer>
  );
};

export default Footer;
