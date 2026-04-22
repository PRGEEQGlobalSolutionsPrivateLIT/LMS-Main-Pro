'use client';

import React, { useState } from 'react';
import {
  BiFlag,
  BiGitBranch,
  BiPulse,
  BiBarChartAlt2,
  BiTrophy,
} from 'react-icons/bi';
import styles from "./learningpath.module.css";

type BenefitTab = 'learners' | 'institutions' | 'training';

interface Stage {
  tag: string;
  tagClass: string;
  circleClass: string;
  dotClass: string;
  title: string;
  subtitle: string;
  items: string[];
  closing: string;
}

interface PioneerCard {
  num: string;
  title: string;
  desc: string;
}

interface Milestone {
  iconClass: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  iconColor: string;
  title: string;
  desc: string;
}

interface BenefitItem {
  text: string;
}

interface BenefitsData {
  learners: {
    title: string;
    subtitle: string;
    items: BenefitItem[];
    closing: string;
  };
  institutions: {
    title: string;
    subtitle: string;
    items: BenefitItem[];
    closing: string;
  };
  training: {
    title: string;
    subtitle: string;
    items: BenefitItem[];
    closing: string;
  };
}

const heroProgress = [
  { label: 'foundation Stage', pct: '100%', fillClass: 'fill1' },
  { label: 'Skill Development Stage', pct: '68%', fillClass: 'fill2' },
  { label: 'Advanced Capability Stage', pct: '35%', fillClass: 'fill3' },
  { label: 'Performance Readiness Stage', pct: '10%', fillClass: 'fill4' },
];

const heroStats = [
  { num: '4', label: 'Stages' },
  { num: '12+', label: 'Modules' },
  { num: '85%', label: 'MAstery Rate' },
];

const whatIsItems: string[] = [
  'Clear learning direction and career-oriented skill development',
  'Structured knowledge progression',
  'Logical sequencing of topics and competencies',
  'Measurable learning outcomes and performance tracking',
  'Continuous learner engagement and motivation',
];

const statCards = [
  { num: '4×', label: 'Faster skill acquisition vs. unstructured learning' },
  { num: '94%', label: 'Learner completion rate on structured paths' },
  { num: '3×', label: 'Higher knowledge retention with progressive design' },
  { num: '100+', label: 'Competency frameworks integrated in NeuroLXP' },
];

const pioneerCards: PioneerCard[] = [
  {
    num: '01',
    title: 'Educational Psychology',
    desc: 'Learning paths grounded in cognitive science and how humans truly absorb and retain knowledge over time.',
  },
  {
    num: '02',
    title: 'Competency-Based Frameworks',
    desc: 'Every module aligns to measurable competencies and industry-recognized skill benchmarks.',
  },
  {
    num: '03',
    title: 'Progressive Skill Development Models',
    desc: 'Skills are layered progressively — each stage builds naturally upon the last for deep mastery.',
  },
  {
    num: '04',
    title: 'Real-World Capability Building',
    desc: 'Learning outcomes translate directly into professional, career-ready performance and confidence.',
  }
];

const designedUsing: string[] = [
  'Cognitive learning science',
  'Structured knowledge architecture',
  'Competency and skills frameworks',
  'Industry-aligned learning progression models',
];

const stages: Stage[] = [
  {
    tag: 'Stage 01',
    tagClass: 'tagColor1',
    circleClass: 'circle1',
    dotClass: 'dot1',
    title: 'Foundation Stage',
    subtitle: 'Build Core Knowledge and Conceptual Clarity',
    items: [
      'Core principles and essential knowledge',
      'Fundamental concepts and frameworks',
      'Foundational learning modules',
    ],
    closing: 'This stage prepares learners for advanced skill development and deeper learning.',
  },
  {
    tag: 'Stage 02',
    tagClass: 'tagColor2',
    circleClass: 'circle2',
    dotClass: 'dot2',
    title: 'Skill Development Stage',
    subtitle: 'Transform Knowledge into Practical Skills',
    items: [
      'Practical learning exercises',
      'Analytical thinking development',
      'Guided problem-solving activities',
    ],
    closing: 'Learners start building real-world competencies and professional capabilities.',
  },
  {
    tag: 'Stage 03',
    tagClass: 'tagColor3',
    circleClass: 'circle3',
    dotClass: 'dot3',
    title: 'Advanced Capability Stage',
    subtitle: 'Develop Expertise and Strategic Thinking',
    items: [
      'Complex learning scenarios',
      'Real-world application projects',
      'Strategic problem-solving frameworks',
    ],
    closing: 'Learners strengthen professional confidence and advanced decision-making skills.',
  },
  {
    tag: 'Stage 04',
    tagClass: 'tagColor4',
    circleClass: 'circle4',
    dotClass: 'dot4',
    title: 'Performance Readiness Stage',
    subtitle: 'Prepare for Real-World Success',
    items: [
      'Project-based learning experiences',
      'Real-world implementations',
      'Capability validation and assessment',
    ],
    closing:
      'Learners complete the learning journey ready to perform with confidence in professional environments.',
  },
];

const milestones: Milestone[] = [
  {
    iconClass: 'circle1',
    icon: BiFlag,
    iconColor: '#5e72e4',
    title: 'Clear Learning Milestones',
    desc: 'Track progress at every defined stage checkpoint'
  },
  {
    iconClass: 'circle2',
    icon: BiGitBranch,
    iconColor: '#7c3aed',
    title: 'Logical Topic Progression',
    desc: 'Concepts flow naturally from simple to complex'
  },
  {
    iconClass: 'circle3',
    icon: BiPulse,
    iconColor: '#00b4d8',
    title: 'Continuous Learner Engagement',
    desc: 'Built-in motivation and momentum throughout'
  },
  {
    iconClass: 'circle4',
    icon: BiBarChartAlt2,
    iconColor: '#10b981',
    title: 'Data-Driven Learning Analytics',
    desc: 'Real-time insights on learner performance'
  },
  {
    iconClass: 'circle1',
    icon: BiTrophy,
    iconColor: '#5e72e4',
    title: 'Measurable Capability Development',
    desc: 'Validate and track actual skill development'
  },
];

const benefitsData: BenefitsData = {
  learners: {
    title: 'For Learners',
    subtitle: 'Move from understanding concepts to mastering real-world skills.',
    items: [
      { text: 'Clear and personalized learning journey' },
      { text: 'Strong conceptual foundations' },
      { text: 'Practical skill development' },
      { text: 'Improved confidence and professional competence' },
      { text: 'Faster career-ready capability development' },
    ],
    closing: 'Learners move from understanding concepts to mastering real-world skills.',
  },
  institutions: {
    title: 'For Educational Institutions',
    subtitle: 'Build a future-ready digital learning ecosystem that supports academic excellence.',
    items: [
      { text: 'Structured curriculum frameworks' },
      { text: 'Outcome-driven learning models' },
      { text: 'Improved student engagement and academic performance' },
      { text: 'Alignment with modern skill development demands' },
    ],
    closing: 'Institutions gain a future-ready digital learning ecosystem that supports academic excellence.',
  },
  training: {
    title: 'For Training Organizations',
    subtitle: 'Transform training programs into impactful, measurable, and results-driven systems.',
    items: [
      { text: 'Scalable corporate training program design' },
      { text: 'Structured workforce skill development' },
      { text: 'Measurable training outcomes and performance analytics' },
      { text: 'Improved learner satisfaction and training effectiveness' },
    ],
    closing: 'Training programs become more impactful, measurable, and results-driven.',
  },
};

const ecosystemItems = [
  {
    title: 'Clearly Defined Learning Progression Stages',
    desc: 'Every learning path moves through a systematic sequence that builds knowledge layer by layer.',
  },
  {
    title: 'Structured Modules and Competency Frameworks',
    desc: 'Modules are mapped to real competency standards and professional skill benchmarks.',
  },
  {
    title: 'Practical Application and Real-World Learning',
    desc: 'Every stage includes applied exercises and real-world scenarios to deepen capability.',
  },
  {
    title: 'Continuous Skill Development and Performance Tracking',
    desc: 'Learner progress is tracked continuously with actionable performance analytics.',
  },
];

const LearningPaths: React.FC = () => {
  const [activeTab, setActiveTab] = useState<BenefitTab>('learners');
  const [futureExpanded, setFutureExpanded] = useState(false);

  const tabs: { id: BenefitTab; label: string }[] = [
    { id: 'learners', label: 'For Learners' },
    { id: 'institutions', label: 'For Educational Institutions' },
    { id: 'training', label: 'For Training Organizations' },
  ];

  const activeData = benefitsData[activeTab];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div>
          <h1 className={styles.heroTitle}>
            A Scientific Approach to{' '}
            <span className={styles.highlight}>Structured Learning</span>{' '}
            by NeuroLXP
          </h1>

          <p className={styles.heroText}>
            Learning has evolved dramatically in recent years. With the rise of digital learning
            platforms, Learning Management Systems (LMS), and AI-powered Learning Experience
            Platforms (LXP), access to knowledge has never been easier. However, building deep
            capability, professional skills, and real expertise still requires a clear, structured,
            and scientifically designed learning journey.
          </p>

          <p className={styles.heroText}>
            NeuroLXP introduces a new generation of learning design through Scientific Learning
            Paths — a structured learning framework that guides learners through progressive stages
            of knowledge, skill development, and real-world capability building.
          </p>

          <p className={styles.heroTextLast}>
            For the first time in the industry, NeuroLXP combines learning science, competency
            frameworks, and modern digital learning technologies to create systematically engineered
            learning paths that transform education and training into a carefully designed journey
            of mastery and growth.
          </p>

          <div className={styles.heroActions}>
            <a href="#stages" className={styles.btnPrimary}>Explore Learning Stages</a>
            <a href="#benefits" className={styles.btnSecondary}>View Benefits</a>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroCard}>
            <div className={styles.heroCardHeader}>
              <div className={styles.heroCardTitle}>Your Learning Journey</div>
              <div className={styles.heroCardSub}>NeuroLXP Structured Path — Active Progress</div>
            </div>

            <div className={styles.heroProgressList}>
              {heroProgress.map((item) => (
                <div key={item.label} className={styles.heroProgressItem}>
                  <div className={styles.heroProgressLabel}>
                    <span>{item.label}</span>
                    <span className={styles.heroProgressPct}>{item.pct}</span>
                  </div>
                  <div className={styles.heroProgressBar}>
                    <div
                      className={`${styles.heroProgressFill} ${styles[item.fillClass as keyof typeof styles]}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.heroCardFooter}>
              {heroStats.map((stat) => (
                <div key={stat.label} className={styles.heroCardStat}>
                  <div className={styles.heroCardStatNum}>{stat.num}</div>
                  <div className={styles.heroCardStatLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      <section className={styles.section}>
        <div className={styles.whatIsGrid}>
          <div>
            <h2 className={styles.whatIsTitle}>What is a Learning Path?</h2>

            <p className={styles.bodyText}>
              A <strong>Learning Path</strong> is a structured sequence of learning experiences
              designed to help individuals progressively build knowledge, develop practical skills,
              and achieve professional expertise.
            </p>

            <p className={styles.bodyText}>
              Instead of fragmented courses or isolated training sessions, a learning path organizes
              learning into a logical progression of modules, skills, and competencies.
            </p>

            <p className={styles.bodyText}>
              Modern Learning Experience Platforms (LXP) and Learning Management Systems (LMS) use
              learning paths to guide learners through personalized and goal-oriented learning
              journeys.
            </p>

            <p className={styles.listHeading}>A well-designed learning path provides:</p>
            <ul className={styles.checkList}>
              {whatIsItems.map((item) => (
                <li key={item} className={styles.checkItem}>
                  <span className={styles.checkDot} />
                  {item}
                </li>
              ))}
            </ul>

            <div className={styles.closingStatement}>
              With a learning path, learning becomes purposeful, organized, and outcome-driven.
            </div>
          </div>

          <div className={styles.statsGrid}>
            {statCards.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <div className={styles.statNumber}>{stat.num}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>NeuroLXP: Pioneering Scientific Learning Paths</h2>
        </div>

        <p className={styles.pioneerBodyText}>
          NeuroLXP is among the first AI-powered learning platforms to introduce scientifically
          designed learning paths. Unlike traditional LMS platforms that focus mainly on content
          delivery, NeuroLXP focuses on structured capability development through carefully
          engineered learning journeys.
        </p>

        <p className={styles.pioneerBodyText}>
          NeuroLXP combines the following pillars to create transformational and career-focused
          learning:
        </p>

        <div className={styles.pioneerGrid}>
          {pioneerCards.map((card) => (
            <div key={card.num} className={styles.pioneerCard}>
              <div className={styles.pioneerCardNum}>{card.num}</div>
              <h3 className={styles.pioneerCardTitle}>{card.title}</h3>
              <p className={styles.pioneerCardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.pioneerDesignBox}>
          <h4 className={styles.pioneerDesignTitle}>NeuroLXP Learning Paths are designed using:</h4>
          <ul className={styles.twoColList}>
            {designedUsing.map((item) => (
              <li key={item} className={styles.twoColItem}>
                <span className={styles.bulletBar} />
                {item}
              </li>
            ))}
          </ul>
          <div className={styles.pioneerClosing}>
            This scientific approach ensures that learning is not just informative, but
            transformational and career-focused.
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      <section id="stages" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Four Progressive Stages of Mastery</h2>
        </div>

        <p className={styles.stagesIntroText}>
          NeuroLXP organizes learning into structured stages that gradually build knowledge, skill
          mastery, and professional capability — from core foundations through to career-ready
          performance.
        </p>

        <div className={styles.stagesTimeline}>
          {stages.map((stage) => (
            <div key={stage.tag} className={styles.stageRow}>
              <div className={styles.stageMarker}>
                <div className={styles.stageCircle}>
                  <div
                    className={`${styles.stageCircleInner} ${styles[stage.circleClass as keyof typeof styles]}`}
                  />
                </div>
              </div>

              <div className={styles.stageBody}>
                <span className={`${styles.stageTag} ${styles[stage.tagClass as keyof typeof styles]}`}>
                  {stage.tag}
                </span>
                <h3 className={styles.stageTitle}>{stage.title}</h3>
                <p className={styles.stageSubtitle}>{stage.subtitle}</p>
                <ul className={styles.stageList}>
                  {stage.items.map((item) => (
                    <li key={item} className={styles.stageListItem}>
                      <span
                        className={`${styles.stageDot} ${styles[stage.dotClass as keyof typeof styles]}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className={styles.stageClosing}>{stage.closing}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Bringing Structure and Discipline to the Learning Process
          </h2>
        </div>

        <p className={styles.structureIntroText}>
          A structured learning path introduces clarity, discipline, and measurable progress into
          the learning journey. NeuroLXP Learning Paths help establish:
        </p>

        <div className={styles.milestoneGrid}>
          {milestones.map((m) => {
            const Icon = m.icon;

            return (
              <div key={m.title} className={styles.milestoneCard}>
                <div className={styles.milestoneIconBox}>
                  <div
                    className={`${styles.milestoneIconInner} ${styles[m.iconClass as keyof typeof styles]}`}
                  >
                    <Icon size={20} color={m.iconColor} />
                  </div>
                </div>
                <h4 className={styles.milestoneTitle}>{m.title}</h4>
                <p className={styles.milestoneDesc}>{m.desc}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.structureClosing}>
          This structured environment enables learners to stay focused, motivated, and committed
          while progressing steadily toward knowledge mastery and career growth.
        </div>
      </section>

      <div className={styles.divider} />

      <section id="benefits" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Benefits of NeuroLXP Learning Paths</h2>
          <p className={styles.sectionDesc}>
            Whether you are a learner, an academic institution, or a corporate training
            organization — NeuroLXP Learning Paths deliver measurable, transformational impact.
          </p>
        </div>

        <div className={styles.benefitsTabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.benefitsTabContent}>
          <div className={styles.benefitsLeft}>
            <h3 className={styles.benefitsLeftTitle}>{activeData.title}</h3>
            <p className={styles.benefitsLeftSub}>{activeData.subtitle}</p>
            <ul className={styles.benefitsCheckList}>
              {activeData.items.map((item) => (
                <li key={item.text} className={styles.benefitsCheckItem}>
                  <span className={styles.benefitsCheck}>
                    <span className={styles.benefitsCheckMark} />
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.benefitsRight}>
            <div className={styles.benefitsRightLabel}>Key Outcome</div>
            <div className={styles.benefitsClosingBox}>{activeData.closing}</div>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      <section className={styles.section}>
        <div className={styles.designedCard}>
          <div>
            <span className={styles.designedEyebrow}>Platform Design</span>
            <h2 className={styles.designedTitle}>Designed for Systematic Learning</h2>

            <p className={styles.bodyText}>
              Unlike traditional LMS courses that deliver isolated content, NeuroLXP courses are
              designed as part of integrated learning ecosystems.
            </p>

            <p className={styles.bodyText}>
              Every NeuroLXP Learning Path includes:
            </p>

            <ul className={styles.featureList}>
              {ecosystemItems.map((item) => (
                <li key={item.title} className={styles.featureItem}>
                  <span className={styles.featureCheck}>
                    <span className={styles.featureCheckMark} />
                  </span>
                  <span>
                    <strong>{item.title}</strong>
                  </span>
                </li>
              ))}
            </ul>

            <div className={styles.designedClosing}>
              This ensures that every learning activity contributes to a larger journey of growth,
              mastery, and professional development.
            </div>
          </div>

          <div>
            <div className={styles.ecosystemList}>
              {ecosystemItems.map((item) => (
                <div key={item.title} className={styles.ecosystemItem}>
                  <span className={styles.ecosystemDot} />
                  <div>
                    <div className={styles.ecosystemItemTitle}>{item.title}</div>
                    <div className={styles.ecosystemItemDesc}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      <section className={styles.section}>
        <div className={styles.futureBanner}>
          <div className={styles.futureBannerContent}>
            <span className={styles.futureBannerEyebrow}>The Future of Learning</span>

            <h2 className={styles.futureBannerTitle}>The Future of Learning is Structured</h2>

            <p className={styles.futureBannerBody}>
              As knowledge continues to grow in complexity, the need for structured learning design,
              competency-based training, and personalized learning paths becomes increasingly important.{` `}
              {!futureExpanded && (
                <a className={styles.lnkToggle} onClick={() => setFutureExpanded(true)}>
                  More▼
                </a>
              )}
            </p>

            {futureExpanded && (
              <p className={styles.futureBannerBodyLast}>
                NeuroLXP is proud to pioneer a scientific learning path model that brings clarity,
                structure, and purpose to digital learning. Through NeuroLXP Learning Paths, education evolves from isolated learning events into
                a guided journey toward expertise and career readiness. Experience the future of AI-powered learning platforms, structured learning paths,
                and competency-based digital education with NeuroLXP.{` `}
                <a className={styles.lnkToggle} onClick={() => setFutureExpanded(false)}>
                  Less ▲
                </a>
              </p>
            )}

            <div className={styles.futureBannerActions}>
              <button className={styles.btnWhite}>Discover the Power of Structured Learning</button>
              <button className={styles.btnOutlineWhite}>Explore Learning Paths</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningPaths;