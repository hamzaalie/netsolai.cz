import SiteLayout from '../components/SiteLayout';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export const BLOG_POSTS = [
  {
    slug: 'ai-chatbot-pro-firmy',
    tag: 'AI Chatbot',
    tagEn: 'AI Chatbot',
    tagColor: 'green',
    date: '20. května 2026',
    readTime: '7 min',
    titleCs: 'AI chatbot pro firmy: jak zvýšit tržby bez přidání lidí',
    titleEn: 'AI Chatbot for Business: How to Grow Revenue Without Hiring',
    excerptCs: 'AI chatbot není jen pro velké korporace. Zjistěte, jak ho nasadit do 2 týdnů a kolik vám ušetří — s konkrétními čísly.',
    excerptEn: 'An AI chatbot isn\'t just for big companies. Learn how to deploy one in 2 weeks and how much it saves — with real numbers.',
  },
  {
    slug: '5-ai-automatizaci-pro-vas-byznys',
    tag: 'AI Strategie',
    tagEn: 'AI Strategy',
    tagColor: 'blue',
    date: '20. května 2026',
    readTime: '6 min',
    titleCs: '5 AI automatizací, které každý byznys potřebuje v roce 2026',
    titleEn: '5 AI Automations Every Business Needs in 2026',
    excerptCs: 'Zjistěte, které 5 AI automatizací přináší firmám největší návratnost — a jak je nasadit bez technických znalostí.',
    excerptEn: 'Discover the 5 AI automations that deliver the highest ROI — and how to deploy them without technical knowledge.',
  },
  {
    slug: 'jak-neprijit-o-zakazniky',
    tag: 'AI Automatizace',
    tagEn: 'AI Automation',
    tagColor: 'purple',
    date: '20. května 2026',
    readTime: '8 min',
    titleCs: 'Jak nepřijít o zákazníky: systém který odpovídá za vás',
    titleEn: 'How Not to Lose Customers: A System That Responds for You',
    excerptCs: 'Každý zmeškaný dotaz je ztracený zákazník. Zjistěte, jak AI automatizace zajistí, že vaše firma nikdy nezmešká obchodní příležitost.',
    excerptEn: 'Every missed enquiry is a lost customer. See how AI automation ensures your business never misses a business opportunity.',
  },
];

export function BlogCard({ post, lang }) {
  const title = lang === 'cs' ? post.titleCs : post.titleEn;
  const excerpt = lang === 'cs' ? post.excerptCs : post.excerptEn;
  const tag = lang === 'cs' ? post.tag : (post.tagEn || post.tag);
  return (
    <a href={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card-top">
        <span className={`blog-card-tag blog-card-tag--${post.tagColor}`}>{tag}</span>
        <span className="blog-card-read">{post.readTime} {lang === 'cs' ? 'čtení' : 'read'}</span>
      </div>
      <h3 className="blog-card-title">{title}</h3>
      <p className="blog-card-excerpt">{excerpt}</p>
      <div className="blog-card-footer">
        <div className="blog-card-author">
          <div className="blog-card-logo-wrap">
            <img src="/images/logo/Oroginal.png" alt="Netsol AI" className="blog-card-logo" />
          </div>
          <div>
            <p className="blog-card-author-name">Netsol AI</p>
            <p className="blog-card-date">{post.date}</p>
          </div>
        </div>
        <span className="blog-card-arrow">→</span>
      </div>
    </a>
  );
}

export default function BlogIndexPage() {
  const { lang } = useLanguage();

  const jsonLd = [{
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": lang === 'cs' ? "Blog — Netsol AI" : "Blog — Netsol AI",
    "url": "https://netsolai.cz/blog",
    "publisher": { "@type": "Organization", "name": "Netsol AI s.r.o." }
  }];

  return (
    <SiteLayout>
      <SEOHead
        title={lang === 'cs' ? "Blog — AI, Automatizace & Digitální strategie | Netsol AI" : "Blog — AI, Automation & Digital Strategy | Netsol AI"}
        description={lang === 'cs' ? "Praktické články o AI automatizaci, digitální strategii a growth hackingu pro české a slovenské podniky." : "Practical articles on AI automation, digital strategy, and growth for businesses."}
        canonical="/blog"
        jsonLd={jsonLd}
      />

      {/* ══ HERO ══ */}
      <div className="fc-hero-wrapper">
        <section className="blog-hero blog-index-hero">
          <div className="blog-hero-orb blog-hero-orb--1" aria-hidden="true" />
          <div className="blog-hero-orb blog-hero-orb--2" aria-hidden="true" />
          <div className="container blog-index-hero-inner">
            <div className="blog-hero-meta">
              <span className="blog-tag">{lang === 'cs' ? 'Znalosti & Strategie' : 'Insights & Strategy'}</span>
            </div>
            <h1 className="blog-hero-h1">
              {lang === 'cs' ? <>Blog<br /><span className="blog-hero-accent">Netsol AI</span></> : <>The Netsol AI<span className="blog-hero-accent">Blog</span></>}
            </h1>
            <p className="blog-hero-sub">
              {lang === 'cs'
                ? 'Praktické návody, case studies a strategie o AI automatizaci pro české a slovenské podniky.'
                : 'Practical guides, case studies, and strategies on AI automation for modern businesses.'}
            </p>
          </div>
        </section>
      </div>

      {/* ══ POSTS GRID ══ */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">{lang === 'cs' ? 'Všechny články' : 'All Articles'}</p>
          <div className="section-head">
            <h2>{lang === 'cs' ? 'Přečtěte si naše nejnovější články' : 'Read Our Latest Articles'}</h2>
            <p>{lang === 'cs' ? 'Tipy, strategie a případové studie přímé z praxe.' : 'Tips, strategies, and case studies straight from the field.'}</p>
          </div>
          <div className="blog-grid">
            {BLOG_POSTS.map(post => (
              <BlogCard key={post.slug} post={post} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ NEWSLETTER / CTA ══ */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="blog-newsletter-card">
            <div className="blog-newsletter-orb" aria-hidden="true" />
            <p className="blog-newsletter-eyebrow">{lang === 'cs' ? 'Zůstaňte v obraze' : 'Stay in the loop'}</p>
            <h2 className="blog-newsletter-h2">{lang === 'cs' ? 'Chcete vědět, jak AI mění byznys?' : 'Want to know how AI is changing business?'}</h2>
            <p className="blog-newsletter-desc">{lang === 'cs' ? 'Zarezervujte si bezplatnou konzultaci a zjistěte, jak konkrétně může AI pomoci vašemu podnikání.' : 'Book a free consultation and find out exactly how AI can help your business.'}</p>
            <a href="/free-consultation" className="fc-btn-white" style={{ alignSelf: 'center' }}>
              {lang === 'cs' ? 'Konzultace zdarma →' : 'Free Consultation →'}
            </a>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
