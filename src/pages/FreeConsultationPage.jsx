import { useEffect } from 'react';
import SiteLayout from '../components/SiteLayout';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n/index';

const CALENDLY_URL = 'https://calendly.com/netsolai-info/30min';

const BENEFIT_ICONS = [
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M7.5 12l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
];

export default function FreeConsultationPage() {
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
        description="Book a free 30-minute call with Asghar Ali. We'll analyse your complex business challenges and show you exactly how AI can solve them."
        canonical="/free-consultation"
        jsonLd={jsonLd}
      />

      {/* ══ HERO ══ */}
      <section className="fc-hero">
        <div className="fc-hero-bg" aria-hidden="true">
          <div className="fc-hero-orb fc-hero-orb--1" />
          <div className="fc-hero-orb fc-hero-orb--2" />
          <div className="fc-hero-grid" />
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
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="fc-btn-primary">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="1" y="2" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/>
                  <path d="M5 1v3M13 1v3M1 7h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
                {T.cta}
              </a>
              <a href="#about-asghar" className="fc-btn-ghost">
                {lang === 'cs' ? 'Zjistit více ↓' : 'Learn more ↓'}
              </a>
            </div>
            <div className="fc-hero-trust">
              <div className="fc-trust-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {lang === 'cs' ? 'Zcela zdarma' : 'Completely free'}
              </div>
              <div className="fc-trust-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {lang === 'cs' ? 'Bez závazků' : 'No commitment'}
              </div>
              <div className="fc-trust-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                30 {lang === 'cs' ? 'minut' : 'minutes'}
              </div>
            </div>
          </div>

          <div className="fc-hero-card">
            <div className="fc-hero-card-inner">
              <div className="fc-hero-photo-wrap">
                <img
                  src="/images/asghar-ali.jpg"
                  alt="Asghar Ali — AI Solutions Specialist"
                  className="fc-hero-photo"
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
                <div className="fc-hero-photo-fallback" style={{ display: 'none' }}>AA</div>
              </div>
              <div className="fc-hero-card-body">
                <p className="fc-hero-card-label">{T.profileBadge}</p>
                <h3 className="fc-hero-card-name">Asghar Ali</h3>
                <p className="fc-hero-card-role">{T.profileRole}</p>
                <div className="fc-hero-card-divider" />
                <div className="fc-hero-card-stats">
                  <div className="fc-stat">
                    <span className="fc-stat-num">30</span>
                    <span className="fc-stat-label">{lang === 'cs' ? 'min / hovor' : 'min / call'}</span>
                  </div>
                  <div className="fc-stat-sep" />
                  <div className="fc-stat">
                    <span className="fc-stat-num">0</span>
                    <span className="fc-stat-label">{lang === 'cs' ? 'Kč nákladů' : 'cost'}</span>
                  </div>
                  <div className="fc-stat-sep" />
                  <div className="fc-stat">
                    <span className="fc-stat-num">AI</span>
                    <span className="fc-stat-label">{lang === 'cs' ? 'expert' : 'expert'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT ASGHAR ══ */}
      <section className="fc-about" id="about-asghar">
        <div className="container fc-about-inner">
          <div className="fc-about-photo-col">
            <div className="fc-about-photo-frame">
              <img
                src="/images/asghar-ali.jpg"
                alt="Asghar Ali"
                className="fc-about-photo"
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <div className="fc-about-photo-fallback" style={{ display: 'none' }}>AA</div>
              <div className="fc-about-photo-badge">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {lang === 'cs' ? 'Ověřený expert' : 'Verified Expert'}
              </div>
            </div>
          </div>

          <div className="fc-about-text">
            <p className="eyebrow">{T.profileBadge}</p>
            <h2 className="fc-about-h2">Asghar Ali</h2>
            <p className="fc-about-role">{T.profileRole}</p>
            <p className="fc-about-bio">{T.profileBio}</p>
            <div className="fc-about-tags">
              {T.profileTags.map((tag, i) => (
                <span key={i} className="fc-tag">{tag}</span>
              ))}
            </div>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="fc-btn-primary" style={{ marginTop: '32px', display: 'inline-flex' }}>
              {T.cta}
            </a>
          </div>
        </div>
      </section>

      {/* ══ BENEFITS ══ */}
      <section className="fc-benefits">
        <div className="container">
          <div className="fc-section-head">
            <p className="eyebrow">{T.benefitsEyebrow}</p>
            <h2>{T.benefitsTitle}</h2>
            <p className="fc-section-sub">{T.benefitsSub}</p>
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
      <section className="fc-book" id="book">
        <div className="container">
          <div className="fc-book-card">
            <div className="fc-book-orb" aria-hidden="true" />
            <div className="fc-book-content">
              <div className="fc-book-left">
                <p className="fc-book-eyebrow">{T.bookEyebrow}</p>
                <h2 className="fc-book-h2">{T.bookTitle}</h2>
                <p className="fc-book-desc">{T.bookDesc}</p>
                <ul className="fc-checklist">
                  {T.checklist.map((item, i) => (
                    <li key={i}>
                      <span className="fc-check-icon">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M1.5 6l3 3 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="fc-book-right">
                <div className="fc-book-cta-box">
                  <div className="fc-book-cta-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect x="2" y="4" width="28" height="24" rx="3" stroke="#9c70ff" strokeWidth="1.8"/>
                      <path d="M9 2v5M23 2v5M2 12h28" stroke="#9c70ff" strokeWidth="1.8" strokeLinecap="round"/>
                      <circle cx="10" cy="19" r="1.5" fill="#9c70ff"/>
                      <circle cx="16" cy="19" r="1.5" fill="#9c70ff"/>
                      <circle cx="22" cy="19" r="1.5" fill="#9c70ff"/>
                    </svg>
                  </div>
                  <p className="fc-book-cta-label">{lang === 'cs' ? 'Vyberte si termín' : 'Pick your time slot'}</p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="fc-btn-book"
                  >
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
