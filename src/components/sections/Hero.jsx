import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-5xl mx-auto text-center z-10 reveal">
        <div className="float mb-8">
          <div className="w-48 h-48 mx-auto rounded-full glass border-4 border-primary/30 flex items-center justify-center text-8xl shadow-[0_0_40px_rgba(0,217,255,0.2)]">
            <img
              src="/assets/images/avatar.jpeg"
              alt="Avatar"
              className="w-40 h-40 rounded-full object-cover border-2 border-primary"
              onError={(e) => {
                e.target.src = 'https://ui-avatars.com/api/?name=Lê+Tỉnh&background=0D8ABC&color=fff';
              }}
            />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Lê Hoàng <span className="gradient-text">Quách Tỉnh</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-6 font-light">
          Backend Software Engineer
        </p>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Passionate about building scalable Web APIs and Microservices with
          <br />
          <span className="text-primary font-semibold">Spring Boot</span> &{' '}
          <span className="text-purple-400 font-semibold">.NET Core</span>
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="interactive px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all hover:-translate-y-1"
          >
            View Project
          </a>
         <a
            href="https://drive.google.com/file/d/1HsMrFzZnRwr5ZxlYRiyRWi0Q0OVIm-JH/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="interactive px-8 py-3 glass rounded-full font-semibold hover:bg-slate-800 transition-all hover:-translate-y-1 hover:border-primary/50"
          >
            See CV
          </a>
        </div>
        <div className="flex gap-6 justify-center mt-10">
          <a
            href="https://github.com/Tinh0804"
            target="_blank"
            rel="noreferrer"
            className="interactive text-3xl hover:text-primary transition hover:-translate-y-1"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lê-hoàng-quách-tỉnh-56a0a0376"
            target="_blank"
            rel="noreferrer"
            className="interactive text-3xl hover:text-primary transition hover:-translate-y-1"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:lhqtinh2005@gmail.com"
            className="interactive text-3xl hover:text-primary transition hover:-translate-y-1"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
