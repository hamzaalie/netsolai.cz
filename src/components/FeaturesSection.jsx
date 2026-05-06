function BuildArt() {
  return (
    <div className="f-art art-build">
      <div className="art-file-badge">📦 my-electron-app v1.4.2</div>
      <div className="art-build-progress">
        <div className="art-build-step">
          <span className="ic ok">✓</span> macOS (universal) built
        </div>
        <div className="art-build-step">
          <span className="ic ok">✓</span> Windows (x64, arm64) built
        </div>
        <div className="art-build-step">
          <span className="ic ok">✓</span> Linux AppImage built
        </div>
        <div className="art-build-step">
          <span className="ic act">↻</span> Signing &amp; notarizing…
        </div>
      </div>
    </div>
  );
}

function SecurityArt() {
  return (
    <div className="f-art" style={{ overflow: "hidden", position: "relative" }}>
      <div className="art-code">
        <div>
          <span className="hl-blue">const</span> win ={" "}
          <span className="hl-green">new</span> BrowserWindow(&#123;
        </div>
        <div style={{ paddingLeft: "1rem" }}>
          webPreferences: &#123;
        </div>
        <div style={{ paddingLeft: "2rem" }}>
          <span className="hl-red">nodeIntegration: true,</span>
        </div>
        <div style={{ paddingLeft: "2rem" }}>
          <span className="hl-red">contextIsolation: false,</span>
        </div>
        <div style={{ paddingLeft: "1rem" }}>&#125;</div>
        <div>&#125;);</div>
      </div>
      <div className="art-scan-badge">⚠ 2 vulnerabilities found</div>
    </div>
  );
}

function SmokeArt() {
  return (
    <div className="f-art art-smoke">
      <div className="smoke-header">
        <span>Platform checks</span>
        <span style={{ color: "#22c55e" }}>3 / 3 passed</span>
      </div>
      {[
        { os: "🍎 macOS (universal)", status: "PASS" },
        { os: "🪟 Windows (x64)", status: "PASS" },
        { os: "🐧 Linux AppImage", status: "PASS" },
      ].map((row) => (
        <div className="smoke-check" key={row.os}>
          <span className="label">{row.os}</span>
          <span className="pass">✓ {row.status}</span>
        </div>
      ))}
    </div>
  );
}

function UpdatesArt() {
  return (
    <div className="f-art art-updates">
      <div className="update-notif">
        <div className="update-notif-icon">🚀</div>
        <div className="update-notif-text">
          <strong>🎉 New release — v1.4.2</strong>
          <span>Staged rollout · 10% of users</span>
        </div>
      </div>
      <div className="update-apps-row">
        {["💬", "🎵", "📹", "📅", "✅"].map((icon, i) => (
          <div className="app-orb" key={i}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

function SigningArt() {
  return (
    <div className="f-art art-signing">
      <div className="cert-card">
        <span className="cert-seal">🔏</span>
        <div>
          <strong>Developer ID Certificate</strong>
          <span>Valid · Expires Dec 2026</span>
          <div className="cert-badges">
            <span className="platform-tag">macOS</span>
            <span className="platform-tag">Windows</span>
            <span className="platform-tag">Linux</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DistributionArt() {
  return (
    <div className="f-art art-dist">
      <div className="dist-link">download.acme.com/app</div>
      <div className="dist-arrow">↓ detects platform</div>
      <div className="dist-btn">⬇ Download for macOS</div>
    </div>
  );
}

function PerformanceArt() {
  return (
    <div className="f-art art-perf">
      {[
        { label: "Launch time", value: "1.2s", cls: "green" },
        { label: "Memory", value: "142MB", cls: "blue" },
        { label: "CPU idle", value: "0.4%", cls: "yellow" },
      ].map((m) => (
        <div className="perf-metric" key={m.label}>
          <div className={`perf-ring ${m.cls}`}>{m.value}</div>
          <div className="perf-label">{m.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="features-wrap">
      <div className="container features">
        <p className="section-eyebrow">Features</p>
        <h2>The Electron ops stack</h2>
        <p className="section-sub">
          ToDesktop is your end-to-end Electron partner — everything you need
          to run Electron apps at scale.
        </p>

        <div className="features-grid">
          {/* Row 1 */}
          <div className="f-card">
            <BuildArt />
            <h3>Focus on your app, not plumbing</h3>
            <p>
              Eliminate developer frustration by letting us handle the
              infrastructure. Build your Electron app on Mac, Windows, and
              Linux with confidence.
            </p>
          </div>

          <div className="f-card">
            <SecurityArt />
            <h3>Identify code vulnerabilities</h3>
            <p>
              We analyze your Electron app&apos;s source code to find and rank
              issues by severity. Quickly resolve vulnerabilities with
              confidence.
            </p>
          </div>

          {/* Row 2 */}
          <div className="f-card">
            <SmokeArt />
            <h3>Catch issues before users do</h3>
            <p>
              Ensure your app runs flawlessly on all platforms. Our Smoke Tests
              automatically test app launches, updates, and performance across
              macOS, Windows, and Linux.
            </p>
          </div>

          <div className="f-card">
            <UpdatesArt />
            <h3>Streamline your updates</h3>
            <p>
              Keep your customers&apos; apps up-to-date and safely test new
              releases on a subset of users before rolling out to everyone.
            </p>
          </div>

          {/* Row 3 */}
          <div className="f-card">
            <SigningArt />
            <h3>Code signing made easy</h3>
            <p>
              Our guided process makes purchasing and using certificates a
              breeze. Secure hardware storage and expiry notifications give you
              peace of mind.
            </p>
          </div>

          <div className="f-card">
            <DistributionArt />
            <h3>Distribution. Sorted!</h3>
            <p>
              Our universal download link intelligently detects and serves the
              right platform-specific installer — served from our CDN and
              hosted on your domain.
            </p>
          </div>

          {/* Wide row */}
          <div className="f-card wide">
            <PerformanceArt />
            <h3>Performance. Benchmarked!</h3>
            <p>
              Measure launch time, memory, and CPU usage. Compare across
              versions and other industry-standard Electron apps to ensure
              your app is always at its best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
