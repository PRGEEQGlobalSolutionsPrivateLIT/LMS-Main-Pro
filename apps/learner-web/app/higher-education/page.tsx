import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  FaGraduationCap,
  FaBookOpen,
  FaChartLine,
  FaBriefcase,
  FaMobileAlt,
  FaBrain,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaLaptopCode,
  FaRocket,
  FaShieldAlt,
} from 'react-icons/fa';
import './HigherEducation.css';

const heroIllustration = '/Modern-Learning.jpg';

export const metadata: Metadata = {
  title: 'Higher Education Solutions | NeuroLXP',
  description:
    'Transform higher education with NeuroLXP — a modern, AI-powered learning experience platform designed for universities and colleges.',
  keywords:
    'higher education, university LMS, college learning management, online education, blended learning, institutional analytics',
  openGraph: {
    title: 'Higher Education Solutions | NeuroLXP',
    description:
      'Empower universities and colleges with intelligent, integrated learning management solutions.',
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

interface FeatureItem {
  id: number;
  icon: React.ReactNode;
  text: string;
}

interface MiniCard {
  id: number;
  icon: React.ReactNode;
  label: string;
}

export default function HigherEducationPage() {
  const challenges: Challenge[] = [
    {
      id: 1,
      icon: <FaBookOpen className="challengeIcon" />,
      challenge: 'Passive Learning in Traditional Classrooms',
      description:
        'Traditional lecture-based teaching often results in passive learning where students absorb information without active engagement.',
      solution:
        'NeuroLXP introduces interactive learning experiences — gamified activities, simulations, quizzes, discussion forums, and collaborative modules — encouraging students to actively participate and dramatically improve knowledge retention.',
    },
    {
      id: 2,
      icon: <FaLaptopCode className="challengeIcon" />,
      challenge: 'Managing Large Volumes of Learning Content',
      description:
        'Universities manage extensive academic materials: lecture notes, videos, research papers, and study resources spread across disconnected systems.',
      solution:
        'NeuroLXP provides a centralized content management system to organize and distribute resources efficiently. AI-powered tools convert lengthy materials into concise summaries, exam-oriented content, and interactive modules.',
    },
    {
      id: 3,
      icon: <FaChartLine className="challengeIcon" />,
      challenge: 'Tracking Student Progress and Performance',
      description:
        'Educators struggle to monitor engagement, learning progress, and academic performance across large, diverse student populations.',
      solution:
        'Real-time analytics and reporting tools deliver instant insights into course completion rates, assessment performance, and engagement levels — helping educators identify gaps and provide targeted, timely support.',
    },
    {
      id: 4,
      icon: <FaBriefcase className="challengeIcon" />,
      challenge: 'Preparing Students for Real-World Careers',
      description:
        'Higher education must bridge the gap between academic knowledge and the practical competencies employers demand in a rapidly evolving job market.',
      solution:
        'NeuroLXP supports career pathways, skill-based learning programs, and industry-aligned courses. Institutions can design learning journeys that directly connect academic knowledge with real-world professional applications.',
    },
    {
      id: 5,
      icon: <FaMobileAlt className="challengeIcon" />,
      challenge: 'Delivering Flexible Learning Experiences',
      description:
        'Modern students expect learning that is accessible anytime, from any device, with seamless transitions between physical and digital environments.',
      solution:
        'NeuroLXP supports mobile learning, blended learning models, and microlearning formats — allowing students to learn at their own pace while staying connected to instructors and peers across all touchpoints.',
    },
  ];

  const benefits: Benefit[] = [
    {
      id: 1,
      icon: <FaGraduationCap className="benefitIcon" />,
      title: 'Engaging Digital & Blended Learning',
      description:
        'Deliver immersive digital and blended programs that drive meaningful student participation and outcomes.',
    },
    {
      id: 2,
      icon: <FaUsers className="benefitIcon" />,
      title: 'Improved Student Engagement',
      description:
        'Boost engagement through interactive tools, social learning features, and personalized learning paths.',
    },
    {
      id: 3,
      icon: <FaBrain className="benefitIcon" />,
      title: 'AI-Powered Learning Resources',
      description:
        'Leverage intelligent content generation and adaptive assessments for truly personalized education at scale.',
    },
    {
      id: 4,
      icon: <FaChartLine className="benefitIcon" />,
      title: 'Advanced Analytics',
      description:
        'Monitor student performance with real-time dashboards, predictive insights, and actionable reporting.',
    },
    {
      id: 5,
      icon: <FaBriefcase className="benefitIcon" />,
      title: 'Career Development',
      description:
        'Support students with skill-based learning programs and industry-aligned pathways to workforce readiness.',
    },
    {
      id: 6,
      icon: <FaCheckCircle className="benefitIcon" />,
      title: 'Scalable Digital Education',
      description:
        'Efficiently scale digital education initiatives across thousands of students without compromising quality.',
    },
  ];

  const featureItems: FeatureItem[] = [
    { id: 1, icon: <FaBrain />, text: 'AI-powered content summarization and quiz generation' },
    { id: 2, icon: <FaChartLine />, text: 'Real-time student progress tracking dashboards' },
    { id: 3, icon: <FaMobileAlt />, text: 'Mobile-first, responsive learning environment' },
    { id: 4, icon: <FaShieldAlt />, text: 'Enterprise-grade security and data compliance' },
    { id: 5, icon: <FaRocket />, text: 'Seamless integration with existing campus systems' },
  ];

  const miniCards: MiniCard[] = [
    { id: 1, icon: <FaGraduationCap />, label: 'Smart Assessments' },
    { id: 2, icon: <FaChartLine />, label: 'Live Analytics' },
    { id: 3, icon: <FaUsers />, label: 'Collaboration Hubs' },
    { id: 4, icon: <FaBrain />, label: 'AI Tutoring' },
  ];

  return (
    <main className="neumorphic-page">
      <section className="hero">
        <div className="heroContent">
          <div className="heroGrid">
            <div className="heroText">
              <div className="heroBadge">
                <span className="badge-label">
                  <span className="badge-dot" />
                  Higher Education Solutions
                </span>
              </div>

              <h1 className="heroTitle">
                Empowering Universities with <span className="accent-word">Modern Learning</span>
              </h1>

              <p className="heroSubtitle">
                NeuroLXP delivers an AI-powered Learning Experience Platform built exclusively for higher education — enabling engaging, scalable, and outcome-driven digital campuses.
              </p>

              <div className="heroButtons">
                <button className="btn">
                  <span>Request a Demo</span>
                  <FaArrowRight className="btnIcon" />
                </button>
                <button className="btn btn-play">
                  <span className="playDot">
                    <svg width="10" height="12" viewBox="0 0 10 12">
                      <path d="M0 0L10 6L0 12V0Z" />
                    </svg>
                  </span>
                  <span>Watch Overview</span>
                </button>
              </div>

              <p className="heroDescription">
                Universities and colleges need flexible, technology-enabled learning environments that support digital education, blended learning, skill development, and career readiness. NeuroLXP is the platform built for exactly that challenge.
              </p>
            </div>

            <div className="heroMedia">
              <div className="heroImage">
                <Image
                  src={heroIllustration}
                  alt="NeuroLXP University Learning Management Dashboard"
                  className="heroImageAsset"
                  width={800}
                  height={520}
                  priority
                />
              </div>
              <div className="heroStats heroStatsBelow">
                <div className="statItem">
                  <span className="statNumber">500+</span>
                  <span className="statLabel">Institutions Worldwide</span>
                </div>
                <div className="statItem">
                  <span className="statNumber">2M+</span>
                  <span className="statLabel">Active Learners</span>
                </div>
                <div className="statItem">
                  <span className="statNumber">94%</span>
                  <span className="statLabel">Completion Rate</span>
                </div>
                <div className="statItem">
                  <span className="statNumber">4.9</span>
                  <span className="statLabel">Average Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Challenges ── */}
      <section className="section-wrap challenges">
        <div className="section-inner">
          <div className="sectionHeader">
            <div className="sectionEyebrow">Key Challenges</div>
            <h2 className="sectionTitle">Solving Higher Education's Toughest Problems</h2>
            <p className="sectionSubtitle">
              From passive classrooms to career readiness, NeuroLXP addresses every critical pain point modern institutions face.
            </p>
          </div>

          <div className="challengesGrid">
            {challenges.map((item) => (
              <div key={item.id} className="challengeCard">
                <div className="challengeIconWrap">{item.icon}</div>
                <span className="challengeChip">Challenge</span>
                <h3 className="challengeTitle">{item.challenge}</h3>
                <p className="challengeDescription">{item.description}</p>
                <div className="solutionBox">
                  <div className="solutionLabel">How NeuroLXP Helps</div>
                  <p className="solutionDescription">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="section-wrap benefits">
        <div className="section-inner">
          <div className="sectionHeader">
            <div className="sectionEyebrow">Platform Benefits</div>
            <h2 className="sectionTitle">Everything Your Institution Needs</h2>
            <p className="sectionSubtitle">
              Universities and colleges using NeuroLXP consistently improve learning outcomes, student satisfaction, and institutional performance.
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
        </div>
      </section>

      {/* ── Feature Highlight ── */}
      <section className="section-wrap featureHighlight">
        <div className="section-inner">
          <div className="featureHighlightInner">
            <div className="featureText">
              <div className="sectionEyebrow">Platform Intelligence</div>
              <h2 className="sectionTitle">
                Built for the <span className="accent-span">Future of Higher Education</span>
              </h2>
              <p className="featureBody">
                NeuroLXP combines the latest in AI, learning science, and enterprise technology to give institutions a competitive edge in delivering exceptional education outcomes.
              </p>
              <div className="featureCards">
                {featureItems.map((fi) => (
                  <div key={fi.id} className="featureCard">
                    <span className="ficon">{fi.icon}</span>
                    <p>{fi.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="featureVisual">
              {miniCards.map((mc) => (
                <div key={mc.id} className="featureMiniCard">
                  <span className="miniCardIcon">{mc.icon}</span>
                  <span className="miniCardLabel">{mc.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-wrap cta">
        <div className="ctaContent">
          <div className="sectionEyebrow" style={{ display: 'inline-flex', marginBottom: 20 }}>
            Get Started
          </div>
          <h2 className="ctaTitle">
            Transforming Higher Education with <span className="accent-span">Digital Learning</span>
          </h2>
          <p className="ctaDescription">
            By leveraging modern learning technologies, universities and colleges can create engaging, personalized learning experiences that prepare students for success in a digital world.
          </p>
          <div className="ctaButtons">
            <button className="btn">
              Schedule a Demo
              <FaArrowRight className="btnIcon" />
            </button>
            <button className="btn">
              <span>Contact Sales</span>
              <FaArrowRight className="btnIcon" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="footerCta">
        <h3>NeuroLXP — Powering Learning for Higher Education</h3>
        <p>
          With AI-powered learning tools, interactive content capabilities, and advanced analytics, NeuroLXP helps universities create modern digital campuses that empower students, educators, and administrators alike.
        </p>
        <button className="btn">
          Get Started Today
          <FaArrowRight className="btnIcon" />
        </button>
      </section>
    </main>
  );
}
