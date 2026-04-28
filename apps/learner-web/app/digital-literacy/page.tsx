import "./digital-literacy.css";
import {
  FaLaptopCode,
  FaRobot,
  FaChartLine,
  FaMobileAlt,
  FaBriefcase,
  FaWifi,
  FaUserGraduate,
  FaCogs,
  FaPlay,
  FaArrowRight,
  FaTachometerAlt,
  FaLayerGroup,
  FaSyncAlt,
  FaStar,
} from "react-icons/fa";
import Image from "next/image";

const coreFeatures = [
  {
    icon: FaLaptopCode,
    title: "Digital Skills Training",
    color: "primary",
    body: "Enable employees with core digital literacy skills—from basic tools to advanced workplace technologies.",
    image: {
      src: "/photo-1558655146-9f40138edfeb.webp",
      alt: "Employee working on a laptop learning digital skills",
    },
  },
  {
    icon: FaRobot,
    title: "AI-Personalized Learning Paths",
    color: "secondary",
    body: "Deliver customized digital learning journeys based on skill levels, roles, and learning behavior.",
    image: {
      src: "/photo-1677442136019-21780ecad995.jpeg",
      alt: "AI-powered personalized learning interface",
    },
  },
  {
    icon: FaChartLine,
    title: "Progress & Skill Tracking",
    color: "accent",
    body: "Track digital competency levels, course completion, and workforce readiness in real time.",
    image: {
      src: "/photo-1551288049-bebda4e38f71.jpeg",
      alt: "Dashboard displaying skill progress and analytics",
    },
  },
  {
    icon: FaMobileAlt,
    title: "Anytime, Anywhere Learning",
    color: "support",
    body: "Support remote learning and mobile-friendly access for continuous digital upskilling.",
    image: {
      src: "/photo-1512941937669-90a1b58e7e9c.webp",
      alt: "Person learning on a mobile device from anywhere",
    },
  },
];

const keyBenefits = [
  "Faster adoption of digital tools",
  "Improved employee productivity",
  "Scalable digital training programs",
  "Continuous upskilling & reskilling",
];

const useCases = [
  { icon: FaBriefcase,    label: "Workplace Digital Skills Training", color: "primary"   },
  { icon: FaWifi,         label: "Remote Workforce Enablement",       color: "secondary" },
  { icon: FaUserGraduate, label: "Digital Onboarding Programs",       color: "accent"    },
  { icon: FaCogs,         label: "Technology Adoption Training",      color: "support"   },
];

const howItWorks = [
  "Assess digital skill levels",
  "Assign personalized learning paths",
  "Deliver interactive digital training content",
  "Monitor progress and optimize learning",
];

const miniFeatures = [
  { icon: FaTachometerAlt, label: "Faster tool adoption",       color: "primary"   },
  { icon: FaLayerGroup,    label: "Scalable training programs",  color: "secondary" },
  { icon: FaSyncAlt,       label: "Continuous upskilling",       color: "accent"    },
];

export default function DigitalLiteracyPage() {
  return (
    <main className="digital-literacy-page page">

      {/* ─── HERO ─── */}
      <section className="heroSection">
        <div className="heroGrid">

          <div className="heroContent">
            <div className="eyebrow">NeuroLXP</div>

            <h1 className="heroTitle">
              Build Digital Literacy with NeuroLXP
            </h1>

            <h2 className="heroSubtitle">
              Empower your workforce with essential digital skills training
            </h2>

            <p className="heroText">
              <strong>NeuroLXP</strong> is the AI-powered{" "}
              <strong>Learning Experience Platform</strong> for modern
              organizations. Equip every employee with the digital competencies
              they need—from foundational tools to advanced workplace
              technologies—through engaging, personalized learning experiences.
            </p>

            <p className="heroText">
              With <strong>NeuroLXP</strong>, organizations can accelerate{" "}
              <strong>digital transformation</strong> by building strong{" "}
              <strong>digital literacy programs</strong>. From onboarding to
              advanced skills, create a future-ready workforce with scalable,
              engaging learning experiences.
            </p>

            <div className="heroCtas">
              <button className="ctaPrimary">
                <FaPlay className="btnIcon" />
                Start Learning
              </button>
              <button className="ctaSecondary">Request Demo</button>
            </div>
          </div>

          <div className="heroVisualCard">
            <div className="heroImageWrap">
              <Image
                src="/photo-1498050108023-c5249f4df085.webp"
                alt="Modern workspace with laptop and digital tools representing digital literacy"
                width={720}
                height={420}
                className="heroImg"
                priority
              />
              <div className="heroImgOverlay" />
            </div>

            <div className="floatingStats">
              <div className="statPill">
                <FaLaptopCode className="iconText" />
                <span>Core Digital Skills</span>
              </div>
              <div className="statPill">
                <FaRobot className="iconText" />
                <span>AI-Personalized Paths</span>
              </div>
              <div className="statPill">
                <FaChartLine className="iconText" />
                <span>Real-Time Tracking</span>
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
                <FaStar className="iconText" />
              </div>
              <h3>Close the Digital Skills Gap Faster</h3>
            </div>

            <p>
              With <strong>NeuroLXP</strong>, organizations can accelerate
              digital transformation by building strong{" "}
              <strong>digital literacy programs</strong> that scale across
              every role and department.
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

            <div className="miniFeatures">
              {miniFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div className={`miniFeature color-${f.color}`} key={f.label}>
                    <Icon className="iconText" />
                    <span>{f.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="secondaryVisualCard">
            <div className="imagePlaceholderAlt">
              <Image
                src="/photo-1531482615713-2afd69097998.webp"
                alt="Team participating in a digital upskilling workshop"
                width={520}
                height={320}
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
                <FaBriefcase className="iconText" />
              </div>
              <h3>Use Cases</h3>
            </div>
            <div className="useCaseGrid">
              {useCases.map((uc) => {
                const Icon = uc.icon;
                return (
                  <div
                    className={`useCasePill color-${uc.color}`}
                    key={uc.label}
                  >
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
            Ready to build a digitally skilled workforce?
          </h2>
          <p className="ctaBody">
            Transform your organization with{" "}
            <strong>NeuroLXP digital literacy solutions</strong>.
          </p>
          <div className="ctaButtons">
            <button className="ctaPrimary large">
              <FaPlay className="btnIcon" />
              Book a Demo
            </button>
            <button className="ctaSecondary large">Get Started</button>
          </div>
        </div>
      </section>

    </main>
  );
}
