import React from 'react';
import type { Metadata } from 'next';
import {
  FaHeart,
  FaUsers,
  FaBookOpen,
  FaGlobe,
  FaHandHoldingHeart,
  FaLightbulb,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaGraduationCap,
  FaHandsHelping,
} from 'react-icons/fa';
import './NonProfit.css';

export const metadata: Metadata = {
  title: 'Nonprofit Solutions | Industries We Serve',
  description:
    'Empowering nonprofits with learning and capacity building through NeuroLXP. Deliver volunteer training, knowledge sharing, and impact measurement for social impact organizations.',
  keywords:
    'nonprofit training, volunteer education, community learning, nonprofit capacity building, LXP for nonprofits, social impact learning',
  openGraph: {
    title: 'Nonprofit Solutions | Industries We Serve',
    description:
      'Empowering nonprofits with learning and capacity building through NeuroLXP.',
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

interface UseCase {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function NonProfitPage() {
  const challenges: Challenge[] = [
    {
      id: 1,
      icon: <FaUsers className="challengeIcon" />,
      challenge: 'Training Volunteers and Staff',
      description:
        'Nonprofit organizations rely heavily on volunteers and staff who need proper training to effectively serve their communities.',
      solution:
        'NeuroLXP provides structured training programs and onboarding modules that help volunteers and staff quickly understand organizational values, procedures, and best practices.',
    },
    {
      id: 2,
      icon: <FaGlobe className="challengeIcon" />,
      challenge: 'Limited Resources for Training',
      description:
        'Nonprofits often operate with limited budgets, making it difficult to invest in expensive training solutions.',
      solution:
        'NeuroLXP offers an affordable, scalable learning platform that enables nonprofits to deliver high-quality training without significant financial investment.',
    },
    {
      id: 3,
      icon: <FaHandsHelping className="challengeIcon" />,
      challenge: 'Knowledge Sharing Across Locations',
      description:
        'Many nonprofits operate across multiple regions and need to share knowledge and best practices effectively.',
      solution:
        'With cloud-based learning capabilities, NeuroLXP enables organizations to share training content, resources, and knowledge across all locations seamlessly.',
    },
    {
      id: 4,
      icon: <FaChartLine className="challengeIcon" />,
      challenge: 'Measuring Impact and Learning Outcomes',
      description:
        'Nonprofits need to track the effectiveness of their training programs to demonstrate impact to stakeholders and donors.',
      solution:
        'NeuroLXP provides analytics and reporting tools that help nonprofits measure learning outcomes, track engagement, and demonstrate the impact of their capacity building efforts.',
    },
  ];

  const benefits: Benefit[] = [
    {
      id: 1,
      icon: <FaHandsHelping className="benefitIcon" />,
      title: 'Volunteer Training',
      description: 'Deliver structured volunteer training and onboarding programs',
    },
    {
      id: 2,
      icon: <FaGlobe className="benefitIcon" />,
      title: 'Global Reach',
      description: 'Share knowledge and training across multiple locations and regions',
    },
    {
      id: 3,
      icon: <FaBookOpen className="benefitIcon" />,
      title: 'Resource Library',
      description: 'Build comprehensive training libraries for staff and volunteers',
    },
    {
      id: 4,
      icon: <FaChartLine className="benefitIcon" />,
      title: 'Impact Tracking',
      description: 'Measure learning outcomes and demonstrate organizational impact',
    },
    {
      id: 5,
      icon: <FaGraduationCap className="benefitIcon" />,
      title: 'Capacity Building',
      description: 'Strengthen organizational capacity through continuous learning',
    },
    {
      id: 6,
      icon: <FaHeart className="benefitIcon" />,
      title: 'Mission Alignment',
      description: 'Align training programs with organizational mission and values',
    },
  ];

  const useCases: UseCase[] = [
    {
      id: 1,
      icon: <FaUsers className="benefitIcon" />,
      title: 'Community Organizations',
      description: 'Train community leaders and volunteers to serve local populations effectively',
    },
    {
      id: 2,
      icon: <FaGlobe className="benefitIcon" />,
      title: 'International NGOs',
      description: 'Deliver consistent training programs across multiple countries and cultures',
    },
    {
      id: 3,
      icon: <FaHeart className="benefitIcon" />,
      title: 'Health & Social Services',
      description: 'Educate staff and volunteers on best practices in health and social services',
    },
  ];

  return (
    <main className="neumorphic-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="heroContent">
          <h1 className="heroTitle">Nonprofit Organizations</h1>
          <p className="heroSubtitle">
            Empowering Missions Through Learning and Capacity Building
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
            Nonprofit organizations play a crucial role in addressing social challenges, supporting communities, and creating positive change. To maximize their impact, nonprofits must continuously train and develop their staff, volunteers, and community partners.
          </p>
          
          <p className="heroDescription">
            NeuroLXP provides an affordable, scalable Learning Experience Platform (LXP) designed specifically for nonprofit organizations, enabling them to deliver effective training, build organizational capacity, and measure learning impact.
          </p>

          {/* Hero Image Placeholder */}
          <div className="heroImage">
            <div className="imagePlaceholder">
              <FaHandHoldingHeart style={{ fontSize: '4rem', marginBottom: '1rem', opacity: 0.5 }} />
              <div>Nonprofit Learning Platform Dashboard</div>
              <div className="imageLabel">Image: 1000x450px - Volunteer training and impact tracking dashboard</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="challenges">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Addressing Key Challenges in Nonprofit Training</h2>
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
          <h2 className="sectionTitle">Benefits for Nonprofit Organizations</h2>
          <p className="sectionSubtitle">
            Nonprofits using NeuroLXP can strengthen their organizational capacity and maximize social impact
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

      {/* Use Cases Section */}
      <section className="benefits">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Use Cases</h2>
          <p className="sectionSubtitle">
            How different nonprofit organizations leverage NeuroLXP
          </p>
        </div>

        <div className="benefitsGrid">
          {useCases.map((useCase) => (
            <div key={useCase.id} className="benefitCard">
              <div className="benefitIconWrapper">{useCase.icon}</div>
              <h3 className="benefitTitle">{useCase.title}</h3>
              <p className="benefitDescription">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="ctaContent">
          <h2 className="ctaTitle">Empowering Nonprofits with Accessible Learning</h2>
          <p className="ctaDescription">
            By leveraging modern learning technologies, nonprofit organizations can build stronger teams, train more effective volunteers, and create greater social impact. NeuroLXP helps nonprofits deliver accessible, scalable learning programs that support their missions and amplify their reach.
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
        <h3>NeuroLXP — Powering Learning for Nonprofit Organizations</h3>
        <p>
          With AI-powered learning tools, collaborative features, and advanced analytics, NeuroLXP empowers nonprofits to build knowledgeable, mission-driven teams that create lasting positive change in their communities.
        </p>
        <button className="btn">
          Get Started Today
          <FaArrowRight className="btnIcon" />
        </button>
      </section>
    </main>
  );
}
