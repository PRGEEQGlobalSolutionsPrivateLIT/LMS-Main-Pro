"use client";

import { useEffect, useRef } from "react";
import "./page.css";

function useFadeOnVisible(threshold = 0.15) {
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
  }, []);
  return ref;
}

const BLOG_TOPICS = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6"/><path d="M9 13h6"/><path d="M9 17h3"/></svg>`,
    title: "AI-Powered LMS",
    desc: "The future of AI-powered Learning Management Systems",
    image: "/ai-lms.png",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    title: "Gamified Learning",
    desc: "Trends in interactive and gamified learning",
    image: "/game.png",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    title: "Corporate Training",
    desc: "Strategies for corporate training and employee upskilling",
    image: "/training.png",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    title: "E-Learning",
    desc: "Innovations in e-learning and blended learning models",
    image: "/e-learning.png",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
    title: "Course Design",
    desc: "Best practices for digital education and online course design",
    image: "/design.png",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    title: "Analytics",
    desc: "The role of learning analytics and data-driven education",
    image: "/analytics.png",
  },
];

const PRACTICAL_INSIGHTS = [
  "How AI is transforming digital learning platforms",
  "Methods to improve learner engagement and retention",
  "Strategies for implementing modern LMS and LXP platforms",
  "Building skill-based learning programs for the future workforce",
  "Leveraging analytics to improve training effectiveness",
];

export default function BlogPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const heroRef = useFadeOnVisible(0.05);
  const ctaRef = useFadeOnVisible(0.1);

  return (
    <div className="blog-root">
      {/* ── Hero Section ── */}
      <section className="blog-hero blog-section">
        <div className="blog-container">
          <div className="blog-hero-grid">
            <div ref={heroRef} className="fade-up">
              <div className="blog-hero-eyebrow">
                <span className="badge-dot" />
                Blogs
              </div>
              <h1 className="blog-hero-title">
                Insights, Trends, and Ideas Shaping the <span className="highlight">Future of Learning</span>
              </h1>
              <p className="blog-hero-desc">
                The NeuroLXP Blog is a knowledge hub where educators, learning leaders, and organizations can explore the latest ideas, innovations, and best practices in digital learning. Our blogs cover emerging trends in Learning Experience Platforms (LXP), AI-powered education, corporate training, and modern learning technologies.
              </p>
              <p className="blog-hero-desc">
                Through expert insights and practical perspectives, NeuroLXP blogs help readers stay informed about how technology is transforming learning across industries.
              </p>
              <div className="blog-hero-actions">
                <a href="#topics" className="neu-btn neu-btn-primary neu-btn-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                  Explore Topics
                </a>
                <a href="#insights" className="neu-btn neu-btn-outline neu-btn-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                  </svg>
                  View Insights
                </a>
              </div>
            </div>

            <div className="blog-hero-visual">
              <div className="hero-card-back hero-card-back-1" />
              <div className="hero-card-back hero-card-back-2" />
              <div className="blog-hero-card-main">
                <div className="hero-card-header">
                  <div className="hero-card-title">Latest Blog Articles</div>
                  <div className="hero-card-tag">2025</div>
                </div>
                
                {/* Hero Image */}
                <div className="hero-image-container">
                  <img 
                    src="/blog-hero-image.jpg" 
                    alt="Blog Hero" 
                    className="hero-image"
                  />
                </div>

                {/* Stats Row */}
                <div className="hero-stats-row">
                  <div className="hero-stat-card">
                    <div className="hero-stat-value">120+</div>
                    <div className="hero-stat-label">Articles</div>
                  </div>
                  <div className="hero-stat-card">
                    <div className="hero-stat-value">8</div>
                    <div className="hero-stat-label">Topics</div>
                  </div>
                  <div className="hero-stat-card">
                    <div className="hero-stat-value">50K+</div>
                    <div className="hero-stat-label">Readers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What You'll Find Section ── */}
      <section className="blog-topics blog-section" id="topics">
        <div className="blog-container">
          <div className="text-center fade-up" ref={useFadeOnVisible()}>
            <div className="section-badge">
              <span className="badge-dot" />
              What You'll Find on the NeuroLXP Blog
            </div>
            <h2 className="section-title">
              What You'll Find on the <span>NeuroLXP Blog</span>
            </h2>
            <p className="section-subtitle">
              Our blog articles explore a wide range of topics related to education technology (EdTech), digital transformation, and workforce learning, including valuable knowledge for institutions and organizations looking to build effective learning ecosystems.
            </p>
          </div>

          <div className="blog-topics-grid">
            {BLOG_TOPICS.map((topic, i) => (
              <div key={topic.title} className={`blog-topic-card fade-up stagger-${(i % 3) + 1}`} ref={useFadeOnVisible()}>
                {/* Topic Image */}
                <div className="topic-image-container">
                  <img 
                    src={topic.image} 
                    alt={topic.title}
                    className="topic-image"
                  />
                </div>
                
                <div className="topic-content">
                  <div className="topic-icon-wrapper">
                    <div dangerouslySetInnerHTML={{ __html: topic.icon }} />
                  </div>
                  <h3 className="topic-card-title">{topic.title}</h3>
                  <p className="topic-card-desc">{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="neu-divider" />

      {/* ── Practical Insights Section ── */}
      <section className="blog-insights blog-section" id="insights">
        <div className="blog-container">
          <div className="blog-insights-grid">
            <div>
              <div className="fade-up" ref={useFadeOnVisible()}>
                <div className="section-badge">
                  <span className="badge-dot" />
                  Practical Learning and Training Insights
                </div>
                <h2 className="section-title">
                  Practical Learning and <span>Training Insights</span>
                </h2>
                <p className="section-subtitle" style={{ margin: 0 }}>
                  NeuroLXP blogs are designed to deliver practical insights and actionable ideas that help organizations improve learning experiences and outcomes. Readers can discover topics that support decision-makers, educators, and training professionals in developing more impactful learning strategies.
                </p>
              </div>

              <div className="benefit-list">
                {PRACTICAL_INSIGHTS.map((item, i) => (
                  <div
                    key={item}
                    className={`benefit-item fade-up stagger-${i + 1}`}
                    ref={useFadeOnVisible()}
                  >
                    <div className="benefit-check">✓</div>
                    <div className="benefit-text">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="benefits-visual fade-up stagger-2" ref={useFadeOnVisible()}>
              {/* Image Card */}
              <div className="bv-image-card">
                <div className="bv-image-container">
                  <img 
                    src="/practical.png" 
                    alt="Practical Insights"
                    className="bv-image"
                  />
                </div>
              </div>

              {/* Stats Card */}
              <div className="bv-card">
                <div className="bv-card-header">
                  <div className="bv-icon-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
                    </svg>
                  </div>
                  <div className="bv-card-title">Blog Performance</div>
                  <div className="bv-card-pill">Analytics</div>
                </div>
                <div className="bv-metric-row">
                  <div className="bv-metric">
                    <div className="bv-metric-val">95%</div>
                    <div className="bv-metric-lbl">Engagement</div>
                  </div>
                  <div className="bv-metric">
                    <div className="bv-metric-val">4.9</div>
                    <div className="bv-metric-lbl">Avg Rating</div>
                  </div>
                  <div className="bv-metric">
                    <div className="bv-metric-val">15K</div>
                    <div className="bv-metric-lbl">Shares</div>
                  </div>
                </div>
              </div>

              {/* Categories Card */}
              <div className="bv-card">
                <div className="bv-card-header">
                  <div className="bv-icon-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    </svg>
                  </div>
                  <div className="bv-card-title">Popular Categories</div>
                  <div className="bv-card-pill">Topics</div>
                </div>
                <div className="bv-metric-row">
                  <div className="bv-metric">
                    <div className="bv-metric-val">42</div>
                    <div className="bv-metric-lbl">AI & ML</div>
                  </div>
                  <div className="bv-metric">
                    <div className="bv-metric-val">38</div>
                    <div className="bv-metric-lbl">Training</div>
                  </div>
                  <div className="bv-metric">
                    <div className="bv-metric-val">35</div>
                    <div className="bv-metric-lbl">E-Learning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="neu-divider" />

      {/* ── Stay Updated Section ── */}
      <section className="blog-stay blog-section">
        <div className="blog-container">
          <div className="blog-stay-box fade-up" ref={useFadeOnVisible()}>
            <div className="section-badge" style={{ margin: "0 auto 24px" }}>
              <span className="badge-dot" />
              Stay Updated with the Latest Learning Innovations
            </div>
            <h2 className="blog-stay-title">
              Stay Updated with the <span>Latest Learning Innovations</span>
            </h2>
            <p className="blog-stay-desc">
              The learning landscape continues to evolve with new technologies, methodologies, and industry trends. The NeuroLXP blog keeps readers informed about the latest developments in digital learning, education technology, and workforce development.
            </p>
            <p className="blog-stay-desc">
              From AI-powered learning strategies to innovative training methodologies, our blog provides actionable insights that help learning professionals stay ahead of the curve and implement cutting-edge solutions in their organizations. Whether you're an educator, trainer, or learning leader, our content is designed to support your professional growth.
            </p>
            <div className="blog-stay-actions">
              <a href="#" className="neu-btn neu-btn-primary neu-btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                Read Latest Articles
              </a>
              <a href="#" className="neu-btn neu-btn-outline neu-btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                Subscribe to Updates
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="blog-cta blog-section">
        <div className="blog-container">
          <div className="blog-cta-box fade-up" ref={ctaRef}>
            <div className="section-badge" style={{ margin: "0 auto 24px" }}>
              <span className="badge-dot" />
              NeuroLXP Blog — Knowledge for the Future of Learning
            </div>
            <h2 className="blog-cta-title">
              NeuroLXP Blog — Knowledge for the Future of Learning
            </h2>
            <p className="blog-cta-desc">
              Explore our blog to discover expert insights, emerging trends, and innovative ideas that help institutions and organizations create smarter, more engaging learning experiences.
            </p>
            <p className="blog-cta-desc">
              Join thousands of learning professionals who trust NeuroLXP for the latest insights on AI in education, corporate training best practices, e-learning innovations, and data-driven learning strategies. Our comprehensive coverage ensures you stay at the forefront of educational technology.
            </p>
            <div className="blog-cta-actions">
              <a href="#" className="neu-btn neu-btn-primary neu-btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
                Explore All Articles
              </a>
              <a href="#" className="neu-btn neu-btn-outline neu-btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}