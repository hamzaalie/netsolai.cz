import ServicePageLayout from '../../components/ServicePageLayout';
import { useLanguage } from '../../context/LanguageContext';

const meta = {
  cs: {
    slug: 'vyvoj-webu',
    serviceType: 'Vývoj webu a webových aplikací',
    seoTitle: 'Vývoj Webu pro Firmy | Netsol AI — Praha',
    seoDesc: 'Tvorba webů a webových aplikací, které se rychle načítají, dobře vypadají a přivádí zákazníky. Bez zbytečné složitosti, s jasným termínem.',
    tag: 'Vývoj webu',
    h1: 'Web, který vypadá dobře a skutečně přivádí zákazníky',
  },
  en: {
    slug: 'vyvoj-webu',
    serviceType: 'Web and web application development',
    seoTitle: 'Web Development for Businesses | Netsol AI — Prague',
    seoDesc: 'Websites and web apps that load fast, look great, and actually bring in customers. No unnecessary complexity, with a clear timeline.',
    tag: 'Web Development',
    h1: 'A website that looks great and actually brings in customers',
  },
};

const content = {
  cs: {
    heroSub: 'Navrhneme a postavíme web nebo webovou aplikaci na míru vaší firmě — rychlou, responzivní a připravenou růst spolu s vámi.',
    ctaPrimary: 'Konzultace zdarma',
    ctaSecondary: 'Co řešíme',
    ctaSecondary2: 'Kontaktovat nás',
    stats: [
      { num: '4–8', label: 'týdnů do spuštění' },
      { num: '100%', label: 'responzivní design' },
      { num: '1', label: 'tým od návrhu po launch' },
    ],

    problemsEyebrow: 'Problém a řešení',
    problemsTitle: 'Poznáváte se v tomhle?',
    problems: {
      title: 'Starý nebo šablonový web',
      items: [
        'Web se pomalu načítá a lidé odcházejí dřív, než ho vůbec uvidí',
        'Na mobilu vypadá rozbitý nebo se špatně ovládá',
        'Vypadá jako stovky dalších webů postavených ze stejné šablony',
        'Úprava textu nebo přidání stránky vyžaduje volat vývojáře',
      ],
    },
    solutions: {
      title: 'Web na míru od Netsol AI',
      items: [
        'Rychlé načítání, optimalizované obrázky a čistý kód',
        'Design, který funguje stejně dobře na mobilu i na počítači',
        'Vizuální identita postavená přesně pro vaši značku',
        'Jasná struktura, kterou zvládnete spravovat i vy sami',
      ],
    },

    whatEyebrow: 'Co řešíme',
    whatTitle: 'Co pro vás vývoj webu řeší',
    whatSub: 'Od jednoduchých prezentačních webů po komplexní webové aplikace.',
    features: [
      { title: 'Firemní a prezentační weby', desc: 'Web, který jasně komunikuje, co děláte, a vede návštěvníka k poptávce nebo kontaktu.' },
      { title: 'E-shopy', desc: 'Online obchod postavený na výkon — rychlé procházení produktů, jednoduchý košík a pokladna.' },
      { title: 'Webové aplikace na míru', desc: 'Interní nástroje, zákaznické portály nebo produkty postavené přesně podle vašich procesů.' },
      { title: 'Redesign existujícího webu', desc: 'Zachováme, co funguje, a přepracujeme zbytek — rychlost, vzhled i strukturu.' },
    ],

    processEyebrow: 'Postup',
    processTitle: 'Jak probíhá vývoj',
    steps: [
      { title: 'Návrh a struktura', desc: 'Naplánujeme strukturu webu a vizuální podobu podle vaší značky a cílů.' },
      { title: 'Vývoj', desc: 'Postavíme web na moderních technologiích — rychlý, responzivní a snadno rozšiřitelný.' },
      { title: 'Spuštění a podpora', desc: 'Web jde do provozu, testujeme napříč zařízeními a zůstáváme k dispozici i po launchi.' },
    ],

    forEyebrow: 'Pro koho',
    forTitle: 'Pro koho to dává smysl',
    forSubtitle: 'Nový web se vyplatí, pokud...',
    forItems: [
      'Váš současný web je pomalý, zastaralý nebo špatně vypadá na mobilu',
      'Chystáte se spustit nový produkt, službu nebo značku',
      'Potřebujete e-shop nebo webovou aplikaci na míru',
      'Chcete web, který budete moci sami snadno spravovat',
    ],

    faqEyebrow: 'Otázky',
    faqTitle: 'Časté otázky',
    faq: [
      { q: 'Jak dlouho trvá vývoj webu?', a: 'Typicky 4–8 týdnů v závislosti na rozsahu — jednoduchý prezentační web je rychlejší než e-shop nebo webová aplikace na míru.' },
      { q: 'Budu moct web spravovat sám?', a: 'Ano, web postavíme tak, abyste si běžné úpravy — texty, obrázky, nové stránky — zvládli spravovat bez zásahu vývojáře.' },
      { q: 'Bude web připravený na SEO?', a: 'Ano, weby stavíme s ohledem na rychlost, strukturu a technické SEO od začátku, ne jako dodatečnou úpravu.' },
      { q: 'Kolik to stojí?', a: 'Cena záleží na rozsahu projektu. Přesnou nabídku dostanete po bezplatné konzultaci, kde probereme vaše potřeby.' },
    ],

    ctaEyebrow: 'Bezplatná konzultace',
    ctaHeading: 'Odpovídá váš současný web tomu, jak dobrá je vaše firma?',
    ctaDesc: '30 minut. Žádné závazky. Konkrétní analýza vaší situace.',
  },
  en: {
    heroSub: 'We design and build a website or web application tailored to your business — fast, responsive, and ready to grow with you.',
    ctaPrimary: 'Free consultation',
    ctaSecondary: 'What we solve',
    ctaSecondary2: 'Contact us',
    stats: [
      { num: '4–8', label: 'weeks to launch' },
      { num: '100%', label: 'responsive design' },
      { num: '1', label: 'team from design to launch' },
    ],

    problemsEyebrow: 'Problem and solution',
    problemsTitle: 'Does this sound familiar?',
    problems: {
      title: 'Old or template-based site',
      items: [
        'Your site loads slowly and visitors leave before they even see it',
        'It looks broken or is hard to use on mobile',
        'It looks like hundreds of other sites built from the same template',
        'Editing text or adding a page means calling a developer',
      ],
    },
    solutions: {
      title: 'A custom site from Netsol AI',
      items: [
        'Fast loading, optimized images, and clean code',
        'A design that works equally well on mobile and desktop',
        'A visual identity built specifically for your brand',
        'A clear structure you can manage yourself',
      ],
    },

    whatEyebrow: 'What we solve',
    whatTitle: 'What web development solves for you',
    whatSub: 'From simple business sites to complex web applications.',
    features: [
      { title: 'Business and marketing sites', desc: 'A site that clearly communicates what you do and guides visitors toward an inquiry or contact.' },
      { title: 'E-commerce stores', desc: 'An online store built for performance — fast product browsing, a simple cart, and checkout.' },
      { title: 'Custom web applications', desc: 'Internal tools, customer portals, or products built exactly around your processes.' },
      { title: 'Redesigning an existing site', desc: 'We keep what works and rebuild the rest — speed, look, and structure.' },
    ],

    processEyebrow: 'Process',
    processTitle: 'How development works',
    steps: [
      { title: 'Design and structure', desc: 'We plan the site structure and visual identity around your brand and goals.' },
      { title: 'Development', desc: 'We build the site on modern technology — fast, responsive, and easy to extend.' },
      { title: 'Launch and support', desc: 'The site goes live, we test across devices, and stay available after launch too.' },
    ],

    forEyebrow: 'Who it’s for',
    forTitle: 'Who this makes sense for',
    forSubtitle: 'A new site pays off if...',
    forItems: [
      'Your current site is slow, outdated, or looks bad on mobile',
      'You’re launching a new product, service, or brand',
      'You need a custom e-commerce store or web application',
      'You want a site you can easily manage yourself',
    ],

    faqEyebrow: 'FAQ',
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'How long does building a website take?', a: 'Typically 4–8 weeks depending on scope — a simple marketing site is faster than a custom e-commerce store or web application.' },
      { q: 'Will I be able to manage the site myself?', a: 'Yes, we build it so you can handle routine changes — text, images, new pages — without needing a developer.' },
      { q: 'Will the site be SEO-ready?', a: 'Yes, we build with speed, structure, and technical SEO in mind from the start, not as an afterthought.' },
      { q: 'How much does it cost?', a: 'Pricing depends on project scope. You’ll get an exact quote after a free consultation about your needs.' },
    ],

    ctaEyebrow: 'Free consultation',
    ctaHeading: 'Does your current website match how good your business actually is?',
    ctaDesc: '30 minutes. No commitment. A concrete look at your situation.',
  },
};

export default function VyvojWebuPage() {
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
