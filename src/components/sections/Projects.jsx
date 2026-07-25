import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const projectsData = [
  {
    id: 1,
    title: "Real-time Auction Platform",
    isImage: true,
    icon: "/assets/images/auctionplatform.png",
    bgClass: "bg-gradient-to-br from-rose-500 to-pink-600",
    colorClass: "text-rose-500",
    desc: "A high-performance real-time online auction system. Capable of handling continuous live bidding, millisecond-precision countdowns, and instant broadcast of auction results.",
    techs: ["Spring Boot", "Socket.io", "Redis", "PostgreSQL"],
    link: "https://github.com/Tinh0804/Auction",
    demo: "https://auctionplatform.tinhlelaptrinh.id.vn"
  },
  {
    id: 2,
    title: "RideBook",
    isImage: true,
    icon: "/assets/images/ridebook.png",
    bgClass: "bg-gradient-to-br from-orange-400 to-rose-500",
    colorClass: "text-orange-500",
    desc: "Backend architecture for an online ride-booking platform. Engineered to support real-time GPS tracking, smart driver-passenger matching algorithms, and secure payment processing.",
    techs: ["Spring Boot", "Redis", "Socket.io", "PostgreSQL"],
    link: "https://github.com/Tinh0804/RideBook",
    demo: "https://ridebook.tinhlelaptrinh.id.vn"
  },
  {
    id: 3,
    title: "E-Commerce Microservices",
    isImage: true,
    icon: "/assets/images/ecommerce.png",
    bgClass: "bg-gradient-to-br from-blue-500 to-indigo-600",
    colorClass: "text-blue-500",
    desc: "An e-commerce platform based on a highly scalable microservices architecture. It encompasses secure authentication, dynamic product catalogs, and robust order management systems.",
    techs: ["Spring Boot", "Docker", "MongoDB", "Eureka"],
    link: "https://github.com/Tinh0804/E-Commerce"
  },
  {
    id: 4,
    title: "English Learning App",
    isImage: true,
    icon: "/assets/images/learninglanguage.png",
    bgClass: "bg-gradient-to-br from-emerald-400 to-teal-500",
    colorClass: "text-emerald-500",
    desc: "Cross-platform English learning application built on a gamification model. Features include real-time progress tracking, a virtual shop system, and AI-driven learning support.",
    techs: [".NET Core", "SQL Server", "SignalR", "AI APIs"],
    link: "https://github.com/Tinh0804/Web_Advance"
  }
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  
  // Create a parallax scroll effect for the image/graphic
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-20 items-center`}
    >
      {/* Visual / Image Container */}
      <div className="w-full lg:w-1/2 relative group rounded-[2rem] overflow-hidden bg-zinc-100 dark:bg-zinc-900/50 aspect-[4/3] md:aspect-[16/10] shadow-xl border border-zinc-200/60 dark:border-white/10 isolate cursor-pointer transition-colors duration-300">
        
        {/* Overlay that reveals on hover */}
        <div className="absolute inset-0 bg-zinc-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

        <motion.div className="w-full h-full relative origin-center flex items-center justify-center p-2 md:p-4">
          {project.isImage ? (
            <img 
              src={project.icon} 
              alt={project.title} 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out rounded-xl"
              onError={(e) => {
                // Fallback if image doesn't exist to prevent ugly broken images
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : (
            <div className={`w-full h-full flex items-center justify-center ${project.bgClass} group-hover:scale-105 transition-transform duration-700 ease-out`}>
              <span className="text-8xl drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500">{project.icon}</span>
            </div>
          )}
          {/* Fallback container if img fails */}
          <div style={{ display: 'none' }} className={`absolute inset-0 flex items-center justify-center ${project.bgClass} group-hover:scale-105 transition-transform duration-700 ease-out`}>
             <span className="text-6xl text-white font-bold opacity-50">{project.title.charAt(0)}</span>
          </div>
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-4">
          <span className={`font-mono text-sm font-bold uppercase tracking-widest ${project.colorClass}`}>
            0{index + 1}
          </span>
          <div className="h-[1px] w-12 bg-zinc-200 dark:bg-white/10"></div>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6 font-display">
          {project.title}
        </h3>
        
        <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed mb-8">
          {project.desc}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          {project.techs.map((tech, i) => (
            <span 
              key={i} 
              className="px-4 py-2 bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 rounded-full text-sm font-medium hover:bg-zinc-100 dark:hover:bg-white/10 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Live Preview
              <i className="fa-solid fa-arrow-up-right-from-square text-sm ml-1"></i>
            </a>
          )}
          <a 
            href={project.link || "#"} 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 rounded-full font-medium hover:bg-zinc-50 dark:hover:bg-white/10 hover:text-zinc-900 dark:hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <i className="fa-brands fa-github text-lg"></i>
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-white dark:bg-[#050505] transition-colors duration-300 overflow-hidden">
      
      {/* Wave Divider Pointing Up from the previous section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0 rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[120px]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-slate-50 dark:fill-white/[0.12] transition-colors duration-300" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" className="fill-slate-50 dark:fill-white/[0.12] transition-colors duration-300" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-slate-50 dark:fill-white/[0.12] transition-colors duration-300"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-10 md:pt-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-32 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-zinc-300 dark:bg-sky-500/30"></div>
            <span className="text-zinc-500 dark:text-sky-500 font-mono text-sm uppercase tracking-widest">Showcase</span>
            <div className="h-[1px] w-12 bg-zinc-300 dark:bg-sky-500/30"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-zinc-900 dark:text-white">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">Works.</span>
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col gap-24 md:gap-40">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;