import ServicePageLayout from '../../components/ServicePageLayout';
import { useLanguage } from '../../context/LanguageContext';

const meta = {
  cs: {
    slug: 'ai-chatbot',
    serviceType: 'AI chatbot pro firmy',
    seoTitle: 'AI Chatbot pro Firmy | Netsol AI — Praha',
    seoDesc: 'AI chatbot, který odpovídá zákazníkům 24/7, zachytává poptávky a zvyšuje tržby bez nutnosti najímat další lidi. Nasazení za 2–4 týdny.',
    tag: 'AI Chatbot',
    h1: 'AI chatbot, který odpovídá zákazníkům, i když spíte',
  },
  en: {
    slug: 'ai-chatbot',
    serviceType: 'AI chatbot for businesses',
    seoTitle: 'AI Chatbot for Businesses | Netsol AI — Prague',
    seoDesc: 'An AI chatbot that answers customers 24/7, captures leads, and grows revenue without hiring more people. Live in 2–4 weeks.',
    tag: 'AI Chatbot',
    h1: 'An AI chatbot that answers customers even while you sleep',
  },
};

const content = {
  cs: {
    heroSub: 'Nasadíme chatbota, který zná vaše produkty, odpovídá zákazníkům v reálném čase a předává obchodníkovi jen ty poptávky, které mají skutečný zájem.',
    ctaPrimary: 'Konzultace zdarma',
    ctaSecondary: 'Co řešíme',
    ctaSecondary2: 'Kontaktovat nás',
    stats: [
      { num: '24/7', label: 'dostupnost bez přestávky' },
      { num: '<1 min', label: 'reakční doba' },
      { num: '2–4', label: 'týdny do spuštění' },
    ],

    problemsEyebrow: 'Problém a řešení',
    problemsTitle: 'Poznáváte se v tomhle?',
    problems: {
      title: 'Bez chatbota',
      items: [
        'Zákazník napíše mimo pracovní dobu a odpověď dostane až druhý den',
        'Tým odpovídá pořád na stejné dotazy — cena, dostupnost, doprava',
        'Levné poptávky zabírají stejně času jako ty nejhodnotnější',
        'Konkurence odpoví rychleji, a zákazník si vybere ji',
      ],
    },
    solutions: {
      title: 'S AI chatbotem',
      items: [
        'Odpověď přijde do minuty, kdykoliv ve dne i v noci',
        'Časté dotazy vyřeší chatbot sám, bez zapojení člověka',
        'Chatbot zákazníka zkvalifikuje a předá obchodníkovi jen to hodnotné',
        'Rychlá odpověď = vyšší šance, že zákazník zůstane u vás',
      ],
    },

    whatEyebrow: 'Co řešíme',
    whatTitle: 'Co pro vás chatbot řeší',
    whatSub: 'Chatbot napojíme na vaše skutečné produkty, ceník a procesy — ne na obecný skript.',
    features: [
      { title: 'Odpovědi na časté dotazy', desc: 'Cena, dostupnost, otevírací doba, doprava — chatbot zná odpovědi a odpoví okamžitě, bez čekání na člověka.' },
      { title: 'Kvalifikace poptávek', desc: 'Chatbot se zákazníka zeptá na to podstatné a předá obchodníkovi lead s kompletním kontextem, ne jen jméno a e-mail.' },
      { title: 'Sledování objednávek', desc: 'Zákazník se zeptá na stav objednávky a dostane okamžitou odpověď napojenou na váš systém.' },
      { title: 'Rezervace a plánování', desc: 'Chatbot rovnou nabídne volné termíny a zapíše schůzku do kalendáře, bez e-mailové výměny tam a zpět.' },
    ],

    processEyebrow: 'Postup',
    processTitle: 'Jak probíhá nasazení',
    steps: [
      { title: 'Analýza dotazů', desc: 'Projdeme, na co se vaši zákazníci nejčastěji ptají, a podle toho chatbota navrhneme.' },
      { title: 'Trénink a napojení', desc: 'Natrénujeme chatbota na vašich datech a propojíme ho s webem, CRM i dalšími systémy.' },
      { title: 'Spuštění a ladění', desc: 'Chatbot jde do provozu, sledujeme konverzace a průběžně zlepšujeme odpovědi.' },
    ],

    forEyebrow: 'Pro koho',
    forTitle: 'Pro koho to dává smysl',
    forSubtitle: 'AI chatbot se vyplatí, pokud...',
    forItems: [
      'Dostáváte hodně opakujících se dotazů na stejné téma',
      'Zákazníci píší mimo pracovní dobu a čekají na odpověď',
      'Chcete zachytit víc poptávek, aniž byste najímali další lidi',
      'Máte e-shop nebo web s vysokým počtem návštěvníků',
    ],

    faqEyebrow: 'Otázky',
    faqTitle: 'Časté otázky',
    faq: [
      { q: 'Pozná zákazník, že mluví s AI?', a: 'Chatbot se vždy transparentně představí jako AI asistent. Pokud je dotaz příliš složitý, sám nabídne předání na člověka.' },
      { q: 'Bude chatbot vypadat jako součást mého webu?', a: 'Ano, vzhled i tón komunikace přizpůsobíme vaší značce, ne obecnému řešení.' },
      { q: 'Co s dotazy, na které chatbot neumí odpovědět?', a: 'Automaticky se eskalují na člověka s plným kontextem konverzace — zákazník neopakuje dotaz od začátku.' },
      { q: 'Kolik to stojí?', a: 'Cena záleží na rozsahu a napojení na vaše systémy. Přesnou nabídku dostanete po bezplatné konzultaci.' },
    ],

    ctaEyebrow: 'Bezplatná konzultace',
    ctaHeading: 'Kolik poptávek vám měsíčně unikne mimo pracovní dobu?',
    ctaDesc: '30 minut. Žádné závazky. Konkrétní analýza vaší situace.',
  },
  en: {
    heroSub: 'We deploy a chatbot that knows your products, answers customers in real time, and only hands off leads to your sales team that are genuinely worth their time.',
    ctaPrimary: 'Free consultation',
    ctaSecondary: 'What we solve',
    ctaSecondary2: 'Contact us',
    stats: [
      { num: '24/7', label: 'always available' },
      { num: '<1 min', label: 'response time' },
      { num: '2–4', label: 'weeks to launch' },
    ],

    problemsEyebrow: 'Problem and solution',
    problemsTitle: 'Does this sound familiar?',
    problems: {
      title: 'Without a chatbot',
      items: [
        'A customer messages outside business hours and waits until the next day',
        'Your team keeps answering the same questions — price, availability, shipping',
        'Low-value inquiries take as much time as your best leads',
        'A competitor replies faster, and the customer picks them instead',
      ],
    },
    solutions: {
      title: 'With an AI chatbot',
      items: [
        'A reply arrives within a minute, day or night',
        'Common questions get resolved by the chatbot, no human needed',
        'The chatbot qualifies the customer and hands off only the valuable leads',
        'A fast reply means a much better chance the customer stays with you',
      ],
    },

    whatEyebrow: 'What we solve',
    whatTitle: 'What a chatbot solves for you',
    whatSub: 'We connect the chatbot to your actual products, pricing, and processes — not a generic script.',
    features: [
      { title: 'Answering common questions', desc: 'Price, availability, hours, shipping — the chatbot knows the answers and replies instantly, no waiting on a person.' },
      { title: 'Lead qualification', desc: 'The chatbot asks the right questions and hands your salesperson a lead with full context, not just a name and email.' },
      { title: 'Order tracking', desc: 'A customer asks about order status and gets an instant answer connected to your actual system.' },
      { title: 'Booking and scheduling', desc: 'The chatbot offers open time slots directly and books the meeting into your calendar, no back-and-forth email.' },
    ],

    processEyebrow: 'Process',
    processTitle: 'How deployment works',
    steps: [
      { title: 'Analyze inquiries', desc: 'We review what your customers actually ask most and design the chatbot around it.' },
      { title: 'Train and connect', desc: 'We train the chatbot on your data and connect it to your website, CRM, and other systems.' },
      { title: 'Launch and tune', desc: 'The chatbot goes live, and we monitor conversations and keep improving its answers.' },
    ],

    forEyebrow: 'Who it’s for',
    forTitle: 'Who this makes sense for',
    forSubtitle: 'An AI chatbot pays off if...',
    forItems: [
      'You get a lot of repetitive questions on the same topics',
      'Customers message outside business hours and wait for a reply',
      'You want to capture more leads without hiring more people',
      'You run an e-commerce site or a website with high traffic',
    ],

    faqEyebrow: 'FAQ',
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'Will customers know they’re talking to AI?', a: 'The chatbot always transparently identifies itself as an AI assistant. If a question is too complex, it offers to hand off to a human.' },
      { q: 'Will it look like part of my website?', a: 'Yes, the look and tone are matched to your brand, not a generic off-the-shelf widget.' },
      { q: 'What happens with questions it can’t answer?', a: 'They automatically escalate to a human with the full conversation context — the customer doesn’t repeat themselves.' },
      { q: 'How much does it cost?', a: 'Pricing depends on scope and integration with your systems. You’ll get an exact quote after a free consultation.' },
    ],

    ctaEyebrow: 'Free consultation',
    ctaHeading: 'How many inquiries slip through outside business hours every month?',
    ctaDesc: '30 minutes. No commitment. A concrete look at your situation.',
  },
};

export default function AiChatbotPage() {
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
