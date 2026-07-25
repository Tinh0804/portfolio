import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'journey', label: 'Journey' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="fixed w-full top-0 md:top-6 z-50 flex justify-center pointer-events-none px-4"
      >
        <div 
          className={`pointer-events-auto transition-all duration-500 flex items-center justify-between rounded-none md:rounded-full ${
            scrolled || isMobileMenuOpen
              ? 'bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b md:border border-black/10 dark:border-white/10 shadow-2xl px-6 py-3 w-full md:max-w-5xl' 
              : 'bg-transparent border-transparent px-6 py-4 w-full md:max-w-6xl'
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 p-[2px] shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-shadow">
              <img
                src="/assets/images/avatar.jpeg"
                alt="Avatar"
                className="w-full h-full rounded-full object-cover border-2 border-white dark:border-[#09090b]"
                onError={(e) => {
                  e.target.src = 'https://ui-avatars.com/api/?name=Lê+Tỉnh&background=0D8ABC&color=fff';
                }}
              />
            </div>
            <span className={`font-bold font-display tracking-wide transition-all duration-300 ${scrolled ? 'text-slate-900 dark:text-white text-lg' : 'text-slate-900 dark:text-white text-xl md:text-2xl'}`}>
              Tỉnh<span className="text-sky-500 dark:text-sky-400">.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`text-base font-semibold transition-colors hover:text-slate-900 dark:hover:text-white relative ${
                    isActive ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-zinc-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 w-full h-[2px] bg-sky-500 dark:bg-sky-400"
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            
            {/* Desktop Contact Button */}
            <a 
              href="#contact"
              className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-black text-base font-bold rounded-full hover:bg-sky-500 dark:hover:bg-sky-400 hover:text-white dark:hover:text-white hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Toggle & Theme */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              className="text-slate-800 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 transition-colors focus:outline-none pointer-events-auto"
              onClick={toggleMobileMenu}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-white/95 dark:bg-black/95 backdrop-blur-2xl border-b border-black/10 dark:border-white/10 md:hidden pointer-events-auto"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={closeMobileMenu}
                  className={`text-xl font-display tracking-wide ${
                    activeSection === link.id ? 'text-sky-500 dark:text-sky-400' : 'text-slate-600 dark:text-zinc-300'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-black/10 dark:border-white/10 my-2" />
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="text-xl font-display tracking-wide text-slate-900 dark:text-white flex items-center gap-2"
              >
                Let's Talk <i className="fas fa-arrow-right text-sky-500 dark:text-sky-400 text-sm"></i>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
