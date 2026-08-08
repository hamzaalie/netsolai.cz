import CaseStudyLayout from '../../components/CaseStudyLayout';
import { useLanguage } from '../../context/LanguageContext';

const meta = {
  cs: {
    slug: 'creative-hive-co',
    clientName: 'Creative Hive Co',
    tags: ['Web Dev', 'Community'],
    image: '/images/portfolio/creative-hive-co.png',
    liveUrl: 'https://www.creativehiveco.com/',
    seoTitle: 'Creative Hive Co | Případová studie | Netsol AI',
    seoDesc: 'Jak jsme postavili vzdělávací platformu a komunitu pro Creative Hive Co — prostor, kde tvůrci a řemeslníci budují ziskové online byznysy.',
  },
  en: {
    slug: 'creative-hive-co',
    clientName: 'Creative Hive Co',
    tags: ['Web Dev', 'Community'],
    image: '/images/portfolio/creative-hive-co.png',
    liveUrl: 'https://www.creativehiveco.com/',
    seoTitle: 'Creative Hive Co | Case Study | Netsol AI',
    seoDesc: 'How we built an educational platform and community for Creative Hive Co — a space where makers and artisans build profitable online businesses.',
  },
};

const content = {
  cs: {
    tagline: 'Vzdělávací platforma a komunita pro tvůrce, kteří chtějí prodávat mimo klasické tržnice.',
    aboutEyebrow: 'O projektu',
    aboutTitle: 'Vzdělávací platforma pro nezávislé tvůrce',
    aboutParagraphs: [
      'Creative Hive Co pomáhá řemeslníkům, umělcům a designérům postavit ziskový online byznys kolem ručně vyráběných produktů — bez závislosti na tržnicích typu Etsy.',
      'Platforma zahrnuje placené kurzy, bezplatný vzdělávací obsah a přihlašovací portál pro studenty, kde si spravují svůj postup a přístup k materiálům.',
    ],
    builtEyebrow: 'Co jsme postavili',
    builtTitle: 'Klíčové prvky platformy',
    built: [
      { title: 'Studentský portál', desc: 'Přihlašovací systém, kde si studenti spravují přístup ke kurzům a svůj postup.' },
      { title: 'Prodej kurzů', desc: 'Stránky a checkout flow pro placené vzdělávací programy, včetně hlavního kurzu „A Sale A Day".' },
      { title: 'Nástroje a kalkulačky', desc: 'Interaktivní pomůcky pro tvorbu cen produktů, dostupné přímo na webu.' },
      { title: 'Obsahová struktura', desc: 'Přehledná organizace bezplatného i placeného obsahu pro různé úrovně zkušeností studentů.' },
    ],
    ctaEyebrow: 'Chcete podobný projekt?',
    ctaHeading: 'Stavíme vzdělávací platformy a komunity na míru',
    ctaDesc: 'Probereme, co váš projekt potřebuje — od studentského portálu po prodej kurzů.',
    ctaPrimary: 'Konzultace zdarma',
    ctaSecondary: 'Navštívit web →',
  },
  en: {
    tagline: 'An educational platform and community for makers who want to sell beyond traditional marketplaces.',
    aboutEyebrow: 'About the project',
    aboutTitle: 'An educational platform for independent makers',
    aboutParagraphs: [
      'Creative Hive Co helps artisans, artists, and designers build a profitable online business around handmade products — without relying on marketplaces like Etsy.',
      'The platform includes paid courses, free educational content, and a student login portal where members manage their progress and access materials.',
    ],
    builtEyebrow: 'What we built',
    builtTitle: 'Key parts of the platform',
    built: [
      { title: 'Student portal', desc: 'A login system where students manage course access and track their progress.' },
      { title: 'Course sales', desc: 'Landing pages and checkout flow for paid educational programs, including the flagship "A Sale A Day" course.' },
      { title: 'Tools and calculators', desc: 'Interactive product pricing tools available directly on the site.' },
      { title: 'Content structure', desc: 'A clear organization of free and paid content for students at different experience levels.' },
    ],
    ctaEyebrow: 'Want something similar?',
    ctaHeading: 'We build custom educational platforms and communities',
    ctaDesc: 'Let\'s talk about what your project needs — from student portals to course sales.',
    ctaPrimary: 'Free consultation',
    ctaSecondary: 'Visit site →',
  },
};

export default function CreativeHiveCoPage() {
  const { lang } = useLanguage();
  return <CaseStudyLayout lang={lang} meta={meta} content={content} />;
}
