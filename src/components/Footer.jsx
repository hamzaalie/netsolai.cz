export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="logo" href="#">
              <span className="logo-icon">T</span>
              <span className="logo-name">ToDesktop</span>
            </a>
            <p>The end-to-end Electron partner for teams who ship.</p>
            <div className="status-badge">
              <span className="status-dot" />
              All systems operational
            </div>
          </div>

          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><a href="#">ToDesktop for Electron</a></li>
              <li><a href="#">ToDesktop Builder</a></li>
              <li><a href="#">Compare Products</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Docs &amp; Resources</h4>
            <ul>
              <li><a href="#">Electron Docs</a></li>
              <li><a href="#">Builder Docs</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Security &amp; Legal</h4>
            <ul>
              <li><a href="#">Security &amp; Architecture</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Subprocessors</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">Contact Sales</a></li>
              <li><a href="#">Twitter (𝕏)</a></li>
              <li><a href="#">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 ToDesktop, Inc.</span>
          <div className="yc-pill">
            <span className="yc-sq">Y</span>
            a Y Combinator company
          </div>
        </div>
      </div>
    </footer>
  );
}
