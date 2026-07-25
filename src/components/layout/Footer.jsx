import React from 'react';
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-white/5 bg-[#09090b] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-6 mb-8"
        >
          <a
            href="https://github.com/Tinh0804"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.05] hover:border-sky-500/30 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lê-hoàng-quách-tỉnh-56a0a0376"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            href="mailto:lhqtinh2005@gmail.com"
            className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <i className="fas fa-envelope text-xl"></i>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <p className="text-zinc-500 mb-2 font-light">
            © 2026 <span className="text-zinc-300 font-medium">Lê Hoàng Quách Tỉnh</span>. Made with ❤️ and ☕
          </p>
          <p className="text-zinc-600 text-sm font-mono tracking-widest uppercase">
            Backend Developer | Clean Code Enthusiast
          </p>
        </motion.div>
        
      </div>
    </footer>
  );
};

export default Footer;
