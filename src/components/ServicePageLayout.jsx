import { useState } from 'react';
import SiteLayout from './SiteLayout';
import SEOHead from './SEOHead';

const CALENDLY_URL = 'https://calendly.com/netsolai-info/30min';
const SITE_URL = 'https://netsolai.cz';

export default function ServicePageLayout({ lang, meta, content, extraJsonLd = [] }) {
  const T = meta[lang] || meta.en;
  const C = content[lang] || content.en;
  const [openFaq, setOpenFaq] = useState(-1);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": T.serviceType,
      "name": T.h1,
      "description": T.seoDesc,
      "provider": {
        "@type": "Organization",
        "name": "Netsol AI s.r.o.",
        "url": SITE_URL,
        "logo": `${SITE_URL}/images/logo/Oroginal.png`,
      },
      "areaServed": { "@type": "Country", "name": "Czech Republic" },
      "url": `${SITE_URL}/services/${T.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": lang === 'cs' ? 'Služby' : 'Services', "item": `${SITE_URL}/services` },
        { "@type": "ListItem", "position": 3, "name": T.h1, "item": `${SITE_URL}/services/${T.slug}` },
      ]
    },
  ];

  return (
    <SiteLayout>
      <SEOHead
        title={T.seoTitle}
        description={T.seoDesc}
        canonical={`/services/${T.slug}`}
        jsonLd={[...jsonLd, ...extraJsonLd]}
      />

      {/* ══ HERO ══ */}
      <div className="cta-banner-wrapper">
        <section className="cta-banner" aria-label="Hero">
          <div className="cta-bg" aria-hidden="true">
            <div className="cta-glow" />
          </div>
          <div className="cta-content">
            <p className="cta-eyebrow">{T.tag}</p>
            <h1 className="cta-headline">{T.h1}</h1>
            <p className="cta-sub">{C.heroSub}</p>
            <div className="cta-actions">
              <a className="cta-btn-primary" href={CALENDLY_URL} target="_blank" rel="noreferrer">{C.ctaPrimary}</a>
              <a className="cta-btn-secondary" href="#what">{C.ctaSecondary}</a>
            </div>
            {C.stats && (
              <div className="svc-stats">
                {C.stats.map((s, i) => (
                  <div key={i} className="svc-stat">
                    <div className="svc-stat-num">{s.num}</div>
                    <div className="svc-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      {/* ══ PROBLEM → SOLUTION ══ */}
      {C.problems && (
        <section className="comp-section">
          <div className="container">
            <div className="comp-header">
              <p className="eyebrow">{C.problemsEyebrow}</p>
              <h2 className="comp-title">{C.problemsTitle}</h2>
            </div>
            <div className="comp-grid">
              <div className="comp-card comp-old">
                <h3 className="comp-card-title">{C.problems.title}</h3>
                <ul className="comp-list">
                  {C.problems.items.map((item, i) => (
                    <li key={i} className="comp-item comp-item--bad">
                      <span className="comp-icon comp-icon--bad">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="comp-card comp-new">
                <h3 className="comp-card-title">{C.solutions.title}</h3>
                <ul className="comp-list">
                  {C.solutions.items.map((item, i) => (
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
      )}

      {/* ══ WHAT IT SOLVES — feature grid ══ */}
      <section className="section" id="what">
        <div className="container">
          <p className="eyebrow">{C.whatEyebrow}</p>
          <div className="section-head">
            <h2>{C.whatTitle}</h2>
            <p>{C.whatSub}</p>
          </div>
          <div className="svc-feature-grid">
            {C.features.map((f, i) => (
              <article key={i} className="svc-feature-card">
                <div className="sc-header">
                  <div className="sc-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#9c70ff" strokeWidth="1.5" /><path d="M7 10h6M10 7v6" stroke="#9c70ff" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </div>
                </div>
                <h3>{f.title}</h3>
                <p className="sc-desc">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS — process steps ══ */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">{C.processEyebrow}</p>
          <div className="section-head">
            <h2>{C.processTitle}</h2>
          </div>
          <div className="svc-process-grid">
            {C.steps.map((s, i) => (
              <div key={i} className="svc-process-step">
                <div className="svc-process-num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHO IT'S FOR ══ */}
      <section className="comp-section">
        <div className="container">
          <div className="comp-header">
            <p className="eyebrow">{C.forEyebrow}</p>
            <h2 className="comp-title">{C.forTitle}</h2>
          </div>
          <div className="svc-for-wrap">
            <div className="comp-card comp-new svc-for-card">
              <h3 className="comp-card-title">{C.forSubtitle}</h3>
              <ul className="comp-list">
                {C.forItems.map((item, i) => (
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

      {/* ══ FAQ ══ */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">{C.faqEyebrow}</p>
          <div className="section-head">
            <h2>{C.faqTitle}</h2>
          </div>
          <div className="svc-faq">
            {C.faq.map((q, i) => (
              <div key={i} className={`svc-faq-item${openFaq === i ? ' open' : ''}`}>
                <button
                  type="button"
                  className="svc-faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
                >
                  {q.q}
                  <span className="svc-faq-icon" aria-hidden="true">+</span>
                </button>
                <div className="svc-faq-a">
                  <p>{q.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CLOSING CTA ══ */}
      <section className="precta-section">
        <div className="container">
          <div className="precta-card">
            <div className="precta-left">
              <span className="precta-badge">{C.ctaEyebrow}</span>
              <h2 className="precta-heading">{C.ctaHeading}</h2>
              <p className="precta-desc">{C.ctaDesc}</p>
              <div className="precta-actions">
                <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="precta-btn-primary">{C.ctaPrimary}</a>
                <a href="/contact" className="precta-btn-secondary">{C.ctaSecondary2}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
