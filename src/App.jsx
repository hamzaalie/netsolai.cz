import { AIAutomationPreview, ProductDevPreview, DesignPreview, GrowthPreview, IntegrationsPreview } from './components/ServicePreviews';
import AboutSection from './components/AboutSection';
import SiteLayout from './components/SiteLayout';
import SEOHead from './components/SEOHead';
import { useEffect } from 'react';
import { useLanguage } from './context/LanguageContext';
import translations from './i18n/index';


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
    let cols;
    let rows;
    let grid = [];

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

const SERVICE_ICONS = [
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#9c70ff" strokeWidth="1.5" /><path d="M7 10h6M10 7v6" stroke="#9c70ff" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="3" width="16" height="13" rx="2" stroke="#9c70ff" strokeWidth="1.5" /><path d="M6 7l3 3-3 3M11 13h3" stroke="#9c70ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 16l4-8 4 8M7 12h4" stroke="#9c70ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="15" cy="6" r="2.5" stroke="#9c70ff" strokeWidth="1.5" /></svg>,
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><polyline points="2,15 6,9 10,11 14,5 18,3" stroke="#9c70ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="18" cy="3" r="2" fill="#9c70ff" /></svg>,
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M4 10h12" stroke="#9c70ff" strokeWidth="1.5" strokeLinecap="round" /><circle cx="10" cy="10" r="3" stroke="#9c70ff" strokeWidth="1.5" /></svg>,
];

const SERVICE_PREVIEWS = [
  <AIAutomationPreview />,
  <ProductDevPreview />,
  <DesignPreview />,
  <GrowthPreview />,
  <IntegrationsPreview />,
];

const SERVICE_CARD_CLASSES = ['sc-top', 'sc-top', 'sc-bot', 'sc-bot', 'sc-bot'];

export default function App() {
  useBinaryCanvas('cta-particles');
  const { lang } = useLanguage();
  const T = translations[lang];

  const homeJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Netsol AI s.r.o.",
      "url": "https://netsolai.cz",
      "logo": "https://netsolai.cz/images/logo/Oroginal.png",
      "description": "AI-powered digital agency specialising in automation systems, scalable web development, and growth infrastructure for startups and scaling businesses.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Školská 660/3, Nové Město",
        "addressLocality": "Praha 1",
        "postalCode": "110 00",
        "addressCountry": "CZ"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+420721405452",
        "email": "info@netsolai.cz",
        "contactType": "customer service",
        "availableLanguage": ["English", "Czech"]
      },
      "sameAs": [
        "https://www.facebook.com/netsolai.cz/",
        "https://www.instagram.com/netsolai/",
        "https://www.tiktok.com/@netsolai.cz"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Netsol AI",
      "url": "https://netsolai.cz"
    }
  ];

  return (
    <SiteLayout>
      <SEOHead
        title="Netsol AI | AI-Powered Digital Agency — Automation, Web Dev & Growth"
        description="Netsol AI builds AI automation systems, scalable web products, and growth infrastructure for startups and businesses ready to scale smarter. Based in Prague."
        canonical="/"
        jsonLd={homeJsonLd}
      />

      {/* ══ HERO BANNER ══ */}
      <div className="cta-banner-wrapper">
        <section className="cta-banner" id="home" aria-label="Hero">
          <div className="cta-bg" aria-hidden="true">
            <canvas id="cta-particles" className="cta-canvas" />
            <div className="cta-glow" />
          </div>
          <div className="cta-content">
            <p className="cta-eyebrow">{T.hero.eyebrow}</p>
            <h1 className="cta-headline">
              {T.hero.headline}
            </h1>
            <p className="cta-sub">
              {T.hero.sub}
            </p>
            <div className="cta-actions">
              <a className="cta-btn-primary" href="/contact">{T.hero.cta1}</a>
              <a className="cta-btn-secondary" href="#services">{T.hero.cta2}</a>
            </div>
          </div>
        </section>
      </div>

      {/* ══ ABOUT ══ */}
      <AboutSection />

      {/* ══ SERVICES ══ */}
      <section className="section" id="services">
        <div className="container">
          <p className="eyebrow">{T.services.eyebrow}</p>
          <div className="section-head">
            <h2>{T.services.title}</h2>
            <p>{T.services.sub}</p>
          </div>

          <div className="services-grid">
            {T.services.cards.map((card, i) => (
              <article key={i} className={`service-card ${SERVICE_CARD_CLASSES[i]}`}>
                <div className="sc-card-content">
                  <div className="sc-header">
                    <div className="sc-icon">
                      {SERVICE_ICONS[i]}
                    </div>
                    <p className="service-lead">{card.lead}</p>
                  </div>
                  <h3>{card.title}</h3>
                  <p className="sc-desc">{card.desc}</p>
                </div>
                {SERVICE_PREVIEWS[i]}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMPARISON ══ */}
      <section className="comp-section">
        <div className="container">
          <div className="comp-header">
            <p className="eyebrow">{T.comparison.eyebrow}</p>
            <h2 className="comp-title">{T.comparison.title}</h2>
          </div>
          <div className="comp-grid">

            {/* Old Way */}
            <div className="comp-card comp-old">
              <h3 className="comp-card-title">{T.comparison.old.title}</h3>
              <ul className="comp-list">
                {T.comparison.old.items.map((item, i) => (
                  <li key={i} className="comp-item comp-item--bad">
                    <span className="comp-icon comp-icon--bad">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Netsol AI Way */}
            <div className="comp-card comp-new">
              <h3 className="comp-card-title">{T.comparison.new.title}</h3>
              <ul className="comp-list">
                {T.comparison.new.items.map((item, i) => (
                  <li key={i} className="comp-item comp-item--good">
                    <span className="comp-icon comp-icon--good">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1.5 6l3 3 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ══ PARTNERS ══ */}
      <section className="partners-section" aria-label="Partners">
        <div className="container partners-inner">
          <div className="partners-header">
            <p className="partners-eyebrow">{T.partners.eyebrow}</p>
            <h2 className="partners-heading">{T.partners.heading.split('\n').map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</h2>
          </div>
          <div className="partners-grid">
            {[
              { src: '/images/VSB_FEI_LOGO.svg',                 alt: 'VSB FEI', num: '01' },
              { src: '/images/OpenAI-Logo-2022-scaled.png',       alt: 'OpenAI',  num: '02' },
              { src: '/images/Grok-feb-2025-logo.svg',            alt: 'Grok',    num: '03' },
              { src: '/images/Claude_Logo_2023-s5120-scaled.png', alt: 'Claude',  num: '04' },
              { src: '/images/pngwing.com_.png',                  alt: 'Vercel',  num: '05' },
              { src: '/images/pngwing.com-1-scaled.png',          alt: 'n8n',     num: '06' },
            ].map(({ src, alt, num }) => (
              <div key={num} className="partners-logo-cell">
                <img src={src} alt={alt} className="partners-logo" />
                <span className="partners-num">{num}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PORTFOLIO ══ */}
      <section className="section portfolio-section" id="portfolio">
        <div className="container">
          <p className="eyebrow">{T.portfolio.eyebrow}</p>
          <div className="section-head">
            <h2>{T.portfolio.title}</h2>
            <p>{T.portfolio.sub}</p>
          </div>

          <div className="portfolio-grid">

            <a className="portfolio-card" href="https://www.creativehiveco.com/" target="_blank" rel="noreferrer">
              <div className="pc-image-wrapper">
                <img src="/images/portfolio/creative-hive-co.png" alt="Creative Hive Co — creative community platform" />
                <div className="pc-hover-overlay">
                  <div className="pc-hover-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </div>
                <div className="pc-tags-floating">
                  <span className="pc-tag">Web Dev</span>
                  <span className="pc-tag">Community</span>
                </div>
              </div>
              <h3>Creative Hive Co</h3>
            </a>

            <a className="portfolio-card" href="https://www.thecontractorsacademy.com/" target="_blank" rel="noreferrer">
              <div className="pc-image-wrapper">
                <img src="/images/portfolio/the-contractors-academy.png" alt="The Contractors Academy — training platform for contractors" />
                <div className="pc-hover-overlay">
                  <div className="pc-hover-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </div>
                <div className="pc-tags-floating">
                  <span className="pc-tag">E-Learning</span>
                  <span className="pc-tag">Web Dev</span>
                </div>
              </div>
              <h3>The Contractors Academy</h3>
            </a>

            <a className="portfolio-card" href="https://slumbercbn.com/" target="_blank" rel="noreferrer">
              <div className="pc-image-wrapper">
                <img src="/images/portfolio/slumber.png" alt="Slumber CBN — sleep wellness e-commerce brand" />
                <div className="pc-hover-overlay">
                  <div className="pc-hover-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </div>
                <div className="pc-tags-floating">
                  <span className="pc-tag">E-Commerce</span>
                  <span className="pc-tag">Branding</span>
                </div>
              </div>
              <h3>Slumber CBN</h3>
            </a>

            <a className="portfolio-card" href="https://imagine-thailand.com/" target="_blank" rel="noreferrer">
              <div className="pc-image-wrapper">
                <img src="/images/portfolio/imagine-health.png" alt="Imagine Health — health & wellness platform" />
                <div className="pc-hover-overlay">
                  <div className="pc-hover-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </div>
                <div className="pc-tags-floating">
                  <span className="pc-tag">Health</span>
                  <span className="pc-tag">Web Dev</span>
                </div>
              </div>
              <h3>Imagine Health</h3>
            </a>

          </div>
        </div>
      </section>

      {/* ══ PRE-FOOTER CTA ══ */}
      <section className="precta-section">
        <div className="container">
          <div className="precta-card">

            <div className="precta-left">
              <span className="precta-badge">{T.precta.badge}</span>

              <h2 className="precta-heading">
                {T.precta.heading.split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </h2>

              <p className="precta-desc">
                {T.precta.desc}
              </p>

              <div className="precta-actions">
                <a href="/contact" className="precta-btn-primary">{T.precta.cta1}</a>
                <a href="#services" className="precta-btn-secondary">{T.precta.cta2}</a>
              </div>

            </div>

          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
