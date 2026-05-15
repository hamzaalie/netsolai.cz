import { useEffect } from 'react';
import SiteLayout from '../components/SiteLayout';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n/index';

const CALENDLY_URL = 'https://calendly.com/netsolai-info/30min';

function useBinaryCanvas(id) {
  useEffect(() => {
    const canvas = document.getElementById(id);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
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
          grid[c][r] = { char: chars[Math.floor(Math.random() * chars.length)], alpha: Math.random() * 0.25 + 0.08, changeAt: Math.random() * 12 };
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
      const cw = fontSize * 0.7, ch = fontSize * 1.4;
      for (let c = 0; c < cols; c++) for (let r = 0; r < rows; r++) {
        const cell = grid[c][r];
        if (t > cell.changeAt) { cell.char = chars[Math.floor(Math.random() * chars.length)]; cell.alpha = Math.random() * 0.28 + 0.07; cell.changeAt = t + Math.random() * 17 + 3; }
        ctx.fillStyle = `rgba(255,255,255,${cell.alpha})`;
        ctx.fillText(cell.char, c * cw, r * ch);
      }
      t++;
      animFrame = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animFrame); window.removeEventListener('resize', resize); window.removeEventListener('resize', buildGrid); };
  }, [id]);
}

const BENEFIT_ICONS = [
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#9c70ff" strokeWidth="1.5"/><path d="M6.5 10l2.5 2.5 4.5-5" stroke="#9c70ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="3.5" stroke="#9c70ff" strokeWidth="1.5"/><path d="M3 17c0-3.5 3-6 7-6s7 2.5 7 6" stroke="#9c70ff" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="3" width="16" height="13" rx="2" stroke="#9c70ff" strokeWidth="1.5"/><path d="M6 7h8M6 11h5" stroke="#9c70ff" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M11 3l-7 9h6l-1 5 7-9h-6l1-5z" stroke="#9c70ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

export default function FreeConsultationPage() {
  useBinaryCanvas('consult-particles');
  const { lang } = useLanguage();
  const T = translations[lang].consultation;

  const jsonLd = [{
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Free AI Consultation — Asghar Ali",
    "provider": { "@type": "Organization", "name": "Netsol AI s.r.o.", "url": "https://netsolai.cz" },
    "description": "Book a free 30-minute AI consultation with Asghar Ali.",
    "url": "https://netsolai.cz/free-consultation",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
  }];

  return (
    <SiteLayout>
      <SEOHead
        title="Free AI Consultation with Asghar Ali | Netsol AI"
        description="Book a free 30-minute call with Asghar Ali. We analyse your complex business challenges and show you exactly how AI can solve them."
        canonical="/free-consultation"
        jsonLd={jsonLd}
      />

      {/* ── HERO — same pattern as homepage ── */}
      <div className="cta-banner-wrapper">
        <section className="cta-banner" aria-label="Free Consultation Hero">
          <div className="cta-bg" aria-hidden="true">
            <canvas id="consult-particles" className="cta-canvas" />
            <div className="cta-glow" />
          </div>
          <div className="cta-content">
            <p className="cta-eyebrow">{T.eyebrow}</p>
            <h1 className="cta-headline">{T.headline1}<br />{T.headline2}</h1>
            <p className="cta-sub">{T.sub}</p>
            <div className="cta-actions">
              <a className="cta-btn-primary" href={CALENDLY_URL} target="_blank" rel="noreferrer">{T.cta}</a>
              <a className="cta-btn-secondary" href="#about-asghar">{lang === 'cs' ? 'Zjistit více' : 'Learn more'}</a>
            </div>
          </div>
        </section>
      </div>

      {/* ── CONSULTANT PROFILE ── */}
      <section className="section" id="about-asghar">
        <div className="container">
          <div className="cp-profile-wrap">

            <div className="cp-photo-col">
              <div className="cp-photo-frame">
                <img
                  src="/images/asghar-ali.jpg"
                  alt="Asghar Ali — AI Solutions Specialist"
                  className="cp-photo"
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
                <div className="cp-photo-fallback" style={{ display: 'none' }}>AA</div>
              </div>
            </div>

            <div className="cp-bio-col">
              <p className="eyebrow">{T.profileBadge}</p>
              <h2 className="cp-name">Asghar Ali</h2>
              <p className="cp-role">{T.profileRole}</p>
              <p className="cp-bio">{T.profileBio}</p>
              <div className="cp-tags">
                {T.profileTags.map((tag, i) => (
                  <span key={i} className="cp-tag">{tag}</span>
                ))}
              </div>
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="cp-cta-btn">{T.cta}</a>
            </div>

          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <p className="eyebrow">{T.benefitsEyebrow}</p>
          <div className="section-head">
            <h2>{T.benefitsTitle}</h2>
            <p>{T.benefitsSub}</p>
          </div>
          <div className="cp-benefits-grid">
            {T.benefits.map((b, i) => (
              <div key={i} className="cp-benefit-card">
                <div className="cp-benefit-icon">{BENEFIT_ICONS[i]}</div>
                <h3 className="cp-benefit-title">{b.title}</h3>
                <p className="cp-benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section className="section" id="book">
        <div className="container">
          <div className="precta-card">
            <div className="precta-left">
              <span className="precta-badge">{T.bookEyebrow}</span>
              <h2 className="precta-heading">{T.bookTitle}</h2>
              <p className="precta-desc">{T.bookDesc}</p>
              <ul className="cp-checklist">
                {T.checklist.map((item, i) => (
                  <li key={i}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1.5 7l3.5 3.5 7.5-7" stroke="#9c70ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="precta-actions" style={{ marginTop: '32px' }}>
                <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="precta-btn-primary">{T.bookBtn}</a>
              </div>
              <p className="cp-book-note">{T.bookNote}</p>
            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
