import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-8 px-4 border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto text-center reveal">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/Tinh0804"
            target="_blank"
            rel="noreferrer"
            className="interactive text-2xl text-slate-400 hover:text-primary hover:-translate-y-1 transition-all"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lê-hoàng-quách-tỉnh-56a0a0376"
            target="_blank"
            rel="noreferrer"
            className="interactive text-2xl text-slate-400 hover:text-primary hover:-translate-y-1 transition-all"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:lhqtinh2005@gmail.com"
            className="interactive text-2xl text-slate-400 hover:text-primary hover:-translate-y-1 transition-all"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className="text-slate-500">
          © 2026 Lê Hoàng Quách Tỉnh. Made with ❤️ and ☕
        </p>
        <p className="text-slate-600 text-sm mt-2 font-mono">
          Backend Developer | Clean Code Enthusiast
        </p>
      </div>
    </footer>
  );
};

export default Footer;
