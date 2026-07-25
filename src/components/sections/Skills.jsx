import React from 'react';
import { motion } from 'motion/react';
import TechMarquee from './TechMarquee';

const Skills = () => {
  return (
    <section id="skills" className="relative pt-32 pb-32 overflow-hidden bg-slate-50">
      
      {/* Clean Multi-Layer SVG Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[120px]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#09090b" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#09090b" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#09090b"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col items-center text-center mt-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-sky-500"></div>
            <span className="text-sky-600 font-mono text-sm uppercase tracking-widest">Arsenal</span>
            <div className="h-[1px] w-12 bg-sky-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">Toolkit.</span>
          </h2>
        </motion.div>

        {/* Hyper-Modern Multi-Lane Marquee */}
        <div className="mb-24">
          <TechMarquee />
        </div>

        {/* Asymmetric Bento Grid (Modern SaaS Light Mode) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Core Languages (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50 rounded-[32px] p-8 md:p-12 relative overflow-hidden group hover:border-sky-300 transition-colors"
          >
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-400/10 blur-[100px] rounded-full group-hover:bg-sky-400/20 transition-colors"></div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Core Languages</h3>
                <p className="text-slate-500 text-lg max-w-md">
                  The primary tools I use to translate complex architecture into high-performance executable systems.
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-8 mt-12">
                <TechIcon folder="java" file="java-original.svg" name="Java" featured />
                <TechIcon folder="csharp" file="csharp-original.svg" name="C#" featured />
                <TechIcon folder="python" file="python-original.svg" name="Python" featured />
              </div>
            </div>
          </motion.div>

          {/* Databases (Spans 1 column, Tall) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50 rounded-[32px] p-8 md:p-12 relative overflow-hidden group hover:border-emerald-300 transition-colors"
          >
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-400/10 blur-[80px] rounded-full group-hover:bg-emerald-400/20 transition-colors"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Databases</h3>
              <p className="text-slate-500 mb-8">Designing robust relational schemas and ultra-fast cache layers.</p>
              
              <div className="grid grid-cols-2 gap-6">
                <TechIcon folder="microsoftsqlserver" file="microsoftsqlserver-plain.svg" name="SQL Server" />
                <TechIcon folder="postgresql" file="postgresql-original.svg" name="PostgreSQL" />
                <TechIcon folder="mongodb" file="mongodb-original.svg" name="MongoDB" />
                <TechIcon folder="redis" file="redis-original.svg" name="Redis" />
              </div>
            </div>
          </motion.div>

          {/* Frameworks (Spans 1 column) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50 rounded-[32px] p-8 md:p-12 relative overflow-hidden group hover:border-indigo-300 transition-colors"
          >
             <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-400/10 blur-[80px] rounded-full group-hover:bg-indigo-400/20 transition-colors"></div>
             
             <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Frameworks</h3>
              <p className="text-slate-500 mb-8">Rapid, secure enterprise scaling.</p>
              
              <div className="flex flex-col gap-4">
                <TechRow folder="spring" file="spring-original.svg" name="Spring Boot / Security" />
                <TechRow folder="dotnetcore" file="dotnetcore-original.svg" name=".NET Core 8" />
              </div>
            </div>
          </motion.div>

          {/* Cloud & DevOps (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-slate-900 border border-slate-800 shadow-xl rounded-[32px] p-8 md:p-12 relative overflow-hidden group hover:border-orange-500/50 transition-colors"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between items-center h-full">
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-2">Cloud & DevOps</h3>
                <p className="text-slate-400">
                  Deploying highly available distributed systems and automating the entire CI/CD pipeline.
                </p>
              </div>
              
              <div className="w-full md:w-1/2 flex flex-wrap justify-center md:justify-end gap-6">
                <TechIcon folder="amazonwebservices" file="amazonwebservices-original-wordmark.svg" name="AWS" isOld lightText />
                <TechIcon folder="docker" file="docker-original.svg" name="Docker" isOld lightText />
                <TechIcon folder="kubernetes" file="kubernetes-plain.svg" name="K8s" isOld lightText />
                <TechIcon folder="githubactions" file="githubactions-original.svg" name="CI/CD" isOld lightText />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Reusable micro-components for the Bento Grid
const TechIcon = ({ folder, file, name, featured, isOld, lightText }) => {
  const baseUrl = isOld 
    ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons" 
    : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
  
  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${featured ? 'w-24 h-24' : 'w-16 h-16'}`}>
      <div className={`bg-white border flex items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 hover:scale-110 hover:-translate-y-1 ${
        featured ? 'w-20 h-20 p-4 border-zinc-200' : 'w-14 h-14 p-3 border-zinc-100'
      }`}>
        <img src={`${baseUrl}/${folder}/${file}`} alt={name} className="w-full h-full object-contain drop-shadow-sm" />
      </div>
      <span className={`font-medium ${featured ? 'text-base' : 'text-xs'} ${lightText ? 'text-zinc-300' : 'text-zinc-600'}`}>{name}</span>
    </div>
  );
};

const TechRow = ({ folder, file, name, isOld }) => {
  const baseUrl = isOld 
    ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons" 
    : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
    
  return (
    <div className="flex items-center gap-4 p-4 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
      <div className="w-10 h-10 p-2 bg-zinc-50 rounded-lg flex items-center justify-center">
        <img src={`${baseUrl}/${folder}/${file}`} alt={name} className="w-full h-full object-contain" />
      </div>
      <span className="font-semibold text-zinc-800">{name}</span>
    </div>
  );
};

export default Skills;
