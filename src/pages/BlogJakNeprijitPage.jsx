import SiteLayout from '../components/SiteLayout';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

const CALENDLY_URL = 'https://calendly.com/netsolai-info/30min';

const content = {
  cs: {
    seoTitle: 'Jak nepřijít o zákazníky: systém který odpovídá za vás | Netsol AI',
    seoDesc: 'Každý zmeškaný dotaz je ztracený zákazník. Zjistěte, jak AI automatizace zajistí, že vaše firma nikdy nezmešká obchodní příležitost — bez přidaných zaměstnanců.',
    tag: 'AI Automatizace',
    date: '20. května 2026',
    readTime: '8 min čtení',
    h1a: 'Jak nepřijít o zákazníky:',
    h1b: 'systém který odpovídá za vás',
    sub: 'Každý zmeškaný dotaz je ztracený zákazník. Zjistěte, jak AI automatizace zajistí, že vaše firma nikdy nezmešká obchodní příležitost — bez přidaných zaměstnanců.',
    statCallout: <><strong>78 % zákazníků</strong> uzavře smlouvu s firmou, která jako první odpoví na jejich dotaz — bez ohledu na cenu nebo kvalitu.</>,
    intro: [
      'Máte dobré produkty nebo služby. Máte spokojené zákazníky. Ale přesto vám někdy unikají zakázky — a vy nevíte proč.',
      <>Odpověď je jednoduchá a trochu nepříjemná: <strong>odpovídáte příliš pomalu.</strong></>,
      'V dnešním světě zákazník odešle poptávku třem čtyřem firmám najednou. Kdo odpoví první — a odpověď bude dostatečně relevantní — ten zakázku dostane. Ostatní dostanou zdvořilé: „Díky, ale už to řeším jinde."',
      'Tento článek vám ukáže, proč je rychlost odpovědi váš největší konkurenční faktor, jak tento problém řeší AI automatizace a co konkrétně pro vaši firmu může udělat Netsol AI.',
    ],
    h2_1: 'Proč zákazníci odcházejí — i když jste dobrá firma',
    s1p: [
      'Pojďme si to říci na rovinu. Zákazník v roce 2026 nečeká. Má smartphone, má Google, má sociální sítě. Pokud nenajde okamžitou odpověď u vás, najde ji u konkurence — a to klidně v průběhu pár minut.',
      <>Studie Harvard Business Review zjistila, že firmy, které odpoví na dotaz do <strong>5 minut</strong>, mají <strong>21× vyšší šanci</strong> na konverzi než ty, které odpoví do hodiny. A přesto průměrná česká firma odpovídá na dotazy za <strong>11 hodin</strong>.</>,
      'Kde se zákazníci ztrácí nejčastěji?',
    ],
    s1list: [
      'Formulář na webu — odeslaný v pátek odpoledne nebo večer',
      'Instagram a Facebook DM — přečtené, ale bez odpovědi',
      'E-mail — přijde v době, kdy je tým zaneprázdněn',
      'WhatsApp nebo Messenger — neformální kanály, na které „zapomeneme"',
    ],
    s1end: 'Každý z těchto kontaktních bodů je příležitost. A každá zmeškaná příležitost má cenu — konkrétní, vyčíslitelnou cenu.',
    exampleLabel: 'Příklad z praxe',
    example: <>Řekněme, že vaše průměrná zakázka má hodnotu 15 000 Kč. Každý měsíc vám přijde 30 poptávek. Pokud 20 % z nich zmešká kvůli pomalé reakci, přicházíte měsíčně o <strong>90 000 Kč</strong>. Ročně je to přes milion.</>,
    h2_2: 'Co to vlastně AI automatizace komunikace je?',
    s2p: [
      'Než se pustíme dál, pojďme si vyjasnit, o čem mluvíme. AI automatizace komunikace není chatbot z roku 2015, který odpovídal „Dobrý den, jak vám mohu pomoci?" a pak vás hodil do prázdna.',
      'Moderní AI systémy jsou trénované na datech vaší firmy. Znají vaše produkty, vaše ceny, vaše procesy. Rozumí kontextu dotazu a odpovídají přirozeným jazykem — česky, slovensky, anglicky, i kombinací. Umí:',
    ],
    s2list: [
      'Odpovědět na dotaz do 30 sekund — 24 hodin denně, 7 dní v týdnu',
      'Kvalifikovat lead (zjistit, co zákazník potřebuje, jaký má rozpočet, kdy chce začít)',
      'Poslat automatický follow-up po 24 hodinách, pokud zákazník neodpověděl',
      'Zapsat celou konverzaci do CRM systému',
      'Předat složitější dotaz živému operátorovi — s kompletním kontextem',
    ],
    s2end: 'A to vše bez toho, aby váš tým zvedl telefon nebo otevřel e-mail.',
    h2_3: 'Jak vypadá systém v praxi: krok za krokem',
    s3intro: 'Vezměme konkrétní příklad. Podnikáte v oblasti stavebních služeb. Zákazník vidí vaši reklamu na Facebooku ve čtvrtek večer v 21:30 a napíše do DM:',
    quote: '„Ahoj, potřebuji rekonstrukci koupelny, cca 10 m². Kdy byste mohli přijet na prohlídku?"',
    s3without: <><strong>Bez AI systému:</strong> Zpráva čeká do pátečního rána. Kolega ji přečte v 9:30 mezi dvěma schůzkami, odpoví ve 12:00. Zákazník mezitím napsal i vaší konkurenci, která mu zavolala v pátek ráno.</>,
    s3withLabel: <strong>Se systémem Netsol AI:</strong>,
    s3steps: [
      'Ve 21:30 zákazník dostane okamžitou odpověď: „Zdravím! Rekonstrukce koupelny do 10 m² je naše parketa. Abychom vám mohli připravit přesnou nabídku, hodilo by se nám zjistit pár detailů..."',
      'AI systém provede krátký kvalifikační rozhovor — zjistí časový rámec, stav stávajícího vybavení, preferovaný cenový rozsah.',
      'Ráno dostane váš obchodník notifikaci: „Nový lead — Jana K., koupelna 10 m², chce začít do 6 týdnů, rozpočet 80–120 tisíc. Preferuje kontakt telefonicky, nejlépe dopoledne."',
      'Jana K. ráno dostane automatický e-mail s potvrzením a odkazem na vaše reference.',
    ],
    s3result: 'Výsledek: zákazník je ošetřen, váš tým má všechny informace a může zakázku uzavřít místo toho, aby je sbíral v první schůzce.',
    h2_4: 'Kde všude to funguje',
    s4intro: 'Správně nastavený AI systém pokrývá všechny kanály najednou:',
    channels: [
      { icon: '💬', label: 'Web chat', desc: 'Okamžitá odpověď návštěvníkům webu' },
      { icon: '📱', label: 'Instagram DM', desc: 'Zprávy ze sociálních sítí vyřešeny automaticky' },
      { icon: '✉️', label: 'E-mail', desc: 'Inteligentní třídění a první odpověď' },
      { icon: '📞', label: 'WhatsApp', desc: 'Oblíbený kanál českých zákazníků' },
      { icon: '🔵', label: 'Messenger', desc: 'Facebook DM napojené na systém' },
      { icon: '📋', label: 'Formuláře', desc: 'Okamžitý follow-up po odeslání' },
    ],
    h2_5: 'Co tím firma získá — konkrétně',
    s5intro: 'Naši klienti po nasazení systému typicky zaznamenávají:',
    s5list: [
      <><strong>Nárůst konverze poptávek o 30–50 %</strong> díky okamžité reakci</>,
      <><strong>Úsporu 15–25 hodin týdně</strong> v obchodním týmu (méně opakujících se dotazů)</>,
      <><strong>Lepší kvalitu leadů</strong> — obchodníci dostávají zákazníky s kompletními informacemi</>,
      <><strong>Vyšší spokojenost zákazníků</strong> — zákazník cítí, že firma je profesionální a dostupná</>,
      <><strong>Žádné zmeškaná víkendová či noční poptávka</strong></>,
    ],
    h2_6: 'Pro jaké firmy to funguje nejlépe',
    s6intro: 'AI automatizace komunikace dává smysl pro jakoukoliv firmu, která:',
    s6list: [
      'Dostává více než 10 poptávek týdně',
      'Má obchodní tým zaneprázdněný operativou',
      'Komunikuje se zákazníky přes více kanálů',
      'Potřebuje růst bez proporcionálního přidávání lidí',
    ],
    s6end: 'Pracujeme s firmami v oblasti stavebnictví, realit, finančních služeb, e-commerce, vzdělávání, zdravotnictví a dalších oborů. Systém přizpůsobujeme konkrétním procesům každé firmy — není to šablona.',
    h2_7: 'Jak začít',
    s7intro: 'Proces nasazení trvá typicky 2–4 týdny a probíhá ve třech fázích:',
    s7steps: [
      <><strong>Analýza a design</strong> — projdeme vaše komunikační kanály, typické dotazy zákazníků a obchodní procesy</>,
      <><strong>Trénink a nastavení</strong> — AI systém natrénujeme na vašich datech, napojíme na vaše kanály a CRM</>,
      <><strong>Spuštění a optimalizace</strong> — sledujeme výsledky, sbíráme data a systém průběžně vylepšujeme</>,
    ],
    s7end: 'Vše stavíme tak, aby váš tým nemusel rozumět technologiím — vy jen vidíte výsledky v podobě více zákazníků a méně manuální práce.',
    h2_8: 'Závěr: rychlost je nová kvalita',
    s8p: [
      'Zákazníci stále hodnotí kvalitu, cenu a reference. Ale než vůbec k tomuto hodnocení dojde, musíte být v kontaktu. A kontakt vzniká rychlostí reakce.',
      'Firmy, které jako první implementují AI do své komunikace, získají náskok, který bude stále těžší dohnat. Ty, které čekají, budou ztrácet zákazníky — aniž by věděly proč.',
      <><strong>Pokud chcete zjistit, kolik zákazníků vám reálně uniká a co s tím dělat,</strong> zarezervujte si bezplatnou 30minutovou konzultaci. Provedeme analýzu vaší situace a ukážeme vám konkrétní řešení — bez závazků.</>,
    ],
    ctaEyebrow: 'Bezplatná konzultace',
    ctaH3: 'Zjistěte, kolik zákazníků vám uniká',
    ctaDesc: '30 minut. Žádné závazky. Konkrétní analýza vaší situace.',
    ctaBtn: 'Rezervovat konzultaci zdarma',
    ctaBtn2: 'Kontaktovat nás',
    sidebarBio: 'Stavíme AI automatizaci, škálovatelné produkty a growth infrastrukturu pro podniky připravené na růst.',
    sidebarCta: 'Konzultace zdarma →',
    topicsLabel: 'Témata',
    topics: ['AI Automatizace', 'Zákaznická komunikace', 'Lead management', 'CRM integrace', 'Obchodní procesy'],
  },
  en: {
    seoTitle: 'How Not to Lose Customers: A System That Responds for You | Netsol AI',
    seoDesc: 'Every missed enquiry is a lost customer. Discover how AI automation ensures your business never misses a business opportunity — without hiring more staff.',
    tag: 'AI Automation',
    date: 'May 20, 2026',
    readTime: '8 min read',
    h1a: 'How Not to Lose Customers:',
    h1b: 'A System That Responds for You',
    sub: 'Every missed enquiry is a lost customer. Discover how AI automation ensures your business never misses a business opportunity — without hiring more staff.',
    statCallout: <><strong>78% of customers</strong> sign with the company that responds to their enquiry first — regardless of price or quality.</>,
    intro: [
      'You have great products or services. You have happy customers. Yet somehow you still lose deals — and you don\'t know why.',
      <>The answer is simple and a little uncomfortable: <strong>you respond too slowly.</strong></>,
      'In today\'s world, a customer sends an enquiry to three or four companies at once. Whoever responds first — with a relevant answer — gets the deal. The others receive a polite: "Thanks, but I\'ve sorted it elsewhere."',
      'This article shows you why response speed is your biggest competitive advantage, how AI automation solves the problem, and what Netsol AI can do specifically for your business.',
    ],
    h2_1: 'Why Customers Leave — Even When You\'re Good',
    s1p: [
      'Let\'s be honest. In 2026, customers don\'t wait. They have smartphones, Google, social media. If they don\'t get an immediate response from you, they\'ll find it at a competitor — often within minutes.',
      <>A Harvard Business Review study found that companies responding to an enquiry within <strong>5 minutes</strong> have a <strong>21× higher chance</strong> of conversion than those responding within an hour. Yet the average business takes <strong>11 hours</strong> to reply.</>,
      'Where are customers most commonly lost?',
    ],
    s1list: [
      'Website form — submitted on Friday afternoon or evening',
      'Instagram and Facebook DM — read but not replied to',
      'Email — arrives when the team is busy',
      'WhatsApp or Messenger — informal channels that get "forgotten"',
    ],
    s1end: 'Each of these touchpoints is an opportunity. And every missed opportunity has a price — concrete and measurable.',
    exampleLabel: 'Real-world example',
    example: <>Say your average deal is worth €600. You receive 30 enquiries a month. If 20% of them slip through due to slow response, you\'re losing <strong>€3,600 per month</strong>. That\'s over €43,000 a year.</>,
    h2_2: 'What AI Communication Automation Actually Is',
    s2p: [
      'Before we go further, let\'s be clear about what we\'re talking about. AI communication automation is not the 2015 chatbot that replied "Hello, how can I help you?" and then left you in the void.',
      'Modern AI systems are trained on your company\'s data. They know your products, your pricing, your processes. They understand the context of a query and respond in natural language — in English, Czech, Slovak, or a mix. They can:',
    ],
    s2list: [
      'Respond to an enquiry within 30 seconds — 24 hours a day, 7 days a week',
      'Qualify leads (find out what the customer needs, their budget, when they want to start)',
      'Send an automatic follow-up after 24 hours if the customer hasn\'t responded',
      'Log the entire conversation to your CRM',
      'Hand off complex queries to a human agent — with full context',
    ],
    s2end: 'All without your team picking up a phone or opening an email.',
    h2_3: 'How the System Works in Practice: Step by Step',
    s3intro: 'Let\'s take a concrete example. You run a home renovation business. A customer sees your Facebook ad on Thursday evening at 9:30 PM and messages you:',
    quote: '"Hi, I need a bathroom renovation, around 10 m². When could you come for a viewing?"',
    s3without: <><strong>Without an AI system:</strong> The message waits until Friday morning. A colleague reads it at 9:30 AM between two meetings and replies at noon. Meanwhile the customer has already messaged your competitor, who called them Friday morning.</>,
    s3withLabel: <strong>With the Netsol AI system:</strong>,
    s3steps: [
      'At 9:30 PM the customer gets an instant reply: "Hi! Bathroom renovations up to 10 m² are our speciality. To prepare an accurate quote, we\'d love to get a few details..."',
      'The AI runs a short qualification conversation — finding out the timeline, the current state of the bathroom, and the preferred price range.',
      'In the morning your sales rep gets a notification: "New lead — Jane K., bathroom 10 m², wants to start within 6 weeks, budget €3,000–5,000. Prefers phone contact, ideally mornings."',
      'Jane gets an automatic confirmation email with a link to your portfolio.',
    ],
    s3result: 'Result: the customer is engaged, your team has all the information, and they can close the deal instead of gathering data in the first meeting.',
    h2_4: 'Where It Works',
    s4intro: 'A properly configured AI system covers all channels at once:',
    channels: [
      { icon: '💬', label: 'Web chat', desc: 'Instant responses to website visitors' },
      { icon: '📱', label: 'Instagram DM', desc: 'Social media messages handled automatically' },
      { icon: '✉️', label: 'Email', desc: 'Intelligent triage and first response' },
      { icon: '📞', label: 'WhatsApp', desc: 'A favourite channel for customers' },
      { icon: '🔵', label: 'Messenger', desc: 'Facebook DM connected to the system' },
      { icon: '📋', label: 'Forms', desc: 'Instant follow-up after submission' },
    ],
    h2_5: 'What Your Business Gains — Concretely',
    s5intro: 'Our clients typically see after deployment:',
    s5list: [
      <><strong>30–50% increase in enquiry conversion</strong> thanks to instant response</>,
      <><strong>15–25 hours saved per week</strong> in the sales team (fewer repetitive queries)</>,
      <><strong>Better lead quality</strong> — sales reps receive customers with complete information</>,
      <><strong>Higher customer satisfaction</strong> — customers feel the business is professional and accessible</>,
      <><strong>No missed weekend or late-night enquiries</strong></>,
    ],
    h2_6: 'Which Businesses Benefit Most',
    s6intro: 'AI communication automation makes sense for any business that:',
    s6list: [
      'Receives more than 10 enquiries per week',
      'Has a sales team bogged down by admin and repetitive tasks',
      'Communicates with customers across multiple channels',
      'Needs to grow without proportionally increasing headcount',
    ],
    s6end: 'We work with businesses in construction, real estate, financial services, e-commerce, education, healthcare, and more. We tailor the system to each company\'s specific processes — this is not a template.',
    h2_7: 'How to Get Started',
    s7intro: 'The deployment process typically takes 2–4 weeks and runs in three phases:',
    s7steps: [
      <><strong>Analysis & Design</strong> — we review your communication channels, typical customer queries, and sales processes</>,
      <><strong>Training & Setup</strong> — we train the AI on your data, connect it to your channels and CRM</>,
      <><strong>Launch & Optimisation</strong> — we track results, collect data, and continuously improve the system</>,
    ],
    s7end: 'We build everything so your team doesn\'t need to understand the technology — you just see the results: more customers, less manual work.',
    h2_8: 'Conclusion: Speed Is the New Quality',
    s8p: [
      'Customers still evaluate quality, price, and references. But before any of that evaluation happens, you need to be in contact. And contact is created by response speed.',
      'Businesses that implement AI into their communications first will gain a lead that becomes increasingly hard to close. Those that wait will keep losing customers — without knowing why.',
      <><strong>If you want to find out how many customers you\'re actually losing and what to do about it,</strong> book a free 30-minute consultation. We\'ll analyse your situation and show you a concrete solution — no commitment required.</>,
    ],
    ctaEyebrow: 'Free Consultation',
    ctaH3: 'Find Out How Many Customers You\'re Losing',
    ctaDesc: '30 minutes. No commitment. A concrete analysis of your situation.',
    ctaBtn: 'Book Free Consultation',
    ctaBtn2: 'Contact Us',
    sidebarBio: 'We build AI automation, scalable products, and growth infrastructure for businesses ready to grow.',
    sidebarCta: 'Free consultation →',
    topicsLabel: 'Topics',
    topics: ['AI Automation', 'Customer Communication', 'Lead Management', 'CRM Integration', 'Business Processes'],
  },
};

export default function BlogJakNeprijitPage() {
  const { lang } = useLanguage();
  const T = content[lang] || content.en;

  const jsonLd = [{
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": T.h1a + ' ' + T.h1b,
    "description": T.seoDesc,
    "author": { "@type": "Organization", "name": "Netsol AI s.r.o." },
    "publisher": { "@type": "Organization", "name": "Netsol AI s.r.o.", "url": "https://netsolai.cz" },
    "datePublished": "2026-05-20",
    "url": "https://netsolai.cz/blog/jak-neprijit-o-zakazniky",
    "inLanguage": lang === 'cs' ? 'cs' : 'en',
  }];

  return (
    <SiteLayout>
      <SEOHead
        title={T.seoTitle}
        description={T.seoDesc}
        canonical="/blog/jak-neprijit-o-zakazniky"
        jsonLd={jsonLd}
      />

      {/* ══ HERO ══ */}
      <div className="fc-hero-wrapper">
        <section className="blog-hero">
          <div className="blog-hero-orb blog-hero-orb--1" aria-hidden="true" />
          <div className="blog-hero-orb blog-hero-orb--2" aria-hidden="true" />
          <div className="container blog-hero-inner">
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
            <div className="blog-hero-author">
              <div className="blog-author-logo-wrap">
                <img src="/images/logo/Oroginal.png" alt="Netsol AI" className="blog-author-logo" />
              </div>
              <div>
                <p className="blog-author-name">Netsol AI</p>
                <p className="blog-author-role">netsolai.cz</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ══ ARTICLE ══ */}
      <section className="section blog-article-section">
        <div className="container blog-article-container">
          <article className="blog-article">

            <div className="blog-callout blog-callout--stat">
              <span className="blog-callout-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <p>{T.statCallout}</p>
            </div>

            {T.intro.map((p, i) => <p key={i}>{p}</p>)}

            <hr className="blog-divider" />

            <h2>{T.h2_1}</h2>
            {T.s1p.map((p, i) => <p key={i}>{p}</p>)}
            <ul>{T.s1list.map((item, i) => <li key={i}>{item}</li>)}</ul>
            <p>{T.s1end}</p>

            <div className="blog-callout blog-callout--example">
              <span className="blog-callout-label">{T.exampleLabel}</span>
              <p>{T.example}</p>
            </div>

            <h2>{T.h2_2}</h2>
            {T.s2p.map((p, i) => <p key={i}>{p}</p>)}
            <ul>{T.s2list.map((item, i) => <li key={i}>{item}</li>)}</ul>
            <p>{T.s2end}</p>

            <h2>{T.h2_3}</h2>
            <p>{T.s3intro}</p>
            <blockquote className="blog-quote">{T.quote}</blockquote>
            <p>{T.s3without}</p>
            <p>{T.s3withLabel}</p>
            <ol>{T.s3steps.map((step, i) => <li key={i}>{step}</li>)}</ol>
            <p>{T.s3result}</p>

            <h2>{T.h2_4}</h2>
            <p>{T.s4intro}</p>
            <div className="blog-channels-grid">
              {T.channels.map((ch, i) => (
                <div key={i} className="blog-channel-card">
                  <span className="blog-channel-icon">{ch.icon}</span>
                  <strong>{ch.label}</strong>
                  <span>{ch.desc}</span>
                </div>
              ))}
            </div>

            <h2>{T.h2_5}</h2>
            <p>{T.s5intro}</p>
            <ul>{T.s5list.map((item, i) => <li key={i}>{item}</li>)}</ul>

            <h2>{T.h2_6}</h2>
            <p>{T.s6intro}</p>
            <ul>{T.s6list.map((item, i) => <li key={i}>{item}</li>)}</ul>
            <p>{T.s6end}</p>

            <h2>{T.h2_7}</h2>
            <p>{T.s7intro}</p>
            <ol>{T.s7steps.map((step, i) => <li key={i}>{step}</li>)}</ol>
            <p>{T.s7end}</p>

            <hr className="blog-divider" />

            <h2>{T.h2_8}</h2>
            {T.s8p.map((p, i) => <p key={i}>{p}</p>)}

            {/* CTA */}
            <div className="blog-cta-block">
              <div className="blog-cta-orb" aria-hidden="true" />
              <p className="blog-cta-eyebrow">{T.ctaEyebrow}</p>
              <h3 className="blog-cta-h3">{T.ctaH3}</h3>
              <p className="blog-cta-desc">{T.ctaDesc}</p>
              <div className="blog-cta-actions">
                <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="fc-btn-white">
                  <svg width="17" height="17" viewBox="0 0 18 18" fill="none"><rect x="1" y="2" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M5 1v3M13 1v3M1 7h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                  {T.ctaBtn}
                </a>
                <a href="/contact" className="fc-btn-outline fc-btn-outline--dark">
                  {T.ctaBtn2}
                </a>
              </div>
            </div>

          </article>

          {/* Sidebar */}
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
            <div className="blog-sidebar-card blog-sidebar-card--topics">
              <p className="blog-sidebar-section-label">{T.topicsLabel}</p>
              {T.topics.map((t, i) => (
                <span key={i} className="fc-tag">{t}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>

    </SiteLayout>
  );
}
