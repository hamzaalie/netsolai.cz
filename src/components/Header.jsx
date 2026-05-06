export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <a className="logo" href="#">
          <span className="logo-icon">T</span>
          <span className="logo-name">ToDesktop</span>
          <span className="logo-tag">for Electron</span>
        </a>

        <nav>
          <ul className="nav-links">
            <li className="nav-dropdown">
              <button>
                Products <span>▾</span>
              </button>
              <div className="dropdown-panel">
                <a className="dropdown-item" href="#">
                  <span className="dd-icon">⚡</span>
                  <span className="dd-info">
                    <strong>ToDesktop for Electron</strong>
                    <small>Release, secure, and scale your Electron app.</small>
                  </span>
                </a>
                <a className="dropdown-item" href="#">
                  <span className="dd-icon">🖥️</span>
                  <span className="dd-info">
                    <strong>ToDesktop Builder</strong>
                    <small>Turn your web app into a desktop app in minutes.</small>
                  </span>
                </a>
                <a className="dropdown-item" href="#">
                  <span className="dd-icon">⚖️</span>
                  <span className="dd-info">
                    <strong>Compare products</strong>
                    <small>Find the right tool for your workflow.</small>
                  </span>
                </a>
              </div>
            </li>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a className="btn-ghost" href="#">Log in</a>
          <a className="btn-primary" href="#">Sign up</a>
        </div>
      </div>
    </header>
  );
}
