import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 reveal">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary reveal">
            <i className="fas fa-code mr-2"></i>Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 card-hover reveal" style={{ transitionDelay: '100ms' }}>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-laptop-code text-primary mr-2"></i> Languages
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Java / Spring Boot</span>
                    <span className="text-primary">90%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full skill-bar" style={{ width: '0%' }} data-width="90%"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>C# / .NET</span>
                    <span className="text-primary">80%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full skill-bar" style={{ width: '0%' }} data-width="80%"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>SQL</span>
                    <span className="text-primary">85%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full skill-bar" style={{ width: '0%' }} data-width="85%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6 card-hover reveal" style={{ transitionDelay: '200ms' }}>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-layer-group text-secondary mr-2"></i> Frameworks
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-slate-800/50 rounded hover:bg-slate-700/50 transition cursor-default">
                  <span>Spring Boot 3</span> <i className="fas fa-star text-yellow-400"></i>
                </div>
                <div className="flex items-center justify-between p-2 bg-slate-800/50 rounded hover:bg-slate-700/50 transition cursor-default">
                  <span>Spring MVC</span> <i className="fas fa-star text-yellow-400"></i>
                </div>
                <div className="flex items-center justify-between p-2 bg-slate-800/50 rounded hover:bg-slate-700/50 transition cursor-default">
                  <span>.NET Core 8</span> <i className="fas fa-star text-yellow-400"></i>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6 card-hover reveal" style={{ transitionDelay: '300ms' }}>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-database text-green-400 mr-2"></i> Databases
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full text-sm border border-primary/30 hover:border-primary transition cursor-default">SQL Server</span>
                <span className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full text-sm border border-primary/30 hover:border-primary transition cursor-default">MySQL</span>
                <span className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full text-sm border border-primary/30 hover:border-primary transition cursor-default">MongoDB</span>
              </div>
            </div>

            <div className="glass rounded-xl p-6 card-hover reveal" style={{ transitionDelay: '400ms' }}>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-cloud text-orange-400 mr-2"></i> Cloud & DevOps
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gradient-to-r from-orange-900/50 to-orange-800/50 text-orange-200 rounded-full text-sm border border-orange-500/50 hover:border-orange-400 transition cursor-default">AWS EC2</span>
                <span className="px-4 py-2 bg-gradient-to-r from-orange-900/50 to-orange-800/50 text-orange-200 rounded-full text-sm border border-orange-500/50 hover:border-orange-400 transition cursor-default">AWS S3</span>
                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm border border-secondary/30 hover:border-secondary transition cursor-default">Docker</span>
                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm border border-secondary/30 hover:border-secondary transition cursor-default">CI/CD</span>
              </div>
            </div>

            <div className="glass rounded-xl p-6 card-hover reveal" style={{ transitionDelay: '500ms' }}>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-sitemap text-purple-400 mr-2"></i> Architecture
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center p-2 bg-slate-800/30 rounded hover:bg-slate-700 transition">
                  <i className="fas fa-cube text-primary mr-2"></i> Clean Architecture
                </div>
                <div className="flex items-center p-2 bg-slate-800/30 rounded hover:bg-slate-700 transition">
                  <i className="fas fa-cube text-primary mr-2"></i> RESTful APIs Design
                </div>
                <div className="flex items-center p-2 bg-slate-800/30 rounded hover:bg-slate-700 transition">
                  <i className="fas fa-cube text-primary mr-2"></i> Repository Pattern
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6 card-hover border-2 border-secondary/30 reveal shadow-[0_0_15px_rgba(99,102,241,0.2)]" style={{ transitionDelay: '600ms' }}>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-graduation-cap text-yellow-400 mr-2 animate-bounce"></i> Currently Learning
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center p-2 bg-secondary/10 rounded">
                  <i className="fas fa-book text-secondary mr-2"></i> Microservices with Spring Boot
                </div>
                <div className="flex items-center p-2 bg-secondary/10 rounded">
                  <i className="fas fa-book text-secondary mr-2"></i> Advanced System Design
                </div>
                <div className="flex items-center p-2 bg-secondary/10 rounded">
                  <i className="fas fa-book text-secondary mr-2"></i> Event Sourcing with Kafka
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal">
          <h3 className="text-2xl font-bold mb-8 text-center text-secondary">
            <i className="fas fa-users mr-2"></i>Soft Skills & Languages
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass rounded-xl p-6 card-hover text-center reveal" style={{ transitionDelay: '100ms' }}>
              <div className="text-4xl mb-3 transform hover:scale-125 transition-transform cursor-default">🗣️</div>
              <h4 className="font-semibold mb-2">English</h4>
              <p className="text-sm text-slate-400">TOEIC 650+ / Fluent</p>
            </div>
            <div className="glass rounded-xl p-6 card-hover text-center reveal" style={{ transitionDelay: '200ms' }}>
              <div className="text-4xl mb-3 transform hover:scale-125 transition-transform cursor-default">🤝</div>
              <h4 className="font-semibold mb-2">Teamwork</h4>
              <p className="text-sm text-slate-400">Collaborative Spirit</p>
            </div>
            <div className="glass rounded-xl p-6 card-hover text-center reveal" style={{ transitionDelay: '300ms' }}>
              <div className="text-4xl mb-3 transform hover:scale-125 transition-transform cursor-default">🧩</div>
              <h4 className="font-semibold mb-2">Problem Solving</h4>
              <p className="text-sm text-slate-400">Critical Thinking</p>
            </div>
            <div className="glass rounded-xl p-6 card-hover text-center reveal" style={{ transitionDelay: '400ms' }}>
              <div className="text-4xl mb-3 transform hover:scale-125 transition-transform cursor-default">📚</div>
              <h4 className="font-semibold mb-2">Fast Learner</h4>
              <p className="text-sm text-slate-400">Always Growing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
