import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useProgress } from '@react-three/drei';

const Preloader = () => {
  const { progress } = useProgress(); // Real loading progress of Three.js assets
  const progressRef = useRef(progress);
  
  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  const [displayProgress, setDisplayProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let current = 0;
    let animId = null;
    let isFinished = false;

    const updateLoop = () => {
      const target = Math.max(progressRef.current, 15);

      if (current < target) {
        // Smooth proportional ease-out interpolation
        current += Math.max(0.4, (target - current) * 0.15);
        if (current >= target) current = target;
      }

      const floored = Math.min(100, Math.floor(current));
      setDisplayProgress(floored);

      // Once assets are 100% loaded and counter reaches 100%
      if (!isFinished && target >= 100 && current >= 99.5) {
        isFinished = true;
        setDisplayProgress(100);

        // Wait 2 animation frames to let WebGL finish shader compilation and render frame 1 behind the curtain
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTimeout(() => {
              setIsLoading(false);
            }, 180);
          });
        });
        return;
      }

      if (!isFinished) {
        animId = requestAnimationFrame(updateLoop);
      }
    };

    animId = requestAnimationFrame(updateLoop);

    // Fallback maximum safety timeout (max 2.2s if remote asset delays)
    const safetyTimeout = setTimeout(() => {
      isFinished = true;
      setDisplayProgress(100);
      setIsLoading(false);
    }, 2200);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      clearTimeout(safetyTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09090b] overflow-hidden transform-gpu will-change-transform [backface-visibility:hidden]"
          initial={{ opacity: 1, y: 0 }}
          exit={{ 
            opacity: 0, 
            y: "-100%", 
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
          }}
        >
          {/* Subtle Ambient Rings */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
             <div className="w-[80vw] h-[80vw] md:w-[45vw] md:h-[45vw] border-[1px] border-white/[0.04] rounded-full animate-pulse" />
             <div className="absolute w-[60vw] h-[60vw] md:w-[32vw] md:h-[32vw] border-[1px] border-sky-500/[0.08] rounded-full" />
          </div>

          {/* Main content of preloader */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="overflow-hidden mb-2">
              <motion.div 
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-9xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 leading-none tracking-tighter"
              >
                {displayProgress}
                <span className="text-4xl md:text-6xl text-sky-400">%</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-4 mt-6"
            >
              <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-sky-500/40"></div>
              <span className="text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-zinc-400">
                Lê Hoàng Quách Tỉnh
              </span>
              <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-sky-500/40"></div>
            </motion.div>
          </div>

          {/* Progress Line */}
          <div 
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 shadow-[0_0_15px_rgba(56,189,248,0.6)] transform-gpu" 
            style={{ width: `${displayProgress}%` }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
