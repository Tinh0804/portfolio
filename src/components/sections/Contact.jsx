import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:lhqtinh2005@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="relative pt-24 md:pt-32 pb-24 overflow-hidden bg-slate-50 dark:bg-[#09090b] transition-colors duration-300">
      
      {/* Light to Dark Transition Wave (Fixed) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[120px]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-white dark:fill-[#fafafa] transition-colors duration-300" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" className="fill-white dark:fill-[#fafafa] transition-colors duration-300" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white dark:fill-[#fafafa] transition-colors duration-300"></path>
        </svg>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center flex flex-col items-center mt-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-sky-500"></div>
            <span className="text-sky-500 dark:text-sky-400 font-mono text-sm uppercase tracking-widest">{t('contact.subtitle')}</span>
            <div className="h-[1px] w-12 bg-sky-500"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white">
            {t('contact.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-sky-400 dark:to-indigo-400">{t('contact.title2')}</span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto mt-6 font-light">
            {t('contact.desc')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: CONTACT INFO (2 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-6"
          >
            {/* Email */}
            <a
              href="mailto:lhqtinh2005@gmail.com"
              className="flex items-center p-6 bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/[0.04] hover:border-sky-500/30 transition-all duration-300 group shadow-sm dark:shadow-none"
            >
              <div className="w-14 h-14 bg-sky-50 dark:bg-sky-500/10 rounded-full flex items-center justify-center shrink-0 mr-5 border border-sky-200 dark:border-sky-500/20 group-hover:bg-sky-100 dark:group-hover:bg-sky-500/20 transition-colors duration-300 shadow-[0_0_15px_rgba(56,189,248,0.1)]">
                <i className="fas fa-envelope text-2xl text-sky-500 dark:text-sky-400 group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-zinc-500 mb-1">Email</h4>
                <p className="font-semibold text-slate-700 dark:text-zinc-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">lhqtinh2005@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/lê-hoàng-quách-tỉnh-56a0a0376"
              target="_blank"
              rel="noreferrer"
              className="flex items-center p-6 bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-300 group shadow-sm dark:shadow-none"
            >
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-full flex items-center justify-center shrink-0 mr-5 border border-indigo-200 dark:border-indigo-500/20 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-colors duration-300 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                <i className="fab fa-linkedin-in text-2xl text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-zinc-500 mb-1">LinkedIn</h4>
                <p className="font-semibold text-slate-700 dark:text-zinc-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Lê Hoàng Quách Tỉnh</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center p-6 bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl cursor-default group shadow-sm dark:shadow-none">
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 rounded-full flex items-center justify-center shrink-0 mr-5 border border-emerald-200 dark:border-emerald-500/20 transition-colors duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <i className="fas fa-map-marker-alt text-2xl text-emerald-500 dark:text-emerald-400 group-hover:animate-bounce transition-all duration-300"></i>
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-zinc-500 mb-1">{t('contact.location')}</h4>
                <p className="font-semibold text-slate-700 dark:text-zinc-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{t('contact.locationValue')}</p>
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: CONTACT FORM (3 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-8 md:p-10 rounded-3xl backdrop-blur-sm shadow-xl dark:shadow-none"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-zinc-400">{t('contact.yourName')}</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-slate-50 dark:bg-[#000000] border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-zinc-200 placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all shadow-inner"
                  />
                </div>
                
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-zinc-400">{t('contact.yourEmail')}</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-slate-50 dark:bg-[#000000] border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-zinc-200 placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all shadow-inner"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-zinc-400">{t('contact.subject')}</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t('contact.subjectPlaceholder')}
                  required
                  className="w-full bg-slate-50 dark:bg-[#000000] border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-zinc-200 placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all shadow-inner"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-zinc-400">{t('contact.message')}</label>
                <textarea 
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.messagePlaceholder')}
                  required
                  className="w-full bg-slate-50 dark:bg-[#000000] border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-zinc-200 placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all resize-none shadow-inner"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full py-4 bg-slate-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold rounded-xl transition-all duration-300 hover:bg-black dark:hover:bg-white hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3 group mt-4"
              >
                {t('contact.send')}
                <i className="fas fa-paper-plane text-slate-400 dark:text-zinc-600 group-hover:text-white dark:group-hover:text-zinc-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"></i>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;