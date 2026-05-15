import { useEffect } from 'react';
import SiteLayout from '../components/SiteLayout';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n/index';

function useBinaryCanvas(id) {
  useEffect(() => {
    const canvas = document.getElementById(id);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '01';
    const fontSize = 13;
    let cols, rows, grid = [];

    const buildGrid = () => {
      cols = Math.ceil(canvas.width / (fontSize * 0.7)) + 2;
      rows = Math.ceil(canvas.height / (fontSize * 1.4)) + 2;
      grid = [];
      for (let c = 0; c < cols; c++) {
        grid[c] = [];
        for (let r = 0; r < rows; r++) {
          grid[c][r] = {
            char: chars[Math.floor(Math.random() * chars.length)],
            alpha: Math.random() * 0.25 + 0.08,
            changeAt: Math.random() * 12,
          };
        }
      }
    };
    buildGrid();
    window.addEventListener('resize', buildGrid);

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      ctx.textBaseline = 'top';
      const cw = fontSize * 0.7;
      const ch = fontSize * 1.4;
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const cell = grid[c][r];
          if (t > cell.changeAt) {
            cell.char = chars[Math.floor(Math.random() * chars.length)];
            cell.alpha = Math.random() * 0.28 + 0.07;
            cell.changeAt = t + Math.random() * 17 + 3;
          }
          ctx.fillStyle = `rgba(255,255,255,${cell.alpha})`;
          ctx.fillText(cell.char, c * cw, r * ch);
        }
      }
      t++;
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('resize', buildGrid);
    };
  }, [id]);
}

const BENEFIT_ICONS = [
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="9" stroke="#9c70ff" strokeWidth="1.5" />
    <path d="M7 11l3 3 5-5" stroke="#9c70ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2a7 7 0 100 14A7 7 0 0011 2z" stroke="#9c70ff" strokeWidth="1.5" />
    <path d="M11 6v5l3 2" stroke="#9c70ff" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 19c1.5-2 4-3 7-3s5.5 1 7 3" stroke="#9c70ff" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="2" y="3" width="18" height="15" rx="2" stroke="#9c70ff" strokeWidth="1.5" />
    <path d="M7 8h8M7 12h5" stroke="#9c70ff" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2l2.5 6H20l-5 3.5 2 6.5L11 14l-6 4 2-6.5L2 8h6.5L11 2z" stroke="#9c70ff" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>,
];

export default function FreeConsultationPage() {
  useBinaryCanvas('consult-particles');
  const { lang } = useLanguage();
  const T = translations[lang].consultation;

  const jsonLd = [{
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Free AI Consultation — Asghar Ali",
    "provider": {
      "@type": "Organization",
      "name": "Netsol AI s.r.o.",
      "url": "https://netsolai.cz"
    },
    "description": "Book a free 30-minute AI consultation with Asghar Ali. We help complex businesses implement AI solutions that drive real results.",
    "url": "https://netsolai.cz/free-consultation",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    }
  }];

  return (
    <SiteLayout>
      <SEOHead
        title="Free AI Consultation with Asghar Ali | Netsol AI"
        description="Book a free 30-minute call with Asghar Ali. We'll analyse your complex business challenges and show you exactly how AI can solve them — no fluff, no cost."
        canonical="/free-consultation"
        jsonLd={jsonLd}
      />

      {/* ── HERO ── */}
      <div className="cta-banner-wrapper">
        <section className="cta-banner" aria-label="Free Consultation Hero">
          <div className="cta-bg" aria-hidden="true">
            <canvas id="consult-particles" className="cta-canvas" />
            <div className="cta-glow" />
          </div>
          <div className="cta-content">
            <p className="cta-eyebrow">{T.eyebrow}</p>
            <h1 className="cta-headline">
              {T.headline1}<br />
              <span style={{ color: '#9c70ff' }}>{T.headline2}</span>
            </h1>
            <p className="cta-sub">{T.sub}</p>
            <div className="cta-actions">
              <a className="cta-btn-primary" href="#book">{T.cta}</a>
            </div>
          </div>
        </section>
      </div>

      {/* ── CONSULTANT PROFILE ── */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className="consult-profile-card">

            <div className="consult-avatar" aria-label="Asghar Ali">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="32" fill="url(#avatarGrad)" />
                <circle cx="32" cy="26" r="11" fill="rgba(255,255,255,0.15)" />
                <ellipse cx="32" cy="52" rx="18" ry="11" fill="rgba(255,255,255,0.12)" />
                <defs>
                  <linearGradient id="avatarGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7c3aed" />
                    <stop offset="1" stopColor="#4f46e5" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="consult-avatar-initials">AA</span>
            </div>

            <div className="consult-bio">
              <div className="consult-badge">{T.profileBadge}</div>
              <h2 className="consult-name">Asghar Ali</h2>
              <p className="consult-role">{T.profileRole}</p>
              <p className="consult-bio-text">{T.profileBio}</p>
              <div className="consult-tags">
                {T.profileTags.map((tag, i) => (
                  <span key={i} className="consult-tag">{tag}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">{T.benefitsEyebrow}</p>
          <div className="section-head">
            <h2>{T.benefitsTitle}</h2>
            <p>{T.benefitsSub}</p>
          </div>

          <div className="consult-benefits-grid">
            {T.benefits.map((b, i) => (
              <div key={i} className="consult-benefit-card">
                <div className="consult-benefit-icon">{BENEFIT_ICONS[i]}</div>
                <h3 className="consult-benefit-title">{b.title}</h3>
                <p className="consult-benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING SECTION ── */}
      <section className="section" id="book">
        <div className="container">
          <div className="consult-book-card">
            <div className="consult-book-left">
              <p className="eyebrow">{T.bookEyebrow}</p>
              <h2>{T.bookTitle}</h2>
              <p className="consult-book-desc">{T.bookDesc}</p>
              <ul className="consult-checklist">
                {T.checklist.map((item, i) => (
                  <li key={i}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8l4 4 8-8" stroke="#9c70ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="consult-book-right">
              <a
                href="https://calendly.com/PLACEHOLDER"
                target="_blank"
                rel="noreferrer"
                className="consult-book-btn"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="3" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 1v4M14 1v4M2 8h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                {T.bookBtn}
              </a>
              <p className="consult-book-note">{T.bookNote}</p>
            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
