import React from 'react';
import type { Metadata } from 'next';
import {
  FaGraduationCap,
  FaBookOpen,
  FaChartLine,
  FaBriefcase,
  FaMobileAlt,
  FaLightbulb,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaLaptopCode,
  FaBrain,
} from 'react-icons/fa';
import './HigherEducation.css';

export const metadata: Metadata = {
  title: 'Higher Education Solutions | Industries We Serve',
  description:
    'Transform higher education with our modern, integrated learning management platform designed for universities and colleges. Comprehensive features for teaching, learning, and institutional growth.',
  keywords:
    'higher education, university LMS, college learning management, online education, blended learning, institutional analytics',
  openGraph: {
    title: 'Higher Education Solutions | Industries We Serve',
    description:
      'Empower universities and colleges with integrated learning management solutions.',
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

export default function HigherEducationPage() {
  const challenges: Challenge[] = [
    {
      id: 1,
      icon: <FaBookOpen className="challengeIcon" />,
      challenge: 'Passive Learning in Traditional Classrooms',
      description:
        'Traditional lecture-based teaching often results in passive learning where students absorb information but do not actively engage with it.',
      solution:
        'NeuroLXP introduces interactive learning experiences such as gamified activities, simulations, quizzes, discussion forums, and collaborative learning modules. These features encourage students to actively participate and improve knowledge retention.',
    },
    {
      id: 2,
      icon: <FaLaptopCode className="challengeIcon" />,
      challenge: 'Managing Large Volumes of Learning Content',
      description:
        'Universities manage extensive academic materials including lecture notes, videos, research papers, and study resources.',
      solution:
        'NeuroLXP provides a centralized content management system that allows institutions to organize, manage, and distribute learning resources efficiently. AI-powered tools can also convert long study materials into summaries, exam-oriented content, and interactive learning modules.',
    },
    {
      id: 3,
      icon: <FaChartLine className="challengeIcon" />,
      challenge: 'Tracking Student Progress and Performance',
      description:
        'Educators often struggle to monitor student engagement, learning progress, and academic performance across large student populations.',
      solution:
        'NeuroLXP\'s learning analytics and reporting tools provide real-time insights into student progress, course completion rates, assessment performance, and engagement levels. These data-driven insights help educators identify learning gaps and provide targeted support.',
    },
    {
      id: 4,
      icon: <FaBriefcase className="challengeIcon" />,
      challenge: 'Preparing Students for Real-World Careers',
      description:
        'Higher education institutions increasingly focus on preparing students for the workforce by developing practical skills and career readiness.',
      solution:
        'NeuroLXP supports career pathways, skill-based learning programs, and industry-aligned courses that help students develop job-ready competencies. Institutions can design learning journeys that connect academic knowledge with real-world applications.',
    },
    {
      id: 5,
      icon: <FaMobileAlt className="challengeIcon" />,
      challenge: 'Delivering Flexible Learning Experiences',
      description:
        'Modern students expect learning experiences that are accessible anytime and from any device.',
      solution:
        'NeuroLXP supports mobile learning, blended learning models, and microlearning formats, allowing students to learn at their own pace while staying connected to instructors and peers.',
    },
  ];

  const benefits: Benefit[] = [
    {
      id: 1,
      icon: <FaGraduationCap className="benefitIcon" />,
      title: 'Engaging Digital & Blended Learning',
      description: 'Deliver engaging digital and blended learning programs that enhance student participation',
    },
    {
      id: 2,
      icon: <FaUsers className="benefitIcon" />,
      title: 'Improved Student Engagement',
      description: 'Improve student engagement and participation through interactive learning tools',
    },
    {
      id: 3,
      icon: <FaBrain className="benefitIcon" />,
      title: 'AI-Powered Learning Resources',
      description: 'Provide AI-powered learning resources and assessments for personalized education',
    },
    {
      id: 4,
      icon: <FaChartLine className="benefitIcon" />,
      title: 'Advanced Analytics',
      description: 'Monitor student performance through advanced analytics and real-time insights',
    },
    {
      id: 5,
      icon: <FaBriefcase className="benefitIcon" />,
      title: 'Career Development',
      description: 'Support career development and skill-based learning for workforce readiness',
    },
    {
      id: 6,
      icon: <FaCheckCircle className="benefitIcon" />,
      title: 'Scalable Digital Education',
      description: 'Scale digital education across large student populations efficiently',
    },
  ];

  return (
    <main className="neumorphic-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="heroContent">
          <h1 className="heroTitle">Higher Education</h1>
          <p className="heroSubtitle">
            Empowering Universities and Colleges with Modern Learning Experiences
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
            Higher education institutions today are transforming the way they deliver learning. Universities and colleges need flexible, technology-enabled learning environments that support digital education, blended learning, skill development, and career readiness.
          </p>
          
          <p className="heroDescription">
            NeuroLXP provides an advanced Learning Experience Platform (LXP) designed specifically for Higher Education, enabling institutions to deliver engaging, scalable, and outcome-driven learning experiences.
          </p>

          {/* Hero Image */}
          <div className="heroImage">
            <img src="/Gemini_Generated_Image_ercdp4ercdp4ercd.png" alt="University Learning Management Dashboard" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} />
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="challenges">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Addressing Key Challenges in Higher Education</h2>
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
          <h2 className="sectionTitle">Benefits for Higher Education Institutions</h2>
          <p className="sectionSubtitle">
            Universities and colleges using NeuroLXP can enhance their learning outcomes and student success
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
          <h2 className="ctaTitle">Transforming Higher Education with Digital Learning</h2>
          <p className="ctaDescription">
            By leveraging modern learning technologies, universities and colleges can create engaging, personalized learning experiences that prepare students for success in a digital world. NeuroLXP helps institutions build scalable, technology-enabled learning ecosystems that support student success and institutional excellence.
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
        <h3>NeuroLXP — Powering Learning for Higher Education</h3>
        <p>
          With AI-powered learning tools, interactive content capabilities, and advanced analytics, NeuroLXP helps universities create modern digital campuses that empower students, educators, and administrators.
        </p>
        <button className="btn">
          Get Started Today
          <FaArrowRight className="btnIcon" />
        </button>
      </section>
    </main>
  );
}
