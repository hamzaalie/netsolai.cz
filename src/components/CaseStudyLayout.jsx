import SiteLayout from './SiteLayout';
import SEOHead from './SEOHead';

const SITE_URL = 'https://netsolai.cz';

export default function CaseStudyLayout({ lang, meta, content }) {
  const T = meta[lang] || meta.en;
  const C = content[lang] || content.en;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": T.clientName,
      "description": T.seoDesc,
      "url": `${SITE_URL}/pripadove-studie/${T.slug}`,
      "creator": {
        "@type": "Organization",
        "name": "Netsol AI s.r.o.",
        "url": SITE_URL,
      },
      "about": T.clientName,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": lang === 'cs' ? 'Případové studie' : 'Case Studies', "item": `${SITE_URL}/pripadove-studie` },
        { "@type": "ListItem", "position": 3, "name": T.clientName, "item": `${SITE_URL}/pripadove-studie/${T.slug}` },
      ]
    },
  ];

  return (
    <SiteLayout>
      <SEOHead
        title={T.seoTitle}
        description={T.seoDesc}
        canonical={`/pripadove-studie/${T.slug}`}
        jsonLd={jsonLd}
      />

      {/* ══ HERO ══ */}
      <div className="fc-hero-wrapper">
        <section className="blog-hero">
          <div className="blog-hero-orb blog-hero-orb--1" aria-hidden="true" />
          <div className="blog-hero-orb blog-hero-orb--2" aria-hidden="true" />
          <div className="container blog-hero-inner">
            <nav className="blog-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">›</span>
              <span>{lang === 'cs' ? 'Případové studie' : 'Case Studies'}</span>
              <span aria-hidden="true">›</span>
              <span>{T.clientName}</span>
            </nav>
            <div className="blog-hero-meta">
              {T.tags.map((tag, i) => (
                <span key={i} className="blog-tag">{tag}</span>
              ))}
            </div>
            <h1 className="blog-hero-h1">{T.clientName}</h1>
            <p className="blog-hero-sub">{C.tagline}</p>
          </div>
        </section>
      </div>

      {/* ══ SCREENSHOT ══ */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
        <div className="container">
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--line)', boxShadow: '0 12px 32px rgba(17,18,35,0.08)' }}>
            <img src={T.image} alt={T.clientName} style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* ══ ABOUT THE PROJECT ══ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <p className="eyebrow">{C.aboutEyebrow}</p>
          <h2 style={{ marginBottom: '1rem' }}>{C.aboutTitle}</h2>
          {C.aboutParagraphs.map((p, i) => (
            <p key={i} style={{ fontSize: '0.98rem', color: '#4b5563', lineHeight: 1.75, marginBottom: '1rem' }}>{p}</p>
          ))}
        </div>
      </section>

      {/* ══ WHAT WE BUILT ══ */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">{C.builtEyebrow}</p>
          <div className="section-head">
            <h2>{C.builtTitle}</h2>
          </div>
          <div className="svc-feature-grid">
            {C.built.map((f, i) => (
              <article key={i} className="svc-feature-card">
                <h3>{f.title}</h3>
                <p className="sc-desc">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VISIT LIVE SITE + CTA ══ */}
      <section className="precta-section">
        <div className="container">
          <div className="precta-card">
            <div className="precta-left">
              <span className="precta-badge">{C.ctaEyebrow}</span>
              <h2 className="precta-heading">{C.ctaHeading}</h2>
              <p className="precta-desc">{C.ctaDesc}</p>
              <div className="precta-actions">
                <a href="/contact" className="precta-btn-primary">{C.ctaPrimary}</a>
                <a href={T.liveUrl} target="_blank" rel="noreferrer" className="precta-btn-secondary">{C.ctaSecondary}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
