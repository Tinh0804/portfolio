import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');

          if (entry.target.id === 'skills' || entry.target.querySelector('.skill-bar')) {
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar) => {
              const width = bar.getAttribute('data-width');
              bar.style.width = width;
            });
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal, #skills');
    elements.forEach((el) => {
      scrollObserver.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        scrollObserver.unobserve(el);
      });
    };
  }, []);
};
