import CaseStudyLayout from '../../components/CaseStudyLayout';
import { useLanguage } from '../../context/LanguageContext';

const meta = {
  cs: {
    slug: 'imagine-health',
    clientName: 'Imagine Health',
    tags: ['Health', 'Web Dev'],
    image: '/images/portfolio/imagine-health.png',
    liveUrl: 'https://imagine-thailand.com/',
    seoTitle: 'Imagine Health | Případová studie | Netsol AI',
    seoDesc: 'Jak jsme postavili web pro Imagine Health — nezávislého zprostředkovatele zdravotní péče spojujícího mezinárodní pacienty s thajskými poskytovateli.',
  },
  en: {
    slug: 'imagine-health',
    clientName: 'Imagine Health',
    tags: ['Health', 'Web Dev'],
    image: '/images/portfolio/imagine-health.png',
    liveUrl: 'https://imagine-thailand.com/',
    seoTitle: 'Imagine Health | Case Study | Netsol AI',
    seoDesc: 'How we built the website for Imagine Health — an independent healthcare facilitator connecting international patients with Thai medical providers.',
  },
};

const content = {
  cs: {
    tagline: 'Web pro nezávislého zdravotního facilitátora propojujícího pacienty s thajskými klinikami.',
    aboutEyebrow: 'O projektu',
    aboutTitle: 'Platforma pro zdravotní cestovní ruch',
    aboutParagraphs: [
      'Imagine Health je nezávislý zprostředkovatel zdravotní péče se sídlem v Bangkoku, který pomáhá mezinárodním pacientům najít prověřené thajské poskytovatele napříč obory — od estetických zákroků po rehabilitaci.',
      'Firma se záměrně neváže na jednu kliniku — jejich hodnotou je pomoct klientům porovnat možnosti a vybrat správný přístup k léčbě. To kladlo specifické nároky na strukturu webu, aby dokázal srozumitelně komunikovat širokou nabídku služeb bez zmatení návštěvníka.',
    ],
    builtEyebrow: 'Co jsme postavili',
    builtTitle: 'Klíčové prvky webu',
    built: [
      { title: 'Struktura služeb', desc: 'Přehledná navigace organizující široké spektrum zdravotních a estetických služeb do srozumitelných kategorií.' },
      { title: 'Vícekrokové formuláře', desc: 'Intake formuláře pro sběr informací od potenciálních pacientů před prvním kontaktem.' },
      { title: 'Vzdělávací obsah', desc: 'Blog a informační sekce zodpovídající časté otázky pacientů o konkrétních zákrocích a zdravotnictví v Thajsku.' },
      { title: 'Důvěryhodnost a transparentnost', desc: 'Web komunikuje nezávislost firmy a pečlivé prověřování partnerských klinik.' },
    ],
    ctaEyebrow: 'Chcete podobný projekt?',
    ctaHeading: 'Stavíme weby pro zdravotnické a specializované služby',
    ctaDesc: 'Probereme, jak srozumitelně komunikovat komplexní nabídku služeb vašim klientům.',
    ctaPrimary: 'Konzultace zdarma',
    ctaSecondary: 'Navštívit web →',
  },
  en: {
    tagline: 'A website for an independent healthcare facilitator connecting patients with Thai clinics.',
    aboutEyebrow: 'About the project',
    aboutTitle: 'A medical travel platform',
    aboutParagraphs: [
      'Imagine Health is an independent healthcare facilitator based in Bangkok, helping international patients find vetted Thai providers across specialties — from aesthetic procedures to rehabilitation.',
      'The company deliberately doesn\'t tie itself to a single clinic — their value is helping clients compare options and choose the right treatment approach. That created specific demands on the site\'s structure, needing to clearly communicate a wide range of services without overwhelming visitors.',
    ],
    builtEyebrow: 'What we built',
    builtTitle: 'Key parts of the site',
    built: [
      { title: 'Service structure', desc: 'Clear navigation organizing a wide range of health and aesthetic services into understandable categories.' },
      { title: 'Multi-step intake forms', desc: 'Forms for gathering information from prospective patients before first contact.' },
      { title: 'Educational content', desc: 'A blog and information section answering common patient questions about specific procedures and healthcare in Thailand.' },
      { title: 'Trust and transparency', desc: 'The site communicates the company\'s independence and careful vetting of partner clinics.' },
    ],
    ctaEyebrow: 'Want something similar?',
    ctaHeading: 'We build websites for healthcare and specialized services',
    ctaDesc: 'Let\'s talk about how to clearly communicate a complex service offering to your clients.',
    ctaPrimary: 'Free consultation',
    ctaSecondary: 'Visit site →',
  },
};

export default function ImagineHealthPage() {
  const { lang } = useLanguage();
  return <CaseStudyLayout lang={lang} meta={meta} content={content} />;
}
