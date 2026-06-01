import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [display, setDisplay] = useState('flex');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsVisible(false);
    }, 700);

    const timer2 = setTimeout(() => {
      setDisplay('none');
    }, 1400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div
      id="preloader"
      style={{ display: display, opacity: isVisible ? 1 : 0 }}
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center transition-opacity duration-700"
    >
      <div className="relative w-24 h-24 flex justify-center items-center mb-4">
        <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin"></div>
        <div
          className="absolute inset-2 rounded-full border-r-2 border-secondary animate-spin"
          style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
        ></div>
        <span className="text-primary font-bold animate-pulse text-xl">Tỉnh DEV</span>
      </div>
      <p className="text-slate-400 text-sm tracking-widest animate-pulse uppercase">Đang tải...</p>
    </div>
  );
};

export default Preloader;
