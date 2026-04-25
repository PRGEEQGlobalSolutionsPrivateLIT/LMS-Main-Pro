import React from 'react';
import type { Metadata } from 'next';
import { FaGraduationCap, FaUsers, FaChartLine, FaRocket, FaPlay, FaSearch, FaBook, FaShieldAlt, FaTrophy, FaMobile, FaComments, FaLightbulb } from 'react-icons/fa';
import './page.css';
import { FadeInSection } from './FadeInSection';

export const metadata: Metadata = {
  title: 'E-Learning Solutions | NeuroLXP',
  description: 'Deliver engaging digital learning experiences with NeuroLXP\'s AI-powered Learning Experience Platform. Interactive content, gamification, and advanced analytics.',
  keywords: 'e-learning, digital learning, online education, LXP, learning platform, interactive learning, gamification',
};

interface Challenge {
  id: number;
  icon: React.ReactNode;
  challenge: string;
  description: string;
  solution: string;
}

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ELearningPage() {
  const challenges: Challenge[] = [
    {
      id: 1,
      icon: <FaBook />,
      challenge: 'Passive Learning in Traditional Online Courses',
      description: 'Many online courses rely heavily on static videos and documents, which can lead to low engagement and limited knowledge retention.',
      solution: 'NeuroLXP enables interactive e-learning experiences using gamified activities, quizzes, simulations, drag-and-drop interactions, puzzles, and discussion forums. These formats encourage active participation and improve learning outcomes.',
    },
    {
      id: 2,
      icon: <FaBook />,
      challenge: 'Managing Large Volumes of Learning Content',
      description: 'Organizations and institutions often manage extensive digital learning materials including videos, presentations, PDFs, and assessments.',
      solution: 'NeuroLXP offers a centralized content creation and management system that allows educators and training teams to organize, update, and distribute learning resources efficiently. AI tools can also convert lengthy materials into concise summaries and exam-focused learning resources.',
    },
    {
      id: 3,
      icon: <FaTrophy />,
      challenge: 'Keeping Learners Engaged in Online Learning',
      description: 'Maintaining learner motivation in digital environments can be challenging.',
      solution: 'NeuroLXP integrates gamification, social learning, and interactive assessments to create engaging learning journeys. Leaderboards, achievements, challenges, and collaborative discussions encourage learners to remain active and motivated.',
    },
    {
      id: 4,
      icon: <FaChartLine />,
      challenge: 'Measuring Learning Effectiveness',
      description: 'Organizations need to understand whether learners are actually benefiting from e-learning programs.',
      solution: 'NeuroLXP provides advanced learning analytics and reporting dashboards that track learner engagement, course completion rates, assessment performance, and skill development. These insights help educators continuously improve learning experiences.',
    },
  ];

  const features: Feature[] = [
    {
      id: 1,
      icon: <FaPlay />,
      title: 'Interactive Learning',
      description: 'Interactive learning modules and gamified activities that boost engagement.',
    },
    {
      id: 2,
      icon: <FaLightbulb />,
      title: 'AI-Powered Content',
      description: 'AI-powered content curation and knowledge insights for personalized learning.',
    },
    {
      id: 3,
      icon: <FaMobile />,
      title: 'Mobile Learning',
      description: 'Mobile learning for anytime, anywhere access to courses.',
    },
    {
      id: 4,
      icon: <FaChartLine />,
      title: 'Advanced Analytics',
      description: 'Advanced analytics and reporting tools to track progress.',
    },
    {
      id: 5,
      icon: <FaComments />,
      title: 'Social Learning',
      description: 'Collaborative social learning communities for peer interaction.',
    },
    {
      id: 6,
      icon: <FaGraduationCap />,
      title: 'Skill Pathways',
      description: 'Skill-based learning pathways and career development tracks.',
    },
    {
      id: 7,
      icon: <FaRocket />,
      title: 'Scalable Platform',
      description: 'Scalable digital learning for institutions and enterprises.',
    },
  ];

  return (
    <main className="neumorphic-page">
      {/* Hero Section */}
      <section className="ct-hero">
        <div className="ct-container">
          <div className="ct-hero-grid">
            {/* Left — Content */}
            <FadeInSection>
              <div className="section-badge">
                <span className="badge-dot" />
                E-Learning Solutions
              </div>
              <h1 className="ct-hero-title">
                Deliver Engaging <span>Digital Learning</span> Experiences
              </h1>
              <p className="ct-hero-desc">
                E-learning has transformed how organizations and educational institutions deliver knowledge. With flexible access, interactive content, and scalable delivery, NeuroLXP provides a powerful E-Learning platform that enables institutions, businesses, and training providers to create engaging, effective, and accessible digital learning experiences.
              </p>
              <p className="ct-hero-desc">
                As a modern AI-powered Learning Experience Platform (LXP), NeuroLXP supports interactive learning, personalized learning paths, and intelligent content curation that enhance learner engagement and knowledge retention.
              </p>

              {/* Hero Image */}
              <div className="image-placeholder">
                <img src="/Gemini_Generated_Image_fvs8refvs8refvs8.png" alt="E-Learning Hero Image" className="hero-image" />
              </div>

              <div className="ct-hero-actions">
                <a href="#" className="neu-btn neu-btn-primary neu-btn-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                  Start Free Trial
                </a>
                <a href="#features" className="neu-btn neu-btn-outline neu-btn-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                  </svg>
                  Explore Platform
                </a>
              </div>
            </FadeInSection>

            {/* Right — Visual Card */}
            <div className="ct-hero-visual">
              <div className="hero-card-back hero-card-back-1" />
              <div className="hero-card-back hero-card-back-2" />
              <div className="ct-hero-card-main">
                <div className="hero-card-header">
                  <div className="hero-card-title">Learning Dashboard</div>
                  <div className="hero-card-tag">Live</div>
                </div>

                {/* Dashboard Preview Image */}
                <div className="image-placeholder-hero">
                  <img src="/dashboard-preview.png" alt="Dashboard Preview" className="dashboard-image" />
                </div>
              </div>

              {/* Floating stat */}
              <div className="hero-stat-float stat-float-2">
                <div className="stat-icon">
                  <FaUsers />
                </div>
                <div>
                  <div className="stat-val">50K+</div>
                  <div className="stat-lbl">Active Learners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="ct-section" id="challenges">
        <div className="ct-container">
          <FadeInSection>
            <div className="section-badge">
              <span className="badge-dot" />
              Addressing Key Challenges
            </div>
            <h2 className="section-title">
              Key Challenges in <span>E-Learning</span>
            </h2>
            <p className="section-subtitle">
              Modern e-learning faces several obstacles. NeuroLXP addresses each challenge with intelligent solutions.
            </p>
          </FadeInSection>

          {/* Challenges Overview Image */}
          <FadeInSection>
            <div className="image-placeholder-section">
              <img src="/challenges-overview.png" alt="Challenges Overview Image" className="overview-image" />
            </div>
          </FadeInSection>

          <div className="ct-challenges-grid">
            {challenges.map((item) => (
              <FadeInSection key={item.id}>
                <div className="challenge-card">
                  <div className="challenge-icon-row">
                    <div className="challenge-icon">{item.icon}</div>
                  </div>
                  <div className="challenge-label">Challenge</div>
                  <h3 className="challenge-q">{item.challenge}</h3>
                  <p className="challenge-description">{item.description}</p>
                  <div className="challenge-pill">HOW NEUROLXP HELPS</div>
                  <div className="challenge-solution-card">
                    <p className="challenge-solution">{item.solution}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="ct-section" id="features">
        <div className="ct-container">
          <FadeInSection>
            <div className="section-badge">
              <span className="badge-dot" />
              Platform Features
            </div>
            <h2 className="section-title">
              Key Features of <span>NeuroLXP E-Learning</span> Platform
            </h2>
            <p className="section-subtitle">
              Powerful tools and capabilities designed to deliver exceptional digital learning experiences.
            </p>
          </FadeInSection>

          {/* Features Showcase Image */}
          <FadeInSection>
            <div className="image-placeholder-section">
              <img src="/features-showcase.png" alt="Features Showcase Image" className="overview-image" />
            </div>
          </FadeInSection>

          <div className="usecase-cards-grid">
            {features.map((feature) => (
              <FadeInSection key={feature.id}>
                <div className="usecase-neu-card">
                  <div className="usecase-icon-wrapper">{feature.icon}</div>
                  <h3 className="usecase-card-title">{feature.title}</h3>
                  <p className="usecase-card-desc">{feature.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="ct-section">
        <div className="ct-container">
          <FadeInSection>
            <div className="section-badge">
              <span className="badge-dot" />
              Ideal For
            </div>
            <h2 className="section-title">
              Ideal for <span>Diverse Learning</span> Environments
            </h2>
            <p className="section-subtitle">
              NeuroLXP supports a wide range of digital learning initiatives across various sectors.
            </p>
          </FadeInSection>

          {/* Image Placeholder */}
          <FadeInSection>
            <div className="image-placeholder-section">
              <img src="/learning-environments.png" alt="Learning Environments" className="learning-environments-image" />
            </div>
          </FadeInSection>

          <div className="use-cases-cards-grid">

            <FadeInSection>
              <div className="usecase-neu-card">
                <div className="usecase-icon-wrapper"><FaGraduationCap /></div>
                <h3 className="usecase-card-title">Online Education</h3>
                <p className="usecase-card-desc">Online education for universities and schools with comprehensive digital learning tools.</p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="usecase-neu-card">
                <div className="usecase-icon-wrapper"><FaUsers /></div>
                <h3 className="usecase-card-title">Corporate Training</h3>
                <p className="usecase-card-desc">Corporate training and employee development programs for modern organizations.</p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="usecase-neu-card">
                <div className="usecase-icon-wrapper"><FaShieldAlt /></div>
                <h3 className="usecase-card-title">Certification Programs</h3>
                <p className="usecase-card-desc">Professional certification programs with structured learning paths.</p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="usecase-neu-card">
                <div className="usecase-icon-wrapper"><FaLightbulb /></div>
                <h3 className="usecase-card-title">Skill Development</h3>
                <p className="usecase-card-desc">Skill development and vocational training for career advancement.</p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="usecase-neu-card">
                <div className="usecase-icon-wrapper"><FaComments /></div>
                <h3 className="usecase-card-title">Customer Education</h3>
                <p className="usecase-card-desc">Customer and partner education programs to enhance product knowledge.</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ct-section ct-cta">
        <div className="ct-container">
          <FadeInSection>
            <div className="ct-cta-box">
              <h2 className="ct-cta-title">
                NeuroLXP — Powering the <span>Future of E-Learning</span>
              </h2>
              <p className="ct-cta-desc">
                With intelligent learning tools, interactive content, and scalable delivery capabilities, NeuroLXP empowers organizations and institutions to deliver impactful e-learning experiences that enhance engagement, improve knowledge retention, and drive meaningful learning outcomes.
              </p>
              <div className="ct-cta-actions">
                <a href="#" className="neu-btn neu-btn-primary neu-btn-lg">
                  Get Started Today
                </a>
                <a href="#" className="neu-btn neu-btn-outline neu-btn-lg">
                  Request Demo
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
