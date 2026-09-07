import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SiteLayout from '../components/SiteLayout';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { trackBookingClick, trackLandingPageView } from '../utils/tracking';

const BOOKING_URL = 'https://booking.netsolai.cz/register';

// ── Feature icons (animated, matching the site's line-icon style) ─────────────
const IconCalendar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" />
    <path d="M8 14l2 2 4-4" />
  </svg>
);
const IconGrant = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="7" r="3.5" /><circle cx="17" cy="17" r="3.5" /><line x1="5" y1="19" x2="19" y2="5" />
  </svg>
);
const IconCard = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /><line x1="6" y1="15" x2="10" y2="15" />
  </svg>
);
const IconGallery = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="14" height="14" rx="2" /><rect x="7" y="7" width="14" height="14" rx="2" />
  </svg>
);
const IconStar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.5l2.9 6 6.6.8-4.8 4.6 1.2 6.6-5.9-3.2-5.9 3.2 1.2-6.6-4.8-4.6 6.6-.8z" />
  </svg>
);
const IconBell = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" />
  </svg>
);
const IconPin = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const IconWrench = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2z" />
  </svg>
);

const FEATURE_ICONS = { calendar: IconCalendar, grant: IconGrant, card: IconCard, gallery: IconGallery, star: IconStar, bell: IconBell, pin: IconPin, wrench: IconWrench };

const IconTarget = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const IconSpark = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M6.3 17.7l2.8-2.8M14.9 9.1l2.8-2.8" />
  </svg>
);

const T = {
  cs: {
    seo: {
      title: 'Web pro tepelná čerpadla a HVAC firmy | Netsol AI',
      description: 'Kolik poptávek vám unikne kvůli pomalému nebo nejasnému webu? Ukážeme vám přesně, co změnit. Bezplatná konzultace.',
    },
    badge: 'PRO INSTALATÉRY TEPELNÝCH ČERPADEL A HVAC',
    h1: 'Zákazník hledal tepelné čerpadlo. Napsal třem firmám. Vy jste mezi nimi nebyli.',
    heroSub: 'Ne proto, že by vaše práce byla horší. Ale protože váš web mu za 8 sekund neřekl to, co potřeboval vědět — a on napsal tomu, kdo mu to řekl první.',
    ctaBooking: 'Rezervovat bezplatnou konzultaci',
    ctaHow: 'Jak vám pomůžeme ↓',

    aboutEyebrow: 'CO DĚLÁME',
    aboutTitle: 'AI agentura, která pomáhá firmám reálně růst',
    aboutWhatTitle: 'Co děláme',
    aboutWhatText: 'Stavíme weby a online systémy pro servisní firmy — s jasným cílem: aby vám skutečně přiváděly zákazníky, ne jen hezky vypadaly.',
    aboutHowTitle: 'Jak to děláme',
    aboutHowText: 'AI používáme v každém kroku: při analýze toho, co vaši zákazníci na Googlu skutečně hledají, při stavbě SEO a obsahu webu, i při sledování výsledků a jejich dalším vylepšování.',

    problemEyebrow: 'TEN PROBLÉM',
    problemTitle: 'Bojujete s něčím z tohoto?',
    problemPoints: [
      { title: 'Lidé o dotaci vědí, ale nevědí, jestli na ni mají nárok', desc: 'Takže poptávku odloží „na později" — a to později nikdy nepřijde.' },
      { title: 'Poptávky, co jste koupili, byly k ničemu', desc: 'Jen se dívali, byli mimo váš region, nebo tu samou poptávku dostal i konkurent.' },
      { title: 'Prodej se táhne, protože jste na zakázce', desc: 'Poptávka přijde, vy jste u instalace u jiného zákazníka, a odpovíte až za dva dny — kdy už dávno napsali někomu jinému.' },
    ],

    causesEyebrow: 'PROČ SE TO STÁVÁ',
    causesTitle: 'Web, který vypadá dobře, ale nepracuje',
    causes: [
      { title: 'Návštěvník neví, co za 10 sekund hledá', desc: 'Cena, reference, kontakt — pokud to není vidět hned, odchází.' },
      { title: 'Načítá se pomalu', desc: 'Na mobilu čeká člověk maximálně pár sekund, pak zavře kartu.' },
      { title: 'Kontakt je schovaný', desc: 'Formulář na konci stránky = ztracená poptávka v sobotu večer.' },
      { title: 'Nevíte, co funguje', desc: 'Bez sledování nepoznáte, jestli vám poptávky vozí Google, Mapy nebo doporučení.' },
    ],

    solutionEyebrow: 'CO VÁŠ NOVÝ WEB BUDE UMĚT',
    solutionTitle: '8 funkcí, které vám skutečně vydělají',
    solutionSub: 'Ne šablona z krabice. Web postavený konkrétně pro prodej tepelných čerpadel a HVAC služeb.',
    features: [
      { icon: 'calendar', title: 'Online rezervace termínu', desc: 'Zákazník si sám vybere volný termín na prohlídku nebo nabídku — žádné volání tam a zpět.' },
      { icon: 'grant', title: 'Kalkulačka dotace Nová zelená úsporám', desc: 'Web hned spočítá, na jakou dotaci má zákazník nárok. Jeden z nejsilnějších důvodů nechat vám kontakt.' },
      { icon: 'card', title: 'Online platby a zálohy', desc: 'Zákazník rovnou zaplatí zálohu a rezervaci si tím potvrdí — bez faktur poštou.' },
      { icon: 'gallery', title: 'Fotogalerie realizací před/po', desc: 'Skutečné projekty, které budují důvěru rychleji než jakýkoli text.' },
      { icon: 'star', title: 'Google recenze přímo na webu', desc: 'Hodnocení se natahují automaticky — žádné ruční kopírování, vždy aktuální.' },
      { icon: 'bell', title: 'Automatické potvrzení a připomínky', desc: 'SMS a e-mail před domluveným termínem — méně zapomenutých schůzek, méně ztraceného času.' },
      { icon: 'pin', title: 'Kontrola pokrytí oblasti', desc: 'Zákazník zadá PSČ a hned ví, jestli k němu jezdíte — filtruje poptávky mimo váš region.' },
      { icon: 'wrench', title: 'Servisní balíčky online', desc: 'Pravidelná údržba jako předplatné, které si zákazník objedná sám — opakovaný příjem bez další práce navíc.' },
    ],

    offerEyebrow: 'ZAČNĚTE TADY — ZDARMA',
    offerTitle: 'Rezervujte si bezplatnou 30minutovou konzultaci.',
    offerDesc: 'Probereme spolu váš současný web naživo a ukážeme 3 konkrétní věci, které vám dnes stojí poptávky. Bez závazků, bez prodejního tlaku.',
    offerChecklist: ['30minutový hovor, konkrétně o vašem webu', '3 konkrétní doporučení ke zlepšení', 'Žádné závazky, žádný prodejní tlak'],
    offerBoxLabel: 'Vyberte si termín, který vám vyhovuje',
    offerNote: 'Odpovídáme obvykle do pár hodin',

    casesEyebrow: 'DŮKAZ, NE JEN SLIB',
    casesTitle: 'Co jsme už postavili',
    cases: [
      { name: 'Creative Hive Co', industry: 'Kreativní / Komunita', before: 'Poptávky se ztrácely mezi e-maily', after: 'Odezva z hodin na minuty', url: 'https://www.creativehiveco.com/' },
      { name: 'The Contractors Academy', industry: 'Vzdělávání pro řemeslníky', before: 'Ruční onboarding zabíral dny', after: 'Zrychleno o 70 %', url: 'https://www.thecontractorsacademy.com/' },
      { name: 'Imagine Health', industry: 'Zdraví a wellness', before: 'Zpracování poptávky trvalo 3 dny', after: 'Dnes 2 hodiny', url: 'https://imagine-thailand.com/' },
    ],

    fitEyebrow: 'UŠETŘETE SI TELEFONÁT',
    fitTitle: 'Jsme pro vás ta pravá volba?',
    fitSub: 'Pracujeme jen s omezeným počtem firem, aby se každému projektu dostalo skutečné pozornosti. Tady je upřímná verze, kdy to dává smysl — a kdy ne.',
    fitYesTitle: 'Jsme pro vás skvělá volba, pokud…',
    fitYes: [
      'Provozujete servisní firmu, která žije z poptávek a termínů — tepelná čerpadla, klimatizace, HVAC',
      'Vy nebo někdo z týmu dokáže rychle odpovědět na nové poptávky',
      'Chcete více zakázek a stabilní, sledovatelný přísun poptávek',
      'Chcete web, rezervace i sledování výsledků od jednoho týmu',
      'Marketing vnímáte jako investici do růstu, ne jako jednorázový výdaj',
    ],
    fitNoTitle: 'Nejsme pro vás, pokud…',
    fitNo: [
      'Hledáte nejlevnější možné poptávky sdílené s pěti konkurenty',
      'Nikdo ve firmě nemá čas zvednout telefon novým poptávkám',
      'Prodáváte produkty online, ne lokální službu — to není náš obor',
      'Čekáte výsledky přes noc bez toho, abyste se do toho první měsíc zapojili',
    ],
    fitCta: 'Vypadá to jako vy? Dalším krokem je krátký rozhovor bez tlaku.',

    faqEyebrow: 'ČASTÉ OTÁZKY',
    faqTitle: 'Rychlé odpovědi',
    faq: [
      { q: 'Kolik to bude stát?', a: 'Záleží na rozsahu — probereme to na úvodní konzultaci podle toho, co potřebujete. Nejdřív se ale podíváme na váš současný web zdarma, bez závazků.' },
      { q: 'Musím měnit doménu nebo hosting?', a: 'Ne, pracujeme s tím, co už máte. Nový web napojíme na vaši stávající doménu.' },
      { q: 'Jak dlouho trvá, než bude web hotový?', a: 'Většinou 2–3 týdny od schválení návrhu. Přesný termín dostanete po prvním rozhovoru.' },
      { q: 'Co když už web mám a jen nefunguje dobře?', a: 'Přesně na to je bezplatná konzultace — společně projdeme váš současný web a ukážeme, co bychom konkrétně zlepšili.' },
      { q: 'Funguje to i mimo velká města?', a: 'Ano — pracujeme s firmami po celé ČR, celá komunikace probíhá online.' },
    ],

    finalTitle: 'Kolik poptávek jste ztratili tento měsíc, aniž byste o tom věděli?',
    finalDesc: 'Rezervujte si bezplatnou konzultaci — během 30 minut zjistíte přesně, kde přicházíte o zákazníky.',
  },
  en: {
    seo: {
      title: 'Websites for Heat Pump & HVAC Companies | Netsol AI',
      description: "How many enquiries are you losing to a slow or unclear website? We'll show you exactly what to fix. Free consultation.",
    },
    badge: 'FOR HEAT PUMP & HVAC INSTALLERS',
    h1: 'A customer was looking for a heat pump. They messaged three companies. You weren\'t one of them.',
    heroSub: "Not because your work is worse. Because your website didn't tell them what they needed to know in 8 seconds — so they messaged whoever did, first.",
    ctaBooking: 'Book a Free Consultation',
    ctaHow: 'How we help ↓',

    aboutEyebrow: 'WHAT WE DO',
    aboutTitle: 'An AI agency that helps businesses actually grow',
    aboutWhatTitle: 'What we do',
    aboutWhatText: "We build websites and online systems for service businesses — with one clear goal: to actually bring you customers, not just look nice.",
    aboutHowTitle: 'How we do it',
    aboutHowText: "We use AI at every step: analyzing what your customers actually search for on Google, building the site's SEO and content around that, and tracking results to keep improving it.",

    problemEyebrow: 'THE PROBLEM',
    problemTitle: 'Are you struggling with any of this?',
    problemPoints: [
      { title: "Homeowners know there's a grant, but not if they qualify", desc: 'So they put the enquiry off for "later" — and later never comes.' },
      { title: 'The leads you bought were worthless', desc: 'Just browsing, outside your area, or the same enquiry resold to a competitor.' },
      { title: "The sale drags because you're on a job", desc: "An enquiry comes in while you're mid-installation somewhere else, and by the time you reply two days later, they've already gone with someone else." },
    ],

    causesEyebrow: 'WHY THIS HAPPENS',
    causesTitle: 'A website that looks fine but doesn\'t work',
    causes: [
      { title: "Visitors don't know what they need in 10 seconds", desc: "Price, references, contact — if it's not visible immediately, they leave." },
      { title: 'Slow loading', desc: 'On mobile, people wait a few seconds at most before closing the tab.' },
      { title: 'Contact is hidden', desc: 'A form buried at the bottom of the page means a lost Saturday-night enquiry.' },
      { title: "You don't know what's working", desc: "Without tracking, you can't tell if enquiries come from Google, Maps, or referrals." },
    ],

    solutionEyebrow: 'WHAT YOUR NEW WEBSITE WILL DO',
    solutionTitle: '8 features that actually earn you money',
    solutionSub: 'Not a template out of a box. A website built specifically to sell heat pump and HVAC services.',
    features: [
      { icon: 'calendar', title: 'Online appointment booking', desc: 'Customers pick an open slot for a survey or quote themselves — no back-and-forth phone calls.' },
      { icon: 'grant', title: 'Government grant/subsidy calculator', desc: 'The site instantly calculates what grant a customer qualifies for. One of the strongest reasons for them to leave their contact info.' },
      { icon: 'card', title: 'Online payments and deposits', desc: 'Customers pay a deposit and confirm their booking on the spot — no invoices by post.' },
      { icon: 'gallery', title: 'Before/after project gallery', desc: 'Real projects that build trust faster than any amount of text.' },
      { icon: 'star', title: 'Google reviews shown on the site', desc: 'Ratings pull in automatically — no manual copying, always up to date.' },
      { icon: 'bell', title: 'Automatic confirmations and reminders', desc: 'SMS and email before the scheduled appointment — fewer forgotten visits, less wasted time.' },
      { icon: 'pin', title: 'Service area checker', desc: 'Customers enter their postcode and immediately know if you cover their area — filters out enquiries outside your region.' },
      { icon: 'wrench', title: 'Online service plans', desc: 'Recurring maintenance sold as a subscription customers sign up for themselves — repeat revenue with no extra work from you.' },
    ],

    offerEyebrow: 'START HERE — FREE',
    offerTitle: 'Book a free 30-minute consultation.',
    offerDesc: "We'll go through your current website together, live, and show you 3 specific things costing you enquiries right now. No obligation, no sales pressure.",
    offerChecklist: ['A 30-minute call, specific to your website', "3 concrete things we'd change", 'No obligation, no sales pressure'],
    offerBoxLabel: 'Pick a time that works for you',
    offerNote: 'We usually reply within a few hours',

    casesEyebrow: 'PROOF, NOT JUST A PROMISE',
    casesTitle: "What we've already built",
    cases: [
      { name: 'Creative Hive Co', industry: 'Creative / Community', before: 'Enquiries got lost between emails', after: 'Response time: hours to minutes', url: 'https://www.creativehiveco.com/' },
      { name: 'The Contractors Academy', industry: 'Trade Education', before: 'Manual onboarding took days', after: 'Sped up by 70%', url: 'https://www.thecontractorsacademy.com/' },
      { name: 'Imagine Health', industry: 'Health & Wellness', before: 'Enquiry processing took 3 days', after: 'Now 2 hours', url: 'https://imagine-thailand.com/' },
    ],

    fitEyebrow: 'SAVE YOURSELF A CALL',
    fitTitle: 'Are we right for you?',
    fitSub: "We only work with a limited number of companies so every project gets real attention. Here's the honest version — when this makes sense, and when it doesn't.",
    fitYesTitle: 'We\'re a great fit if…',
    fitYes: [
      'You run a service business that lives on enquiries and appointments — heat pumps, AC, HVAC',
      'You or someone on your team can respond to new enquiries quickly',
      'You want more jobs and a steady, trackable flow of enquiries',
      'You want your website, bookings, and results tracking from one team',
      'You see marketing as an investment in growth, not a one-off expense',
    ],
    fitNoTitle: "We're not for you if…",
    fitNo: [
      'You want the cheapest possible enquiries, shared with five competitors',
      "Nobody in the business is free to pick up the phone to new enquiries",
      "You sell products online rather than a local service — that's not our lane",
      'You expect results overnight without being involved at all in the first month',
    ],
    fitCta: 'Sound like you? The next step is a short, no-pressure conversation.',

    faqEyebrow: 'FAQ',
    faqTitle: 'Quick answers',
    faq: [
      { q: 'How much will it cost?', a: "Depends on scope — we'll discuss it during the consultation based on what you need. First, we'll take a free, no-obligation look at your current site." },
      { q: 'Do I need to change domain or hosting?', a: 'No, we work with what you already have. The new site connects to your existing domain.' },
      { q: 'How long does it take to finish?', a: "Usually 2–3 weeks once the design is approved. You'll get an exact timeline after the first conversation." },
      { q: "What if I already have a site, it just doesn't work well?", a: "That's exactly what the free consultation is for — we'll go through your current site together and show you what we'd specifically improve." },
      { q: 'Does this work outside big cities?', a: "Yes — we work with companies across the whole country, everything runs online." },
    ],

    finalTitle: 'How many enquiries did you lose this month without even knowing it?',
    finalDesc: "Book a free consultation — in 30 minutes you'll know exactly where you're losing customers.",
  },
};

export default function HvacWebPage() {
  const { lang } = useLanguage();
  const t = T[lang] || T.cs;
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => { trackLandingPageView('hvac-web'); }, []);

  const openBooking = (source) => {
    trackBookingClick(source);
  };

  const jsonLd = [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: lang === 'cs' ? 'Tvorba webu pro firmy s tepelnými čerpadly a HVAC — Netsol AI' : 'Website Development for Heat Pump & HVAC Companies — Netsol AI',
    provider: { '@type': 'Organization', name: 'Netsol AI s.r.o.', url: 'https://netsolai.cz' },
    areaServed: 'CZ',
    description: t.seo.description,
  }];

  return (
    <SiteLayout>
      <SEOHead
        title={t.seo.title}
        description={t.seo.description}
        canonical="/tepelna-cerpadla-web"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <div className="fc-hero-wrapper">
        <section className="fc-hero">
          <div className="fc-hero-bg" aria-hidden="true">
            <div className="fc-hero-orb fc-hero-orb--1" />
            <div className="fc-hero-orb fc-hero-orb--2" />
          </div>
          <div className="container fc-hero-inner" style={{ gridTemplateColumns: '1fr', justifyItems: 'center' }}>
            <div className="fc-hero-text" style={{ maxWidth: 760, textAlign: 'center' }}>
              <div className="fc-hero-badge">
                <span className="fc-hero-badge-dot" />
                {t.badge}
              </div>
              <h1 className="fc-hero-h1" style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.5rem)' }}>{t.h1}</h1>
              <p className="fc-hero-sub" style={{ maxWidth: 620, margin: '0 auto 36px' }}>{t.heroSub}</p>
              <div className="fc-hero-actions" style={{ justifyContent: 'center' }}>
                <a href={BOOKING_URL} target="_blank" rel="noreferrer" onClick={() => openBooking('hvac-hero')} className="fc-btn-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 9h18"/></svg>
                  {t.ctaBooking}
                </a>
                <a href="#reseni" className="fc-btn-outline">{t.ctaHow}</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* WHAT WE DO / HOW WE DO IT */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="eyebrow">{t.aboutEyebrow}</p>
          <div className="section-head" style={{ gridTemplateColumns: '1fr' }}>
            <h2 style={{ maxWidth: 640, margin: '0 auto' }}>{t.aboutTitle}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 900, margin: '40px auto 0', textAlign: 'left' }}>
            <div className="fc-benefit-card hvac-feature-card">
              <div className="fc-benefit-icon hvac-icon-anim"><IconTarget /></div>
              <h3 className="fc-benefit-title">{t.aboutWhatTitle}</h3>
              <p className="fc-benefit-desc">{t.aboutWhatText}</p>
            </div>
            <div className="fc-benefit-card hvac-feature-card">
              <div className="fc-benefit-icon hvac-icon-anim" style={{ animationDelay: '0.15s' }}><IconSpark /></div>
              <h3 className="fc-benefit-title">{t.aboutHowTitle}</h3>
              <p className="fc-benefit-desc">{t.aboutHowText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM — sharp, specific pain points */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="eyebrow">{t.problemEyebrow}</p>
          <div className="section-head" style={{ gridTemplateColumns: '1fr' }}>
            <h2 style={{ maxWidth: 'none', margin: '0 auto' }}>{t.problemTitle}</h2>
          </div>
          <div className="fc-benefits-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', alignItems: 'stretch', textAlign: 'left' }}>
            {t.problemPoints.map((p, i) => (
              <div key={i} className="fc-benefit-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10, background: 'rgba(192,57,43,0.12)',
                  color: '#c0392b', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '1.1rem', marginBottom: 12, flexShrink: 0,
                }}>✕</div>
                <h3 className="fc-benefit-title">{p.title}</h3>
                <p className="fc-benefit-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">{t.causesEyebrow}</p>
          <div className="section-head">
            <h2>{t.causesTitle}</h2>
          </div>
          <div className="fc-benefits-grid">
            {t.causes.map((b, i) => (
              <div key={i} className="fc-benefit-card">
                <h3 className="fc-benefit-title">{b.title}</h3>
                <p className="fc-benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION — 8 CONCRETE FEATURES */}
      <section className="section" id="reseni" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <p className="eyebrow">{t.solutionEyebrow}</p>
          <div className="section-head">
            <h2>{t.solutionTitle}</h2>
            <p>{t.solutionSub}</p>
          </div>
          <style>{`
            @keyframes hvacIconFloat {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-4px) rotate(-6deg); }
            }
            .hvac-icon-anim { animation: hvacIconFloat 2.6s ease-in-out infinite; }
            .hvac-feature-card:hover .hvac-icon-anim { animation-duration: 0.9s; }
          `}</style>
          <div className="fc-benefits-grid">
            {t.features.map((f, i) => {
              const Icon = FEATURE_ICONS[f.icon];
              return (
                <div key={i} className="fc-benefit-card hvac-feature-card">
                  <div className="fc-benefit-icon hvac-icon-anim" style={{ animationDelay: `${i * 0.15}s` }}>
                    <Icon />
                  </div>
                  <h3 className="fc-benefit-title">{f.title}</h3>
                  <p className="fc-benefit-desc">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FREE AUDIT OFFER */}
      <section className="fc-book-section" id="rozbor">
        <div className="container">
          <div className="fc-book-card">
            <div className="fc-book-orb" aria-hidden="true" />
            <div className="fc-book-inner">
              <div className="fc-book-left">
                <p className="fc-book-eyebrow">{t.offerEyebrow}</p>
                <h2 className="fc-book-h2">{t.offerTitle}</h2>
                <p className="fc-book-desc">{t.offerDesc}</p>
                <ul className="fc-checklist">
                  {t.offerChecklist.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="fc-book-right">
                <div className="fc-book-box">
                  <p className="fc-book-box-label">{t.offerBoxLabel}</p>
                  <a href={BOOKING_URL} target="_blank" rel="noreferrer" onClick={() => openBooking('hvac-audit-offer')} className="fc-btn-white fc-btn-white--block">
                    {t.ctaBooking}
                  </a>
                  <p className="fc-book-note">{t.offerNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES — before/after contrast */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">{t.casesEyebrow}</p>
          <div className="section-head">
            <h2>{t.casesTitle}</h2>
          </div>
          <div className="fc-benefits-grid">
            {t.cases.map((c, i) => (
              <a key={i} href={c.url} target="_blank" rel="noreferrer" className="fc-benefit-card">
                <span className="fc-tag">{c.industry}</span>
                <h3 className="fc-benefit-title">{c.name}</h3>
                <p className="fc-benefit-desc" style={{ marginBottom: 4 }}>
                  <span style={{ color: '#c0392b' }}>✕ {c.before}</span>
                </p>
                <p className="fc-benefit-desc">
                  <span style={{ color: '#1fa971', fontWeight: 600 }}>✓ {c.after}</span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* QUALIFICATION — are we right for you */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="eyebrow">{t.fitEyebrow}</p>
          <div className="section-head" style={{ gridTemplateColumns: '1fr' }}>
            <h2 style={{ maxWidth: 'none', margin: '0 auto 12px' }}>{t.fitTitle}</h2>
            <p style={{ maxWidth: 620, margin: '0 auto' }}>{t.fitSub}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 980, margin: '48px auto 0', textAlign: 'left' }}>
            <div className="fc-benefit-card" style={{ borderTop: '3px solid #1fa971', boxShadow: '0 8px 30px rgba(31,169,113,0.08)' }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, background: 'rgba(31,169,113,0.12)', color: '#1fa971',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, fontSize: '1.3rem', fontWeight: 700,
              }}>✓</div>
              <h3 className="fc-benefit-title">{t.fitYesTitle}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0 0' }}>
                {t.fitYes.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, marginBottom: 12, lineHeight: 1.5 }}>
                    <span style={{ color: '#1fa971', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span className="fc-benefit-desc" style={{ margin: 0 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fc-benefit-card" style={{ borderTop: '3px solid #c0392b', boxShadow: '0 8px 30px rgba(192,57,43,0.08)' }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, background: 'rgba(192,57,43,0.12)', color: '#c0392b',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, fontSize: '1.3rem', fontWeight: 700,
              }}>✕</div>
              <h3 className="fc-benefit-title">{t.fitNoTitle}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0 0' }}>
                {t.fitNo.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, marginBottom: 12, lineHeight: 1.5 }}>
                    <span style={{ color: '#c0392b', fontWeight: 700, flexShrink: 0 }}>✕</span>
                    <span className="fc-benefit-desc" style={{ margin: 0 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <p style={{ marginBottom: 16, fontWeight: 500 }}>{t.fitCta}</p>
            <a href={BOOKING_URL} target="_blank" rel="noreferrer" onClick={() => openBooking('hvac-fit-check')} className="fc-cta-btn">
              {t.ctaBooking}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="eyebrow">{t.faqEyebrow}</p>
          <div className="section-head" style={{ gridTemplateColumns: '1fr' }}>
            <h2 style={{ maxWidth: 'none', margin: '0 auto' }}>{t.faqTitle}</h2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'left' }}>
            {t.faq.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} style={{ borderBottom: '1px solid var(--border, #eee)' }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      gap: 16, padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer',
                      textAlign: 'left', font: 'inherit',
                    }}
                  >
                    <h3 style={{ margin: 0, fontSize: '1.05rem' }}>{item.q}</h3>
                    <span style={{
                      flexShrink: 0, width: 26, height: 26, borderRadius: '50%',
                      background: isOpen ? '#5c5cff' : 'rgba(92,92,255,0.1)', color: isOpen ? '#fff' : '#5c5cff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem', fontWeight: 600, transition: 'background 0.18s, color 0.18s',
                    }}>{isOpen ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p style={{ margin: '0 0 20px 0', color: 'var(--text-soft, #666)' }}>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="fc-book-section">
        <div className="container">
          <div className="fc-book-card">
            <div className="fc-book-orb" aria-hidden="true" />
            <div className="fc-book-inner" style={{ gridTemplateColumns: '1fr', justifyContent: 'center', textAlign: 'center' }}>
              <div className="fc-book-left" style={{ maxWidth: 620, margin: '0 auto' }}>
                <h2 className="fc-book-h2">{t.finalTitle}</h2>
                <p className="fc-book-desc">{t.finalDesc}</p>
                <a href={BOOKING_URL} target="_blank" rel="noreferrer" onClick={() => openBooking('hvac-final-cta')} className="fc-cta-btn">
                  {t.ctaBooking}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
