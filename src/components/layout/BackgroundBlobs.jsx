import React from 'react';

const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-slate-50 dark:bg-[#09090b] transition-colors duration-500 [contain:strict] [backface-visibility:hidden]">
      {/* Top Right Subtle Ambient Light */}
      <div className="absolute -top-32 -right-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-sky-400/10 via-sky-500/5 to-transparent dark:from-sky-500/10 dark:via-indigo-500/5 dark:to-transparent blur-[140px] transform-gpu pointer-events-none [backface-visibility:hidden]"></div>
      
      {/* Mid Left Subtle Ambient Glow */}
      <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-indigo-500/10 via-sky-400/5 to-transparent dark:from-indigo-600/10 dark:via-sky-500/5 dark:to-transparent blur-[160px] transform-gpu pointer-events-none [backface-visibility:hidden]"></div>

      {/* Bottom Center Depth Accent */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-t from-sky-500/5 via-indigo-500/5 to-transparent dark:from-sky-500/5 dark:via-indigo-500/5 dark:to-transparent blur-[150px] transform-gpu pointer-events-none [backface-visibility:hidden]"></div>

      {/* Subtle Engineering Mesh Grid Overlay (Linear-inspired subtle spatial grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-80 pointer-events-none [backface-visibility:hidden]"></div>
    </div>
  );
};

export default BackgroundBlobs;
