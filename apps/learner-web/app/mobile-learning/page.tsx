import "./mobile-learning.css";
import {
  FaMobileAlt,
  FaBolt,
  FaGamepad,
  FaBell,
  FaUniversity,
  FaLaptop,
  FaBookOpen,
  FaUserGraduate,
  FaRocket,
} from "react-icons/fa";

const deviceAccessPoints = [
  "Access courses anytime and from any location",
  "Continue learning during travel or short breaks",
  "Review study materials quickly and conveniently",
  "Stay connected with instructors and peers",
];

const microlearningPoints = [
  "Absorb information in small, manageable segments",
  "Revise concepts quickly before exams or tasks",
  "Maintain consistent learning habits",
  "Stay engaged without feeling overwhelmed",
];

const interactivePoints = [
  "Interactive quizzes and assessments",
  "Drag-and-drop learning activities",
  "Match-the-following exercises",
  "Clickable concept explorations",
  "Discussion forums and collaborative learning",
];

const notificationPoints = [
  "New course releases",
  "Assignment deadlines",
  "Discussion updates",
  "Assessment reminders",
  "Certification achievements",
];

const environmentPoints = [
  "Universities and higher education institutions",
  "Schools and online education platforms",
  "Corporate training and professional development programs",
  "Remote and distributed learning environments",
];

export default function MobileLearningPage() {
  return (
    <main className="mobile-learning-page page">
      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroContent">
            {/* <div className="eyebrow">NeuroLXP</div> */}

            <h1 className="heroTitle">Mobile Learning</h1>

            <h2 className="heroSubtitle">
              Learn Anytime, Anywhere with Mobile-First Learning
            </h2>

            <p className="heroText">
              Learning today is no longer limited to classrooms or desktops.
              NeuroLXP enables seamless Mobile Learning, allowing learners to
              access courses, assessments, and learning resources anytime and
              anywhere using their smartphones or tablets.
            </p>

            <p className="heroText">
              With a mobile-friendly Learning Management System (LMS), NeuroLXP
              ensures that learning remains flexible, accessible, and convenient
              for modern learners who prefer to study on the go.
            </p>
          </div>

          <div className="heroVisualCard">
            <div className="imagePlaceholder">
              <img
                src="/photo-1522202176988-66273c2fd55f.webp"
                alt="Students learning on mobile devices"
                className="heroImage"
              />
            </div>

            <div className="floatingStats">
              <div className="statPill">
                <FaMobileAlt className="iconText" />
                <span>Mobile-First Design</span>
              </div>
              <div className="statPill">
                <FaBolt className="iconText" />
                <span>Microlearning Modules</span>
              </div>
              <div className="statPill">
                <FaGamepad className="iconText" />
                <span>Interactive Content</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cardsSection">
        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaLaptop className="iconText" />
            </div>
            <h3>Access Learning on Any Device</h3>
          </div>

          <p>
            NeuroLXP is designed with a mobile-responsive learning platform that
            adapts smoothly across smartphones, tablets, and other mobile
            devices. Learners can easily access their courses, track progress,
            and participate in learning activities without being tied to a
            desktop computer.
          </p>

          <div className="insetBox">
            <h4>Mobile learning enables users to:</h4>
            <ul className="featureList">
              {deviceAccessPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            This flexibility helps learners integrate education into their daily
            routines.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaBolt className="iconText" />
            </div>
            <h3>Microlearning for Busy Learners</h3>
          </div>

          <p>
            Mobile learning works best with short, focused learning experiences.
            NeuroLXP supports microlearning modules that allow learners to
            complete quick lessons, quizzes, or activities in just a few
            minutes.
          </p>

          <div className="insetBox">
            <h4>This approach helps learners:</h4>
            <ul className="featureList">
              {microlearningPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            Microlearning ensures that learning remains efficient and
            time-friendly.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaGamepad className="iconText" />
            </div>
            <h3>Interactive Mobile Learning Experiences</h3>
          </div>

          <p>
            NeuroLXP ensures that mobile learning remains engaging by supporting
            interactive and gamified learning formats on mobile devices. Learners
            can participate in activities such as:
          </p>

          <div className="insetBox">
            <h4>Engaging formats include:</h4>
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
            These interactive elements make mobile learning both effective and
            enjoyable.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaBell className="iconText" />
            </div>
            <h3>Stay Connected with Notifications and Updates</h3>
          </div>

          <p>
            Mobile learning through NeuroLXP keeps learners connected through
            real-time notifications and updates. Learners can receive alerts for:
          </p>

          <div className="insetBox">
            <h4>Learners stay informed about:</h4>
            <ul className="featureList">
              {notificationPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            These notifications help learners stay organized and actively engaged
            with their learning journey.
          </p>
        </article>
      </section>

      <section className="environmentSection">
        <div className="environmentGrid">
          <div className="environmentVisualCard">
            <div className="imagePlaceholderAlt">
              <img
                src="/photo-1600195077077-7c815f540a3d.jpeg"
                alt="Corporate and university mobile training environments"
                className="heroImage"
              />
            </div>
          </div>

          <article className="contentCard environmentCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaUniversity className="iconText" />
              </div>
              <h3>Ideal for Modern Education and Corporate Training</h3>
            </div>

            <p>
              NeuroLXP's mobile learning capabilities support a wide range of
              learning environments, ensuring continuous, accessible education
              for every learner type.
            </p>

            <div className="insetBox">
              <h4>Designed for:</h4>
              <ul className="featureList">
                {environmentPoints.map((item) => (
                  <li key={item}>
                    <span className="listIcon">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              Mobile accessibility ensures that organizations can deliver
              continuous learning experiences to learners wherever they are.
            </p>
          </article>
        </div>
      </section>

      <section className="highlightSection">
        <div className="highlightGrid">
          <div className="highlightTextCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaRocket className="iconText" />
              </div>
              <h3>NeuroLXP — Learning Without Limits</h3>
            </div>

            <p>
              With mobile-first design, interactive learning experiences, and
              seamless accessibility across devices, NeuroLXP empowers learners
              to learn anytime, anywhere, and at their own pace.
            </p>

            <div className="miniFeatures">
              <div className="miniFeature">
                <FaBookOpen className="iconText" />
                <span>Mobile-first LMS</span>
              </div>
              <div className="miniFeature">
                <FaUserGraduate className="iconText" />
                <span>Gamified experiences</span>
              </div>
              <div className="miniFeature">
                <FaMobileAlt className="iconText" />
                <span>Real-time notifications</span>
              </div>
            </div>
          </div>

          <div className="secondaryVisualCard">
            <div className="imagePlaceholderAlt">
              <img
                src="/photo-1509062522246-3755977927d7.jpeg"
                alt="Learner using NeuroLXP on mobile with gamified content"
                className="heroImage"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
