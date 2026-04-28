import "./training-management.css";
import { FaBrain, FaLayerGroup, FaChartLine, FaBolt, FaRocket, FaUsers, FaShieldAlt, FaSyncAlt, FaCheckCircle, FaArrowRight, } from "react-icons/fa";

const aiLearningPoints = [
  "Intelligent course recommendations tailored to each learner",
  "Adaptive learning paths based on performance and goals",
  "Automated content sequencing for optimal knowledge retention",
  "AI-driven skill-gap analysis and personalised feedback",
];

const centralManagementPoints = [
  "Manage all corporate training content from a single dashboard",
  "Organise courses, certifications, and compliance modules",
  "Assign and schedule training across teams and departments",
  "Integrate existing content libraries seamlessly into the platform",
];

const analyticsPoints = [
  "Live dashboards showing learner progress and completion rates",
  "Engagement metrics to identify at-risk or disengaged learners",
  "Performance benchmarking across individuals, teams, and cohorts",
  "Exportable reports to support compliance and audit requirements",
];

const skillDevelopmentPoints = [
  "Smart skill mapping aligned to organisational business goals",
  "Personalised upskilling and reskilling pathways for every role",
  "Competency tracking to visualise growth over time",
  "Bridge skill gaps before they impact team performance",
];

const miniFeatures = [
  { icon: <FaRocket />, label: "Faster onboarding & delivery" },
  { icon: <FaUsers />,  label: "Scalable for growing teams"  },
  { icon: <FaShieldAlt />, label: "Built-in compliance tracking" },
  { icon: <FaSyncAlt />, label: "Continuous learning culture"  },
];

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 420 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AI-powered training management dashboard illustration"
      className="illustration"
    >
      
      <rect x="12" y="12" width="396" height="206" rx="22" fill="#dde4ec" />

      <rect x="12" y="12" width="76" height="206" rx="22" fill="#c8d2dc" />
      <circle cx="50" cy="52"  r="14" fill="#0f766e" opacity=".85" />
      <circle cx="50" cy="92"  r="10" fill="#2563eb" opacity=".6"  />
      <circle cx="50" cy="126" r="10" fill="#d97706" opacity=".6"  />
      <circle cx="50" cy="160" r="10" fill="#7c3aed" opacity=".6"  />

      <rect x="104" y="24" width="290" height="76" rx="14" fill="#eaf0f6" />
      <text x="118" y="42" fontSize="9" fill="#5a6572" fontFamily="Segoe UI, sans-serif" fontWeight="700">LEARNER PROGRESS</text>

      <rect x="118" y="50" width="200" height="7" rx="4" fill="#c8d2dc" />
      <rect x="118" y="50" width="160" height="7" rx="4" fill="#0f766e" />
      <text x="324" y="57" fontSize="7.5" fill="#0f766e" fontFamily="Segoe UI, sans-serif" fontWeight="700">80%</text>

      <rect x="118" y="63" width="200" height="7" rx="4" fill="#c8d2dc" />
      <rect x="118" y="63" width="130" height="7" rx="4" fill="#2563eb" />
      <text x="324" y="70" fontSize="7.5" fill="#2563eb" fontFamily="Segoe UI, sans-serif" fontWeight="700">65%</text>

      <rect x="118" y="76" width="200" height="7" rx="4" fill="#c8d2dc" />
      <rect x="118" y="76" width="180" height="7" rx="4" fill="#d97706" />
      <text x="324" y="83" fontSize="7.5" fill="#d97706" fontFamily="Segoe UI, sans-serif" fontWeight="700">90%</text>

      <rect x="104" y="112" width="88" height="56" rx="12" fill="#eaf0f6" />
      <text x="148" y="134" fontSize="17" fill="#0f766e" fontFamily="Segoe UI, sans-serif" fontWeight="800" textAnchor="middle">94%</text>
      <text x="148" y="148" fontSize="7" fill="#5a6572" fontFamily="Segoe UI, sans-serif" textAnchor="middle">Completion</text>

      <rect x="202" y="112" width="88" height="56" rx="12" fill="#eaf0f6" />
      <text x="246" y="134" fontSize="17" fill="#2563eb" fontFamily="Segoe UI, sans-serif" fontWeight="800" textAnchor="middle">4.8★</text>
      <text x="246" y="148" fontSize="7" fill="#5a6572" fontFamily="Segoe UI, sans-serif" textAnchor="middle">Satisfaction</text>

      <rect x="300" y="112" width="94" height="56" rx="12" fill="#eaf0f6" />
      <text x="347" y="134" fontSize="17" fill="#d97706" fontFamily="Segoe UI, sans-serif" fontWeight="800" textAnchor="middle">2×</text>
      <text x="347" y="148" fontSize="7" fill="#5a6572" fontFamily="Segoe UI, sans-serif" textAnchor="middle">Faster onboard</text>

      <rect x="104" y="180" width="116" height="26" rx="10" fill="#0f766e" opacity=".12" />
      <text x="162" y="197" fontSize="8" fill="#0f766e" fontFamily="Segoe UI, sans-serif" fontWeight="700" textAnchor="middle">AI-Powered Learning</text>

      <rect x="228" y="180" width="166" height="26" rx="10" fill="#2563eb" opacity=".1" />
      <text x="311" y="197" fontSize="8" fill="#2563eb" fontFamily="Segoe UI, sans-serif" fontWeight="700" textAnchor="middle">Real-Time Analytics</text>
    </svg>
  );
}

function HighlightIllustration() {
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NeuroLXP connected learning ecosystem illustration"
      className="illustration"
    >
      <rect x="8" y="8" width="304" height="204" rx="20" fill="#dde4ec" />

      <circle cx="160" cy="110" r="36" fill="#e8edf2"
        style={{ filter: "drop-shadow(4px 4px 8px #c8d2dc) drop-shadow(-4px -4px 8px #fff)" }} />
      <text x="160" y="103" fontSize="22" textAnchor="middle" fill="#0f766e">🧠</text>
      <text x="160" y="120" fontSize="7.5" fill="#213247" fontFamily="Segoe UI, sans-serif" fontWeight="800" textAnchor="middle">NeuroLXP</text>
      <text x="160" y="130" fontSize="6.5" fill="#5a6572" fontFamily="Segoe UI, sans-serif" textAnchor="middle">AI Core</text>

      <line x1="160" y1="74"  x2="160" y2="44"  stroke="#0f766e" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="160" y1="146" x2="160" y2="176" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="124" y1="94"  x2="82"  y2="72"  stroke="#d97706" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="196" y1="94"  x2="238" y2="72"  stroke="#7c3aed" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="124" y1="126" x2="82"  y2="148" stroke="#7c3aed" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="196" y1="126" x2="238" y2="148" stroke="#d97706" strokeWidth="2" strokeDasharray="4 3" />

      {[
        { cx: 160, cy: 34,  label: "Courses",    color: "#0f766e", emoji: "📚" },
        { cx: 160, cy: 186, label: "Analytics",  color: "#2563eb", emoji: "📊" },
        { cx: 65,  cy: 60,  label: "Skills",     color: "#d97706", emoji: "⚡" },
        { cx: 255, cy: 60,  label: "Compliance", color: "#7c3aed", emoji: "🛡️" },
        { cx: 65,  cy: 160, label: "Teams",      color: "#7c3aed", emoji: "👥" },
        { cx: 255, cy: 160, label: "Paths",      color: "#d97706", emoji: "🗺️" },
      ].map(({ cx, cy, label, color, emoji }) => (
        <g key={label}>
          <circle cx={cx} cy={cy} r="22" fill="#e8edf2"
            style={{ filter: "drop-shadow(3px 3px 6px #c8d2dc) drop-shadow(-3px -3px 6px #fff)" }} />
          <text x={cx} y={cy - 3} fontSize="13" textAnchor="middle" fill={color}>{emoji}</text>
          <text x={cx} y={cy + 12} fontSize="6" fill="#213247" fontFamily="Segoe UI, sans-serif" fontWeight="700" textAnchor="middle">{label}</text>
        </g>
      ))}
    </svg>
  );
}

export default function TrainingManagementPage() {
  return (
    <main className="training-management-page page">

      <section className="heroSection">
        <div className="heroGrid">

          <div className="heroContent">

            <h1 className="heroTitle">Training Management</h1>

            <h2 className="heroSubtitle">
              Transform How Your Organisation Learns with AI-Powered,
              Scalable, and Data-Driven Training
            </h2>

            <p className="heroText">
              NeuroLXP is an AI-powered Learning Experience Platform built for
              personalised, scalable, and data-driven training management. In a
              world where skills evolve rapidly, organisations need more than a
              traditional LMS — they need a platform that thinks, adapts, and
              grows with their people.
            </p>

            <p className="heroText">
              With NeuroLXP, institutions and enterprises can centralise
              training content, deliver intelligent learning paths, and track
              performance in real time — all within a single, intuitive platform
              designed for the future of workforce development.
            </p>
          </div>

          <div className="heroVisualCard">
            <div className="imagePlaceholder">
              <HeroIllustration />
            </div>

            <div className="floatingStats">
              <div className="statPill">
                <FaBrain className="iconText" />
                <span>AI-Powered Learning</span>
              </div>
              <div className="statPill">
                <FaChartLine className="iconText" />
                <span>Real-Time Analytics</span>
              </div>
              <div className="statPill">
                <FaBolt className="iconText" />
                <span>Skill-Driven Development</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="cardsSection">

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaBrain className="iconText" />
            </div>
            <h3>AI-Powered Learning</h3>
          </div>

          <p>
            NeuroLXP delivers personalised employee training programmes through
            intelligent recommendations and adaptive learning paths. Every
            learner receives content curated to their role, pace, and
            performance — not a one-size-fits-all curriculum.
          </p>

          <div className="insetBox">
            <h4>Core AI capabilities include:</h4>
            <ul className="featureList">
              {aiLearningPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            AI-driven learning reduces time-to-competency and dramatically
            improves knowledge retention across your workforce.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaLayerGroup className="iconText" />
            </div>
            <h3>Centralised Training Management</h3>
          </div>

          <p>
            Managing training across teams, departments, and locations is
            complex. NeuroLXP simplifies this by bringing all your corporate
            training content, courses, and certifications into one seamless
            platform.
          </p>

          <div className="insetBox">
            <h4>With centralised management, organisations can:</h4>
            <ul className="featureList">
              {centralManagementPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            A single source of truth means less admin overhead and greater
            consistency in training quality organisation-wide.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaChartLine className="iconText" />
            </div>
            <h3>Real-Time Learning Analytics</h3>
          </div>

          <p>
            Data transforms training from a cost centre into a strategic asset.
            NeuroLXP's built-in analytics engine gives leaders and L&amp;D teams
            the visibility they need to make confident, informed decisions.
          </p>

          <div className="insetBox">
            <h4>Analytics capabilities include:</h4>
            <ul className="featureList">
              {analyticsPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            Actionable insights mean training programmes continuously improve
            based on real learner behaviour, not assumptions.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaBolt className="iconText" />
            </div>
            <h3>Skill-Driven Development</h3>
          </div>

          <p>
            The modern workforce demands continuous growth. NeuroLXP enables
            organisations to align employee upskilling and reskilling directly
            to business goals through smart skill mapping and personalised
            development pathways.
          </p>

          <div className="insetBox">
            <h4>Skill development features support:</h4>
            <ul className="featureList">
              {skillDevelopmentPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

      </section>

      <section className="highlightSection">
        <div className="highlightGrid">

          <div className="highlightTextCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaRocket className="iconText" />
              </div>
              <h3>NeuroLXP — Upgrade from LMS to Learning Experience</h3>
            </div>

            <p>
              Unlike traditional Learning Management Systems that simply store
              and assign content, NeuroLXP is built around the learner
              experience. Drive higher engagement, accelerate onboarding, and
              build a culture of continuous development — all with an
              intelligent, intuitive platform designed for modern workforces.
            </p>

            <p>
              Ready to transform training with NeuroLXP? Empower your workforce
              with a modern training management system built for the future.
            </p>

            <div className="miniFeatures">
              {miniFeatures.map(({ icon, label }) => (
                <div className="miniFeature" key={label}>
                  <span className="iconText">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="secondaryVisualCard">
            <div className="imagePlaceholderAlt">
              <HighlightIllustration />
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
