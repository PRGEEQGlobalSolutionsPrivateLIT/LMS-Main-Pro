import {
  FaNetworkWired,
  FaUsers,
  FaGlobe,
  FaHandshake,
  FaCertificate,
  FaChartLine,
  FaBoxes,
  FaStore,
  FaUserShield,
  FaProjectDiagram,
} from "react-icons/fa";
import { MdOutlineAnalytics, MdOutlineSchool } from "react-icons/md";
import "./ExtendedEnterpriseLearning.css";

export default function Page() {
  return (
    <main className="enterprise-page">
      <section className="enterprise-hero">
        <div className="enterprise-hero-content">
          <span className="enterprise-badge">NeuroLXP Extended Enterprise</span>

          <h1>Extended Enterprise Learning</h1>

          <h2>Expanding Learning Beyond Organizational Boundaries</h2>

          <p>
            Modern organizations no longer train only their internal employees.
            Businesses today must educate partners, distributors, vendors, and
            customers to ensure consistent knowledge, product understanding, and
            operational excellence. NeuroLXP enables Extended Enterprise
            Learning, allowing organizations to deliver structured training
            programs beyond their internal workforce.
          </p>

          <p>
            With a scalable Extended Enterprise Learning Management System
            (LMS), NeuroLXP helps organizations build a connected learning
            ecosystem that supports everyone involved in the value chain.
          </p>
        </div>

        <div className="enterprise-visual">
          <div className="network-center">
            <FaNetworkWired />
            <span>NeuroLXP</span>
          </div>

          <div className="network-items">
            <div>
              <FaHandshake />
              <span>Partners</span>
            </div>
            <div>
              <FaStore />
              <span>Distributors</span>
            </div>
            <div>
              <FaBoxes />
              <span>Vendors</span>
            </div>
            <div>
              <FaUsers />
              <span>Customers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="enterprise-intro">
        <h2>A connected learning ecosystem for the full value chain</h2>
        <p>
          NeuroLXP helps organizations deliver consistent, scalable, and
          measurable training to external stakeholders who represent, support,
          sell, or use their products and services.
        </p>
      </section>

      <section className="enterprise-challenges">
        <article className="enterprise-row">
          <div className="enterprise-icon">
            <FaUsers />
          </div>

          <div>
            <h2>The Challenge: Inconsistent Knowledge Across Partners and Vendors</h2>
            <p>
              Partners, resellers, and vendors often interact directly with
              customers, yet they may not always have the latest knowledge about
              products, services, or company processes.
            </p>

            <h3>How NeuroLXP Solves It</h3>
            <p>
              NeuroLXP enables organizations to deliver centralized partner and
              vendor training programs, ensuring that external stakeholders
              receive consistent and up-to-date learning materials. This helps
              maintain uniform standards across the entire business network.
            </p>
          </div>
        </article>

        <article className="enterprise-row">
          <div className="enterprise-icon">
            <FaGlobe />
          </div>

          <div>
            <h2>The Challenge: Training Distributed Global Networks</h2>
            <p>
              Organizations with global partner ecosystems often struggle to
              provide consistent training across different regions and locations.
            </p>

            <h3>How NeuroLXP Solves It</h3>
            <p>
              NeuroLXP supports scalable digital learning delivery, enabling
              organizations to train partners, resellers, and distributors
              worldwide through a single platform. Online modules,
              certifications, and product training programs can be accessed
              anytime from anywhere.
            </p>
          </div>
        </article>

        <article className="enterprise-row">
          <div className="enterprise-icon">
            <FaUserShield />
          </div>

          <div>
            <h2>The Challenge: Ensuring Product Knowledge and Brand Consistency</h2>
            <p>
              External stakeholders play a critical role in representing the
              organization’s products and services. Without proper training, this
              can lead to inconsistent messaging or incorrect product usage.
            </p>

            <h3>How NeuroLXP Solves It</h3>
            <p>
              Through structured product training modules, certification
              programs, and knowledge assessments, NeuroLXP ensures that
              partners and distributors fully understand product capabilities,
              brand guidelines, and best practices.
            </p>
          </div>
        </article>

        <article className="enterprise-row">
          <div className="enterprise-icon">
            <MdOutlineAnalytics />
          </div>

          <div>
            <h2>The Challenge: Tracking Learning Progress Across External Networks</h2>
            <p>
              Managing training for large partner ecosystems can make it
              difficult to track who has completed training or earned
              certifications.
            </p>

            <h3>How NeuroLXP Solves It</h3>
            <p>
              NeuroLXP provides advanced analytics and reporting dashboards that
              allow organizations to monitor partner learning progress,
              certification status, and training completion rates. These insights
              help ensure compliance with training requirements.
            </p>
          </div>
        </article>
      </section>

      <section className="enterprise-benefits">
        <div className="benefits-heading">
          <span className="enterprise-badge">Benefits</span>
          <h2>Benefits of Extended Enterprise Learning with NeuroLXP</h2>
          <p>
            Organizations using NeuroLXP for extended enterprise training can:
          </p>
        </div>

        <div className="benefits-grid">
          <div>
            <FaHandshake />
            <span>Deliver consistent training to partners, vendors, and distributors</span>
          </div>

          <div>
            <FaProjectDiagram />
            <span>Improve product knowledge across the business ecosystem</span>
          </div>

          <div>
            <FaUserShield />
            <span>Strengthen brand representation and customer experience</span>
          </div>

          <div>
            <FaGlobe />
            <span>Scale training programs globally with ease</span>
          </div>

          <div>
            <FaCertificate />
            <span>Monitor certification and training compliance</span>
          </div>
        </div>

        <p className="benefits-note">
          This approach creates a unified learning environment that strengthens
          collaboration and performance across the entire enterprise network.
        </p>
      </section>

      <section className="enterprise-final">
        <div className="final-visual">
          <MdOutlineSchool />
          <span>Image Placeholder</span>
        </div>

        <div>
          <span className="enterprise-badge">Extended Learning Network</span>

          <h2>NeuroLXP — Empowering the Extended Enterprise Through Learning</h2>

          <p>
            With powerful training tools, scalable learning delivery, and
            advanced analytics, NeuroLXP helps organizations extend their
            learning ecosystem beyond internal teams and empower their entire
            enterprise network with knowledge and expertise.
          </p>
        </div>
      </section>
    </main>
  );
}