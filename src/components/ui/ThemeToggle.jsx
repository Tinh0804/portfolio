import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'motion/react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-white/10 dark:bg-black/20 text-slate-800 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors focus:outline-none backdrop-blur-sm border border-black/10 dark:border-white/10"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="w-5 h-5 flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <i className="fa-solid fa-moon text-lg"></i>
        ) : (
          <i className="fa-solid fa-sun text-lg"></i>
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
