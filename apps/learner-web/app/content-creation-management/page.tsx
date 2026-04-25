import "./content-creation-management.css";
import { FaPencilAlt, FaRobot, FaDatabase, FaLayerGroup, FaSyncAlt, FaExpandArrowsAlt, FaVideo, FaPuzzlePiece, FaGamepad,
  FaClipboardList, FaFilePdf,  FaSortAmountUp, FaCodeBranch, FaBook, FaBolt, FaUsers, FaUniversity, FaBuilding, FaGraduationCap, FaBrain,
  FaChartLine, } from "react-icons/fa";

const richContentItems = [
  { icon: <FaVideo />, label: "Interactive learning modules" },
  { icon: <FaPuzzlePiece />, label: "Multimedia lessons (video, audio, images)" },
  { icon: <FaGamepad />, label: "Gamified learning activities" },
  { icon: <FaClipboardList />, label: "Assessments and quizzes integrated within lessons" },
  { icon: <FaBolt />, label: "Clickable and interactive content elements" },
  { icon: <FaBook />, label: "Scenario-based learning exercises" },
];

const aiCapabilities = [
  "Convert detailed study materials into concise summaries",
  "Generate exam-oriented content and practice questions",
  "Extract key insights from videos and documents",
  "Create discussion topics from learning materials",
  "Develop structured learning modules from uploaded resources",
];

const cmsCapabilities = [
  "Upload and manage videos, PDFs, presentations, and multimedia content",
  "Categorize learning resources by course, subject, or skill level",
  "Update content easily without disrupting ongoing learning programs",
  "Maintain version control for course materials",
  "Ensure consistent content delivery across departments",
];

const contentFormats = [
  { icon: <FaBook />, label: "Detailed lessons & structured notes" },
  { icon: <FaPuzzlePiece />, label: "Interactive learning activities" },
  { icon: <FaBolt />, label: "Microlearning modules" },
  { icon: <FaLayerGroup />, label: "Visual learning components" },
  { icon: <FaClipboardList />, label: "Practice-based learning exercises" },
];

const idealFor = [
  { icon: <FaUniversity />, label: "Universities & higher education" },
  { icon: <FaGraduationCap />, label: "Schools & digital learning platforms" },
  { icon: <FaBuilding />, label: "Corporate learning & development teams" },
  { icon: <FaUsers />, label: "Professional training organizations" },
  { icon: <FaBrain />, label: "EdTech companies & online course providers" },
];

export default function ContentCreationManagementPage() {
  return (
    <main className="ccm-page page">

      <section className="ccm-heroSection">
        <div className="ccm-heroGrid">
          <div className="ccm-heroContent">
  
            <h1 className="ccm-heroTitle">Content Creation &amp; Management</h1>
            <h2 className="ccm-heroSubtitle">
              Build, Organize, and Deliver High-Quality Learning Content with Ease
            </h2>
            <p className="ccm-heroText">
              Creating effective learning experiences requires more than just uploading documents or
              videos. NeuroLXP provides a powerful Content Creation and Management system that
              enables institutions, educators, and training teams to design, organize, and deliver
              engaging digital learning content efficiently.
            </p>
            <p className="ccm-heroText">
              As an AI-powered Learning Management System (LMS), NeuroLXP simplifies the entire
              content lifecycle—from creation and curation to management and continuous improvement.
            </p>
          </div>

          <div className="ccm-heroVisualCard">
            <div className="ccm-imagePlaceholder">
              <img
                src="/photo-1516321318423-f06f85e504b3.jpeg"
                alt="Content Creation and Management"
                className="ccm-heroImg"
              />
            </div>
            <div className="ccm-floatingStats">
              <div className="ccm-statPill">
                <FaPencilAlt className="ccm-iconText" />
                <span>Rich Content Tools</span>
              </div>
              <div className="ccm-statPill">
                <FaRobot className="ccm-iconText" />
                <span>AI-Assisted Development</span>
              </div>
              <div className="ccm-statPill">
                <FaDatabase className="ccm-iconText" />
                <span>Centralized CMS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ccm-cardsSection">

        <article className="ccm-contentCard">
          <div className="ccm-cardHeader">
            <div className="ccm-iconWrap">
              <FaPencilAlt className="ccm-iconText" />
            </div>
            <h3>Create Rich and Engaging Learning Content</h3>
          </div>
          <p>
            NeuroLXP enables educators and instructional designers to develop interactive and
            multimedia-rich learning modules that go far beyond static learning materials.
          </p>
          <div className="ccm-insetBox">
            <h4>Content creators can build learning experiences using:</h4>
            <ul className="ccm-iconList">
              {richContentItems.map((item, i) => (
                <li key={i} className="ccm-iconListItem">
                  <span className="ccm-listIcon">{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <p>
            This ensures that learners interact with the material actively, improving engagement and
            knowledge retention.
          </p>
        </article>

        <article className="ccm-contentCard">
          <div className="ccm-cardHeader">
            <div className="ccm-iconWrap">
              <FaRobot className="ccm-iconText" />
            </div>
            <h3>AI-Assisted Content Development</h3>
          </div>
          <p>
            NeuroLXP integrates AI-powered content tools that help transform existing learning
            materials into structured and engaging educational resources.
          </p>
          <div className="ccm-insetBox">
            <h4>Using AI capabilities, educators can:</h4>
            <ul className="ccm-featureList">
              {aiCapabilities.map((item) => (
                <li key={item}>
                  <span className="ccm-bullet">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p>
            This significantly reduces content preparation time while improving the quality and
            effectiveness of learning resources.
          </p>
        </article>

        <article className="ccm-contentCard">
          <div className="ccm-cardHeader">
            <div className="ccm-iconWrap">
              <FaDatabase className="ccm-iconText" />
            </div>
            <h3>Centralized Content Management System</h3>
          </div>
          <p>
            NeuroLXP provides a centralized content management system (CMS) that allows
            institutions to organize, update, and manage all learning resources in one place.
          </p>
          <div className="ccm-insetBox">
            <h4>Administrators and educators can:</h4>
            <ul className="ccm-featureList">
              {cmsCapabilities.map((item) => (
                <li key={item}>
                  <span className="ccm-bullet">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p>
            This centralized system makes it easier to maintain structured and scalable digital
            learning environments.
          </p>
        </article>

        <article className="ccm-contentCard">
          <div className="ccm-cardHeader">
            <div className="ccm-iconWrap">
              <FaLayerGroup className="ccm-iconText" />
            </div>
            <h3>Multi-Format Content Delivery</h3>
          </div>
          <p>
            Different learners prefer different formats. NeuroLXP supports multiple content
            formats, allowing institutions to deliver learning materials in ways that suit diverse
            learning preferences.
          </p>
          <div className="ccm-insetBox">
            <h4>Content can be presented as:</h4>
            <ul className="ccm-iconList">
              {contentFormats.map((item, i) => (
                <li key={i} className="ccm-iconListItem">
                  <span className="ccm-listIcon">{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <p>
            This flexibility ensures that learning remains accessible, engaging, and effective.
          </p>
        </article>
      </section>

      <section className="ccm-updatesBanner">
        <div className="ccm-updatesInner">
          <div className="ccm-updatesIcon">
            <FaSyncAlt />
          </div>
          <div className="ccm-updatesText">
            <h3>Efficient Content Updates &amp; Continuous Improvement</h3>
            <p>
              Educational content evolves constantly. NeuroLXP enables educators to update learning
              materials quickly and efficiently, ensuring that courses remain relevant and aligned with
              current knowledge and industry requirements. Analytics and learner feedback can also help
              instructors identify areas where content improvements are needed, supporting continuous
              learning enhancement.
            </p>
          </div>
          <div className="ccm-updatesVisual">
            <img
              src="/photo-1551288049-bebda4e38f71.jpeg"
              alt="Analytics and continuous improvement"
              className="ccm-updatesImg"
            />
          </div>
        </div>
      </section>

      <section className="ccm-highlightSection">
        <div className="ccm-highlightGrid">
          <div className="ccm-highlightTextCard">
            <div className="ccm-cardHeader">
              <div className="ccm-iconWrap">
                <FaExpandArrowsAlt className="ccm-iconText" />
              </div>
              <h3>Scalable Content Management for Institutions</h3>
            </div>
            <p>
              NeuroLXP's content creation and management tools are designed for organizations that
              manage large volumes of learning materials. This scalability ensures that institutions
              can manage thousands of courses and learning resources without complexity.
            </p>
            <h4 className="ccm-idealLabel">The platform is ideal for:</h4>
            <div className="ccm-idealGrid">
              {idealFor.map((item, i) => (
                <div key={i} className="ccm-idealPill">
                  <span className="ccm-idealIcon">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ccm-secondaryVisualCard">
            <div className="ccm-imagePlaceholderAlt">
              <img
                src="/photo-1524178232363-1fb2b075b655.jpeg"
                alt="Scalable learning institution"
                className="ccm-heroImg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ccm-footerCta">
        <div className="ccm-footerCtaInner">
          <div className="ccm-iconWrap ccm-ctaIcon">
            <FaBrain className="ccm-iconText" />
          </div>
          <h3>NeuroLXP — Powering Smarter Content Creation and Learning Management</h3>
          <p>
            With advanced content creation tools, AI-assisted development, and centralized content
            management, NeuroLXP enables institutions to deliver high-quality digital learning
            experiences that engage learners and improve learning outcomes.
          </p>
          <div className="ccm-ctaFeatures">
            <div className="ccm-miniFeature">
              <FaChartLine className="ccm-iconText" />
              <span>Advanced Analytics</span>
            </div>
            <div className="ccm-miniFeature">
              <FaRobot className="ccm-iconText" />
              <span>AI-Powered Tools</span>
            </div>
            <div className="ccm-miniFeature">
              <FaCodeBranch className="ccm-iconText" />
              <span>Version Control</span>
            </div>
            <div className="ccm-miniFeature">
              <FaFilePdf className="ccm-iconText" />
              <span>Multi-Format Export</span>
            </div>
            <div className="ccm-miniFeature">
              <FaSortAmountUp className="ccm-iconText" />
              <span>Scalable System</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
