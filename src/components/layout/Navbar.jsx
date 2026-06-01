import React, { useState } from 'react';

const Navbar = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 glass shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="flex items-center gap-3 text-2xl font-bold gradient-text hover:scale-105 transition-transform interactive"
          >
            <img
              src="/assets/images/avatar.jpeg"
              alt="Avatar"
              className="w-10 h-10 rounded-full object-cover border border-primary"
              onError={(e) => {
                e.target.src =
                  'https://ui-avatars.com/api/?name=Lê+Tỉnh&background=0D8ABC&color=fff';
              }}
            />
            <span>Tỉnh Lê Lập Trình</span>
          </a>

          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`nav-link interactive hover:text-primary transition ${
                  activeSection === section ? 'text-primary active' : ''
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-primary interactive"
            onClick={toggleMobileMenu}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:hidden glass border-t border-slate-800`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={closeMobileMenu}
              className={`block px-3 py-2 hover:bg-slate-800/80 rounded transition-colors ${
                activeSection === section ? 'text-primary bg-slate-800/80' : ''
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
