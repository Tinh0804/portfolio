import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const FloatingHeart = () => {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio_has_liked_v2') === 'true';
    }
    return false;
  });
  const [isHovered, setIsHovered] = useState(false);
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    fetch('https://countapi.mileshilliard.com/api/v1/get/tinh0804-portfolio-hearts-v2')
      .then(res => res.ok ? res.json() : { value: 0 })
      .then(data => setLikes(data.value || 0))
      .catch(() => setLikes(0));
  }, []);

  const handleLike = () => {
    const id = Date.now() + Math.random();
    const driftX = (Math.random() - 0.5) * 40;
    const rotation = (Math.random() - 0.5) * 60;
    const driftY = -120 - Math.random() * 40;

    setClicks(prev => [...prev, { id, driftX, rotation, driftY }]);
    
    setTimeout(() => {
      setClicks(prev => prev.filter(click => click.id !== id));
    }, 1000);

    if (!hasLiked) {
      setHasLiked(true);
      setLikes(prev => prev + 1);
      localStorage.setItem('portfolio_has_liked_v2', 'true');
      fetch('https://countapi.mileshilliard.com/api/v1/hit/tinh0804-portfolio-hearts-v2').catch(console.error);
    }
  };

  return (
    <div className="fixed bottom-3 right-3 xs:bottom-4 xs:right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-center gap-1.5 sm:gap-2 pointer-events-none transform-gpu [backface-visibility:hidden]">
      
      {/* Container for mini floating hearts */}
      <div className="relative w-full flex justify-center pointer-events-none">
        <AnimatePresence>
          {clicks.map((click) => (
            <motion.div
              key={click.id}
              initial={{ opacity: 1, y: 0, x: 0, scale: 0.8, rotate: 0 }}
              animate={{ 
                opacity: 0, 
                y: click.driftY, 
                x: click.driftX,
                scale: 1.5,
                rotate: click.rotation 
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute bottom-4 text-rose-500 text-lg sm:text-xl pointer-events-none z-0"
            >
              <i className="fa-solid fa-heart drop-shadow-[0_0_10px_rgba(244,63,94,0.6)]"></i>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Main Interactive Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleLike}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg backdrop-blur-md border transition-all duration-300 relative group pointer-events-auto z-10 ${
          hasLiked 
            ? 'bg-rose-50/90 border-rose-200 dark:bg-rose-500/10 dark:border-rose-500/30' 
            : 'bg-white/90 border-slate-200 dark:bg-zinc-900/90 dark:border-white/10'
        }`}
      >
        <div className={`absolute inset-0 bg-rose-500/20 blur-xl rounded-full transition-opacity duration-300 ${isHovered || hasLiked ? 'opacity-100' : 'opacity-0'}`}></div>

        <i className={`text-lg sm:text-xl md:text-2xl relative z-10 transition-colors duration-300 ${
          hasLiked || isHovered 
            ? 'fa-solid text-rose-500 drop-shadow-sm' 
            : 'fa-regular text-slate-500 dark:text-zinc-400 group-hover:text-rose-400'
        } fa-heart`}></i>
      </motion.button>
      
      {/* Counter Badge */}
      <div className="pointer-events-auto mt-1">
        <span className="text-xs font-mono font-bold text-slate-700 dark:text-zinc-300 bg-white/80 dark:bg-zinc-900/80 px-3 py-1 rounded-full shadow-sm border border-black/5 dark:border-white/10 backdrop-blur-md">
          {likes !== undefined ? likes.toLocaleString() : 0}
        </span>
      </div>
    </div>
  );
};

export default FloatingHeart;
