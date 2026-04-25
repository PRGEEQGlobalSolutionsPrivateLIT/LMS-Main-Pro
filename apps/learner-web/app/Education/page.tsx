import React from 'react';
import type { Metadata } from 'next';
import { FaGraduationCap, FaUsers, FaChartLine, FaRocket, FaPlay, FaSearch, FaBook, FaShieldAlt, FaTrophy, FaMobile, FaComments, FaLightbulb } from 'react-icons/fa';
import './page.css';
import { FadeInSection } from './FadeInSection';

export const metadata: Metadata = {
  title: 'Education Solutions | NeuroLXP',
  description: 'Transforming education through intelligent digital learning with NeuroLXP\'s AI-powered platform for schools, colleges, and universities.',
  keywords: 'education, digital learning, schools, universities, e-learning, LXP, learning platform, interactive learning, academic success',
};

interface Challenge {
  id: number;
  icon: React.ReactNode;
  challenge: string;
  description: string;
  solution: string;
}

interface Benefit {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function EducationPage() {
  const challenges: Challenge[] = [
    {
      id: 1,
      icon: <FaBook />,
      challenge: 'Passive Learning and Low Student Engagement',
      description: 'Traditional lecture-based teaching methods often result in passive learning where students consume information without active participation.',
      solution: 'NeuroLXP integrates interactive learning activities, gamification, quizzes, discussions, and multimedia content that encourage students to actively engage with the learning material and improve knowledge retention.',
    },
    {
      id: 2,
      icon: <FaBook />,
      challenge: 'Managing Large Volumes of Academic Content',
      description: 'Educational institutions handle vast amounts of learning materials including lecture notes, videos, textbooks, assignments, and assessments.',
      solution: 'NeuroLXP provides a centralized content creation and management system where educators can easily organize, update, and distribute learning resources. AI-powered tools can also convert long materials into concise summaries, exam-focused resources, and discussion topics.',
    },
    {
      id: 3,
      icon: <FaUsers />,
      challenge: 'Diverse Learning Needs and Learning Speeds',
      description: 'Students have different learning styles and progress at different speeds, making it difficult to meet everyone\'s needs in a traditional classroom.',
      solution: 'NeuroLXP supports personalized learning pathways and adaptive learning experiences, allowing students to learn at their own pace while accessing additional resources and practice materials when needed.',
    },
    {
      id: 4,
      icon: <FaChartLine />,
      challenge: 'Monitoring Student Progress and Performance',
      description: 'Educators need clear insights into student engagement, performance, and learning gaps.',
      solution: 'With advanced learning analytics and reporting tools, NeuroLXP allows educators to track student participation, course progress, assessment performance, and skill development. These insights help instructors provide targeted guidance and support.',
    },
    {
      id: 5,
      icon: <FaRocket />,
      challenge: 'Preparing Students for Real-World Careers',
      description: 'Modern education must focus not only on academic knowledge but also on practical skills and career readiness.',
      solution: 'NeuroLXP enables institutions to offer skill-based courses, career pathways, and industry-aligned learning programs that help students build competencies required for the workforce.',
    },
  ];

  const benefits: Benefit[] = [
    {
      id: 1,
      icon: <FaPlay />,
      title: 'Engaging Digital Learning',
      description: 'Deliver engaging digital and blended learning experiences that captivate students.',
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: 'Improved Student Outcomes',
      description: 'Improve student participation and academic outcomes through interactive learning.',
    },
    {
      id: 3,
      icon: <FaLightbulb />,
      title: 'Personalized Learning',
      description: 'Provide personalized and flexible learning opportunities for diverse student needs.',
    },
    {
      id: 4,
      icon: <FaBook />,
      title: 'Efficient Content Management',
      description: 'Manage academic content efficiently with centralized tools and AI assistance.',
    },
    {
      id: 5,
      icon: <FaChartLine />,
      title: 'Data-Driven Insights',
      description: 'Track student progress through comprehensive analytics and reporting.',
    },
    {
      id: 6,
      icon: <FaRocket />,
      title: 'Career Development Support',
      description: 'Support career development and skill-based learning for future success.',
    },
  ];

  return (
    <main className="neumorphic-page">
      {/* Hero Section */}
      <section className="ct-hero ct-hero-education">
        <div className="ct-container">
          <div className="ct-hero-grid">
            {/* Left — Content */}
            <FadeInSection>
              <div className="education-hero-content">
                <div className="section-badge">
                  <span className="badge-dot" />
                  Education
                </div>
                <h1 className="ct-hero-title">
                  Transforming Education Through <span>Intelligent Digital Learning</span>
                </h1>
                <p className="ct-hero-desc">
                  Education is evolving rapidly as institutions adopt technology to enhance teaching, improve student engagement, and deliver flexible learning experiences. NeuroLXP provides a powerful digital learning platform designed to support modern education systems, enabling schools, colleges, universities, and training institutions to create interactive and effective learning environments.
                </p>
                <p className="ct-hero-desc">
                  With advanced tools for content delivery, assessments, collaboration, and analytics, NeuroLXP helps educators and institutions provide meaningful learning experiences that prepare students for academic success and future careers.
                </p>

                <div className="hero-highlights">
                  <div className="hero-pill">Interactive class experiences</div>
                  <div className="hero-pill">Adaptive learning pathways</div>
                  <div className="hero-pill">Real-time educator insights</div>
                </div>

                <div className="image-placeholder">
                  <img src="/education-hero-visual.png" alt="Education Hero Visual" className="hero-image" />
                </div>

                <div className="ct-hero-actions">
                  <a href="#" className="neu-btn neu-btn-primary neu-btn-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                    Start Free Trial
                  </a>
                  <a href="#benefits" className="neu-btn neu-btn-outline neu-btn-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                    </svg>
                    Explore Platform
                  </a>
                </div>
              </div>
            </FadeInSection>

            {/* Right — Visual Panel */}
            <FadeInSection>
              <div className="education-hero-panel">
                <div className="hero-visual-block">
                  <div className="hero-visual-header">
                    <div>
                      <div className="hero-card-title">Education Dashboard</div>
                      <div className="hero-card-note">Real-time classroom and student analytics</div>
                    </div>
                    <div className="hero-card-tag">Trusted</div>
                  </div>

                  <div className="image-placeholder-hero">
                    <img src="/education-dashboard-preview.png" alt="Education Dashboard Preview" className="dashboard-image" />
                  </div>

                  <div className="education-stats-row">
                    <div className="education-stat-card">
                      <div className="stat-val">92%</div>
                      <div className="stat-lbl">Course completion</div>
                    </div>
                    <div className="education-stat-card">
                      <div className="stat-val">8.5/10</div>
                      <div className="stat-lbl">Student satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
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
              Key Challenges in <span>Education</span>
            </h2>
            <p className="section-subtitle">
              Educational institutions face unique challenges in delivering effective learning experiences. NeuroLXP addresses each challenge with intelligent solutions.
            </p>
          </FadeInSection>

          {/* Challenges Overview Image Placeholder - education-challenges-overview.png (1200x400) */}
          <FadeInSection>
            <div className="image-placeholder-section">
              <img src="/education-challenges-overview.png" alt="Education Challenges Overview" className="overview-image" />
            </div>
          </FadeInSection>

          <div className="ct-challenges-grid">
            {challenges.slice(0, 3).map((item) => (
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

          <div className="challenge-bottom-row">
            {challenges.slice(3).map((item) => (
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

      {/* Benefits Section */}
      <section className="ct-section" id="benefits">
        <div className="ct-container">
          <FadeInSection>
            <div className="section-badge">
              <span className="badge-dot" />
              Benefits for Institutions
            </div>
            <h2 className="section-title">
              Benefits for <span>Educational Institutions</span>
            </h2>
            <p className="section-subtitle">
              Institutions using NeuroLXP can transform their educational offerings and achieve better outcomes.
            </p>
          </FadeInSection>

          {/* Benefits Showcase Image Placeholder - education-benefits-showcase.png (1200x400) */}
          <FadeInSection>
            <div className="image-placeholder-section">
              <img src="/education-benefits-showcase.png" alt="Education Benefits Showcase" className="overview-image" />
            </div>
          </FadeInSection>

          <div className="usecase-cards-grid">
            {benefits.map((benefit) => (
              <FadeInSection key={benefit.id}>
                <div className="usecase-neu-card">
                  <div className="usecase-icon-wrapper">{benefit.icon}</div>
                  <h3 className="usecase-card-title">{benefit.title}</h3>
                  <p className="usecase-card-desc">{benefit.description}</p>
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
              Perfect For
            </div>
            <h2 className="section-title">
              Perfect for <span>Educational Excellence</span>
            </h2>
            <p className="section-subtitle">
              NeuroLXP supports educational institutions at every level with comprehensive digital learning solutions.
            </p>
          </FadeInSection>

          {/* Learning Environments Image Placeholder - education-learning-environments.png (1200x400) */}
          <FadeInSection>
            <div className="image-placeholder-section">
              <img src="/education-learning-environments.png" alt="Education Learning Environments" className="learning-environments-image" />
            </div>
          </FadeInSection>

          <div className="use-cases-cards-grid">
            <FadeInSection>
              <div className="usecase-neu-card">
                <div className="usecase-icon-wrapper"><FaGraduationCap /></div>
                <h3 className="usecase-card-title">K-12 Schools</h3>
                <p className="usecase-card-desc">Comprehensive digital learning solutions for primary and secondary education.</p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="usecase-neu-card">
                <div className="usecase-icon-wrapper"><FaUsers /></div>
                <h3 className="usecase-card-title">Universities & Colleges</h3>
                <p className="usecase-card-desc">Advanced learning platforms for higher education institutions.</p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="usecase-neu-card">
                <div className="usecase-icon-wrapper"><FaShieldAlt /></div>
                <h3 className="usecase-card-title">Vocational Training</h3>
                <p className="usecase-card-desc">Skill-based training programs for career and technical education.</p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="usecase-neu-card">
                <div className="usecase-icon-wrapper"><FaLightbulb /></div>
                <h3 className="usecase-card-title">Specialized Institutes</h3>
                <p className="usecase-card-desc">Tailored learning solutions for specialized educational institutions.</p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="usecase-neu-card">
                <div className="usecase-icon-wrapper"><FaComments /></div>
                <h3 className="usecase-card-title">Online Academies</h3>
                <p className="usecase-card-desc">Virtual learning environments for online education providers.</p>
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
                NeuroLXP — Enabling the <span>Future of Education</span>
              </h2>
              <p className="ct-cta-desc">
                With powerful learning tools, interactive content, and intelligent analytics, NeuroLXP helps educational institutions create innovative learning environments that empower students, support educators, and drive better academic outcomes.
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