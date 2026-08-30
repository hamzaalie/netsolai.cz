import { trackBookingClick, trackLandingPageView } from '../utils/tracking';
import { useEffect } from 'react';
import SiteLayout from '../components/SiteLayout';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n/index';

const BOOKING_URL = 'https://booking.netsolai.cz/register';

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
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/><path d="M7.5 12l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

export default function FreeConsultationPage() {
  const { lang } = useLanguage();
  const T = translations[lang].consultation;

  useEffect(() => { trackLandingPageView('free-consultation'); }, []);

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

      {/* ══ HERO ══ */}
      <div className="fc-hero-wrapper">
      <section className="fc-hero">
        <div className="fc-hero-bg" aria-hidden="true">
          <div className="fc-hero-orb fc-hero-orb--1" />
          <div className="fc-hero-orb fc-hero-orb--2" />
        </div>

        <div className="container fc-hero-inner">
          <div className="fc-hero-text">
            <div className="fc-hero-badge">
              <span className="fc-hero-badge-dot" />
              {T.eyebrow}
            </div>
            <h1 className="fc-hero-h1">
              {T.headline1}<br />
              <span className="fc-hero-accent">{T.headline2}</span>
            </h1>
            <p className="fc-hero-sub">{T.sub}</p>
            <div className="fc-hero-actions">
              <a href={BOOKING_URL} target="_blank" rel="noreferrer" onClick={() => trackBookingClick('free-consultation')} className="fc-btn-white">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="1" y="2" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/>
                  <path d="M5 1v3M13 1v3M1 7h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
                {T.cta}
              </a>
              <a href="#about-asghar" className="fc-btn-outline">
                {lang === 'cs' ? 'Zjistit více ↓' : 'Learn more ↓'}
              </a>
            </div>
          </div>

          <div className="fc-hero-card">
            <div className="fc-hero-photo-wrap">
              <img
                src="/images/asghar-ali-netsol.jpeg"
                alt="Asghar Ali"
                className="fc-hero-photo"
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <div className="fc-photo-fallback" style={{ display: 'none' }}>AA</div>
            </div>
            <div className="fc-hero-card-body">
              <p className="fc-card-label">{T.profileBadge}</p>
              <h3 className="fc-card-name">Ing. Ali Asghar, MBA</h3>
              <p className="fc-card-role">{T.profileRole}</p>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* ══ ABOUT ASGHAR ══ */}
      <section className="section" id="about-asghar">
        <div className="container">
          <div className="fc-about-text-only">
            <p className="eyebrow">{T.profileBadge}</p>
            <h2 className="fc-about-h2">Ing. Ali Asghar, MBA</h2>
            <p className="fc-about-role">{T.profileRole}</p>
            <p className="fc-about-bio">{T.profileBio}</p>
            <div className="fc-about-tags">
              {T.profileTags.map((tag, i) => (
                <span key={i} className="fc-tag">{tag}</span>
              ))}
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noreferrer" onClick={() => trackBookingClick('free-consultation')} className="fc-cta-btn">{T.cta}</a>
          </div>
        </div>
      </section>

      {/* ══ BENEFITS ══ */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <p className="eyebrow">{T.benefitsEyebrow}</p>
          <div className="section-head">
            <h2>{T.benefitsTitle}</h2>
            <p>{T.benefitsSub}</p>
          </div>
          <div className="fc-benefits-grid">
            {T.benefits.map((b, i) => (
              <div key={i} className="fc-benefit-card">
                <div className="fc-benefit-icon">{BENEFIT_ICONS[i]}</div>
                <h3 className="fc-benefit-title">{b.title}</h3>
                <p className="fc-benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOOKING CTA ══ */}
      <section className="fc-book-section" id="book">
        <div className="container">
          <div className="fc-book-card">
            <div className="fc-book-orb" aria-hidden="true" />
            <div className="fc-book-inner">
              <div className="fc-book-left">
                <p className="fc-book-eyebrow">{T.bookEyebrow}</p>
                <h2 className="fc-book-h2">{T.bookTitle}</h2>
                <p className="fc-book-desc">{T.bookDesc}</p>
                <ul className="fc-checklist">
                  {T.checklist.map((item, i) => (
                    <li key={i}>
                      <span className="fc-check-icon">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1.5 6l3 3 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="fc-book-right">
                <div className="fc-book-box">
                  <div className="fc-book-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect x="2" y="4" width="28" height="24" rx="3" stroke="var(--accent)" strokeWidth="1.8"/>
                      <path d="M9 2v5M23 2v5M2 12h28" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round"/>
                      <circle cx="10" cy="20" r="1.5" fill="var(--accent)"/>
                      <circle cx="16" cy="20" r="1.5" fill="var(--accent)"/>
                      <circle cx="22" cy="20" r="1.5" fill="var(--accent)"/>
                    </svg>
                  </div>
                  <p className="fc-book-box-label">{lang === 'cs' ? 'Vyberte si termín' : 'Pick your time slot'}</p>
                  <a href={BOOKING_URL} target="_blank" rel="noreferrer" onClick={() => trackBookingClick('free-consultation')} className="fc-btn-white fc-btn-white--block">
                    {T.bookBtn}
                  </a>
                  <p className="fc-book-note">{T.bookNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
