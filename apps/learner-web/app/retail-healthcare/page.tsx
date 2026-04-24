import React from 'react';
import type { Metadata } from 'next';
import {
  FaShoppingCart,
  FaUsers,
  FaBookOpen,
  FaStore,
  FaClipboardCheck,
  FaChartLine,
  FaGraduationCap,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaHeartbeat,
  FaUserMd,
  FaHospital,
} from 'react-icons/fa';
import './RetailHealthcare.css';

export const metadata: Metadata = {
  title: 'Retail & Healthcare Solutions | Industries We Serve',
  description:
    'Scalable learning solutions for retail and healthcare industries. NeuroLXP provides training platforms for store associates, healthcare professionals, compliance, and continuous development.',
  keywords:
    'retail training, healthcare education, LXP for retail, medical training, compliance learning, employee onboarding',
  openGraph: {
    title: 'Retail & Healthcare Solutions | Industries We Serve',
    description:
      'Empowering retail and healthcare organizations with scalable, compliant learning solutions.',
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

export default function RetailHealthcarePage() {
  const retailChallenges: Challenge[] = [
    {
      id: 1,
      icon: <FaUsers className="challengeIcon" />,
      challenge: 'High Employee Turnover',
      description:
        'Retail organizations often face high staff turnover, making continuous onboarding and training essential.',
      solution:
        'NeuroLXP enables structured employee onboarding and induction programs that help new hires quickly understand company policies, store operations, and customer service expectations.',
    },
    {
      id: 2,
      icon: <FaShoppingCart className="challengeIcon" />,
      challenge: 'Product Knowledge and Customer Engagement',
      description:
        'Retail employees must stay updated on frequently changing product lines and promotions to provide accurate information to customers.',
      solution:
        'NeuroLXP allows retailers to deliver product training modules, interactive learning activities, and quick microlearning lessons that keep employees informed about new products and sales strategies.',
    },
    {
      id: 3,
      icon: <FaStore className="challengeIcon" />,
      challenge: 'Training Distributed Store Networks',
      description:
        'Retail chains often operate across multiple locations, making consistent training delivery difficult.',
      solution:
        'With a mobile-friendly learning platform, NeuroLXP enables employees to access training content anytime and anywhere, ensuring consistent learning across all store locations.',
    },
  ];

  const retailBenefits: Benefit[] = [
    {
      id: 1,
      icon: <FaShoppingCart className="benefitIcon" />,
      title: 'Consistent Training',
      description: 'Deliver consistent product and service training across all store locations',
    },
    {
      id: 2,
      icon: <FaUsers className="benefitIcon" />,
      title: 'Improved Customer Experience',
      description: 'Improve customer experience through knowledgeable and well-trained staff',
    },
    {
      id: 3,
      icon: <FaGraduationCap className="benefitIcon" />,
      title: 'Quick Onboarding',
      description: 'Onboard new employees quickly and efficiently with structured programs',
    },
    {
      id: 4,
      icon: <FaBookOpen className="benefitIcon" />,
      title: 'Continuous Development',
      description: 'Provide continuous skill development for retail teams',
    },
    {
      id: 5,
      icon: <FaChartLine className="benefitIcon" />,
      title: 'Performance Tracking',
      description: 'Track employee training progress and performance with analytics',
    },
  ];

  const healthcareChallenges: Challenge[] = [
    {
      id: 1,
      icon: <FaClipboardCheck className="challengeIcon" />,
      challenge: 'Regulatory Compliance and Certification',
      description:
        'Healthcare professionals must comply with strict regulatory standards and maintain updated certifications.',
      solution:
        'NeuroLXP supports compliance training modules and certification programs that ensure healthcare staff remain aligned with industry regulations and clinical guidelines.',
    },
    {
      id: 2,
      icon: <FaHeartbeat className="challengeIcon" />,
      challenge: 'Continuous Medical Education',
      description:
        'Healthcare professionals must constantly update their knowledge to keep pace with medical advancements.',
      solution:
        'NeuroLXP enables institutions to deliver continuous medical education (CME), skill development courses, and interactive learning modules that support ongoing professional growth.',
    },
    {
      id: 3,
      icon: <FaHospital className="challengeIcon" />,
      challenge: 'Training Large Healthcare Teams',
      description:
        'Hospitals and healthcare networks often have large and diverse teams that require coordinated training.',
      solution:
        'NeuroLXP provides a centralized learning platform where healthcare administrators can manage training programs, distribute learning resources, and monitor staff progress across departments.',
    },
  ];

  const healthcareBenefits: Benefit[] = [
    {
      id: 1,
      icon: <FaHeartbeat className="benefitIcon" />,
      title: 'Compliance Training',
      description: 'Deliver structured compliance and clinical training programs',
    },
    {
      id: 2,
      icon: <FaUserMd className="benefitIcon" />,
      title: 'Professional Development',
      description: 'Support continuous professional development for medical staff',
    },
    {
      id: 3,
      icon: <FaHospital className="benefitIcon" />,
      title: 'Better Patient Care',
      description: 'Improve patient care through well-trained healthcare professionals',
    },
    {
      id: 4,
      icon: <FaCheckCircle className="benefitIcon" />,
      title: 'Certification Tracking',
      description: 'Monitor certification and training completion automatically',
    },
    {
      id: 5,
      icon: <FaChartLine className="benefitIcon" />,
      title: 'Scalable Programs',
      description: 'Scale learning programs across hospital networks efficiently',
    },
  ];

  return (
    <main className="neumorphic-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="heroContent">
          <h1 className="heroTitle">Retail & Healthcare</h1>
          <p className="heroSubtitle">
            Empowering Teams with Continuous Learning Solutions
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
            Retail and healthcare industries operate in dynamic environments where continuous learning is essential for success. NeuroLXP provides powerful digital learning solutions for both sectors.
          </p>

          {/* Hero Image Placeholder */}
          <div className="heroImage">
            <div className="imagePlaceholder">
              <FaStore style={{ fontSize: '4rem', marginBottom: '1rem', opacity: 0.5 }} />
              <div>Retail & Healthcare Learning Platform Dashboard</div>
              <div className="imageLabel">Image: 1000x450px - Multi-sector training management dashboard</div>
            </div>
          </div>
        </div>
      </section>

      {/* Retail Challenges Section */}
      <section className="challenges">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Retail Industry</h2>
          <p className="sectionSubtitle">Empowering Retail Teams with Continuous Learning</p>
        </div>

        <div className="challengesGrid">
          {retailChallenges.map((item) => (
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

      {/* Retail Benefits Section */}
      <section className="benefits">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Benefits for Retail Organizations</h2>
        </div>

        <div className="benefitsGrid">
          {retailBenefits.map((benefit) => (
            <div key={benefit.id} className="benefitCard">
              <div className="benefitIconWrapper">{benefit.icon}</div>
              <h3 className="benefitTitle">{benefit.title}</h3>
              <p className="benefitDescription">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Healthcare Challenges Section */}
      <section className="challenges">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Healthcare Industry</h2>
          <p className="sectionSubtitle">Enabling Continuous Learning for Healthcare Professionals</p>
        </div>

        <div className="challengesGrid">
          {healthcareChallenges.map((item) => (
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

      {/* Healthcare Benefits Section */}
      <section className="benefits">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Benefits for Healthcare Organizations</h2>
        </div>

        <div className="benefitsGrid">
          {healthcareBenefits.map((benefit) => (
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
          <h2 className="ctaTitle">NeuroLXP — Powering Learning for Retail and Healthcare</h2>
          <p className="ctaDescription">
            With flexible learning tools, mobile accessibility, and advanced analytics, NeuroLXP enables retail and healthcare organizations to build knowledgeable, skilled, and future-ready workforces while maintaining high operational and service standards.
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
        <h3>NeuroLXP — Powering Learning for Retail and Healthcare</h3>
        <p>
          With AI-powered learning tools, mobile accessibility, and advanced analytics, NeuroLXP empowers retail and healthcare organizations to build knowledgeable, compliant, and future-ready workforces that deliver exceptional service and care.
        </p>
        <button className="btn">
          Get Started Today
          <FaArrowRight className="btnIcon" />
        </button>
      </section>
    </main>
  );
}
