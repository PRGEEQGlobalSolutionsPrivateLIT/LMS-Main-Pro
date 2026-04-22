"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

type MenuKey =
  | "features"
  | "usecases"
  | "customers"
  | "resources"
  | "neurolabs"
  | "neurolxp";

type SubmenuKey =
  | "features-learning"
  | "features-augmentation"
  | "features-ecosystem"
  | "features-addons"
  | "usecases-challenge"
  | "customers-industries"
  | "customers-solutions";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<SubmenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const isMobileView = () =>
    typeof window !== "undefined" && window.innerWidth <= 900;

  const handleTopMenuEnter = (menu: MenuKey) => {
    if (!isMobileView()) {
      setActiveMenu(menu);
    }
  };

  const handleTopMenuLeave = () => {
    if (!isMobileView()) {
      setActiveMenu(null);
      setActiveSubmenu(null);
    }
  };

  const handleTopMenuClick = (menu: MenuKey) => {
    if (isMobileView()) {
      setActiveMenu((prev) => (prev === menu ? null : menu));
      setActiveSubmenu(null);
    }
  };

  const handleSubmenuEnter = (submenu: SubmenuKey) => {
    if (!isMobileView()) {
      setActiveSubmenu(submenu);
    }
  };

  const handleSubmenuClick = (
    submenu: SubmenuKey,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (isMobileView()) {
      e.stopPropagation();
      setActiveSubmenu((prev) => (prev === submenu ? null : submenu));
    }
  };

  return (
    <header className="header">
     <div className="logo" onClick={() => router.push("/")}>
  <Image
    src="/PRGEEQ-Logo.png"
    alt="PRGeeQ Logo"
    width={160}
    height={40}
    priority
  />
</div>

      <div className="menu-icon" onClick={() => setMobileOpen(!mobileOpen)}>
        ☰
      </div>

      <nav className={`nav ${mobileOpen ? "mobile-open" : ""}`}>
        <div className="nav-item" onClick={() => router.push("/genZgalaxy")}>
  genZgalaxy
</div>

         <div
          className="nav-item dropdown-parent"
          onClick={() => handleTopMenuClick("neurolxp")}
          onMouseEnter={() => handleTopMenuEnter("neurolxp")}
          onMouseLeave={handleTopMenuLeave}
        >
          NeuroLXP 2.10
          <span className={`arrow ${activeMenu === "neurolxp" ? "rotate" : ""}`}>
            ▾
          </span>

          <div
            className={`dropdown ${activeMenu === "neurolxp" ? "show" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="submenu-item">Digital Literacy</div>
            <div className="nav-item" onClick={() => router.push("/information-literacy")}>Information Literacy</div>
            <div className="submenu-item">Media Literacy</div>
            <div className="submenu-item">Financial Literacy</div>
          </div>
        </div>



        <div
          className="nav-item dropdown-parent"
          onClick={() => handleTopMenuClick("neurolabs")}
          onMouseEnter={() => handleTopMenuEnter("neurolabs")}
          onMouseLeave={handleTopMenuLeave}
        >
          NeuroLabs
          <span className={`arrow ${activeMenu === "neurolabs" ? "rotate" : ""}`}>
            ▾
          </span>

          <div
            className={`dropdown ${activeMenu === "neurolabs" ? "show" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="submenu-item">Coding Labs</div>
            <div className="submenu-item">Coding Bootcamps</div>
            <div className="submenu-item">Coding Challenges</div>
            <div className="submenu-item">Coding Resources</div>
          </div>
        </div>

         <div
          className="nav-item dropdown-parent"
          onClick={() => handleTopMenuClick("customers")}
          onMouseEnter={() => handleTopMenuEnter("customers")}
          onMouseLeave={handleTopMenuLeave}
        >
          Our Customers
          <span className={`arrow ${activeMenu === "customers" ? "rotate" : ""}`}>
            ▾
          </span>

          <div
            className={`dropdown ${activeMenu === "customers" ? "show" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`dropdown-item submenu-parent ${
                activeSubmenu === "customers-industries"
                  ? "mobile-submenu-open"
                  : ""
              }`}
              onMouseEnter={() => handleSubmenuEnter("customers-industries")}
              onClick={(e) => handleSubmenuClick("customers-industries", e)}
            >
              <div className="dropdown-item-label">
                <span>Industries we Serve</span>
                <span className="submenu-caret">
                  {isMobileView() && activeSubmenu === "customers-industries"
                    ? "▹"
                    : "▹"}
                </span>
              </div>
              <div className="submenu">
                <div className="submenu-item">Higher Education</div>
                <div className="submenu-item">BFSI</div>
                <div className="submenu-item">Retail &amp; Healthcare</div>
                <div className="submenu-item">States</div>
                <div className="submenu-item">NonProfit</div>
              </div>
            </div>

            <div
              className={`dropdown-item submenu-parent ${
                activeSubmenu === "customers-solutions"
                  ? "mobile-submenu-open"
                  : ""
              }`}
              onMouseEnter={() => handleSubmenuEnter("customers-solutions")}
              onClick={(e) => handleSubmenuClick("customers-solutions", e)}
            >
              <div className="dropdown-item-label">
                <span>Solutions for</span>
                <span className="submenu-caret">
                  {isMobileView() && activeSubmenu === "customers-solutions"
                    ? "▹"
                    : "▹"}
                </span>
              </div>
              <div className="submenu">
                <div className="submenu-item">Corporate Training</div>
                <div className="submenu-item">E-Learning</div>
                <div className="submenu-item">Education</div>
                <div className="submenu-item">Government</div>
                <div className="submenu-item">Training Management</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="nav-item dropdown-parent"
          onClick={() => handleTopMenuClick("features")}
          onMouseEnter={() => handleTopMenuEnter("features")}
          onMouseLeave={handleTopMenuLeave}
        >
          Features
          <span className={`arrow ${activeMenu === "features" ? "rotate" : ""}`}>
            ▾
          </span>

          <div
            className={`dropdown ${activeMenu === "features" ? "show" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`dropdown-item submenu-parent ${
                activeSubmenu === "features-learning" ? "mobile-submenu-open" : ""
              }`}
              onMouseEnter={() => handleSubmenuEnter("features-learning")}
              onClick={(e) => handleSubmenuClick("features-learning", e)}
            >
              <div className="dropdown-item-label">
                <span>Learning</span>
                <span className="submenu-caret">
                  {isMobileView() && activeSubmenu === "features-learning"
                    ? "▹"
                    : "▹"}
                </span>
              </div>
              <div className="submenu">
                <div className="submenu-item">Learning Style Analysis</div>
                <div className="submenu-item">Goal Setting &amp; Planning</div>
                <div className="submenu-item" onClick={() => router.push("/learning-path")} > Learning Paths </div>
                <div className="submenu-item">Personalization</div>
                <div className="submenu-item">Progress Tracking</div>
              </div>
            </div>

            <div
              className={`dropdown-item submenu-parent ${
                activeSubmenu === "features-augmentation"
                  ? "mobile-submenu-open"
                  : ""
              }`}
              onMouseEnter={() => handleSubmenuEnter("features-augmentation")}
              onClick={(e) => handleSubmenuClick("features-augmentation", e)}
            >
              <div className="dropdown-item-label">
                <span>Augmentation</span>
                <span className="submenu-caret">
                  {isMobileView() && activeSubmenu === "features-augmentation"
                    ? "▹"
                    : "▹"}
                </span>
              </div>
              <div className="submenu">
                <div className="submenu-item">Gamification</div>
                <div className="submenu-item">Interactivities</div>
                <div className="submenu-item">Social Learning</div>
                <div className="submenu-item">Content Curation</div>
                <div className="submenu-item">Content Formats</div>
              </div>
            </div>

            <div
              className={`dropdown-item submenu-parent ${
                activeSubmenu === "features-ecosystem" ? "mobile-submenu-open" : ""
              }`}
              onMouseEnter={() => handleSubmenuEnter("features-ecosystem")}
              onClick={(e) => handleSubmenuClick("features-ecosystem", e)}
            >
              <div className="dropdown-item-label">
                <span>Learning Eco-System</span>
                <span className="submenu-caret">
                  {isMobileView() && activeSubmenu === "features-ecosystem"
                    ? "▹"
                    : "▹"}
                </span>
              </div>
              <div className="submenu">
                <div className="submenu-item">Assessments</div>
                <div className="submenu-item">Analytics &amp; Reporting</div>
                <div className="submenu-item">Career Paths</div>
                <div className="submenu-item">
                  Career &amp; Skills Development
                </div>
                <div className="submenu-item">Compliances</div>
              </div>
            </div>

            <div
              className={`dropdown-item submenu-parent ${
                activeSubmenu === "features-addons" ? "mobile-submenu-open" : ""
              }`}
              onMouseEnter={() => handleSubmenuEnter("features-addons")}
              onClick={(e) => handleSubmenuClick("features-addons", e)}
            >
              <div className="dropdown-item-label">
                <span>Add-On Modules</span>
                <span className="submenu-caret">
                  {isMobileView() && activeSubmenu === "features-addons"
                    ? "▹"
                    : "▹"}
                </span>
              </div>
              <div className="submenu">
                <div className="submenu-item">
                  Content Creation &amp; Management
                </div>
                <div className="submenu-item">User Support &amp; Community</div>
                <div className="submenu-item">Security &amp; Compliances</div>
                <div className="submenu-item">
                  Accessibility &amp; Inclusivity
                </div>
                <div className="submenu-item">Mobile Learning</div>
                <div className="submenu-item">Interconnectivity</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="nav-item dropdown-parent"
          onClick={() => handleTopMenuClick("usecases")}
          onMouseEnter={() => handleTopMenuEnter("usecases")}
          onMouseLeave={handleTopMenuLeave}
        >
          Use Cases
          <span className={`arrow ${activeMenu === "usecases" ? "rotate" : ""}`}>
            ▾
          </span>

          <div
            className={`dropdown ${activeMenu === "usecases" ? "show" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`dropdown-item submenu-parent ${
                activeSubmenu === "usecases-challenge" ? "mobile-submenu-open" : ""
              }`}
              onMouseEnter={() => handleSubmenuEnter("usecases-challenge")}
              onClick={(e) => handleSubmenuClick("usecases-challenge", e)}
            >
              <div className="dropdown-item-label">
                <span>By Challenge</span>
                <span className="submenu-caret">
                  {isMobileView() && activeSubmenu === "usecases-challenge"
                    ? "▹"
                    : "▹"}
                </span>
              </div>
              <div className="submenu">
                <div className="submenu-item">Blended Learning</div>
                <div className="submenu-item">Customer Training</div>
                <div className="submenu-item">Employee Induction</div>
                <div className="submenu-item">Standards Training</div>
                <div className="submenu-item">Extended Enterprise</div>
              </div>
            </div>
          </div>
        </div>

      

        <div
          className="nav-item dropdown-parent"
          onClick={() => handleTopMenuClick("resources")}
          onMouseEnter={() => handleTopMenuEnter("resources")}
          onMouseLeave={handleTopMenuLeave}
        >
          Resources
          <span className={`arrow ${activeMenu === "resources" ? "rotate" : ""}`}>
            ▾
          </span>

          <div
            className={`dropdown ${activeMenu === "resources" ? "show" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="submenu-item">Events</div>
            <div className="submenu-item">Media Presence</div>
            <div className="submenu-item">White Papers</div>
            <div className="submenu-item">Blogs</div>
            <div className="submenu-item">Help, Support &amp; FAQs</div>
          </div>
        </div>


      <button className="signin" onClick={() => router.push("/auth/signin")}>
  SignIn Help
</button>
      </nav>
    </header>
  );
}
