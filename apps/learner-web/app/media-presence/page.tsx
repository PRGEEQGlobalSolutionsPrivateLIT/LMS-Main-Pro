"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import heroIllustration from "./media-hero-image.png";
import industryIllustration from "./industry-features.png";
import thoughtLeadershipIllustration from "./thought-leadership.png";
import partnershipIllustration from "./partnerships.png";
import "./media-presence.css";

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
const industryHighlights = [
  "AI-powered learning innovation",
  "Interactive and gamified learning experiences",
  "Scalable digital learning ecosystems",
  "Skill-based education and workforce development",
];

const thoughtTopics = [
  "The future of digital education",
  "AI in learning and content curation",
  "Modern LMS and LXP technologies",
  "Workforce upskilling and reskilling",
  "Digital transformation in education and enterprises",
];

const collaborationSectors = [
  "Higher education",
  "Corporate training",
  "Government workforce development",
  "Healthcare and professional education",
];

export default function MediaPresencePage() {
  const heroRef = useFadeOnVisible();
  const industryRef = useFadeOnVisible();
  const thoughtRef = useFadeOnVisible();
  const partnershipsRef = useFadeOnVisible();
  const calloutRef = useFadeOnVisible();

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
    <div className="mp-root">

      {/* ══ HERO ══ */}
      <section className="mp-hero mp-section">
        <div className="mp-container">
          <div className="mp-hero-grid">

            {/* Left */}
            <div ref={heroRef} className="fade-up">
              <div className="mp-hero-eyebrow">
                <span className="badge-dot" />
                Media Presence
              </div>
              <h1 className="mp-hero-title">
                Recognized Innovation in <span className="highlight">Digital Learning</span>
              </h1>
              <p className="mp-hero-desc">
                NeuroLXP is gaining recognition across the education and technology landscape for its innovative approach to digital learning, AI-powered content intelligence, and interactive learning experiences.
              </p>
              <p className="mp-hero-desc">
                Our platform is designed to redefine how institutions, organizations, and learners engage with modern education technologies. Through industry collaborations, thought leadership, and product innovation, NeuroLXP continues to build a strong presence in the EdTech ecosystem.
              </p>
              <div className="mp-hero-pill-list">
                <div className="mp-pill">EdTech conversation</div>
                <div className="mp-pill">AI-powered learning</div>
                <div className="mp-pill">Digital transformation</div>
              </div>
            </div>

            {/* Right — Visual */}
            <div className="mp-hero-visual fade-up stagger-2">
              <div className="mp-hero-card">
                <Image src={heroIllustration} alt="Media presence illustration" className="mp-hero-image" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="neu-divider" />

      {/* ══ FEATURED IN INDUSTRY CONVERSATIONS ══ */}
      <section className="mp-section" id="industry">
        <div className="mp-container">
          <div className="mp-section-grid">
            <div className="mp-section-copy fade-up" ref={industryRef}>
              <div className="mp-section-eyebrow">
                <span className="badge-dot" />
                Featured in Industry Conversations
              </div>
              <h2>
                NeuroLXP is actively contributing to discussions around the <span>future of Learning Experience Platforms</span>
              </h2>
              <p>
                Our platform and insights are highlighted in industry forums, education conferences, and digital learning communities. These engagements help showcase NeuroLXP as a forward-thinking platform that supports:</p>
              <div className="mp-card-grid">
                {industryHighlights.map((item, index) => (
                  <div key={item} className={`mp-card-item fade-up stagger-${index + 1}`}>
                    <div className="mp-card-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                      </svg>
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mp-section-visual fade-up stagger-2">
              <div className="mp-visual-card">
                <Image src={industryIllustration} alt="Industry conversations illustration" className="mp-panel-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="neu-divider" />

      {/* ══ THOUGHT LEADERSHIP ══ */}
      <section className="mp-section" id="thought-leadership">
        <div className="mp-container">
          <div className="mp-section-grid reverse">
            <div className="mp-section-visual fade-up">
              <div className="mp-visual-card">
                <Image src={thoughtLeadershipIllustration} alt="Thought leadership illustration" className="mp-panel-image" />
              </div>
            </div>
            <div className="mp-section-copy fade-up stagger-2" ref={thoughtRef}>
              <div className="mp-section-eyebrow">
                <span className="badge-dot" />
                Thought Leadership in EdTech
              </div>
              <h2>The NeuroLXP team regularly participates in industry dialogues focused on:</h2>
              <p>
                By sharing expertise and insights, NeuroLXP contributes to shaping the future of technology-enabled learning environments.
              </p>
              <div className="mp-card-grid">
                {thoughtTopics.map((topic, index) => (
                  <div key={topic} className={`mp-card-item fade-up stagger-${index + 1}`}>
                    <div className="mp-card-icon mp-card-icon-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 17 9 11 13 15 21 7" />
                        <polyline points="14 7 21 7 21 14" />
                      </svg>
                    </div>
                    <p>{topic}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="neu-divider" />

      {/* ══ PARTNERSHIPS ══ */}
      <section className="mp-section" id="partnerships">
        <div className="mp-container">
          <div className="mp-section-grid">
            <div className="mp-section-copy fade-up" ref={partnershipsRef}>
              <div className="mp-section-eyebrow">
                <span className="badge-dot" />
                Partnerships and Collaborations
              </div>
              <h2>NeuroLXP collaborates with institutions, industry partners and technology innovators to advance <span>digital learning solutions</span></h2>
              <p>
                These collaborations support the development of impactful learning programs across sectors such as:</p>
              <ul className="mp-list">
                {collaborationSectors.map((sector) => (
                  <li key={sector}>{sector}</li>
                ))}
              </ul>
            </div>
            <div className="mp-section-visual fade-up stagger-2">
              <div className="mp-visual-card">
                <Image src={partnershipIllustration} alt="Partnerships illustration" className="mp-panel-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CALLOUT ══ */}
      <section className="mp-callout">
        <div className="mp-container">
          <div className="mp-callout-card fade-up" ref={calloutRef}>
            <h2>Building the Future of <span>Learning</span></h2>
            <p>
              As digital learning continues to evolve, NeuroLXP remains committed to innovation, collaboration, and excellence in learning technology. Our growing media presence reflects our mission to transform learning experiences and empower organizations to build smarter, more engaging learning ecosystems.
            </p>
            <div className="mp-callout-tagline">NeuroLXP — Driving Innovation in the Future of Digital Learning.</div>            <div className="mp-callout-actions">
              <a href="#" className="neu-btn neu-btn-primary">Explore Insights</a>
              <a href="#" className="neu-btn neu-btn-outline">Contact Our Team</a>
            </div>          </div>
        </div>
      </section>

    </div>
  );
}
