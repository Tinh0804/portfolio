import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import TechMarquee from './TechMarquee';

const TECH_DETAILS = {
  "Java": {
    role: "Core Language",
    experience: "3+ Years",
    useCaseEn: "High-performance distributed microservices, multi-threaded task orchestration, and domain-driven design.",
    useCaseVi: "Microservices phân tán hiệu năng cao, điều phối tác vụ đa luồng và thiết kế theo domain.",
    badge: "Core Expertise",
    color: "#f89820"
  },
  "C#": {
    role: "Backend Language",
    experience: "Enterprise Systems",
    useCaseEn: "Clean Architecture REST APIs, Entity Framework Core query tuning, and enterprise service integrations.",
    useCaseVi: "REST APIs theo Clean Architecture, tối ưu truy vấn Entity Framework và tích hợp dịch vụ doanh nghiệp.",
    badge: "Proficient",
    color: "#68217a"
  },
  "Python": {
    role: "Scripting & Automation",
    experience: "Automation & Data",
    useCaseEn: "Automated ETL pipelines, data processing scripts, and AI/LLM model API integration.",
    useCaseVi: "Pipeline xử lý dữ liệu ETL, kịch bản tự động hóa và tích hợp API các mô hình AI/LLM.",
    badge: "Intermediate",
    color: "#3776ab"
  },
  "SQL Server": {
    role: "Relational DB",
    experience: "Enterprise RDBMS",
    useCaseEn: "Complex stored procedures, execution plan analysis, index tuning, and ACID transaction safety.",
    useCaseVi: "Stored procedures phức tạp, phân tích execution plan, đánh index và bảo đảm toàn vẹn giao dịch ACID.",
    badge: "Advanced",
    color: "#cc292b"
  },
  "PostgreSQL": {
    role: "Primary RDBMS",
    experience: "Production Core",
    useCaseEn: "High-concurrency data persistence, complex JSONB queries, connection pooling, and B-Tree indexing.",
    useCaseVi: "Lưu trữ dữ liệu chịu tải cao, truy vấn JSONB, cấu hình connection pool và tối ưu chỉ mục B-Tree.",
    badge: "Production",
    color: "#336791"
  },
  "MongoDB": {
    role: "NoSQL Database",
    experience: "Document Store",
    useCaseEn: "Flexible document store for product catalogs and high-throughput read/write in microservices.",
    useCaseVi: "Lưu trữ tài liệu linh hoạt cho danh mục sản phẩm và tốc độ đọc/ghi cao trong kiến trúc microservices.",
    badge: "Proficient",
    color: "#47a248"
  },
  "Redis": {
    role: "In-Memory Store",
    experience: "Cache & Pub/Sub",
    useCaseEn: "Real-time auction cache, Pub/Sub messaging queues, and geospatial driver-passenger matching (Redis Geo).",
    useCaseVi: "Caching phiên đấu giá trực tiếp, hàng đợi Pub/Sub và tính toán vị trí tài xế theo tọa độ (Redis Geo).",
    badge: "High Impact",
    color: "#dc382d"
  },
  "Spring Boot / Security / Data": {
    role: "Backend Framework",
    experience: "Production Core",
    useCaseEn: "Robust REST microservices, JWT authentication, Spring Security filters, and Spring Data JPA repositories.",
    useCaseVi: "Microservices RESTful, phân quyền bảo mật JWT qua Spring Security và quản trị dữ liệu với Spring Data JPA.",
    badge: "Core Stack",
    color: "#6db33f"
  },
  ".NET Core": {
    role: "Backend Framework",
    experience: "High Performance",
    useCaseEn: "High-throughput API endpoints, SignalR real-time websocket connections, and cross-platform backend services.",
    useCaseVi: "API tốc độ cao, tích hợp kết nối thời gian thực SignalR và các dịch vụ backend đa nền tảng.",
    badge: "Advanced",
    color: "#512bd4"
  },
  "ReactJS": {
    role: "Frontend Framework",
    experience: "Dynamic SPAs",
    useCaseEn: "Reactive component architecture, custom hook abstractions, dynamic state management, and responsive UX.",
    useCaseVi: "Kiến trúc component phản ứng, trừu tượng hóa custom hook, quản lý state và trải nghiệm người dùng mượt mà.",
    badge: "Proficient",
    color: "#61dafb"
  },
  "AWS": {
    role: "Cloud Platform",
    experience: "Cloud Deployments",
    useCaseEn: "Microservices deployed to EC2, secure media asset handling with S3, VPC security groups, and IAM roles.",
    useCaseVi: "Triển khai microservices lên EC2, lưu trữ media với S3, cấu hình mạng VPC và phân quyền bảo mật IAM.",
    badge: "Cloud Ready",
    color: "#ff9900"
  },
  "Docker": {
    role: "Containerization",
    experience: "DevOps & Containers",
    useCaseEn: "Multi-stage Dockerfiles for minimal image size, environment isolation, and multi-service Docker Compose.",
    useCaseVi: "Multi-stage build tối ưu kích thước image, cô lập môi trường và điều phối với Docker Compose.",
    badge: "Essential",
    color: "#0db7ed"
  },
  "GitHub": {
    role: "Version Control",
    experience: "Git Workflows",
    useCaseEn: "Git-flow branching strategies, pull request peer reviews, release tagging, and team collaboration.",
    useCaseVi: "Mô hình phân nhánh Git-flow, kiểm duyệt mã nguồn qua Pull Request và phối hợp nhóm chuyên nghiệp.",
    badge: "Daily Tool",
    color: "#8b949e"
  },
  "CI/CD": {
    role: "Automation Pipeline",
    experience: "DevOps Automation",
    useCaseEn: "Automated linting, test suites execution, and automated deployment pipelines with GitHub Actions.",
    useCaseVi: "Tự động hóa kiểm thử mã nguồn, build Docker image và deploy tự động với GitHub Actions.",
    badge: "Automated",
    color: "#2088ff"
  }
};

const Skills = () => {
  const { t } = useTranslation();
  const [activeTech, setActiveTech] = useState(null);

  const handleTechClick = (name) => {
    setActiveTech(prev => prev === name ? null : name);
  };

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-slate-50 dark:bg-[#09090b] transition-colors duration-300">
      
      {/* Subtle Hairline Section Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 pointer-events-none">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 mb-4 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            <span className="text-slate-600 dark:text-zinc-400 font-mono text-xs uppercase tracking-wider font-semibold">{t('skills.subtitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
            {t('skills.title1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-sky-400 dark:to-indigo-400">{t('skills.title2')}</span>
          </h2>
        </motion.div>

        {/* Hyper-Modern Multi-Lane Marquee */}
        <div className="mb-20">
          <TechMarquee />
        </div>

        {/* Fully Responsive Bento Grid (Phones 1-col, iPad 2-col, Mac 3-col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Core Languages */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 lg:col-span-2 bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-2xl rounded-[32px] p-6 sm:p-8 md:p-12 relative group hover:border-sky-300 dark:hover:border-sky-500/30 transition-colors"
          >
            {/* Clipped background glowing orb */}
            <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none">
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-400/10 blur-[100px] rounded-full group-hover:bg-sky-400/20 transition-colors"></div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">{t('skills.coreLangs')}</h3>
                <p className="text-slate-500 dark:text-zinc-400 text-base md:text-lg max-w-md font-light">
                  {t('skills.coreLangsDesc')}
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 mt-8 sm:mt-12">
                <TechIcon folder="java" file="java-original.svg" name="Java" featured activeTech={activeTech} onClick={handleTechClick} />
                <TechIcon folder="csharp" file="csharp-original.svg" name="C#" featured activeTech={activeTech} onClick={handleTechClick} />
                <TechIcon folder="python" file="python-original.svg" name="Python" featured activeTech={activeTech} onClick={handleTechClick} />
              </div>
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-1 lg:col-span-1 bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-2xl rounded-[32px] p-6 sm:p-8 md:p-12 relative group hover:border-emerald-300 dark:hover:border-emerald-500/30 transition-colors"
          >
            <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-400/10 blur-[80px] rounded-full group-hover:bg-emerald-400/20 transition-colors"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('skills.databases')}</h3>
              <p className="text-slate-500 dark:text-zinc-400 mb-6 sm:mb-8 font-light text-sm md:text-base">{t('skills.databasesDesc')}</p>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <TechIcon folder="microsoftsqlserver" file="microsoftsqlserver-plain.svg" name="SQL Server" activeTech={activeTech} onClick={handleTechClick} />
                <TechIcon folder="postgresql" file="postgresql-original.svg" name="PostgreSQL" activeTech={activeTech} onClick={handleTechClick} />
                <TechIcon folder="mongodb" file="mongodb-original.svg" name="MongoDB" activeTech={activeTech} onClick={handleTechClick} />
                <TechIcon folder="redis" file="redis-original.svg" name="Redis" activeTech={activeTech} onClick={handleTechClick} />
              </div>
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-1 lg:col-span-1 bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-2xl rounded-[32px] p-6 sm:p-8 md:p-12 relative group hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-colors"
          >
            <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-400/10 blur-[80px] rounded-full group-hover:bg-indigo-400/20 transition-colors"></div>
            </div>
             
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('skills.frameworks')}</h3>
              <p className="text-slate-500 dark:text-zinc-400 mb-6 sm:mb-8 font-light text-sm md:text-base">{t('skills.frameworksDesc')}</p>
              
              <div className="flex flex-col gap-3 sm:gap-4">
                <TechRow folder="spring" file="spring-original.svg" name="Spring Boot / Security / Data" activeTech={activeTech} onClick={handleTechClick} />
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <TechRow folder="dotnetcore" file="dotnetcore-original.svg" name=".NET Core" activeTech={activeTech} onClick={handleTechClick} />
                  <TechRow folder="react" file="react-original.svg" name="ReactJS" activeTech={activeTech} onClick={handleTechClick} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cloud & DevOps */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 md:col-span-2 lg:col-span-2 bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-2xl rounded-[32px] p-6 sm:p-8 md:p-12 relative group hover:border-orange-300 dark:hover:border-orange-500/30 transition-colors"
          >
            <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-center h-full">
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">{t('skills.cloud')}</h3>
                <p className="text-slate-500 dark:text-zinc-400 text-base md:text-lg max-w-md font-light">
                  {t('skills.cloudDesc')}
                </p>
              </div>
              
              <div className="w-full md:w-1/2 flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
                <TechIcon folder="amazonwebservices" file="amazonwebservices-plain-wordmark.svg" name="AWS" isOld activeTech={activeTech} onClick={handleTechClick} />
                <TechIcon folder="docker" file="docker-original.svg" name="Docker" isOld activeTech={activeTech} onClick={handleTechClick} />
                <TechIcon folder="github" file="github-original.svg" name="GitHub" isOld invertInDark activeTech={activeTech} onClick={handleTechClick} />
                <TechIcon folder="githubactions" file="githubactions-original.svg" name="CI/CD" isOld activeTech={activeTech} onClick={handleTechClick} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Reusable micro-components for the Bento Grid with Micro Cyber Popover
const TechIcon = ({ folder, file, name, featured, isOld, invertInDark, activeTech, onClick }) => {
  const { i18n } = useTranslation();
  const isVi = i18n.language.startsWith('vi');
  const info = TECH_DETAILS[name];
  const isOpen = activeTech === name;
  const baseUrl = isOld 
    ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons" 
    : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
  
  return (
    <div 
      onClick={() => onClick && onClick(name)}
      className={`relative flex flex-col items-center justify-center gap-2.5 sm:gap-3 group/icon cursor-pointer select-none ${featured ? 'w-20 sm:w-24 h-20 sm:h-24' : 'w-14 sm:w-16 h-14 sm:h-16'}`}
    >
      
      {/* Micro Cyber Popover / Tooltip (Responsive max width & Touch Toggle support) */}
      {info && (
        <div className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-[min(260px,85vw)] p-3.5 rounded-2xl bg-slate-900/95 dark:bg-[#121217]/95 backdrop-blur-xl border border-slate-700/60 dark:border-white/15 shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-200 pointer-events-none z-50 text-left ${
          isOpen ? 'opacity-100 visible -translate-y-1' : 'opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible group-hover/icon:-translate-y-1'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="w-2 h-2 rounded-full shrink-0 animate-pulse" style={{ backgroundColor: info.color, boxShadow: `0 0 8px ${info.color}` }} />
              <span className="font-bold text-white text-xs tracking-tight truncate">{name}</span>
            </div>
            <span 
              className="px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wider font-semibold border shrink-0"
              style={{ borderColor: `${info.color}50`, color: info.color, backgroundColor: `${info.color}15` }}
            >
              {info.badge}
            </span>
          </div>

          {/* Subtitle / Role & Experience */}
          <div className="text-[10px] font-mono text-slate-400 dark:text-zinc-400 mb-2 uppercase tracking-wider">
            {info.role} • {info.experience}
          </div>

          {/* Real-World Use Case Description */}
          <p className="text-[11px] text-slate-300 dark:text-zinc-300 leading-relaxed font-light">
            {isVi ? info.useCaseVi : info.useCaseEn}
          </p>

          {/* Pointer Arrow */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-slate-900 dark:bg-[#121217] border-r border-b border-slate-700/60 dark:border-white/15"></div>
        </div>
      )}

      {/* Icon Card */}
      <div className={`bg-white dark:bg-white/5 border border-zinc-100 dark:border-white/10 flex items-center justify-center rounded-2xl shadow-sm dark:shadow-none transition-transform duration-300 group-hover/icon:scale-110 group-hover/icon:-translate-y-1 ${
        featured ? 'w-16 sm:w-20 h-16 sm:h-20 p-3 sm:p-4 border-zinc-200' : 'w-12 sm:w-14 h-12 sm:h-14 p-2.5 sm:p-3'
      }`}>
        <img 
          src={`${baseUrl}/${folder}/${file}`} 
          alt={name} 
          className={`w-full h-full object-contain drop-shadow-sm ${invertInDark ? 'dark:invert' : ''}`} 
        />
      </div>
      <span className={`font-medium ${featured ? 'text-sm sm:text-base' : 'text-[11px] sm:text-xs'} text-slate-600 dark:text-zinc-300 group-hover/icon:text-sky-500 dark:group-hover/icon:text-sky-400 transition-colors`}>
        {name}
      </span>
    </div>
  );
};

const TechRow = ({ folder, file, name, isOld, activeTech, onClick }) => {
  const { i18n } = useTranslation();
  const isVi = i18n.language.startsWith('vi');
  const info = TECH_DETAILS[name];
  const isOpen = activeTech === name;
  const baseUrl = isOld 
    ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons" 
    : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
    
  return (
    <div 
      onClick={() => onClick && onClick(name)}
      className="relative group/row cursor-pointer select-none"
    >
      
      {/* Micro Cyber Popover / Tooltip */}
      {info && (
        <div className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-[min(260px,85vw)] p-3.5 rounded-2xl bg-slate-900/95 dark:bg-[#121217]/95 backdrop-blur-xl border border-slate-700/60 dark:border-white/15 shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-200 pointer-events-none z-50 text-left ${
          isOpen ? 'opacity-100 visible -translate-y-1' : 'opacity-0 invisible group-hover/row:opacity-100 group-hover/row:visible group-hover/row:-translate-y-1'
        }`}>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="w-2 h-2 rounded-full shrink-0 animate-pulse" style={{ backgroundColor: info.color, boxShadow: `0 0 8px ${info.color}` }} />
              <span className="font-bold text-white text-xs tracking-tight truncate">{name}</span>
            </div>
            <span 
              className="px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wider font-semibold border shrink-0"
              style={{ borderColor: `${info.color}50`, color: info.color, backgroundColor: `${info.color}15` }}
            >
              {info.badge}
            </span>
          </div>

          <div className="text-[10px] font-mono text-slate-400 dark:text-zinc-400 mb-2 uppercase tracking-wider">
            {info.role} • {info.experience}
          </div>

          <p className="text-[11px] text-slate-300 dark:text-zinc-300 leading-relaxed font-light">
            {isVi ? info.useCaseVi : info.useCaseEn}
          </p>

          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-slate-900 dark:bg-[#121217] border-r border-b border-slate-700/60 dark:border-white/15"></div>
        </div>
      )}

      <div className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 bg-white dark:bg-white/5 border border-zinc-100 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:shadow-md group-hover/row:-translate-y-0.5 group-hover/row:border-sky-300 dark:group-hover/row:border-sky-500/30 transition-all">
        <div className="w-9 h-9 sm:w-10 sm:h-10 p-2 bg-zinc-50 dark:bg-white/10 rounded-lg flex items-center justify-center shrink-0">
          <img src={`${baseUrl}/${folder}/${file}`} alt={name} className="w-full h-full object-contain" />
        </div>
        <span className="font-semibold text-xs sm:text-sm md:text-base text-zinc-800 dark:text-white group-hover/row:text-sky-500 dark:group-hover/row:text-sky-400 transition-colors truncate">
          {name}
        </span>
      </div>
    </div>
  );
};

export default Skills;
