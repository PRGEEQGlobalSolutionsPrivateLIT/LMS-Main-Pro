import Image from "next/image";
import "./genZgalaxy.css";

export default function GenZGalaxyPage() {
  return (
    <main className="genzgalaxy-page genz-page">
      <section className="hero-section">
        <div className="hero-content neu-card">
          <div className="hero-text">
            <span className="eyebrow neu-inset">NeuroLXP Product</span>
            <h1>GenZgalaxy</h1>
            <h2>A Learning Universe Designed for the Gen Z Generation</h2>
            <p>
              <strong>GenZgalaxy by NeuroLXP</strong> is a dynamic learning ecosystem created specifically for the <strong>digital-native generation</strong>. Today’s Gen Z learners grow up in a world of smartphones, social media, interactive apps, and instant information. Traditional learning environments often struggle to match their expectations for speed, engagement, and interactivity.
            </p>
            <p>
              GenZgalaxy reimagines learning as an <strong>immersive, interactive, and highly engaging digital experience</strong> that aligns with how Gen Z prefers to explore knowledge, build skills, and connect with learning communities.
            </p>

            <div className="hero-actions">
              <button className="neu-btn">Explore Platform</button>
              <button className="neu-btn neu-btn-secondary">Learn More</button>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="hero-image-card neu-card-inner">
              <Image
                src="/dummy-genzgalaxy.jpg"
                alt="GenZgalaxy learning illustration"
                width={700}
                height={520}
                className="hero-image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="intro-grid">
        <article className="info-card neu-card">
          <h3>Learning Designed for Digital Natives</h3>
          <p>
            Gen Z learners are naturally comfortable with technology and expect learning environments that feel intuitive, interactive, and visually engaging.
          </p>
          <p>GenZgalaxy brings together modern learning approaches such as:</p>
          <ul>
            <li>Gamified learning experiences</li>
            <li>Interactive digital content</li>
            <li>Microlearning modules</li>
            <li>Collaborative learning communities</li>
            <li>Mobile-first learning environments</li>
          </ul>
          <p>
            This approach transforms learning from a passive activity into an
            <strong> engaging and exploratory experience.</strong>
          </p>
        </article>

        <article className="info-card neu-card">
          <h3>Interactive and Immersive Learning Experiences</h3>
          <p>
            GenZgalaxy integrates interactive learning elements that keep
            learners actively involved in the learning journey.
          </p>
          <p>Learners can engage through:</p>
          <ul>
            <li>Gamified challenges and rewards</li>
            <li>Interactive simulations and quizzes</li>
            <li>Creative problem-solving activities</li>
            <li>Collaborative discussions and peer learning</li>
          </ul>
          <p>
            These experiences make learning <strong> more engaging, memorable, and
            enjoyable.</strong>
          </p>
        </article>
      </section>

      <section className="feature-section">
        <div className="section-heading">
          <span className="eyebrow neu-inset">Adaptive Experience</span>
          <h2>Personalized Learning Journeys</h2>
        </div>

        <div className="feature-layout">
          <div className="feature-main neu-card">
            <p>
              Every Gen Z learner has unique interests, learning styles, and
              career goals. GenZgalaxy leverages <strong> AI-powered personalization</strong> to
              create adaptive learning journeys that evolve with each learner.
            </p>
            <p>The platform can recommend:</p>
            <div className="chip-grid">
              <span className="neu-chip">Skill development pathways</span>
              <span className="neu-chip">Relevant learning resources</span>
              <span className="neu-chip">Practice challenges and assessments</span>
              <span className="neu-chip">Career-focused learning modules</span>
            </div>
            <p>
              This ensures that learning remains <strong> relevant, motivating, and
              aligned with individual aspirations.</strong>
            </p>
          </div>

          <div className="feature-side">
            <div className="mini-card neu-card">
              <img
                src="https://via.placeholder.com/600x350?text=GenZgalaxy+Learning+Experience"
                alt="GenZgalaxy Learning"
                className="feature-placeholder"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section neu-card">
        <div className="section-heading">
          <span className="eyebrow neu-inset">Outcome Driven</span>
          <h2>Building Skills for the Future</h2>
        </div>

        <p className="section-copy">
          GenZgalaxy focuses on developing <strong> future-ready skills</strong> that Gen Z
          learners need to thrive in modern careers and digital environments.
        </p>

        <div className="skills-grid">
          <div className="skill-box neu-card-inner">
            <h4>Digital and technological literacy</h4>
          </div>
          <div className="skill-box neu-card-inner">
            <h4>Creative problem solving</h4>
          </div>
          <div className="skill-box neu-card-inner">
            <h4>Critical thinking and innovation</h4>
          </div>
          <div className="skill-box neu-card-inner">
            <h4>Communication and collaboration skills</h4>
          </div>
          <div className="skill-box neu-card-inner">
            <h4>Career-oriented technical skills</h4>
          </div>
        </div>

        <p className="section-copy">
          By focusing on real-world competencies, GenZgalaxy prepares learners
          for the <strong>demands of the modern workforce.</strong>
        </p>
      </section>

      <section className="community-section">
        <div className="community-card neu-card">
          <div className="community-left">
            <span className="eyebrow neu-inset">Community Powered</span>
            <h2>A Community-Driven Learning Ecosystem</h2>
            <p>
              Gen Z values collaboration, social interaction, and shared
              experiences. GenZgalaxy encourages learners to connect through <strong>
              learning communities, discussion forums, and collaborative
              activities.</strong>
            </p>
            <p>Learning becomes a social and collective experience.</p>
          </div>

          <div className="community-points">
            <div className="point neu-card-inner">Share ideas and insights</div>
            <div className="point neu-card-inner">Learn from peers and mentors</div>
            <div className="point neu-card-inner">
              Collaborate on projects and challenges
            </div>
            <div className="point neu-card-inner">
              Participate in knowledge-driven communities
            </div>
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-card neu-card">
          <span className="eyebrow neu-inset">GenZgalaxy</span>
          <h2>Where Learning Meets Exploration</h2>
          <p>
            GenZgalaxy transforms learning into an engaging journey of
            discovery, creativity, and growth. By combining <strong>interactive
            technology, personalized learning, and community-driven engagement,</strong>
            NeuroLXP empowers the next generation of learners to explore
            knowledge, build skills, and shape their future.
          </p>
          <p className="closing-line">
            <strong>
              GenZgalaxy by NeuroLXP — A Universe of Learning for the Next
              Generation.
            </strong>
          </p>
        </div>
      </section>
    </main>
  );
}
