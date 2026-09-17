import React from 'react';
import TiltCard from './ui/TiltCard';
import CinematicButton from './ui/CinematicButton';

const projects = [
  {
    name: 'Blog Platform — Full Stack',
    category: 'FULL STACK • SPRING BOOT & REACT',
    title: (
      <>
        BLOG PLATFORM <span className="font-light italic text-gray-300 lowercase font-serif">full stack</span><br />
        SPRING BOOT & REACT
      </>
    ),
    description:
      'Designed and deployed a full-stack publishing web system featuring a Spring Boot REST API with Spring Security and JWT authentication. Enforced role-based access control (RBAC), post ownership validation, Spring Data JPA / Hibernate ORM persistence with MySQL, and a responsive React frontend with AuthContext and Axios interceptors.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop',
    githubUrl: 'https://github.com/Aravind00018',
    demoUrl: '#contact'
  },
  {
    name: 'Student Management REST API',
    category: 'BACKEND ARCHITECTURE • 20+ ENDPOINTS',
    title: (
      <>
        STUDENT MANAGEMENT <br />
        REST API SYSTEM
      </>
    ),
    description:
      'Built a production-grade Spring Boot REST API providing complete CRUD operations, schema validation, and centralized exception handling. Secured 20+ REST endpoints with Spring Security and JWT authorization middleware across multi-tier user roles, backed by MySQL and tested extensively via Postman and Maven.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop',
    githubUrl: 'https://github.com/Aravind00018',
    demoUrl: '#contact'
  },
  {
    name: 'AI-Driven Blood Demand Forecasting',
    category: 'DEEP LEARNING • 95.8% ACCURACY',
    title: (
      <>
        AI BLOOD DEMAND <span className="font-light italic text-gray-300 lowercase font-serif">ai</span><br />
        FORECASTING SYSTEM
      </>
    ),
    description:
      'Developed a BiLSTM-Attention deep learning system achieving 95.8% forecasting accuracy across 8 blood groups to eliminate clinical shortage risk. Optimized hyperparameters using Gaussian Process Bayesian Optimisation (GPBO) via Optuna, improving R² to 0.963 and cutting search time by 70%. Built a Flask REST API with SQLAlchemy data pipeline and React dashboard with attention heatmaps.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2000&auto=format&fit=crop',
    githubUrl: 'https://github.com/Aravind00018/blood-demand-forecasting-ai',
    demoUrl: 'https://github.com/Aravind00018/blood-demand-forecasting-ai'
  },
  {
    name: 'Multimodal Music Therapy App',
    category: 'APPLIED AI & VISION • SPOTIFY MICROSERVICES',
    title: (
      <>
        MULTIMODAL <br />
        MUSIC THERAPY APP
      </>
    ),
    description:
      'Engineered an affective computing pipeline fusing audio and facial emotion recognition (SpeechBrain & DeepFace), delivering real-time, mood-aware Spotify recommendations with sub-2s inference latency. Built a Node.js REST API backend integrating the official Spotify API in a microservices architecture.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2000&auto=format&fit=crop',
    githubUrl: 'https://github.com/Aravind00018',
    demoUrl: '#contact'
  }
];

const Project = ({ onCtaClick }) => {
  return (
    <div id="project" className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16">
      
      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-12 lg:gap-0 mb-16 lg:mb-24">
        
        {/* Left Giant Title */}
        <div className="w-full lg:w-7/12 overflow-visible">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter chrome-text drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-3 whitespace-nowrap font-display">
            Selected
            <span className="font-light italic text-gray-300 lowercase font-serif pr-4 pt-2 md:pt-4">work</span>
          </h2>
        </div>

        {/* Right Description */}
        <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6">
            Production-style software systems spanning secure enterprise Spring Boot backends,
            relational database architectures, and deep learning predictive analytics.
          </p>
          <CinematicButton
            href="https://github.com/Aravind00018"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="px-6 py-2.5 text-xs md:text-sm font-bold gap-2"
          >
            Explore GitHub
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </CinematicButton>
        </div>
      </div>

      {/* Projects List - Liquid Glass Tilt Cards */}
      <div className="flex flex-col gap-12 lg:gap-16 w-full">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <TiltCard
              key={proj.name}
              maxTilt={4}
              glowColor="rgba(204, 255, 0, 0.14)"
              className="p-6 md:p-10 lg:p-12 w-full"
            >
              <div
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center justify-between gap-8 lg:gap-14 w-full`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-6/12 overflow-hidden relative aspect-[16/10] bg-[#111] rounded-2xl border border-white/10 shadow-2xl group">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-6/12 flex flex-col items-start">
                  <span className="text-[#ccff00] text-xs md:text-sm font-mono font-bold tracking-widest uppercase mb-3 inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
                    0{idx + 1} • {proj.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] uppercase mb-5 font-display">
                    {proj.title}
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-8">
                    {proj.description}
                  </p>

                  <div className="flex items-center gap-4 flex-wrap">
                    <CinematicButton
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      className="px-6 py-2.5 text-xs md:text-sm font-bold gap-2"
                    >
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </CinematicButton>

                    <CinematicButton
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="glass"
                      className="px-6 py-2.5 text-xs md:text-sm gap-2"
                    >
                      GitHub
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </CinematicButton>
                  </div>
                </div>

              </div>
            </TiltCard>
          );
        })}
      </div>

    </div>
  );
};

export default Project;
