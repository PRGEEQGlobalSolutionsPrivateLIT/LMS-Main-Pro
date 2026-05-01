import Image from "next/image";
import "./training-management.css";

const IconNeuron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
  </svg>
);

const IconStack = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const IconWave = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <path d="M2 12c1.5-4 3-6 4.5-6S9 9 10.5 12s3 6 4.5 6S18 15 19.5 12 21 6 22 6" />
  </svg>
);

const IconCompass = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const IconFlame = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z" />
  </svg>
);

const IconCrown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <path d="M2 20h20M5 20V10l7-7 7 7v10" />
    <path d="M9 20v-5h6v5" />
  </svg>
);

const IconGrid = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon svg-icon--sm">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const IconTick = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon svg-icon--sm">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconZap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IMG = {
  hero: "/pexels-photo-3184291.webp",
  central: "/pexels-photo-4144923.jpeg",
  skill: "/Learning-Journey.jpeg",
  highlight: "/Learning-Ecosystem.png",
};

export default function TrainingManagementPage() {
  return (
    <main className="tm">
      <section className="tm__hero">
        <div className="tm__hero-text">
          <span className="tm__eyebrow">AI-Powered Platform</span>
          <h1 className="tm__title">
            Training
            <br />
            Management
          </h1>
          <h2 className="tm__subtitle">Transform How Your Organisation Learns</h2>
          <p className="tm__body">
            NeuroLXP centralises training, delivers intelligent learning paths,
            and tracks performance in real time.
          </p>

          <div className="tm__hero-stats">
            <div className="tm__stat-block tm__stat-block--primary">
              <span className="tm__stat-num">94%</span>
              <span className="tm__stat-lbl">Completion Rate</span>
            </div>
            <div className="tm__stat-divider" />
            <div className="tm__stat-block tm__stat-block--secondary">
              <span className="tm__stat-num">2×</span>
              <span className="tm__stat-lbl">Faster Onboarding</span>
            </div>
            <div className="tm__stat-divider" />
            <div className="tm__stat-block tm__stat-block--accent">
              <span className="tm__stat-num">4.8★</span>
              <span className="tm__stat-lbl">Learner Score</span>
            </div>
          </div>
        </div>

        <div className="tm__hero-img-panel">
          <Image
            src={IMG.hero}
            alt="Team collaborating"
            width={620}
            height={420}
            className="tm__hero-img"
            priority
          />
          <div className="tm__hero-badge">
            <IconZap />
            <span>AI-Driven Learning</span>
          </div>
        </div>
      </section>

      <section className="tm__band tm__band--teal">
        <div className="tm__band-content">
          <div className="tm__icon-pill tm__icon-pill--primary">
            <IconNeuron />
            <span>AI-Powered Learning</span>
          </div>
          <h3 className="tm__section-title">
            Intelligent paths, personalised to every learner
          </h3>
          <p className="tm__body">
            Content curated to each learner&apos;s role, pace, and performance — no two journeys are alike.
          </p>
        </div>

        <div className="tm__band-cards">
          {[
            { icon: <IconNeuron />, title: "Tailored Recommendations", body: "Content matched to each learner's role and skill level.", c: "primary" },
            { icon: <IconWave />, title: "Adaptive Paths", body: "Paths that shift in real time based on performance.", c: "secondary" },
            { icon: <IconStack />, title: "Smart Sequencing", body: "Automated ordering for maximum knowledge retention.", c: "accent" },
            { icon: <IconZap />, title: "Skill-Gap Feedback", body: "AI flags gaps and suggests targeted interventions.", c: "support" },
          ].map(({ icon, title, body, c }) => (
            <div className={`tm__band-card tm__band-card--${c}`} key={title}>
              <span className={`tm__band-card-icon tm__band-card-icon--${c}`}>
                {icon}
              </span>
              <h4 className="tm__band-card-title">{title}</h4>
              <p className="tm__band-card-body">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tm__split tm__split--reverse">
        <div className="tm__split-content">
          <div className="tm__icon-pill tm__icon-pill--secondary">
            <IconStack />
            <span>Centralised Management</span>
          </div>
          <h3 className="tm__section-title">One platform. All training. Zero overlap.</h3>
          <p className="tm__body">
            Courses, certs, and compliance — all managed from a single dashboard.
          </p>

          <div className="tm__metric-row">
            {[
              { val: "500+", lbl: "Courses", c: "secondary" },
              { val: "98%", lbl: "Uptime", c: "primary" },
              { val: "12×", lbl: "ROI", c: "accent" },
            ].map(({ val, lbl, c }) => (
              <div className={`tm__metric tm__metric--${c}`} key={lbl}>
                <span className="tm__metric-val">{val}</span>
                <span className="tm__metric-lbl">{lbl}</span>
              </div>
            ))}
          </div>

          <ul className="tm__checklist tm__checklist--compact">
            {[
              "Single dashboard for all content",
              "Assign & schedule across departments",
              "Integrate existing content libraries",
            ].map((pt) => (
              <li key={pt}>
                <span className="tm__tick tm__tick--secondary">
                  <IconTick />
                </span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="tm__split-img-wrap">
          <Image
            src={IMG.central}
            alt="Team managing training"
            width={620}
            height={420}
            className="tm__split-img"
          />
          <div className="tm__split-badge">
            <IconGrid />
            <span>Centralised</span>
          </div>
        </div>
      </section>

      <section className="tm__trio">
        <div className="tm__trio-text">
          <div className="tm__icon-pill tm__icon-pill--accent">
            <IconWave />
            <span>Real-Time Analytics</span>
          </div>
          <h3 className="tm__section-title">Turn training data into strategy</h3>
          <p className="tm__body">
            Live visibility for L&amp;D teams to make confident, data-backed decisions.
          </p>

          <ul className="tm__checklist tm__checklist--compact">
            {[
              "Live progress dashboards",
              "Spot at-risk learners early",
              "Benchmark across teams",
              "Exportable compliance reports",
            ].map((pt) => (
              <li key={pt}>
                <span className="tm__tick tm__tick--accent">
                  <IconTick />
                </span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="tm__trio-stats">
          {[
            { val: "3.2s", lbl: "Avg Response", icon: <IconZap />, c: "accent" },
            { val: "99%", lbl: "Data Accuracy", icon: <IconStar />, c: "primary" },
            { val: "Live", lbl: "Dashboards", icon: <IconWave />, c: "secondary" },
            { val: "∞", lbl: "Report History", icon: <IconStack />, c: "support" },
          ].map(({ val, lbl, icon, c }) => (
            <div className={`tm__trio-stat tm__trio-stat--${c}`} key={lbl}>
              <span className={`tm__trio-stat-icon tm__trio-stat-icon--${c}`}>
                {icon}
              </span>
              <div>
                <span className="tm__trio-stat-val">{val}</span>
                <span className="tm__trio-stat-lbl">{lbl}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tm__banner">
        <Image
          src={IMG.skill}
          alt="Skill development"
          width={1200}
          height={520}
          className="tm__banner-img"
        />
        <div className="tm__banner-overlay">
          <div className="tm__banner-glass">
            <div className="tm__icon-pill tm__icon-pill--support">
              <IconCompass />
              <span>Skill-Driven Development</span>
            </div>
            <h3 className="tm__banner-title">Upskilling aligned to business goals</h3>
            <p className="tm__body tm__body--light">
              Smart skill mapping and personalised pathways that close gaps before they cost you.
            </p>
            <div className="tm__banner-tags">
              {["Skill Mapping", "Personalised Paths", "Competency Tracking", "Gap Analysis"].map((t) => (
                <span className="tm__tag" key={t}>
                  <IconArrow />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tm__bento">
        <div className="tm__bento-main">
          <Image
            src={IMG.highlight}
            alt="Modern training environment"
            width={720}
            height={420}
            className="tm__bento-main-img"
          />
          <div className="tm__bento-main-content">
            <span className="tm__eyebrow">Why NeuroLXP</span>
            <h3 className="tm__bento-title">Upgrade from LMS to Learning Experience</h3>
            <p className="tm__body">
              Built around the learner — driving engagement, accelerating onboarding, and fostering continuous development.
            </p>
          </div>
        </div>

        <div className="tm__bento-side">
          <div className="tm__bento-card tm__bento-card--primary">
            <span className="tm__bento-icon tm__bento-icon--primary">
              <IconFlame />
            </span>
            <h4 className="tm__bento-card-title">Faster Onboarding</h4>
            <p className="tm__bento-card-body">Get new hires productive in half the time.</p>
          </div>

          <div className="tm__bento-card tm__bento-card--secondary">
            <span className="tm__bento-icon tm__bento-icon--secondary">
              <IconCrown />
            </span>
            <h4 className="tm__bento-card-title">Compliance Built-In</h4>
            <p className="tm__bento-card-body">Automated tracking for every regulation.</p>
          </div>
        </div>
      </section>
    </main>
  );
}