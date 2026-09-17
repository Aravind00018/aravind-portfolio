import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import CinematicButton from './ui/CinematicButton';

const Navbar = ({ onDownloadResume }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 40);
        if (window.scrollY > lastScrollY && window.scrollY > 80) {
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-4 py-3.5 sm:px-8 sm:py-4 md:px-12 md:py-5 ${
        showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${isScrolled ? 'bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}
    >
      <div className="w-full flex items-center justify-between">
        {/* Brand Name on Left with Chrome Shimmer */}
        <a
          href="#home"
          className="font-black text-lg sm:text-xl md:text-2xl tracking-widest uppercase cursor-pointer font-display hover:scale-105 transition-transform shrink-0 flex items-center gap-2 group"
        >
          <span className="w-2 h-2 rounded-full bg-[#ccff00] shadow-[0_0_10px_#ccff00] animate-pulse" />
          <span className="chrome-text-subtle font-black">ARAVIND</span>
        </a>

        {/* Top Right Corner Navigation: Home, About, Services, Project, Contact, Resume */}
        <nav className="flex items-center gap-3 sm:gap-6 md:gap-8 lg:gap-10">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider font-semibold hover:text-[#ccff00] transition-colors relative py-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#ccff00] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {onDownloadResume && (
            <CinematicButton
              onClick={onDownloadResume}
              variant="primary"
              className="px-3.5 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-xs gap-1.5 shrink-0"
            >
              <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Resume</span>
            </CinematicButton>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

