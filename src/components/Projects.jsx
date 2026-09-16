import React from 'react';
import {
  ExternalLink,
  Layers,
  Sparkles,
  Database,
  Shield,
  Activity,
  Music,
  ArrowUpRight,
  GitBranch
} from 'lucide-react';


export default function Projects() {
  const projects = [
    {
      id: '01',
      title: 'Blog Platform — Full Stack',
      category: 'Enterprise Full Stack Web System',
      timeline: '2026 – Present',
      description:
        'A comprehensive full-stack publishing platform with enterprise-grade security, featuring fine-grained role-based access control, relational persistence with pagination, and an asynchronous React frontend.',
      highlights: [
        'Designed a Spring Boot REST API with Spring Security and JWT authentication, enforcing role-based access control (RBAC) and post ownership validation.',
        'Implemented Spring Data JPA and Hibernate ORM with MySQL for full CRUD, robust global exception handling, and database-level pagination.',
        'Built a React.js frontend with AuthContext, Axios interceptors, protected client routes, and a modern responsive UI.',
      ],
      stack: ['Spring Boot', 'React.js', 'MySQL', 'JWT', 'Spring Security', 'Hibernate JPA', 'Axios'],
      metrics: 'Role-Based RBAC • JWT Interceptors',
      githubUrl: 'https://github.com/Aravind00018',
    },
    {
      id: '02',
      title: 'Student Management REST API',
      category: 'Backend Microservices & Cloud Architecture',
      timeline: '2026',
      description:
        'Production-grade Spring Boot REST API secured with JWT tokens and authorization middleware across multiple roles, tested against 20+ endpoints with comprehensive validation.',
      highlights: [
        'Built a production-grade Spring Boot REST API with complete CRUD operations, input validation, and centralized exception handling.',
        'Secured 20+ REST endpoints with Spring Security and JWT authentication, implementing role-based authorization middleware across student and administrator tiers.',
        'Engineered normalized MySQL schema via Spring Data JPA and Hibernate; rigorously tested 20+ endpoints using Postman and built with Apache Maven.',
      ],
      stack: ['Spring Boot', 'MySQL', 'Spring Security', 'JWT', 'Postman', 'Maven', 'REST APIs'],
      metrics: '20+ Endpoints • Global Exception Handling',
      githubUrl: 'https://github.com/Aravind00018',
    },
    {
      id: '03',
      title: 'AI-Driven Blood Demand Forecasting',
      category: 'Deep Learning & Predictive Analytics Dashboard',
      timeline: '2025 – 2026',
      description:
        'An advanced BiLSTM-Attention deep learning system achieving 95.8% forecasting accuracy across 8 blood groups, coupled with Gaussian Process Bayesian Optimization and an interactive analytics dashboard.',
      highlights: [
        'Developed a BiLSTM-Attention neural network achieving 95.8% forecasting accuracy, substantially minimizing critical blood shortage risks.',
        'Optimized hyperparameters using Gaussian Process Bayesian Optimisation (GPBO) via Optuna, driving R² to 0.963 and reducing model search time by 70%.',
        'Built a Flask REST API with an SQLAlchemy data pipeline and a React.js decision-support dashboard featuring interactive attention heatmaps.',
      ],
      stack: ['Python', 'PyTorch', 'TensorFlow', 'Flask', 'React.js', 'SQLAlchemy', 'Optuna', 'BiLSTM'],
      metrics: '95.8% Accuracy • R²: 0.963 • 70% Search Gain',
      githubUrl: 'https://github.com/Aravind00018/blood-demand-forecasting-ai',
    },
    {
      id: '04',
      title: 'Multimodal Music Therapy App',
      category: 'Applied AI & Recommendation Microservices',
      timeline: '2025',
      description:
        'A real-time affective computing pipeline fusing audio and facial emotion recognition, driving personalized mood-aware Spotify music therapy playlists with ultra-low latency.',
      highlights: [
        'Engineered a multimodal NLP and computer vision pipeline fusing audio and visual emotion detection, delivering real-time, mood-aware recommendations at sub-2s inference latency.',
        'Designed a Node.js REST API backend integrating the official Spotify API in a microservices architecture.',
        'Implemented proof-of-concept for adaptive, mood-aware media therapy and mental wellness tracking.',
      ],
      stack: ['Node.js', 'Python', 'SpeechBrain', 'DeepFace', 'Spotify API', 'Computer Vision'],
      metrics: 'Sub-2s Latency • Multimodal Vision/Audio',
      githubUrl: 'https://github.com/Aravind00018',
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#050508] text-white py-28 px-6 md:px-12 flex flex-col justify-center overflow-hidden border-t border-white/5"
    >
      {/* Background Watermark */}
      <div className="absolute top-12 left-0 text-[18vw] font-black text-white/[0.02] select-none pointer-events-none leading-none uppercase font-display">
        PROJECTS
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
              <span>04</span>
              <span className="w-8 h-[1px] bg-cyan-500/50" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 font-display">
              Production Projects
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-sm">
            Architected, deployed, and tested production-style projects spanning backend security,
            microservices, cloud persistence, and predictive deep learning.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Card Watermark Number */}
              <div className="absolute top-6 right-8 text-6xl sm:text-7xl font-black font-display text-white/[0.03] group-hover:text-cyan-500/10 transition-colors pointer-events-none select-none">
                {proj.id}
              </div>

              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    {proj.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                    {proj.timeline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display mb-3 group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>

                {/* Brief overview */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {proj.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 mb-6">
                  {proj.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                      <span className="text-cyan-400 font-bold mt-0.5">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom bar: Tech tags + Links */}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                
                {/* Stack Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Link & Metric Badge */}
                <div className="flex items-center justify-between gap-4 pt-2">
                  <span className="text-[11px] font-mono text-cyan-400/90 font-bold">
                    {proj.metrics}
                  </span>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-slate-200 bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 transition-all duration-200"
                  >
                    <span>View GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
