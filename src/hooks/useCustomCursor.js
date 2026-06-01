import { useEffect } from 'react';

export const useCustomCursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    const handleMouseMove = (e) => {
      if (window.innerWidth >= 768 && cursorDot && cursorOutline) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 150, fill: 'forwards' }
        );
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Interactive elements hover
    const interactives = document.querySelectorAll('.interactive, a, button, input');
    
    const handleMouseEnter = () => document.body.classList.add('cursor-hover');
    const handleMouseLeave = () => document.body.classList.remove('cursor-hover');

    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
};
