import React from 'react';

const techs1 = [
  { name: "Java", icon: "java/java-original.svg" },
  { name: "Spring Boot", icon: "spring/spring-original.svg" },
  { name: "C#", icon: "csharp/csharp-original.svg" },
  { name: ".NET Core", icon: "dotnetcore/dotnetcore-original.svg" },
  { name: "Python", icon: "python/python-original.svg" },
  { name: "JavaScript", icon: "javascript/javascript-original.svg" },
  { name: "Swift", icon: "swift/swift-original.svg" },
  { name: "Dart", icon: "dart/dart-original.svg" },
];

const techs2 = [
  { name: "SQL Server", icon: "microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
  { name: "Redis", icon: "redis/redis-original.svg" },
];

const techs3 = [
  { name: "Docker", icon: "docker/docker-original.svg" },
  { name: "AWS", icon: "amazonwebservices/amazonwebservices-original-wordmark.svg", darkDropShadow: true },
  { name: "GCP", icon: "googlecloud/googlecloud-original.svg" },
  { name: "GitHub", icon: "github/github-original.svg", invertInDark: true },
  { name: "Linux", icon: "linux/linux-original.svg" },
  { name: "Nginx", icon: "nginx/nginx-original.svg" },
];

const MarqueeLane = ({ items, direction = "left", speed = 20, opacity = "opacity-100", scale = "scale-100" }) => {
  return (
    <div className={`flex w-full overflow-hidden relative ${opacity} ${scale} hover:opacity-100 transition-opacity duration-500 group`}>
      <div 
        className="flex w-max will-change-transform"
        style={{ 
          animation: `marquee-${direction} ${speed}s linear infinite`,
          // hover to pause
        }}
      >
        {/* Render 4 times for infinite loop */}
        {[...items, ...items, ...items, ...items].map((tech, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 md:gap-4 px-6 md:px-8 py-3 md:py-4 mx-2 md:mx-4 rounded-full bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none shrink-0 hover:shadow-md dark:hover:bg-white/[0.06] hover:border-sky-400/50 dark:hover:border-sky-500/40 hover:scale-105 transition-all duration-300 cursor-default"
          >
            <img 
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}`} 
              alt={tech.name} 
              className={`w-6 h-6 md:w-8 md:h-8 object-contain ${tech.invertInDark ? 'dark:invert' : ''} ${tech.darkDropShadow ? 'dark:drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]' : ''}`} 
              onError={(e) => {
                if (!e.target.dataset.retried) {
                  e.target.dataset.retried = true;
                  e.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`;
                }
              }}
            />
            <span className="font-semibold text-base md:text-lg text-slate-600 dark:text-zinc-300 transition-colors tracking-wide whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechMarquee = () => {
  return (
    <div className="w-full relative overflow-hidden py-10 flex flex-col gap-6 md:gap-8" style={{ perspective: "1000px" }}>
      
      <style>
        {`
          @keyframes marquee-left {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          @keyframes marquee-right {
            0% { transform: translate3d(-50%, 0, 0); }
            100% { transform: translate3d(0, 0, 0); }
          }
          /* Pause animations when hovering anywhere on the marquee container */
          .marquee-container:hover div[style*="animation"] {
            animation-play-state: paused !important;
          }
        `}
      </style>

      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-slate-50 via-slate-50/80 dark:from-[#09090b] dark:via-[#09090b]/80 to-transparent z-20 pointer-events-none transition-colors duration-300"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-slate-50 via-slate-50/80 dark:from-[#09090b] dark:via-[#09090b]/80 to-transparent z-20 pointer-events-none transition-colors duration-300"></div>
      
      {/* 3D Container */}
      <div 
        className="flex flex-col gap-6 md:gap-8 origin-center marquee-container"
        style={{ transform: "rotateX(10deg) rotateZ(-2deg) scale(1.05)" }}
      >
        <MarqueeLane items={techs3} direction="left" speed={40} opacity="opacity-40" scale="scale-90" />
        <MarqueeLane items={techs1} direction="right" speed={30} opacity="opacity-100" scale="scale-100" />
        <MarqueeLane items={techs2} direction="left" speed={35} opacity="opacity-70" scale="scale-95" />
      </div>

    </div>
  );
};

export default TechMarquee;
