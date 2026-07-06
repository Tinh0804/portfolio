import React from 'react';

// Chuyển data vào mảng để dễ dàng quản lý và map ra giao diện
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Microservices",
    isImage: false,
    icon: "🛒",
    bgGradient: "from-primary/20 to-secondary/20",
    hoverColor: "group-hover:text-primary",
    desc: "An e-commerce platform based on microservices architecture using Spring Boot, including authentication, product catalog, and order management.",
    techs: [
      { name: "Spring Boot", classes: "bg-primary/10 text-primary border-primary/30" },
      { name: "Docker", classes: "bg-primary/10 text-primary border-primary/30" },
      { name: "MongoDB", classes: "bg-primary/10 text-primary border-primary/30" }
    ],
    link: "https://github.com/Tinh0804/E-Commerce",
    linkColor: "text-primary hover:text-secondary"
  },
  {
    id: 2,
    title: "English Learning App",
    isImage: true,
    icon: "/assets/images/learninglanguage.png",
    bgGradient: "from-green-400/20 to-blue-500/20",
    hoverColor: "group-hover:text-secondary",
    desc: "Cross-platform English learning app following a Gamification model. Integrated with AI for learning support, shop system, and progress tracking.",
    techs: [
      { name: ".NET Core", classes: "bg-secondary/10 text-secondary border-secondary/30" },
      { name: "SQL Server", classes: "bg-secondary/10 text-secondary border-secondary/30" },
      { name: "SignalR", classes: "bg-secondary/10 text-secondary border-secondary/30" },
      { name: "AI API", classes: "bg-purple-500/10 text-purple-400 border-purple-500/30" }
    ],
    link: "https://github.com/Tinh0804/Web_Advance",
    linkColor: "text-secondary hover:text-primary"
  },
  {
    id: 3,
    title: "RideBook - Ride Booking",
    isImage: true,
    icon: "/assets/images/ridebook.png",
    bgGradient: "from-orange-500/20 to-yellow-500/20",
    hoverColor: "group-hover:text-yellow-400",
    desc: "Backend for an online ride-booking system. Features real-time tracking, smart matching between drivers and passengers, and payment processing.",
    techs: [
      { name: "Spring Boot", classes: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" },
      { name: "Redis", classes: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" },
      { name: "Socket.io", classes: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" },
      { name: "SQL Server", classes: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }
    ],
    link: "https://github.com/Tinh0804/RideBook",
    demo: "https://ridebook.tinhlelaptrinh.id.vn",
    linkColor: "text-yellow-400 hover:text-primary"
  },
  {
    id: 4,
    title: "Real-time Auction Platform",
    isImage: false,
    icon: "🔨",
    bgGradient: "from-rose-500/20 to-pink-500/20",
    hoverColor: "group-hover:text-rose-400",
    desc: "Real-time online auction system. Supports continuous bidding, auction countdown, and instant result updates without delay.",
    techs: [
      { name: "Spring boot", classes: "bg-rose-500/10 text-rose-400 border-rose-500/30" },
      { name: "Socket.io", classes: "bg-rose-500/10 text-rose-400 border-rose-500/30" },
      { name: "Redis", classes: "bg-rose-500/10 text-rose-400 border-rose-500/30" },
      { name: "PostgreSQL", classes: "bg-rose-500/10 text-rose-400 border-rose-500/30" }
    ],
    link: "https://github.com/Tinh0804/Auction", // Đổi lại link Github thực tế của bạn
    demo: "https://auctionplatform.tinhlelaptrinh.id.vn",
    linkColor: "text-rose-400 hover:text-pink-400"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 px-4 overflow-hidden">
      {/* CSS tích hợp cho animation chạy chữ (Marquee) */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          /* Dừng hiệu ứng cuộn khi di chuột vào */
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 reveal">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        {/* Container cho hiệu ứng Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-8 pb-8 px-4">
            
            {/* Nhân đôi danh sách project để tạo vòng lặp vô tận trơn tru */}
            {[...projectsData, ...projectsData].map((project, index) => (
              <div 
                key={index} 
                className="w-[320px] md:w-[400px] shrink-0 glass rounded-2xl overflow-hidden card-hover group"
              >
                <div className={`h-48 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center text-6xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {project.isImage ? (
                    <img src={project.icon} alt={project.title} className="group-hover:scale-110 transition-transform duration-500 object-cover h-full w-full opacity-90 group-hover:opacity-100" />
                  ) : (
                    <span className="group-hover:scale-125 transition-transform duration-500">{project.icon}</span>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${project.hoverColor} transition`}>
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 h-[60px] content-start">
                    {project.techs.map((tech, i) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-xs border ${tech.classes}`}>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className={`interactive transition flex items-center w-max ${project.linkColor}`}>
                        Live Demo <i className="fas fa-external-link-alt ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"></i>
                      </a>
                    )}
                    <a href={project.github || project.link || "#"} target="_blank" rel="noreferrer" className={`interactive transition flex items-center w-max text-slate-400 hover:text-white ${!project.demo ? 'ml-auto' : ''}`}>
                      <i className="fab fa-github text-lg mr-2"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;