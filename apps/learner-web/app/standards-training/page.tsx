import "./standards-training.css";
import { FaGraduationCap, FaChalkboardTeacher, FaBullseye, FaClipboardCheck, FaCertificate, FaUsers, FaUniversity, FaChartLine, FaBriefcase, FaLightbulb,
  FaAward, FaLayerGroup, } from "react-icons/fa";

const whyMattersPoints = [
  "Align curriculum with accreditation and industry requirements",
  "Improve student performance and faculty development",
  "Ensure compliance with academic and regulatory frameworks",
];

const studentsPoints = [
  "High-quality structured learning",
  "Better career readiness",
  "Transparent evaluation and grading",
];

const universitiesPoints = [
  "Academic consistency across all departments",
  "Improved rankings and institutional reputation",
  "Easier and faster accreditation processes",
];

const facultyPoints = [
  "Improved teaching effectiveness and methodology",
  "Access to standardised resources and digital tools",
  "Better student engagement and feedback loops",
];

const institutesPoints = [
  "Industry-aligned training programs",
  "Scalable and repeatable training delivery",
  "Higher placement success rates",
];

const platformFeatures = [
  { icon: FaLayerGroup, label: "Standardised Curriculum" },
  { icon: FaChartLine, label: "OBE Analytics" },
  { icon: FaAward, label: "Accreditation Support" },
];

export default function StandardsTrainingPage() {
  return (
    <main className="standards-training-page page">
      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroContent">
            <h1 className="heroTitle">Standards Training</h1>

            <h2 className="heroSubtitle">
              Empowering Institutions with Industry-Ready Learning Standards
            </h2>

            <p className="heroText">
              Standards Training is designed to elevate the quality,
              consistency, and effectiveness of learning across universities,
              colleges, training institutes, and corporate environments. By
              aligning educational delivery with globally recognised standards,
              institutions can ensure better learning outcomes, improved
              employability, and scalable academic excellence.
            </p>

            <p className="heroText">
              Through structured frameworks and digital tools, LearnHub enables
              institutions to implement and sustain high-quality, standards-driven
              education that meets global benchmarks.
            </p>
          </div>

          <div className="heroVisualCard">
            <div className="imagePlaceholder">
              
              <img
                src="/photo-1524178232363-1fb2b075b655.jpeg"
                alt="Faculty and students in a structured learning environment"
                className="heroImg" />
            </div>

            <div className="floatingStats">
              <div className="statPill">
                <FaGraduationCap className="iconText" />
                <span>Outcome-Based Learning</span>
              </div>
              <div className="statPill">
                <FaCertificate className="iconText" />
                <span>Accreditation Ready</span>
              </div>
              <div className="statPill">
                <FaChalkboardTeacher className="iconText" />
                <span>Faculty Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cardsSection">
        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaLightbulb className="iconText" />
            </div>
            <h3>Why Standards Training Matters</h3>
          </div>

          <p>
            Consistent quality across courses and faculty is essential for institutional success. A structured standards framework helps institutions:
          </p>

          <div className="insetBox">
            <h4>Standards Training helps institutions:</h4>
            <ul className="featureList">
              {whyMattersPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>A well-structured standards framework is the foundation of
            institutional excellence and learner success.</p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaLayerGroup className="iconText" />
            </div>
            <h3>Standardised Curriculum Framework</h3>
          </div>

          <p>
            Design and implement structured, outcome-based curricula that align
            with global education standards. A cohesive curriculum framework
            ensures every course, module, and assessment meets defined quality
            benchmarks.
          </p>

          <div className="imageMidCard">
           
            <img
              src="/photo-1434030216411-0b793f4b4173.jpeg"
              alt="Curriculum framework planning with structured modules"
              className="midCardImg" />
          </div>

          <p>
            Outcome-based design connects each learning activity to measurable
            competencies, making programmes easier to evaluate and improve.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaChalkboardTeacher className="iconText" />
            </div>
            <h3>Faculty Training &amp; Development</h3>
          </div>

          <p>
            Equip educators with modern teaching strategies, digital tools, and
            assessment techniques that align with evolving academic standards and
            student expectations.
          </p>

          <div className="insetBox">
            <h4>Faculty development programmes include:</h4>
            <ul className="featureList">
              {facultyPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            Empowered educators are the cornerstone of any successful
            standards-driven institution.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaClipboardCheck className="iconText" />
            </div>
            <h3>Assessment, Evaluation &amp; Accreditation</h3>
          </div>

          <p>
            Create consistent evaluation models with automated grading and
            analytics. Simplify accreditation processes with structured
            reporting and documentation that meet regulatory frameworks.
          </p>

          <div className="imageMidCard">
            <img
              src="/photo-1551288049-bebda4e38f71.jpeg"
              alt="Assessment analytics dashboard for accreditation"
              className="midCardImg" />
          </div>

          <p>
            Automated reporting reduces administrative burden, letting educators
            focus on teaching while staying fully compliant.
          </p>
        </article>
      </section>

      <section className="benefitsSection">
        <div className="benefitsHeader">
          <h2 className="sectionTitle">Benefits for Stakeholders</h2>
          <p className="sectionSubtitle">
            Standards Training delivers measurable value across every role in
            the educational ecosystem.
          </p>
        </div>

        <div className="benefitsGrid">
          <div className="benefitCard">
            <div className="benefitIconWrap">
              <FaUsers className="iconText" />
            </div>
            <h4>For Students</h4>
            <ul className="benefitList">
              {studentsPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="benefitCard">
            <div className="benefitIconWrap">
              <FaUniversity className="iconText" />
            </div>
            <h4>For Universities &amp; Colleges</h4>
            <ul className="benefitList">
              {universitiesPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="benefitCard">
            <div className="benefitIconWrap">
              <FaChalkboardTeacher className="iconText" />
            </div>
            <h4>For Faculty &amp; Trainers</h4>
            <ul className="benefitList">
              {facultyPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="benefitCard">
            <div className="benefitIconWrap">
              <FaBriefcase className="iconText" />
            </div>
            <h4>For Training Institutes</h4>
            <ul className="benefitList">
              {institutesPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="highlightSection">
        <div className="highlightGrid">
          <div className="highlightTextCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaBullseye className="iconText" />
              </div>
              <h3>LearnHub — Transform Your Learning Ecosystem</h3>
            </div>

            <p>
              Adopt Standards Training to build a future-ready learning
              environment that meets global benchmarks. LearnHub delivers
              structured, high-quality training programmes supported by powerful
              digital tools and outcome-based analytics.
            </p>

            <p>
              Start implementing structured, high-quality training today and
              position your institution at the forefront of academic excellence
              and industry relevance.
            </p>

            <div className="miniFeatures">
              {platformFeatures.map(({ icon: Icon, label }) => (
                <div className="miniFeature" key={label}>
                  <Icon className="iconText" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="secondaryVisualCard">
            <div className="imagePlaceholderAlt">
              <img
                src="/photo-1521737604893-d14cc237f11d.jpeg"
                alt="Graduates representing the outcome of quality standards training"
                className="highlightImg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
