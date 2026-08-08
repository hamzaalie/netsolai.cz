import CaseStudyLayout from '../../components/CaseStudyLayout';
import { useLanguage } from '../../context/LanguageContext';

const meta = {
  cs: {
    slug: 'slumber-cbn',
    clientName: 'Slumber CBN',
    tags: ['E-Commerce', 'Branding'],
    image: '/images/portfolio/slumber.png',
    liveUrl: 'https://slumbercbn.com/',
    seoTitle: 'Slumber CBN | Případová studie | Netsol AI',
    seoDesc: 'Jak jsme postavili e-shop a značku pro Slumber CBN — wellness brand zaměřený na produkty pro lepší spánek.',
  },
  en: {
    slug: 'slumber-cbn',
    clientName: 'Slumber CBN',
    tags: ['E-Commerce', 'Branding'],
    image: '/images/portfolio/slumber.png',
    liveUrl: 'https://slumbercbn.com/',
    seoTitle: 'Slumber CBN | Case Study | Netsol AI',
    seoDesc: 'How we built the e-commerce store and brand for Slumber CBN — a sleep wellness brand built around CBN and CBD products.',
  },
};

const content = {
  cs: {
    tagline: 'E-shop a značka pro wellness brand zaměřený na přírodní podporu spánku.',
    aboutEyebrow: 'O projektu',
    aboutTitle: 'E-commerce pro wellness značku',
    aboutParagraphs: [
      'Slumber je přímo-k-zákazníkovi (D2C) značka nabízející produkty na bázi CBN a CBD, které pomáhají se spánkem bez předepsaných léků nebo melatoninu.',
      'Produktová řada zahrnuje gumídky, tinktury, kapsle i prášky, doplněné o denní produkty na energii a stres. Web staví na vzdělávacím obsahu a transparentnosti — vlastní studii spánku, nezávislé laboratorní testy a lékařskou poradní radu.',
    ],
    builtEyebrow: 'Co jsme postavili',
    builtTitle: 'Klíčové prvky e-shopu',
    built: [
      { title: 'Personalizovaný kvíz', desc: '60sekundový kvíz, který zákazníkovi doporučí produkt podle jeho potřeb.' },
      { title: 'Předplatné', desc: 'Model opakovaných objednávek s slevou pro pravidelné zákazníky.' },
      { title: 'Vzdělávací obsah', desc: 'Průvodci, odkazy na výzkum a informace o dávkování přímo na webu.' },
      { title: 'Vizuální identita', desc: 'Značka a design komunikující klinickou důvěryhodnost i wellness estetiku zároveň.' },
    ],
    ctaEyebrow: 'Chcete podobný projekt?',
    ctaHeading: 'Stavíme e-shopy a značky, kterým zákazníci věří',
    ctaDesc: 'Probereme, jak postavit e-commerce a brand pro váš produkt.',
    ctaPrimary: 'Konzultace zdarma',
    ctaSecondary: 'Navštívit web →',
  },
  en: {
    tagline: 'E-commerce and brand identity for a sleep-focused wellness company.',
    aboutEyebrow: 'About the project',
    aboutTitle: 'E-commerce for a wellness brand',
    aboutParagraphs: [
      'Slumber is a direct-to-consumer brand offering CBN and CBD-based products designed to support sleep without prescription medication or melatonin.',
      'The product range spans gummies, tinctures, capsules, and powders, alongside daytime products for energy and stress. The site is built around education and transparency — an independent sleep study, third-party lab testing, and a medical advisory board.',
    ],
    builtEyebrow: 'What we built',
    builtTitle: 'Key parts of the store',
    built: [
      { title: 'Personalized quiz', desc: 'A 60-second quiz that recommends products based on the customer\'s needs.' },
      { title: 'Subscriptions', desc: 'A recurring order model with a discount for repeat customers.' },
      { title: 'Educational content', desc: 'Guides, research links, and dosing information built directly into the site.' },
      { title: 'Visual identity', desc: 'A brand and design communicating both clinical credibility and wellness aesthetics.' },
    ],
    ctaEyebrow: 'Want something similar?',
    ctaHeading: 'We build e-commerce and brands customers trust',
    ctaDesc: 'Let\'s talk about how to build the store and brand for your product.',
    ctaPrimary: 'Free consultation',
    ctaSecondary: 'Visit site →',
  },
};

export default function SlumberPage() {
  const { lang } = useLanguage();
  return <CaseStudyLayout lang={lang} meta={meta} content={content} />;
}
