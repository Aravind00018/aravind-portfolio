import React, { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Project from './components/Project';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  // Resume downloader matching Aravind's official resume
  const handleDownloadResume = () => {
    const resumeText = `================================================================================
                                 ARAVIND
           Backend Developer | Full Stack Engineer (Java, Spring Boot)
   araviaravi2020@gmail.com | +91 8667487446 | Coimbatore, Tamil Nadu, India
   LinkedIn: linkedin.com/in/aravindchandramohan-c | GitHub: github.com/Aravind00018
================================================================================

CAREER OBJECTIVE:
--------------------------------------------------------------------------------
Recent B.E. Computer Science graduate specializing in backend development with
Java and Spring Boot. Built and deployed 4 production-style projects — including
a 95.8%-accuracy ML forecasting system and a JWT-secured REST API tested across
20+ endpoints — spanning authentication systems, REST APIs, and applied ML.

TECHNICAL SKILLS:
--------------------------------------------------------------------------------
- Programming Languages : Java, Python, SQL, JavaScript, HTML, CSS
- Frameworks & Libraries: Spring Boot, Spring Data JPA, Hibernate, Spring Security,
                          JWT, React.js, Flask, Node.js
- Databases             : MySQL, H2 Database, JDBC — schema design, data modelling,
                          ORM, querying, validation
- Cloud & DevOps        : AWS EC2, Microsoft Azure (AI-900), Databricks, Git,
                          GitHub, Postman, Maven, CI/CD, REST API design, Docker
- Machine Learning      : PyTorch, TensorFlow, SQLAlchemy, Optuna
- Development Practices : Agile, SDLC, Spring Security, JWT Authentication,
                          code reviews, microservices architecture, unit testing

EDUCATION:
--------------------------------------------------------------------------------
- B.E. Computer Science & Technology (2022 – 2026)
  SNS College of Engineering, Coimbatore | CGPA: 7.5 / 10

- Higher Secondary Certificate (Class XII) — Biology Stream (2021 – 2022)
  Jaycee Higher Secondary School, Coimbatore | 84.5%

PROFESSIONAL EXPERIENCE:
--------------------------------------------------------------------------------
Software Development Intern — ASCENTZ Technology, Coimbatore (Jul 2025 – Dec 2025)
- Engineered an Employee Management System end-to-end using Java and MySQL, owning
  full SDLC from schema design, module development, and validation through
  packaging and production deployment on AWS EC2.
- Designed JDBC backend modules with comprehensive validation logic; packaged
  application as executable JAR and co-deployed on cloud infrastructure.
- Collaborated via Git/GitHub in an Agile sprint workflow — participated in code
  reviews, resolved 20+ integration bugs during QA, and delivered the project on
  schedule ahead of production rollout.

PROJECTS:
--------------------------------------------------------------------------------
1. Blog Platform — Full Stack (2026 – Present)
   Stack: Spring Boot · React.js · MySQL · JWT · Spring Security
   - Designed a Spring Boot REST API with Spring Security and JWT authentication,
     enforcing role-based access control and post ownership validation.
   - Implemented Spring Data JPA and Hibernate ORM with MySQL for full CRUD,
     exception handling, and pagination.
   - Built a React.js frontend with AuthContext, Axios interceptors, protected
     routes, and a responsive, component-driven UI.

2. Student Management REST API (2026)
   Stack: Spring Boot · MySQL · Spring Security · JWT · Postman
   - Built a production-grade Spring Boot REST API with full CRUD, input
     validation, and global exception handling.
   - Secured 20+ REST endpoints with Spring Security and JWT authentication,
     implementing role-based authorization middleware across multiple user roles.
   - Designed the MySQL schema via Spring Data JPA and Hibernate; tested 20+
     endpoints with Postman, managed with Maven.

3. AI-Driven Blood Demand Forecasting (2025 – 2026)
   Stack: Python · PyTorch · TensorFlow · Flask · React.js · SQLAlchemy · Optuna
   GitHub: github.com/Aravind00018/blood-demand-forecasting-ai
   - Developed a BiLSTM-Attention deep learning system achieving 95.8% forecasting
     accuracy, reducing critical blood shortage risk across 8 blood groups.
   - Optimized the model using Gaussian Process Bayesian Optimisation (GPBO) via
     Optuna, improving R² to 0.963 and cutting search time by 70%.
   - Built a Flask REST API with an SQLAlchemy data pipeline and a React.js
     decision-support dashboard with attention heatmaps.

4. Multimodal Music Therapy App (2025)
   Stack: Node.js · Python · SpeechBrain · DeepFace · Spotify API
   - Developed a multimodal NLP and vision pipeline fusing audio and visual
     emotion detection, delivering real-time, mood-aware Spotify recommendations
     at sub-2s inference latency.
   - Designed a Node.js REST API backend integrating the Spotify API in a
     microservices-style architecture, built as a proof-of-concept for adaptive,
     mood-aware media recommendation systems.

CERTIFICATIONS & ACHIEVEMENTS:
--------------------------------------------------------------------------------
- Solved 300+ DSA problems on LeetCode (Top 150 completed) — consistent
  preparation in algorithms and data structures.
- Led LeetCode Bootcamp at SNS College — coached peer cohort, improving
  problem-solving consistency.
- Microsoft Azure AI-900 — AI workloads, machine learning principles, and
  Azure cloud AI services.
- Databricks Accredited AI Agent Fundamentals — Agentic AI design, LLM-based
  pipelines, enterprise data intelligence.
- Java DSA | Cloud Computing — Prepinsta (2023–2024).
- Ranked 2nd Place in 4-Day Intercollegiate Coding Bootcamp.
- Delivered Paper Presentation at Karpagam College of Engineering Technical
  Symposium.
================================================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Aravind_Resume_Software_Engineer.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <main className="bg-[#050505] text-white min-h-screen relative">
      {/* Top right navigation links always visible on landing page */}
      <Navbar onDownloadResume={handleDownloadResume} />

      <Hero
        onPreloadComplete={() => setPreloaderComplete(true)}
      />

      {preloaderComplete && (
        <div className="animate-fade-in-up">
          <About />
          <Services />
          <Project />
          <ContactSection onDownloadResume={handleDownloadResume} />
          <Footer />
        </div>
      )}
    </main>
  );

}

export default App;
