import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Create an organic loading curve (fast at first, slower at the end)
      const increment = current > 80 ? Math.floor(Math.random() * 3) + 1 : Math.floor(Math.random() * 8) + 2;
      current += increment;
      
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        // Wait a moment at 100% to let the user see it completed
        setTimeout(() => setIsLoading(false), 700); 
      }
      setProgress(current);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09090b] overflow-hidden"
          exit={{ 
            opacity: 0, 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } // Fast acceleration curve
          }}
        >
          
          {/* Abstract Rotating Background Rings */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="w-[150vw] h-[150vw] md:w-[70vw] md:h-[70vw] border-[1px] border-white/[0.03] rounded-full"
             />
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute w-[120vw] h-[120vw] md:w-[50vw] md:h-[50vw] border-[1px] border-sky-500/[0.05] rounded-full"
             />
          </div>

          {/* Main content of preloader */}
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Massive Awwwards-style counter */}
            <div className="overflow-hidden mb-2">
              <motion.h1 
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Springy reveal
                className="text-8xl md:text-[12rem] font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 leading-none tracking-tighter"
              >
                {progress}
                <span className="text-4xl md:text-8xl text-sky-500">%</span>
              </motion.h1>
            </div>

            {/* Subtitle / Brand */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.4, duration: 1 }}
              className="flex items-center gap-6 mt-8"
            >
              <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-sky-500"></div>
              <span className="text-xs md:text-sm font-mono tracking-[0.4em] uppercase text-zinc-400">
                System Initializing
              </span>
              <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-sky-500"></div>
            </motion.div>
          </div>

          {/* Progress Line at the very bottom */}
          <div className="absolute bottom-0 left-0 h-1 bg-sky-500 shadow-[0_0_20px_rgba(56,189,248,0.8)]" style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
