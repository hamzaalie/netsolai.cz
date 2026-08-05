import ServicePageLayout from '../../components/ServicePageLayout';
import { useLanguage } from '../../context/LanguageContext';

const meta = {
  cs: {
    slug: 'ai-automatizace',
    serviceType: 'AI automatizace procesů',
    seoTitle: 'AI Automatizace pro Firmy | Netsol AI — Praha',
    seoDesc: 'Navrhneme a nasadíme AI automatizaci na míru vaší firmě — od zpracování poptávek po reporting. Bez IT oddělení, spuštění do 2–4 týdnů.',
    tag: 'AI Automatizace',
    h1: 'AI automatizace pro firmy, které nechtějí růst do nekonečné administrativy',
  },
  en: {
    slug: 'ai-automatizace',
    serviceType: 'AI process automation',
    seoTitle: 'AI Automation for Businesses | Netsol AI — Prague',
    seoDesc: 'We design and deploy custom AI automation for your business — from lead handling to reporting. No IT department needed, live in 2–4 weeks.',
    tag: 'AI Automation',
    h1: 'AI automation for businesses that don’t want to scale their admin workload',
  },
};

const content = {
  cs: {
    heroSub: 'Navrhneme, natrénujeme a nasadíme AI systémy, které přebírají opakující se procesy ve vaší firmě — komunikaci se zákazníky, reporting, správu dat — takže se váš tým může soustředit na práci, která skutečně posouvá byznys.',
    ctaPrimary: 'Konzultace zdarma',
    ctaSecondary: 'Co řešíme',
    ctaSecondary2: 'Kontaktovat nás',
    stats: [
      { num: '2–4', label: 'týdny do spuštění' },
      { num: '24/7', label: 'provoz bez přestávky' },
      { num: '0', label: 'potřeba IT oddělení' },
    ],

    problemsEyebrow: 'Problém a řešení',
    problemsTitle: 'Poznáváte se v tomhle?',
    problems: {
      title: 'Bez automatizace',
      items: [
        'Poptávky se ztrácejí mezi e-mailem, Instagramem a WhatsAppem',
        'Obchodník tráví polovinu dne přepisováním dat mezi systémy',
        'Reporting se sestavuje ručně a vždy o den později, než by měl',
        'Zákazník čeká na odpověď hodiny, protože nikdo není zrovna u telefonu',
      ],
    },
    solutions: {
      title: 'S Netsol AI',
      items: [
        'Každá poptávka se automaticky zachytí a zapíše do jednoho systému',
        'Data mezi CRM, e-mailem a kalendářem se synchronizují sama',
        'Reporty se generují a doručují automaticky, přesně podle harmonogramu',
        'Odpověď na zákazníka jde do minut, ve dne v noci',
      ],
    },

    whatEyebrow: 'Co řešíme',
    whatTitle: 'Co pro vás AI automatizace řeší',
    whatSub: 'Nejde o obecný „AI nástroj". Každou automatizaci stavíme na míru procesu, který vás skutečně stojí čas.',
    features: [
      { title: 'Zpracování poptávek', desc: 'Příchozí zprávy z webu, e-mailu i sociálních sítí se automaticky zkvalifikují, zapíší do CRM a předají obchodníkovi s kompletním kontextem.' },
      { title: 'Zákaznická komunikace', desc: 'Odpovědi na časté dotazy, potvrzení objednávek, sledování stavu — bez čekání na volnou kapacitu člověka.' },
      { title: 'Reporting', desc: 'Pravidelné přehledy tržeb, leadů a výkonu kampaní automaticky sestavené a doručené, místo ručního slepování tabulek.' },
      { title: 'Správa dat mezi systémy', desc: 'Propojení CRM, e-mailu, kalendáře a fakturace tak, aby data nemusel nikdo přepisovat ručně.' },
    ],

    processEyebrow: 'Postup',
    processTitle: 'Jak probíhá nasazení',
    steps: [
      { title: 'Identifikace procesu', desc: 'Společně najdeme proces, který vás nejvíce stojí čas nebo peníze.' },
      { title: 'Návrh a trénink', desc: 'Navrhneme automatizaci, propojíme ji s vašimi systémy a natrénujeme na reálných datech.' },
      { title: 'Spuštění a monitoring', desc: 'Automatizace jde do provozu, sledujeme výkon a průběžně ji vyladujeme.' },
    ],

    forEyebrow: 'Pro koho',
    forTitle: 'Pro koho to dává smysl',
    forSubtitle: 'AI automatizace se vyplatí, pokud...',
    forItems: [
      'Máte opakující se procesy — poptávky, objednávky, fakturaci, reporting',
      'Obchodní tým tráví velkou část dne administrativou místo prodeje',
      'Chcete růst bez úměrného navyšování počtu lidí na operativu',
      'Nemáte vlastní IT oddělení, ale potřebujete technické řešení',
    ],

    faqEyebrow: 'Otázky',
    faqTitle: 'Časté otázky',
    faq: [
      { q: 'Jak dlouho trvá nasazení?', a: 'Typicky 2–4 týdny od identifikace procesu po ostrý provoz, v závislosti na složitosti a počtu systémů, které je potřeba propojit.' },
      { q: 'Potřebuji vlastní IT oddělení?', a: 'Ne. Nasazení, propojení se systémy i následné úpravy má na starosti náš tým.' },
      { q: 'Co když automatizace udělá chybu?', a: 'Každá automatizace má nastavené hranice a eskalační pravidla — složitější nebo nejednoznačné případy se předávají člověku s plným kontextem, ne se řeší naslepo.' },
    ],

    ctaEyebrow: 'Bezplatná konzultace',
    ctaHeading: 'Který proces ve vaší firmě by dávalo smysl automatizovat jako první?',
    ctaDesc: '30 minut. Žádné závazky. Konkrétní analýza vaší situace.',
  },
  en: {
    heroSub: 'We design, train, and deploy AI systems that take over repetitive processes in your business — customer communication, reporting, data handling — so your team can focus on work that actually moves the business forward.',
    ctaPrimary: 'Free consultation',
    ctaSecondary: 'What we solve',
    ctaSecondary2: 'Contact us',
    stats: [
      { num: '2–4', label: 'weeks to launch' },
      { num: '24/7', label: 'runs around the clock' },
      { num: '0', label: 'IT department needed' },
    ],

    problemsEyebrow: 'Problem and solution',
    problemsTitle: 'Does this sound familiar?',
    problems: {
      title: 'Without automation',
      items: [
        'Inquiries get lost between email, Instagram, and WhatsApp',
        'Your salesperson spends half the day retyping data between systems',
        'Reports get assembled manually, always a day later than they should be',
        'Customers wait hours for a reply because no one is by the phone',
      ],
    },
    solutions: {
      title: 'With Netsol AI',
      items: [
        'Every inquiry is automatically captured and logged into one system',
        'Data between your CRM, email, and calendar syncs itself',
        'Reports generate and deliver automatically, right on schedule',
        'Customers get a reply within minutes, day or night',
      ],
    },

    whatEyebrow: 'What we solve',
    whatTitle: 'What AI automation solves for you',
    whatSub: 'This isn’t a generic "AI tool." Every automation is built around a process that’s actually costing you time.',
    features: [
      { title: 'Lead handling', desc: 'Inbound messages from your website, email, and social channels get automatically qualified, logged into your CRM, and handed to a salesperson with full context.' },
      { title: 'Customer communication', desc: 'Answers to common questions, order confirmations, status tracking — without waiting for human availability.' },
      { title: 'Reporting', desc: 'Recurring reports on revenue, leads, and campaign performance assembled and delivered automatically instead of manually stitched together.' },
      { title: 'Cross-system data handling', desc: 'CRM, email, calendar, and invoicing connected so no one has to retype data by hand.' },
    ],

    processEyebrow: 'Process',
    processTitle: 'How deployment works',
    steps: [
      { title: 'Process identification', desc: 'Together we find the process costing you the most time or money.' },
      { title: 'Design and training', desc: 'We design the automation, connect it to your systems, and train it on your real business data.' },
      { title: 'Launch and monitoring', desc: 'The automation goes live, and we monitor performance and keep tuning it.' },
    ],

    forEyebrow: 'Who it’s for',
    forTitle: 'Who this makes sense for',
    forSubtitle: 'AI automation pays off if...',
    forItems: [
      'You have recurring processes — inquiries, orders, invoicing, reporting',
      'Your sales team spends a large part of the day on admin instead of selling',
      'You want to grow without proportionally growing headcount for operations',
      'You don’t have your own IT department but need a technical solution',
    ],

    faqEyebrow: 'FAQ',
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'How long does deployment take?', a: 'Typically 2–4 weeks from process identification to live operation, depending on complexity and the number of systems that need to be connected.' },
      { q: 'Do I need my own IT department?', a: 'No. Deployment, system integration, and ongoing adjustments are handled by our team.' },
      { q: 'What happens if the automation makes a mistake?', a: 'Every automation has defined boundaries and escalation rules — complex or ambiguous cases are handed to a human with full context.' },
    ],

    ctaEyebrow: 'Free consultation',
    ctaHeading: 'Which process in your business would make sense to automate first?',
    ctaDesc: '30 minutes. No commitment. A concrete look at your situation.',
  },
};

export default function AiAutomatizacePage() {
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
