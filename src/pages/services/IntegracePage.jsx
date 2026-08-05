import ServicePageLayout from '../../components/ServicePageLayout';
import { useLanguage } from '../../context/LanguageContext';

const meta = {
  cs: {
    slug: 'integrace',
    serviceType: 'Systémová integrace',
    seoTitle: 'Systémová a AI Integrace pro Firmy | Netsol AI — Praha',
    seoDesc: 'Propojíme CRM, e-mail, kalendář, fakturaci a další nástroje do jednoho fungujícího celku. Konec ručnímu přepisování dat mezi systémy.',
    tag: 'Integrace',
    h1: 'Systémy, které si mezi sebou konečně rozumí',
  },
  en: {
    slug: 'integrace',
    serviceType: 'System integration',
    seoTitle: 'System & AI Integration for Businesses | Netsol AI — Prague',
    seoDesc: 'We connect your CRM, email, calendar, invoicing, and other tools into one working whole. No more manually retyping data between systems.',
    tag: 'Integration',
    h1: 'Systems that finally talk to each other',
  },
};

const content = {
  cs: {
    heroSub: 'Propojíme nástroje, které dnes používáte odděleně, do jednoho systému, kde si data předávají automaticky — bez ručních exportů a kopírování.',
    ctaPrimary: 'Konzultace zdarma',
    ctaSecondary: 'Co řešíme',
    ctaSecondary2: 'Kontaktovat nás',
    stats: [
      { num: '5+', label: 'propojených nástrojů' },
      { num: '2–4', label: 'týdny do spuštění' },
      { num: '0', label: 'ručního přepisování dat' },
    ],

    problemsEyebrow: 'Problém a řešení',
    problemsTitle: 'Poznáváte se v tomhle?',
    problems: {
      title: 'Bez integrace',
      items: [
        'Stejné údaje se ručně zadávají do CRM, fakturace i e-mailu zvlášť',
        'Excel tabulky se stávají neoficiálním „propojením" mezi systémy',
        'Chyba při ručním přepisu způsobí problém až o týdny později',
        'Nový nástroj znamená další izolovaný ostrůvek dat',
      ],
    },
    solutions: {
      title: 'S propojenými systémy',
      items: [
        'Data se zadají jednou a automaticky se objeví všude, kde je potřeba',
        'CRM, e-mail, kalendář a fakturace fungují jako jeden celek',
        'Chyby z ručního přepisu prakticky mizí',
        'Nové nástroje se napojí na existující systém, ne vedle něj',
      ],
    },

    whatEyebrow: 'Co řešíme',
    whatTitle: 'Co pro vás integrace řeší',
    whatSub: 'Propojujeme nástroje, které už používáte, i zavádíme nové tam, kde chybí.',
    features: [
      { title: 'CRM a e-mail', desc: 'Nová poptávka nebo odpověď se automaticky zapíše do CRM, bez ručního kopírování.' },
      { title: 'Kalendář a plánování', desc: 'Schůzky se zapisují automaticky napříč týmem, bez dvojitých rezervací nebo přehlédnutých termínů.' },
      { title: 'Fakturace a účetnictví', desc: 'Objednávka se automaticky promítne do fakturace, bez ručního přepisu položek.' },
      { title: 'API a vlastní nástroje', desc: 'Propojíme i interní nebo méně obvyklé systémy přes API, ne jen běžné SaaS nástroje.' },
    ],

    processEyebrow: 'Postup',
    processTitle: 'Jak probíhá integrace',
    steps: [
      { title: 'Mapování systémů', desc: 'Zjistíme, které nástroje používáte a kde dnes data mezi nimi putují ručně.' },
      { title: 'Návrh propojení', desc: 'Navrhneme, jak systémy propojit tak, aby data tekla automaticky správným směrem.' },
      { title: 'Nasazení a test', desc: 'Integraci nasadíme, otestujeme na reálných datech a doladíme podle potřeby.' },
    ],

    forEyebrow: 'Pro koho',
    forTitle: 'Pro koho to dává smysl',
    forSubtitle: 'Integrace se vyplatí, pokud...',
    forItems: [
      'Používáte víc nástrojů, které spolu nekomunikují',
      'Tým tráví čas ručním kopírováním dat mezi systémy',
      'Chyby z ručního přepisu vám už způsobily reálný problém',
      'Chystáte se zavést nový nástroj a nechcete další izolovaný ostrůvek',
    ],

    faqEyebrow: 'Otázky',
    faqTitle: 'Časté otázky',
    faq: [
      { q: 'Propojíte i nástroje, které nemají oficiální API?', a: 'U většiny běžných SaaS nástrojů ano. U specifických nebo starších systémů to posoudíme individuálně při konzultaci.' },
      { q: 'Přijdeme o data, která už v systémech máme?', a: 'Ne, integrace se navrhuje tak, aby existující data zůstala netknutá a nová jen přibývala automaticky.' },
      { q: 'Jak dlouho integrace trvá?', a: 'Typicky 2–4 týdny v závislosti na počtu systémů a složitosti propojení.' },
      { q: 'Kolik to stojí?', a: 'Cena záleží na počtu nástrojů a složitosti propojení. Přesnou nabídku dostanete po bezplatné konzultaci.' },
    ],

    ctaEyebrow: 'Bezplatná konzultace',
    ctaHeading: 'Kolik času váš tým týdně stráví ručním přepisováním dat?',
    ctaDesc: '30 minut. Žádné závazky. Konkrétní analýza vaší situace.',
  },
  en: {
    heroSub: 'We connect the tools you use separately today into one system where data flows automatically — no manual exports or copy-pasting.',
    ctaPrimary: 'Free consultation',
    ctaSecondary: 'What we solve',
    ctaSecondary2: 'Contact us',
    stats: [
      { num: '5+', label: 'tools connected' },
      { num: '2–4', label: 'weeks to launch' },
      { num: '0', label: 'manual data retyping' },
    ],

    problemsEyebrow: 'Problem and solution',
    problemsTitle: 'Does this sound familiar?',
    problems: {
      title: 'Without integration',
      items: [
        'The same data gets manually entered into your CRM, invoicing, and email separately',
        'Spreadsheets become the unofficial "connection" between systems',
        'A manual retyping error causes a problem weeks later',
        'A new tool becomes yet another isolated island of data',
      ],
    },
    solutions: {
      title: 'With connected systems',
      items: [
        'Data is entered once and automatically appears everywhere it’s needed',
        'CRM, email, calendar, and invoicing work as one connected system',
        'Manual retyping errors practically disappear',
        'New tools connect to your existing system instead of sitting beside it',
      ],
    },

    whatEyebrow: 'What we solve',
    whatTitle: 'What integration solves for you',
    whatSub: 'We connect the tools you already use, and add new ones where something is missing.',
    features: [
      { title: 'CRM and email', desc: 'A new inquiry or reply is automatically logged into your CRM, no manual copying.' },
      { title: 'Calendar and scheduling', desc: 'Meetings are logged automatically across the team, no double bookings or missed slots.' },
      { title: 'Invoicing and accounting', desc: 'An order automatically flows into invoicing, no manual retyping of line items.' },
      { title: 'API and custom tools', desc: 'We connect internal or less common systems via API too, not just standard SaaS tools.' },
    ],

    processEyebrow: 'Process',
    processTitle: 'How integration works',
    steps: [
      { title: 'Mapping your systems', desc: 'We identify which tools you use and where data currently moves between them manually.' },
      { title: 'Designing the connection', desc: 'We design how the systems connect so data flows automatically in the right direction.' },
      { title: 'Deployment and testing', desc: 'We deploy the integration, test it on real data, and fine-tune as needed.' },
    ],

    forEyebrow: 'Who it’s for',
    forTitle: 'Who this makes sense for',
    forSubtitle: 'Integration pays off if...',
    forItems: [
      'You use multiple tools that don’t talk to each other',
      'Your team spends time manually copying data between systems',
      'A manual retyping error has already caused a real problem',
      'You’re adopting a new tool and don’t want another isolated island',
    ],

    faqEyebrow: 'FAQ',
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'Can you connect tools that don’t have an official API?', a: 'For most common SaaS tools, yes. For specific or older systems, we assess it individually during the consultation.' },
      { q: 'Will we lose data already in our systems?', a: 'No, the integration is designed so existing data stays untouched and new data is added automatically.' },
      { q: 'How long does integration take?', a: 'Typically 2–4 weeks depending on the number of systems and complexity of the connection.' },
      { q: 'How much does it cost?', a: 'Pricing depends on the number of tools and complexity of the connection. You’ll get an exact quote after a free consultation.' },
    ],

    ctaEyebrow: 'Free consultation',
    ctaHeading: 'How much time does your team lose each week to manual data entry?',
    ctaDesc: '30 minutes. No commitment. A concrete look at your situation.',
  },
};

export default function IntegracePage() {
  const { lang } = useLanguage();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content[lang].faq.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <ServicePageLayout lang={lang} meta={meta} content={content} extraJsonLd={[faqJsonLd]} />
  );
}
