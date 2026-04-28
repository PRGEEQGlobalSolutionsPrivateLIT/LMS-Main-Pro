import "./interconnectivity.css";
import {
  FaNetworkWired,
  FaUsers,
  FaPlug,
  FaChartBar,
  FaUniversity,
  FaBuilding,
  FaLaptop,
  FaHome,
  FaLink,
  FaRocket,
  FaEye,
  FaBrain,
  FaPlay,
  FaArrowRight,
} from "react-icons/fa";
import Image from "next/image";

const coreFeatures = [
  {
    icon: FaNetworkWired,
    title: "Unified Learning Ecosystem",
    color: "primary",
    body: "Integrate multiple learning systems, content sources, and tools into one connected platform.",
    image: {
      src: "/photo-1558494949-ef010cbdcc31.webp",
      alt: "Network of connected servers representing a unified learning ecosystem",
    },
  },
  {
    icon: FaUsers,
    title: "Collaborative Learning Experience",
    color: "secondary",
    body: "Foster peer-to-peer learning, discussions, and knowledge sharing across academic and training environments.",
    image: {
      src: "/photo-1522202176988-66273c2fd55f.webp",
      alt: "Group of learners collaborating around a table",
    },
  },
  {
    icon: FaPlug,
    title: "System Integrations",
    color: "accent",
    body: "Seamlessly connect with LMS, HRMS, content libraries, and third-party tools for smooth data flow.",
    image: {
      src: "/photo-1518770660439-4636190af475.webp",
      alt: "Circuit board symbolising system-level integrations",
    },
  },
  {
    icon: FaChartBar,
    title: "Centralized Data & Insights",
    color: "support",
    body: "Bring all learner data into one place for better tracking, analytics, and decision-making.",
    image: {
      src: "/photo-1551288049-bebda4e38f71.jpeg",
      alt: "Analytics dashboard displaying learner performance data",
    },
  },
];

const keyBenefits = [
  "Unified platform for all learning activities",
  "Seamless integration across systems",
  "Improved collaboration and engagement",
  "Enhanced visibility into learning performance",
];

const useCases = [
  { icon: FaUniversity, label: "Universities & Higher Education Institutions", color: "primary" },
  { icon: FaBuilding,   label: "Corporate Training Academies",                 color: "secondary" },
  { icon: FaRocket,     label: "Skill Development Centers",                    color: "accent" },
  { icon: FaHome,       label: "Hybrid & Remote Learning Environments",        color: "support" },
];

const howItWorks = [
  "Integrate existing systems and tools",
  "Connect learners, educators, and admins",
  "Enable collaborative and social learning",
  "Track and optimize through unified analytics",
];

export default function InterconnectivityPage() {
  return (
    <main className="interconnectivity-page page">

      <section className="heroSection">
        <div className="heroGrid">

          <div className="heroContent">

            <h1 className="heroTitle">
              Enable Seamless Interconnectivity
            </h1>

            <h2 className="heroSubtitle">
              Connect learners, educators, and training ecosystems through one
              AI-powered platform
            </h2>

            <p className="heroText">
              <strong>NeuroLXP</strong> is the AI-powered{" "}
              <strong>Learning Experience Platform</strong> designed for
              unified, collaborative, and scalable learning. Connect every
              system, content source, and stakeholder in your organization
              through a single, intelligent hub.
            </p>

            <p className="heroText">
              Academic institutions and training organizations often operate in
              disconnected systems. <strong>NeuroLXP</strong> bridges these
              gaps by enabling{" "}
              <strong>interconnected learning environments</strong> where
              content, users, and systems work together—driving efficiency,
              engagement, and smarter outcomes.
            </p>

            <div className="heroCtas">
              <button className="ctaPrimary">
                <FaPlay className="btnIcon" />
                Request Demo
              </button>
              <button className="ctaSecondary">Get Started</button>
            </div>
          </div>

          <div className="heroVisualCard">
            <div className="heroImageWrap">
              <Image
                src="/photo-1534224039826-c7a0eda0e6b3.webp"
                alt="Interconnected digital network nodes representing the NeuroLXP ecosystem"
                width={720}
                height={420}
                className="heroImg"
                priority
              />
              <div className="heroImgOverlay" />
            </div>

            <div className="floatingStats">
              <div className="statPill">
                <FaLink className="iconText" />
                <span>Unified Ecosystem</span>
              </div>
              <div className="statPill">
                <FaPlug className="iconText" />
                <span>LMS / HRMS Ready</span>
              </div>
              <div className="statPill">
                <FaEye className="iconText" />
                <span>360° Analytics</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="cardsSection">
        {coreFeatures.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <article
              className={`contentCard color-${feature.color}`}
              key={idx}
            >
              <div className="cardHeader">
                <div className="iconWrap">
                  <Icon className="iconText" />
                </div>
                <h3>{feature.title}</h3>
              </div>

              <div className="cardImage">
                <Image
                  src={feature.image.src}
                  alt={feature.image.alt}
                  width={520}
                  height={180}
                  className="cardImg"
                />
              </div>

              <div className="insetBox">
                <p className="featureBody">{feature.body}</p>
              </div>
            </article>
          );
        })}
      </section>

      <section className="highlightSection">
        <div className="highlightGrid">

          <div className="highlightTextCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaBrain className="iconText" />
              </div>
              <h3>Break Silos. Build Connected Learning.</h3>
            </div>

            <p>
              NeuroLXP bridges the gaps between disconnected systems, enabling
              truly <strong>interconnected learning environments</strong> where
              content, users, and tools work as one.
            </p>

            <div className="insetBox">
              <h4>Key Benefits</h4>
              <ul className="featureList">
                {keyBenefits.map((item) => (
                  <li key={item}>
                    <span className="listIcon">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="secondaryVisualCard">
            <div className="imagePlaceholderAlt">
              <Image
                src="/photo-1573164713988-8665fc963095.webp"
                alt="Professionals reviewing connected learning data on screens"
                width={520}
                height={300}
                className="secondaryImg"
              />
            </div>
          </div>

        </div>
      </section>

      <section className="twinSection">
        <div className="twinGrid">

          <div className="twinCard">
            <div className="cardHeader">
              <div className="iconWrap primary-icon">
                <FaUniversity className="iconText" />
              </div>
              <h3>Use Cases</h3>
            </div>

            <div className="useCaseGrid">
              {useCases.map((uc) => {
                const Icon = uc.icon;
                return (
                  <div className={`useCasePill color-${uc.color}`} key={uc.label}>
                    <div className="ucIconWrap">
                      <Icon className="iconText" />
                    </div>
                    <span>{uc.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="twinCard">
            <div className="cardHeader">
              <div className="iconWrap secondary-icon">
                <FaArrowRight className="iconText" />
              </div>
              <h3>How It Works</h3>
            </div>

            <div className="insetBox">
              <ol className="howList">
                {howItWorks.map((step, i) => (
                  <li key={step}>
                    <span className="stepNum">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

        </div>
      </section>

      <section className="ctaSection">
        <div className="ctaCard">
    
          <h2 className="ctaTitle">
            Ready to connect your learning ecosystem?
          </h2>
          <p className="ctaBody">
            Unlock the power of <strong>interconnectivity with NeuroLXP</strong>.
          </p>
          <div className="ctaButtons">
            <button className="ctaPrimary large">
              <FaPlay className="btnIcon" />
              Book a Demo
            </button>
            <button className="ctaSecondary large">Start Free Trial</button>
          </div>
        </div>
      </section>

    </main>
  );
}
