import ServicePageLayout from '../../components/ServicePageLayout';
import { useLanguage } from '../../context/LanguageContext';

const meta = {
  cs: {
    slug: 'ai-agenti',
    serviceType: 'Vývoj AI agentů',
    seoTitle: 'AI Agenti pro Firmy | Netsol AI — Praha',
    seoDesc: 'Navrhneme a nasadíme AI agenty, kteří samostatně plní úkoly napříč vašimi systémy — od kvalifikace leadů po reporting. Ne jen chatbot, skutečná automatizace rozhodování.',
    tag: 'AI Agenti',
    h1: 'AI agenti, kteří za vás dotáhnou úkol do konce',
  },
  en: {
    slug: 'ai-agenti',
    serviceType: 'AI agent development',
    seoTitle: 'AI Agents for Businesses | Netsol AI — Prague',
    seoDesc: 'We design and deploy AI agents that autonomously complete tasks across your systems — from lead qualification to reporting. Not just a chatbot — real decision automation.',
    tag: 'AI Agents',
    h1: 'AI agents that carry a task through to the end',
  },
};

const content = {
  cs: {
    heroSub: 'Chatbot odpovídá. AI agent jedná — dostane cíl, sám naplánuje kroky, provede je napříč vašimi systémy a výsledek zkontroluje.',
    ctaPrimary: 'Konzultace zdarma',
    ctaSecondary: 'Co řešíme',
    ctaSecondary2: 'Kontaktovat nás',
    stats: [
      { num: '3–5', label: 'systémů propojených najednou' },
      { num: '2–4', label: 'týdny do spuštění' },
      { num: '24/7', label: 'autonomní provoz' },
    ],

    problemsEyebrow: 'Problém a řešení',
    problemsTitle: 'Poznáváte se v tomhle?',
    problems: {
      title: 'Bez AI agenta',
      items: [
        'Zaměstnanec ručně kopíruje informace mezi 3–4 různými nástroji',
        'Rozhodnutí o dalším kroku čeká, až se k tomu někdo dostane',
        'Chatbot umí odpovědět, ale nic za vás skutečně neudělá',
        'Škálování znamená najímat další lidi na stejnou opakující se práci',
      ],
    },
    solutions: {
      title: 'S AI agentem',
      items: [
        'Agent sám provede celý proces napříč systémy, bez ručních kroků',
        'Agent rozhodne, co dělat dál, a jedná okamžitě',
        'Agent aktivně jedná — zapisuje, odesílá, plánuje, aktualizuje',
        'Škálujete provoz, aniž byste úměrně navyšovali počet lidí',
      ],
    },

    whatEyebrow: 'Co řešíme',
    whatTitle: 'Jaké AI agenty stavíme',
    whatSub: 'Každý agent má konkrétní cíl a přístup k nástrojům, které potřebuje k jeho splnění.',
    features: [
      { title: 'Lead qualification agent', desc: 'Zachytí příchozí poptávku, zjistí potřeby zákazníka, zapíše ji do CRM a označí, jak je poptávka teplá.' },
      { title: 'Reporting agent', desc: 'Pravidelně sbírá data napříč systémy, analyzuje je a doručí přehledný report bez ručního zásahu.' },
      { title: 'Outreach agent', desc: 'Osloví potenciální zákazníky na základě dat z CRM, personalizuje zprávy a sleduje odpovědi.' },
      { title: 'Operations agent', desc: 'Monitoruje procesy v reálném čase — zásoby, termíny, fakturaci — a sám reaguje, pokud něco vybočí z plánu.' },
    ],

    processEyebrow: 'Postup',
    processTitle: 'Jak probíhá nasazení',
    steps: [
      { title: 'Identifikace úkolu', desc: 'Najdeme konkrétní vícekrokový proces, který agent může převzít.' },
      { title: 'Návrh a propojení', desc: 'Navrhneme agenta, napojíme ho na potřebné nástroje a natrénujeme na vašich datech.' },
      { title: 'Spuštění a dohled', desc: 'Agent jde do provozu s jasnými hranicemi — složité případy předává člověku.' },
    ],

    forEyebrow: 'Pro koho',
    forTitle: 'Pro koho to dává smysl',
    forSubtitle: 'AI agent se vyplatí, pokud...',
    forItems: [
      'Máte vícekrokový proces, který dnes zvládá ručně jeden člověk',
      'Proces vyžaduje rozhodování, ne jen odpovídání na dotazy',
      'Data putují mezi několika systémy, které nejsou propojené',
      'Chcete škálovat operativu bez úměrného nárůstu týmu',
    ],

    faqEyebrow: 'Otázky',
    faqTitle: 'Časté otázky',
    faq: [
      { q: 'Jak se AI agent liší od chatbotu?', a: 'Chatbot odpovídá na dotazy v konverzaci. AI agent dostane cíl a sám provede kroky napříč systémy, aby ho splnil — bez čekání na instrukce ke každému kroku.' },
      { q: 'Co když agent narazí na neznámou situaci?', a: 'Agent má definované hranice — pokud si není jistý nebo případ je nejednoznačný, předá ho člověku s plným kontextem.' },
      { q: 'Můžu mít víc agentů najednou?', a: 'Ano, běžně nasazujeme kombinaci agentů pro různé procesy — každý se stará o svůj konkrétní úkol.' },
      { q: 'Kolik to stojí?', a: 'Cena záleží na složitosti úkolu a počtu propojených systémů. Přesnou nabídku dostanete po bezplatné konzultaci.' },
    ],

    ctaEyebrow: 'Bezplatná konzultace',
    ctaHeading: 'Který vícekrokový proces by ve vaší firmě mohl převzít AI agent?',
    ctaDesc: '30 minut. Žádné závazky. Konkrétní analýza vaší situace.',
  },
  en: {
    heroSub: 'A chatbot answers. An AI agent acts — it gets a goal, plans the steps itself, carries them out across your systems, and checks the result.',
    ctaPrimary: 'Free consultation',
    ctaSecondary: 'What we solve',
    ctaSecondary2: 'Contact us',
    stats: [
      { num: '3–5', label: 'systems connected at once' },
      { num: '2–4', label: 'weeks to launch' },
      { num: '24/7', label: 'autonomous operation' },
    ],

    problemsEyebrow: 'Problem and solution',
    problemsTitle: 'Does this sound familiar?',
    problems: {
      title: 'Without an AI agent',
      items: [
        'An employee manually copies information between 3-4 different tools',
        'A decision about the next step waits until someone gets to it',
        'A chatbot can answer, but doesn’t actually do anything for you',
        'Scaling means hiring more people for the same repetitive work',
      ],
    },
    solutions: {
      title: 'With an AI agent',
      items: [
        'The agent carries out the entire process across systems, no manual steps',
        'The agent decides what to do next and acts immediately',
        'The agent actively acts — logs, sends, schedules, updates',
        'You scale operations without proportionally growing headcount',
      ],
    },

    whatEyebrow: 'What we solve',
    whatTitle: 'What AI agents we build',
    whatSub: 'Every agent has a specific goal and access to the tools it needs to complete it.',
    features: [
      { title: 'Lead qualification agent', desc: 'Captures an inbound inquiry, identifies the customer’s needs, logs it into your CRM, and flags how warm the lead is.' },
      { title: 'Reporting agent', desc: 'Regularly collects data across systems, analyzes it, and delivers a clear report with no manual work.' },
      { title: 'Outreach agent', desc: 'Reaches out to potential customers based on CRM data, personalizes messages, and tracks replies.' },
      { title: 'Operations agent', desc: 'Monitors your processes in real time — inventory, deadlines, invoicing — and reacts on its own when something drifts off plan.' },
    ],

    processEyebrow: 'Process',
    processTitle: 'How deployment works',
    steps: [
      { title: 'Task identification', desc: 'We find a specific multi-step process the agent can take over.' },
      { title: 'Design and connection', desc: 'We design the agent, connect it to the tools it needs, and train it on your data.' },
      { title: 'Launch and oversight', desc: 'The agent goes live with clear boundaries — complex cases are handed to a human.' },
    ],

    forEyebrow: 'Who it’s for',
    forTitle: 'Who this makes sense for',
    forSubtitle: 'An AI agent pays off if...',
    forItems: [
      'You have a multi-step process one person currently handles manually',
      'The process requires decisions, not just answering questions',
      'Data moves between several systems that aren’t connected',
      'You want to scale operations without proportionally growing your team',
    ],

    faqEyebrow: 'FAQ',
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'How is an AI agent different from a chatbot?', a: 'A chatbot answers questions in conversation. An AI agent gets a goal and carries out the steps across systems to achieve it — without waiting for instructions at every step.' },
      { q: 'What if the agent hits an unfamiliar situation?', a: 'The agent has defined boundaries — if it’s unsure or the case is ambiguous, it hands off to a human with full context.' },
      { q: 'Can I have multiple agents at once?', a: 'Yes, we commonly deploy a combination of agents for different processes — each handling its own specific task.' },
      { q: 'How much does it cost?', a: 'Pricing depends on task complexity and the number of connected systems. You’ll get an exact quote after a free consultation.' },
    ],

    ctaEyebrow: 'Free consultation',
    ctaHeading: 'Which multi-step process in your business could an AI agent take over?',
    ctaDesc: '30 minutes. No commitment. A concrete look at your situation.',
  },
};

export default function AiAgentiPage() {
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
