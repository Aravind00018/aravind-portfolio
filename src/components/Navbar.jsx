import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const Navbar = ({ onDownloadResume }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          setShowNavbar(false); // Hide on scroll down
        } else {
          setShowNavbar(true); // Show on scroll up or at top
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Project', href: '#project' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-4 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 ${
        showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="w-full flex items-center justify-between">
        {/* Brand Name on Left */}
        <a
          href="#home"
          className="text-white font-black text-lg sm:text-xl md:text-2xl tracking-widest uppercase cursor-pointer font-display hover:text-[#ccff00] transition-colors shrink-0"
        >
          ARAVIND
        </a>

        {/* Top Right Corner Navigation: Home, About, Services, Project, Contact, Resume */}
        <nav className="flex items-center gap-3 sm:gap-6 md:gap-8 lg:gap-10">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider font-semibold hover:text-[#ccff00] transition-colors"
            >
              {item.name}
            </a>
          ))}

          {onDownloadResume && (
            <button
              onClick={onDownloadResume}
              type="button"
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#ccff00] text-black hover:bg-[#b3e600] transition-all text-[11px] sm:text-xs uppercase font-bold tracking-wider cursor-pointer shadow-[0_0_15px_rgba(204,255,0,0.25)] shrink-0"
            >
              <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Resume</span>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

