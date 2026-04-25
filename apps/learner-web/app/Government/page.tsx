import React from 'react';
import type { Metadata } from 'next';
import { FaGraduationCap, FaUsers, FaChartLine, FaRocket, FaPlay, FaSearch, FaBook, FaShieldAlt, FaTrophy, FaMobile, FaComments, FaLightbulb, FaFileAlt, FaUserTie } from 'react-icons/fa';
import './page.css';
import { FadeInSection } from './FadeInSection';

export const metadata: Metadata = {
  title: 'Government Solutions | NeuroLXP',
  description: 'Enabling governments to upskill and empower their workforce through AI-powered digital learning and policy training programs.',
  keywords: 'government training, public sector, workforce development, digital governance, policy training, public administration, LXP',
};

interface Challenge {
  id: number;
  icon: React.ReactNode;
  challenge: string;
  description: string;
  solution: string;
}

interface UseCase {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Benefit {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function GovernmentPage() {
  const challenges: Challenge[] = [
    {
      id: 1,
      icon: <FaUsers />,
      challenge: 'Large and Distributed Government Workforces',
      description: 'Government agencies often operate across multiple departments and geographical regions, making it difficult to deliver consistent training programs.',
      solution: 'NeuroLXP provides a centralized digital learning platform where government bodies can deliver standardized training programs to employees across departments, districts, and state-level offices.',
    },
    {
      id: 2,
      icon: <FaFileAlt />,
      challenge: 'Rapid Policy and Technology Changes',
      description: 'Public sector employees must stay updated with evolving policies, regulations, digital governance initiatives, and administrative practices.',
      solution: 'NeuroLXP enables governments to deliver policy training, governance modules, and technology skill programs that ensure employees remain informed and capable of implementing new initiatives effectively.',
    },
    {
      id: 3,
      icon: <FaUserTie />,
      challenge: 'Continuous Skill Development for Public Sector Employees',
      description: 'Government workforces increasingly require skills in areas such as digital governance, data management, public administration, and citizen service delivery.',
      solution: 'Through skill-based learning programs and career development pathways, NeuroLXP supports continuous professional development for government employees at all levels.',
    },
    {
      id: 4,
      icon: <FaChartLine />,
      challenge: 'Monitoring Training Effectiveness',
      description: 'Government institutions need clear insights into whether workforce training programs are delivering meaningful results.',
      solution: 'NeuroLXP provides advanced analytics and reporting dashboards that allow administrators to track participation, training completion, skill development, and program impact across departments.',
    },
  ];

  const useCases: UseCase[] = [
    {
      id: 1,
      icon: <FaBook />,
      title: 'Public Administration Training',
      description: 'Governance and public administration skill development programs.',
    },
    {
      id: 2,
      icon: <FaShieldAlt />,
      title: 'Policy Compliance Programs',
      description: 'Policy awareness and regulatory compliance training initiatives.',
    },
    {
      id: 3,
      icon: <FaRocket />,
      title: 'Digital Governance',
      description: 'Technology adoption and digital transformation training for government.',
    },
    {
      id: 4,
      icon: <FaUsers />,
      title: 'Leadership Development',
      description: 'Leadership and professional development for government officials.',
    },
    {
      id: 5,
      icon: <FaLightbulb />,
      title: 'Citizen Service Training',
      description: 'Service delivery excellence and citizen-focused service training.',
    },
    {
      id: 6,
      icon: <FaChartLine />,
      title: 'Performance Analytics',
      description: 'Workforce performance tracking and training outcome measurement.',
    },
  ];

  const benefits: Benefit[] = [
    {
      id: 1,
      icon: <FaUsers />,
      title: 'Upskill Across Departments',
      description: 'Upskill employees across all departments and regions consistently.',
    },
    {
      id: 2,
      icon: <FaFileAlt />,
      title: 'Policy Training',
      description: 'Deliver consistent policy and governance training programs.',
    },
    {
      id: 3,
      icon: <FaRocket />,
      title: 'Digital Transformation',
      description: 'Support digital transformation initiatives across government.',
    },
    {
      id: 4,
      icon: <FaChartLine />,
      title: 'Improved Efficiency',
      description: 'Improve workforce efficiency and service delivery outcomes.',
    },
    {
      id: 5,
      icon: <FaSearch />,
      title: 'Data-Driven Insights',
      description: 'Track learning outcomes through comprehensive analytics.',
    },
    {
      id: 6,
      icon: <FaTrophy />,
      title: 'Capability Building',
      description: 'Build capable public sector teams for modern governance.',
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
                  Government
                </div>
                <h1 className="ct-hero-title">
                  Enabling Governments to <span>Upskill and Empower</span> Their Workforce
                </h1>
                <p className="ct-hero-desc">
                  Government institutions play a vital role in delivering public services, implementing policies, and driving national development. To perform these responsibilities effectively, public sector employees must continuously update their skills, adapt to new technologies, and stay informed about evolving policies and regulations.
                </p>
                <p className="ct-hero-desc">
                  With a scalable Learning Experience Platform (LXP) for government training, NeuroLXP helps public sector organizations deliver training programs efficiently across departments, regions, and administrative levels.
                </p>

                <div className="hero-highlights">
                  <div className="hero-pill">Policy and governance training</div>
                  <div className="hero-pill">Distributed workforce support</div>
                  <div className="hero-pill">Compliance and accountability</div>
                </div>

                <div className="image-placeholder">
                  <img src="/government-hero-visual.png" alt="Government Hero Visual" className="hero-image" />
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
                      <div className="hero-card-title">Government Dashboard</div>
                      <div className="hero-card-note">Workforce training and analytics portal</div>
                    </div>
                    <div className="hero-card-tag">Secure</div>
                  </div>

                  <div className="image-placeholder-hero">
                    <img src="/government-dashboard-preview.png" alt="Government Dashboard Preview" className="dashboard-image" />
                  </div>

                  <div className="education-stats-row">
                    <div className="education-stat-card">
                      <div className="stat-val">85%</div>
                      <div className="stat-lbl">Training completion</div>
                    </div>
                    <div className="education-stat-card">
                      <div className="stat-val">150K+</div>
                      <div className="stat-lbl">Employees trained</div>
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
              Key Challenges in <span>Government Workforce Development</span>
            </h2>
            <p className="section-subtitle">
              Government agencies face unique challenges in training and developing their distributed workforce. NeuroLXP provides targeted solutions.
            </p>
          </FadeInSection>

          {/* Challenges Overview Image - government-challenges-overview.png (1200x400) */}
          <FadeInSection>
            <div className="image-placeholder-section">
              <img src="/government-challenges-overview.png" alt="Government Challenges Overview" className="overview-image" />
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

      {/* Use Cases Section */}
      <section className="ct-section" id="usecases">
        <div className="ct-container">
          <FadeInSection>
            <div className="section-badge">
              <span className="badge-dot" />
              Government Learning Use Cases
            </div>
            <h2 className="section-title">
              Government <span>Learning Solutions</span>
            </h2>
            <p className="section-subtitle">
              Governments can use NeuroLXP to support a wide range of workforce development initiatives and training programs.
            </p>
          </FadeInSection>

          {/* Use Cases Showcase Image - government-usecases-showcase.png (1200x400) */}
          <FadeInSection>
            <div className="image-placeholder-section">
              <img src="/government-usecases-showcase.png" alt="Government Use Cases Showcase" className="overview-image" />
            </div>
          </FadeInSection>

          <div className="usecase-cards-grid">
            {useCases.map((useCase) => (
              <FadeInSection key={useCase.id}>
                <div className="usecase-neu-card">
                  <div className="usecase-icon-wrapper">{useCase.icon}</div>
                  <h3 className="usecase-card-title">{useCase.title}</h3>
                  <p className="usecase-card-desc">{useCase.description}</p>
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
              Benefits for Government
            </div>
            <h2 className="section-title">
              Benefits for <span>Government Institutions</span>
            </h2>
            <p className="section-subtitle">
              Government agencies using NeuroLXP can transform their workforce development approach and achieve measurable outcomes.
            </p>
          </FadeInSection>

          {/* Benefits Showcase Image - government-benefits-showcase.png (1200x400) */}
          <FadeInSection>
            <div className="image-placeholder-section">
              <img src="/government-benefits-showcase.png" alt="Government Benefits Showcase" className="overview-image" />
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

      {/* CTA Section */}
      <section className="ct-section ct-cta">
        <div className="ct-container">
          <FadeInSection>
            <div className="ct-cta-box">
              <h2 className="ct-cta-title">
                NeuroLXP — Powering <span>Government Workforce Transformation</span>
              </h2>
              <p className="ct-cta-desc">
                By enabling structured learning programs, scalable digital training delivery, and data-driven workforce development, NeuroLXP helps governments build capable public sector teams that are prepared to meet the challenges of modern governance.
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
