import React from 'react';
import type { Metadata } from 'next';
import {
  FaLandmark,
  FaUsers,
  FaBookOpen,
  FaShieldAlt,
  FaClipboardCheck,
  FaChartLine,
  FaGraduationCap,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaBuilding,
  FaGlobe,
} from 'react-icons/fa';
import './States.css';

export const metadata: Metadata = {
  title: 'Government & State Institutions | Industries We Serve',
  description:
    'Scalable Learning Experience Platform for state governments and public institutions. NeuroLXP delivers structured training, compliance programs, and citizen skill development at scale.',
  keywords:
    'government training, state institutions, public sector learning, compliance training, workforce development, citizen skilling',
  openGraph: {
    title: 'Government & State Institutions | Industries We Serve',
    description:
      'Empowering state governments with scalable, technology-enabled learning ecosystems.',
    type: 'website',
  },
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

export default function StatesPage() {
  const challenges: Challenge[] = [
    {
      id: 1,
      icon: <FaShieldAlt className="challengeIcon" />,
      challenge: 'Regulatory Compliance and Policy Training',
      description:
        'Government institutions must ensure all employees understand and comply with evolving regulations, policies, and procedures.',
      solution:
        'NeuroLXP delivers structured compliance training modules with automated tracking and certification, ensuring government employees stay updated on regulatory requirements.',
    },
    {
      id: 2,
      icon: <FaUsers className="challengeIcon" />,
      challenge: 'Training Large Public Workforces',
      description:
        'State governments and public institutions have large, diverse workforces that require coordinated training programs.',
      solution:
        'NeuroLXP provides a scalable platform that enables organizations to deliver consistent training to thousands of employees across departments and locations.',
    },
    {
      id: 3,
      icon: <FaBuilding className="challengeIcon" />,
      challenge: 'Digital Transformation in Public Sector',
      description:
        'Government agencies are transitioning to digital operations and need to upskill employees on new technologies.',
      solution:
        'NeuroLXP supports digital literacy training, technology adoption programs, and change management learning pathways.',
    },
    {
      id: 4,
      icon: <FaClipboardCheck className="challengeIcon" />,
      challenge: 'Monitoring Training Completion',
      description:
        'Public institutions must track employee training progress and ensure compliance with mandatory training requirements.',
      solution:
        'NeuroLXP provides comprehensive analytics and reporting dashboards that give administrators visibility into training completion rates and compliance status.',
    },
    {
      id: 5,
      icon: <FaGlobe className="challengeIcon" />,
      challenge: 'Serving Citizens Effectively',
      description:
        'Government employees need continuous training to improve public service delivery and citizen engagement.',
      solution:
        'NeuroLXP enables customer service training, communication skills development, and public service excellence programs.',
    },
  ];

  const benefits: Benefit[] = [
    {
      id: 1,
      icon: <FaShieldAlt className="benefitIcon" />,
      title: 'Compliance Training',
      description: 'Deliver mandatory compliance and regulatory training at scale',
    },
    {
      id: 2,
      icon: <FaUsers className="benefitIcon" />,
      title: 'Workforce Development',
      description: 'Upskill and reskill public sector employees for modern governance',
    },
    {
      id: 3,
      icon: <FaGraduationCap className="benefitIcon" />,
      title: 'Citizen Skilling Programs',
      description: 'Provide learning opportunities for citizens to develop job-ready skills',
    },
    {
      id: 4,
      icon: <FaChartLine className="benefitIcon" />,
      title: 'Advanced Analytics',
      description: 'Monitor training effectiveness and compliance with detailed reports',
    },
    {
      id: 5,
      icon: <FaBuilding className="benefitIcon" />,
      title: 'Scalable Infrastructure',
      description: 'Support large-scale training programs across multiple departments',
    },
    {
      id: 6,
      icon: <FaCheckCircle className="benefitIcon" />,
      title: 'Standardized Training',
      description: 'Ensure consistent learning experiences across all government offices',
    },
  ];

  return (
    <main className="neumorphic-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="heroContent">
          <h1 className="heroTitle">Government & State Institutions</h1>
          <p className="heroSubtitle">
            Scalable Training for Public Sector Excellence
          </p>

          <div className="heroButtons">
            <button className="btn">
              <span>Request Demo</span>
              <FaArrowRight className="btnIcon" />
            </button>
            <button className="btn">
              <FaPlay className="btnIcon" />
              <span>Watch Overview</span>
            </button>
          </div>

          <p className="heroDescription">
            Government agencies and state institutions play a critical role in public service delivery, policy implementation, and citizen engagement. To serve communities effectively, public sector organizations must continuously train employees on regulatory compliance, digital transformation, customer service, and operational excellence.
          </p>
          
          <p className="heroDescription">
            NeuroLXP provides a scalable Learning Experience Platform (LXP) for government and state institutions, enabling them to deliver structured training programs, track compliance, and build future-ready public workforces.
          </p>

          {/* Hero Image Placeholder */}
          <div className="heroImage">
            <div className="imagePlaceholder">
              <FaLandmark style={{ fontSize: '4rem', marginBottom: '1rem', opacity: 0.5 }} />
              <div>Government Training Management Dashboard</div>
              <div className="imageLabel">Image: 1000x450px - Public sector training compliance tracking dashboard</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="challenges">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Addressing Key Challenges in Government Training</h2>
        </div>

        <div className="challengesGrid">
          {challenges.map((item) => (
            <div key={item.id} className="challengeCard">
              {item.icon}
              <h3 className="challengeTitle">Challenge: {item.challenge}</h3>
              <p className="challengeDescription">{item.description}</p>
              <div className="solutionLabel">How NeuroLXP Helps</div>
              <p className="solutionDescription">{item.solution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Benefits for Government Institutions</h2>
          <p className="sectionSubtitle">
            State governments and public institutions using NeuroLXP can transform their workforce development
          </p>
        </div>

        <div className="benefitsGrid">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefitCard">
              <div className="benefitIconWrapper">{benefit.icon}</div>
              <h3 className="benefitTitle">{benefit.title}</h3>
              <p className="benefitDescription">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="ctaContent">
          <h2 className="ctaTitle">Modernizing Public Sector Learning</h2>
          <p className="ctaDescription">
            By leveraging modern learning technologies, government institutions can improve employee capabilities, ensure regulatory compliance, and enhance public service delivery. NeuroLXP helps state governments build scalable, technology-enabled learning ecosystems that support digital transformation and workforce readiness.
          </p>

          <div className="ctaButtons">
            <button className="btn">
              Schedule a Demo
              <FaArrowRight className="btnIcon" />
            </button>
            <button className="btn btn-outline">
              <span>Contact Sales</span>
              <FaArrowRight className="btnIcon" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footerCta">
        <h3>NeuroLXP — Powering Learning for Government & State Institutions</h3>
        <p>
          With AI-powered learning tools, compliance-ready training modules, and advanced analytics, NeuroLXP empowers government institutions to build knowledgeable, compliant, and future-ready public workforces that serve citizens effectively.
        </p>
        <button className="btn">
          Get Started Today
          <FaArrowRight className="btnIcon" />
        </button>
      </section>
    </main>
  );
}
