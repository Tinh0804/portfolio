import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Microservices",
    isImage: true,
    icon: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200", // Server / Data network
    bgClass: "bg-gradient-to-br from-blue-500 to-indigo-600",
    colorClass: "text-blue-500",
    desc: "An e-commerce platform based on a highly scalable microservices architecture. It encompasses secure authentication, dynamic product catalogs, and robust order management systems.",
    techs: ["Spring Boot", "Docker", "MongoDB", "Eureka"],
    link: "https://github.com/Tinh0804/E-Commerce"
  },
  {
    id: 2,
    title: "English Learning App",
    isImage: true,
    icon: "/assets/images/learninglanguage.png",
    bgClass: "bg-gradient-to-br from-emerald-400 to-teal-500",
    colorClass: "text-emerald-500",
    desc: "Cross-platform English learning application built on a gamification model. Features include real-time progress tracking, a virtual shop system, and AI-driven learning support.",
    techs: [".NET Core", "SQL Server", "SignalR", "AI APIs"],
    link: "https://github.com/Tinh0804/Web_Advance"
  },
  {
    id: 3,
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
    id: 4,
    title: "Real-time Auction Platform",
    isImage: true,
    icon: "/assets/images/auctionplatform.png",
    bgClass: "bg-gradient-to-br from-rose-500 to-pink-600",
    colorClass: "text-rose-500",
    desc: "A high-performance real-time online auction system. Capable of handling continuous live bidding, millisecond-precision countdowns, and instant broadcast of auction results.",
    techs: ["Spring Boot", "Socket.io", "Redis", "PostgreSQL"],
    link: "https://github.com/Tinh0804/Auction",
    demo: "https://auctionplatform.tinhlelaptrinh.id.vn"
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
      <div className="w-full lg:w-1/2 relative group rounded-[2rem] overflow-hidden bg-zinc-100 aspect-[4/3] md:aspect-[16/10] shadow-xl border border-zinc-200/60 isolate cursor-pointer">
        
        {/* Overlay that reveals on hover */}
        <div className="absolute inset-0 bg-zinc-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

        <motion.div style={{ y: imageY }} className="w-full h-[120%] -top-[10%] relative origin-center">
          {project.isImage ? (
            <img 
              src={project.icon} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
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
          <div className="h-[1px] w-12 bg-zinc-200"></div>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 font-display">
          {project.title}
        </h3>
        
        <p className="text-zinc-500 text-lg leading-relaxed mb-8">
          {project.desc}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          {project.techs.map((tech, i) => (
            <span 
              key={i} 
              className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-zinc-600 rounded-full text-sm font-medium hover:bg-zinc-100 hover:text-zinc-900 transition-colors cursor-default"
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
              className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Live Preview
              <i className="fa-solid fa-arrow-up-right-from-square text-sm ml-1"></i>
            </a>
          )}
          <a 
            href={project.link || "#"} 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 px-6 py-3 bg-white border border-zinc-200 text-zinc-700 rounded-full font-medium hover:bg-zinc-50 hover:text-zinc-900 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
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
    <section id="projects" className="relative py-24 md:py-32 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-32 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-zinc-300"></div>
            <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Showcase</span>
            <div className="h-[1px] w-12 bg-zinc-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-zinc-900">
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