import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'motion/react';

const CustomCursor = () => {
  // useMotionValue bypasses React state for 0-latency tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      // Instantly update cursor position without re-rendering
      cursorX.set(e.clientX - (isHovering ? 32 : 16));
      cursorY.set(e.clientY - (isHovering ? 32 : 16));
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
        // Pre-adjust position for scale center
        cursorX.set(e.clientX - 32);
        cursorY.set(e.clientY - 32);
      } else {
        setIsHovering(false);
        cursorX.set(e.clientX - 16);
        cursorY.set(e.clientY - 16);
      }
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isHovering]);

  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      <style>
        {`
          @media (min-width: 768px) {
            * { cursor: none !important; }
          }
        `}
      </style>
      
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-white pointer-events-none z-[9999] hidden md:block"
        style={{
          width: '32px',
          height: '32px',
          mixBlendMode: 'difference',
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          scale: { type: "spring", stiffness: 500, damping: 28 }
        }}
      />
    </>
  );
};

export default CustomCursor;
