import React from 'react';

const techs = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  { name: ".NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }
];

const TechMarquee = () => {
  return (
    <div className="w-full py-10 bg-slate-900/30 border-y border-slate-800/50 overflow-hidden flex relative">
      {/* Gradients cho hai bên để tạo hiệu ứng mờ dần (fade out) */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-slide {
            animation: slide 25s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-slide:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="animate-slide">
        {/* Render 2 lần mảng techs để tạo vòng lặp vô tận trơn tru */}
        {[...techs, ...techs].map((tech, index) => (
          <div 
            key={index} 
            className="flex items-center shrink-0 gap-2 px-4 py-2 mx-3 glass rounded-lg border border-slate-700/50 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,217,255,0.2)] hover:-translate-y-1 transition-all cursor-pointer group"
          >
            <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain shrink-0 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-sm text-slate-300 group-hover:text-primary transition-colors whitespace-nowrap">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
