import "./security-features.css";
import { FaShieldAlt, FaLock, FaUserShield, FaCheckCircle, FaServer, FaBuilding, FaEye, FaKey, } from "react-icons/fa";

const rbacPoints = [
  "Protect sensitive data and course materials",
  "Control who can view, edit, or manage content",
  "Maintain clear access hierarchies across the platform",
];

const authPoints = [
  "Protect user accounts from unauthorized access",
  "Maintain secure access to courses and assessments",
  "Ensure safe login experiences for learners and administrators",
];

const compliancePoints = [
  "Transparent data management practices",
  "Accountability in handling user information",
  "Responsible data privacy governance",
  "Alignment with digital learning regulatory standards",
];

const monitoringPoints = [
  "Real-time threat detection and alerting",
  "Platform stability and uptime maintenance",
  "Consistent service availability for learners",
  "Proactive security management and incident response",
];

const institutionPoints = [
  "Universities and higher education institutions",
  "Schools and online education platforms",
  "Corporate training and enterprise learning programs",
  "Professional certification and training providers",
];

export default function SecurityFeaturesPage() {
  return (
    <main className="security-features-page page">

      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroContent">

            <h1 className="heroTitle">Security Features</h1>

            <h2 className="heroSubtitle">
              Secure, Reliable, and Trusted Learning Environment
            </h2>

            <p className="heroText">
              In today's digital learning ecosystem, protecting learner data,
              institutional content, and platform access is critical. NeuroLXP
              is built with robust security features that ensure a safe and
              reliable environment for institutions, educators, and learners.
            </p>

            <p className="heroText">
              As a modern secure Learning Management System (LMS), NeuroLXP
              integrates advanced security mechanisms to protect sensitive
              information, maintain data privacy, and ensure uninterrupted
              learning experiences.
            </p>
          </div>

          <div className="heroVisualCard">
            <div className="imagePlaceholder">
              <img
                src="/photo-1563986768609-322da13575f3.jpeg"
                alt="Digital security and data protection"
                className="heroImage"
              />
            </div>

            <div className="floatingStats">
              <div className="statPill">
                <FaLock className="iconText" />
                <span>Encrypted Data</span>
              </div>
              <div className="statPill">
                <FaUserShield className="iconText" />
                <span>Role-Based Access</span>
              </div>
              <div className="statPill">
                <FaShieldAlt className="iconText" />
                <span>Continuous Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cardsSection">

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaLock className="iconText" />
            </div>
            <h3>Advanced Data Protection</h3>
          </div>

          <p>
            NeuroLXP follows strong data security and privacy standards to
            safeguard all learning data stored on the platform. Sensitive
            information such as learner profiles, course content, and assessment
            records is protected through secure storage and encrypted
            communication protocols.
          </p>

          <div className="insetBox">
            <h4>What this means for your institution:</h4>
            <ul className="featureList">
              <li>
                <span className="listIcon">•</span>
                <span>End-to-end encrypted communication protocols</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Secure storage for learner profiles and records</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Confidentiality and integrity of institutional data</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Protected course content and assessment records</span>
              </li>
            </ul>
          </div>

          <p>
            Institutions can confidently manage their learning ecosystem while
            maintaining the highest data security standards.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaUserShield className="iconText" />
            </div>
            <h3>Role-Based Access Control</h3>
          </div>

          <p>
            To ensure controlled access to platform resources, NeuroLXP supports
            role-based access management. Different user roles — such as
            administrators, instructors, learners, and managers — are assigned
            specific permissions based on their responsibilities.
          </p>

          <div className="insetBox">
            <h4>This security structure helps organizations:</h4>
            <ul className="featureList">
              {rbacPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            Role-based access ensures that users interact only with the features
            and information relevant to their role.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaKey className="iconText" />
            </div>
            <h3>Secure User Authentication</h3>
          </div>

          <p>
            NeuroLXP incorporates secure authentication mechanisms to prevent
            unauthorized access. The platform supports secure login systems that
            verify user identity before granting access to the learning
            environment.
          </p>

          <div className="insetBox">
            <h4>Authentication features help institutions:</h4>
            <ul className="featureList">
              {authPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            Strong authentication is the first line of defence for every user on
            the platform.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaShieldAlt className="iconText" />
            </div>
            <h3>Content Protection and Intellectual Property Security</h3>
          </div>

          <p>
            Educational content represents valuable intellectual property for
            institutions and educators. NeuroLXP includes security measures that
            protect course materials, videos, documents, and digital resources
            from unauthorized distribution or misuse.
          </p>

          <div className="insetBox">
            <h4>Content security covers:</h4>
            <ul className="featureList">
              <li>
                <span className="listIcon">•</span>
                <span>Video and multimedia asset protection</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Document and resource access controls</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Prevention of unauthorized content distribution</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Accessible only to authorized learners and staff</span>
              </li>
            </ul>
          </div>

          <p>
            Learning content remains protected within the platform while still
            being easily accessible to authorized users.
          </p>
        </article>
      </section>

      <section className="midSection">
        <div className="midGrid">
          <article className="midCard midCard--primary">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaCheckCircle className="iconText" />
              </div>
              <h3>Compliance with Data Privacy Standards</h3>
            </div>

            <p>
              NeuroLXP is designed to align with widely accepted data privacy
              and security practices, helping institutions maintain regulatory
              compliance while managing digital learning programs.
            </p>

            <div className="insetBox">
              <h4>The platform supports:</h4>
              <ul className="featureList">
                {compliancePoints.map((item) => (
                  <li key={item}>
                    <span className="listIcon">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="midCard midCard--secondary">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaEye className="iconText" />
              </div>
              <h3>Continuous Monitoring and System Reliability</h3>
            </div>

            <p>
              To maintain a secure digital learning environment, NeuroLXP
              incorporates continuous system monitoring and security management
              practices. These safeguards help detect potential threats, maintain
              platform stability, and ensure consistent service availability.
            </p>

            <div className="insetBox">
              <h4>Monitoring safeguards include:</h4>
              <ul className="featureList">
                {monitoringPoints.map((item) => (
                  <li key={item}>
                    <span className="listIcon">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="institutionSection">
        <div className="institutionGrid">
          <div className="institutionVisualCard">
            <div className="imagePlaceholderAlt">
              <img
                src="/photo-1497366216548-37526070297c.jpeg"
                alt="Institutions and organizations using secure LMS"
                className="heroImage"
              />
            </div>
          </div>

          <article className="contentCard institutionCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaBuilding className="iconText" />
              </div>
              <h3>A Secure LMS for Institutions and Organizations</h3>
            </div>

            <p>
              NeuroLXP's security framework is designed to support the needs of
              diverse learning environments, ensuring all organizations can scale
              their digital learning initiatives with confidence.
            </p>

            <div className="insetBox">
              <h4>Trusted by:</h4>
              <ul className="featureList">
                {institutionPoints.map((item) => (
                  <li key={item}>
                    <span className="listIcon">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              The platform ensures that organizations can scale their digital
              learning initiatives while maintaining strong security and data
              protection standards.
            </p>
          </article>
        </div>
      </section>

      <section className="highlightSection">
        <div className="highlightGrid">
          <div className="highlightTextCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaServer className="iconText" />
              </div>
              <h3>NeuroLXP — Secure Learning for the Digital Age</h3>
            </div>

            <p>
              With advanced security features, protected data management, and
              controlled user access, NeuroLXP provides a safe and trustworthy
              LMS platform that institutions can rely on to deliver secure
              digital learning experiences.
            </p>

            <div className="miniFeatures">
              <div className="miniFeature">
                <FaLock className="iconText" />
                <span>Encrypted Storage</span>
              </div>
              <div className="miniFeature">
                <FaUserShield className="iconText" />
                <span>Access Control</span>
              </div>
              <div className="miniFeature">
                <FaShieldAlt className="iconText" />
                <span>Privacy Compliant</span>
              </div>
            </div>
          </div>

          <div className="secondaryVisualCard">
            <div className="imagePlaceholderAlt">
              <img
                src="/photo-1614064641938-3bbee52942c7.jpeg"
                alt="Secure digital infrastructure and trust"
                className="heroImage"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
