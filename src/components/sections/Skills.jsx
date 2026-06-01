import React from 'react';
import TechMarquee from './TechMarquee';

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
          
          <div className="mb-12 reveal" style={{ transitionDelay: '50ms' }}>
            <TechMarquee />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Languages */}
            <div className="glass rounded-xl p-6 card-hover reveal" style={{ transitionDelay: '100ms' }}>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-laptop-code text-primary mr-2"></i> Languages
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="flex items-center">
                      <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" 
                        alt="Java" 
                        className="w-5 h-5 mr-2" 
                      />
                      Java
                    </span>
                    <span className="text-primary">90%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full skill-bar" style={{ width: '0%' }} data-width="90%"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="flex items-center">
                      <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" 
                        alt="C#" 
                        className="w-5 h-5 mr-2" 
                      />
                      C#
                    </span>
                    <span className="text-primary">80%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full skill-bar" style={{ width: '0%' }} data-width="80%"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="flex items-center">
                      <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
                        alt="Python" 
                        className="w-5 h-5 mr-2" 
                      />
                      Python
                    </span>
                    <span className="text-primary">85%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full skill-bar" style={{ width: '0%' }} data-width="85%"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="glass rounded-xl p-6 card-hover reveal" style={{ transitionDelay: '200ms' }}>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-layer-group text-secondary mr-2"></i> Frameworks
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-slate-800/50 rounded hover:bg-slate-700/50 transition cursor-default">
                  <span className="flex items-center">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" 
                      alt="Spring Boot" 
                      className="w-5 h-5 mr-2" 
                    />
                    Spring Boot 3
                  </span>
                  <i className="fas fa-star text-yellow-400"></i>
                </div>
                <div className="flex items-center justify-between p-2 bg-slate-800/50 rounded hover:bg-slate-700/50 transition cursor-default">
                  <span className="flex items-center">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" 
                      alt="Spring MVC" 
                      className="w-5 h-5 mr-2" 
                    />
                    Spring MVC
                  </span>
                  <i className="fas fa-star text-yellow-400"></i>
                </div>
                <div className="flex items-center justify-between p-2 bg-slate-800/50 rounded hover:bg-slate-700/50 transition cursor-default">
                  <span className="flex items-center">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" 
                      alt=".NET Core" 
                      className="w-5 h-5 mr-2" 
                    />
                    .NET Core 8
                  </span>
                  <i className="fas fa-star text-yellow-400"></i>
                </div>
              </div>
            </div>

            {/* Databases */}
            <div className="glass rounded-xl p-6 card-hover reveal" style={{ transitionDelay: '300ms' }}>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-database text-green-400 mr-2"></i> Databases
              </h4>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center p-2 bg-slate-800/50 rounded hover:bg-slate-700/50 transition cursor-default">
                  <span className="flex items-center">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" 
                      alt="SQL Server" 
                      className="w-5 h-5 mr-2" 
                    />
                    SQL Server
                  </span>
                </div>
                <div className="flex items-center p-2 bg-slate-800/50 rounded hover:bg-slate-700/50 transition cursor-default">
                  <span className="flex items-center">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" 
                      alt="PostgreSQL" 
                      className="w-5 h-5 mr-2" 
                    />
                    PostgreSQL
                  </span>
                </div>
                <div className="flex items-center p-2 bg-slate-800/50 rounded hover:bg-slate-700/50 transition cursor-default">
                  <span className="flex items-center">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" 
                      alt="MongoDB" 
                      className="w-5 h-5 mr-2" 
                    />
                    MongoDB
                  </span>
                </div>
                <div className="flex items-center p-2 bg-slate-800/50 rounded hover:bg-slate-700/50 transition cursor-default">
                  <span className="flex items-center">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" 
                      alt="Redis" 
                      className="w-5 h-5 mr-2" 
                    />
                    Redis
                  </span>
                </div>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="glass rounded-xl p-6 card-hover reveal" style={{ transitionDelay: '400ms' }}>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-cloud text-orange-400 mr-2"></i> Cloud & DevOps
              </h4>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center p-2 bg-slate-800/50 rounded hover:bg-slate-700/50 transition cursor-default">
                  <span className="flex items-center">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" 
                      alt="AWS" 
                      className="w-5 h-5 mr-2" 
                    />
                    AWS EC2/S3
                  </span>
                </div>
                <div className="flex items-center p-2 bg-slate-800/50 rounded hover:bg-slate-700/50 transition cursor-default">
                  <span className="flex items-center">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" 
                      alt="Docker" 
                      className="w-5 h-5 mr-2" 
                    />
                    Docker
                  </span>
                </div>
                <div className="flex items-center p-2 bg-slate-800/50 rounded hover:bg-slate-700/50 transition cursor-default">
                  <span className="flex items-center">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" 
                      alt="CI/CD" 
                      className="w-5 h-5 mr-2" 
                    />
                    CI/CD
                  </span>
                </div>
              </div>
            </div>

            {/* Architecture */}
            <div className="glass rounded-xl p-6 card-hover reveal" style={{ transitionDelay: '500ms' }}>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-sitemap text-purple-400 mr-2"></i> Architecture
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center p-2 bg-slate-800/30 rounded hover:bg-slate-700 transition">
                 <i className="fas fa-network-wired text-primary mr-2"></i> Microservices
                </div>
                <div className="flex items-center p-2 bg-slate-800/30 rounded hover:bg-slate-700 transition">
                  <i className="fas fa-cube text-primary mr-2"></i> Clean Architecture
                </div>
                <div className="flex items-center p-2 bg-slate-800/30 rounded hover:bg-slate-700 transition">
                  <i className="fas fa-layer-group text-primary mr-2"></i> 3 Tier Pattern
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="glass rounded-xl p-6 card-hover reveal" style={{ transitionDelay: '600ms' }}>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-tools text-cyan-400 mr-2"></i> Tools
              </h4>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center p-2 bg-slate-800/50 rounded hover:bg-slate-700/50 transition cursor-default">
                  <span className="flex items-center">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" 
                      alt="Git" 
                      className="w-5 h-5 mr-2" 
                    />
                    Git
                  </span>
                </div>
                <div className="flex items-center p-2 bg-slate-800/50 rounded hover:bg-slate-700/50 transition cursor-default">
                  <span className="flex items-center">
                    <i className="fab fa-github text-xl mr-2 text-white"></i>
                    GitHub
                  </span>
                </div>
                <div className="flex items-center p-2 bg-slate-800/50 rounded hover:bg-slate-700/50 transition cursor-default">
                  <span className="flex items-center">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" 
                      alt="Postman" 
                      className="w-5 h-5 mr-2" 
                    />
                    Postman
                  </span>
                </div>
                <div className="flex items-center p-2 bg-slate-800/50 rounded hover:bg-slate-700/50 transition cursor-default">
                  <span className="flex items-center">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" 
                      alt="IntelliJ IDEA" 
                      className="w-5 h-5 mr-2" 
                    />
                    IntelliJ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="reveal">
          <h3 className="text-2xl font-bold mb-8 text-center text-secondary">
            <i className="fas fa-users mr-2"></i>Soft Skills & Languages
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: English */}
            <div className="glass rounded-xl p-6 card-hover group text-center reveal" style={{ transitionDelay: '100ms' }}>
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full flex items-center justify-center mb-4 border border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300 cursor-default">🗣️</span>
              </div>
              <h4 className="font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">English</h4>
              <p className="text-sm font-medium text-slate-400">TOEIC 650+ / Fluent</p>
            </div>

            {/* Card 2: Teamwork */}
            <div className="glass rounded-xl p-6 card-hover group text-center reveal" style={{ transitionDelay: '200ms' }}>
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full flex items-center justify-center mb-4 border border-green-500/20 group-hover:border-green-500/50 transition-colors">
                <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300 cursor-default">🤝</span>
              </div>
              <h4 className="font-bold text-lg mb-1 group-hover:text-green-400 transition-colors">Teamwork</h4>
              <p className="text-sm font-medium text-slate-400">Collaborative Spirit</p>
            </div>

            {/* Card 3: Problem Solving */}
            <div className="glass rounded-xl p-6 card-hover group text-center reveal" style={{ transitionDelay: '300ms' }}>
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full flex items-center justify-center mb-4 border border-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300 cursor-default">🧩</span>
              </div>
              <h4 className="font-bold text-lg mb-1 group-hover:text-purple-400 transition-colors">Problem Solving</h4>
              <p className="text-sm font-medium text-slate-400">Critical Thinking</p>
            </div>

            {/* Card 4: Fast Learner */}
            <div className="glass rounded-xl p-6 card-hover group text-center reveal" style={{ transitionDelay: '400ms' }}>
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full flex items-center justify-center mb-4 border border-orange-500/20 group-hover:border-orange-500/50 transition-colors">
                <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300 cursor-default">📚</span>
              </div>
              <h4 className="font-bold text-lg mb-1 group-hover:text-orange-400 transition-colors">Fast Learner</h4>
              <p className="text-sm font-medium text-slate-400">Always Growing</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
