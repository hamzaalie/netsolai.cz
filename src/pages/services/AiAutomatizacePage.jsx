import ServicePageLayout from '../../components/ServicePageLayout';
import { useLanguage } from '../../context/LanguageContext';

const CALENDLY_URL = 'https://calendly.com/netsolai-info/30min';

const meta = {
  cs: {
    slug: 'ai-automatizace',
    serviceType: 'AI automatizace procesů',
    seoTitle: 'AI Automatizace pro Firmy | Netsol AI — Praha',
    seoDesc: 'Navrhneme a nasadíme AI automatizaci na míru vaší firmě — od zpracování poptávek po reporting. Bez IT oddělení, spuštění do 2–4 týdnů.',
    tag: 'AI Automatizace',
    h1a: 'AI automatizace',
    h1b: 'pro firmy, které nechtějí růst do nekonečné administrativy',
    sub: 'Navrhneme, natrénujeme a nasadíme AI systémy, které přebírají opakující se procesy ve vaší firmě — komunikaci se zákazníky, reporting, správu dat — takže se váš tým může soustředit na práci, která skutečně posouvá byznys.',
    sidebarBio: 'Stavíme AI automatizaci, škálovatelné produkty a growth infrastrukturu pro podniky připravené na růst.',
    sidebarCta: 'Konzultace zdarma →',
  },
  en: {
    slug: 'ai-automatizace',
    serviceType: 'AI process automation',
    seoTitle: 'AI Automation for Businesses | Netsol AI — Prague',
    seoDesc: 'We design and deploy custom AI automation for your business — from lead handling to reporting. No IT department needed, live in 2–4 weeks.',
    tag: 'AI Automation',
    h1a: 'AI automation',
    h1b: 'for businesses that don’t want to scale their admin workload',
    sub: 'We design, train, and deploy AI systems that take over repetitive processes in your business — customer communication, reporting, data handling — so your team can focus on work that actually moves the business forward.',
    sidebarBio: 'We build AI automation, scalable products, and growth infrastructure for businesses ready to grow.',
    sidebarCta: 'Free consultation →',
  },
};

function ArticleCs() {
  return <>
    <p>Ruční zpracování poptávek, kopírování dat mezi systémy, psaní stejných e-mailů dokola — každá hodina strávená touto operativou je hodina, kterou váš tým nemůže věnovat zákazníkům nebo růstu. AI automatizace tyto procesy přebírá a nechává je běžet na pozadí, 24 hodin denně, bez chyb z únavy nebo přehlédnutí.</p>

    <h2>Co pro vás AI automatizace řeší</h2>
    <p>Nejde o obecný „AI nástroj". Každou automatizaci stavíme na míru procesu, který vás skutečně stojí čas:</p>
    <ul>
      <li><strong>Zpracování poptávek</strong> — příchozí zprávy z webu, e-mailu i sociálních sítí se automaticky zkvalifikují, zapíší do CRM a předají obchodníkovi s kompletním kontextem.</li>
      <li><strong>Zákaznická komunikace</strong> — odpovědi na časté dotazy, potvrzení objednávek, sledování stavu — bez čekání na volnou kapacitu člověka.</li>
      <li><strong>Reporting</strong> — pravidelné přehledy (tržby, leady, výkon kampaní) automaticky sestavené a doručené, místo ručního slepování tabulek.</li>
      <li><strong>Správa dat mezi systémy</strong> — propojení CRM, e-mailu, kalendáře a fakturace tak, aby data nemusel nikdo přepisovat ručně.</li>
    </ul>

    <h2>Jak probíhá nasazení</h2>
    <ol>
      <li><strong>Identifikace procesu</strong> — společně najdeme proces, který vás nejvíce stojí čas nebo peníze.</li>
      <li><strong>Návrh a trénink</strong> — navrhneme automatizaci, propojíme ji s vašimi systémy a natrénujeme na reálných datech vaší firmy.</li>
      <li><strong>Spuštění a monitoring</strong> — automatizace jde do provozu, my sledujeme výkon a průběžně ji vyladujeme.</li>
    </ol>
    <p>Celý proces obvykle trvá <strong>2–4 týdny</strong> od zadání po spuštění, bez nutnosti mít vlastní IT oddělení.</p>

    <h2>Pro koho to dává smysl</h2>
    <ul>
      <li>Firmy s opakujícími se procesy — poptávky, objednávky, fakturace, reporting</li>
      <li>Obchodní týmy, které tráví velkou část dne administrativou místo prodeje</li>
      <li>Firmy, které chtějí růst bez úměrného navyšování počtu lidí na operativu</li>
    </ul>

    <h2>Časté otázky</h2>
    <h3>Jak dlouho trvá nasazení?</h3>
    <p>Typicky 2–4 týdny od identifikace procesu po ostrý provoz, v závislosti na složitosti a počtu systémů, které je potřeba propojit.</p>
    <h3>Potřebuji vlastní IT oddělení?</h3>
    <p>Ne. Nasazení, propojení se systémy i následné úpravy má na starosti náš tým.</p>
    <h3>Co když automatizace udělá chybu?</h3>
    <p>Každá automatizace má nastavené hranice a eskalační pravidla — složitější nebo nejednoznačné případy se předávají člověku s plným kontextem, ne se řeší naslepo.</p>

    <div className="blog-cta-block">
      <div className="blog-cta-orb" aria-hidden="true" />
      <p className="blog-cta-eyebrow">Bezplatná konzultace</p>
      <h3 className="blog-cta-h3">Který proces ve vaší firmě by dávalo smysl automatizovat jako první?</h3>
      <p className="blog-cta-desc">30 minut. Žádné závazky. Konkrétní analýza vaší situace.</p>
      <div className="blog-cta-actions">
        <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="fc-btn-white">Rezervovat konzultaci zdarma</a>
        <a href="/contact" className="fc-btn-outline fc-btn-outline--dark">Kontaktovat nás</a>
      </div>
    </div>
  </>;
}

function ArticleEn() {
  return <>
    <p>Manually processing inquiries, copying data between systems, writing the same emails over and over — every hour spent on this kind of operational work is an hour your team isn't spending on customers or growth. AI automation takes these processes over and runs them in the background, 24 hours a day, without fatigue-driven mistakes.</p>

    <h2>What AI automation solves for you</h2>
    <p>This isn't a generic "AI tool." Every automation is built around a process that's actually costing you time:</p>
    <ul>
      <li><strong>Lead handling</strong> — inbound messages from your website, email, and social channels get automatically qualified, logged into your CRM, and handed to a salesperson with full context.</li>
      <li><strong>Customer communication</strong> — answers to common questions, order confirmations, status tracking — without waiting for human availability.</li>
      <li><strong>Reporting</strong> — recurring reports (revenue, leads, campaign performance) assembled and delivered automatically instead of manually stitched together in spreadsheets.</li>
      <li><strong>Cross-system data handling</strong> — CRM, email, calendar, and invoicing connected so no one has to retype data by hand.</li>
    </ul>

    <h2>How deployment works</h2>
    <ol>
      <li><strong>Process identification</strong> — together we find the process costing you the most time or money.</li>
      <li><strong>Design and training</strong> — we design the automation, connect it to your systems, and train it on your business's real data.</li>
      <li><strong>Launch and monitoring</strong> — the automation goes live, and we monitor performance and keep tuning it.</li>
    </ol>
    <p>The whole process typically takes <strong>2–4 weeks</strong> from scoping to launch, with no need for your own IT department.</p>

    <h2>Who this makes sense for</h2>
    <ul>
      <li>Businesses with recurring processes — inquiries, orders, invoicing, reporting</li>
      <li>Sales teams spending a large part of their day on admin instead of selling</li>
      <li>Businesses that want to grow without proportionally growing headcount for operations</li>
    </ul>

    <h2>FAQ</h2>
    <h3>How long does deployment take?</h3>
    <p>Typically 2–4 weeks from process identification to live operation, depending on complexity and the number of systems that need to be connected.</p>
    <h3>Do I need my own IT department?</h3>
    <p>No. Deployment, system integration, and ongoing adjustments are handled by our team.</p>
    <h3>What happens if the automation makes a mistake?</h3>
    <p>Every automation has defined boundaries and escalation rules — complex or ambiguous cases are handed to a human with full context, not resolved blindly.</p>

    <div className="blog-cta-block">
      <div className="blog-cta-orb" aria-hidden="true" />
      <p className="blog-cta-eyebrow">Free consultation</p>
      <h3 className="blog-cta-h3">Which process in your business would make sense to automate first?</h3>
      <p className="blog-cta-desc">30 minutes. No commitment. A concrete look at your situation.</p>
      <div className="blog-cta-actions">
        <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="fc-btn-white">Book a free consultation</a>
        <a href="/contact" className="fc-btn-outline fc-btn-outline--dark">Contact us</a>
      </div>
    </div>
  </>;
}

export default function AiAutomatizacePage() {
  const { lang } = useLanguage();
  const T = meta[lang];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": lang === 'cs' ? [
      {
        "@type": "Question",
        "name": "Jak dlouho trvá nasazení?",
        "acceptedAnswer": { "@type": "Answer", "text": "Typicky 2–4 týdny od identifikace procesu po ostrý provoz, v závislosti na složitosti a počtu systémů, které je potřeba propojit." }
      },
      {
        "@type": "Question",
        "name": "Potřebuji vlastní IT oddělení?",
        "acceptedAnswer": { "@type": "Answer", "text": "Ne. Nasazení, propojení se systémy i následné úpravy má na starosti náš tým." }
      },
      {
        "@type": "Question",
        "name": "Co když automatizace udělá chybu?",
        "acceptedAnswer": { "@type": "Answer", "text": "Každá automatizace má nastavené hranice a eskalační pravidla — složitější nebo nejednoznačné případy se předávají člověku s plným kontextem." }
      }
    ] : [
      {
        "@type": "Question",
        "name": "How long does deployment take?",
        "acceptedAnswer": { "@type": "Answer", "text": "Typically 2–4 weeks from process identification to live operation, depending on complexity and the number of systems that need to be connected." }
      },
      {
        "@type": "Question",
        "name": "Do I need my own IT department?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. Deployment, system integration, and ongoing adjustments are handled by our team." }
      },
      {
        "@type": "Question",
        "name": "What happens if the automation makes a mistake?",
        "acceptedAnswer": { "@type": "Answer", "text": "Every automation has defined boundaries and escalation rules — complex or ambiguous cases are handed to a human with full context." }
      }
    ]
  };

  return (
    <ServicePageLayout lang={lang} meta={meta} extraJsonLd={[faqJsonLd]}>
      {lang === 'cs' ? <ArticleCs /> : <ArticleEn />}
    </ServicePageLayout>
  );
}
