import "./accessibility-inclusivity.css";
import {
  FaUniversalAccess,
  FaLayerGroup,
  FaHandsHelping,
  FaUniversity,
  FaDoorOpen,
  FaWheelchair,
  FaClosedCaptioning,
  FaRoute,
  FaClipboardCheck,
  FaFileAlt,
  FaVideo,
  FaPuzzlePiece,
  FaChartBar,
  FaHeadphones,
  FaComments,
  FaUsers,
  FaHeart,
  FaGlobe,
  FaSeedling,
  FaBalanceScale,
  FaCheckCircle,
  FaLightbulb,
  FaExpandArrowsAlt,
} from "react-icons/fa";

/* ── data ── */

const accessibilityFeatures = [
  { icon: <FaRoute />,            label: "Navigate the platform with ease" },
  { icon: <FaLayerGroup />,       label: "Access learning materials in multiple formats" },
  { icon: <FaClipboardCheck />,   label: "Engage with content through various interaction methods" },
  { icon: <FaWheelchair />,       label: "Participate in assessments and activities without limitations" },
];

const contentFormats = [
  { icon: <FaFileAlt />,      label: "Text-based content and structured notes" },
  { icon: <FaVideo />,        label: "Video and multimedia lessons" },
  { icon: <FaPuzzlePiece />,  label: "Interactive learning modules" },
  { icon: <FaChartBar />,     label: "Visual learning aids and diagrams" },
  { icon: <FaHeadphones />,   label: "Audio-supported learning resources" },
];

const inclusivePoints = [
  "Equal participation in discussions",
  "Diverse perspectives and collaborative learning",
  "Respectful and supportive learning communities",
];

const institutionCapabilities = [
  "Deliver accessible online courses",
  "Create inclusive learning environments",
  "Support learners with diverse abilities",
  "Expand learning opportunities across wider communities",
];

export default function AccessibilityInclusivityPage() {
  return (
    <main className="ai-page page">

      <section className="ai-heroSection">
        <div className="ai-heroGrid">
          <div className="ai-heroContent">
            <h1 className="ai-heroTitle">Accessibility &amp; Inclusivity</h1>
            <h2 className="ai-heroSubtitle">
              Learning Designed for Everyone
            </h2>
            <p className="ai-heroText">
              Education should be accessible to all learners, regardless of their abilities,
              learning styles, or circumstances. NeuroLXP is built with strong accessibility
              and inclusivity principles, ensuring that every learner can participate fully
              in the learning experience.
            </p>
            <p className="ai-heroText">
              By integrating inclusive design practices and accessible learning features,
              NeuroLXP creates an environment where diverse learners can engage, learn,
              and succeed without barriers.
            </p>
          </div>

          <div className="ai-heroVisualCard">
            <div className="ai-imagePlaceholder">
              <img
                src="/photo-1573496359142-b8d87734a5a2.jpeg"
                alt="Diverse group of learners studying together inclusively"
                className="ai-heroImg"
              />
            </div>
            <div className="ai-floatingStats">
              <div className="ai-statPill">
                <FaUniversalAccess className="ai-iconText" />
                <span>Universal Access</span>
              </div>
              <div className="ai-statPill">
                <FaLayerGroup className="ai-iconText" />
                <span>Multiple Formats</span>
              </div>
              <div className="ai-statPill">
                <FaHandsHelping className="ai-iconText" />
                <span>Inclusive Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-cardsSection">

        <article className="ai-contentCard">
          <div className="ai-cardHeader">
            <div className="ai-iconWrap">
              <FaUniversalAccess className="ai-iconText" />
            </div>
            <h3>Accessible Learning for Diverse Needs</h3>
          </div>
          <p>
            NeuroLXP supports accessible digital learning experiences that allow learners
            with different abilities to interact comfortably with course content. The platform
            is designed to make learning materials easier to access, navigate, and understand.
          </p>
          <div className="ai-insetBox">
            <h4>Accessibility features help ensure that learners can:</h4>
            <ul className="ai-iconList">
              {accessibilityFeatures.map((item, i) => (
                <li key={i} className="ai-iconListItem">
                  <span className="ai-listIcon">{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <p>
            These capabilities ensure that education remains inclusive and equitable
            for all learners.
          </p>
        </article>

        <article className="ai-contentCard">
          <div className="ai-cardHeader">
            <div className="ai-iconWrap">
              <FaLayerGroup className="ai-iconText" />
            </div>
            <h3>Multiple Content Formats for Flexible Learning</h3>
          </div>
          <p>
            Different learners absorb information in different ways. NeuroLXP enables
            educators to deliver content in multiple formats so that learners can choose
            the method that best suits their needs.
          </p>
          <div className="ai-insetBox">
            <h4>Learning materials can be provided as:</h4>
            <ul className="ai-iconList">
              {contentFormats.map((item, i) => (
                <li key={i} className="ai-iconListItem">
                  <span className="ai-listIcon">{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <p>
            This flexibility allows learners to engage with the same knowledge through
            formats that work best for them.
          </p>
        </article>

        <article className="ai-contentCard">
          <div className="ai-cardHeader">
            <div className="ai-iconWrap">
              <FaHandsHelping className="ai-iconText" />
            </div>
            <h3>Inclusive Learning Experiences</h3>
          </div>
          <p>
            NeuroLXP encourages the creation of inclusive learning environments where all
            learners feel supported and valued. Through collaborative tools such as
            discussion forums, peer interactions, and community spaces, learners can share
            perspectives and contribute to the learning process.
          </p>
          <div className="ai-insetBox">
            <h4>These inclusive interactions promote:</h4>
            <ul className="ai-featureList">
              {inclusivePoints.map((item) => (
                <li key={item}>
                  <span className="ai-bullet">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="ai-contentCard">
          <div className="ai-cardHeader">
            <div className="ai-iconWrap">
              <FaUniversity className="ai-iconText" />
            </div>
            <h3>Supporting Institutions in Inclusive Education</h3>
          </div>
          <p>
            Educational institutions and organizations increasingly prioritize accessibility
            and inclusivity in their digital learning strategies. NeuroLXP provides the
            tools needed to support inclusive education initiatives and ensure that learning
            opportunities are available to everyone.
          </p>
          <div className="ai-insetBox">
            <h4>The platform enables institutions to:</h4>
            <ul className="ai-featureList">
              {institutionCapabilities.map((item) => (
                <li key={item}>
                  <span className="ai-bullet">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className="ai-principlesBanner">
        <div className="ai-principlesInner">
          <div className="ai-principleCard">
            <div className="ai-principleIcon">
              <FaBalanceScale className="ai-iconText" />
            </div>
            <h4>Equity</h4>
            <p>Equal access to quality education for every learner, everywhere.</p>
          </div>
          <div className="ai-principleCard">
            <div className="ai-principleIcon">
              <FaGlobe className="ai-iconText" />
            </div>
            <h4>Reach</h4>
            <p>Expanding learning opportunities across wider, diverse communities.</p>
          </div>
          <div className="ai-principleCard">
            <div className="ai-principleIcon">
              <FaHeart className="ai-iconText" />
            </div>
            <h4>Belonging</h4>
            <p>Creating safe, respectful environments where every learner is valued.</p>
          </div>
          <div className="ai-principleCard">
            <div className="ai-principleIcon">
              <FaSeedling className="ai-iconText" />
            </div>
            <h4>Growth</h4>
            <p>Supporting continuous improvement through inclusive teaching practices.</p>
          </div>
        </div>
      </section>

      <section className="ai-highlightSection">
        <div className="ai-highlightGrid">
          <div className="ai-highlightTextCard">
            <div className="ai-cardHeader">
              <div className="ai-iconWrap">
                <FaDoorOpen className="ai-iconText" />
              </div>
              <h3>Enabling Learning Without Barriers</h3>
            </div>
            <p>
              By prioritizing accessibility and inclusivity, NeuroLXP helps institutions
              create learning ecosystems where every learner has the opportunity to succeed.
              The platform ensures that education remains open, adaptable, and welcoming
              to all learners.
            </p>
            <p>
              NeuroLXP — Empowering Inclusive Learning for Every Learner.
            </p>
            <div className="ai-miniFeatures">
              <div className="ai-miniFeature">
                <FaClosedCaptioning className="ai-iconText" />
                <span>Closed captioning support</span>
              </div>
              <div className="ai-miniFeature">
                <FaCheckCircle className="ai-iconText" />
                <span>WCAG-aligned design</span>
              </div>
              <div className="ai-miniFeature">
                <FaLightbulb className="ai-iconText" />
                <span>Flexible learning paths</span>
              </div>
              <div className="ai-miniFeature">
                <FaComments className="ai-iconText" />
                <span>Community discussions</span>
              </div>
              <div className="ai-miniFeature">
                <FaExpandArrowsAlt className="ai-iconText" />
                <span>Scalable for all institutions</span>
              </div>
            </div>
          </div>

          <div className="ai-secondaryVisualCard">
            <div className="ai-imagePlaceholderAlt">
              <img
                src="/photo-1531482615713-2afd69097998.jpeg"
                alt="Inclusive and diverse online learning environment"
                className="ai-heroImg"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
