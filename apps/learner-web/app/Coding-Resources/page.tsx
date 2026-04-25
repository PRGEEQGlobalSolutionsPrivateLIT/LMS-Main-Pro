import {
  FaBook,
  FaCode,
  FaLightbulb,
  FaProjectDiagram,
  FaTools,
  FaLaptopCode,
  FaBug,
  FaCubes,
  FaUserGraduate,
  FaBuilding,
} from "react-icons/fa";
import { MdAutoStories, MdOutlineUpdate } from "react-icons/md";
import "./CodingResources.css";

export default function Page() {
  return (
    <main className="resources-page">
      {/* HERO */}
      <section className="resources-hero">
        <div className="resources-hero-content">
          <span className="resources-badge">NeuroLabs Coding Resources</span>

          <h1>Coding Resources</h1>

          <h2>Everything You Need to Learn, Practice, and Master Coding</h2>

          <p>
            NeuroLabs Coding Resources provide learners with a rich collection of
            materials designed to support every stage of the programming journey.
            Whether you are just starting with coding fundamentals or advancing
            toward complex software development skills, NeuroLabs offers
            structured resources that help learners learn faster, practice
            effectively, and build real-world programming expertise.
          </p>

          <p>
            These resources are designed to support students, developers,
            educators, and technology professionals through accessible,
            practical, and continuously updated learning materials.
          </p>
        </div>

        <div className="resources-image">
          <FaBook />
          <span>Image Placeholder</span>
        </div>
      </section>

      {/* SECTION */}
      <section className="resources-text">
        <h2>Comprehensive Programming Learning Materials</h2>
        <p>
          NeuroLabs provides a wide range of coding resources that support both
          theoretical understanding and hands-on learning.
        </p>
      </section>

      {/* GRID */}
      <section className="resources-grid">
        <div className="resource-box">
          <FaBook />
          <p>Programming tutorials and structured learning guides</p>
        </div>

        <div className="resource-box">
          <FaProjectDiagram />
          <p>Coding examples and sample projects</p>
        </div>

        <div className="resource-box">
          <FaLightbulb />
          <p>Concept explanations for programming fundamentals</p>
        </div>

        <div className="resource-box">
          <FaCubes />
          <p>Algorithm and logic-building exercises</p>
        </div>

        <div className="resource-box">
          <FaTools />
          <p>Best practices for writing clean and efficient code</p>
        </div>
      </section>

      <section className="resources-text">
        <p>
          These materials help learners build a strong foundation in programming
          concepts.
        </p>
      </section>

      {/* SPLIT */}
      <section className="resources-split">
        <div>
          <span className="resources-badge">Practice-Oriented Learning</span>
          <h2>Practice-Oriented Coding Support</h2>

          <p>
            Learning to code requires continuous practice. NeuroLabs offers
            resources that encourage learners to actively apply their knowledge
            and improve their coding abilities.
          </p>
        </div>

        <div className="resources-list">
          <span>
            <FaCode /> Practice problems and coding exercises
          </span>
          <span>
            <FaLaptopCode /> Code snippets and reusable programming examples
          </span>
          <span>
            <MdAutoStories /> Step-by-step problem-solving guides
          </span>
          <span>
            <FaBug /> Debugging and optimization tips
          </span>
        </div>
      </section>

      <section className="resources-text">
        <p>
          These resources help learners strengthen their understanding through
          consistent practice.
        </p>
      </section>

      {/* CARDS */}
      <section className="resources-cards">
        <div className="resource-card">
          <FaCubes className="card-icon" />

          <div>
            <h2>Support for Multiple Programming Domains</h2>

            <p>
              NeuroLabs Coding Resources support learners interested in
              different areas of technology and software development.
            </p>

            <p>Learning materials may cover topics such as:</p>

            <ul>
              <li>Programming fundamentals and logic building</li>
              <li>Web development concepts</li>
              <li>Software development practices</li>
              <li>Data structures and algorithms</li>
              <li>Application development techniques</li>
            </ul>

            <p>
              This broad coverage allows learners to explore different
              technology domains and expand their technical capabilities.
            </p>
          </div>
        </div>

        <div className="resource-card">
          <MdOutlineUpdate className="card-icon" />

          <div>
            <h2>Continuous Learning for Developers</h2>

            <p>
              Technology evolves rapidly, and developers must stay updated with
              new tools, frameworks, and best practices. NeuroLabs provides
              continuously updated resources that help learners keep pace with
              evolving programming trends and industry requirements.
            </p>

            <p>
              Learners can explore new topics, deepen their expertise, and stay
              informed about modern development practices.
            </p>
          </div>
        </div>

        <div className="resource-card">
          <FaBuilding className="card-icon" />

          <div>
            <h2>Ideal for Learning, Teaching, and Skill Development</h2>

            <p>
              NeuroLabs Coding Resources support various learning environments,
              including:
            </p>

            <ul>
              <li>Universities and engineering institutions</li>
              <li>Coding bootcamps and training academies</li>
              <li>Corporate technology training programs</li>
              <li>Individual learners preparing for programming careers</li>
            </ul>

            <p>
              Educators and training providers can integrate these resources
              into structured courses to support both classroom and online
              learning.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="resources-final">
        <div className="resources-image">
          <FaUserGraduate />
          <span>Image Placeholder</span>
        </div>

        <div>
          <span className="resources-badge">Programming Growth</span>

          <h2>
            NeuroLabs Coding Resources — Supporting the Journey of Every
            Programmer
          </h2>

          <p>
            With comprehensive tutorials, practical exercises, and continuously
            evolving learning materials, NeuroLabs Coding Resources empower
            learners to build strong programming skills and succeed in the world
            of technology.
          </p>
        </div>
      </section>
    </main>
  );
}