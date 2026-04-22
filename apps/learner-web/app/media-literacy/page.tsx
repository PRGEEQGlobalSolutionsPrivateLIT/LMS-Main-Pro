import "./media-literacy.css";

const mediaUnderstandingPoints = [
  "Understanding different types of media platforms",
  "Recognizing how media content is created and presented",
  "Identifying the purpose and target audience of media messages",
  "Understanding the influence of media on society and culture",
];

const misinformationPoints = [
  "Distinguish between reliable and unreliable media sources",
  "Identify misleading headlines and manipulated information",
  "Recognize bias in news reporting and media narratives",
  "Verify facts using credible information sources",
];

const criticalThinkingPoints = [
  "Question the accuracy and intent of media messages",
  "Evaluate different perspectives and viewpoints",
  "Understand how media influences opinions and behavior",
  "Engage responsibly with digital content",
];

const contentCreationPoints = [
  "Creating responsible and respectful digital content",
  "Communicating ideas clearly and ethically",
  "Respecting copyright and intellectual property",
  "Participating positively in digital communities",
];

export default function MediaLiteracyPage() {
  return (
    <main className="page">
      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroContent">
            <div className="eyebrow">NeuroLXP</div>

            <h1 className="heroTitle">Media Literacy</h1>

            <h2 className="heroSubtitle">
              Empowering Learners to Navigate the Modern Media Landscape
            </h2>

            <p className="heroText">
              In today’s digital world, people are constantly exposed to
              information through news platforms, social media, online videos,
              and digital publications. While this abundance of information
              offers opportunities for learning, it also presents challenges
              such as misinformation, biased reporting, and unreliable sources.
              Media Literacy helps learners develop the ability to critically
              analyze and interpret media content.
            </p>

            <p className="heroText">
              NeuroLXP enables institutions to deliver structured Media Literacy
              programs that help learners understand how media works, evaluate
              information responsibly, and become informed digital citizens.
            </p>
          </div>

          <div className="heroVisualCard">
            <div className="imagePlaceholder">
              <span className="imageLabel">Image Placeholder 01</span>
            </div>

            <div className="floatingStats">
              <div className="statPill">
                <span className="iconText">📰</span>
                <span>Media Platforms</span>
              </div>
              <div className="statPill">
                <span className="iconText">⚠️</span>
                <span>Misinformation</span>
              </div>
              <div className="statPill">
                <span className="iconText">🎯</span>
                <span>Critical Thinking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cardsSection">
        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <span className="iconText">📺</span>
            </div>
            <h3>Understanding How Media Works</h3>
          </div>

          <p>
            Media literacy helps learners understand how media messages are
            created, distributed, and interpreted. Learners develop awareness
            of how different forms of media influence public opinion and shape
            perceptions.
          </p>

          <div className="insetBox">
            <h4>Key learning areas include:</h4>
            <ul className="featureList">
              {mediaUnderstandingPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            These skills help learners become more thoughtful consumers of
            media.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <span className="iconText">🔍</span>
            </div>
            <h3>Identifying Misinformation and Bias</h3>
          </div>

          <p>
            One of the most important aspects of media literacy is the ability
            to recognize misinformation and biased content.
          </p>

          <div className="insetBox">
            <h4>Through media literacy training, learners develop the ability to:</h4>
            <ul className="featureList">
              {misinformationPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            These skills help individuals avoid misinformation and make
            informed decisions.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <span className="iconText">🧠</span>
            </div>
            <h3>Critical Thinking and Responsible Media Consumption</h3>
          </div>

          <p>
            Media literacy encourages learners to approach information
            thoughtfully rather than accepting it at face value. By developing
            critical thinking skills, learners can analyze media messages and
            understand their broader impact.
          </p>

          <div className="insetBox">
            <h4>Learners learn to:</h4>
            <ul className="featureList">
              {criticalThinkingPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            This approach promotes responsible and informed media engagement.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <span className="iconText">✍️</span>
            </div>
            <h3>Creating Responsible Media Content</h3>
          </div>

          <p>
            Media literacy also encourages learners to become responsible
            content creators. As individuals increasingly share content through
            social media and digital platforms, understanding ethical
            communication becomes essential.
          </p>

          <div className="insetBox">
            <h4>Learners develop skills in:</h4>
            <ul className="featureList">
              {contentCreationPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            These skills help learners contribute constructively to the digital
            media environment.
          </p>
        </article>
      </section>

      <section className="highlightSection">
        <div className="highlightGrid">
          <div className="highlightTextCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <span className="iconText">🌐</span>
              </div>
              <h3>Preparing Learners for the Digital Information Age</h3>
            </div>

            <p>
              Media literacy is essential for students, professionals, and
              citizens who must navigate complex information environments. By
              strengthening media literacy skills, learners become better
              equipped to analyze information, engage in meaningful discussions,
              and make informed decisions.
            </p>

            <p>
              Institutions can use NeuroLXP to implement media literacy
              programs that support critical thinking, digital citizenship, and
              responsible information engagement.
            </p>

            <div className="miniFeatures">
              <div className="miniFeature">
                <span className="iconText">💬</span>
                <span>Meaningful discussions</span>
              </div>
              <div className="miniFeature">
                <span className="iconText">🛡️</span>
                <span>Digital citizenship</span>
              </div>
              <div className="miniFeature">
                <span className="iconText">📘</span>
                <span>Responsible engagement</span>
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

      <section className="highlightSection">
        <div className="highlightTextCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <span className="iconText">🚀</span>
            </div>
            <h3>NeuroLXP — Building Media Literacy for a Connected World</h3>
          </div>

          <p>
            With structured learning modules, interactive activities, and
            real-world examples, NeuroLXP helps learners develop the critical
            media literacy skills needed to understand, evaluate, and
            responsibly engage with media in the digital age.
          </p>
        </div>
      </section>
    </main>
  );
}