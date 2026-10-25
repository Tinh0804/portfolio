import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const CustomCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for the trailing follower
  const springX = useSpring(mouseX, { stiffness: 450, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 28 });

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch-capable devices (smartphones, watches, tablets, iPads)
    const checkTouch = () => {
      const hasTouch = (
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        window.matchMedia('(pointer: coarse)').matches
      );
      setIsTouchDevice(hasTouch);
    };

    checkTouch();
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const updateMousePosition = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible, isTouchDevice]);

  if (isTouchDevice) {
    return null;
  }

  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full border border-sky-400/50 bg-sky-400/10 pointer-events-none z-[9999] hidden md:block backdrop-blur-[0.5px] transform-gpu will-change-transform [backface-visibility:hidden]"
      style={{
        width: isHovering ? 48 : 28,
        height: isHovering ? 48 : 28,
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        width: { type: 'spring', stiffness: 500, damping: 25 },
        height: { type: 'spring', stiffness: 500, damping: 25 },
        opacity: { duration: 0.2 },
      }}
    />
  );
};

export default CustomCursor;
