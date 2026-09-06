import { useEffect } from 'react';
import SiteLayout from '../components/SiteLayout';
import SEOHead from '../components/SEOHead';
import { trackWhatsAppClick, trackLandingPageView } from '../utils/tracking';

const WHATSAPP_NUMBER = '420721405452';
const WHATSAPP_MESSAGE = 'Dobrý den, mám zájem o bezplatný rozbor webu pro moji firmu (tepelná čerpadla / HVAC).';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const CASES = [
  { name: 'Creative Hive Co', industry: 'Kreativní / Komunita', result: 'Automatizovaný sběr poptávek — odezva z hodin na minuty', url: 'https://www.creativehiveco.com/', img: '/images/portfolio/creative-hive-co.png' },
  { name: 'The Contractors Academy', industry: 'Vzdělávání pro řemeslníky', result: 'Onboarding zákazníků zrychlen o 70 %', url: 'https://www.thecontractorsacademy.com/', img: '/images/portfolio/the-contractors-academy.png' },
  { name: 'Imagine Health', industry: 'Zdraví a wellness', result: 'Zpracování poptávek ze 3 dnů na 2 hodiny', url: 'https://imagine-thailand.com/', img: '/images/portfolio/imagine-health.png' },
];

const FAQ = [
  { q: 'Kolik to bude stát?', a: 'Záleží na rozsahu — probereme to na WhatsAppu podle toho, co potřebujete. Nejdřív se ale podíváme na váš současný web zdarma, bez závazků.' },
  { q: 'Musím měnit doménu nebo hosting?', a: 'Ne, pracujeme s tím, co už máte. Nový web napojíme na vaši stávající doménu.' },
  { q: 'Jak dlouho trvá, než bude web hotový?', a: 'Většinou 2–3 týdny od schválení návrhu. Přesný termín dostanete po prvním rozhovoru.' },
  { q: 'Co když už web mám a jen nefunguje dobře?', a: 'Přesně na to je bezplatný rozbor — pošlete nám odkaz, natočíme krátké video s tím, co bychom konkrétně zlepšili.' },
];

export default function HvacWebPage() {
  useEffect(() => { trackLandingPageView('hvac-web'); }, []);

  const openWhatsApp = (source) => {
    trackWhatsAppClick(source);
    window.open(WHATSAPP_URL, '_blank');
  };

  const jsonLd = [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Tvorba webu pro firmy s tepelnými čerpadly a HVAC — Netsol AI',
    provider: { '@type': 'Organization', name: 'Netsol AI s.r.o.', url: 'https://netsolai.cz' },
    areaServed: 'CZ',
    description: 'Weby postavené na míru pro instalatéry tepelných čerpadel a HVAC firmy — cílem je přivést více poptávek, ne jen hezky vypadat.',
  }];

  return (
    <SiteLayout>
      <SEOHead
        title="Web pro tepelná čerpadla a HVAC firmy | Netsol AI"
        description="Stavíme weby pro instalatéry tepelných čerpadel a klimatizací, jejichž jediným úkolem je přivést vám více poptávek. Pošlete nám váš web — rozbor zdarma."
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
                PRO INSTALATÉRY TEPELNÝCH ČERPADEL A HVAC
              </div>
              <h1 className="fc-hero-h1">
                Váš web by měl pracovat za vás.<br />
                <span className="fc-hero-accent">Ne jen hezky vypadat.</span>
              </h1>
              <p className="fc-hero-sub">
                Stavíme weby, jejichž jediným úkolem je přivést vám nové poptávky — z Googlu, Map i doporučení.
                Pošlete nám svůj současný web a ukážeme vám 3 konkrétní věci, které bychom změnili. Zdarma.
              </p>
              <div className="fc-hero-actions">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick('hvac-hero')} className="fc-btn-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.07-1.32A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.65 0-3.2-.46-4.52-1.26l-.32-.19-3.01.78.8-2.93-.21-.3A7.94 7.94 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/></svg>
                  Napsat na WhatsApp
                </a>
                <a href="#jak-to-funguje" className="fc-btn-outline">Jak to funguje ↓</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* PROBLEM */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <p className="eyebrow">Kolik poptávek denně ztrácíte?</p>
          <div className="section-head">
            <h2>Lidé najdou vaši firmu. A pak odejdou bez kontaktu.</h2>
            <p>Nejasná nabídka, pomalé načítání nebo špatné zobrazení na mobilu — každý z těchto detailů vás stojí zákazníky, které jste už jednou přesvědčili kliknout.</p>
          </div>
          <div className="fc-benefits-grid">
            {[
              { title: 'Web nemá jasnou nabídku', desc: 'Návštěvník neví, co přesně nabízíte ani jak vás kontaktovat.' },
              { title: 'Pomalé načítání', desc: 'Většina lidí odejde dřív, než se stránka vůbec načte.' },
              { title: 'Špatné zobrazení na mobilu', desc: 'Naprostá většina poptávek dnes přichází z telefonu.' },
              { title: 'Žádné sledování', desc: 'Nevíte, odkud lidé přišli a co je přesvědčilo napsat.' },
            ].map((b, i) => (
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
          <p className="eyebrow">Jak to funguje</p>
          <div className="section-head">
            <h2>Od vyhledávání k poptávce</h2>
          </div>
          <div className="fc-benefits-grid">
            {[
              'Někdo hledá tepelné čerpadlo na Googlu, Mapách nebo přes doporučení',
              'Otevře váš web',
              'Web buď poptávku dotáhne, nebo ji ztratí',
              'My stavíme weby, které tuhle cestu dotáhnou až k poptávce',
            ].map((step, i) => (
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
                <p className="fc-book-eyebrow">Nabídka zdarma</p>
                <h2 className="fc-book-h2">Pošlete nám váš web. Natočíme vám video.</h2>
                <p className="fc-book-desc">
                  Ukážeme vám 3 konkrétní věci, které bychom na vašem webu změnili, aby vám přiváděl víc poptávek. Bez závazků.
                </p>
                <ul className="fc-checklist">
                  <li>Krátké video, konkrétně pro váš web</li>
                  <li>3 konkrétní doporučení ke zlepšení</li>
                  <li>Žádný prodejní tlak — jen rozbor</li>
                </ul>
              </div>
              <div className="fc-book-right">
                <div className="fc-book-box">
                  <p className="fc-book-box-label">Pošlete odkaz na váš web přes WhatsApp</p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick('hvac-audit-offer')} className="fc-btn-white fc-btn-white--block">
                    Napsat na WhatsApp
                  </a>
                  <p className="fc-book-note">Odpovídáme obvykle do pár hodin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <p className="eyebrow">Co jsme už postavili</p>
          <div className="section-head">
            <h2>Reálné projekty, reálné výsledky</h2>
          </div>
          <div className="fc-benefits-grid">
            {CASES.map((c, i) => (
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
          <p className="eyebrow">Časté otázky</p>
          <div className="section-head">
            <h2>Rychlé odpovědi</h2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            {FAQ.map((item, i) => (
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
                <h2 className="fc-book-h2">Připraveni na web, který skutečně přivádí zákazníky?</h2>
                <p className="fc-book-desc">Napište nám na WhatsApp a probereme, co byste mohli zlepšit — bez závazků.</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick('hvac-final-cta')} className="fc-cta-btn">
                  Napsat na WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
