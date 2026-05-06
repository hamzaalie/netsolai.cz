const STEPS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
    ),
    title: "Upload your app",
    desc: "Prepare to supercharge your Electron app.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: "Bulletproof your App",
    desc: "Vulnerabilities identified, best practices suggested.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"/>
        <path d="m12 5 7 7-7 7"/>
      </svg>
    ),
    title: "Ensure smooth distribution",
    desc: "Keep your customers current with reliable, staged updates.",
  },
];

export default function HeroSection() {
  return (
    <section className="hero-wrap">
      <div className="hero-glow" />
      <div className="hero-grid" />
      <div className="container hero">
        <div className="hero-orbital" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <ellipse cx="24" cy="24" rx="22" ry="9" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" transform="rotate(-30 24 24)"/>
            <ellipse cx="24" cy="24" rx="22" ry="9" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" transform="rotate(30 24 24)"/>
            <circle cx="24" cy="24" r="3" fill="rgba(255,255,255,0.7)"/>
            <circle cx="42" cy="18" r="2" fill="rgba(255,255,255,0.5)"/>
          </svg>
        </div>
        <div className="hero-badge">
          <span className="hero-badge-bolt">⚡</span>
          END-TO-END ELECTRON
        </div>

        <h1>
          <span className="hero-title-grad">Release, Secure and</span>
          <br />
          <div className="hero-title-row2">
            <span className="hero-title-grad">Scale your Electron</span>
            <img
              className="hero-inline-logo"
              src="https://www.todesktop.com/electron/images/hero/logo.png"
              alt=""
              aria-hidden="true"
              width="64"
              height="64"
            />
            <span className="hero-title-grad">App</span>
          </div>
        </h1>

        <p className="hero-sub">
          Effortless deployment, robust security and seamless auto-updates.
        </p>

        <div className="hero-cta">
          <a className="btn-primary pill-btn" href="#">
            Start free trial <span>›</span>
          </a>
          <a className="btn-secondary pill-btn" href="#">
            Read docs
          </a>
        </div>

        <div className="hero-steps">
          {STEPS.map((s) => (
            <div className="step-card" key={s.title}>
              <div className="step-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="hero-panel-wrap">
          <div className="hero-panel">
            <div className="panel-titlebar">
              <span className="pdot r" />
              <span className="pdot y" />
              <span className="pdot g" />
              <span className="panel-tab">dave@machine: ~/my-electron-app</span>
            </div>
            <div className="panel-body">
              <div className="panel-left">
                <div className="upload-zone">
                  <span className="upload-zone-icon">📦</span>
                  <strong>Upload your Electron app</strong>
                  <span>Drag &amp; drop or click to browse</span>
                </div>
                <div className="progress-list">
                  <div className="progress-item">
                    <span className="p-check done">✓</span>
                    Build validated successfully
                  </div>
                  <div className="progress-item">
                    <span className="p-check done">✓</span>
                    Code-signing certificates verified
                  </div>
                  <div className="progress-item">
                    <span className="p-check done">✓</span>
                    Smoke tests passed on all platforms
                  </div>
                  <div className="progress-item">
                    <span className="p-check spin">↻</span>
                    Publishing release assets…
                  </div>
                </div>
              </div>
              <div className="panel-right">
                <div className="terminal-win">
                  <div className="t-bar">Terminal — todesktop-cli</div>
                  <div className="t-body">
                    <p>
                      <span className="tc-g">dave@machine</span>
                      <span className="tc-m">:</span>
                      <span className="tc-b">~/my-electron-app</span>
                      <span className="tc-m">$ </span>
                      <span className="tc-w">todesktop publish</span>
                    </p>
                    <p>
                      <span className="tc-m">›</span> Uploading build artifacts…
                    </p>
                    <p>
                      <span className="tc-g">✓</span> macOS (universal) — 152 MB
                    </p>
                    <p>
                      <span className="tc-g">✓</span> Windows (x64) — 81 MB
                    </p>
                    <p>
                      <span className="tc-g">✓</span> Linux AppImage — 79 MB
                    </p>
                    <p>
                      <span className="tc-m">›</span> Running smoke tests…
                    </p>
                    <p>
                      <span className="tc-g">✓</span> All platforms passed
                    </p>
                    <p>
                      <span className="tc-b">✦</span>{" "}
                      <span className="tc-w">Release v1.4.2 published!</span>
                    </p>
                    <p>
                      <span className="tc-m">$ </span>
                      <span className="tc-c" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
