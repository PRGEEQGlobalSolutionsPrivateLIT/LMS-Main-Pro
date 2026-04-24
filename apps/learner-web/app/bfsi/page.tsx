import React from 'react';
import type { Metadata } from 'next';
import {
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaBookOpen,
  FaClipboardCheck,
  FaNetworkWired,
  FaGraduationCap,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaLock,
  FaBuilding,
} from 'react-icons/fa';
import './BFSI.css';

export const metadata: Metadata = {
  title: 'BFSI Solutions | Industries We Serve',
  description:
    'Secure, scalable learning for the BFSI industry. NeuroLXP provides AI-driven compliance training, skill development, and workforce readiness for banking, financial services, and insurance organizations.',
  keywords:
    'BFSI training, banking compliance, financial services learning, insurance training, regulatory compliance, LXP for BFSI',
  openGraph: {
    title: 'BFSI Solutions | Industries We Serve',
    description:
      'Empowering BFSI organizations with secure, compliant, and scalable learning solutions.',
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

export default function BFSIPage() {
  const challenges: Challenge[] = [
    {
      id: 1,
      icon: <FaShieldAlt className="challengeIcon" />,
      challenge: 'Regulatory Compliance and Frequent Policy Updates',
      description:
        'Financial institutions must constantly train employees on changing regulations, compliance policies, and industry standards.',
      solution:
        'NeuroLXP enables organizations to deliver structured compliance training modules with automated tracking, certification, and reporting. Institutions can ensure employees stay updated on regulatory requirements while maintaining complete training records for audits.',
    },
    {
      id: 2,
      icon: <FaChartLine className="challengeIcon" />,
      challenge: 'Continuous Skill Development in a Dynamic Industry',
      description:
        'The BFSI industry requires employees to continuously develop skills in areas such as financial analysis, digital banking, risk management, and customer relationship management.',
      solution:
        'NeuroLXP supports skill-based learning programs and professional development courses that help employees stay updated with evolving financial technologies, market trends, and industry best practices.',
    },
    {
      id: 3,
      icon: <FaNetworkWired className="challengeIcon" />,
      challenge: 'Training Large and Distributed Workforces',
      description:
        'Banks, financial institutions, and insurance companies often operate across multiple branches and geographic locations.',
      solution:
        'With a scalable digital learning platform, NeuroLXP enables organizations to deliver training programs to employees across branches and regions while ensuring consistent learning experiences.',
    },
    {
      id: 4,
      icon: <FaBookOpen className="challengeIcon" />,
      challenge: 'Product Knowledge and Analytics',
      description:
        'Financial professionals must have strong knowledge of financial products and services to effectively guide customers.',
      solution:
        'NeuroLXP allows organizations to create product training modules, interactive learning experiences, and assessment-based evaluations that strengthen employees\' knowledge of banking products, financial services, and insurance offerings.',
    },
    {
      id: 5,
      icon: <FaClipboardCheck className="challengeIcon" />,
      challenge: 'Monitoring Training Effectiveness',
      description:
        'Financial institutions must track employee learning progress and ensure training completion across departments.',
      solution:
        'NeuroLXP provides advanced analytics and reporting dashboards that give managers insights into learner engagement, assessment performance, and certification completion. This helps organizations measure training effectiveness and improve learning strategies.',
    },
  ];

  const benefits: Benefit[] = [
    {
      id: 1,
      icon: <FaShieldAlt className="benefitIcon" />,
      title: 'Structured Compliance Training',
      description: 'Deliver structured compliance and regulatory training to ensure workforce readiness',
    },
    {
      id: 2,
      icon: <FaGraduationCap className="benefitIcon" />,
      title: 'Employee Upskilling',
      description: 'Upskill employees with industry-relevant learning programs and professional development',
    },
    {
      id: 3,
      icon: <FaNetworkWired className="benefitIcon" />,
      title: 'Distributed Training',
      description: 'Train distributed branch networks efficiently across multiple locations',
    },
    {
      id: 4,
      icon: <FaBookOpen className="benefitIcon" />,
      title: 'Product Knowledge',
      description: 'Improve product knowledge and advisory capabilities for better customer service',
    },
    {
      id: 5,
      icon: <FaChartLine className="benefitIcon" />,
      title: 'Advanced Analytics',
      description: 'Monitor training performance through advanced analytics and reporting dashboards',
    },
    {
      id: 6,
      icon: <FaCheckCircle className="benefitIcon" />,
      title: 'Compliance Records',
      description: 'Maintain compliance records for regulatory audits with automated tracking',
    },
  ];

  return (
    <main className="neumorphic-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="heroContent">
          <h1 className="heroTitle">BFSI (Banking, Financial Services & Insurance)</h1>
          <p className="heroSubtitle">
            Secure, Scalable Learning for the BFSI Industry
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
            The Banking, Financial Services, and Insurance (BFSI) sector operates in a highly regulated and rapidly evolving environment. Organizations must continuously train employees, partners, and stakeholders on regulatory compliance, financial products, risk management, cybersecurity, and customer service.
          </p>
          
          <p className="heroDescription">
            NeuroLXP provides a powerful AI-driven Learning Experience Platform (LXP) for BFSI organizations, enabling them to deliver secure, scalable, and compliant digital learning programs that support workforce development and regulatory readiness.
          </p>

          {/* Hero Image Placeholder */}
          <div className="heroImage">
            <div className="imagePlaceholder">
              <FaShieldAlt style={{ fontSize: '4rem', marginBottom: '1rem', opacity: 0.5 }} />
              <div>BFSI Learning Platform Dashboard</div>
              <div className="imageLabel">Image: 1000x450px - Secure financial training management dashboard with compliance tracking</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="challenges">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Addressing Key Challenges in BFSI Training</h2>
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
          <h2 className="sectionTitle">Benefits for BFSI Organizations</h2>
          <p className="sectionSubtitle">
            BFSI organizations using NeuroLXP can transform their learning and development
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
          <h2 className="ctaTitle">Enabling Digital Transformation in Financial Services Learning</h2>
          <p className="ctaDescription">
            By leveraging modern learning technologies, BFSI organizations can strengthen compliance, improve employee skills, and enhance customer service. NeuroLXP helps financial institutions build scalable, technology-enabled learning ecosystems that support regulatory compliance and workforce development.
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
        <h3>NeuroLXP — Powering Learning for BFSI Organizations</h3>
        <p>
          With AI-powered learning tools, compliance-ready training modules, and advanced analytics, NeuroLXP empowers BFSI organizations to build knowledgeable, compliant, and future-ready workforces.
        </p>
        <button className="btn">
          Get Started Today
          <FaArrowRight className="btnIcon" />
        </button>
      </section>
    </main>
  );
}
