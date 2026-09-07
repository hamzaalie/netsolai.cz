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
      description: 'Stavíme weby pro instalatéry tepelných čerpadel a klimatizací, jejichž jediným úkolem je přivést vám více poptávek. Pošlete nám váš web — rozbor zdarma.',
    },
    whatsappMessage: 'Dobrý den, mám zájem o bezplatný rozbor webu pro moji firmu (tepelná čerpadla / HVAC).',
    badge: 'PRO INSTALATÉRY TEPELNÝCH ČERPADEL A HVAC',
    h1a: 'Váš web by měl pracovat za vás.',
    h1b: 'Ne jen hezky vypadat.',
    heroSub: 'Stavíme weby, jejichž jediným úkolem je přivést vám nové poptávky — z Googlu, Map i doporučení. Pošlete nám svůj současný web a ukážeme vám 3 konkrétní věci, které bychom změnili. Zdarma.',
    ctaWhatsapp: 'Napsat na WhatsApp',
    ctaHow: 'Jak to funguje ↓',
    problemEyebrow: 'Kolik poptávek denně ztrácíte?',
    problemTitle: 'Lidé najdou vaši firmu. A pak odejdou bez kontaktu.',
    problemSub: 'Nejasná nabídka, pomalé načítání nebo špatné zobrazení na mobilu — každý z těchto detailů vás stojí zákazníky, které jste už jednou přesvědčili kliknout.',
    problems: [
      { title: 'Web nemá jasnou nabídku', desc: 'Návštěvník neví, co přesně nabízíte ani jak vás kontaktovat.' },
      { title: 'Pomalé načítání', desc: 'Většina lidí odejde dřív, než se stránka vůbec načte.' },
      { title: 'Špatné zobrazení na mobilu', desc: 'Naprostá většina poptávek dnes přichází z telefonu.' },
      { title: 'Žádné sledování', desc: 'Nevíte, odkud lidé přišli a co je přesvědčilo napsat.' },
    ],
    journeyEyebrow: 'Jak to funguje',
    journeyTitle: 'Od vyhledávání k poptávce',
    journeySteps: [
      'Někdo hledá tepelné čerpadlo na Googlu, Mapách nebo přes doporučení',
      'Otevře váš web',
      'Web buď poptávku dotáhne, nebo ji ztratí',
      'My stavíme weby, které tuhle cestu dotáhnou až k poptávce',
    ],
    offerEyebrow: 'Nabídka zdarma',
    offerTitle: 'Pošlete nám váš web. Natočíme vám video.',
    offerDesc: 'Ukážeme vám 3 konkrétní věci, které bychom na vašem webu změnili, aby vám přiváděl víc poptávek. Bez závazků.',
    offerChecklist: ['Krátké video, konkrétně pro váš web', '3 konkrétní doporučení ke zlepšení', 'Žádný prodejní tlak — jen rozbor'],
    offerBoxLabel: 'Pošlete odkaz na váš web přes WhatsApp',
    offerNote: 'Odpovídáme obvykle do pár hodin',
    casesEyebrow: 'Co jsme už postavili',
    casesTitle: 'Reálné projekty, reálné výsledky',
    cases: [
      { name: 'Creative Hive Co', industry: 'Kreativní / Komunita', result: 'Automatizovaný sběr poptávek — odezva z hodin na minuty', url: 'https://www.creativehiveco.com/' },
      { name: 'The Contractors Academy', industry: 'Vzdělávání pro řemeslníky', result: 'Onboarding zákazníků zrychlen o 70 %', url: 'https://www.thecontractorsacademy.com/' },
      { name: 'Imagine Health', industry: 'Zdraví a wellness', result: 'Zpracování poptávek ze 3 dnů na 2 hodiny', url: 'https://imagine-thailand.com/' },
    ],
    faqEyebrow: 'Časté otázky',
    faqTitle: 'Rychlé odpovědi',
    faq: [
      { q: 'Kolik to bude stát?', a: 'Záleží na rozsahu — probereme to na WhatsAppu podle toho, co potřebujete. Nejdřív se ale podíváme na váš současný web zdarma, bez závazků.' },
      { q: 'Musím měnit doménu nebo hosting?', a: 'Ne, pracujeme s tím, co už máte. Nový web napojíme na vaši stávající doménu.' },
      { q: 'Jak dlouho trvá, než bude web hotový?', a: 'Většinou 2–3 týdny od schválení návrhu. Přesný termín dostanete po prvním rozhovoru.' },
      { q: 'Co když už web mám a jen nefunguje dobře?', a: 'Přesně na to je bezplatný rozbor — pošlete nám odkaz, natočíme krátké video s tím, co bychom konkrétně zlepšili.' },
    ],
    finalTitle: 'Připraveni na web, který skutečně přivádí zákazníky?',
    finalDesc: 'Napište nám na WhatsApp a probereme, co byste mohli zlepšit — bez závazků.',
  },
  en: {
    seo: {
      title: 'Websites for Heat Pump & HVAC Companies | Netsol AI',
      description: 'We build websites for heat pump and HVAC installers with one job: bringing in more enquiries. Send us your site — free review, no obligation.',
    },
    whatsappMessage: "Hi, I'd like a free review of my website for my heat pump / HVAC business.",
    badge: 'FOR HEAT PUMP & HVAC INSTALLERS',
    h1a: 'Your website should work for you.',
    h1b: 'Not just look nice.',
    heroSub: "We build websites with one job: bringing you new enquiries — from Google, Maps and referrals. Send us your current site and we'll show you 3 specific things we'd change. Free.",
    ctaWhatsapp: 'Message us on WhatsApp',
    ctaHow: 'How it works ↓',
    problemEyebrow: 'How many enquiries are you losing every day?',
    problemTitle: 'People find your business. Then they leave without contacting you.',
    problemSub: "An unclear offer, slow loading, or a bad mobile layout — each of these details costs you customers you'd already convinced to click.",
    problems: [
      { title: 'No clear offer', desc: "Visitors don't know exactly what you offer or how to reach you." },
      { title: 'Slow loading', desc: 'Most people leave before the page even finishes loading.' },
      { title: 'Poor mobile display', desc: 'The vast majority of enquiries today come from a phone.' },
      { title: 'No tracking', desc: "You don't know where people came from or what convinced them to reach out." },
    ],
    journeyEyebrow: 'How it works',
    journeyTitle: 'From search to enquiry',
    journeySteps: [
      'Someone searches for a heat pump on Google, Maps, or hears a referral',
      'They open your website',
      'The site either closes the enquiry, or loses it',
      "We build websites that actually close that journey into an enquiry",
    ],
    offerEyebrow: 'Free offer',
    offerTitle: "Send us your site. We'll record you a video.",
    offerDesc: "We'll show you 3 specific things we'd change on your website to bring in more enquiries. No obligation.",
    offerChecklist: ['A short video, specific to your website', '3 concrete recommendations', 'No sales pressure — just a review'],
    offerBoxLabel: 'Send your website link via WhatsApp',
    offerNote: 'We usually reply within a few hours',
    casesEyebrow: "What we've already built",
    casesTitle: 'Real projects, real results',
    cases: [
      { name: 'Creative Hive Co', industry: 'Creative / Community', result: 'Automated lead capture — response time from hours to minutes', url: 'https://www.creativehiveco.com/' },
      { name: 'The Contractors Academy', industry: 'Trade Education', result: 'Customer onboarding sped up by 70%', url: 'https://www.thecontractorsacademy.com/' },
      { name: 'Imagine Health', industry: 'Health & Wellness', result: 'Enquiry processing cut from 3 days to 2 hours', url: 'https://imagine-thailand.com/' },
    ],
    faqEyebrow: 'FAQ',
    faqTitle: 'Quick answers',
    faq: [
      { q: 'How much will it cost?', a: "Depends on scope — we'll discuss it on WhatsApp based on what you need. First, we'll take a free, no-obligation look at your current site." },
      { q: 'Do I need to change domain or hosting?', a: 'No, we work with what you already have. The new site connects to your existing domain.' },
      { q: 'How long does it take to finish?', a: "Usually 2–3 weeks once the design is approved. You'll get an exact timeline after the first conversation." },
      { q: "What if I already have a site, it just doesn't work well?", a: "That's exactly what the free review is for — send us the link and we'll record a short video with what we'd specifically improve." },
    ],
    finalTitle: 'Ready for a website that actually brings you customers?',
    finalDesc: "Message us on WhatsApp and let's talk about what you could improve — no obligation.",
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
              <h1 className="fc-hero-h1">
                {t.h1a}<br />
                <span className="fc-hero-accent">{t.h1b}</span>
              </h1>
              <p className="fc-hero-sub">{t.heroSub}</p>
              <div className="fc-hero-actions">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => openWhatsApp('hvac-hero')} className="fc-btn-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.07-1.32A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.65 0-3.2-.46-4.52-1.26l-.32-.19-3.01.78.8-2.93-.21-.3A7.94 7.94 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/></svg>
                  {t.ctaWhatsapp}
                </a>
                <a href="#jak-to-funguje" className="fc-btn-outline">{t.ctaHow}</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* PROBLEM */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <p className="eyebrow">{t.problemEyebrow}</p>
          <div className="section-head">
            <h2>{t.problemTitle}</h2>
            <p>{t.problemSub}</p>
          </div>
          <div className="fc-benefits-grid">
            {t.problems.map((b, i) => (
              <div key={i} className="fc-benefit-card">
                <h3 className="fc-benefit-title">{b.title}</h3>
                <p className="fc-benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="section" id="jak-to-funguje">
        <div className="container">
          <p className="eyebrow">{t.journeyEyebrow}</p>
          <div className="section-head">
            <h2>{t.journeyTitle}</h2>
          </div>
          <div className="fc-benefits-grid">
            {t.journeySteps.map((step, i) => (
              <div key={i} className="fc-benefit-card">
                <div className="fc-benefit-icon">{i + 1}</div>
                <p className="fc-benefit-desc">{step}</p>
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

      {/* CASE STUDIES */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
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
                <p className="fc-benefit-desc">"{c.result}"</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
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
              <div className="fc-book-left" style={{ maxWidth: 600 }}>
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
