import BlogPostLayout from '../components/BlogPostLayout';
import { useLanguage } from '../context/LanguageContext';

const BOOKING_URL = 'https://booking.netsolai.cz/register';

const meta = {
  cs: {
    slug: 'jak-vybrat-ai-agenturu',
    seoTitle: 'Jak vybrat AI agenturu: na co si dát pozor v roce 2026 | Netsol AI',
    seoDesc: 'Trh AI agentur roste rychle a ne všechny jsou stejné. Zjistěte, jaké otázky položit před podpisem smlouvy a jaké red flags hlídat.',
    tag: 'AI Strategie',
    date: '8. srpna 2026',
    readTime: '7 min čtení',
    h1a: 'Jak vybrat AI agenturu',
    h1b: 'a na co si dát pozor v roce 2026',
    sub: 'Trh AI agentur roste rychle a ne všechny jsou stejné. Tenhle průvodce vám ukáže, na co se ptát, co hlídat a jak poznat agenturu, která skutečně dodá výsledky.',
    wordCount: 1200,
    sidebarBio: 'Stavíme AI automatizaci, škálovatelné produkty a growth infrastrukturu pro podniky připravené na růst.',
    sidebarCta: 'Konzultace zdarma →',
    topicsLabel: 'Témata',
  },
  en: {
    slug: 'jak-vybrat-ai-agenturu',
    seoTitle: 'How to Choose an AI Agency: What to Watch For in 2026 | Netsol AI',
    seoDesc: 'The AI agency market is growing fast, and not all agencies are equal. Learn what to ask before signing and which red flags to watch for.',
    tag: 'AI Strategy',
    date: 'August 8, 2026',
    readTime: '7 min read',
    h1a: 'How to Choose an AI Agency',
    h1b: 'and What to Watch For in 2026',
    sub: 'The AI agency market is growing fast, and not all agencies are equal. This guide shows you what to ask, what to watch for, and how to spot an agency that actually delivers.',
    wordCount: 1200,
    sidebarBio: 'We build AI automation, scalable products, and growth infrastructure for businesses ready to grow.',
    sidebarCta: 'Free consultation →',
    topicsLabel: 'Topics',
  },
};

const topicsCs = ['AI Agentura', 'Výběr dodavatele', 'AI Strategie', 'Digitální transformace'];
const topicsEn = ['AI Agency', 'Vendor Selection', 'AI Strategy', 'Digital Transformation'];

function ArticleCs() {
  return <>
    <p>Poptávka po AI agenturách roste rychleji, než trh stíhá reagovat — a spolu s tím i počet firem, které si na štít napíšou „AI-powered" a nabídnou vám totéž, co dělaly loni pod jiným názvem. Jak poznat rozdíl mezi agenturou, která umí skutečně dodat, a tou, která umí jen prezentaci?</p>

    <hr className="blog-divider" />

    <h2>Co dělá AI agentura — a co ne</h2>
    <p>AI agentura implementuje inteligentní softwarové agenty a automatizace do vašich firemních procesů. Na rozdíl od klasické IT firmy obvykle nestaví aplikace od nuly — napojuje existující AI modely na vaše systémy a přizpůsobuje jejich chování vašim konkrétním procesům.</p>
    <p>To je důležitý rozdíl: pokud vám agentura slibuje, že vám „postaví vlastní AI od základu" za cenu srovnatelnou s chatbotem, buď nerozumí tomu, co dělá, nebo vám nerozumí vy.</p>

    <h2>Red flags, které stojí za pozornost</h2>
    <div className="blog-callout blog-callout--example">
      <span className="blog-callout-label">Na co si dát pozor</span>
      <p>
        <strong>Abstraktní cíl místo konkrétního.</strong> „Chceme využívat AI" je cesta ke zrušenému projektu. „Chceme zkrátit čas na nabídku z 90 na 5 minut" je cesta k měřitelnému výsledku. Pokud agentura nenutí vás k druhé formulaci, je to varovný signál.<br /><br />
        <strong>Screenshoty místo živé ukázky.</strong> Snímky obrazovky a slovo „AI-powered" v nadpisu neříkají nic o reálných schopnostech. Chtějte živou ukázku s vašimi vlastními daty a scénáři, ne obecné demo.<br /><br />
        <strong>Nejasné vlastnictví.</strong> Kdo vlastní kód, design a doménu po dokončení projektu? Pokud smlouva tohle jasně nespecifikuje, riskujete, že budete navždy závislí na jedné agentuře.
      </p>
    </div>

    <h2>Otázky, které položit před podpisem</h2>
    <ul>
      <li><strong>Máte jasně definovaný cíl a rozpočet?</strong> Pokud ne, žádná agentura vám nedá smysluplnou nabídku — a ta, která ano, si něco domýšlí.</li>
      <li><strong>Víte, kdo konkrétně bude na projektu pracovat?</strong> Prodejní tým a realizační tým bývají často jiní lidé.</li>
      <li><strong>Specifikuje smlouva vlastnictví kódu, designu a domény?</strong> Tohle by mělo být samozřejmostí, ne bonusem k vyjednávání.</li>
      <li><strong>Znáte přesný rozsah prací — a co naopak není zahrnuté?</strong> Nejasný rozsah je nejčastější příčina sporů o vícepráce.</li>
      <li><strong>Má agentura jasně popsaný proces spolupráce?</strong> Od identifikace procesu po spuštění a předání.</li>
    </ul>

    <h2>Kolik by to mělo stát</h2>
    <p>Ceny se v Česku výrazně liší podle rozsahu, ale orientační rámec pro rok 2026 vypadá takto:</p>
    <div className="blog-channels-grid">
      {[
        { icon: '💬', label: 'AI chatbot', desc: 'Jednodušší nasazení od cca 15 000–45 000 Kč, komplexnější řešení napojené na CRM a více systémů výrazně výš.' },
        { icon: '🤖', label: 'AI agent', desc: 'Nastavení typicky 50 000–200 000 Kč jednorázově, provozní licence cca 5 000–20 000 Kč měsíčně.' },
        { icon: '🌐', label: 'Web / aplikace', desc: 'Záleží na rozsahu — jednoduchý prezentační web je řádově levnější než e-shop nebo aplikace na míru.' },
      ].map((ch, i) => (
        <div key={i} className="blog-channel-card">
          <span className="blog-channel-icon">{ch.icon}</span>
          <strong>{ch.label}</strong>
          <span>{ch.desc}</span>
        </div>
      ))}
    </div>
    <p>Cenu neurčuje samotný nástroj, ale rozsah práce kolem něj — napojení na vaše systémy, velikost znalostní báze a to, jestli má řešení jen odpovídat, nebo aktivně jednat a kvalifikovat leady.</p>

    <h2>Jak k tomu přistupujeme my</h2>
    <p>Než cokoliv navrhneme, chceme znát konkrétní proces, který vás stojí čas nebo peníze — ne obecné „chceme AI". Nabídku dostanete až po bezplatné konzultaci, kde probereme váš konkrétní případ, a smlouva jasně specifikuje rozsah i vlastnictví výstupů.</p>

    <div className="blog-cta-block">
      <div className="blog-cta-orb" aria-hidden="true" />
      <p className="blog-cta-eyebrow">Bezplatná konzultace</p>
      <h3 className="blog-cta-h3">Zvažujete AI agenturu? Probereme váš konkrétní případ.</h3>
      <p className="blog-cta-desc">30 minut. Žádné závazky. Žádný tlak na podpis.</p>
      <div className="blog-cta-actions">
        <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="fc-btn-white">Rezervovat konzultaci zdarma</a>
        <a href="/contact" className="fc-btn-outline fc-btn-outline--dark">Kontaktovat nás</a>
      </div>
    </div>
  </>;
}

function ArticleEn() {
  return <>
    <p>Demand for AI agencies is growing faster than the market can keep up with — and along with it, the number of companies slapping "AI-powered" on their site while offering the same thing they did last year under a different name. How do you tell the difference between an agency that can actually deliver and one that's only good at the pitch?</p>

    <hr className="blog-divider" />

    <h2>What an AI agency actually does — and doesn't</h2>
    <p>An AI agency implements intelligent software agents and automations into your business processes. Unlike a traditional IT firm, it usually doesn't build applications from scratch — it connects existing AI models to your systems and adapts their behavior to your specific processes.</p>
    <p>That distinction matters: if an agency promises to "build you a custom AI from the ground up" for the price of a basic chatbot, either they don't understand what they're doing, or they don't understand what you need.</p>

    <h2>Red flags worth watching for</h2>
    <div className="blog-callout blog-callout--example">
      <span className="blog-callout-label">What to watch for</span>
      <p>
        <strong>An abstract goal instead of a concrete one.</strong> "We want to use AI" is a path to a cancelled project. "We want to cut quote turnaround from 90 minutes to 5" is a path to a measurable result. If an agency doesn't push you toward the second framing, that's a warning sign.<br /><br />
        <strong>Screenshots instead of a live demo.</strong> Screenshots and "AI-powered" in a headline say nothing about real capability. Ask for a live demo with your own data and scenarios, not a generic walkthrough.<br /><br />
        <strong>Unclear ownership.</strong> Who owns the code, design, and domain once the project is done? If the contract doesn't clearly specify this, you risk being permanently locked to one agency.
      </p>
    </div>

    <h2>Questions to ask before signing</h2>
    <ul>
      <li><strong>Do you have a clearly defined goal and budget?</strong> Without one, no agency can give you a meaningful quote — and one that does anyway is guessing.</li>
      <li><strong>Do you know who will actually work on the project?</strong> The sales team and the delivery team are often different people.</li>
      <li><strong>Does the contract specify ownership of code, design, and domain?</strong> This should be standard, not a negotiated bonus.</li>
      <li><strong>Do you know the exact scope — and what's explicitly not included?</strong> Vague scope is the most common source of disputes over extra costs.</li>
      <li><strong>Does the agency have a clearly described collaboration process?</strong> From identifying the process to launch and handover.</li>
    </ul>

    <h2>What it should cost</h2>
    <p>Prices vary significantly by scope, but a rough 2026 benchmark looks like this:</p>
    <div className="blog-channels-grid">
      {[
        { icon: '💬', label: 'AI chatbot', desc: 'Simple deployments start around $600-1,800; more complex setups connected to a CRM and multiple systems cost significantly more.' },
        { icon: '🤖', label: 'AI agent', desc: 'Setup typically $2,000-8,000 one-time, plus roughly $200-800/month in operating license costs.' },
        { icon: '🌐', label: 'Website / application', desc: 'Depends heavily on scope — a simple marketing site is an order of magnitude cheaper than a custom e-commerce store or app.' },
      ].map((ch, i) => (
        <div key={i} className="blog-channel-card">
          <span className="blog-channel-icon">{ch.icon}</span>
          <strong>{ch.label}</strong>
          <span>{ch.desc}</span>
        </div>
      ))}
    </div>
    <p>Price isn't set by the tool itself but by the work around it — connecting to your systems, the size of the knowledge base, and whether the solution should just answer or actively act and qualify leads.</p>

    <h2>How we approach this</h2>
    <p>Before we propose anything, we want to know the specific process costing you time or money — not a general "we want AI." You get a quote only after a free consultation where we discuss your specific case, and the contract clearly specifies scope and ownership of deliverables.</p>

    <div className="blog-cta-block">
      <div className="blog-cta-orb" aria-hidden="true" />
      <p className="blog-cta-eyebrow">Free consultation</p>
      <h3 className="blog-cta-h3">Considering an AI agency? Let's discuss your specific case.</h3>
      <p className="blog-cta-desc">30 minutes. No commitment. No pressure to sign.</p>
      <div className="blog-cta-actions">
        <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="fc-btn-white">Book a free consultation</a>
        <a href="/contact" className="fc-btn-outline fc-btn-outline--dark">Contact us</a>
      </div>
    </div>
  </>;
}

export default function BlogJakVybratAgenturuPage() {
  const { lang } = useLanguage();
  return (
    <BlogPostLayout lang={lang} meta={meta} topics={lang === 'cs' ? topicsCs : topicsEn}>
      {lang === 'cs' ? <ArticleCs /> : <ArticleEn />}
    </BlogPostLayout>
  );
}
