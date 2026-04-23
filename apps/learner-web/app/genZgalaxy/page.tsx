:root {
  --bg: #e6e6ee;
  --surface: #e6e6ee;
  --surface-soft: #edf1f7;
  --text: #4f5563;
  --text-light: #6b7280;
  --heading: #2f3a4d;
  --primary: #3b82f6;
  --primary-dark: #2563eb;
  --shadow-light: #ffffff;
  --shadow-dark: #c8cad1;
  --radius-xl: 30px;
  --radius-lg: 22px;
  --radius-md: 16px;
  --radius-sm: 12px;
  --border-soft: rgba(255, 255, 255, 0.55);
  --border-dark: rgba(200, 202, 209, 0.32);
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  background: var(--bg);
  color: var(--text);
  font-family: "Segoe UI", Arial, sans-serif;
}

body {
  overflow-x: hidden;
}

.genzgalaxy-page {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 34px 0 70px;
  background: var(--bg);
  color: var(--text);
}

.genzgalaxy-page section {
  margin-bottom: 42px;
}

.genzgalaxy-page h1,
.genzgalaxy-page h2,
.genzgalaxy-page h3,
.genzgalaxy-page h4 {
  margin: 0;
  color: var(--heading);
}

.genzgalaxy-page p {
  margin: 0 0 14px;
  line-height: 1.8;
  color: var(--text);
}

.genzgalaxy-page strong {
  color: var(--heading);
}

.genzgalaxy-page ul {
  margin: 16px 0 18px;
  padding: 0;
  list-style: none;
}

/* text sections without big cards */
.genzgalaxy-page .neu-card {
  background: transparent;
  border: none;
  box-shadow: none;
  border-radius: 0;
}

.genzgalaxy-page .neu-card-inner {
  background: var(--surface-soft);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  box-shadow:
    inset 4px 4px 10px rgba(200, 202, 209, 0.42),
    inset -4px -4px 10px rgba(255, 255, 255, 0.88);
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.genzgalaxy-page .neu-card-inner:hover {
  transform: translateY(-1px);
  box-shadow:
    inset 5px 5px 12px rgba(200, 202, 209, 0.46),
    inset -5px -5px 12px rgba(255, 255, 255, 0.92);
}

.genzgalaxy-page .neu-inset {
  background: var(--surface-soft);
  border: 1px solid var(--border-soft);
  box-shadow:
    inset 4px 4px 10px rgba(200, 202, 209, 0.46),
    inset -4px -4px 10px rgba(255, 255, 255, 0.9);
  transition:
    box-shadow 0.18s ease,
    transform 0.18s ease,
    color 0.18s ease;
}

.genzgalaxy-page .eyebrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 9px 16px;
  margin-bottom: 18px;
  border-radius: 999px;
  color: var(--primary);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  cursor: pointer;
}

.genzgalaxy-page .eyebrow:hover {
  box-shadow:
    inset 5px 5px 12px rgba(200, 202, 209, 0.52),
    inset -5px -5px 12px rgba(255, 255, 255, 0.96);
  transform: translateY(0);
}

.genzgalaxy-page .eyebrow:active {
  box-shadow:
    inset 6px 6px 13px rgba(200, 202, 209, 0.62),
    inset -6px -6px 13px rgba(255, 255, 255, 1);
}

/* hero */
.genzgalaxy-page .hero-content {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 34px;
  align-items: center;
}

.genzgalaxy-page .hero-text h1 {
  font-size: clamp(2.5rem, 4.2vw, 4.1rem);
  line-height: 1.02;
  margin-bottom: 12px;
}

.genzgalaxy-page .hero-text h2 {
  font-size: clamp(1.08rem, 1.9vw, 1.55rem);
  line-height: 1.42;
  font-weight: 700;
  margin-bottom: 18px;
  color: #3d4b5e;
}

.genzgalaxy-page .hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 24px;
}

/* exact neumorphic button behavior like screenshot */
.genzgalaxy-page .neu-btn {
  appearance: none;
  -webkit-appearance: none;
  min-width: 150px;
  padding: 14px 24px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  outline: none;
  background: var(--surface);
  color: var(--heading);
  font-size: 0.96rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.01em;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  transform: translateY(0);
  transition:
    box-shadow 0.18s ease,
    transform 0.18s ease,
    color 0.18s ease,
    background-color 0.18s ease,
    border-color 0.18s ease;

  /* default raised */
  box-shadow:
    6px 6px 12px rgba(200, 202, 209, 0.9),
    -6px -6px 12px rgba(255, 255, 255, 1),
    1px 1px 0 rgba(255, 255, 255, 0.75) inset,
    -1px -1px 0 rgba(200, 202, 209, 0.18) inset;
}

/* hover = go inward */
.genzgalaxy-page .neu-btn:hover {
  transform: translateY(0);
  box-shadow:
    inset 5px 5px 10px rgba(200, 202, 209, 0.82),
    inset -5px -5px 10px rgba(255, 255, 255, 0.98),
    1px 1px 1px rgba(255, 255, 255, 0.25);
}

/* click = deeper inward */
.genzgalaxy-page .neu-btn:active {
  transform: scale(0.985);
  box-shadow:
    inset 7px 7px 14px rgba(200, 202, 209, 0.95),
    inset -7px -7px 14px rgba(255, 255, 255, 1),
    1px 1px 1px rgba(255, 255, 255, 0.15);
}

/* keyboard */
.genzgalaxy-page .neu-btn:focus-visible {
  box-shadow:
    inset 5px 5px 10px rgba(200, 202, 209, 0.82),
    inset -5px -5px 10px rgba(255, 255, 255, 0.98),
    0 0 0 3px rgba(59, 130, 246, 0.14);
}

.genzgalaxy-page .neu-btn-secondary {
  color: var(--primary);
}

.genzgalaxy-page .neu-btn-secondary:hover {
  color: var(--primary-dark);
}

/* image */
.genzgalaxy-page .hero-image-wrap {
  min-width: 0;
}

.genzgalaxy-page .hero-image-card {
  padding: 16px;
  background: var(--surface);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-xl);
  box-shadow:
    10px 10px 22px var(--shadow-dark),
    -10px -10px 22px var(--shadow-light);
}

.genzgalaxy-page .hero-image {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 18px;
  object-fit: cover;
}

/* intro */
.genzgalaxy-page .intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 34px;
}

.genzgalaxy-page .info-card {
  padding: 0;
}

.genzgalaxy-page .info-card h3 {
  font-size: clamp(1.35rem, 2vw, 1.8rem);
  line-height: 1.35;
  margin-bottom: 16px;
}

.genzgalaxy-page .info-card li {
  position: relative;
  padding-left: 22px;
  line-height: 1.72;
  color: var(--text);
  margin-bottom: 10px;
}

.genzgalaxy-page .info-card li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 10px;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--primary);
  box-shadow:
    2px 2px 5px rgba(200, 202, 209, 0.46),
    -2px -2px 5px rgba(255, 255, 255, 0.76);
}

/* heading */
.genzgalaxy-page .section-heading {
  margin-bottom: 18px;
}

.genzgalaxy-page .section-heading h2 {
  font-size: clamp(2rem, 3vw, 2.8rem);
  line-height: 1.15;
}

/* feature */
.genzgalaxy-page .feature-layout {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 28px;
  align-items: start;
}

.genzgalaxy-page .feature-main {
  padding: 0;
}

.genzgalaxy-page .chip-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 16px 0 18px;
}

.genzgalaxy-page .neu-chip {
  display: inline-flex;
  align-items: center;
  padding: 11px 16px;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid rgba(255, 255, 255, 0.72);
  box-shadow:
    5px 5px 10px rgba(200, 202, 209, 0.72),
    -5px -5px 10px rgba(255, 255, 255, 0.94);
  color: var(--heading);
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    box-shadow 0.18s ease,
    transform 0.18s ease;
}

.genzgalaxy-page .neu-chip:hover {
  box-shadow:
    inset 4px 4px 8px rgba(200, 202, 209, 0.76),
    inset -4px -4px 8px rgba(255, 255, 255, 0.96);
}

.genzgalaxy-page .neu-chip:active {
  transform: scale(0.985);
  box-shadow:
    inset 6px 6px 12px rgba(200, 202, 209, 0.88),
    inset -6px -6px 12px rgba(255, 255, 255, 1);
}

.genzgalaxy-page .feature-side {
  min-width: 0;
}

.genzgalaxy-page .mini-card {
  padding: 16px;
  background: var(--surface);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-xl);
  box-shadow:
    10px 10px 22px var(--shadow-dark),
    -10px -10px 22px var(--shadow-light);
}

.genzgalaxy-page .feature-placeholder {
  display: block;
  width: 100%;
  min-height: 280px;
  height: auto;
  object-fit: cover;
  border-radius: 18px;
}

/* skills */
.genzgalaxy-page .skills-section {
  padding: 0;
}

.genzgalaxy-page .section-copy {
  max-width: 860px;
  margin-bottom: 18px;
}

.genzgalaxy-page .skills-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin: 20px 0;
}

.genzgalaxy-page .skill-box {
  min-height: 130px;
  padding: 20px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.genzgalaxy-page .skill-box h4 {
  font-size: 1rem;
  line-height: 1.55;
  color: var(--heading);
  font-weight: 700;
}

/* community */
.genzgalaxy-page .community-card {
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 0.95fr;
  gap: 28px;
  align-items: start;
}

.genzgalaxy-page .community-left h2 {
  font-size: clamp(2rem, 3vw, 2.7rem);
  line-height: 1.18;
  margin-bottom: 16px;
}

.genzgalaxy-page .community-points {
  display: grid;
  gap: 14px;
}

.genzgalaxy-page .point {
  padding: 18px 20px;
  font-weight: 600;
  color: var(--heading);
  line-height: 1.55;
  cursor: pointer;
  transition:
    box-shadow 0.18s ease,
    transform 0.18s ease;
}

.genzgalaxy-page .point:hover {
  box-shadow:
    inset 5px 5px 10px rgba(200, 202, 209, 0.76),
    inset -5px -5px 10px rgba(255, 255, 255, 0.96);
}

.genzgalaxy-page .point:active {
  transform: scale(0.99);
  box-shadow:
    inset 7px 7px 14px rgba(200, 202, 209, 0.9),
    inset -7px -7px 14px rgba(255, 255, 255, 1);
}

/* closing */
.genzgalaxy-page .closing-card {
  padding: 0;
}

.genzgalaxy-page .closing-card h2 {
  font-size: clamp(2rem, 3vw, 2.8rem);
  line-height: 1.15;
  margin-bottom: 16px;
}

.genzgalaxy-page .closing-line {
  margin-top: 10px;
  font-size: 1.02rem;
}

/* responsive */
@media (max-width: 1100px) {
  .genzgalaxy-page .hero-content,
  .genzgalaxy-page .feature-layout,
  .genzgalaxy-page .community-card,
  .genzgalaxy-page .intro-grid {
    grid-template-columns: 1fr;
  }

  .genzgalaxy-page .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .genzgalaxy-page {
    width: min(100%, calc(100% - 20px));
    padding: 20px 0 44px;
  }

  .genzgalaxy-page section {
    margin-bottom: 28px;
  }

  .genzgalaxy-page .hero-text h1 {
    font-size: 2.2rem;
  }

  .genzgalaxy-page .hero-text h2,
  .genzgalaxy-page .section-heading h2,
  .genzgalaxy-page .community-left h2,
  .genzgalaxy-page .closing-card h2 {
    font-size: 1.5rem;
  }

  .genzgalaxy-page .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .genzgalaxy-page .neu-btn {
    width: 100%;
    min-width: 0;
  }

  .genzgalaxy-page .skills-grid {
    grid-template-columns: 1fr;
  }

  .genzgalaxy-page .feature-placeholder {
    min-height: 220px;
  }
}
