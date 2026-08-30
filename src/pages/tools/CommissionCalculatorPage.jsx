import { useState } from 'react';
import SiteLayout from '../../components/SiteLayout';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../context/LanguageContext';
import { trackToolComplete, trackBookingClick } from '../../utils/tracking';

function formatCZK(n) {
  return Math.round(n).toLocaleString('cs-CZ') + ' Kč';
}

export default function CommissionCalculatorPage() {
  const { lang } = useLanguage();
  const cs = lang === 'cs';

  const [salePrice, setSalePrice] = useState(5000000);
  const [commissionRate, setCommissionRate] = useState(3);
  const [agentSplit, setAgentSplit] = useState(70);
  const [expenses, setExpenses] = useState(15000);
  const [taxBracket, setTaxBracket] = useState(15);
  const [hoursSpent, setHoursSpent] = useState(40);
  const [dealsPerYear, setDealsPerYear] = useState(12);
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState(null);

  function calculate() {
    const grossCommission = (salePrice * commissionRate) / 100;
    const agencyShare = grossCommission * ((100 - agentSplit) / 100);
    const agentGross = grossCommission * (agentSplit / 100);
    const afterExpenses = agentGross - expenses;
    const taxAmount = Math.max(afterExpenses * (taxBracket / 100), 0);
    const netTakeHome = Math.max(afterExpenses - taxAmount, 0);
    const hourlyRate = hoursSpent > 0 ? netTakeHome / hoursSpent : 0;
    const annualProjection = netTakeHome * dealsPerYear;

    setResults({
      grossCommission,
      agencyShare,
      agentGross,
      expenses,
      afterExpenses,
      taxAmount,
      netTakeHome,
      hourlyRate,
      annualProjection,
    });
    setShowResult(true);
    trackToolComplete('commission-calculator');
  }

  const jsonLd = [{
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": cs ? "Kalkulačka provize realitního makléře — Netsol AI" : "Real Estate Agent Commission Calculator — Netsol AI",
    "url": "https://netsolai.cz/nastroje/kalkulacka-provize",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CZK" },
  }];

  return (
    <SiteLayout>
      <SEOHead
        title={cs
          ? "Kalkulačka provize pro realitní makléře — zdarma | Netsol AI"
          : "Real Estate Agent Commission Calculator — Free | Netsol AI"}
        description={cs
          ? "Spočítejte svou čistou provizi po dělení s agenturou, výdajích a daních. Bezplatná kalkulačka pro realitní makléře v ČR."
          : "Calculate your net commission after agency split, expenses, and taxes. Free calculator for real estate agents."}
        canonical="/nastroje/kalkulacka-provize"
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
              <span className="tool-badge tool-badge--purple">{cs ? 'Bezplatný nástroj' : 'Free Tool'}</span>
            </div>
            <h1 className="tool-hero-h1">
              {cs
                ? <>Kalkulačka provize<br /><span className="tool-hero-accent">pro makléře</span></>
                : <>Commission Calculator<br /><span className="tool-hero-accent">for Agents</span></>}
            </h1>
            <p className="tool-hero-sub">
              {cs
                ? 'Zjistěte svůj čistý výdělek z každého obchodu — po provizi agentury, výdajích, daních i hodinové sazbě.'
                : 'Find out your net earnings from each deal — after agency split, expenses, taxes, and hourly rate.'}
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
              <h2 className="tool-card-title">{cs ? 'Parametry obchodu' : 'Deal Parameters'}</h2>

              <div className="tool-field">
                <label className="tool-label">{cs ? 'Prodejní cena nemovitosti (Kč)' : 'Property sale price (CZK)'}</label>
                <input type="number" className="tool-input" value={salePrice} min={300000} max={100000000} step={100000}
                  onChange={e => setSalePrice(Number(e.target.value))} />
                <span className="tool-hint">{formatCZK(salePrice)}</span>
              </div>

              <div className="tool-field">
                <label className="tool-label">{cs ? 'Sazba provize (%)' : 'Commission rate (%)'}</label>
                <div className="tool-slider-row">
                  <input type="range" className="tool-slider" min={1} max={6} step={0.5} value={commissionRate}
                    onChange={e => setCommissionRate(Number(e.target.value))} />
                  <span className="tool-slider-val">{commissionRate}%</span>
                </div>
                <span className="tool-hint">{cs ? `Hrubá provize: ${formatCZK((salePrice * commissionRate) / 100)}` : `Gross commission: ${formatCZK((salePrice * commissionRate) / 100)}`}</span>
              </div>

              <div className="tool-field">
                <label className="tool-label">{cs ? 'Váš podíl z provize (%)' : 'Your share of commission (%)'}</label>
                <div className="tool-slider-row">
                  <input type="range" className="tool-slider" min={50} max={100} step={5} value={agentSplit}
                    onChange={e => setAgentSplit(Number(e.target.value))} />
                  <span className="tool-slider-val">{agentSplit}%</span>
                </div>
              </div>

              <div className="tool-field">
                <label className="tool-label">{cs ? 'Celkové výdaje na obchod (Kč)' : 'Total deal expenses (CZK)'}</label>
                <input type="number" className="tool-input" value={expenses} min={0} max={200000} step={1000}
                  onChange={e => setExpenses(Number(e.target.value))} />
                <span className="tool-hint">{cs ? 'Fotografie, homestaging, inzerce, cestovné...' : 'Photos, homestaging, advertising, travel...'}</span>
              </div>

              <div className="tool-field">
                <label className="tool-label">{cs ? 'Daňová sazba' : 'Tax bracket'}</label>
                <div className="tool-toggle-group">
                  <button className={`tool-toggle-btn${taxBracket === 15 ? ' tool-toggle-btn--active' : ''}`}
                    onClick={() => setTaxBracket(15)}>15%</button>
                  <button className={`tool-toggle-btn${taxBracket === 23 ? ' tool-toggle-btn--active' : ''}`}
                    onClick={() => setTaxBracket(23)}>23%</button>
                </div>
              </div>

              <div className="tool-field">
                <label className="tool-label">{cs ? 'Počet hodin na tomto obchodu' : 'Hours spent on this deal'}</label>
                <div className="tool-slider-row">
                  <input type="range" className="tool-slider" min={5} max={200} step={5} value={hoursSpent}
                    onChange={e => setHoursSpent(Number(e.target.value))} />
                  <span className="tool-slider-val">{hoursSpent}h</span>
                </div>
              </div>

              <div className="tool-field">
                <label className="tool-label">{cs ? 'Počet podobných obchodů ročně' : 'Similar deals per year'}</label>
                <div className="tool-slider-row">
                  <input type="range" className="tool-slider" min={1} max={50} step={1} value={dealsPerYear}
                    onChange={e => setDealsPerYear(Number(e.target.value))} />
                  <span className="tool-slider-val">{dealsPerYear}</span>
                </div>
              </div>

              <button className="tool-calc-btn" onClick={calculate}>
                {cs ? 'Spočítat výdělek →' : 'Calculate Earnings →'}
              </button>
            </div>

            {/* RESULTS */}
            <div className={`tool-results${showResult ? ' tool-results--visible' : ''}`}>
              {!showResult ? (
                <div className="tool-results-placeholder">
                  <div className="tool-results-placeholder-icon">💰</div>
                  <p>{cs ? 'Zadejte parametry a klikněte na tlačítko.' : 'Enter parameters and click the button.'}</p>
                </div>
              ) : (
                <>
                  <div className="tool-result-highlight">
                    <p className="tool-result-label">{cs ? 'Váš čistý výdělek' : 'Your net take-home'}</p>
                    <p className="tool-result-big tool-result-big--green">{formatCZK(results.netTakeHome)}</p>
                    <p className="tool-result-sublabel">{cs ? 'z tohoto obchodu' : 'from this deal'}</p>
                  </div>

                  <div className="tool-result-breakdown">
                    <div className="tool-result-row">
                      <span>{cs ? 'Hrubá provize' : 'Gross commission'}</span>
                      <span>{formatCZK(results.grossCommission)}</span>
                    </div>
                    <div className="tool-result-row tool-result-row--minus">
                      <span>{cs ? '− Podíl agentury' : '− Agency share'}</span>
                      <span>− {formatCZK(results.agencyShare)}</span>
                    </div>
                    <div className="tool-result-row">
                      <span>{cs ? 'Váš hrubý podíl' : 'Your gross share'}</span>
                      <span>{formatCZK(results.agentGross)}</span>
                    </div>
                    <div className="tool-result-row tool-result-row--minus">
                      <span>{cs ? '− Výdaje' : '− Expenses'}</span>
                      <span>− {formatCZK(results.expenses)}</span>
                    </div>
                    <div className="tool-result-row tool-result-row--minus">
                      <span>{cs ? `− Daň (${taxBracket}%)` : `− Tax (${taxBracket}%)`}</span>
                      <span>− {formatCZK(results.taxAmount)}</span>
                    </div>
                    <div className="tool-result-row tool-result-row--total">
                      <span>{cs ? 'Čistý výdělek' : 'Net take-home'}</span>
                      <span>{formatCZK(results.netTakeHome)}</span>
                    </div>
                  </div>

                  <div className="tool-result-grid">
                    <div className="tool-result-item">
                      <span className="tool-result-item-label">{cs ? 'Hodinová sazba' : 'Hourly rate'}</span>
                      <span className={`tool-result-item-val${results.hourlyRate < 500 ? ' tool-result-item-val--warn' : ''}`}>
                        {formatCZK(results.hourlyRate)}/h
                      </span>
                    </div>
                    <div className="tool-result-item">
                      <span className="tool-result-item-label">{cs ? 'Roční projekce' : 'Annual projection'}</span>
                      <span className="tool-result-item-val">{formatCZK(results.annualProjection)}</span>
                    </div>
                  </div>

                  {results.hourlyRate < 500 && (
                    <div className="tool-result-fact tool-result-fact--warn">
                      <strong>⚠️ {cs ? 'Upozornění' : 'Warning'}</strong>
                      <p>{cs
                        ? `Váš hodinový výdělek ${formatCZK(results.hourlyRate)} je nižší než průměrná hodinová sazba instalatéra. Automatizace rutinní práce může výrazně zvýšit váš hodinový výdělek.`
                        : `Your hourly rate of ${formatCZK(results.hourlyRate)} is lower than the average plumber's rate. Automating routine work can significantly increase your hourly earnings.`}</p>
                    </div>
                  )}

                  <div className="tool-result-cta">
                    <p className="tool-result-cta-text">
                      {cs
                        ? 'Chcete zvýšit svůj hodinový výdělek automatizací rutinní práce?'
                        : 'Want to increase your hourly earnings by automating routine work?'}
                    </p>
                    <a href="/free-consultation" className="tool-cta-btn" onClick={() => trackBookingClick('commission-calculator')}>
                      {cs ? 'Bezplatná 30minutová konzultace →' : 'Free 30-minute Consultation →'}
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
          <h2>{cs ? 'Jak funguje provize makléře v ČR?' : 'How Does Agent Commission Work in the Czech Republic?'}</h2>
          <div className="tool-explainer-body">
            <p>{cs
              ? 'Realitní makléři v České republice obvykle dostávají provizi ve výši 2–5 % z prodejní ceny nemovitosti. Tato provize je většinou hrazena prodávajícím. Po odečtení podílu realitní kanceláře (tzv. split), výdajů a daní zůstane makléři čistý výdělek.'
              : 'Real estate agents in the Czech Republic typically earn a commission of 2–5% of the property sale price. This commission is usually paid by the seller. After deducting the agency split, expenses, and taxes, the agent\'s net take-home remains.'}</p>
            <p>{cs
              ? 'Průměrná provize v Praze se pohybuje kolem 3–4 % ze strany prodávajícího. V regionech mimo Prahu bývá nižší, 2–3 %. Makléři pracující pod realitní kanceláří sdílejí provizi typicky 50/50 až 70/30 v jejich prospěch.'
              : 'The average commission in Prague is around 3–4% from the seller. In regions outside Prague it tends to be lower, 2–3%. Agents working under a real estate agency typically split commissions 50/50 to 70/30 in their favour.'}</p>
          </div>
          <div className="tool-faq-list" style={{ marginTop: '2rem' }}>
            {(cs ? [
              { q: 'Jak se daní provize makléře?', a: 'Provize realitního makléře podléhá dani z příjmu. Pro OSVČ platí sazba 15 % pro příjmy do 1 582 812 Kč ročně a 23 % pro příjmy nad tuto hranici (rok 2024). Je možné uplatnit výdajový paušál 60 % nebo skutečné výdaje.' },
              { q: 'Jaká je průměrná provize v Praze?', a: 'V Praze se průměrná provize pohybuje mezi 3–4 % z prodejní ceny nemovitosti. Pro nemovitosti nad 10 milionů Kč makléři někdy nabízejí nižší sazbu 2–2,5 %.' },
              { q: 'Může makléř pracovat bez agentury?', a: 'Ano. Makléř s vlastní živností může pracovat jako OSVČ bez agentury. V takovém případě si ponechá 100 % provize, ale musí sám pokrýt všechny náklady a právní odpovědnost.' },
            ] : [
              { q: 'How is commission taxed for agents?', a: 'Real estate agent commissions are subject to income tax. For self-employed individuals the rate is 15% for income up to CZK 1,582,812 annually and 23% above that threshold (2024). A 60% expense deduction or actual expenses may be claimed.' },
              { q: 'What is the average commission in Prague?', a: 'In Prague the average commission is between 3–4% of the sale price. For properties over CZK 10 million agents sometimes offer a lower rate of 2–2.5%.' },
              { q: 'Can an agent work without an agency?', a: 'Yes. An agent with their own trade licence can work as a sole trader without an agency. In that case they keep 100% of the commission but must cover all costs and legal liability themselves.' },
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
