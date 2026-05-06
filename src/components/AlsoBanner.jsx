export default function AlsoBanner() {
  return (
    <div className="also-banner">
      <div className="container also-banner-inner">
        <span className="also-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2"/>
            <path d="M8 21h8M12 17v4"/>
          </svg>
        </span>
        <p className="also-text">
          <strong>Also Available:</strong> ToDesktop Builder — convert your web app to a desktop app
        </p>
        <a className="also-link" href="#">
          Read more →
        </a>
      </div>
    </div>
  );
}
