import { useState, useEffect } from 'react';
import SiteLayout from '../../components/SiteLayout';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../context/LanguageContext';
import { trackToolComplete, trackBookingClick } from '../../utils/tracking';

const RESPONSE_TIME_LOSS = {
  'under1h': 0.05,
  '1to4h':   0.15,
  '4to12h':  0.28,
  '12to24h': 0.42,
  'over24h': 0.60,
};

const WEEKEND_LOSS = 0.35;

function formatCZK(n) {
  return Math.round(n).toLocaleString('cs-CZ') + ' Kč';
}

export default function LeadLossCalculatorPage() {
  const { lang } = useLanguage();
  const cs = lang === 'cs';

  const [salePrice, setSalePrice] = useState(5000000);
  const [commission, setCommission] = useState(3);
  const [inquiriesPerWeek, setInquiriesPerWeek] = useState(10);
  const [responseTime, setResponseTime] = useState('4to12h');
  const [weekends, setWeekends] = useState(false);
  const [conversionRate, setConversionRate] = useState(15);
  const [showResult, setShowResult] = useState(false);

  const [results, setResults] = useState(null);

  function calculate() {
    const commissionPerDeal = (salePrice * commission) / 100;
    const rtLoss = RESPONSE_TIME_LOSS[responseTime];
    const weekendLossRate = weekends ? 0 : WEEKEND_LOSS * (2 / 7);
    const totalLossRate = Math.min(rtLoss + weekendLossRate, 0.85);
    const lostInquiriesPerWeek = inquiriesPerWeek * totalLossRate;
    const convRate = conversionRate / 100;
    const dealsLostPerMonth = lostInquiriesPerWeek * convRate * 4.33;
    const revenueLostPerMonth = dealsLostPerMonth * commissionPerDeal;
    const revenueLostPerYear = revenueLostPerMonth * 12;

    setResults({
      lossPercent: Math.round(totalLossRate * 100),
      lostInquiriesPerWeek: Math.round(lostInquiriesPerWeek * 10) / 10,
      dealsLostPerMonth: Math.round(dealsLostPerMonth * 10) / 10,
      revenueLostPerMonth,
      revenueLostPerYear,
    });
    setShowResult(true);
    trackToolComplete('lead-loss-calculator');
  }

  const jsonLd = [{
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": cs ? "Kalkulačka ztráty poptávek — Netsol AI" : "Lead Loss Calculator — Netsol AI",
    "url": "https://netsolai.cz/nastroje/ztrata-poptavek",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CZK" },
  }];

  return (
    <SiteLayout>
      <SEOHead
        title={cs ? "Kolik poptávek ztrácíte? Kalkulačka ztráty | Netsol AI" : "How Many Leads Are You Losing? Loss Calculator | Netsol AI"}
        description={cs
          ? "Zjistěte, kolik CZK ročně ztrácíte kvůli pomalým odpovědím na poptávky. Bezplatná kalkulačka pro realitní makléře."
          : "Find out how much CZK you lose yearly due to slow responses to inquiries. Free calculator for real estate agents."}
        canonical="/nastroje/ztrata-poptavek"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <div className="fc-hero-wrapper">
        <section className="tool-hero">
          <div className="tool-hero-orb tool-hero-orb--1" aria-hidden="true" />
          <div className="tool-hero-orb tool-hero-orb--2" aria-hidden="true" />
          <div className="container tool-hero-inner">
            <a href="/nastroje" className="tool-breadcrumb">
              {cs ? '← Nástroje' : '← Tools'}
            </a>
            <div className="tool-hero-badge">
              <span className="tool-badge tool-badge--red">{cs ? 'Bezplatný nástroj' : 'Free Tool'}</span>
            </div>
            <h1 className="tool-hero-h1">
              {cs ? <>Kolik poptávek<br /><span className="tool-hero-accent">ztrácíte?</span></> : <>How Many Leads<br /><span className="tool-hero-accent">Are You Losing?</span></>}
            </h1>
            <p className="tool-hero-sub">
              {cs
                ? 'Zadejte svá čísla a zjistěte přesnou částku v Kč, o kterou přicházíte každý rok kvůli pomalým odpovědím.'
                : 'Enter your numbers and see exactly how much CZK you lose each year due to slow response times.'}
            </p>
          </div>
        </section>
      </div>

      {/* CALCULATOR */}
      <section className="section">
        <div className="container">
          <div className="tool-layout">

            {/* FORM */}
            <div className="tool-card">
              <h2 className="tool-card-title">{cs ? 'Vaše čísla' : 'Your Numbers'}</h2>

              <div className="tool-field">
                <label className="tool-label">
                  {cs ? 'Průměrná prodejní cena nemovitosti (Kč)' : 'Average property sale price (CZK)'}
                </label>
                <input
                  type="number"
                  className="tool-input"
                  value={salePrice}
                  min={500000}
                  max={50000000}
                  step={100000}
                  onChange={e => setSalePrice(Number(e.target.value))}
                />
                <span className="tool-hint">{formatCZK(salePrice)}</span>
              </div>

              <div className="tool-field">
                <label className="tool-label">
                  {cs ? 'Vaše provize (%)' : 'Your commission (%)'}
                </label>
                <div className="tool-slider-row">
                  <input type="range" className="tool-slider" min={1} max={6} step={0.5} value={commission}
                    onChange={e => setCommission(Number(e.target.value))} />
                  <span className="tool-slider-val">{commission}%</span>
                </div>
              </div>

              <div className="tool-field">
                <label className="tool-label">
                  {cs ? 'Počet poptávek za týden' : 'Inquiries per week'}
                </label>
                <div className="tool-slider-row">
                  <input type="range" className="tool-slider" min={1} max={50} step={1} value={inquiriesPerWeek}
                    onChange={e => setInquiriesPerWeek(Number(e.target.value))} />
                  <span className="tool-slider-val">{inquiriesPerWeek}</span>
                </div>
              </div>

              <div className="tool-field">
                <label className="tool-label">
                  {cs ? 'Průměrná doba odpovědi' : 'Average response time'}
                </label>
                <select className="tool-select" value={responseTime} onChange={e => setResponseTime(e.target.value)}>
                  <option value="under1h">{cs ? 'Do 1 hodiny' : 'Under 1 hour'}</option>
                  <option value="1to4h">{cs ? '1–4 hodiny' : '1–4 hours'}</option>
                  <option value="4to12h">{cs ? '4–12 hodin' : '4–12 hours'}</option>
                  <option value="12to24h">{cs ? '12–24 hodin' : '12–24 hours'}</option>
                  <option value="over24h">{cs ? 'Více než 24 hodin' : 'Over 24 hours'}</option>
                </select>
              </div>

              <div className="tool-field">
                <label className="tool-label">
                  {cs ? 'Odpovídáte o víkendu?' : 'Do you respond on weekends?'}
                </label>
                <div className="tool-toggle-group">
                  <button
                    className={`tool-toggle-btn${weekends ? ' tool-toggle-btn--active' : ''}`}
                    onClick={() => setWeekends(true)}
                  >{cs ? 'Ano' : 'Yes'}</button>
                  <button
                    className={`tool-toggle-btn${!weekends ? ' tool-toggle-btn--active' : ''}`}
                    onClick={() => setWeekends(false)}
                  >{cs ? 'Ne' : 'No'}</button>
                </div>
              </div>

              <div className="tool-field">
                <label className="tool-label">
                  {cs ? 'Konverzní poměr: poptávka → obchod (%)' : 'Conversion rate: inquiry → deal (%)'}
                </label>
                <div className="tool-slider-row">
                  <input type="range" className="tool-slider" min={1} max={40} step={1} value={conversionRate}
                    onChange={e => setConversionRate(Number(e.target.value))} />
                  <span className="tool-slider-val">{conversionRate}%</span>
                </div>
              </div>

              <button className="tool-calc-btn" onClick={calculate}>
                {cs ? 'Spočítat ztrátu →' : 'Calculate My Loss →'}
              </button>
            </div>

            {/* RESULTS */}
            <div className={`tool-results${showResult ? ' tool-results--visible' : ''}`}>
              {!showResult ? (
                <div className="tool-results-placeholder">
                  <div className="tool-results-placeholder-icon">📊</div>
                  <p>{cs ? 'Zadejte svá čísla a klikněte na tlačítko.' : 'Enter your numbers and click the button.'}</p>
                </div>
              ) : (
                <>
                  <div className="tool-result-danger">
                    <p className="tool-result-label">{cs ? 'Přicházíte přibližně o' : 'You are losing approximately'}</p>
                    <p className="tool-result-big">{formatCZK(results.revenueLostPerYear)}</p>
                    <p className="tool-result-sublabel">{cs ? 'ročně' : 'per year'}</p>
                  </div>

                  <div className="tool-result-grid">
                    <div className="tool-result-item">
                      <span className="tool-result-item-label">{cs ? 'Ztracené poptávky/týden' : 'Lost inquiries/week'}</span>
                      <span className="tool-result-item-val">{results.lostInquiriesPerWeek}</span>
                    </div>
                    <div className="tool-result-item">
                      <span className="tool-result-item-label">{cs ? 'Míra ztráty' : 'Loss rate'}</span>
                      <span className="tool-result-item-val">{results.lossPercent}%</span>
                    </div>
                    <div className="tool-result-item">
                      <span className="tool-result-item-label">{cs ? 'Obchody ztracené/měsíc' : 'Deals lost/month'}</span>
                      <span className="tool-result-item-val">{results.dealsLostPerMonth}</span>
                    </div>
                    <div className="tool-result-item">
                      <span className="tool-result-item-label">{cs ? 'Ztráta provize/měsíc' : 'Revenue lost/month'}</span>
                      <span className="tool-result-item-val">{formatCZK(results.revenueLostPerMonth)}</span>
                    </div>
                  </div>

                  <div className="tool-result-fact">
                    <strong>📌 {cs ? 'Věděli jste?' : 'Did you know?'}</strong>
                    <p>{cs
                      ? 'Odpověď do 5 minut zvyšuje konverzi 21× oproti odpovědi za 30 minut. 78 % obchodů získá první makléř, který odpoví.'
                      : 'Responding within 5 minutes increases conversion 21× compared to 30 minutes. 78% of deals go to the first agent who responds.'}</p>
                  </div>

                  <div className="tool-result-cta">
                    <p className="tool-result-cta-text">
                      {cs
                        ? 'Netsol AI zajistí automatickou odpověď na každou poptávku do 60 sekund — 24/7, česky i anglicky.'
                        : 'Netsol AI delivers an automatic response to every inquiry within 60 seconds — 24/7, in Czech and English.'}
                    </p>
                    <a href="/free-consultation" className="tool-cta-btn" onClick={() => trackBookingClick('lead-loss-calculator')}>
                      {cs ? 'Zjistěte jak → Konzultace zdarma' : 'See How → Free Consultation'}
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* EXPLAINER */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container tool-explainer">
          <h2>{cs ? 'Proč makléři ztrácejí poptávky?' : 'Why Do Agents Lose Inquiries?'}</h2>
          <div className="tool-explainer-grid">
            <div className="tool-explainer-card">
              <span className="tool-explainer-icon">⏰</span>
              <h3>{cs ? 'Pomalá odpověď' : 'Slow Response'}</h3>
              <p>{cs ? 'Výzkumy ukazují, že pravděpodobnost konverze klesá o 80 % pokud neodpovíte do 5 minut od přijetí poptávky.' : 'Research shows conversion probability drops 80% if you don\'t respond within 5 minutes of receiving an inquiry.'}</p>
            </div>
            <div className="tool-explainer-card">
              <span className="tool-explainer-icon">📅</span>
              <h3>{cs ? 'Víkend a svátky' : 'Weekends & Holidays'}</h3>
              <p>{cs ? '35 % všech poptávek přichází v době, kdy makléř nepracuje. Bez automatizace jsou tyto poptávky prakticky ztraceny.' : '35% of all inquiries arrive when the agent isn\'t working. Without automation, these leads are practically lost.'}</p>
            </div>
            <div className="tool-explainer-card">
              <span className="tool-explainer-icon">🏆</span>
              <h3>{cs ? 'Kdo první, ten první' : 'First Mover Wins'}</h3>
              <p>{cs ? '78 % kupujících uzavře obchod s prvním makléřem, který jim odpoví. Rychlost odpovědi je důležitější než cena.' : '78% of buyers close with the first agent who responds. Speed of response matters more than price.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container tool-faq">
          <h2>{cs ? 'Často kladené otázky' : 'FAQ'}</h2>
          <div className="tool-faq-list">
            {(cs ? [
              { q: 'Jak přesná je tato kalkulačka?', a: 'Kalkulačka vychází z průzkumů trhu a dat z realitního sektoru. Výsledky jsou orientační — skutečné ztráty mohou být vyšší nebo nižší v závislosti na vašem konkrétním trhu.' },
              { q: 'Jak mi Netsol AI pomůže odpovídat rychleji?', a: 'Implementujeme AI chatbota a automatizovaný systém odpovědí, který reaguje na každou poptávku do 60 sekund — i v noci a o víkendu.' },
              { q: 'Jak dlouho trvá nasazení?', a: 'Základní systém automatických odpovědí nasadíme do 2 týdnů. Plně personalizované řešení do 4–6 týdnů.' },
            ] : [
              { q: 'How accurate is this calculator?', a: 'The calculator is based on market research and data from the real estate sector. Results are indicative — actual losses may be higher or lower depending on your specific market.' },
              { q: 'How will Netsol AI help me respond faster?', a: 'We implement an AI chatbot and automated response system that replies to every inquiry within 60 seconds — even at night and on weekends.' },
              { q: 'How long does deployment take?', a: 'We deploy a basic automated response system in 2 weeks. A fully personalised solution takes 4–6 weeks.' },
            ]).map(({ q, a }, i) => (
              <div key={i} className="tool-faq-item">
                <h3 className="tool-faq-q">{q}</h3>
                <p className="tool-faq-a">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
