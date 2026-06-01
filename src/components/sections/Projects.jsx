import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 reveal">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="glass rounded-2xl overflow-hidden card-hover group reveal" style={{ transitionDelay: '100ms' }}>
            <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="group-hover:scale-125 transition-transform duration-500">🛒</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition">
                E-Commerce Microservices
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                Nền tảng thương mại điện tử dựa trên kiến trúc microservices với
                Spring Boot, bao gồm authentication, product catalog, order management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs border border-primary/30">Spring Boot</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs border border-primary/30">Docker</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs border border-primary/30">MongoDB</span>
              </div>
              <a href="https://github.com/Tinh0804/E-Commerce" target="_blank" rel="noreferrer" className="interactive text-primary hover:text-secondary transition flex items-center w-max">
                View Project <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
              </a>
            </div>
          </div>

          <div className="glass rounded-2xl overflow-hidden card-hover group reveal" style={{ transitionDelay: '200ms' }}>
            <div className="h-48 bg-gradient-to-br from-green-400/20 to-blue-500/20 flex items-center justify-center text-6xl relative overflow-hidden">
              <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="group-hover:scale-125 transition-transform duration-500">📚</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition">
                English Learning App
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                Ứng dụng học tiếng Anh đa nền tảng theo mô hình Gamification. 
                Tích hợp AI hỗ trợ học tập, hệ thống cửa hàng (Shop) và theo dõi tiến độ.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs border border-secondary/30">.NET Core</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs border border-secondary/30">SQL Server</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs border border-secondary/30">SignalR</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs border border-purple-500/30">AI API</span>
              </div>
              <a href="https://github.com/Tinh0804/Web_Advance" target="_blank" rel="noreferrer" className="interactive text-secondary hover:text-primary transition flex items-center w-max">
                View Project <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
              </a>
            </div>
          </div>

          <div className="glass rounded-2xl overflow-hidden card-hover group reveal" style={{ transitionDelay: '300ms' }}>
            <div className="h-48 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center text-6xl relative overflow-hidden">
              <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="group-hover:scale-125 transition-transform duration-500">🚕</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition">
                RideBook - Ride Booking
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                Hệ thống đặt xe trực tuyến Backend. Tích hợp tính năng realtime tracking, ghép cuốc thông minh (Smart Matching) giữa tài xế và hành khách, xử lý thanh toán.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-xs border border-yellow-500/30">Spring Boot</span>
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-xs border border-yellow-500/30">Redis</span>
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-xs border border-yellow-500/30">WebSockets</span>
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-xs border border-yellow-500/30">SQL Server</span>
              </div>
              <a href="https://github.com/Tinh0804/RideBook" target="_blank" rel="noreferrer" className="interactive text-yellow-400 hover:text-primary transition flex items-center w-max">
                View Project <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
