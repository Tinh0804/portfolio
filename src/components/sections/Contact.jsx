import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation();
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

  const isVi = i18n.language.startsWith('vi');

  return (
    <section id="contact" className="relative pt-20 md:pt-28 pb-24 overflow-hidden bg-slate-50 dark:bg-[#09090b] transition-colors duration-300">
      
      {/* Subtle Hairline Section Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 sm:px-6 pointer-events-none">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
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
          className="mb-16 text-center flex flex-col items-center mt-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 mb-4 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            <span className="text-slate-600 dark:text-zinc-400 font-mono text-xs uppercase tracking-wider font-semibold">{t('contact.subtitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
            {t('contact.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-sky-400 dark:to-indigo-400">{t('contact.title2')}</span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mt-4 font-light">
            {t('contact.desc')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: CONTACT INFO (2 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-4"
          >
            {/* Email */}
            <a
              href="mailto:lhqtinh2005@gmail.com"
              className="flex items-center p-4 sm:p-5 bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 rounded-2xl hover:border-sky-500/30 transition-all duration-300 group shadow-sm dark:shadow-none"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-sky-50 dark:bg-sky-500/10 rounded-full flex items-center justify-center shrink-0 mr-3.5 sm:mr-4 border border-sky-200 dark:border-sky-500/20 group-hover:bg-sky-100 dark:group-hover:bg-sky-500/20 transition-colors duration-300">
                <i className="fa-solid fa-envelope text-lg sm:text-xl text-sky-500 dark:text-sky-400 group-hover:scale-110 transition-transform"></i>
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-0.5">Email</h4>
                <p className="font-semibold text-sm md:text-base text-slate-700 dark:text-zinc-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors break-all sm:break-normal">lhqtinh2005@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/lê-hoàng-quách-tỉnh-56a0a0376"
              target="_blank"
              rel="noreferrer"
              className="flex items-center p-4 sm:p-5 bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 rounded-2xl hover:border-indigo-500/30 transition-all duration-300 group shadow-sm dark:shadow-none"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-full flex items-center justify-center shrink-0 mr-3.5 sm:mr-4 border border-indigo-200 dark:border-indigo-500/20 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-colors duration-300">
                <i className="fa-brands fa-linkedin-in text-lg sm:text-xl text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform"></i>
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-0.5">LinkedIn</h4>
                <p className="font-semibold text-sm md:text-base text-slate-700 dark:text-zinc-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors truncate sm:overflow-visible">Lê Hoàng Quách Tỉnh</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center p-4 sm:p-5 bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 rounded-2xl cursor-default group shadow-sm dark:shadow-none">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-emerald-50 dark:bg-emerald-500/10 rounded-full flex items-center justify-center shrink-0 mr-3.5 sm:mr-4 border border-emerald-200 dark:border-emerald-500/20 transition-colors duration-300">
                <i className="fa-solid fa-location-dot text-lg sm:text-xl text-emerald-500 dark:text-emerald-400"></i>
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-0.5">{t('contact.location')}</h4>
                <p className="font-semibold text-sm md:text-base text-slate-700 dark:text-zinc-200">{t('contact.locationValue')}</p>
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: CONTACT FORM (3 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 p-5 sm:p-6 md:p-8 rounded-3xl shadow-sm dark:shadow-none"
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              
              <div className="grid md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 dark:text-zinc-300">{t('contact.yourName')}</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={isVi ? "Nguyễn Văn A" : "Alex Morgan"}
                    required
                    className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all text-sm"
                  />
                </div>
                
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 dark:text-zinc-300">{t('contact.yourEmail')}</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    required
                    className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700 dark:text-zinc-300">{t('contact.subject')}</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t('contact.subjectPlaceholder')}
                  required
                  className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all text-sm"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700 dark:text-zinc-300">{t('contact.message')}</label>
                <textarea 
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.messagePlaceholder')}
                  required
                  className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all resize-none text-sm"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-full transition-all duration-300 hover:bg-sky-500 dark:hover:bg-sky-400 dark:hover:text-white hover:scale-[1.01] flex items-center justify-center gap-2 text-sm shadow-md"
              >
                {t('contact.send')}
                <i className="fa-solid fa-paper-plane text-xs"></i>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;