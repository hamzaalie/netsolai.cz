import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n/index';

// ── AI Process Icons ──────────────────────────────────────────────────────────
const IconScan = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
  </svg>
);
const IconNeural = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="4" r="2" /><circle cx="4" cy="19" r="2" /><circle cx="20" cy="19" r="2" />
    <circle cx="12" cy="12" r="2" />
    <line x1="12" y1="6" x2="12" y2="10" />
    <line x1="10.5" y1="13.5" x2="5" y2="17" />
    <line x1="13.5" y1="13.5" x2="19" y2="17" />
  </svg>
);
const IconTerminal = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);
const IconLink = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
const IconDeploy = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
  </svg>
);
const IconTrend = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const STEP_ICONS = [IconScan, IconNeural, IconTerminal, IconLink, IconDeploy, IconTrend];

// ── Process Sub-components ────────────────────────────────────────────────────
function PrcCard({ step, delay, area }) {
  const { num, title, desc, tags } = step;
  const Icon = STEP_ICONS[parseInt(num, 10) - 1];
  return (
    <div
      className="prc-card abt-slide-up"
      style={{ animationDelay: `${delay}s`, gridArea: area }}
    >
      <div className="prc-card-bar" style={{ animationDelay: `${delay + 0.2}s` }} />
      <div className="prc-card-body">
        <div className="prc-card-top">
          <div className="prc-card-icon"><Icon /></div>
          <span className="prc-card-num">{num}</span>
        </div>
        <h4 className="prc-card-title">{title}</h4>
        <p className="prc-card-desc">{desc}</p>
        <div className="prc-card-tags">
          {tags.map(tag => <span key={tag} className="prc-tag">{tag}</span>)}
        </div>
      </div>
    </div>
  );
}

function PrcConnH({ delay, reverse, area }) {
  return (
    <div className="prc-conn-h" style={{ gridArea: area }}>
      <div className="prc-conn-track-h" />
      <div
        className={`prc-conn-fill-h${reverse ? ' prc-conn-fill-h--rev' : ''}`}
        style={{ animationDelay: `${delay}s` }}
      />
      <div
        className={`prc-dot-h${reverse ? ' prc-dot-h--rev' : ''}`}
        style={{ animationDelay: `${delay + 0.45}s` }}
      />
    </div>
  );
}

function PrcConnV({ delay, area }) {
  return (
    <div className="prc-conn-v" style={{ gridArea: area }}>
      <div className="prc-conn-track-v" />
      <div className="prc-conn-fill-v" style={{ animationDelay: `${delay}s` }} />
      <div className="prc-dot-v" style={{ animationDelay: `${delay + 0.45}s` }} />
    </div>
  );
}

// ════════════════════════════════════════
// TAB 1 — Who We Are
// ════════════════════════════════════════
function WhoWeAreTab({ T }) {
  const { headline, paragraphs, chips, subTag } = T.about.wwa;

  return (
    <div className="wwa-wrap abt-animate-in">
      <div className="wwa-split">
        {/* Left: word-by-word headline */}
        <div className="wwa-left">
          <p className="wwa-eyebrow abt-slide-up" style={{ animationDelay: '0.05s' }}>
            {T.about.tabs[0]}
          </p>
          <h3 className="wwa-headline">
            {headline.map((word, i) => (
              <span
                key={i}
                className="wwa-word abt-slide-up"
                style={{ animationDelay: `${0.08 + i * 0.13}s` }}
              >
                {word}{i < headline.length - 1 && ' '}
              </span>
            ))}
          </h3>
          <p className="wwa-sub-tag abt-fade-in" style={{ animationDelay: '0.55s' }}>
            {subTag}
          </p>
        </div>

        {/* Right: paragraphs */}
        <div className="wwa-right">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="wwa-para abt-slide-up"
              style={{ animationDelay: `${0.22 + i * 0.15}s` }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Chips */}
      <div className="wwa-chips">
        {chips.map((chip, i) => (
          <span
            key={chip}
            className="wwa-chip abt-slide-up"
            style={{ animationDelay: `${0.68 + i * 0.1}s` }}
          >
            <span className="wwa-chip-dot" />
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

// ════════════════════════════════════════
// TAB 2 — Our Process
// ════════════════════════════════════════
function OurProcessTab({ T }) {
  const steps = T.about.process.steps;
  const B = 0.06, C = 0.16, N = 0.12;

  return (
    <div className="prc-wrap abt-animate-in">
      <div className="prc-grid">
        {/* Row 1: left → right */}
        <PrcCard step={steps[0]} delay={B}             area="c1" />
        <PrcConnH delay={B+C}                 area="hr1" />
        <PrcCard step={steps[1]} delay={B+C+N}         area="c2" />
        <PrcConnH delay={B+C*2+N}             area="hr2" />
        <PrcCard step={steps[2]} delay={B+C*2+N*2}     area="c3" />

        {/* Vertical turn — right column */}
        <PrcConnV delay={B+C*3+N*2}           area="vc" />

        {/* Row 3: right → left (S-curve) */}
        <PrcCard step={steps[3]} delay={B+C*3+N*3}     area="c4" />
        <PrcConnH delay={B+C*4+N*3} reverse   area="hl1" />
        <PrcCard step={steps[4]} delay={B+C*4+N*4}     area="c5" />
        <PrcConnH delay={B+C*5+N*4} reverse   area="hl2" />
        <PrcCard step={steps[5]} delay={B+C*5+N*5}     area="c6" />
      </div>

      <p className="prc-footer abt-slide-up" style={{ animationDelay: `${B+C*6+N*5}s` }}>
        <span className="prc-spark">✦</span>&nbsp;
        {T.about.process.footer}
      </p>
    </div>
  );
}

// ════════════════════════════════════════
// TAB 3 — Our Goal
// ════════════════════════════════════════
function CounterStat({ target, suffix, label, desc, delay }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const DURATION = 1800;
    let raf;
    const startTime = performance.now() + delay;

    const tick = (now) => {
      const elapsed = now - startTime;
      if (elapsed < 0) { raf = requestAnimationFrame(tick); return; }
      const t = Math.min(elapsed / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, delay]);

  return (
    <div
      className="goal-stat abt-slide-up"
      style={{ animationDelay: `${delay / 1000 + 0.05}s` }}
    >
      <div className="goal-num">
        {value}<span className="goal-suffix">{suffix}</span>
      </div>
      <div className="goal-stat-label">{label}</div>
      <div className="goal-stat-desc">{desc}</div>
    </div>
  );
}

function OurGoalTab({ T }) {
  const { stats, mission } = T.about.goal;

  return (
    <div className="goal-wrap abt-animate-in">
      <div className="goal-stats-grid">
        {stats.map((stat, i) => (
          <CounterStat key={stat.label} {...stat} delay={i * 200 + 60} />
        ))}
      </div>

      <div
        className="goal-mission abt-slide-up"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="goal-divider" />
        <p className="goal-mission-text">
          {mission}
        </p>
      </div>
    </div>
  );
}

// ════════════════════════════════════════
// MAIN EXPORT
// ════════════════════════════════════════
export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabKey, setTabKey] = useState(0);
  const [switching, setSwitching] = useState(false);
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();
  const T = translations[lang];

  // Fade in the section heading on scroll into view
  useEffect(() => {
    const el = document.getElementById('about');
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin: '-80px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleTab = (i) => {
    if (switching) return;
    setSwitching(true);
    setTimeout(() => {
      setActiveTab(i);
      setTabKey((k) => k + 1);
      setSwitching(false);
    }, 180);
  };

  return (
    <section className="abt-section" id="about">
      <div className="abt-bg-grid" aria-hidden="true" />

      <div className="container abt-inner">
        {/* Heading */}
        <div className={`abt-heading${visible ? ' abt-heading--visible' : ''}`}>
          <h2 className="abt-title">{T.about.eyebrow}</h2>
          <p className="abt-subtitle">
            {T.about.subtitle}
          </p>
        </div>

        {/* Tab pills */}
        <div className={`abt-pills${visible ? ' abt-heading--visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          {T.about.tabs.map((tab, i) => (
            <button
              key={tab}
              className={`abt-pill${activeTab === i ? ' abt-pill--active' : ''}`}
              onClick={() => handleTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className={`abt-content${switching ? ' abt-content--out' : ''}`}>
          {activeTab === 0 && <WhoWeAreTab key={`wwa-${tabKey}`} T={T} />}
          {activeTab === 1 && <OurProcessTab key={`proc-${tabKey}`} T={T} />}
          {activeTab === 2 && <OurGoalTab key={`goal-${tabKey}`} T={T} />}
        </div>
      </div>
    </section>
  );
}
