import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 reveal">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8 card-hover reveal" style={{ transitionDelay: '100ms' }}>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              <i className="fas fa-user-tie mr-2"></i>Who I Am
            </h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              👋 Hello! I'm a Backend Developer passionate about building efficient, scalable, and maintainable backend systems.
            </p>
            <p className="text-slate-300 leading-relaxed">
              🎯 My expertise lies in building robust Web APIs and Microservices architectures with{' '}
              <span className="text-primary font-semibold text-lg">Spring Boot</span> and{' '}
              <span className="text-purple-400 font-semibold text-lg">.NET Core</span>.
            </p>
          </div>
          <div className="glass rounded-2xl p-8 card-hover reveal" style={{ transitionDelay: '300ms' }}>
            <h3 className="text-2xl font-bold mb-4 text-secondary">
              <i className="fas fa-bullseye mr-2"></i>What I Do
            </h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start group">
                <i className="fas fa-check-circle text-primary mr-3 mt-1 group-hover:scale-125 transition-transform"></i>
                <span>Designing and developing highly scalable RESTful APIs</span>
              </li>
              <li className="flex items-start group">
                <i className="fas fa-check-circle text-primary mr-3 mt-1 group-hover:scale-125 transition-transform"></i>
                <span>Learn Microservices architecture with Docker and RabbitMQ</span>
              </li>
              <li className="flex items-start group">
                <i className="fas fa-check-circle text-primary mr-3 mt-1 group-hover:scale-125 transition-transform"></i>
                <span>Database optimization and big data processing</span>
              </li>
              <li className="flex items-start group">
                <i className="fas fa-check-circle text-primary mr-3 mt-1 group-hover:scale-125 transition-transform"></i>
                <span>Implementing Clean Architecture and Design Patterns</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
