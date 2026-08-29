import BlogPostLayout from '../components/BlogPostLayout';
import { useLanguage } from '../context/LanguageContext';

const BOOKING_URL = 'https://booking.netsolai.cz/register';

const meta = {
  cs: {
    slug: 'kolik-stoji-ai-automatizace-chatbot',
    seoTitle: 'Kolik stojí AI chatbot a AI automatizace v roce 2026? | Netsol AI',
    seoDesc: 'Kompletní přehled cen AI chatbotů, AI agentů a automatizace v Česku v roce 2026 — co ovlivňuje cenu a na co se ptát dodavatele.',
    tag: 'AI Strategie',
    date: '8. srpna 2026',
    readTime: '6 min čtení',
    h1a: 'Kolik stojí AI chatbot',
    h1b: 'a AI automatizace v roce 2026',
    sub: 'Ceny AI řešení se v Česku výrazně liší podle rozsahu. Tenhle přehled vám ukáže reálné cenové rámce a co konkrétně cenu ovlivňuje.',
    wordCount: 1000,
    sidebarBio: 'Stavíme AI automatizaci, škálovatelné produkty a growth infrastrukturu pro podniky připravené na růst.',
    sidebarCta: 'Konzultace zdarma →',
    topicsLabel: 'Témata',
  },
  en: {
    slug: 'kolik-stoji-ai-automatizace-chatbot',
    seoTitle: 'How Much Does an AI Chatbot & AI Automation Cost in 2026? | Netsol AI',
    seoDesc: 'A complete pricing overview for AI chatbots, AI agents, and automation in the Czech market in 2026 — what drives cost and what to ask a vendor.',
    tag: 'AI Strategy',
    date: 'August 8, 2026',
    readTime: '6 min read',
    h1a: 'How Much Does an AI Chatbot',
    h1b: 'and AI Automation Cost in 2026',
    sub: 'AI solution pricing varies significantly by scope. This overview shows realistic price ranges and what actually drives the cost.',
    wordCount: 1000,
    sidebarBio: 'We build AI automation, scalable products, and growth infrastructure for businesses ready to grow.',
    sidebarCta: 'Free consultation →',
    topicsLabel: 'Topics',
  },
};

const topicsCs = ['AI Automatizace', 'AI Chatbot', 'Ceny', 'AI Strategie'];
const topicsEn = ['AI Automation', 'AI Chatbot', 'Pricing', 'AI Strategy'];

function ArticleCs() {
  return <>
    <p>„Kolik to stojí" je nejčastější otázka, kterou firmy řeší, než si vůbec objednají konzultaci — a je to oprávněná otázka, protože ceny AI řešení se pohybují ve velmi širokém rozmezí. Tenhle přehled shrnuje reálné cenové rámce na českém trhu v roce 2026, podle veřejně dostupných zdrojů, a co konkrétně cenu určuje.</p>

    <hr className="blog-divider" />

    <h2>Orientační ceny podle typu řešení</h2>
    <div className="blog-channels-grid">
      {[
        { icon: '💬', label: 'AI chatbot', desc: 'Jednodušší nasazení od cca 15 000 Kč. Komplexnější řešení napojené na CRM, objednávkový systém nebo znalostní bázi výrazně výš, podle rozsahu.' },
        { icon: '🤖', label: 'AI agent', desc: 'Nastavení typicky 50 000–200 000 Kč jednorázově, provozní licence cca 5 000–20 000 Kč měsíčně.' },
        { icon: '🌐', label: 'Web / aplikace', desc: 'Jednoduchý prezentační web řádově levněji než e-shop nebo webová aplikace na míru.' },
      ].map((ch, i) => (
        <div key={i} className="blog-channel-card">
          <span className="blog-channel-icon">{ch.icon}</span>
          <strong>{ch.label}</strong>
          <span>{ch.desc}</span>
        </div>
      ))}
    </div>
    <p>Tyto rozmezí jsou orientační souhrn napříč trhem, ne oficiální ceník Netsol AI — u nás dostanete přesnou nabídku po bezplatné konzultaci, kde probereme váš konkrétní případ.</p>

    <h2>Co konkrétně cenu ovlivňuje</h2>
    <p>Cenu neurčuje samotný nástroj, ale rozsah práce kolem něj:</p>
    <ul>
      <li><strong>Napojení na vaše systémy</strong> — web, e-mail, WhatsApp, CRM, rezervační nebo objednávkový systém. Čím víc systémů, tím vyšší cena.</li>
      <li><strong>Velikost znalostní báze</strong> — kolik dokumentů, produktů a scénářů se má řešení naučit.</li>
      <li><strong>Hloubka funkce</strong> — má řešení jen odpovídat na dotazy, nebo aktivně jednat, kvalifikovat leady a provádět kroky napříč systémy?</li>
    </ul>

    <h2>Dvě části ceny</h2>
    <p>Cena AI řešení se obvykle skládá ze dvou částí:</p>
    <div className="blog-callout blog-callout--example">
      <span className="blog-callout-label">Struktura ceny</span>
      <p>
        <strong>Jednorázové náklady</strong> — vývoj, návrh, napojení na systémy a nasazení.<br /><br />
        <strong>Provozní náklady</strong> — API volání, hosting, průběžná údržba a ladění. Tahle část se obvykle platí měsíčně.
      </p>
    </div>
    <p>Dodavatel, který uvádí jen jednorázovou cenu bez zmínky o provozních nákladech, buď zapomněl, nebo je počítá extra později — v obou případech se zeptejte předem.</p>

    <h2>Jak zjistit reálnou cenu pro váš případ</h2>
    <p>Obecné rozmezí vám dá představu o řádu čísel, ale přesnou cenu určí až konkrétní rozsah vašeho projektu. Nejrychlejší cesta je bezplatná konzultace, kde probereme, co přesně potřebujete, a dostanete konkrétní nabídku — ne obecný ceník.</p>

    <div className="blog-cta-block">
      <div className="blog-cta-orb" aria-hidden="true" />
      <p className="blog-cta-eyebrow">Bezplatná konzultace</p>
      <h3 className="blog-cta-h3">Chcete vědět, kolik by AI řešení stálo konkrétně u vás?</h3>
      <p className="blog-cta-desc">30 minut. Žádné závazky. Konkrétní nabídka na míru.</p>
      <div className="blog-cta-actions">
        <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="fc-btn-white">Rezervovat konzultaci zdarma</a>
        <a href="/contact" className="fc-btn-outline fc-btn-outline--dark">Kontaktovat nás</a>
      </div>
    </div>
  </>;
}

function ArticleEn() {
  return <>
    <p>"How much does it cost" is the most common question businesses ask before even booking a consultation — and it's a fair one, since AI solution pricing spans a wide range. This overview summarizes realistic price ranges in the Czech market in 2026, based on publicly available sources, and what actually determines the cost.</p>

    <hr className="blog-divider" />

    <h2>Rough pricing by solution type</h2>
    <div className="blog-channels-grid">
      {[
        { icon: '💬', label: 'AI chatbot', desc: 'Simple deployments start around 15,000 Kč. More complex solutions connected to a CRM, ordering system, or knowledge base cost significantly more depending on scope.' },
        { icon: '🤖', label: 'AI agent', desc: 'Setup typically 50,000-200,000 Kč one-time, plus roughly 5,000-20,000 Kč/month in operating license costs.' },
        { icon: '🌐', label: 'Website / application', desc: 'A simple marketing site is an order of magnitude cheaper than a custom e-commerce store or web application.' },
      ].map((ch, i) => (
        <div key={i} className="blog-channel-card">
          <span className="blog-channel-icon">{ch.icon}</span>
          <strong>{ch.label}</strong>
          <span>{ch.desc}</span>
        </div>
      ))}
    </div>
    <p>These ranges are a general market summary, not Netsol AI's official price list — you'll get an exact quote from us after a free consultation where we discuss your specific case.</p>

    <h2>What actually drives the cost</h2>
    <p>Price isn't set by the tool itself but by the work around it:</p>
    <ul>
      <li><strong>Connecting to your systems</strong> — website, email, WhatsApp, CRM, booking or ordering system. More systems means higher cost.</li>
      <li><strong>Knowledge base size</strong> — how many documents, products, and scenarios the solution needs to learn.</li>
      <li><strong>Depth of functionality</strong> — should it just answer questions, or actively act, qualify leads, and carry out steps across systems?</li>
    </ul>

    <h2>Two parts of the price</h2>
    <p>AI solution pricing usually breaks into two parts:</p>
    <div className="blog-callout blog-callout--example">
      <span className="blog-callout-label">Price structure</span>
      <p>
        <strong>One-time costs</strong> — development, design, system integration, and deployment.<br /><br />
        <strong>Operating costs</strong> — API calls, hosting, ongoing maintenance and tuning. This part is usually billed monthly.
      </p>
    </div>
    <p>A vendor who only quotes a one-time price without mentioning operating costs either forgot, or bills it separately later — either way, ask upfront.</p>

    <h2>How to find the real price for your case</h2>
    <p>General ranges give you a sense of order of magnitude, but the exact price depends on your project's specific scope. The fastest way to find out is a free consultation, where we discuss exactly what you need and you get a specific quote — not a generic price list.</p>

    <div className="blog-cta-block">
      <div className="blog-cta-orb" aria-hidden="true" />
      <p className="blog-cta-eyebrow">Free consultation</p>
      <h3 className="blog-cta-h3">Want to know what an AI solution would actually cost for your business?</h3>
      <p className="blog-cta-desc">30 minutes. No commitment. A specific quote tailored to you.</p>
      <div className="blog-cta-actions">
        <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="fc-btn-white">Book a free consultation</a>
        <a href="/contact" className="fc-btn-outline fc-btn-outline--dark">Contact us</a>
      </div>
    </div>
  </>;
}

export default function BlogKolikStojiAiPage() {
  const { lang } = useLanguage();
  return (
    <BlogPostLayout lang={lang} meta={meta} topics={lang === 'cs' ? topicsCs : topicsEn}>
      {lang === 'cs' ? <ArticleCs /> : <ArticleEn />}
    </BlogPostLayout>
  );
}
