import SiteLayout from '../../components/SiteLayout';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../context/LanguageContext';

const TOOLS = [
  {
    href: '/nastroje/ztrata-poptavek',
    badgeColor: 'red',
    badgeCs: 'Nejvyšší konverze',
    badgeEn: 'Highest Converting',
    icon: '📉',
    titleCs: 'Kalkulačka ztráty poptávek',
    titleEn: 'Lead Loss Calculator',
    descCs: 'Zjistěte přesnou částku v Kč, o kterou přicházíte každý rok kvůli pomalým odpovědím. Výsledek vás překvapí.',
    descEn: 'Find out exactly how much CZK you lose each year due to slow responses. The result will surprise you.',
    ctaCs: 'Spočítat ztrátu →',
    ctaEn: 'Calculate My Loss →',
  },
  {
    href: '/nastroje/kalkulacka-provize',
    badgeColor: 'purple',
    badgeCs: 'SEO nástroj',
    badgeEn: 'SEO Tool',
    icon: '💰',
    titleCs: 'Kalkulačka provize makléře',
    titleEn: 'Commission Calculator',
    descCs: 'Spočítejte svůj čistý výdělek z každého obchodu — po provizi agentury, výdajích, daních i hodinové sazbě.',
    descEn: 'Calculate your net earnings from every deal — after agency split, expenses, taxes, and hourly rate.',
    ctaCs: 'Spočítat provizi →',
    ctaEn: 'Calculate Commission →',
  },
  {
    href: '/nastroje/ai-skore',
    badgeColor: 'green',
    badgeCs: 'Lead magnet',
    badgeEn: 'Lead Magnet',
    icon: '🤖',
    titleCs: 'AI Připravenost Kanceláře',
    titleEn: 'Agency AI Readiness Score',
    descCs: '10 otázek, 2 minuty. Zjistěte, kde ztrácíte čas a příjmy — a co konkrétně dělat.',
    descEn: '10 questions, 2 minutes. Find out where you\'re losing time and revenue — and what to do about it.',
    ctaCs: 'Spustit test →',
    ctaEn: 'Start the Test →',
  },
];

export default function NastrojeIndexPage() {
  const { lang } = useLanguage();
  const cs = lang === 'cs';

  const jsonLd = [{
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": cs ? "Bezplatné nástroje pro realitní makléře — Netsol AI" : "Free Tools for Real Estate Agents — Netsol AI",
    "url": "https://netsolai.cz/nastroje",
    "publisher": { "@type": "Organization", "name": "Netsol AI s.r.o." },
  }];

  return (
    <SiteLayout>
      <SEOHead
        title={cs
          ? "Bezplatné nástroje pro realitní makléře | Netsol AI"
          : "Free Tools for Real Estate Agents | Netsol AI"}
        description={cs
          ? "Kalkulačka provize, kalkulačka ztráty poptávek a AI test připravenosti — 3 bezplatné nástroje pro realitní makléře v ČR."
          : "Commission calculator, lead loss calculator, and AI readiness test — 3 free tools for real estate agents."}
        canonical="/nastroje"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <div className="fc-hero-wrapper">
        <section className="tool-hero tool-hero--hub">
          <div className="tool-hero-orb tool-hero-orb--1" aria-hidden="true" />
          <div className="tool-hero-orb tool-hero-orb--2" aria-hidden="true" />
          <div className="container tool-hero-inner tool-hero-inner--center">
            <div className="tool-hero-badge">
              <span className="tool-badge tool-badge--white">
                {cs ? '3 bezplatné nástroje' : '3 free tools'}
              </span>
            </div>
            <h1 className="tool-hero-h1">
              {cs
                ? <>Nástroje pro<br /><span className="tool-hero-accent">realitní makléře</span></>
                : <>Tools for<br /><span className="tool-hero-accent">Real Estate Agents</span></>}
            </h1>
            <p className="tool-hero-sub">
              {cs
                ? 'Kalkulačky a testy, které vám ukáží přesně, kolik vyděláváte, kolik ztrácíte — a co s tím dělat.'
                : 'Calculators and tests that show you exactly how much you earn, how much you lose — and what to do about it.'}
            </p>
          </div>
        </section>
      </div>

      {/* TOOLS GRID */}
      <section className="section">
        <div className="container">
          <div className="tools-hub-grid">
            {TOOLS.map(tool => (
              <a key={tool.href} href={tool.href} className="tools-hub-card">
                <div className="tools-hub-card-top">
                  <span className={`tool-badge tool-badge--${tool.badgeColor}`}>
                    {cs ? tool.badgeCs : tool.badgeEn}
                  </span>
                  <span className="tools-hub-icon">{tool.icon}</span>
                </div>
                <h2 className="tools-hub-title">{cs ? tool.titleCs : tool.titleEn}</h2>
                <p className="tools-hub-desc">{cs ? tool.descCs : tool.descEn}</p>
                <span className="tools-hub-cta">{cs ? tool.ctaCs : tool.ctaEn}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="blog-newsletter-card">
            <div className="blog-newsletter-orb" aria-hidden="true" />
            <p className="blog-newsletter-eyebrow">{cs ? 'Víte, co čísla znamenají?' : 'Know what the numbers mean?'}</p>
            <h2 className="blog-newsletter-h2">
              {cs ? 'Pojďme projít výsledky spolu' : 'Let\'s go through the results together'}
            </h2>
            <p className="blog-newsletter-desc">
              {cs
                ? 'Rezervujte si bezplatnou 30minutovou konzultaci a zjistěte, jak konkrétně může AI pomoci vašemu podnikání.'
                : 'Book a free 30-minute consultation and find out exactly how AI can help your business.'}
            </p>
            <a href="/free-consultation" className="fc-btn-white" style={{ alignSelf: 'center' }}>
              {cs ? 'Konzultace zdarma →' : 'Free Consultation →'}
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
