import { useEffect } from 'react';
import SiteLayout from '../components/SiteLayout';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { trackWhatsAppClick, trackLandingPageView } from '../utils/tracking';

const WHATSAPP_NUMBER = '420721405452';

const T = {
  cs: {
    seo: {
      title: 'Web pro tepelná čerpadla a HVAC firmy | Netsol AI',
      description: 'Kolik poptávek vám unikne kvůli pomalému nebo nejasnému webu? Ukážeme vám přesně, co změnit. Bezplatný rozbor přes WhatsApp.',
    },
    whatsappMessage: 'Dobrý den, mám zájem o bezplatný rozbor webu pro moji firmu (tepelná čerpadla / HVAC).',
    badge: 'PRO INSTALATÉRY TEPELNÝCH ČERPADEL A HVAC',
    h1: 'Zákazník hledal tepelné čerpadlo. Napsal třem firmám. Vy jste mezi nimi nebyli.',
    heroSub: 'Ne proto, že by vaše práce byla horší. Ale protože váš web mu za 8 sekund neřekl to, co potřeboval vědět — a on napsal tomu, kdo mu to řekl první.',
    ctaWhatsapp: 'Napsat na WhatsApp',
    ctaHow: 'Jak vám pomůžeme ↓',

    storyEyebrow: 'TOHLE SE DĚJE KAŽDÝ DEN',
    storyTitle: 'Sobota večer, 20:14',
    storyBody: [
      'Někdo si doma spočítal, že staré topení už nedává smysl. Vytáhne telefon a napíše do Googlu „tepelné čerpadlo instalace [jeho město]".',
      'Otevře první tři weby. Na dvou z nich neví po 10 sekundách, jestli firma vůbec dělá to, co potřebuje, kolik to zhruba stojí, ani jak ji rychle kontaktovat.',
      'Na třetím webu vidí jasně: co děláte, pro koho, orientační cenu, a tlačítko „Napsat na WhatsApp" hned nahoře.',
      'Napíše tam. Ne protože je ta firma lepší. Protože odpověděla na jeho otázky jako první.',
    ],
    storyCost: 'Průměrná zakázka na tepelné čerpadlo se v Česku pohybuje kolem 150 000–300 000 Kč. Stačí takhle ztratit 2 poptávky měsíčně a je to statisíce korun ročně, které nikdy neuvidíte — a ani nebudete vědět, že jste o ně přišli.',

    causesEyebrow: 'PROČ SE TO STÁVÁ',
    causesTitle: 'Web, který vypadá dobře, ale nepracuje',
    causes: [
      { title: 'Návštěvník neví, co za 10 sekund hledá', desc: 'Cena, reference, kontakt — pokud to není vidět hned, odchází.' },
      { title: 'Načítá se pomalu', desc: 'Na mobilu čeká člověk maximálně pár sekund, pak zavře kartu.' },
      { title: 'Kontakt je schovaný', desc: 'Formulář na konci stránky = ztracená poptávka v sobotu večer.' },
      { title: 'Nevíte, co funguje', desc: 'Bez sledování nepoznáte, jestli vám poptávky vozí Google, Mapy nebo doporučení.' },
    ],

    solutionEyebrow: 'JAK VÁM POMŮŽEME — KROK ZA KROKEM',
    solutionTitle: 'Ne hezčí web. Web, který odpovídá za vás.',
    steps: [
      {
        n: '01',
        title: 'Web, který odpoví na první pohled',
        desc: 'Cena, reference a kontakt vidí návštěvník do 10 sekund od otevření — na mobilu stejně dobře jako na počítači.',
      },
      {
        n: '02',
        title: 'AI odpovídá, i když vy nemůžete',
        desc: 'Poptávka v sobotu večer nebo uprostřed instalace u jiného zákazníka? AI asistent na webu i WhatsAppu odpoví okamžitě a zjistí základní informace.',
      },
      {
        n: '03',
        title: 'Nic vám neproklouzne',
        desc: 'Každá poptávka se automaticky zaznamená a vy dostanete přehled — žádné ztracené zprávy v e-mailu nebo na sociálních sítích.',
      },
      {
        n: '04',
        title: 'Víte, co skutečně funguje',
        desc: 'Sledujeme, odkud poptávky přicházejí — Google, Mapy, doporučení — takže víte, kam se vyplatí investovat čas i peníze.',
      },
    ],

    offerEyebrow: 'ZAČNĚTE TADY — ZDARMA',
    offerTitle: 'Pošlete nám váš současný web. Natočíme vám video.',
    offerDesc: 'Konkrétně pro váš web ukážeme 3 věci, které vám dnes stojí poptávky — a co by se s tím dalo udělat. Bez závazků, bez prodejního tlaku.',
    offerChecklist: ['Krátké video, konkrétně pro váš web', '3 konkrétní věci, které bychom změnili', 'Trvá vám to 10 sekund — jen pošlete odkaz'],
    offerBoxLabel: 'Pošlete odkaz na váš web přes WhatsApp',
    offerNote: 'Odpovídáme obvykle do pár hodin',

    casesEyebrow: 'DŮKAZ, NE JEN SLIB',
    casesTitle: 'Co jsme už postavili',
    cases: [
      { name: 'Creative Hive Co', industry: 'Kreativní / Komunita', before: 'Poptávky se ztrácely mezi e-maily', after: 'Odezva z hodin na minuty', url: 'https://www.creativehiveco.com/' },
      { name: 'The Contractors Academy', industry: 'Vzdělávání pro řemeslníky', before: 'Ruční onboarding zabíral dny', after: 'Zrychleno o 70 %', url: 'https://www.thecontractorsacademy.com/' },
      { name: 'Imagine Health', industry: 'Zdraví a wellness', before: 'Zpracování poptávky trvalo 3 dny', after: 'Dnes 2 hodiny', url: 'https://imagine-thailand.com/' },
    ],

    faqEyebrow: 'ČASTÉ OTÁZKY',
    faqTitle: 'Rychlé odpovědi',
    faq: [
      { q: 'Kolik to bude stát?', a: 'Záleží na rozsahu — probereme to na WhatsAppu podle toho, co potřebujete. Nejdřív se ale podíváme na váš současný web zdarma, bez závazků.' },
      { q: 'Musím měnit doménu nebo hosting?', a: 'Ne, pracujeme s tím, co už máte. Nový web napojíme na vaši stávající doménu.' },
      { q: 'Jak dlouho trvá, než bude web hotový?', a: 'Většinou 2–3 týdny od schválení návrhu. Přesný termín dostanete po prvním rozhovoru.' },
      { q: 'Co když už web mám a jen nefunguje dobře?', a: 'Přesně na to je bezplatný rozbor — pošlete nám odkaz, natočíme krátké video s tím, co bychom konkrétně zlepšili.' },
      { q: 'Funguje to i mimo velká města?', a: 'Ano — pracujeme s firmami po celé ČR, celá komunikace probíhá online a přes WhatsApp.' },
    ],

    finalTitle: 'Kolik poptávek jste ztratili tento měsíc, aniž byste o tom věděli?',
    finalDesc: 'Napište nám na WhatsApp a pošlete odkaz na váš web — do pár hodin víte, kde přicházíte o zákazníky.',
  },
  en: {
    seo: {
      title: 'Websites for Heat Pump & HVAC Companies | Netsol AI',
      description: "How many enquiries are you losing to a slow or unclear website? We'll show you exactly what to fix. Free review via WhatsApp.",
    },
    whatsappMessage: "Hi, I'd like a free review of my website for my heat pump / HVAC business.",
    badge: 'FOR HEAT PUMP & HVAC INSTALLERS',
    h1: 'A customer was looking for a heat pump. They messaged three companies. You weren\'t one of them.',
    heroSub: "Not because your work is worse. Because your website didn't tell them what they needed to know in 8 seconds — so they messaged whoever did, first.",
    ctaWhatsapp: 'Message us on WhatsApp',
    ctaHow: 'How we help ↓',

    storyEyebrow: 'THIS HAPPENS EVERY DAY',
    storyTitle: 'Saturday evening, 8:14 PM',
    storyBody: [
      'Someone at home just did the math — their old heating doesn\'t make sense anymore. They pull out their phone and search "heat pump installation [their city]".',
      "They open the first three websites. On two of them, after 10 seconds they still don't know if the company even does what they need, roughly what it costs, or how to reach them quickly.",
      'On the third site, it\'s obvious: what you do, who it\'s for, a rough price, and a "Message on WhatsApp" button right at the top.',
      "They message that one. Not because that company is better. Because it answered their questions first.",
    ],
    storyCost: 'The average heat pump job in Czechia runs around 150,000–300,000 CZK. Lose just 2 enquiries a month this way and that\'s hundreds of thousands of crowns a year you never see — and never even know you lost.',

    causesEyebrow: 'WHY THIS HAPPENS',
    causesTitle: 'A website that looks fine but doesn\'t work',
    causes: [
      { title: "Visitors don't know what they need in 10 seconds", desc: "Price, references, contact — if it's not visible immediately, they leave." },
      { title: 'Slow loading', desc: 'On mobile, people wait a few seconds at most before closing the tab.' },
      { title: 'Contact is hidden', desc: 'A form buried at the bottom of the page means a lost Saturday-night enquiry.' },
      { title: "You don't know what's working", desc: "Without tracking, you can't tell if enquiries come from Google, Maps, or referrals." },
    ],

    solutionEyebrow: 'HOW WE HELP — STEP BY STEP',
    solutionTitle: 'Not a prettier website. A website that answers for you.',
    steps: [
      {
        n: '01',
        title: 'A website that answers at a glance',
        desc: 'Price, references, and contact info are visible within 10 seconds of landing — on mobile just as well as on desktop.',
      },
      {
        n: '02',
        title: 'AI responds even when you can\'t',
        desc: 'An enquiry on Saturday night, or while you\'re mid-installation at another job? An AI assistant on your site and WhatsApp responds instantly and gathers the basics.',
      },
      {
        n: '03',
        title: 'Nothing slips through',
        desc: 'Every enquiry is logged automatically and you get a clear overview — no messages lost in email or social media DMs.',
      },
      {
        n: '04',
        title: 'You know what\'s actually working',
        desc: "We track where enquiries actually come from — Google, Maps, referrals — so you know where it's worth spending time and money.",
      },
    ],

    offerEyebrow: 'START HERE — FREE',
    offerTitle: "Send us your current website. We'll record you a video.",
    offerDesc: "We'll show you 3 specific things costing you enquiries right now on your website — and what could be done about it. No obligation, no sales pressure.",
    offerChecklist: ['A short video, specific to your website', "3 concrete things we'd change", 'Takes you 10 seconds — just send the link'],
    offerBoxLabel: 'Send your website link via WhatsApp',
    offerNote: 'We usually reply within a few hours',

    casesEyebrow: 'PROOF, NOT JUST A PROMISE',
    casesTitle: "What we've already built",
    cases: [
      { name: 'Creative Hive Co', industry: 'Creative / Community', before: 'Enquiries got lost between emails', after: 'Response time: hours to minutes', url: 'https://www.creativehiveco.com/' },
      { name: 'The Contractors Academy', industry: 'Trade Education', before: 'Manual onboarding took days', after: 'Sped up by 70%', url: 'https://www.thecontractorsacademy.com/' },
      { name: 'Imagine Health', industry: 'Health & Wellness', before: 'Enquiry processing took 3 days', after: 'Now 2 hours', url: 'https://imagine-thailand.com/' },
    ],

    faqEyebrow: 'FAQ',
    faqTitle: 'Quick answers',
    faq: [
      { q: 'How much will it cost?', a: "Depends on scope — we'll discuss it on WhatsApp based on what you need. First, we'll take a free, no-obligation look at your current site." },
      { q: 'Do I need to change domain or hosting?', a: 'No, we work with what you already have. The new site connects to your existing domain.' },
      { q: 'How long does it take to finish?', a: "Usually 2–3 weeks once the design is approved. You'll get an exact timeline after the first conversation." },
      { q: "What if I already have a site, it just doesn't work well?", a: "That's exactly what the free review is for — send us the link and we'll record a short video with what we'd specifically improve." },
      { q: 'Does this work outside big cities?', a: "Yes — we work with companies across the whole country, everything runs online and over WhatsApp." },
    ],

    finalTitle: 'How many enquiries did you lose this month without even knowing it?',
    finalDesc: "Message us on WhatsApp and send your website link — within a few hours you'll know exactly where you're losing customers.",
  },
};

export default function HvacWebPage() {
  const { lang } = useLanguage();
  const t = T[lang] || T.cs;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappMessage)}`;

  useEffect(() => { trackLandingPageView('hvac-web'); }, []);

  const openWhatsApp = (source) => {
    trackWhatsAppClick(source);
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
          <div className="container fc-hero-inner">
            <div className="fc-hero-text">
              <div className="fc-hero-badge">
                <span className="fc-hero-badge-dot" />
                {t.badge}
              </div>
              <h1 className="fc-hero-h1">{t.h1}</h1>
              <p className="fc-hero-sub">{t.heroSub}</p>
              <div className="fc-hero-actions">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => openWhatsApp('hvac-hero')} className="fc-btn-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.07-1.32A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.65 0-3.2-.46-4.52-1.26l-.32-.19-3.01.78.8-2.93-.21-.3A7.94 7.94 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/></svg>
                  {t.ctaWhatsapp}
                </a>
                <a href="#reseni" className="fc-btn-outline">{t.ctaHow}</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* VIVID PROBLEM STORY */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <p className="eyebrow">{t.storyEyebrow}</p>
          <div className="section-head">
            <h2>{t.storyTitle}</h2>
          </div>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {t.storyBody.map((p, i) => (
              <p key={i} style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 16 }}>{p}</p>
            ))}
            <div style={{ marginTop: 28, padding: '20px 24px', background: 'rgba(92,92,255,0.08)', borderLeft: '3px solid #5c5cff', borderRadius: '0 8px 8px 0' }}>
              <p style={{ margin: 0, fontWeight: 600 }}>{t.storyCost}</p>
            </div>
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

      {/* SOLUTION — STEP BY STEP */}
      <section className="section" id="reseni" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <p className="eyebrow">{t.solutionEyebrow}</p>
          <div className="section-head">
            <h2>{t.solutionTitle}</h2>
          </div>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            {t.steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, marginBottom: 28, alignItems: 'flex-start' }}>
                <div style={{
                  flexShrink: 0, width: 44, height: 44, borderRadius: '50%',
                  background: '#5c5cff', color: '#fff', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.95rem',
                }}>{step.n}</div>
                <div>
                  <h3 style={{ margin: '0 0 6px 0', fontSize: '1.1rem' }}>{step.title}</h3>
                  <p style={{ margin: 0, color: 'var(--text-soft, #666)', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </div>
            ))}
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
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => openWhatsApp('hvac-audit-offer')} className="fc-btn-white fc-btn-white--block">
                    {t.ctaWhatsapp}
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

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <p className="eyebrow">{t.faqEyebrow}</p>
          <div className="section-head">
            <h2>{t.faqTitle}</h2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            {t.faq.map((item, i) => (
              <div key={i} style={{ padding: '20px 0', borderBottom: '1px solid var(--border, #eee)' }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '1.05rem' }}>{item.q}</h3>
                <p style={{ margin: 0, color: 'var(--text-soft, #666)' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="fc-book-section">
        <div className="container">
          <div className="fc-book-card">
            <div className="fc-book-orb" aria-hidden="true" />
            <div className="fc-book-inner" style={{ justifyContent: 'center', textAlign: 'center' }}>
              <div className="fc-book-left" style={{ maxWidth: 620 }}>
                <h2 className="fc-book-h2">{t.finalTitle}</h2>
                <p className="fc-book-desc">{t.finalDesc}</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => openWhatsApp('hvac-final-cta')} className="fc-cta-btn">
                  {t.ctaWhatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
