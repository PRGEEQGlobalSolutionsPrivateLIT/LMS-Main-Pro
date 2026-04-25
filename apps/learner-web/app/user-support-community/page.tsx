import "./user-support-community.css";
import { FaHeadset, FaUsers, FaShareAlt, FaComments, FaBook, FaQuestionCircle, FaBell, FaChalkboardTeacher, FaUserShield,
  FaCommentDots, FaHandsHelping, FaProjectDiagram, FaUserFriends, FaLightbulb, FaPuzzlePiece, FaRocket, FaGraduationCap,
  FaUniversity, FaSmile, FaNetworkWired, FaHeart, } from "react-icons/fa";

const supportFeatures = [
  { icon: <FaHeadset />,          label: "Helpdesk and technical support for platform assistance" },
  { icon: <FaBook />,             label: "Guided onboarding and user tutorials" },
  { icon: <FaQuestionCircle />,   label: "Knowledge base and FAQs for quick problem resolution" },
  { icon: <FaChalkboardTeacher />,label: "Instructor and administrator support channels" },
  { icon: <FaBell />,             label: "In-platform notifications and guidance" },
];

const communityFeatures = [
  { icon: <FaCommentDots />,      label: "Discussion forums and topic-based communities" },
  { icon: <FaHandsHelping />,     label: "Peer-to-peer knowledge sharing" },
  { icon: <FaComments />,         label: "Collaborative learning discussions" },
  { icon: <FaProjectDiagram />,   label: "Group learning spaces for projects and activities" },
  { icon: <FaUserFriends />,      label: "Mentor and instructor interaction" },
];

const socialPoints = [
  "Exchange of ideas and perspectives",
  "Collaborative problem solving",
  "Continuous engagement with course material",
  "Stronger learning communities",
];

const learnerBenefits = [
  "Access guidance and assistance when needed",
  "Participate in collaborative discussions",
  "Learn from peers and mentors",
];

const educatorBenefits = [
  "Provide timely feedback and support",
  "Facilitate discussions and knowledge exchange",
  "Build engaged learning communities",
];

const institutionBenefits = [
  "Improve learner satisfaction and engagement",
  "Strengthen communication across the learning platform",
  "Foster a collaborative learning culture",
];

export default function UserSupportCommunityPage() {
  return (
    <main className="usc-page page">

      <section className="usc-heroSection">
        <div className="usc-heroGrid">
          <div className="usc-heroContent">
            
            <h1 className="usc-heroTitle">User Support &amp; Learning Community</h1>
            <h2 className="usc-heroSubtitle">
              Empowering Learners Through Support and Collaboration
            </h2>
            <p className="usc-heroText">
              A successful learning platform is not just about delivering content—it's about
              providing the support, guidance, and community interaction that learners need to
              succeed. NeuroLXP offers comprehensive User Support and Community features that
              ensure learners, educators, and administrators always have access to assistance,
              collaboration, and shared knowledge.
            </p>
            <p className="usc-heroText">
              By combining responsive support systems with collaborative learning communities,
              NeuroLXP creates a learning environment where users feel supported, connected,
              and motivated.
            </p>
          </div>

          <div className="usc-heroVisualCard">
            <div className="usc-imagePlaceholder">
              <img
                src="/photo-1522071820081-009f0129c71c.jpeg"
                alt="Team collaborating in a learning community"
                className="usc-heroImg"
              />
            </div>
            <div className="usc-floatingStats">
              <div className="usc-statPill">
                <FaHeadset className="usc-iconText" />
                <span>Dedicated Support</span>
              </div>
              <div className="usc-statPill">
                <FaUsers className="usc-iconText" />
                <span>Collaborative Community</span>
              </div>
              <div className="usc-statPill">
                <FaShareAlt className="usc-iconText" />
                <span>Social Learning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="usc-cardsSection">

        <article className="usc-contentCard">
          <div className="usc-cardHeader">
            <div className="usc-iconWrap">
              <FaHeadset className="usc-iconText" />
            </div>
            <h3>Dedicated User Support for Seamless Learning</h3>
          </div>
          <p>
            NeuroLXP provides reliable LMS user support tools that help learners and instructors
            resolve issues quickly and continue their learning journey without disruption.
          </p>
          <div className="usc-insetBox">
            <h4>Key support features include:</h4>
            <ul className="usc-iconList">
              {supportFeatures.map((item, i) => (
                <li key={i} className="usc-iconListItem">
                  <span className="usc-listIcon">{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <p>
            This structured support system ensures that users can navigate the platform
            confidently and efficiently.
          </p>
        </article>

        <article className="usc-contentCard">
          <div className="usc-cardHeader">
            <div className="usc-iconWrap">
              <FaUsers className="usc-iconText" />
            </div>
            <h3>Building a Collaborative Learning Community</h3>
          </div>
          <p>
            NeuroLXP goes beyond traditional LMS functionality by fostering active learning
            communities where learners can interact, discuss ideas, and share knowledge.
          </p>
          <div className="usc-insetBox">
            <h4>Community-driven learning features include:</h4>
            <ul className="usc-iconList">
              {communityFeatures.map((item, i) => (
                <li key={i} className="usc-iconListItem">
                  <span className="usc-listIcon">{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <p>
            These interactions create an environment where learners learn not only from
            instructors but also from their peers.
          </p>
        </article>

        <article className="usc-contentCard">
          <div className="usc-cardHeader">
            <div className="usc-iconWrap">
              <FaShareAlt className="usc-iconText" />
            </div>
            <h3>Social Learning for Deeper Engagement</h3>
          </div>
          <p>
            Through integrated social learning features, NeuroLXP encourages learners to
            actively participate in conversations, ask questions, and contribute insights.
            This collaborative approach helps learners explore concepts more deeply while
            building confidence in their understanding.
          </p>
          <div className="usc-insetBox">
            <h4>Social learning encourages:</h4>
            <ul className="usc-featureList">
              {socialPoints.map((item) => (
                <li key={item}>
                  <span className="usc-bullet">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="usc-contentCard">
          <div className="usc-cardHeader">
            <div className="usc-iconWrap">
              <FaComments className="usc-iconText" />
            </div>
            <h3>Real-Time Communication and Interaction</h3>
          </div>
          <p>
            NeuroLXP enables smooth communication between learners, instructors, and
            administrators through integrated messaging and discussion tools. These
            communication features ensure that questions are answered quickly and that
            learning remains interactive.
          </p>
          <div className="usc-insetBox">
            <h4>Real-time interaction helps maintain:</h4>
            <ul className="usc-featureList">
              <li><span className="usc-bullet">•</span><span>Active participation in every session</span></li>
              <li><span className="usc-bullet">•</span><span>A strong sense of connection among learners</span></li>
              <li><span className="usc-bullet">•</span><span>Instant resolution of learner queries</span></li>
              <li><span className="usc-bullet">•</span><span>Instructor-led live discussions and Q&amp;A</span></li>
            </ul>
          </div>
          <p>
            Real-time interaction helps maintain active participation and a sense of
            connection among learners.
          </p>
        </article>
      </section>

      <section className="usc-stakeholderSection">
        <div className="usc-stakeholderHeader">
          <div className="usc-iconWrap usc-stakeholderIcon">
            <FaNetworkWired className="usc-iconText" />
          </div>
          <div>
            <h2 className="usc-stakeholderTitle">
              Supporting Institutions, Educators, and Learners
            </h2>
            <p className="usc-stakeholderSubtitle">
              NeuroLXP's user support and community features benefit the entire learning ecosystem.
            </p>
          </div>
        </div>

        <div className="usc-stakeholderGrid">
          <div className="usc-stakeholderCard">
            <div className="usc-stakeholderCardTop">
              <div className="usc-stakeholderImgWrap">
                <img
                  src="/photo-1434030216411-0b793f4b4173.jpeg"
                  alt="Student learning online"
                  className="usc-stakeholderImg"
                />
              </div>
              <div className="usc-stkIconWrap usc-stkLearner">
                <FaGraduationCap className="usc-iconText" />
              </div>
              <h3>For Learners</h3>
            </div>
            <ul className="usc-featureList">
              {learnerBenefits.map((item) => (
                <li key={item}>
                  <span className="usc-bullet usc-bulletLearner">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="usc-stakeholderCard">
            <div className="usc-stakeholderCardTop">
              <div className="usc-stakeholderImgWrap">
                <img
                  src="/photo-1524178232363-1fb2b075b655.jpeg"
                  alt="Educator facilitating discussion"
                  className="usc-stakeholderImg"
                />
              </div>
              <div className="usc-stkIconWrap usc-stkEducator">
                <FaChalkboardTeacher className="usc-iconText" />
              </div>
              <h3>For Educators</h3>
            </div>
            <ul className="usc-featureList">
              {educatorBenefits.map((item) => (
                <li key={item}>
                  <span className="usc-bullet usc-bulletEducator">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="usc-stakeholderCard">
            <div className="usc-stakeholderCardTop">
              <div className="usc-stakeholderImgWrap">
                <img
                  src="/photo-1562774053-701939374585.jpeg"
                  alt="University campus"
                  className="usc-stakeholderImg"
                />
              </div>
              <div className="usc-stkIconWrap usc-stkInstitution">
                <FaUniversity className="usc-iconText" />
              </div>
              <h3>For Institutions</h3>
            </div>
            <ul className="usc-featureList">
              {institutionBenefits.map((item) => (
                <li key={item}>
                  <span className="usc-bullet usc-bulletInstitution">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="usc-highlightSection">
        <div className="usc-highlightGrid">
          <div className="usc-highlightTextCard">
            <div className="usc-cardHeader">
              <div className="usc-iconWrap">
                <FaHeart className="usc-iconText" />
              </div>
              <h3>NeuroLXP — Building a Connected Learning Community</h3>
            </div>
            <p>
              With integrated user support systems, collaborative learning communities, and
              social learning features, NeuroLXP ensures that every learner has the support
              and connection they need to succeed in their learning journey.
            </p>
            <div className="usc-miniFeatures">
              <div className="usc-miniFeature">
                <FaRocket className="usc-iconText" />
                <span>Seamless onboarding</span>
              </div>
              <div className="usc-miniFeature">
                <FaLightbulb className="usc-iconText" />
                <span>Peer knowledge sharing</span>
              </div>
              <div className="usc-miniFeature">
                <FaPuzzlePiece className="usc-iconText" />
                <span>Community-driven growth</span>
              </div>
              <div className="usc-miniFeature">
                <FaSmile className="usc-iconText" />
                <span>Learner satisfaction</span>
              </div>
              <div className="usc-miniFeature">
                <FaUserShield className="usc-iconText" />
                <span>Admin support tools</span>
              </div>
            </div>
          </div>

          <div className="usc-secondaryVisualCard">
            <div className="usc-imagePlaceholderAlt">
              <img
                src="/photo-11543269865-cbf427effbad.jpeg"
                alt="Connected learning community online"
                className="usc-heroImg"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
