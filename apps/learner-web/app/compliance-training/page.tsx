import "./compliance-training.css";
import { FaShieldAlt, FaClipboardCheck, FaIndustry, FaGamepad, FaChartBar, FaCertificate, FaBuilding, FaBrain, FaLock, FaBalanceScale, FaUserShield, FaGlobe, } from "react-icons/fa";

const centralizedPoints = [
  "Maintain consistent compliance training across all teams",
  "Deliver mandatory regulatory courses efficiently",
  "Monitor training completion and certification status",
  "Maintain proper documentation for audits and inspections",
];

const industryPoints = [
  "Workplace safety and health regulations",
  "Data privacy and cybersecurity compliance",
  "Corporate ethics and code of conduct training",
  "Anti-harassment and workplace conduct policies",
  "Financial and regulatory compliance training",
  "Environmental and sustainability compliance",
];

const interactivePoints = [
  "Scenario-based learning activities",
  "Interactive quizzes and assessments",
  "Case studies based on real-world situations",
  "Gamified learning elements for better engagement",
  "Knowledge checks and certification tests",
];

const scalablePoints = [
  "Corporate enterprises and large organizations",
  "Healthcare organizations and institutions",
  "Financial institutions and regulatory bodies",
  "Manufacturing industries and government agencies",
];

export default function ComplianceTrainingPage() {
  return (
    <main className="compliance-training-page page">

      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroContent">
            <h1 className="heroTitle">Compliance Training Modules</h1>

            <h2 className="heroSubtitle">
              Ensure Regulatory Compliance with Structured Digital Training
            </h2>

            <p className="heroText">
              Organizations today must comply with numerous industry
              regulations, safety standards, and legal requirements. NeuroLXP
              enables institutions and enterprises to deliver structured
              Compliance Training Modules that help employees and learners
              understand policies, follow regulatory guidelines, and maintain
              organizational standards.
            </p>

            <p className="heroText">
              Through a robust Learning Management System for compliance
              training, NeuroLXP ensures that compliance learning becomes
              systematic, measurable, and easy to manage across every
              department.
            </p>
          </div>

          <div className="heroVisualCard">
            <div className="imagePlaceholder">
              <img
                src="/photo-1450101499163-c8848c66ca85.jpeg"
                alt="Professionals reviewing compliance documents and regulations"
                className="heroImg"
              />
            </div>

            <div className="floatingStats">
              <div className="statPill">
                <FaShieldAlt className="iconText" />
                <span>Regulatory Compliance</span>
              </div>
              <div className="statPill">
                <FaClipboardCheck className="iconText" />
                <span>Audit Readiness</span>
              </div>
              <div className="statPill">
                <FaCertificate className="iconText" />
                <span>Digital Certification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cardsSection">

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaBuilding className="iconText" />
            </div>
            <h3>Centralized Compliance Training Management</h3>
          </div>

          <p>
            NeuroLXP allows organizations to manage all compliance training
            programs through a centralized digital learning platform.
            Administrators can design, assign, and track mandatory training
            modules across departments, ensuring that every learner completes
            required courses.
          </p>

          <div className="insetBox">
            <h4>This centralized approach helps organizations:</h4>
            <ul className="featureList">
              {centralizedPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            A single platform view keeps administrators in full control of
            compliance obligations at every level.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaIndustry className="iconText" />
            </div>
            <h3>Industry-Specific Compliance Training</h3>
          </div>

          <p>
            NeuroLXP supports a wide range of industry compliance training
            programs. Organizations can easily create training modules aligned
            with local regulations, global standards, and industry best
            practices for their specific sector.
          </p>

          <div className="insetBox">
            <h4>Supported compliance areas include:</h4>
            <ul className="featureList">
              {industryPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            Every module can be tailored to reflect the unique regulatory
            landscape of your organization.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaGamepad className="iconText" />
            </div>
            <h3>Interactive Compliance Learning Experiences</h3>
          </div>

          <p>
            Traditional compliance training often becomes monotonous and
            ineffective. NeuroLXP transforms compliance learning into engaging
            digital training experiences using modern interactive learning
            formats that improve comprehension and retention.
          </p>

          <div className="insetBox">
            <h4>Compliance modules can include:</h4>
            <ul className="featureList">
              {interactivePoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            These formats help learners better understand compliance
            requirements and apply them confidently in real workplace
            situations.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaGlobe className="iconText" />
            </div>
            <h3>Scalable Compliance Training for Every Organization</h3>
          </div>

          <p>
            NeuroLXP's compliance training capabilities support organizations
            of all sizes, ensuring that compliance learning can be scaled
            across thousands of learners while maintaining strict regulatory
            standards.
          </p>

          <div className="insetBox">
            <h4>The platform is purpose-built for:</h4>
            <ul className="featureList">
              {scalablePoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            No matter the scale, NeuroLXP delivers consistent, auditable
            compliance outcomes across the entire organization.
          </p>
        </article>

      </section>

      <section className="highlightSection">
        <div className="highlightGrid">

          <div className="highlightTextCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaBrain className="iconText" />
              </div>
              <h3>
                NeuroLXP — Simplifying Compliance Training Through Smart
                Digital Learning
              </h3>
            </div>

            <p>
              NeuroLXP's advanced analytics and reporting tools allow
              organizations to monitor compliance training progress in real
              time. Administrators can generate detailed reports on course
              completion rates, certification status, assessment performance,
              and department-level compliance metrics.
            </p>

            <p>
              Upon completion of compliance training modules, NeuroLXP
              automatically issues digital certificates and maintains training
              records — providing verifiable documentation for regulatory
              audits, internal reviews, and industry compliance checks.
            </p>

            <div className="miniFeatures">
              <div className="miniFeature">
                <FaChartBar className="iconText" />
                <span>Automated tracking &amp; reporting</span>
              </div>
              <div className="miniFeature">
                <FaCertificate className="iconText" />
                <span>Digital certification</span>
              </div>
              <div className="miniFeature">
                <FaLock className="iconText" />
                <span>Audit-ready records</span>
              </div>
            </div>
          </div>

          <div className="secondaryVisualCard">
            <div className="imagePlaceholderAlt">
              <img
                src="/photo-1573496359142-b8d87734a5a2.jpeg"
                alt="Professional receiving digital compliance certification"
                className="secondaryImg"
              />
            </div>

            <div className="badgePills">
              <div className="badgePill">
                <FaBalanceScale className="iconText" />
                <span>Regulatory standards</span>
              </div>
              <div className="badgePill">
                <FaUserShield className="iconText" />
                <span>Culture of responsibility</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
