import React from 'react';
import footerBg from '../assets/Footer/Footer.png';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 px-6 md:px-16 h-screen flex flex-col justify-between overflow-hidden">
      
      {/* Background Graphic with gradient overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-bottom w-full h-full scale-[1.3] md:scale-[1.5] origin-bottom translate-y-[10%]"
          style={{ backgroundImage: `url(${footerBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-10">
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <div>
              <p className="text-gray-400 text-sm mb-2 font-mono">Connect with me</p>
              <a
                href="mailto:araviaravi2020@gmail.com"
                className="text-xl md:text-5xl font-medium hover:text-gray-300 transition-colors break-words font-display"
              >
                araviaravi2020@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-300 mt-4">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#service" className="hover:text-white transition-colors">Services</a>
              <a href="#project" className="hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end text-left md:text-right w-full md:w-auto mt-4 md:mt-0">
            <h3 className="text-lg md:text-2xl font-medium mb-2">Let's build something</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Open for full-time engineering opportunities, microservices architecture, and technical collaborations.
            </p>
            <a
              href="#contact"
              className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors font-bold uppercase tracking-wider"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Middle Section - Socials */}
        <div className="flex flex-wrap justify-between items-center py-6 border-t border-white/10 mb-4 text-sm md:text-lg font-medium">
          <a
            href="https://linkedin.com/in/aravindchandramohan-c"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Aravind00018"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:araviaravi2020@gmail.com"
            className="hover:text-gray-300 transition-colors"
          >
            Email
          </a>
          <a
            href="tel:+918667487446"
            className="hover:text-gray-300 transition-colors"
          >
            +91 8667487446
          </a>
        </div>

        {/* Huge Text Section */}
        <div className="w-full text-center flex-1 flex items-center justify-center min-h-0 select-none">
          <h1
            className="text-[14vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-800 uppercase font-display"
          >
            ARAVIND
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-auto pt-6">
          <p>© {new Date().getFullYear()} Aravind Chandramohan. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Coimbatore, Tamil Nadu</span>
            <span>•</span>
            <span className="text-[#ccff00]">Backend & Full Stack Engineer</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
