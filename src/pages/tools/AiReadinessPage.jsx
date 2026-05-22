import { useState } from 'react';
import SiteLayout from '../../components/SiteLayout';
import SEOHead from '../../components/SEOHead';
import { useLanguage } from '../../context/LanguageContext';

const QUESTIONS_CS = [
  {
    id: 'q1',
    text: 'Jak aktuálně odpovídáte na nové poptávky?',
    options: [
      { label: 'Ručně, tentýž den', score: 2 },
      { label: 'Ručně, do několika hodin', score: 5 },
      { label: 'Automatická odpověď + ruční follow-up', score: 8 },
      { label: 'Plně automatizováno', score: 10 },
    ],
  },
  {
    id: 'q2',
    text: 'Máte CRM systém?',
    options: [
      { label: 'Ne, používám e-mail/telefon', score: 0 },
      { label: 'Excel nebo poznámky', score: 2 },
      { label: 'Základní CRM', score: 6 },
      { label: 'Plné CRM s automatizací', score: 10 },
    ],
  },
  {
    id: 'q3',
    text: 'Jak sledujete zákazníky, kteří neodpovídají?',
    options: [
      { label: 'Nesleduji', score: 0 },
      { label: 'Ručně po několika dnech', score: 3 },
      { label: 'Plánované připomínky', score: 6 },
      { label: 'Automatizovaná sekvence', score: 10 },
    ],
  },
  {
    id: 'q4',
    text: 'Jak sbíráte Google recenze po uzavření obchodu?',
    options: [
      { label: 'Nesbírám', score: 0 },
      { label: 'Žádám ústně', score: 3 },
      { label: 'Posílám ruční zprávu', score: 6 },
      { label: 'Automatická žádost', score: 10 },
    ],
  },
  {
    id: 'q5',
    text: 'Máte profesionální webové stránky?',
    options: [
      { label: 'Nemám web', score: 0 },
      { label: 'Základní web, zřídka aktualizovaný', score: 3 },
      { label: 'Dobrý web, aktualizace měsíčně', score: 7 },
      { label: 'Moderní web s lead capture a SEO', score: 10 },
    ],
  },
  {
    id: 'q6',
    text: 'Jak řešíte víkendní a večerní poptávky?',
    options: [
      { label: 'Čekají do pondělí/dalšího dne', score: 0 },
      { label: 'Snažím se odpovídat, ale často promešká', score: 3 },
      { label: 'Mám notifikace a odpovídám, když mohu', score: 6 },
      { label: 'Automatická okamžitá odpověď', score: 10 },
    ],
  },
  {
    id: 'q7',
    text: 'Sledujete, odkud přicházejí vaši zákazníci?',
    options: [
      { label: 'Žádné sledování', score: 0 },
      { label: 'Přibližně vím', score: 3 },
      { label: 'Sleduji ručně', score: 6 },
      { label: 'Plný analytický přehled', score: 10 },
    ],
  },
  {
    id: 'q8',
    text: 'Jak zasíláte aktualizace nemovitostí zájemcům?',
    options: [
      { label: 'Ručně jeden po druhém', score: 0 },
      { label: 'Skupinový WhatsApp nebo e-mail', score: 4 },
      { label: 'E-mailový newsletter nástroj', score: 7 },
      { label: 'Automatické párování a odesílání', score: 10 },
    ],
  },
  {
    id: 'q9',
    text: 'Máte e-mailový newsletter pro bývalé klienty?',
    options: [
      { label: 'Ne', score: 0 },
      { label: 'Občas ručně', score: 3 },
      { label: 'Měsíční newsletter', score: 7 },
      { label: 'Automatizovaný se segmentací', score: 10 },
    ],
  },
  {
    id: 'q10',
    text: 'Kolik hodin týdně strávíte administrativou?',
    options: [
      { label: 'Více než 20 hodin', score: 0 },
      { label: '10–20 hodin', score: 3 },
      { label: '5–10 hodin', score: 6 },
      { label: 'Méně než 5 hodin', score: 10 },
    ],
  },
];

const QUESTIONS_EN = [
  {
    id: 'q1',
    text: 'How do you currently respond to new inquiries?',
    options: [
      { label: 'Manually, same day', score: 2 },
      { label: 'Manually, within hours', score: 5 },
      { label: 'Automated response + manual follow-up', score: 8 },
      { label: 'Fully automated', score: 10 },
    ],
  },
  {
    id: 'q2',
    text: 'Do you have a CRM system?',
    options: [
      { label: 'No, I use email/phone', score: 0 },
      { label: 'Excel or notes', score: 2 },
      { label: 'Basic CRM', score: 6 },
      { label: 'Full CRM with automation', score: 10 },
    ],
  },
  {
    id: 'q3',
    text: 'How do you follow up with leads who don\'t respond?',
    options: [
      { label: 'I don\'t', score: 0 },
      { label: 'Manually after a few days', score: 3 },
      { label: 'Scheduled reminders', score: 6 },
      { label: 'Automated sequence', score: 10 },
    ],
  },
  {
    id: 'q4',
    text: 'How do you collect Google reviews after a deal?',
    options: [
      { label: 'I don\'t ask', score: 0 },
      { label: 'I ask verbally', score: 3 },
      { label: 'I send a manual message', score: 6 },
      { label: 'Automated request sent automatically', score: 10 },
    ],
  },
  {
    id: 'q5',
    text: 'Do you have a professional website?',
    options: [
      { label: 'No website', score: 0 },
      { label: 'Basic site, rarely updated', score: 3 },
      { label: 'Good site, updated monthly', score: 7 },
      { label: 'Modern site with lead capture and SEO', score: 10 },
    ],
  },
  {
    id: 'q6',
    text: 'How do you handle weekend and evening inquiries?',
    options: [
      { label: 'They wait until Monday/next day', score: 0 },
      { label: 'I try to respond but often miss them', score: 3 },
      { label: 'I have notifications and respond when I can', score: 6 },
      { label: 'Automated instant response', score: 10 },
    ],
  },
  {
    id: 'q7',
    text: 'Do you track where your leads come from?',
    options: [
      { label: 'No tracking at all', score: 0 },
      { label: 'I roughly know', score: 3 },
      { label: 'I track manually', score: 6 },
      { label: 'Full analytics dashboard', score: 10 },
    ],
  },
  {
    id: 'q8',
    text: 'How do you send property updates to interested buyers?',
    options: [
      { label: 'Manually one by one', score: 0 },
      { label: 'Group WhatsApp or email', score: 4 },
      { label: 'Email newsletter tool', score: 7 },
      { label: 'Automated matching and sending', score: 10 },
    ],
  },
  {
    id: 'q9',
    text: 'Do you have an email newsletter for past clients?',
    options: [
      { label: 'No', score: 0 },
      { label: 'Occasionally manual', score: 3 },
      { label: 'Monthly newsletter', score: 7 },
      { label: 'Automated with segmentation', score: 10 },
    ],
  },
  {
    id: 'q10',
    text: 'How much time do you spend on admin per week?',
    options: [
      { label: 'Over 20 hours', score: 0 },
      { label: '10–20 hours', score: 3 },
      { label: '5–10 hours', score: 6 },
      { label: 'Under 5 hours', score: 10 },
    ],
  },
];

function getResult(score, cs) {
  if (score <= 30) return {
    level: cs ? 'Začátečník' : 'Beginner',
    color: 'red',
    desc: cs
      ? 'Ztrácíte značné množství času a obchodů manuálními procesy. Máte nejvíce co získat z automatizace. Prioritizujte: automatické odpovědi, CRM a follow-up sekvence.'
      : 'You are losing significant time and deals to manual processes. You have the most to gain from automation. Top priorities: automated responses, CRM, and follow-up sequences.',
    pct: score,
  };
  if (score <= 55) return {
    level: cs ? 'Rozvíjející se' : 'Developing',
    color: 'orange',
    desc: cs
      ? 'Máte některé systémy, ale zůstávají velké mezery. Největší příležitosti: automatizace víkendových odpovědí, CRM follow-up a sběr recenzí.'
      : 'You have some systems in place but major gaps remain. Biggest opportunities: automating weekend responses, CRM follow-up, and review collection.',
    pct: score,
  };
  if (score <= 75) return {
    level: cs ? 'Pokročilý' : 'Advanced',
    color: 'blue',
    desc: cs
      ? 'Dobrý základ. Cílená automatizace by výrazně zvýšila váš konverzní poměr a hodinový výdělek. Zaměřte se na: automatické párování nemovitostí a analytiku.'
      : 'Good foundation. Targeted automation would significantly increase your conversion rate and hourly earnings. Focus on: automated property matching and analytics.',
    pct: score,
  };
  return {
    level: cs ? 'Lídr trhu' : 'Market Leader',
    color: 'green',
    desc: cs
      ? 'Jste napřed před 90 % českých makléřů. Pomozte nám s vámi projít, jak dosáhnout 100 % a udržet si náskok.'
      : 'You are ahead of 90% of Czech agents. Let us help you reach 100% and maintain your edge.',
    pct: score,
  };
}

export default function AiReadinessPage() {
  const { lang } = useLanguage();
  const cs = lang === 'cs';
  const questions = cs ? QUESTIONS_CS : QUESTIONS_EN;

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / questions.length) * 100;

  function selectOption(qId, score) {
    setAnswers(prev => ({ ...prev, [qId]: score }));
    if (currentQ < questions.length - 1) {
      setTimeout(() => setCurrentQ(q => q + 1), 250);
    }
  }

  function handleSubmit() {
    if (answeredCount === questions.length) setSubmitted(true);
  }

  const result = submitted ? getResult(totalScore, cs) : null;

  const jsonLd = [{
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": cs ? "AI Připravenost Realitní Kanceláře — Netsol AI" : "Real Estate Agency AI Readiness Score — Netsol AI",
    "url": "https://netsolai.cz/nastroje/ai-skore",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CZK" },
  }];

  return (
    <SiteLayout>
      <SEOHead
        title={cs
          ? "AI Připravenost Realitní Kanceláře — test zdarma | Netsol AI"
          : "Real Estate AI Readiness Score — Free Test | Netsol AI"}
        description={cs
          ? "Zjistěte za 2 minuty, jak připravená je vaše realitní kancelář na AI a automatizaci. Získejte personalizované doporučení zdarma."
          : "Find out in 2 minutes how ready your real estate agency is for AI and automation. Get personalised recommendations for free."}
        canonical="/nastroje/ai-skore"
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
              <span className="tool-badge tool-badge--green">{cs ? 'Bezplatný test' : 'Free Test'}</span>
            </div>
            <h1 className="tool-hero-h1">
              {cs
                ? <>AI Připravenost<br /><span className="tool-hero-accent">Vaší Kanceláře</span></>
                : <>Your Agency<br /><span className="tool-hero-accent">AI Readiness Score</span></>}
            </h1>
            <p className="tool-hero-sub">
              {cs
                ? '10 otázek, 2 minuty. Zjistěte, kde ztrácíte čas a příjmy — a co s tím dělat.'
                : '10 questions, 2 minutes. Find out where you\'re losing time and revenue — and what to do about it.'}
            </p>
          </div>
        </section>
      </div>

      {/* QUIZ */}
      <section className="section">
        <div className="container">
          {!submitted ? (
            <div className="quiz-wrapper">
              {/* Progress */}
              <div className="quiz-progress-bar-wrap">
                <div className="quiz-progress-bar" style={{ width: `${progress}%` }} />
              </div>
              <p className="quiz-progress-text">
                {cs ? `${answeredCount} / ${questions.length} otázek` : `${answeredCount} / ${questions.length} questions`}
              </p>

              {/* Question tabs */}
              <div className="quiz-tabs">
                {questions.map((q, i) => (
                  <button
                    key={q.id}
                    className={`quiz-tab${i === currentQ ? ' quiz-tab--active' : ''}${answers[q.id] !== undefined ? ' quiz-tab--done' : ''}`}
                    onClick={() => setCurrentQ(i)}
                  >{i + 1}</button>
                ))}
              </div>

              {/* Current question */}
              <div className="quiz-question-card">
                <p className="quiz-q-num">{cs ? `Otázka ${currentQ + 1} z ${questions.length}` : `Question ${currentQ + 1} of ${questions.length}`}</p>
                <h2 className="quiz-q-text">{questions[currentQ].text}</h2>
                <div className="quiz-options">
                  {questions[currentQ].options.map((opt, oi) => (
                    <button
                      key={oi}
                      className={`quiz-option${answers[questions[currentQ].id] === opt.score ? ' quiz-option--selected' : ''}`}
                      onClick={() => selectOption(questions[currentQ].id, opt.score)}
                    >
                      <span className="quiz-option-letter">{String.fromCharCode(65 + oi)}</span>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {answeredCount === questions.length && (
                <button className="tool-calc-btn" onClick={handleSubmit}>
                  {cs ? 'Zobrazit výsledky →' : 'Show My Results →'}
                </button>
              )}
            </div>
          ) : (
            <div className="quiz-result-wrapper">
              <div className={`quiz-score-card quiz-score-card--${result.color}`}>
                <p className="quiz-score-label">{cs ? 'Vaše skóre' : 'Your Score'}</p>
                <div className="quiz-score-ring">
                  <svg viewBox="0 0 120 120" className="quiz-score-svg">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="10" />
                    <circle cx="60" cy="60" r="50" fill="none" stroke="white" strokeWidth="10"
                      strokeDasharray={`${(result.pct / 100) * 314} 314`}
                      strokeLinecap="round"
                      transform="rotate(-90 60 60)"
                    />
                  </svg>
                  <span className="quiz-score-number">{result.pct}</span>
                </div>
                <p className="quiz-score-level">{result.level}</p>
              </div>

              <div className="quiz-result-desc">
                <h2>{cs ? 'Vaše analýza' : 'Your Analysis'}</h2>
                <p>{result.desc}</p>
              </div>

              <div className="quiz-result-breakdown">
                <h3>{cs ? 'Vaše odpovědi' : 'Your Answers'}</h3>
                {questions.map((q, i) => {
                  const selectedScore = answers[q.id];
                  const selectedOpt = q.options.find(o => o.score === selectedScore);
                  const maxScore = Math.max(...q.options.map(o => o.score));
                  return (
                    <div key={q.id} className="quiz-breakdown-item">
                      <div className="quiz-breakdown-header">
                        <span className="quiz-breakdown-q">{i + 1}. {q.text}</span>
                        <span className={`quiz-breakdown-score${selectedScore < maxScore ? ' quiz-breakdown-score--low' : ''}`}>
                          {selectedScore}/{maxScore}
                        </span>
                      </div>
                      <p className="quiz-breakdown-ans">{selectedOpt?.label}</p>
                    </div>
                  );
                })}
              </div>

              <div className="tool-result-cta" style={{ marginTop: '2rem' }}>
                <p className="tool-result-cta-text">
                  {cs
                    ? 'Chcete projít výsledky s expertem a dostat konkrétní plán pro vaši kancelář?'
                    : 'Want to go through your results with an expert and get a specific plan for your agency?'}
                </p>
                <a href="/free-consultation" className="tool-cta-btn">
                  {cs ? 'Bezplatná 30minutová konzultace →' : 'Free 30-minute Consultation →'}
                </a>
              </div>

              <button className="quiz-restart-btn" onClick={() => { setAnswers({}); setSubmitted(false); setCurrentQ(0); }}>
                {cs ? 'Začít znovu' : 'Start Over'}
              </button>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
