import React from 'react';

const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      <div className="blob w-96 h-96 bg-blue-500 top-0 -right-48"></div>
      <div
        className="blob w-96 h-96 bg-purple-500 bottom-0 -left-48"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="blob w-64 h-64 bg-cyan-500 top-1/2 left-1/2"
        style={{ animationDelay: '4s' }}
      ></div>
    </div>
  );
};

export default BackgroundBlobs;
