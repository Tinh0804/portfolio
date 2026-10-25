import { useEffect, useState } from 'react';

export const useActiveNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    // Use IntersectionObserver for 60fps zero-reflow active nav tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Smooth scrolling delegation for anchor clicks
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#' || targetId.length <= 1) return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return activeSection;
};
