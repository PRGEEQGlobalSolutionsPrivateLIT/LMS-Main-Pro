import "./analytics-reporting.css";
import { FaChartBar, FaChartLine, FaClipboardList, FaExclamationTriangle, FaRocket, FaGlobe, FaBrain, FaDatabase, FaTachometerAlt, FaUsers, FaGraduationCap, FaBuilding, } from "react-icons/fa";

const dashboardPoints = [
  "Learner activity and engagement tracking",
  "Course completion rates and time on modules",
  "Assessment scores and performance trends",
  "Participation in discussions and collaborative learning",
  "Gamification progress and achievements",
];

const reportingPoints = [
  "Learner performance and progress reports",
  "Course effectiveness and quality reports",
  "Assessment analytics and exam result breakdowns",
  "Instructor activity and contribution reports",
  "Department-level and program-wide analytics",
];

const earlyIdentificationPoints = [
  "Learners falling behind in courses",
  "Low engagement with learning materials",
  "Assessment performance patterns and anomalies",
  "Topics where learners consistently struggle",
];

const scalablePoints = [
  "Universities and higher education institutions",
  "Schools and digital learning platforms",
  "Corporate training and professional development programs",
  "EdTech companies and online course providers",
];

export default function AnalyticsReportingPage() {
  return (
    <main className="analytics-reporting-page page">
      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroContent">

            <h1 className="heroTitle">Learning Analytics &amp; Reporting</h1>

            <h2 className="heroSubtitle">
              Turn Learning Data into Actionable Insights
            </h2>

            <p className="heroText">
              In modern digital education, success depends on more than
              delivering content—it depends on understanding how learners engage,
              progress, and perform. NeuroLXP's advanced Learning Analytics and
              Reporting system empowers institutions, educators, and training
              leaders with real-time data insights that support smarter,
              evidence-based decisions.
            </p>

            <p className="heroText">
              As an AI-powered Learning Management System (LMS), NeuroLXP
              transforms learning data into meaningful analytics that help
              improve learning effectiveness, learner engagement, course
              quality, and academic outcomes.
            </p>
          </div>

          <div className="heroVisualCard">
            <div className="imagePlaceholder">
              <img
                src="/photo-1551288049-bebda4e38f71.jpeg"
                alt="Learning analytics dashboard visualization"
                className="heroImage"
              />
            </div>

            <div className="floatingStats">
              <div className="statPill">
                <FaTachometerAlt className="iconText" />
                <span>Real-Time Dashboards</span>
              </div>
              <div className="statPill">
                <FaChartLine className="iconText" />
                <span>AI-Powered Insights</span>
              </div>
              <div className="statPill">
                <FaDatabase className="iconText" />
                <span>Data-Driven Decisions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whySection">
        <div className="whyCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaChartBar className="iconText" />
            </div>
            <h3>Why Learning Analytics Matters in Modern LMS Platforms</h3>
          </div>
          <p>
            Educational institutions and training organizations generate large
            volumes of learning data every day. Without proper analytics tools,
            this valuable information often remains underutilized.
          </p>
          <p>
            NeuroLXP provides powerful LMS analytics and reporting dashboards
            that allow institutions to move from assumption-based decisions to
            data-driven learning strategies.
          </p>
          <div className="whyImageWrap">
            <img
              src="/photo-1460925895917-afdab827c52f.jpeg"
              alt="Analytics and data-driven education"
              className="whyImage"
            />
          </div>
        </div>
      </section>

      <section className="cardsSection">
        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaTachometerAlt className="iconText" />
            </div>
            <h3>Comprehensive Learning Analytics Dashboard</h3>
          </div>

          <p>
            NeuroLXP provides an intuitive learning analytics dashboard that
            consolidates key metrics into clear, visual insights. Administrators,
            instructors, and training managers can easily monitor performance
            across the entire learning ecosystem.
          </p>

          <div className="insetBox">
            <h4>Key analytics insights include:</h4>
            <ul className="featureList">
              {dashboardPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            These insights help institutions better understand how learners
            interact with courses and where improvements are needed.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaClipboardList className="iconText" />
            </div>
            <h3>Advanced Reporting for Institutions and Educators</h3>
          </div>

          <p>
            NeuroLXP supports advanced LMS reporting tools that generate
            detailed reports for academic and training analysis. Institutions can
            easily create customized reports to monitor performance at multiple
            levels.
          </p>

          <div className="insetBox">
            <h4>Reporting capabilities include:</h4>
            <ul className="featureList">
              {reportingPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            Reports can be exported and shared with stakeholders, enabling
            institutions to maintain transparency, accountability, and
            continuous improvement.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaExclamationTriangle className="iconText" />
            </div>
            <h3>Early Identification of Learning Gaps</h3>
          </div>

          <p>
            One of the most powerful advantages of AI-driven learning analytics
            is the ability to identify struggling learners early. NeuroLXP helps
            institutions detect issues before they escalate.
          </p>

          <div className="insetBox">
            <h4>NeuroLXP helps institutions detect:</h4>
            <ul className="featureList">
              {earlyIdentificationPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            By identifying these trends early, educators can provide timely
            support, targeted interventions, and improved instructional
            strategies.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaGlobe className="iconText" />
            </div>
            <h3>Scalable Analytics for Every Learning Environment</h3>
          </div>

          <p>
            NeuroLXP's learning analytics platform is designed for diverse
            learning environments. The system supports large-scale learning
            analytics, making it suitable for institutions managing thousands of
            learners.
          </p>

          <div className="insetBox">
            <h4>
              NeuroLXP's platform is built for:
            </h4>
            <ul className="featureList">
              {scalablePoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className="outcomesSection">
        <div className="outcomesCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaRocket className="iconText" />
            </div>
            <h3>Improve Learning Outcomes with Data-Driven Decisions</h3>
          </div>

          <p>
            With powerful analytics and reporting, NeuroLXP helps institutions
            continuously improve the learning experience. Decision-makers can
            evaluate what works, what needs improvement, and how to optimize
            courses for better results.
          </p>

          <div className="outcomesImageWrap">
            <img
              src="/photo-1522202176988-66273c2fd55f.jpeg"
              alt="Teams improving learning outcomes through data"
              className="outcomesImage"
            />
          </div>

          <div className="outcomesGrid">
            <div className="outcomeItem">
              <FaChartLine className="outcomeIcon" />
              <span>Enhance course design and curriculum quality</span>
            </div>
            <div className="outcomeItem">
              <FaUsers className="outcomeIcon" />
              <span>Increase learner engagement and participation</span>
            </div>
            <div className="outcomeItem">
              <FaGraduationCap className="outcomeIcon" />
              <span>Boost course completion rates</span>
            </div>
            <div className="outcomeItem">
              <FaBuilding className="outcomeIcon" />
              <span>Achieve stronger academic outcomes</span>
            </div>
          </div>
        </div>
      </section>

      <section className="highlightSection">
        <div className="highlightGrid">
          <div className="highlightTextCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaBrain className="iconText" />
              </div>
              <h3>
                NeuroLXP — The AI-Powered LMS for Smarter Learning Analytics
              </h3>
            </div>

            <p>
              Many traditional LMS platforms provide only basic activity logs
              and simple reports. NeuroLXP goes further by delivering
              intelligent learning analytics, real-time dashboards, and
              AI-powered reporting insights that help institutions make smarter
              decisions.
            </p>

            <p>
              By combining advanced analytics, powerful reporting tools, and
              AI-driven insights, NeuroLXP enables organizations to create more
              effective, measurable, and outcome-focused learning experiences.
            </p>

            <div className="miniFeatures">
              <div className="miniFeature">
                <FaTachometerAlt className="iconText" />
                <span>Real-time dashboards</span>
              </div>
              <div className="miniFeature">
                <FaChartBar className="iconText" />
                <span>Advanced reporting tools</span>
              </div>
              <div className="miniFeature">
                <FaBrain className="iconText" />
                <span>AI-powered insights</span>
              </div>
            </div>
          </div>

          <div className="secondaryVisualCard">
            <div className="imagePlaceholderAlt">
              <img
                src="/photo-1504868584819-f8e8b4b6d7e3.jpeg"
                alt="AI-powered analytics and smart insights"
                className="secondaryImage"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
