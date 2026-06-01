import React from 'react';

const journeyData = [
  {
    id: 1,
    year: "2023 - Present",
    title: "Backend Developer (Projects & Freelance)",
    desc: "Focusing on building complex backend systems with Spring Boot and .NET Core. Completed personal projects such as RideBook (WebSockets, Redis) and E-Commerce Microservices.",
    icon: "fas fa-laptop-code"
  },
  {
    id: 2,
    year: "2022 - 2023",
    title: "In-depth Research & Learning",
    desc: "Diving deep into advanced concepts like Clean Architecture, Design Patterns, Microservices, Message Brokers (Kafka, RabbitMQ), and working with various Databases.",
    icon: "fas fa-book-open"
  },
  {
    id: 3,
    year: "2021 - 2022",
    title: "Getting Started with Programming",
    desc: "Familiarizing with basic languages (Java, C#) and application development platforms. Participated in intensive courses and started building my first small applications.",
    icon: "fas fa-code"
  }
];

const Journey = () => {
  return (
    <section id="journey" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 reveal">
          My <span className="gradient-text">Journey</span>
        </h2>

        <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
          {/* Vertical Line */}
          <div className="absolute border-opacity-20 border-primary h-full border-2 left-10 md:left-1/2 md:-ml-1 top-0"></div>

          {journeyData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div 
                key={item.id} 
                className={`mb-12 flex justify-between items-center w-full reveal ${isLeft ? 'md:flex-row-reverse' : ''}`} 
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                
                {/* Empty Space for opposing side (Desktop only) */}
                <div className="order-1 md:w-5/12 hidden md:block"></div>
                
                {/* Center Icon */}
                <div className="z-20 flex items-center order-1 bg-slate-900 shadow-[0_0_15px_rgba(0,217,255,0.3)] w-12 h-12 rounded-full border-2 border-primary justify-center absolute left-4 md:relative md:left-auto">
                  <i className={`${item.icon} text-primary text-xl`}></i>
                </div>
                
                {/* Content Card */}
                <div className="order-1 glass rounded-2xl p-6 w-full ml-16 md:ml-0 md:w-5/12 card-hover">
                  <span className="text-secondary font-bold text-sm mb-2 inline-block bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                    {item.year}
                  </span>
                  <h3 className="font-bold text-xl mb-3 text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journey;
