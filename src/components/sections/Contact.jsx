import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-slate-400 text-lg mb-12 reveal" style={{ transitionDelay: '100ms' }}>
          Tôi luôn sẵn sàng thảo luận về các dự án mới, cơ hội hợp tác, hoặc đơn giản là kết nối và chia sẻ kinh nghiệm!
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="mailto:lhqtinh2005@gmail.com"
            className="interactive glass rounded-2xl p-8 card-hover group reveal"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="text-5xl mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">📧</div>
            <h3 className="font-semibold mb-2 group-hover:text-primary transition">Email</h3>
            <p className="text-slate-400 text-sm">lhqtinh2005@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/lê-hoàng-quách-tỉnh-56a0a0376"
            target="_blank"
            rel="noreferrer"
            className="interactive glass rounded-2xl p-8 card-hover group reveal"
            style={{ transitionDelay: '300ms' }}
          >
            <div className="text-5xl mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">💼</div>
            <h3 className="font-semibold mb-2 group-hover:text-primary transition">LinkedIn</h3>
            <p className="text-slate-400 text-sm">Connect with me</p>
          </a>

          <a
            href="https://github.com/Tinh0804"
            target="_blank"
            rel="noreferrer"
            className="interactive glass rounded-2xl p-8 card-hover group reveal"
            style={{ transitionDelay: '400ms' }}
          >
            <div className="text-5xl mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">💻</div>
            <h3 className="font-semibold mb-2 group-hover:text-primary transition">GitHub</h3>
            <p className="text-slate-400 text-sm">@Tinh0804</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
