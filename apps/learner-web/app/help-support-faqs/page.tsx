"use client";

import { useEffect, useRef, useState } from "react";
import "./help-page.css";

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
  }, []);
  return ref;
}

function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setCount(Math.floor(ease * target));
            if (p < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { ref, count };
}

/* ══════════════════════════════════════════════
   Sub-components
   ══════════════════════════════════════════════ */

/** Reusable image placeholder */
function ImgPlaceholder({
  name,
  size,
  className = "",
}: {
  name: string;
  size: string;
  className?: string;
}) {
  return (
    <div className={`img-placeholder ${className}`}>
      <div className="img-placeholder-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
      <div className="img-placeholder-name">{name}</div>
      <div className="img-placeholder-size">{size}</div>
    </div>
  );
}

/** Animated stat counter */
function AnimatedStat({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
}) {
  const numeric = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/\d/g, "");
  const { ref, count } = useCounter(numeric);
  return (
    <div className="hs-stat-card fade-up" ref={ref}>
      <div className="hs-stat-icon-box">{icon}</div>
      <div className="hs-stat-value">{count}{suffix}</div>
      <div className="hs-stat-label">{label}</div>
    </div>
  );
}

/** FAQ accordion item */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`hs-faq-item${open ? " open" : ""}`}>
      <button className="hs-faq-trigger" onClick={() => setOpen(!open)}>
        {q}
        <span className="hs-faq-chevron">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div className="hs-faq-body">
        <p className="hs-faq-answer">{a}</p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   Data
   ══════════════════════════════════════════════ */
const STATS = [
  {
    value: "24/7",
    label: "Support Available",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: "500+",
    label: "Help Articles",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    value: "98%",
    label: "Issue Resolution Rate",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    value: "2h",
    label: "Avg Response Time",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

const CHANNELS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Live Chat Support",
    desc: "Connect instantly with our support specialists for real-time assistance on any platform-related query or technical issue.",
    badge: "Online Now",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "Email Support",
    desc: "Submit detailed queries or technical reports to our support team and receive comprehensive responses within 2 business hours.",
    badge: "Fast Response",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.37 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 3.18 2 2 0 0 1 4.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Onboarding Assistance",
    desc: "Get guided onboarding sessions from our experts to help your team get started quickly and effectively on the NeuroLXP platform.",
    badge: "Scheduled",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "Troubleshooting Help",
    desc: "Step-by-step troubleshooting guides and direct specialist support to resolve common platform issues swiftly.",
    badge: "Self-Serve",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Admin & Instructor Support",
    desc: "Dedicated support pathways for administrators and instructors managing courses, users, analytics, and platform configurations.",
    badge: "Priority",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Feature Guidance",
    desc: "Explore detailed feature walkthroughs, video demos, and interactive guides to master every capability of the NeuroLXP platform.",
    badge: "Self-Serve",
  },
];

const KB_TILES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Getting Started Guides",
    desc: "Step-by-step guides to set up your NeuroLXP account, configure your portal, and launch your first learning program.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    title: "Course Creation Tutorials",
    desc: "Detailed walkthroughs on building, structuring, and publishing interactive courses with rich multimedia content.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Assessment & Reporting",
    desc: "Instructions on creating quizzes, setting up assessments, and reading detailed learner analytics and progress reports.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: "Content Management",
    desc: "Guidance on uploading, organizing, and managing your learning content library and digital assets efficiently.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
    title: "Platform Configuration",
    desc: "Tips and documentation for administrators to customize portal settings, branding, roles, and access permissions.",
  },
];

const KB_RESOURCES = [
  { label: "Video Tutorials", icon: "▶" },
  { label: "PDF User Manual", icon: "📄" },
  { label: "Release Notes", icon: "📋" },
  { label: "API Documentation", icon: "⚙" },
];

const FAQS = [
  {
    category: "courses",
    q: "How do I create and manage courses on NeuroLXP?",
    a: "Navigate to the Course Management section in your admin dashboard. Click 'Create New Course', add your content modules (videos, documents, quizzes), configure settings such as prerequisites and certificates, then publish. You can edit or archive courses anytime from the same dashboard.",
  },
  {
    category: "learners",
    q: "How do I enroll learners and assign training programs?",
    a: "From the User Management panel, select learners individually or in bulk. Use the 'Assign Training' option to link them to specific courses or learning pathways. You can also automate enrollment based on role, department, or onboarding date using automated rules.",
  },
  {
    category: "analytics",
    q: "How do I track learner progress and view analytics?",
    a: "Access the Analytics Dashboard from the main navigation. It provides real-time data on course completions, assessment scores, time-on-platform, and learner engagement. Custom reports can be generated and exported in CSV or PDF format.",
  },
  {
    category: "assessments",
    q: "How do I create assessments and interactive learning modules?",
    a: "Use the built-in Assessment Builder to create multiple-choice, true/false, or open-ended questions. Interactive modules can include drag-and-drop activities, scenario simulations, and branching paths—all configurable without coding knowledge.",
  },
  {
    category: "resources",
    q: "How do learners access their learning resources and certifications?",
    a: "Learners can access all assigned courses, resources, and certificates from their personal Learning Dashboard. Certificates are automatically generated upon successful course completion and can be downloaded or shared directly from the platform.",
  },
  {
    category: "courses",
    q: "Can I duplicate or re-use existing course content?",
    a: "Yes. NeuroLXP allows instructors to clone existing courses and modify them for new cohorts or programs. Shared content libraries also let you reuse modules across multiple courses efficiently.",
  },
];

const FAQ_TABS = ["All", "Courses", "Learners", "Analytics", "Assessments", "Resources"];

const STEPS = [
  {
    num: "01",
    title: "Reliable Platform Infrastructure",
    desc: "NeuroLXP operates with 99.9% uptime, ensuring your learning operations are never interrupted regardless of peak usage.",
  },
  {
    num: "02",
    title: "Clear and Comprehensive Documentation",
    desc: "All features are backed by detailed, up-to-date documentation accessible directly from within the platform or help centre.",
  },
  {
    num: "03",
    title: "Responsive Help Channels",
    desc: "Multiple support pathways including live chat, email, and scheduled calls ensure that institutions always have access to timely assistance.",
  },
  {
    num: "04",
    title: "Dedicated Account Management",
    desc: "Enterprise and institutional clients receive dedicated account managers who provide proactive support and strategic guidance.",
  },
];

/* ══════════════════════════════════════════════
   Main Page
   ══════════════════════════════════════════════ */
export default function HelpSupportFAQs() {
  const [activeTab, setActiveTab] = useState("All");
  const heroRef = useFadeOnVisible(0.05);
  const ctaRef = useFadeOnVisible(0.1);

  const filteredFaqs =
    activeTab === "All"
      ? FAQS
      : FAQS.filter((f) => f.category === activeTab.toLowerCase());

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
    <div className="hs-root">

      {/* ══ HERO ══ */}
      <section className="hs-hero hs-section">
        <div className="hs-container">
          <div className="hs-hero-grid">

            {/* Left */}
            <div ref={heroRef} className="fade-up">
              <div className="hs-hero-eyebrow">
                <span className="badge-dot" />
                Help, Support & FAQs
              </div>
              <h1 className="hs-hero-title">
                We're Here to Help<br />
                <span className="highlight">You Succeed</span>
              </h1>
              <p className="hs-hero-desc">
                At NeuroLXP, we are committed to ensuring that every user — whether an administrator, educator, or learner — has a smooth and successful learning experience. Our Help, Support & FAQs section provides quick access to guidance, troubleshooting resources, and expert assistance whenever you need it.
              </p>

              {/* Search Bar */}
              <div className="hs-search-bar">
                <span className="hs-search-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                  </svg>
                </span>
                <input
                  className="hs-search-input"
                  type="text"
                  placeholder="Search for help articles, guides, FAQs…"
                />
                <button className="hs-search-btn">Search</button>
              </div>

              {/* Quick topic chips */}
              <div className="hs-quick-chips">
                <span className="hs-chip-label">Popular:</span>
                {["Getting started", "Course creation", "Analytics", "Certifications", "User roles"].map((t) => (
                  <button key={t} className="hs-chip">{t}</button>
                ))}
              </div>
            </div>

            {/* Right — Visual */}
            <div className="hs-hero-visual" style={{ position: "relative" }}>
              {/* Floating badges */}
              <div className="hs-float-badge hs-float-badge-1">
                <span className="hs-float-dot" />
                <div>
                  <div className="hs-float-text">Support Available</div>
                  <div className="hs-float-count">24 / 7</div>
                </div>
              </div>
              <div className="hs-float-badge hs-float-badge-2">
                <span className="hs-float-dot warning" />
                <div>
                  <div className="hs-float-text">Articles & Guides</div>
                  <div className="hs-float-count">500+ Resources</div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="hero-image-wrapper">
                <img 
                  src="/help-hero-illustration.png" 
                  alt="Help and Support Hero"
                  className="hero-illustration-img"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ STATS STRIP ══ */}
      <section className="hs-stats-strip">
        <div className="hs-container">
          <div className="hs-stats-grid">
            {STATS.map((s) => (
              <AnimatedStat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      <hr className="neu-divider" style={{ margin: "0 auto 0", maxWidth: "calc(1200px - 48px)" }} />

      {/* ══ COMPREHENSIVE SUPPORT CHANNELS ══ */}
      <section className="hs-section" id="support">
        <div className="hs-container">
          <div className="text-center fade-up" ref={useFadeOnVisible()}>
            <div className="section-badge" style={{ margin: "0 auto 20px" }}>
              <span className="badge-dot" />
              Comprehensive User Support
            </div>
            <h2 className="section-title">
              Multiple Ways to <span>Get Help</span>
            </h2>
            <p className="section-subtitle">
              NeuroLXP offers multiple support channels to help users resolve questions or technical issues efficiently — from platform usage to onboarding and beyond.
            </p>
          </div>

          <div className="hs-channels-grid">
            {CHANNELS.map((ch, i) => (
              <div key={ch.title} className={`hs-channel-card fade-up stagger-${(i % 3) + 1}`} ref={useFadeOnVisible()}>
                <div className="hs-channel-icon">{ch.icon}</div>
                <div className="hs-channel-title">{ch.title}</div>
                <p className="hs-channel-desc">{ch.desc}</p>
                <div className="hs-channel-badge">
                  <span className="hs-channel-dot" />
                  {ch.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="neu-divider" />

      {/* ══ KNOWLEDGE BASE — Bento Grid ══ */}
      <section className="hs-section hs-kb-section" id="knowledge-base">
        <div className="hs-container">
          <div className="text-center fade-up" ref={useFadeOnVisible()}>
            <div className="section-badge" style={{ margin: "0 auto 20px" }}>
              <span className="badge-dot" />
              Knowledge Base & Help Resources
            </div>
            <h2 className="section-title">
              Everything You Need to <span>Get Answers</span>
            </h2>
            <p className="section-subtitle">
              Our knowledge base provides detailed guides, tutorials, and documentation to help users understand platform features and best practices — all in one place.
            </p>
          </div>

          <div className="hs-kb-bento">
            {/* Wide image card */}
            <div className="hs-kb-img-card fade-up" ref={useFadeOnVisible()}>
              {/* Knowledge Base Image */}
              <div className="kb-image-wrapper">
                <img 
                  src="/knowledge-base-dashboard.png" 
                  alt="Knowledge Base Dashboard"
                  className="kb-main-img"
                />
              </div>
            </div>

            {/* Side panel */}
            <div className="hs-kb-img-side fade-up stagger-2" ref={useFadeOnVisible()}>
              <div className="hs-kb-side-panel">
                <div className="hs-kb-side-panel-title">Quick Resources</div>
                {KB_RESOURCES.map((r) => (
                  <div key={r.label} className="hs-kb-resource-item">
                    <div className="hs-kb-res-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <span className="hs-kb-res-label">{r.icon} {r.label}</span>
                  </div>
                ))}
              </div>

              {/* Support Team Image */}
              <div className="side-image-wrapper">
                <img 
                  src="/help-support-team.png" 
                  alt="Help Support Team"
                  className="side-img"
                />
              </div>
            </div>

            {/* Bottom tiles */}
            {KB_TILES.map((tile, i) => (
              <div key={tile.title} className={`hs-kb-tile fade-up stagger-${(i % 3) + 1}`} ref={useFadeOnVisible()}>
                <div className="hs-kb-tile-icon">{tile.icon}</div>
                <div className="hs-kb-tile-title">{tile.title}</div>
                <p className="hs-kb-tile-desc">{tile.desc}</p>
                <a href="#" className="hs-kb-tile-link">
                  Explore →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="neu-divider" />

      {/* ══ FAQ ACCORDION ══ */}
      <section className="hs-section" id="faqs">
        <div className="hs-container">
          <div className="text-center fade-up" ref={useFadeOnVisible()}>
            <div className="section-badge" style={{ margin: "0 auto 20px" }}>
              <span className="badge-dot" />
              Frequently Asked Questions
            </div>
            <h2 className="section-title">
              Quick Answers to <span>Common Questions</span>
            </h2>
            <p className="section-subtitle">
              The FAQs section addresses common questions about using NeuroLXP, helping users find answers quickly without needing direct support.
            </p>
          </div>

          <div className="hs-faq-layout">

            {/* Left visual */}
            <div className="hs-faq-visual fade-up" ref={useFadeOnVisible()}>
              {/* FAQ Image */}
              <div className="faq-image-wrapper">
                <img 
                  src="/faq-illustration.png" 
                  alt="FAQ Illustration"
                  className="faq-illustration-img"
                />
              </div>

              {/* Quick stat card */}
              <div style={{
                background: "var(--neu-surface)",
                borderRadius: 24,
                boxShadow: "var(--shadow-raised)",
                padding: "24px",
                display: "flex",
                flexDirection: "column" as const,
                gap: 16,
              }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--neu-text-secondary)" }}>
                  Still need help?
                </div>
                <div style={{ fontSize: "0.95rem", color: "var(--neu-text-secondary)", lineHeight: 1.75 }}>
                  Our support team is always ready to assist you with any queries not covered in the FAQs.
                </div>
                <a href="#support" className="neu-btn neu-btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Contact Support
                </a>
              </div>
            </div>

            {/* Right: Tab filters + Accordion */}
            <div className="fade-up stagger-2" ref={useFadeOnVisible()}>
              <div className="hs-faq-tabs">
                {FAQ_TABS.map((tab) => (
                  <button
                    key={tab}
                    className={`hs-tab-btn${activeTab === tab ? " active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="hs-faq-list">
                {filteredFaqs.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="neu-divider" />

      {/* ══ CONTINUOUS SUPPORT — Timeline ══ */}
      <section className="hs-section" id="institutions">
        <div className="hs-container">
          <div className="hs-inst-layout">

            {/* Left — Steps timeline */}
            <div>
              <div className="fade-up" ref={useFadeOnVisible()}>
                <div className="section-badge">
                  <span className="badge-dot" />
                  Continuous Support for Institutions
                </div>
                <h2 className="section-title" style={{ marginTop: 20 }}>
                  Built for <span>Uninterrupted</span> Learning
                </h2>
                <p className="section-subtitle" style={{ margin: "0 0 0 0", textAlign: "left" }}>
                  NeuroLXP understands that learning platforms must operate smoothly to support educational and training initiatives.
                </p>
              </div>

              <div className="hs-steps-list">
                {STEPS.map((s, i) => (
                  <div key={s.num} className={`hs-step fade-up stagger-${i + 1}`} ref={useFadeOnVisible()}>
                    <div className="hs-step-num">{s.num}</div>
                    <div className="hs-step-content">
                      <div className="hs-step-title">{s.title}</div>
                      <p className="hs-step-desc">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Image + metric chips */}
            <div className="hs-inst-visual fade-up stagger-2" ref={useFadeOnVisible()}>
              {/* Institution Support Image */}
              <div className="inst-image-wrapper">
                <img 
                  src="/institution-support.png" 
                  alt="Institution Support"
                  className="inst-support-img"
                />
              </div>

              <div className="hs-inst-metrics">
                {[
                  { val: "99.9%", lbl: "Platform Uptime" },
                  { val: "50+", lbl: "Countries Served" },
                  { val: "120+", lbl: "Languages Supported" },
                  { val: "<2h", lbl: "Response Time" },
                ].map((m) => (
                  <div key={m.lbl} className="hs-metric-chip">
                    <div className="hs-metric-val">{m.val}</div>
                    <div className="hs-metric-lbl">{m.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="hs-cta">
        <div className="hs-container">
          <div className="hs-cta-box fade-up" ref={ctaRef}>
            <div className="section-badge hs-cta-badge">
              <span className="badge-dot" />
              NeuroLXP — Supporting Your Learning Journey
            </div>
            <h2 className="hs-cta-title">
              Dedicated Support for <span>Every Step</span>
            </h2>
            <p className="hs-cta-desc">
              With dedicated support services, detailed knowledge resources, and comprehensive FAQs, NeuroLXP ensures that every user receives the guidance and assistance needed to fully benefit from the platform — from onboarding through to mastery.
            </p>
            <div className="hs-cta-actions">
              <a href="#" className="neu-btn neu-btn-primary neu-btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Start Live Chat
              </a>
              <a href="#knowledge-base" className="neu-btn neu-btn-outline neu-btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                Browse Knowledge Base
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}