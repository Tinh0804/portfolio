import React, { useState } from 'react';

const Contact = () => {
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
    <section id="contact" className="relative py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Do you have a project in mind or want to discuss technology? Send me a message and I'll get back to you as soon as possible!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN: CONTACT INFO */}
          <div className="space-y-4 reveal" style={{ transitionDelay: '100ms' }}>
            
            {/* Email */}
            <a
              href="mailto:lhqtinh2005@gmail.com"
              className="flex items-center p-4 glass rounded-xl card-hover group interactive"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mr-4 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                <i className="fas fa-envelope text-xl text-primary group-hover:-rotate-12 transition-transform duration-300"></i>
              </div>
              <div>
                <h4 className="text-xs text-slate-400 mb-0.5">Email</h4>
                <p className="font-semibold text-sm text-slate-200 group-hover:text-primary transition-colors">lhqtinh2005@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/lê-hoàng-quách-tỉnh-56a0a0376"
              target="_blank"
              rel="noreferrer"
              className="flex items-center p-4 glass rounded-xl card-hover group interactive"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0 mr-4 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors duration-300">
                <i className="fab fa-linkedin-in text-xl text-blue-500 group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <div>
                <h4 className="text-xs text-slate-400 mb-0.5">LinkedIn</h4>
                <p className="font-semibold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">Lê Hoàng Quách Tỉnh</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center p-4 glass rounded-xl card-hover group cursor-default">
              <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center shrink-0 mr-4 border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors duration-300">
                <i className="fas fa-map-marker-alt text-xl text-rose-500 group-hover:animate-bounce transition-all duration-300"></i>
              </div>
              <div>
                <h4 className="text-xs text-slate-400 mb-0.5">Location</h4>
                <p className="font-semibold text-sm text-slate-200 group-hover:text-rose-400 transition-colors">374 Dien Bien Phu, Thanh Khe, Da Nang, Vietnam</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="glass p-8 rounded-3xl reveal" style={{ transitionDelay: '200ms' }}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>
                
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="interactive w-full py-4 bg-gradient-to-r from-primary to-secondary text-slate-900 font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 group"
              >
                Send Message 
                <i className="fas fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;