import "./assessments.css";
import { FaBrain, FaListAlt, FaPuzzlePiece, FaPhotoVideo, FaProjectDiagram, FaUsers, FaRobot, FaUniversity, FaCheckCircle, FaBolt, FaLayerGroup, FaStar, } from "react-icons/fa";

const whyPoints = [
  "Interactive and engaging for all learner types",
  "Aligned with learning outcomes and course objectives",
  "Suitable for online education and remote learning",
  "Scalable for universities, schools, and corporate programs",
  "Optimised for exam preparation and skill development",
];

const popularFormats = [
  "Multiple Choice Questions (MCQs)",
  "True or False",
  "Fill in the Blanks",
  "One-Word Answers",
  "Short Answer Questions",
  "Long Descriptive Answers",
];

const interactiveFormats = [
  "Drag and Drop",
  "Match the Following",
  "Sequencing and Ordering",
  "Connect the Dots",
  "Clickable Hotspots",
  "Puzzle-Based Questions",
  "Memory Games",
  "Interactive Diagram Identification",
];

const multimediaFormats = [
  "Image-Based Questions",
  "Audio-Based Assessments",
  "Video-Based Questions",
  "Visual Concept Identification",
];

const realWorldFormats = [
  "Case Study Evaluations",
  "Scenario-Based Assessments",
  "Project-Based Submissions",
  "Assignment Evaluations",
  "Reflection-Based Assessments",
];

const collaborativeFormats = [
  "Peer Assessments",
  "Self-Assessments",
  "Discussion-Based Evaluations",
  "Continuous Learning Quizzes",
  "Timed Quiz Challenges",
];

const aiCapabilities = [
  "Generate exam-style questions from study materials",
  "Create practice quizzes from uploaded content",
  "Recommend questions based on historical exam patterns",
  "Support adaptive testing based on learner performance",
];

const idealFor = [
  "Universities and higher education institutions",
  "Schools and online education platforms",
  "Corporate learning and development programs",
  "EdTech companies and online course providers",
  "Professional certification programs",
];

const formatGroups = [
  {
    icon: <FaListAlt className="iconText" />,
    title: "Popular Quiz Formats",
    items: popularFormats,
    colorVar: "primary",
  },
  {
    icon: <FaPuzzlePiece className="iconText" />,
    title: "Interactive Assessment Types",
    items: interactiveFormats,
    colorVar: "secondary",
  },
  {
    icon: <FaPhotoVideo className="iconText" />,
    title: "Multimedia-Based Assessments",
    items: multimediaFormats,
    colorVar: "accent",
  },
  {
    icon: <FaProjectDiagram className="iconText" />,
    title: "Real-World Application",
    items: realWorldFormats,
    colorVar: "support",
  },
];

export default function AssessmentsPage() {
  return (
    <main className="assessments-page page">

      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroContent">

            <h1 className="heroTitle">Online Assessments</h1>

            <h2 className="heroSubtitle">
              60+ Assessment Types in a Powerful AI-Driven LMS
            </h2>

            <p className="heroText">
              Assessments are a critical part of effective digital learning.
              NeuroLXP, a next-generation AI-powered LMS, offers 60+ online
              assessment formats designed to evaluate knowledge, measure skills,
              and improve learner engagement.
            </p>

            <p className="heroText">
              Unlike traditional platforms that offer only a few basic test
              formats, NeuroLXP provides a comprehensive assessment ecosystem
              supporting interactive quizzes, skill-based evaluations, exam
              preparation, and continuous learning assessments.
            </p>
          </div>

          <div className="heroVisualCard">
            <div className="imagePlaceholder">
            
              <img
                src="/photo-1606326608606-aa0b62935f2b.jpeg"
                alt="Digital online assessment platform with quiz interface on screen"
                className="heroImage"
              />
            </div>

            <div className="floatingStats">
              <div className="statPill">
                <FaLayerGroup className="iconText" />
                <span>60+ Assessment Formats</span>
              </div>
              <div className="statPill">
                <FaRobot className="iconText" />
                <span>AI-Powered Intelligence</span>
              </div>
              <div className="statPill">
                <FaBolt className="iconText" />
                <span>Adaptive Testing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cardsSection">

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaCheckCircle className="iconText" />
            </div>
            <h3>Why Modern LMS Assessments Matter</h3>
          </div>

          <p>
            Today's learners require more than simple tests. Effective online
            learning platforms must support interactive, gamified, and adaptive
            assessments that evaluate not just memorisation but also critical
            thinking, application of knowledge, and real-world problem solving.
          </p>

          <div className="insetBox">
            <h4>NeuroLXP delivers assessments that are:</h4>
            <ul className="featureList">
              {whyPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaUsers className="iconText" />
            </div>
            <h3>Collaborative &amp; Continuous Learning Assessments</h3>
          </div>

          <p>
            NeuroLXP supports modern educational assessment strategies that
            encourage active participation, self-reflection, and collaborative
            learning — going far beyond traditional, one-dimensional testing.
          </p>

          <div className="insetBox">
            <h4>Formats include:</h4>
            <ul className="featureList">
              {collaborativeFormats.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            These formats encourage active participation and strengthen
            collaborative learning across all environments.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaRobot className="iconText" />
            </div>
            <h3>AI-Powered Assessment Intelligence</h3>
          </div>

          <p>
            NeuroLXP goes beyond basic LMS testing by integrating AI-driven
            assessment capabilities that personalise and elevate the evaluation
            experience for every learner.
          </p>

          <div className="insetBox">
            <h4>The platform can:</h4>
            <ul className="featureList">
              {aiCapabilities.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            This makes NeuroLXP one of the most advanced AI-powered LMS
            platforms for assessments available today.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaUniversity className="iconText" />
            </div>
            <h3>Perfect for Schools, Universities &amp; Corporate Training</h3>
          </div>

          <p>
            NeuroLXP is designed for organisations that want to build modern
            digital learning environments. The platform supports online exams,
            skill evaluation, training assessments, and certification testing.
          </p>

          <div className="insetBox">
            <h4>Ideal for:</h4>
            <ul className="featureList">
              {idealFor.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className="formatsSection">
        <div className="formatsSectionHeader">
          <h2 className="sectionTitle">Explore Every Assessment Type</h2>
          <p className="sectionDesc">
            NeuroLXP supports more than 60 LMS assessment types, enabling
            instructors to create flexible and engaging evaluation experiences
            across every learning context.
          </p>
        </div>

        <div className="formatsGrid">
          {formatGroups.map((group, i) => (
            <article key={i} className={`formatCard formatCard--${group.colorVar}`}>
              <div className="cardHeader">
                <div className="iconWrap">{group.icon}</div>
                <h3>{group.title}</h3>
              </div>
              <ul className="featureList">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="listIcon">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="highlightSection">
        <div className="highlightGrid">
          <div className="highlightTextCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaBrain className="iconText" />
              </div>
              <h3>NeuroLXP — A Smarter LMS for Digital Learning</h3>
            </div>

            <p>
              Traditional LMS platforms often limit educators to only a few
              question types. NeuroLXP changes that with 60+ assessment formats,
              enabling institutions to create interactive, engaging, and
              meaningful online evaluations.
            </p>

            <p>
              With advanced technology, interactive formats, and AI-powered
              intelligence, NeuroLXP ensures assessments become an essential
              part of effective digital learning and learner success.
            </p>

            <div className="miniFeatures">
              <div className="miniFeature">
                <FaListAlt className="iconText" />
                <span>60+ Question Types</span>
              </div>
              <div className="miniFeature">
                <FaRobot className="iconText" />
                <span>AI Question Generation</span>
              </div>
              <div className="miniFeature">
                <FaStar className="iconText" />
                <span>Adaptive Testing</span>
              </div>
            </div>
          </div>

          <div className="secondaryVisualCard">
            <div className="imagePlaceholderAlt">

              <img
                src="/photo-1581091226825-a6a2a5aee158.jpeg"
                alt="AI-powered adaptive assessment technology evaluating student performance"
                className="heroImage"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
