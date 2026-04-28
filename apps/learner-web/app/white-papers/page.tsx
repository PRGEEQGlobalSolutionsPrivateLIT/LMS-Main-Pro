"use client";

import { useEffect, useRef } from "react";
import "./white-papers.css";
import Image from "next/image";
import heroIllustration from "./whitepapers-hero-illustration.png";
import insightsIllustration from "./insights-illustration.png";
import practicalInsightsIllustration from "./Practical Insights.png";
import collectionIllustration from "./whitepapers-collection.png";
import accessIllustration from "./Access NeuroLXP.png";

/* ══════════════════════════════════════════════
   Hooks
   ══════════════════════════════════════════════ */
function useFadeOnVisible(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

/* ══════════════════════════════════════════════
   Data
   ══════════════════════════════════════════════ */
const KEY_TOPICS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <path d="M9 4v16" />
        <path d="M15 4v16" />
      </svg>
    ),
    label: "The future of AI-powered Learning Experience Platforms (LXP)",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8" />
        <path d="M7 9h10" />
        <path d="M7 15h10" />
      </svg>
    ),
    label: "Digital transformation in education and corporate training",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.13-3.36L23 10" />
        <path d="M20.49 15a9 9 0 0 1-14.13 3.36L1 14" />
      </svg>
    ),
    label: "Strategies for workforce upskilling and reskilling",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18 16V9" />
        <path d="M12 16V5" />
        <path d="M6 16v-4" />
      </svg>
    ),
    label: "The impact of learning analytics and data-driven education",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    label: "Innovations in interactive and gamified learning environments",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M12 4h9" />
        <path d="M4 9h16" />
        <path d="M4 15h10" />
      </svg>
    ),
    label: "The role of personalized and adaptive learning technologies",
  },
];

const PRACTICAL_INSIGHTS = [
  "Implementing modern Learning Management Systems (LMS) and Learning Experience Platforms",
  "Designing effective digital learning strategies",
  "Leveraging AI-driven content and analytics",
  "Enhancing learner engagement through interactive technologies",
  "Building scalable training programs for organizations and institutions",
];

/* ══════════════════════════════════════════════
   Main Page
   ══════════════════════════════════════════════ */
export default function WhitePapers() {
  const heroRef = useFadeOnVisible(0.05);
  const topicsRef = useFadeOnVisible(0.1);
  const insightsRef = useFadeOnVisible(0.1);
  const innovationRef = useFadeOnVisible(0.1);
  const ctaRef = useFadeOnVisible(0.1);

  // Create refs for all animated elements
  const topicRef1 = useFadeOnVisible();
  const topicRef2 = useFadeOnVisible();
  const topicRef3 = useFadeOnVisible();
  const topicRef4 = useFadeOnVisible();
  const topicRef5 = useFadeOnVisible();
  const topicRef6 = useFadeOnVisible();
  const topicRefs = [topicRef1, topicRef2, topicRef3, topicRef4, topicRef5, topicRef6];

  const insightRef1 = useFadeOnVisible();
  const insightRef2 = useFadeOnVisible();
  const insightRef3 = useFadeOnVisible();
  const insightRef4 = useFadeOnVisible();
  const insightRef5 = useFadeOnVisible();
  const insightRefs = [insightRef1, insightRef2, insightRef3, insightRef4, insightRef5];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="wp-root">

      {/* ══ HERO ══ */}
      <section className="wp-hero wp-section">
        <div className="wp-container">
          <div className="wp-hero-grid">

            {/* Left */}
            <div ref={heroRef} className="fade-up">
              <div className="wp-hero-eyebrow">
                <span className="badge-dot" />
                White Papers
              </div>
              <h1 className="wp-hero-title">
                Insights and Research on the<br />
                <span className="highlight">Future of Learning</span>
              </h1>
              <p className="wp-hero-desc">
                At NeuroLXP, we believe that innovation in education and workforce development must be supported by research, data, and industry insights. Our white papers explore key trends, technologies, and strategies that are shaping the future of digital learning, AI-powered education, and workforce upskilling.
              </p>
              <p className="wp-hero-desc">
                These in-depth reports provide valuable perspectives for educators, institutional leaders, corporate training professionals, and policymakers looking to understand how modern learning platforms can improve learning outcomes and organizational performance.
              </p>
            </div>

            {/* Right — Visual */}
            <div className="wp-hero-visual">
              <div className="wp-hero-card">
                <Image
                  src={heroIllustration}
                  alt="White Papers Hero Illustration"
                  width={500}
                  height={400}
                  className="wp-hero-image"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ EXPLORING KEY TOPICS ══ */}
      <section className="wp-section" id="key-topics">
        <div className="wp-container">
          <div className="text-center fade-up" ref={topicsRef}>
            <div className="wp-section-pill">
              <span className="wp-section-pill-dot" />
              Benefits of Corporate Training with NeuroLXP
            </div>
            <h2 className="wp-section-title wp-section-title-large">
              Critical Areas Shaping the<br />
              <span>Evolution of Digital Learning</span>
            </h2>
            <p className="section-subtitle">
              NeuroLXP white papers focus on critical areas influencing the evolution of digital learning, including:
            </p>
          </div>

          <div className="wp-topics-layout">
            <div className="wp-topics-grid">
              {KEY_TOPICS.map((topic, i) => (
                <div key={topic.label} className={`wp-topic-card fade-up stagger-${(i % 3) + 1}`} ref={topicRefs[i]}>
                  <div className="wp-topic-card-icon">{topic.icon}</div>
                  <div>
                    <p className="wp-topic-card-text">{topic.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="neu-divider" />

      {/* ══ PRACTICAL INSIGHTS ══ */}
      <section className="wp-section" id="practical-insights">
        <div className="wp-container">
          <div className="wp-insights-layout">

            {/* Left — Visual */}
            <div className="wp-insights-visual fade-up" ref={useFadeOnVisible()}>
              <div className="wp-visual-card">
                <Image
                  src={practicalInsightsIllustration}
                  alt="Practical Insights"
                  width={400}
                  height={300}
                  className="wp-panel-image"
                />
              </div>
            </div>

            {/* Right — Content */}
            <div ref={insightsRef} className="fade-up stagger-2">
              <div className="wp-section-pill">
                <span className="wp-section-pill-dot" />
                Practical Insights for Decision Makers
              </div>
              <h2 className="wp-section-title wp-section-title-large">
                Guidance for Leaders and<br />
                <span>Decision-Makers</span>
              </h2>
              <p className="wp-section-desc">
                NeuroLXP white papers are designed to support leaders and decision-makers who are planning or improving their learning ecosystems. The reports provide guidance on:
              </p>

              <div className="wp-insights-list">
                {PRACTICAL_INSIGHTS.map((insight, i) => (
                  <div key={insight} className={`wp-insight-pill-card fade-up stagger-${(i % 3) + 1}`} ref={insightRefs[i]}>
                    <div className="wp-insight-pill-icon">✔</div>
                    <p className="wp-insight-text">{insight}</p>
                  </div>
                ))}
              </div>
              <div className="wp-list-cta">
                <a href="#" className="neu-btn neu-btn-primary">
                  See All Features
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="neu-divider" />

      {/* ══ SUPPORTING INNOVATION ══ */}
      <section className="wp-section" id="innovation">
        <div className="wp-container">
          <div className="wp-innovation-grid">
            <div className="fade-up" ref={innovationRef}>
              <div className="wp-hero-eyebrow">
                <span className="badge-dot" />
                Supporting Innovation in Education and Training
              </div>
              <h2 className="wp-hero-title">
                Contributing to Ongoing<br />
                <span>Discussions in EdTech</span>
              </h2>
              <p className="wp-hero-desc">
                Through our research publications, NeuroLXP contributes to ongoing discussions around the future of education technology (EdTech), digital transformation in learning, and workforce development. Our white papers aim to support institutions and enterprises in building more effective and inclusive learning environments.
              </p>
            </div>

            <div className="wp-innovation-visual fade-up stagger-2" ref={useFadeOnVisible()}>
              <div className="wp-visual-card">
                <Image
                  src={collectionIllustration}
                  alt="White Papers Collection"
                  width={600}
                  height={400}
                  className="wp-collection-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="neu-divider" />

      {/* ══ ACCESS WHITE PAPERS ══ */}
      <section className="wp-section" id="access">
        <div className="wp-container">
          <div className="wp-access-layout">

            {/* Left — Content */}
            <div className="fade-up" ref={useFadeOnVisible()}>
              <div className="section-badge">
                <span className="badge-dot" />
                Access NeuroLXP White Papers
              </div>
              <h2 className="wp-access-title">
                Explore Our Collection of<br />
                <span>Research-Driven Insights</span>
              </h2>
              <p className="wp-access-desc">
                Explore our collection of white papers to gain deeper insights into emerging trends, best practices, and innovative strategies that are transforming digital learning.
              </p>
              <p className="wp-access-tagline">
                NeuroLXP White Papers — Research-Driven Insights for the Future of Learning.
              </p>
            </div>

            {/* Right — Visual */}
            <div className="wp-access-visual fade-up stagger-2" ref={useFadeOnVisible()}>
              <div className="wp-visual-card">
                <Image
                  src={accessIllustration}
                  alt="Access NeuroLXP"
                  width={400}
                  height={300}
                  className="wp-access-image"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="wp-cta">
        <div className="wp-container">
          <div className="wp-cta-card fade-up" ref={ctaRef}>
            <div className="section-badge wp-cta-badge">
              <span className="badge-dot" />
              NeuroLXP — Research-Driven Insights
            </div>
            <h2 className="wp-cta-title">
              Stay Ahead with<br />
              <span>Industry-Leading Research</span>
            </h2>
            <p className="wp-cta-desc">
              Access our comprehensive collection of white papers that provide valuable insights into the future of digital learning, AI-powered education, and workforce development strategies.
            </p>
            <div className="wp-cta-actions">
              <a href="#" className="neu-btn neu-btn-primary neu-btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                Explore White Papers
              </a>
              <a href="#" className="neu-btn neu-btn-outline neu-btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22 6 12 13 2 6" />
                </svg>
                Subscribe for Updates
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}