import "./skilling-courses.css";
import { FaTools, FaIndustry, FaSitemap, FaClock, FaLaptopCode, FaChartLine, FaUniversity, FaBrain, FaRocket, FaMedal, FaLayerGroup, FaUserCog, } from "react-icons/fa";

const industryAlignedPoints = [
  "Develop job-ready technical and professional skills",
  "Apply theoretical knowledge through practice-based learning",
  "Gain expertise aligned with current industry demands",
  "Prepare for professional certifications and career opportunities",
];

const structuredPathwayPoints = [
  "Core skill development modules",
  "Practical exercises and real-world case studies",
  "Interactive learning activities and simulations",
  "Assessments that measure skill mastery",
  "Capstone projects and practical evaluations",
];

const flexibleLearningPoints = [
  "Self-paced access to all training materials and activities",
  "Flexible scheduling to balance learning with commitments",
  "Continuous skill practice without time pressure",
  "Lifelong learning and professional development support",
];

const idealForPoints = [
  "Universities and higher education institutions",
  "Professional training organizations",
  "Corporate learning and development programs",
  "Online education platforms and EdTech providers",
];

export default function SkillingCoursesPage() {
  return (
    <main className="skilling-courses-page page">

      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroContent">

            <h1 className="heroTitle">Skilling Courses for Future-Ready Learners</h1>

            <h2 className="heroSubtitle">
              Build Skills That Matter in the Real World
            </h2>

            <p className="heroText">
              In today's rapidly evolving job market, learning must go beyond
              theory. NeuroLXP enables institutions and organizations to deliver
              skill-focused courses that help learners develop practical
              knowledge, industry-relevant competencies, and career-ready
              abilities.
            </p>

            <p className="heroText">
              Through structured skilling courses and competency-based learning
              programs, NeuroLXP helps learners gain the expertise required to
              succeed in modern careers and thrive in a competitive global
              economy.
            </p>
          </div>

          <div className="heroVisualCard">
            <div className="imagePlaceholder">
              <img
                src="/photo-1516321318423-f06f85e504b3.jpeg"
                alt="Learners developing practical skills through hands-on training"
                className="heroImg"
              />
            </div>

            <div className="floatingStats">
              <div className="statPill">
                <FaTools className="iconText" />
                <span>Practical Skill Building</span>
              </div>
              <div className="statPill">
                <FaIndustry className="iconText" />
                <span>Industry-Aligned Courses</span>
              </div>
              <div className="statPill">
                <FaMedal className="iconText" />
                <span>Career-Ready Outcomes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cardsSection">

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaIndustry className="iconText" />
            </div>
            <h3>Industry-Aligned Skill Development</h3>
          </div>

          <p>
            NeuroLXP supports the creation and delivery of industry-relevant
            skilling programs that prepare learners for real-world challenges.
            Institutions and training providers can design courses that focus on
            both foundational knowledge and practical application.
          </p>

          <div className="insetBox">
            <h4>These courses help learners:</h4>
            <ul className="featureList">
              {industryAlignedPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            By focusing on skills that employers value, NeuroLXP ensures that
            learning outcomes translate into real professional growth.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaSitemap className="iconText" />
            </div>
            <h3>Structured Skill-Based Learning Programs</h3>
          </div>

          <p>
            NeuroLXP allows educators to design structured skilling pathways
            that guide learners from beginner-level knowledge all the way to
            advanced competency — step by step and skill by skill.
          </p>

          <div className="insetBox">
            <h4>These learning journeys may include:</h4>
            <ul className="featureList">
              {structuredPathwayPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            This structured approach ensures learners continuously strengthen
            their capabilities at every stage of their journey.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaClock className="iconText" />
            </div>
            <h3>Flexible Learning for Continuous Skill Development</h3>
          </div>

          <p>
            Skilling courses in NeuroLXP are designed to support flexible,
            self-paced learning. Learners can access training materials,
            complete activities, and practice skills at their own pace — making
            it easier to balance learning with academic or professional
            commitments.
          </p>

          <div className="insetBox">
            <h4>Flexible learning enables:</h4>
            <ul className="featureList">
              {flexibleLearningPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            This flexibility promotes lifelong learning and continuous
            professional development across every stage of a career.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaUniversity className="iconText" />
            </div>
            <h3>Ideal for Universities, Institutes &amp; Corporate Learning</h3>
          </div>

          <p>
            NeuroLXP's skilling course capabilities are built for diverse
            learning environments. The platform supports large-scale skill
            development initiatives aimed at preparing learners for the demands
            of the modern workforce.
          </p>

          <div className="insetBox">
            <h4>Purpose-built for:</h4>
            <ul className="featureList">
              {idealForPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            Whether for hundreds or thousands of learners, NeuroLXP scales
            skilling programs without compromising quality.
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
                NeuroLXP — Empowering Skill Development for the Future Workforce
              </h3>
            </div>

            <p>
              To strengthen skill development, NeuroLXP integrates interactive
              learning formats — including simulations, scenario-based exercises,
              gamified activities, and hands-on assessments. These experiences
              help learners practice skills in realistic situations, improving
              both understanding and confidence.
            </p>

            <p>
              NeuroLXP also provides analytics and reporting tools that allow
              institutions and educators to track skill acquisition and learner
              progress over time, identifying areas that need additional support
              and celebrating competency milestones.
            </p>

            <div className="miniFeatures">
              <div className="miniFeature">
                <FaLaptopCode className="iconText" />
                <span>Interactive simulations</span>
              </div>
              <div className="miniFeature">
                <FaChartLine className="iconText" />
                <span>Competency tracking</span>
              </div>
              <div className="miniFeature">
                <FaRocket className="iconText" />
                <span>Career-ready outcomes</span>
              </div>
            </div>
          </div>

          <div className="secondaryVisualCard">
            <div className="imagePlaceholderAlt">
              <img
                src="/photo-1531482615713-2afd69097998.jpeg"
                alt="Professionals collaborating on skill development and training"
                className="secondaryImg"
              />
            </div>

            <div className="badgePills">
              <div className="badgePill">
                <FaLayerGroup className="iconText" />
                <span>Competency-based learning</span>
              </div>
              <div className="badgePill">
                <FaUserCog className="iconText" />
                <span>Workforce readiness</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
