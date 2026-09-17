import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImage from '../assets/about_section/about_section.png';
import TiltCard from './ui/TiltCard';

gsap.registerPlugin(ScrollTrigger);

const backendSkills = [
  "Java", "Spring Boot", "Spring Data JPA", "Hibernate", "Spring Security",
  "JWT Authentication", "REST APIs", "Microservices Architecture", "MySQL", "JDBC"
];

const frontendSkills = [
  "React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3",
  "Axios Interceptors", "AuthContext", "Responsive Web Design", "UI/UX"
];

const aiSkills = [
  "PyTorch", "TensorFlow", "BiLSTM-Attention", "Optuna (GPBO)",
  "SQLAlchemy", "Deep Learning", "SpeechBrain", "DeepFace", "Predictive Analytics"
];

const toolsSkills = [
  "AWS EC2", "Microsoft Azure (AI-900)", "Databricks", "Docker",
  "Git", "GitHub", "Maven", "Postman", "Linux", "CI/CD Pipelines", "Agile / SDLC"
];

const aboutWords = [
  { text: "Hey," },
  { text: "I'm" },
  { text: "Aravind.", className: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-gray-400" },
  { text: "A" },
  { text: "dedicated" },
  { text: "Backend" },
  { text: "Developer" },
  { text: "&" },
  { text: "Full" },
  { text: "Stack" },
  { text: "Engineer" },
  { text: "specializing" },
  { text: "in" },
  { text: "Java", className: "text-white font-medium" },
  { text: "and" },
  { text: "Spring", className: "text-white font-medium" },
  { text: "Boot.", className: "text-white font-medium" },
  { text: "Recent" },
  { text: "B.E." },
  { text: "Computer" },
  { text: "Science" },
  { text: "&" },
  { text: "Technology" },
  { text: "graduate" },
  { text: "from" },
  { text: "SNS", className: "text-white font-medium" },
  { text: "College", className: "text-white font-medium" },
  { text: "of", className: "text-white font-medium" },
  { text: "Engineering", className: "text-white font-medium" },
  { text: "(CGPA:", className: "text-gray-300 font-mono" },
  { text: "7.5/10)." },
  { text: "I" },
  { text: "have" },
  { text: "built" },
  { text: "and" },
  { text: "deployed" },
  { text: "4" },
  { text: "production-style" },
  { text: "systems—spanning" },
  { text: "a" },
  { text: "95.8%-accuracy", className: "text-[#ccff00] font-bold" },
  { text: "deep" },
  { text: "learning" },
  { text: "forecasting" },
  { text: "model," },
  { text: "a" },
  { text: "JWT-secured", className: "text-white font-medium" },
  { text: "REST" },
  { text: "API" },
  { text: "tested" },
  { text: "across" },
  { text: "20+", className: "text-[#ccff00] font-bold" },
  { text: "endpoints," },
  { text: "and" },
  { text: "cloud-deployed" },
  { text: "microservices" },
  { text: "on" },
  { text: "AWS", className: "text-white font-medium" },
  { text: "EC2." },
  { text: "Passionate" },
  { text: "about" },
  { text: "clean" },
  { text: "architecture," },
  { text: "data" },
  { text: "modelling," },
  { text: "and" },
  { text: "solving" },
  { text: "complex" },
  { text: "algorithmic" },
  { text: "challenges" },
  { text: "with" },
  { text: "300+", className: "text-[#ccff00] font-bold" },
  { text: "DSA" },
  { text: "problems" },
  { text: "solved." }
];

const About = () => {
  const textRef = useRef(null);
  const introMobileRef = useRef(null);
  const introDesktopRef = useRef(null);

  useEffect(() => {
    const headings = [introMobileRef.current, introDesktopRef.current];

    headings.forEach((heading) => {
      if (heading) {
        gsap.fromTo(
          heading,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    if (textRef.current) {
      const words = textRef.current.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { color: '#52525b', opacity: 0.2 },
        {
          color: '#ffffff',
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
            end: 'bottom 50%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-[#050505] text-white pt-24 pb-0 px-6 md:px-16 flex flex-col justify-between relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full z-10">

        {/* Mobile Intro Text */}
        <h2
          ref={introMobileRef}
          className="lg:hidden text-center text-[18vw] md:text-[8rem] font-black tracking-tighter drop-shadow-2xl leading-none mb-10 md:mb-16 font-display chrome-text"
        >
          Intro
        </h2>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

          {/* Left Column - Aravind's Photo in White Linen Shirt (Prominent Scale) */}
          <div className="flex justify-center lg:justify-start pl-0 lg:pl-8 xl:pl-12">
            <img
              src={aboutImage}
              alt="Aravind - Full Stack Engineer"
              className="w-72 sm:w-80 md:w-96 lg:w-[420px] xl:w-[480px] h-auto max-h-[680px] object-contain border-none outline-none select-none drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
            />
          </div>

          {/* Right Column - Text Content with Word-by-Word Scroll Highlight */}
          <div className="flex flex-col justify-center space-y-8 z-10 w-full px-4 md:px-0">
            <h2
              ref={introDesktopRef}
              className="hidden lg:block text-[11rem] font-black tracking-tighter drop-shadow-2xl leading-none font-display chrome-text"
            >
              Intro
            </h2>
            
            <TiltCard
              maxTilt={6}
              glowColor="rgba(204, 255, 0, 0.12)"
              className="p-6 md:p-10 text-center lg:text-left shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
            >
              <p ref={textRef} className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed font-light">
                {aboutWords.map((wordObj, index) => (
                  <React.Fragment key={index}>
                    <span className={`word ${wordObj.className || ''}`}>
                      {wordObj.text}
                    </span>
                    {index < aboutWords.length - 1 && " "}
                  </React.Fragment>
                ))}
              </p>
            </TiltCard>
          </div>

        </div>
      </div>

      {/* 4 Continuous Scrolling Skill Marquee Tickers */}
      <div className="flex flex-col border-t border-white/5 bg-[#030303] py-4 mt-auto -mx-6 md:-mx-16">
        
        {/* First Row: Backend */}
        <div className="flex overflow-hidden whitespace-nowrap mb-2">
          <div className="flex animate-marquee w-max">
            {[...backendSkills, ...backendSkills, ...backendSkills, ...backendSkills].map((item, i) => (
              <div key={`back-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row: Frontend */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee-reverse w-max">
            {[...frontendSkills, ...frontendSkills, ...frontendSkills, ...frontendSkills].map((item, i) => (
              <div key={`front-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>

        {/* Third Row: AI & Machine Learning */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee w-max">
            {[...aiSkills, ...aiSkills, ...aiSkills, ...aiSkills].map((item, i) => (
              <div key={`ai-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fourth Row: Cloud, DevOps & Tools */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee-reverse w-max">
            {[...toolsSkills, ...toolsSkills, ...toolsSkills, ...toolsSkills].map((item, i) => (
              <div key={`tools-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default About;
