import CaseStudyLayout from '../../components/CaseStudyLayout';
import { useLanguage } from '../../context/LanguageContext';

const meta = {
  cs: {
    slug: 'the-contractors-academy',
    clientName: 'The Contractors Academy',
    tags: ['E-Learning', 'Web Dev'],
    image: '/images/portfolio/the-contractors-academy.png',
    liveUrl: 'https://www.thecontractorsacademy.com/',
    seoTitle: 'The Contractors Academy | Případová studie | Netsol AI',
    seoDesc: 'Jak jsme postavili vzdělávací platformu pro The Contractors Academy — online tréninkový program pro firmy z oboru stavebnictví a řemesel.',
  },
  en: {
    slug: 'the-contractors-academy',
    clientName: 'The Contractors Academy',
    tags: ['E-Learning', 'Web Dev'],
    image: '/images/portfolio/the-contractors-academy.png',
    liveUrl: 'https://www.thecontractorsacademy.com/',
    seoTitle: 'The Contractors Academy | Case Study | Netsol AI',
    seoDesc: 'How we built an e-learning platform for The Contractors Academy — an online training program for the contracting and trades industry.',
  },
};

const content = {
  cs: {
    tagline: 'Online tréninková platforma pro firmy z oboru stavebnictví a řemesel.',
    aboutEyebrow: 'O projektu',
    aboutTitle: 'E-learningová platforma pro obor stavebnictví',
    aboutParagraphs: [
      'The Contractors Academy je vzdělávací platforma zaměřená na firmy a živnostníky z oboru stavebnictví a řemesel, kteří chtějí růst v byznysové části svého podnikání — ne jen v řemesle samotném.',
      'Naším úkolem bylo postavit web a technické zázemí pro doručování online kurzů, včetně přehledné struktury obsahu a jednoduché cesty od návštěvníka k platícímu studentovi.',
    ],
    builtEyebrow: 'Co jsme postavili',
    builtTitle: 'Klíčové prvky platformy',
    built: [
      { title: 'Web a prezentace kurzů', desc: 'Marketingové stránky komunikující hodnotu vzdělávacího programu cílové skupině.' },
      { title: 'Technické zázemí pro e-learning', desc: 'Infrastruktura pro doručování online vzdělávacího obsahu studentům.' },
      { title: 'Cesta k nákupu', desc: 'Jednoduchý a jasný proces od návštěvy webu po přihlášení do kurzu.' },
    ],
    ctaEyebrow: 'Chcete podobný projekt?',
    ctaHeading: 'Stavíme e-learningové platformy na míru vašemu oboru',
    ctaDesc: 'Probereme, co váš vzdělávací program potřebuje po technické i obchodní stránce.',
    ctaPrimary: 'Konzultace zdarma',
    ctaSecondary: 'Navštívit web →',
  },
  en: {
    tagline: 'An online training platform for contracting and trades businesses.',
    aboutEyebrow: 'About the project',
    aboutTitle: 'An e-learning platform for the trades industry',
    aboutParagraphs: [
      'The Contractors Academy is an educational platform aimed at contracting businesses and tradespeople who want to grow the business side of their work — not just the trade itself.',
      'Our job was to build the website and technical foundation for delivering online courses, including a clear content structure and a simple path from visitor to paying student.',
    ],
    builtEyebrow: 'What we built',
    builtTitle: 'Key parts of the platform',
    built: [
      { title: 'Website and course presentation', desc: 'Marketing pages communicating the value of the training program to the target audience.' },
      { title: 'E-learning infrastructure', desc: 'The technical foundation for delivering online educational content to students.' },
      { title: 'Purchase path', desc: 'A simple, clear process from visiting the site to enrolling in a course.' },
    ],
    ctaEyebrow: 'Want something similar?',
    ctaHeading: 'We build custom e-learning platforms for your industry',
    ctaDesc: 'Let\'s talk about what your training program needs, technically and commercially.',
    ctaPrimary: 'Free consultation',
    ctaSecondary: 'Visit site →',
  },
};

export default function ContractorsAcademyPage() {
  const { lang } = useLanguage();
  return <CaseStudyLayout lang={lang} meta={meta} content={content} />;
}
