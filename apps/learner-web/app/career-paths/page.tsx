import "./career-paths.css";
import { FaMapSigns, FaBriefcase, FaRobot, FaRoute, FaHandshake, FaChalkboardTeacher, FaBrain, FaLayerGroup, FaTrophy, FaStar, FaChartLine, FaUserGraduate, } from "react-icons/fa";

const personalizedPathPoints = [
  "Identify required skills for a target career path",
  "Follow guided learning tracks designed by educators and industry experts",
  "Monitor their progress toward career readiness",
  "Gain clarity on the competencies they need to develop",
];

const skillBasedPoints = [
  "Foundational knowledge modules",
  "Advanced skill development courses",
  "Practice-based assessments",
  "Real-world projects and case studies",
  "Industry-relevant certifications",
];

const aiGuidedPoints = [
  "Relevant courses and training modules",
  "Skill areas that need improvement",
  "New learning opportunities aligned with career goals",
  "Certifications that strengthen professional profiles",
];

const progressTrackingPoints = [
  "Skill development progress at a glance",
  "Completion of career pathway milestones",
  "Assessment performance and trends",
  "Certification achievements",
  "Readiness for industry roles",
];

export default function CareerPathsPage() {
  return (
    <main className="career-paths-page page">

      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroContent">

            <h1 className="heroTitle">Career Pathways for Learners</h1>

            <h2 className="heroSubtitle">
              Guiding Learners from Education to Career Success
            </h2>

            <p className="heroText">
              Learning becomes truly meaningful when it leads to real-world
              opportunities. NeuroLXP empowers learners with structured Career
              Pathways, helping them clearly understand the skills, knowledge,
              and competencies required to achieve their career goals.
            </p>

            <p className="heroText">
              Through intelligent learning design and AI-driven guidance,
              NeuroLXP connects education with career outcomes, enabling
              learners to progress confidently from foundational knowledge to
              professional readiness.
            </p>
          </div>

          <div className="heroVisualCard">
            <div className="imagePlaceholder">
              <img
                src="/photo-1521737604893-d14cc237f11d.jpeg"
                alt="Learners planning career pathways together"
                className="heroImg"
              />
            </div>

            <div className="floatingStats">
              <div className="statPill">
                <FaMapSigns className="iconText" />
                <span>Structured Pathways</span>
              </div>
              <div className="statPill">
                <FaRobot className="iconText" />
                <span>AI-Guided Learning</span>
              </div>
              <div className="statPill">
                <FaTrophy className="iconText" />
                <span>Career Readiness</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cardsSection">

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaRoute className="iconText" />
            </div>
            <h3>Personalized Career Path Planning</h3>
          </div>

          <p>
            Every learner has unique goals, interests, and strengths. NeuroLXP
            enables institutions to design personalized career pathways that
            guide learners through the right sequence of courses, skills, and
            assessments required for their chosen career.
          </p>

          <div className="insetBox">
            <h4>Learners can explore structured journeys that allow them to:</h4>
            <ul className="featureList">
              {personalizedPathPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            This structured approach ensures that learning remains purposeful
            and aligned with future opportunities.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaLayerGroup className="iconText" />
            </div>
            <h3>Skill-Based Learning Pathways</h3>
          </div>

          <p>
            NeuroLXP supports skill-based career development, allowing
            institutions to map courses and training programs directly to the
            competencies required in real-world professions.
          </p>

          <div className="insetBox">
            <h4>Learners progressively build expertise through pathways that include:</h4>
            <ul className="featureList">
              {skillBasedPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            This helps learners develop the skills that employers are actively
            looking for in modern workplaces.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaRobot className="iconText" />
            </div>
            <h3>AI-Guided Career Recommendations</h3>
          </div>

          <p>
            With intelligent analytics and AI-powered insights, NeuroLXP
            recommends career paths and learning tracks based on learner
            performance, interests, and academic progress.
          </p>

          <div className="insetBox">
            <h4>The platform intelligently suggests:</h4>
            <ul className="featureList">
              {aiGuidedPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            This ensures learners receive continuous guidance and support
            throughout their entire learning journey.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaChartLine className="iconText" />
            </div>
            <h3>Progress Tracking for Career Readiness</h3>
          </div>

          <p>
            NeuroLXP allows learners and educators to monitor career pathway
            progress through visual dashboards and learning analytics, keeping
            everyone aligned and motivated.
          </p>

          <div className="insetBox">
            <h4>Institutions can track:</h4>
            <ul className="featureList">
              {progressTrackingPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            This transparency helps learners stay motivated while allowing
            educators to provide targeted guidance.
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
                NeuroLXP — Enabling Learning Pathways that Lead to Real Careers
              </h3>
            </div>

            <p>
              NeuroLXP helps institutions design learning experiences that
              prepare learners not only academically but also professionally. By
              connecting learning programs with career pathways, the platform
              helps learners transition smoothly from education to employment.
            </p>

            <p>
              For institutions, career pathway features help build
              outcome-driven education programs that align with industry needs.
              Educators can design structured journeys that ensure learners
              graduate with both knowledge and practical skills.
            </p>

            <div className="miniFeatures">
              <div className="miniFeature">
                <FaHandshake className="iconText" />
                <span>Bridges education &amp; employment</span>
              </div>
              <div className="miniFeature">
                <FaChalkboardTeacher className="iconText" />
                <span>Outcome-driven programs</span>
              </div>
              <div className="miniFeature">
                <FaUserGraduate className="iconText" />
                <span>Workforce readiness</span>
              </div>
            </div>
          </div>

          <div className="secondaryVisualCard">
            <div className="imagePlaceholderAlt">
              <img
                src="/photo-1434030216411-0b793f4b4173.jpeg"
                alt="Student achieving career success through structured learning"
                className="secondaryImg"
              />
            </div>

            <div className="badgePills">
              <div className="badgePill">
                <FaStar className="iconText" />
                <span>Industry-aligned skills</span>
              </div>
              <div className="badgePill">
                <FaBriefcase className="iconText" />
                <span>Professional growth</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
