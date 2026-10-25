import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const projectsData = [
  {
    id: 2,
    title: "RideBook",
    tag: "Distributed Backend & Real-time Matching",
    tagColor: "text-amber-500 bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20",
    image: "/assets/images/ridebook.png",
    desc: "Backend architecture for an online ride-booking platform. Engineered to support real-time GPS tracking, smart driver-passenger matching algorithms, and secure payment processing.",
    techs: ["Spring Boot", "Redis", "Socket.io", "PostgreSQL", "Docker"],
    link: "https://github.com/Tinh0804/RideBook",
    demo: "https://ridebook.tinhlelaptrinh.id.vn"
  },
  {
    id: 1,
    title: "Real-time Auction Platform",
    tag: "Flagship Real-time Architecture",
    tagColor: "text-rose-500 bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/20",
    image: "/assets/images/auctionplatform.png",
    desc: "A high-performance real-time online auction system. Capable of handling continuous live bidding, millisecond-precision countdowns, and instant broadcast of auction results.",
    techs: ["Spring Boot", "Socket.io", "Redis", "PostgreSQL"],
    link: "https://github.com/Tinh0804/Auction",
    demo: "https://auctionplatform.tinhlelaptrinh.id.vn"
  },
  {
    id: 3,
    title: "E-Commerce Microservices",
    tag: "Cloud Microservices",
    tagColor: "text-sky-500 bg-sky-50 dark:bg-sky-500/10 border-sky-200 dark:border-sky-500/20",
    image: "/assets/images/ecommerce.png",
    desc: "An e-commerce platform based on a highly scalable microservices architecture. It encompasses secure authentication, dynamic product catalogs, and robust order management systems.",
    techs: ["Spring Boot", "Docker", "MongoDB", "Eureka"],
    link: "https://github.com/Tinh0804/E-Commerce"
  },
  {
    id: 4,
    title: "English Learning App",
    tag: "Fullstack & AI",
    tagColor: "text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20",
    image: "/assets/images/learninglanguage.png",
    desc: "Cross-platform English learning application built on a gamification model. Features include real-time progress tracking, a virtual shop system, and AI-driven learning support.",
    techs: [".NET Core", "SQL Server", "SignalR", "AI APIs"],
    link: "https://github.com/Tinh0804/Web_Advance"
  }
];

const Projects = () => {
  const { t } = useTranslation();
  const primaryProject = projectsData[0]; // 1. RideBook (Top Priority)
  const secondaryProject = projectsData[1]; // 2. Real-time Auction Platform
  const secondaryGrid = [projectsData[2], projectsData[3]]; // E-Commerce & English Learning App

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-slate-50 dark:bg-[#09090b] transition-colors duration-300 overflow-hidden">
      
      {/* Subtle Hairline Section Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 pointer-events-none">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-6 md:pt-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 mb-4 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            <span className="text-slate-600 dark:text-zinc-400 font-mono text-xs uppercase tracking-wider font-semibold">{t('projects.subtitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
            {t('projects.title1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-sky-400 dark:to-indigo-400">{t('projects.title2')}</span>
          </h2>
        </motion.div>

        {/* 1. TOP PRIORITY SPOTLIGHT: RideBook */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 p-4 sm:p-6 md:p-10 shadow-sm dark:shadow-none overflow-hidden relative group hover:border-amber-400/30 transition-colors"
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            
            {/* Visual Preview */}
            <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden bg-slate-100 dark:bg-black/40 aspect-[16/10] border border-slate-200/60 dark:border-white/5 relative group/img">
              <img 
                src={primaryProject.image} 
                alt={primaryProject.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Live System
              </div>
            </div>

            {/* Content Details */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold border mb-4 w-max ${primaryProject.tagColor}`}>
                {primaryProject.tag}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-4">
                {t(`projects.items.${primaryProject.id}.title`, primaryProject.title)}
              </h3>

              <p className="text-slate-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed mb-6 font-light">
                {t(`projects.items.${primaryProject.id}.desc`, primaryProject.desc)}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {primaryProject.techs.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                {primaryProject.demo && (
                  <a 
                    href={primaryProject.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-full sm:w-auto justify-center flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-medium transition-all hover:scale-105 shadow-md shadow-sky-500/20 text-sm"
                  >
                    {t('projects.livePreview')}
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
                  </a>
                )}
                <a 
                  href={primaryProject.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full sm:w-auto justify-center flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white rounded-full font-medium transition-all hover:scale-105 border border-slate-200/60 dark:border-white/10 text-sm"
                >
                  <i className="fa-brands fa-github text-base"></i>
                  {t('projects.sourceCode')}
                </a>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 2. SECONDARY PRIORITY SPOTLIGHT: Real-time Auction Platform (Reversed Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 p-4 sm:p-6 md:p-10 shadow-sm dark:shadow-none overflow-hidden relative group hover:border-rose-400/30 transition-colors"
        >
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center">
            
            {/* Visual Preview */}
            <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden bg-slate-100 dark:bg-black/40 aspect-[16/10] border border-slate-200/60 dark:border-white/5 relative group/img">
              <img 
                src={secondaryProject.image} 
                alt={secondaryProject.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Live System
              </div>
            </div>

            {/* Content Details */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold border mb-4 w-max ${secondaryProject.tagColor}`}>
                {secondaryProject.tag}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-4">
                {t(`projects.items.${secondaryProject.id}.title`, secondaryProject.title)}
              </h3>

              <p className="text-slate-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed mb-6 font-light">
                {t(`projects.items.${secondaryProject.id}.desc`, secondaryProject.desc)}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {secondaryProject.techs.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                {secondaryProject.demo && (
                  <a 
                    href={secondaryProject.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-full sm:w-auto justify-center flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-medium transition-all hover:scale-105 shadow-md shadow-sky-500/20 text-sm"
                  >
                    {t('projects.livePreview')}
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
                  </a>
                )}
                <a 
                  href={secondaryProject.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full sm:w-auto justify-center flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white rounded-full font-medium transition-all hover:scale-105 border border-slate-200/60 dark:border-white/10 text-sm"
                >
                  <i className="fa-brands fa-github text-base"></i>
                  {t('projects.sourceCode')}
                </a>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 3. BALANCED 2-COLUMN GRID (E-Commerce & English Learning App) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryGrid.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 p-5 sm:p-6 md:p-8 shadow-sm dark:shadow-none flex flex-col justify-between group hover:border-sky-400/30 transition-colors"
            >
              <div>
                <div className="rounded-2xl overflow-hidden bg-slate-100 dark:bg-black/40 aspect-[16/10] mb-6 border border-slate-200/60 dark:border-white/5 relative group/item">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/item:scale-105"
                  />
                </div>

                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold border mb-3 w-max ${project.tagColor}`}>
                  {project.tag}
                </div>

                <h3 className="text-xl md:text-2xl font-bold font-display text-slate-900 dark:text-white mb-3">
                  {t(`projects.items.${project.id}.title`, project.title)}
                </h3>

                <p className="text-slate-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-6 font-light">
                  {t(`projects.items.${project.id}.desc`, project.desc)}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full text-xs font-mono text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="w-full sm:w-auto justify-center flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-medium transition-all hover:scale-105 shadow-sm text-sm"
                    >
                      {t('projects.livePreview')}
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
                    </a>
                  )}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-full sm:w-auto justify-center flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white rounded-full font-medium transition-all hover:scale-105 border border-slate-200/60 dark:border-white/10 text-sm"
                  >
                    <i className="fa-brands fa-github text-base"></i>
                    {t('projects.sourceCode')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;