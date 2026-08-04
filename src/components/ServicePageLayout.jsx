import SiteLayout from './SiteLayout';
import SEOHead from './SEOHead';

const CALENDLY_URL = 'https://calendly.com/netsolai-info/30min';
const SITE_URL = 'https://netsolai.cz';

export default function ServicePageLayout({ lang, meta, children, extraJsonLd = [] }) {
  const T = meta[lang] || meta.en;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": T.serviceType,
      "name": T.h1a + ' ' + T.h1b,
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
        { "@type": "ListItem", "position": 3, "name": T.h1a + ' ' + T.h1b, "item": `${SITE_URL}/services/${T.slug}` },
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Netsol AI s.r.o.",
      "url": SITE_URL,
      "logo": `${SITE_URL}/images/logo/Oroginal.png`,
      "sameAs": [
        "https://www.facebook.com/netsolai.cz/",
        "https://www.instagram.com/netsolai/",
        "https://www.tiktok.com/@netsolai.cz"
      ]
    }
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
      <div className="fc-hero-wrapper">
        <section className="blog-hero">
          <div className="blog-hero-orb blog-hero-orb--1" aria-hidden="true" />
          <div className="blog-hero-orb blog-hero-orb--2" aria-hidden="true" />
          <div className="container blog-hero-inner">
            <nav className="blog-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">›</span>
              <span>{lang === 'cs' ? 'Služby' : 'Services'}</span>
              <span aria-hidden="true">›</span>
              <span>{T.tag}</span>
            </nav>
            <div className="blog-hero-meta">
              <span className="blog-tag">{T.tag}</span>
            </div>
            <h1 className="blog-hero-h1">
              {T.h1a}<br />
              <span className="blog-hero-accent">{T.h1b}</span>
            </h1>
            <p className="blog-hero-sub">{T.sub}</p>
          </div>
        </section>
      </div>

      {/* ══ ARTICLE + SIDEBAR ══ */}
      <section className="section blog-article-section">
        <div className="container blog-article-container">
          <article className="blog-article">
            {children}
          </article>

          {/* ── Sidebar ── */}
          <aside className="blog-sidebar">
            <div className="blog-sidebar-card">
              <img src="/images/logo/Oroginal.png" alt="Netsol AI" className="blog-sidebar-logo" />
              <p className="blog-sidebar-name">Netsol AI</p>
              <p className="blog-sidebar-role">AI-Powered Digital Agency</p>
              <p className="blog-sidebar-bio">{T.sidebarBio}</p>
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="blog-sidebar-cta">
                {T.sidebarCta}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
