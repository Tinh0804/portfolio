import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useProgress } from '@react-three/drei';

const Preloader = () => {
  const { progress } = useProgress(); // Real loading progress of Three.js assets
  const progressRef = useRef(progress);
  
  // Keep ref updated to avoid restarting the interval
  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  const [displayProgress, setDisplayProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let current = 0;
    let minTimePassed = false;
    
    // Aesthetic minimum timer to ensure the preloader isn't a flash if assets are cached
    const minTimer = setTimeout(() => {
      minTimePassed = true;
    }, 1500); // 1.5 seconds minimum

    const interval = setInterval(() => {
      const target = progressRef.current;
      
      // Smoothly animate towards the real progress
      if (current < target) {
        current += Math.random() * 3 + 1; // Organic fast/slow increment
        if (current > target) current = target;
      }
      
      // If assets load very slowly, we can let the fake counter advance a bit
      // but cap it so it never hits 100 until real assets are done.
      if (current >= target && target < 100) {
         if (current < 90) {
            current += Math.random() * 0.5; // very slow fake progress to show activity
         }
      }

      setDisplayProgress(Math.floor(current));
      
      // If 100% reached and min time has elapsed
      if (target >= 100 && current >= 100 && minTimePassed) {
        clearInterval(interval);
        setDisplayProgress(100);
        // Pause at 100 for a moment before hiding
        setTimeout(() => setIsLoading(false), 500);
      }
    }, 30);

    return () => {
      clearInterval(interval);
      clearTimeout(minTimer);
    };
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
                {displayProgress}
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
                Lê Hoàng Quách Tỉnh
              </span>
              <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-sky-500"></div>
            </motion.div>
          </div>

          {/* Progress Line at the very bottom */}
          <div className="absolute bottom-0 left-0 h-1 bg-sky-500 shadow-[0_0_20px_rgba(56,189,248,0.8)]" style={{ width: `${displayProgress}%`, transition: 'width 0.1s linear' }}></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
