import SiteLayout from './SiteLayout';
import SEOHead from './SEOHead';
import { BLOG_POSTS } from '../pages/BlogIndexPage';

const BOOKING_URL = 'https://booking.netsolai.cz/register';
const SITE_URL = 'https://netsolai.cz';

export default function BlogPostLayout({ lang, meta, children, topics }) {
  const T = meta[lang] || meta.en;

  const otherPosts = BLOG_POSTS.filter(p => p.slug !== T.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": { "@type": "WebPage", "@id": `${SITE_URL}/blog/${T.slug}` },
      "headline": T.h1a + ' ' + T.h1b,
      "description": T.seoDesc,
      "image": `${SITE_URL}/images/logo/Oroginal.png`,
      "author": {
        "@type": "Organization",
        "name": "Netsol AI s.r.o.",
        "url": SITE_URL,
        "logo": { "@type": "ImageObject", "url": `${SITE_URL}/images/logo/Oroginal.png` }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Netsol AI s.r.o.",
        "url": SITE_URL,
        "logo": { "@type": "ImageObject", "url": `${SITE_URL}/images/logo/Oroginal.png` }
      },
      "datePublished": T.datePublished || "2026-05-20",
      "dateModified": T.dateModified || "2026-05-20",
      "inLanguage": lang === 'cs' ? 'cs-CZ' : 'en-US',
      "url": `${SITE_URL}/blog/${T.slug}`,
      "keywords": (topics || []).join(', '),
      "articleSection": T.tag,
      "wordCount": T.wordCount || 1500,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog` },
        { "@type": "ListItem", "position": 3, "name": T.h1a + ' ' + T.h1b, "item": `${SITE_URL}/blog/${T.slug}` },
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
        canonical={`/blog/${T.slug}`}
        jsonLd={jsonLd}
      />

      {/* ══ HERO ══ */}
      <div className="fc-hero-wrapper">
        <section className="blog-hero">
          <div className="blog-hero-orb blog-hero-orb--1" aria-hidden="true" />
          <div className="blog-hero-orb blog-hero-orb--2" aria-hidden="true" />
          <div className="container blog-hero-inner">
            {/* Breadcrumb */}
            <nav className="blog-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">›</span>
              <a href="/blog">Blog</a>
              <span aria-hidden="true">›</span>
              <span>{T.tag}</span>
            </nav>
            <div className="blog-hero-meta">
              <span className="blog-tag">{T.tag}</span>
              <span className="blog-hero-date">{T.date}</span>
              <span className="blog-hero-read">{T.readTime}</span>
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

            {/* ── Related Posts ── */}
            {otherPosts.length > 0 && (
              <div className="blog-related">
                <h3 className="blog-related-title">
                  {lang === 'cs' ? 'Mohlo by vás zajímat' : 'You might also like'}
                </h3>
                <div className="blog-related-grid">
                  {otherPosts.map(post => (
                    <a key={post.slug} href={`/blog/${post.slug}`} className="blog-related-card">
                      <span className={`blog-card-tag blog-card-tag--${post.tagColor}`}>
                        {lang === 'cs' ? post.tag : (post.tagEn || post.tag)}
                      </span>
                      <p className="blog-related-card-title">
                        {lang === 'cs' ? post.titleCs : post.titleEn}
                      </p>
                      <span className="blog-related-read">
                        {post.readTime} {lang === 'cs' ? 'čtení' : 'read'} →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* ── Sidebar ── */}
          <aside className="blog-sidebar">
            <div className="blog-sidebar-card">
              <img src="/images/logo/Oroginal.png" alt="Netsol AI" className="blog-sidebar-logo" />
              <p className="blog-sidebar-name">Netsol AI</p>
              <p className="blog-sidebar-role">AI-Powered Digital Agency</p>
              <p className="blog-sidebar-bio">{T.sidebarBio}</p>
              <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="blog-sidebar-cta">
                {T.sidebarCta}
              </a>
            </div>

            {topics && topics.length > 0 && (
              <div className="blog-sidebar-card blog-sidebar-card--topics">
                <p className="blog-sidebar-section-label">{T.topicsLabel}</p>
                {topics.map((t, i) => (
                  <span key={i} className="fc-tag">{t}</span>
                ))}
              </div>
            )}
          </aside>
        </div>
      </section>

    </SiteLayout>
  );
}
