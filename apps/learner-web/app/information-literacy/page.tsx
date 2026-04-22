import "./information-literacy.css";

const understandingPoints = [
  "Identifying credible and trustworthy information sources",
  "Evaluating the accuracy and reliability of digital content",
  "Distinguishing between facts, opinions, and misinformation",
  "Understanding bias and perspective in information sources",
];

const researchPoints = [
  "Conduct effective online and academic research",
  "Use digital libraries and knowledge repositories",
  "Organize and manage research information",
  "Synthesize information from multiple sources",
];

const ethicalPoints = [
  "Proper citation and referencing techniques",
  "Ethical use of digital information and resources",
  "Responsible knowledge sharing and communication",
  "Respect for intellectual property and academic integrity",
];

const lifelongLearningPoints = [
  "Academic research and critical thinking",
  "Independent learning and knowledge exploration",
  "Digital citizenship and responsible information use",
  "Professional decision-making and problem solving",
];

export default function InformationLiteracyPage() {
  return (
    <main className="page">
      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroContent">
            <div className="eyebrow">NeuroLXP</div>

            <h1 className="heroTitle">Information Literacy</h1>

            <h2 className="heroSubtitle">
              Empowering Learners to Find, Evaluate, and Use Information
              Effectively
            </h2>

            <p className="heroText">
              In an age where information is available everywhere, the ability
              to identify credible sources, analyze information critically, and
              use knowledge responsibly has become essential. Information
              Literacy helps learners develop the skills required to navigate
              the vast digital information landscape with confidence and
              accuracy.
            </p>

            <p className="heroText">
              Through structured learning experiences, NeuroLXP enables
              institutions to build strong information literacy skills among
              learners, helping them become thoughtful researchers, responsible
              digital citizens, and informed decision-makers.
            </p>
          </div>

          <div className="heroVisualCard">
            <div className="imagePlaceholder">
              <span className="imageLabel">Image Placeholder 01</span>
            </div>

            <div className="floatingStats">
              <div className="statPill">
                <span className="iconText">🔎</span>
                <span>Research Skills</span>
              </div>
              <div className="statPill">
                <span className="iconText">🛡️</span>
                <span>Credible Sources</span>
              </div>
              <div className="statPill">
                <span className="iconText">⚖️</span>
                <span>Ethical Use</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cardsSection">
        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <span className="iconText">✅</span>
            </div>
            <h3>Understanding and Evaluating Information</h3>
          </div>

          <p>
            Learners today encounter information from multiple sources such as
            websites, social media, research publications, and digital
            platforms. Information literacy teaches learners how to evaluate the
            reliability, relevance, and authenticity of these sources.
          </p>

          <div className="insetBox">
            <h4>Key competencies include:</h4>
            <ul className="featureList">
              {understandingPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            These skills help learners make informed decisions and avoid
            misinformation.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <span className="iconText">📘</span>
            </div>
            <h3>Effective Research and Knowledge Discovery</h3>
          </div>

          <p>
            Information literacy enables learners to develop strong research
            skills that support academic, professional, and personal growth.
          </p>

          <div className="insetBox">
            <h4>Through structured guidance, learners learn how to:</h4>
            <ul className="featureList">
              {researchPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            These capabilities help learners build deeper understanding and
            develop analytical thinking skills.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <span className="iconText">🧭</span>
            </div>
            <h3>Ethical and Responsible Use of Information</h3>
          </div>

          <p>
            Using information responsibly is a key component of information
            literacy. Learners must understand the importance of respecting
            intellectual property, citing sources, and avoiding plagiarism.
          </p>

          <div className="insetBox">
            <h4>Information literacy training helps learners practice:</h4>
            <ul className="featureList">
              {ethicalPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            These practices promote responsible knowledge creation and
            collaboration.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <span className="iconText">🎓</span>
            </div>
            <h3>Supporting Education and Lifelong Learning</h3>
          </div>

          <p>
            Information literacy is an essential skill for students,
            professionals, and lifelong learners. By strengthening the ability
            to search, analyze, and interpret information, learners become more
            confident and capable in both academic and professional
            environments.
          </p>

          <div className="insetBox">
            <h4>
              Institutions can use NeuroLXP to deliver structured information
              literacy programs that support:
            </h4>
            <ul className="featureList">
              {lifelongLearningPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className="highlightSection">
        <div className="highlightGrid">
          <div className="highlightTextCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <span className="iconText">🧠</span>
              </div>
              <h3>NeuroLXP — Enabling Smarter Information Literacy</h3>
            </div>

            <p>
              With structured learning modules, interactive activities, and
              digital research tools, NeuroLXP helps learners develop strong
              information literacy skills that empower them to navigate
              knowledge confidently in the digital age.
            </p>

            <div className="miniFeatures">
              <div className="miniFeature">
                <span className="iconText">📚</span>
                <span>Structured learning modules</span>
              </div>
              <div className="miniFeature">
                <span className="iconText">🏛️</span>
                <span>Digital research tools</span>
              </div>
              <div className="miniFeature">
                <span className="iconText">🔍</span>
                <span>Interactive activities</span>
              </div>
            </div>
          </div>

          <div className="secondaryVisualCard">
            <div className="imagePlaceholderAlt">
              <span className="imageLabel">Image Placeholder 02</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}