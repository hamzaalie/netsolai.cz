import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import '../styles/re-landing.css';

const CALENDLY = 'https://calendly.com/netsolai/ai-audit';

// ─── Translations ─────────────────────────────────────────────────────────────
const T = {
  en: {
    nav: { cta: 'Book Free AI Audit →', langToggle: 'CZ' },
    hero: {
      badge: 'AI FOR REAL ESTATE AGENCIES · PRAGUE',
      h1a: ['Your Agency.', 'Running on Autopilot.'],
      h1b: ['Stop Losing Deals', 'to Slow Follow-Up.'],
      sub: 'We build AI systems that qualify your leads, book viewings, and handle tenant communication — automatically.',
      cta1: 'Book Free AI Audit →',
      cta2: 'See How It Works ↓',
      stats: ['Prague-based', 'Builds in 2–3 weeks', 'No long contracts'],
      flow: ['Visitor finds you on Google / Ads', 'AI captures lead 24/7', 'Lead qualified in 60 sec', 'Viewing booked automatically', 'Agent closes the deal'],
    },
    proof: ['✓ 4 live projects built', '✓ Prague & EU clients', '✓ Built with Claude · n8n · OpenAI', '✓ Avg. delivery: 3 weeks', '✓ Czech + English support'],
    split: {
      eyebrow: "WHAT'S YOUR BIGGEST CHALLENGE RIGHT NOW?",
      title: 'We solve two very different problems.',
      sub: 'Which one is yours?',
      card1: {
        num: '01', accent: 'amber',
        headline: 'I need more clients coming in.',
        points: ['Our website gets visitors but nobody enquires', "We're not showing up on Google for Prague searches", "Our ads aren't generating quality leads", 'Competitors seem to get more enquiries than us'],
        cta: 'Show me the growth solution →',
      },
      card2: {
        num: '02', accent: 'purple',
        headline: "I have leads — I just can't handle them all.",
        points: ['Agents spend hours on WhatsApp instead of selling', 'Leads go cold before we can follow up', 'Booking viewings takes 10 emails back and forth', 'I have no idea which leads are actually serious'],
        cta: 'Show me the automation solution →',
      },
      note: "Not sure? Most agencies need both. Start with a free audit and we'll tell you exactly what to build first.",
      noteCta: 'Book free audit',
    },
    solA: {
      eyebrow: 'FOR AGENCIES THAT NEED MORE CLIENTS',
      title: 'Get found. Get enquiries. Get clients.',
      steps: [
        { n: '01', title: 'High-Converting Website', desc: 'Built for Prague buyers and renters. Czech + English.' },
        { n: '02', title: 'Google Ads + Meta Ads', desc: 'Targeting Prague buyers and sellers. Managed by us.' },
        { n: '03', title: 'AI Chatbot Captures Every Lead', desc: '24/7 on your site — never miss an enquiry.' },
        { n: '04', title: 'Full Tracking & Reporting', desc: 'Know exactly which ad, keyword, source converts.' },
      ],
      before: ['Website has no enquiry form', 'No Google presence', 'Running ads with no tracking', 'Missing enquiries on weekends', "No idea what's converting"],
      after: ['Booking form on every page', 'Page 1 for Prague searches', 'Every lead source tracked', 'AI captures leads 24/7', 'Clear weekly report'],
      cta: 'Start getting more clients →',
      ctaSub: 'Book Free Audit — 30 min, no obligation',
    },
    solB: {
      eyebrow: 'FOR AGENCIES DROWNING IN MANUAL WORK',
      title: ['Your leads are coming in.', 'Your systems need to keep up.'],
      steps: [
        { n: '01', title: 'AI Qualifies Every Lead', desc: 'Every enquiry scored: Hot / Warm / Cold. In 60 sec.' },
        { n: '02', title: 'Viewings Book Themselves', desc: 'Prospect picks a slot. Agent gets notified. No phone tag.' },
        { n: '03', title: 'WhatsApp Bot Handles FAQ', desc: 'Tenants and buyers get instant answers 24/7.' },
        { n: '04', title: 'You Get a Dashboard', desc: 'See every lead, viewing, deal — automatically.' },
      ],
      bars: [
        { label: '📱 Responding to enquiries', hours: 4, max: 4 },
        { label: '📅 Booking viewings', hours: 2, max: 4 },
        { label: '📋 Qualifying leads', hours: 1.5, max: 4 },
        { label: '📊 Weekly reports', hours: 1, max: 4 },
      ],
      barTitle: 'Tasks your agents do manually today:',
      barFooter: 'Total manual work: ~7 hours/day  →  After Netsol AI: 30 min',
      builtWith: 'Built with:',
      tools: ['n8n', 'Claude AI', 'WhatsApp Business', 'Vercel', 'Cal.com', 'Notion'],
      cta: 'Stop the manual work →',
      ctaSub: "Book Free Audit — see what we'd automate for you",
    },
    process: {
      eyebrow: 'THE PROCESS',
      title: 'How we work together',
      steps: [
        { n: '01', title: 'Free AI Audit', sub: '30 minutes', desc: 'We map your exact workflow and identify what to automate first. No obligation.' },
        { n: '02', title: 'We Build Your System', sub: '2–3 week build', desc: 'You see progress every step. No surprises.' },
        { n: '03', title: 'You Review & Approve', sub: '', desc: 'We walk through everything. Feedback in. Changes made.' },
        { n: '04', title: 'It Goes Live', sub: 'We Train You', desc: 'Full handover. Support for 30–60 days.' },
      ],
      timeline: ['Week 0\nAudit (free)', 'Week 1–2\nBuilding your system', 'Week 3\nReview & Approve', 'Week 4\nLive + trained'],
      guarantee: "If we don't deliver exactly what we scoped, we fix it for free.\nNo lock-in contracts. Cancel the retainer any time.",
    },
    packages: {
      eyebrow: 'PRICING',
      title: 'What you actually get',
      sub: "Not a vague 'digital transformation.' A specific system, built in weeks.",
      cards: [
        {
          name: 'Agency Quick Start', price: 'From €2,500', delivery: '2-week delivery',
          features: ['AI lead qualification bot', 'Automated viewing scheduler', 'Post-viewing follow-up sequence', 'Basic CRM setup', '30-day support'],
          best: 'Small agencies 1–5 agents', popular: false,
        },
        {
          name: 'Agency Growth System', price: 'From €5,000', delivery: '3-week delivery',
          features: ['Everything in Starter', 'WhatsApp AI assistant', 'Property matching AI', 'AI listing description generator', 'Automated weekly reports', '60-day support'],
          best: 'Growing agencies 5–15 agents', popular: true,
        },
        {
          name: 'Property Management OS', price: 'From €9,000', delivery: '5–6 week delivery',
          features: ['Everything in Growth', 'Maintenance request system', 'Rent collection automation', 'e-Turista compliance (2026)', 'Landlord reporting portal', 'Document processing AI'],
          best: 'Property managers 20–200 units', popular: false,
        },
      ],
      note: 'Not sure which fits? The free audit call will tell you.',
      note2: 'All packages include a monthly retainer option after delivery.',
      cta: 'Get started →',
      popular: 'MOST POPULAR',
      bestFor: 'Best for:',
    },
    cases: {
      eyebrow: 'PORTFOLIO',
      title: "What we've already built",
      view: 'View project →',
      items: [
        { name: 'Creative Hive Co', industry: 'Creative / Community', result: 'Automated lead capture — response time from hours to minutes', desc: 'Community platform for makers and creative entrepreneurs with automated onboarding flows.', url: 'https://www.creativehiveco.com/', img: '/images/portfolio/creative-hive-co.png' },
        { name: 'The Contractors Academy', industry: 'E-Learning', result: 'Automated student onboarding — setup time cut by 70%', desc: 'Training platform for contractors with AI-powered course delivery and lead qualification.', url: 'https://www.thecontractorsacademy.com/', img: '/images/portfolio/the-contractors-academy.png' },
        { name: 'Slumber CBN', industry: 'E-Commerce', result: 'Order processing automation — manual work reduced by 80%', desc: 'Sleep wellness brand with automated inventory, fulfilment, and customer communication.', url: 'https://slumbercbn.com/', img: '/images/portfolio/slumber.png' },
        { name: 'Imagine Health', industry: 'Health & Wellness', result: 'Automated client onboarding — from 3 days to 2 hours', desc: 'AI-powered health platform with automated intake forms, scheduling, and follow-up sequences.', url: 'https://imagine-thailand.com/', img: '/images/portfolio/imagine-health.png' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Quick answers',
      items: [
        { q: 'How long does it actually take to build?', a: 'Most automation systems take 2–3 weeks from first call to live. Larger projects (CRM, full property management system) take 5–6 weeks. We give you a specific timeline in your free audit call.' },
        { q: 'Do we need to change our existing tools?', a: 'Usually not. We build around what you already use — your existing email, WhatsApp, calendar, and website. We integrate, not replace.' },
        { q: 'What about Czech language — do your bots speak Czech?', a: 'Yes. All our chatbots and WhatsApp assistants are bilingual by default — Czech and English. Essential for the Prague market.' },
        { q: 'What happens after delivery — do we need to manage it?', a: 'No. We offer monthly retainers that handle all maintenance, monitoring, and improvements. You never touch the system.' },
        { q: "What's the e-Turista compliance you mention?", a: 'The new 2026 Czech Tourism Act requires all short-term rental properties to be digitally registered. Without it, you cannot list on Airbnb or Booking.com. Our system automates the entire registration and compliance process.' },
      ],
    },
    cta: {
      title: ['Book your free AI audit.', '30 minutes. No obligation.'],
      sub: "We'll map your exact workflow, identify the 3 things we'd automate first, and give you a plan you can take away — even if you don't hire us.",
      bullets: ['We review your current lead and ops workflow', 'We identify your top 3 automation opportunities', 'You get a written action plan — whether you work with us or not'],
      btn: 'Book Free 30-min Audit →',
      footer: 'Prague-based team · Czech & English · Builds in 2–3 weeks',
    },
  },
  cs: {
    nav: { cta: 'Rezervovat bezplatný AI audit →', langToggle: 'EN' },
    hero: {
      badge: 'AI PRO REALITNÍ KANCELÁŘE · PRAHA',
      h1a: ['Vaše agentura.', 'Na automatickém pilotu.'],
      h1b: ['Přestaňte přicházet o zakázky', 'kvůli pomalé reakci.'],
      sub: 'Vytváříme AI systémy, které kvalifikují vaše leady, rezervují prohlídky a komunikují s nájemníky — automaticky.',
      cta1: 'Rezervovat bezplatný AI audit →',
      cta2: 'Jak to funguje ↓',
      stats: ['Sídlíme v Praze', 'Dodáváme za 2–3 týdny', 'Bez dlouhých smluv'],
      flow: ['Návštěvník vás najde na Googlu / Ads', 'AI zachytí lead 24/7', 'Lead kvalifikován za 60 sec', 'Prohlídka rezervována automaticky', 'Makléř uzavře obchod'],
    },
    proof: ['✓ 4 živé projekty', '✓ Klienti v Praze i EU', '✓ Postaveno s Claude · n8n · OpenAI', '✓ Průměrná dodávka: 3 týdny', '✓ Podpora česky i anglicky'],
    split: {
      eyebrow: 'JAKÝ JE VÁŠ NEJVĚTŠÍ PROBLÉM PRÁVĚ TEĎ?',
      title: 'Řešíme dva velmi odlišné problémy.',
      sub: 'Který z nich je váš?',
      card1: {
        num: '01', accent: 'amber',
        headline: 'Potřebuji více klientů.',
        points: ['Web má návštěvníky, ale nikdo se neozvé', 'Na Googlu pro pražské vyhledávání nejsme vidět', 'Naše reklamy negenerují kvalitní leady', 'Konkurence dostává více poptávek než my'],
        cta: 'Ukažte mi řešení pro růst →',
      },
      card2: {
        num: '02', accent: 'purple',
        headline: 'Leady mám — jen je nestíhám zpracovat.',
        points: ['Makléři tráví hodiny na WhatsAppu místo prodeje', 'Leady vychladnou, než je stihneme kontaktovat', 'Rezervace prohlídky trvá 10 e-mailů sem a tam', 'Nevím, které leady jsou skutečně vážné'],
        cta: 'Ukažte mi automatizační řešení →',
      },
      note: 'Nejste si jistí? Většina agentur potřebuje obojí. Začněte bezplatným auditem a řekneme vám, co postavit jako první.',
      noteCta: 'Rezervovat bezplatný audit',
    },
    solA: {
      eyebrow: 'PRO AGENTURY, KTERÉ POTŘEBUJÍ VÍCE KLIENTŮ',
      title: 'Buďte vidět. Získejte poptávky. Získejte klienty.',
      steps: [
        { n: '01', title: 'Web s vysokou konverzí', desc: 'Vytvořeno pro pražské kupce a nájemce. Česky i anglicky.' },
        { n: '02', title: 'Google Ads + Meta Ads', desc: 'Cíleno na pražské kupce a prodejce. Spravujeme za vás.' },
        { n: '03', title: 'AI chatbot zachytí každý lead', desc: '24/7 na vašem webu — žádná zmeškaná poptávka.' },
        { n: '04', title: 'Sledování a reporty', desc: 'Víte přesně, která reklama, klíčové slovo, zdroj konvertuje.' },
      ],
      before: ['Web nemá formulář pro poptávky', 'Žádná viditelnost na Googlu', 'Reklamy bez sledování', 'Zmeškané poptávky o víkendech', 'Nevíte, co konvertuje'],
      after: ['Rezervační formulář na každé stránce', 'Strana 1 pro pražská vyhledávání', 'Každý zdroj leadu sledován', 'AI zachytí leady 24/7', 'Jasný týdenní report'],
      cta: 'Začít získávat více klientů →',
      ctaSub: 'Bezplatný audit — 30 min, bez závazků',
    },
    solB: {
      eyebrow: 'PRO AGENTURY ZAVALENÉ MANUÁLNÍ PRACÍ',
      title: ['Leady přicházejí.', 'Vaše systémy to musí zvládnout.'],
      steps: [
        { n: '01', title: 'AI kvalifikuje každý lead', desc: 'Každá poptávka ohodnocena: Horký / Teplý / Studený. Za 60 sec.' },
        { n: '02', title: 'Prohlídky se rezervují samy', desc: 'Zájemce si vybere termín. Makléř dostane upozornění. Žádné telefonování.' },
        { n: '03', title: 'WhatsApp bot vyřídí dotazy', desc: 'Nájemci a kupující dostanou okamžité odpovědi 24/7.' },
        { n: '04', title: 'Přehled na jednom místě', desc: 'Vidíte každý lead, prohlídku, obchod — automaticky.' },
      ],
      bars: [
        { label: '📱 Odpovídání na poptávky', hours: 4, max: 4 },
        { label: '📅 Rezervace prohlídek', hours: 2, max: 4 },
        { label: '📋 Kvalifikace leadů', hours: 1.5, max: 4 },
        { label: '📊 Týdenní reporty', hours: 1, max: 4 },
      ],
      barTitle: 'Co vaši makléři dělají manuálně každý den:',
      barFooter: 'Celková manuální práce: ~7 hodin/den  →  Po Netsol AI: 30 minut',
      builtWith: 'Postaveno s:',
      tools: ['n8n', 'Claude AI', 'WhatsApp Business', 'Vercel', 'Cal.com', 'Notion'],
      cta: 'Zastavit manuální práci →',
      ctaSub: 'Bezplatný audit — zjistíme, co bychom pro vás automatizovali',
    },
    process: {
      eyebrow: 'POSTUP PRÁCE',
      title: 'Jak spolupracujeme',
      steps: [
        { n: '01', title: 'Bezplatný AI audit', sub: '30 minut', desc: 'Zmapujeme váš přesný postup a identifikujeme, co automatizovat jako první.' },
        { n: '02', title: 'Stavíme váš systém', sub: 'Build 2–3 týdny', desc: 'Vidíte pokrok každý krok. Žádná překvapení.' },
        { n: '03', title: 'Schvalujete', sub: '', desc: 'Projdeme vše společně. Přijmeme zpětnou vazbu. Provedeme změny.' },
        { n: '04', title: 'Spuštění a zaškolení', sub: '', desc: 'Kompletní předání. Podpora 30–60 dní.' },
      ],
      timeline: ['Týden 0\nAudit (zdarma)', 'Týden 1–2\nStavíme systém', 'Týden 3\nSchválení', 'Týden 4\nSpuštění'],
      guarantee: 'Pokud nedodáme přesně to, co jsme navrhli, opravíme to zdarma.\nŽádné dlouhodobé smlouvy. Retainer zrušíte kdykoli.',
    },
    packages: {
      eyebrow: 'CENY',
      title: 'Co skutečně dostanete',
      sub: "Žádná vágní 'digitální transformace.' Konkrétní systém, postavený za týdny.",
      cards: [
        {
          name: 'Agency Quick Start', price: 'Od €2 500', delivery: 'Dodávka za 2 týdny',
          features: ['AI bot pro kvalifikaci leadů', 'Automatický plánovač prohlídek', 'Follow-up sekvence po prohlídce', 'Základní nastavení CRM', 'Podpora 30 dní'],
          best: 'Malé agentury 1–5 makléřů', popular: false,
        },
        {
          name: 'Agency Growth System', price: 'Od €5 000', delivery: 'Dodávka za 3 týdny',
          features: ['Vše ze Starteru', 'WhatsApp AI asistent', 'AI párování nemovitostí', 'AI generátor popisů inzerátů', 'Automatické týdenní reporty', 'Podpora 60 dní'],
          best: 'Rostoucí agentury 5–15 makléřů', popular: true,
        },
        {
          name: 'Property Management OS', price: 'Od €9 000', delivery: 'Dodávka za 5–6 týdnů',
          features: ['Vše z Growth', 'Systém žádostí o údržbu', 'Automatizace výběru nájemného', 'Soulad s e-Turista (2026)', 'Portál pro pronajímatele', 'AI zpracování dokumentů'],
          best: 'Správci nemovitostí 20–200 jednotek', popular: false,
        },
      ],
      note: 'Nejste si jistí? Bezplatný audit vám to řekne.',
      note2: 'Všechny balíčky zahrnují možnost měsíčního retaineru po dodávce.',
      cta: 'Začít →',
      popular: 'NEJPOPULÁRNĚJŠÍ',
      bestFor: 'Ideální pro:',
    },
    cases: {
      eyebrow: 'PORTFOLIO',
      title: 'Co jsme již postavili',
      view: 'Zobrazit projekt →',
      items: [
        { name: 'Creative Hive Co', industry: 'Kreativní / Komunita', result: 'Automatizovaný sběr leadů — odezva z hodin na minuty', desc: 'Komunitní platforma pro tvůrce s automatizovanými onboarding toky.', url: 'https://www.creativehiveco.com/', img: '/images/portfolio/creative-hive-co.png' },
        { name: 'The Contractors Academy', industry: 'E-Learning', result: 'Automatizovaný onboarding studentů — o 70 % rychleji', desc: 'Vzdělávací platforma pro dodavatele s AI řízeným doručováním kurzů.', url: 'https://www.thecontractorsacademy.com/', img: '/images/portfolio/the-contractors-academy.png' },
        { name: 'Slumber CBN', industry: 'E-Commerce', result: 'Zpracování objednávek — manuální práce snížena o 80 %', desc: 'Wellness značka s automatizovanými toky pro zásoby a zákazníky.', url: 'https://slumbercbn.com/', img: '/images/portfolio/slumber.png' },
        { name: 'Imagine Health', industry: 'Zdraví a wellness', result: 'Onboarding klientů — ze 3 dnů na 2 hodiny', desc: 'AI platforma pro zdraví s automatizovanými formuláři a plánováním.', url: 'https://imagine-thailand.com/', img: '/images/portfolio/imagine-health.png' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Rychlé odpovědi',
      items: [
        { q: 'Jak dlouho trvá vytvoření systému?', a: 'Většina automatizačních systémů trvá 2–3 týdny od prvního hovoru po spuštění. Větší projekty (CRM, kompletní systém správy nemovitostí) trvají 5–6 týdnů. Přesný harmonogram vám sdělíme na bezplatném auditu.' },
        { q: 'Musíme měnit stávající nástroje?', a: 'Obvykle ne. Stavíme kolem toho, co již používáte — váš stávající e-mail, WhatsApp, kalendář a web. Integrujeme, nenahrazujeme.' },
        { q: 'Mluví vaše boty česky?', a: 'Ano. Všechny naše chatboty a WhatsApp asistenty jsou standardně dvojjazyčné — česky a anglicky. To je pro pražský trh nezbytné.' },
        { q: 'Co se stane po dodávce — musíme systém spravovat?', a: 'Ne. Nabízíme měsíční retainery, které zajišťují veškerou údržbu, monitoring a vylepšení. Systém se vás nikdy nedotkne.' },
        { q: 'Co je e-Turista a proč je důležitý?', a: 'Nový český zákon z roku 2026 vyžaduje, aby všechny krátkodobé pronájmy byly digitálně registrovány. Bez toho nelze inzerovat na Airbnb ani Booking.com. Náš systém automatizuje celý proces registrace.' },
      ],
    },
    cta: {
      title: ['Rezervujte bezplatný AI audit.', '30 minut. Bez závazků.'],
      sub: 'Zmapujeme váš přesný postup, identifikujeme 3 věci, které bychom automatizovali jako první, a dáme vám plán — i když si nás nenajmete.',
      bullets: ['Zkontrolujeme váš aktuální postup pro leady a operace', 'Identifikujeme vaše top 3 příležitosti pro automatizaci', 'Dostanete písemný akční plán — ať s námi budete spolupracovat nebo ne'],
      btn: 'Rezervovat bezplatný 30min audit →',
      footer: 'Tým v Praze · Česky i anglicky · Dodáváme za 2–3 týdny',
    },
  },
};

// ─── Utilities ────────────────────────────────────────────────────────────────
const FadeUp = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

function ProgressBar({ label, hours, max }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const pct = Math.round((hours / max) * 100);
  const suffix = hours === 1 ? 'hr/week' : 'hrs/day';

  return (
    <div ref={ref} className="re-bar-row">
      <span className="re-bar-label">{label}</span>
      <div className="re-bar-track">
        <motion.div
          className="re-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.3 }}
        />
      </div>
      <span className="re-bar-time">{hours} {suffix}</span>
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function RENav({ t, lang, setLang, onBook }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <nav className={`re-nav${scrolled ? ' re-nav--scrolled' : ''}`}>
      <div className="re-nav-pill">
        <a href="/" className="re-nav-logo">
          <img src="/images/logo/Oroginal.png" alt="Netsol AI" height={28} />
        </a>
        <div className="re-nav-right">
          <button className="re-lang-btn" onClick={() => setLang(l => l === 'cs' ? 'en' : 'cs')}>
            {t.nav.langToggle}
          </button>
          <button className="re-btn-primary re-nav-cta-pill" onClick={onBook}>
            {t.nav.cta}
          </button>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function FlowDiagram({ steps }) {
  return (
    <div className="re-flow">
      {steps.map((step, i) => (
        <div key={i} className="re-flow-item">
          <motion.div
            className="re-flow-box"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + i * 0.25, duration: 0.45 }}
          >
            <span className="re-flow-dot" />
            {step}
          </motion.div>
          {i < steps.length - 1 && (
            <motion.div
              className="re-flow-arrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.25 }}
            >↓</motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

function HeroSection({ t, variant, onBook, onScrollDown }) {
  const h1 = variant === 'b' ? t.hero.h1b : t.hero.h1a;
  return (
    <section className="re-hero" id="home">
      <div className="re-container re-hero-inner">
        <div className="re-hero-text">
          <FadeUp>
            <div className="re-hero-badge">
              <span className="re-badge-dot" />
              {t.hero.badge}
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="re-h1">
              {h1.map((line, i) => <span key={i}>{line}<br /></span>)}
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}><p className="re-hero-sub">{t.hero.sub}</p></FadeUp>
          <FadeUp delay={0.3}>
            <div className="re-hero-ctas">
              <button className="re-btn-primary re-btn-lg" onClick={onBook}>{t.hero.cta1}</button>
              <button className="re-btn-soft re-btn-lg" onClick={onScrollDown}>{t.hero.cta2}</button>
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="re-hero-stats">
              {t.hero.stats.map((s, i) => (
                <span key={i} className="re-stat-pill">{s}</span>
              ))}
            </div>
          </FadeUp>
        </div>
        <div className="re-hero-diagram">
          <FlowDiagram steps={t.hero.flow} />
        </div>
      </div>
    </section>
  );
}

// ─── Proof Bar ────────────────────────────────────────────────────────────────
function ProofBar({ t }) {
  return (
    <div className="re-proof-bar">
      <div className="re-proof-inner">
        {t.proof.map((item, i) => (
          <span key={i} className="re-proof-item">{item}</span>
        ))}
      </div>
    </div>
  );
}

// ─── Split Section ────────────────────────────────────────────────────────────
function SplitSection({ t, onTypeA, onTypeB, onBook }) {
  return (
    <section className="re-section re-split" id="challenges">
      <div className="re-container">
        <FadeUp className="re-section-head">
          <p className="re-eyebrow">{t.split.eyebrow}</p>
          <h2 className="re-h2">{t.split.title}</h2>
          <p className="re-section-sub">{t.split.sub}</p>
        </FadeUp>

        <div className="re-split-grid">
          <FadeUp delay={0.1}>
            <div className="re-split-card re-split-card--amber" onClick={onTypeA} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && onTypeA()}>
              <span className="re-card-num re-card-num--amber">{t.split.card1.num}</span>
              <h3 className="re-split-headline">{t.split.card1.headline}</h3>
              <ul className="re-split-points">
                {t.split.card1.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
              <button className="re-btn-amber">{t.split.card1.cta}</button>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="re-split-card re-split-card--purple" onClick={onTypeB} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && onTypeB()}>
              <span className="re-card-num re-card-num--purple">{t.split.card2.num}</span>
              <h3 className="re-split-headline">{t.split.card2.headline}</h3>
              <ul className="re-split-points">
                {t.split.card2.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
              <button className="re-btn-primary">{t.split.card2.cta}</button>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.3}>
          <div className="re-split-note">
            <p>{t.split.note}</p>
            <button className="re-link-btn" onClick={onBook}>{t.split.noteCta}</button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Solution A ───────────────────────────────────────────────────────────────
function SolutionASection({ t, onBook }) {
  return (
    <section className="re-section re-sol-a" id="solution-a">
      <div className="re-container">
        <FadeUp className="re-section-head">
          <p className="re-eyebrow re-eyebrow--amber">{t.solA.eyebrow}</p>
          <h2 className="re-h2">{t.solA.title}</h2>
        </FadeUp>

        <div className="re-steps-row">
          {t.solA.steps.map((step, i) => (
            <FadeUp key={i} delay={i * 0.1} className="re-step-wrap">
              <div className="re-step-card">
                <span className="re-step-n re-step-n--amber">{step.n}</span>
                <h4 className="re-step-title">{step.title}</h4>
                <p className="re-step-desc">{step.desc}</p>
              </div>
              {i < t.solA.steps.length - 1 && <span className="re-step-arr">→</span>}
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <div className="re-ba">
            <div className="re-ba-col">
              <h5 className="re-ba-head re-ba-head--bad">❌ Before Netsol AI</h5>
              {t.solA.before.map((item, i) => (
                <div key={i} className="re-ba-item re-ba-item--bad">{item}</div>
              ))}
            </div>
            <div className="re-ba-col">
              <h5 className="re-ba-head re-ba-head--good">✅ After Netsol AI</h5>
              {t.solA.after.map((item, i) => (
                <div key={i} className="re-ba-item re-ba-item--good">{item}</div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="re-section-cta">
            <button className="re-btn-amber re-btn-lg" onClick={onBook}>{t.solA.cta}</button>
            <p className="re-cta-sub">{t.solA.ctaSub}</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Solution B ───────────────────────────────────────────────────────────────
function SolutionBSection({ t, onBook }) {
  return (
    <section className="re-section re-sol-b" id="solution-b">
      <div className="re-container">
        <FadeUp className="re-section-head">
          <p className="re-eyebrow">{t.solB.eyebrow}</p>
          <h2 className="re-h2">
            {t.solB.title.map((line, i) => <span key={i}>{line}<br /></span>)}
          </h2>
        </FadeUp>

        <div className="re-steps-row">
          {t.solB.steps.map((step, i) => (
            <FadeUp key={i} delay={i * 0.1} className="re-step-wrap">
              <div className="re-step-card">
                <span className="re-step-n">{step.n}</span>
                <h4 className="re-step-title">{step.title}</h4>
                <p className="re-step-desc">{step.desc}</p>
              </div>
              {i < t.solB.steps.length - 1 && <span className="re-step-arr">→</span>}
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <div className="re-time-block">
            <h4 className="re-time-title">{t.solB.barTitle}</h4>
            <div className="re-bars">
              {t.solB.bars.map((bar, i) => <ProgressBar key={i} {...bar} />)}
            </div>
            <p className="re-time-footer">{t.solB.barFooter}</p>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="re-built-with">
            <p className="re-built-label">{t.solB.builtWith}</p>
            <div className="re-tools-row">
              {t.solB.tools.map((tool, i) => <span key={i} className="re-tool-pill">{tool}</span>)}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="re-section-cta">
            <button className="re-btn-primary re-btn-lg" onClick={onBook}>{t.solB.cta}</button>
            <p className="re-cta-sub">{t.solB.ctaSub}</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────
function ProcessSection({ t, onBook }) {
  return (
    <section className="re-section re-process" id="process">
      <div className="re-container">
        <FadeUp className="re-section-head">
          <p className="re-eyebrow">{t.process.eyebrow}</p>
          <h2 className="re-h2">{t.process.title}</h2>
        </FadeUp>

        <div className="re-steps-row">
          {t.process.steps.map((step, i) => (
            <FadeUp key={i} delay={i * 0.1} className="re-step-wrap">
              <div className="re-step-card re-step-card--process">
                <span className="re-step-n">{step.n}</span>
                <h4 className="re-step-title">{step.title}</h4>
                {step.sub && <p className="re-step-sub-label">{step.sub}</p>}
                <p className="re-step-desc">{step.desc}</p>
              </div>
              {i < t.process.steps.length - 1 && <span className="re-step-arr">→</span>}
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <div className="re-timeline">
            {t.process.timeline.map((item, i) => (
              <div key={i} className="re-tl-item">
                <div className="re-tl-dot" />
                {i < t.process.timeline.length - 1 && <div className="re-tl-line" />}
                <p className="re-tl-label">
                  {item.split('\n').map((line, j) => <span key={j}>{line}<br /></span>)}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="re-guarantee">
            {t.process.guarantee.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Packages ─────────────────────────────────────────────────────────────────
function PackagesSection({ t, onBook }) {
  return (
    <section className="re-section re-packages" id="packages">
      <div className="re-container">
        <FadeUp className="re-section-head">
          <p className="re-eyebrow">{t.packages.eyebrow}</p>
          <h2 className="re-h2">{t.packages.title}</h2>
          <p className="re-section-sub">{t.packages.sub}</p>
        </FadeUp>

        <div className="re-pkg-grid">
          {t.packages.cards.map((pkg, i) => (
            <FadeUp key={i} delay={i * 0.12}>
              <div className={`re-pkg-card${pkg.popular ? ' re-pkg-card--pop' : ''}`}>
                {pkg.popular && <div className="re-pkg-badge">{t.packages.popular}</div>}
                <h3 className="re-pkg-name">{pkg.name}</h3>
                <p className="re-pkg-price">{pkg.price}</p>
                <p className="re-pkg-delivery">{pkg.delivery}</p>
                <ul className="re-pkg-features">
                  {pkg.features.map((f, j) => <li key={j}><span className="re-pkg-check">✓</span>{f}</li>)}
                </ul>
                <p className="re-pkg-best"><em>{t.packages.bestFor}</em> {pkg.best}</p>
                <button className={`re-pkg-cta ${pkg.popular ? 're-btn-primary' : 're-btn-soft'}`} onClick={onBook}>
                  {t.packages.cta}
                </button>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="re-pkg-note">
            <p>{t.packages.note}</p>
            <p className="re-pkg-note2">{t.packages.note2}</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Case Studies ─────────────────────────────────────────────────────────────
function CasesSection({ t }) {
  return (
    <section className="re-section re-cases" id="work">
      <div className="re-container">
        <FadeUp className="re-section-head">
          <p className="re-eyebrow">{t.cases.eyebrow}</p>
          <h2 className="re-h2">{t.cases.title}</h2>
        </FadeUp>

        <div className="re-cases-grid">
          {t.cases.items.map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <a href={item.url} target="_blank" rel="noreferrer" className="re-case-card">
                <div className="re-case-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="re-case-body">
                  <span className="re-case-badge">{item.industry}</span>
                  <h4 className="re-case-name">{item.name}</h4>
                  <p className="re-case-result">"{item.result}"</p>
                  <p className="re-case-desc">{item.desc}</p>
                  <span className="re-case-link">{t.cases.view}</span>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQSection({ t }) {
  const [open, setOpen] = useState(null);
  return (
    <section className="re-section re-faq" id="faq">
      <div className="re-container re-faq-wrap">
        <FadeUp className="re-section-head">
          <p className="re-eyebrow">{t.faq.eyebrow}</p>
          <h2 className="re-h2">{t.faq.title}</h2>
        </FadeUp>

        <div className="re-faq-list">
          {t.faq.items.map((item, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className={`re-faq-item${open === i ? ' re-faq-item--open' : ''}`}>
                <button className="re-faq-q" onClick={() => setOpen(open === i ? null : i)}>
                  <span>{item.q}</span>
                  <span className="re-faq-icon">{open === i ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      className="re-faq-a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA({ t, onBook, ctaRef }) {
  return (
    <section className="re-final-cta" id="book" ref={ctaRef}>
      <div className="re-container re-final-inner">
        <FadeUp>
          <h2 className="re-final-h2">
            {t.cta.title.map((line, i) => <span key={i}>{line}<br /></span>)}
          </h2>
          <p className="re-final-sub">{t.cta.sub}</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <ul className="re-final-bullets">
            {t.cta.bullets.map((b, i) => <li key={i}>✓ {b}</li>)}
          </ul>
        </FadeUp>
        <FadeUp delay={0.2}>
          <button className="re-btn-white re-btn-lg" onClick={onBook}>{t.cta.btn}</button>
          <p className="re-final-footer">{t.cta.footer}</p>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function REFooter() {
  return (
    <footer className="re-footer">
      <div className="re-container re-footer-inner">
        <a href="/" className="re-footer-logo">
          <img src="/images/logo/Oroginal.png" alt="Netsol AI" height={26} />
        </a>
        <p className="re-footer-copy">© 2026 Netsol AI s.r.o. · Školská 660/3, Praha 1</p>
        <div className="re-footer-links">
          <a href="/privacy-policy">Privacy</a>
          <a href="/terms-and-conditions">Terms</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function RealEstatePage() {
  const [lang, setLang] = useState('cs');
  const [variant, setVariant] = useState('a');
  const [showBar, setShowBar] = useState(false);

  const heroRef = useRef(null);
  const solARef = useRef(null);
  const solBRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  const t = T[lang];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(k => {
      if (params.get(k)) sessionStorage.setItem(k, params.get(k));
    });
    if (params.get('v') === 'b') setVariant('b');
  }, []);

  useEffect(() => {
    const showObs = new IntersectionObserver(([e]) => setShowBar(!e.isIntersecting), { threshold: 0.2 });
    const hideObs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShowBar(false); }, { threshold: 0.1 });
    if (heroRef.current) showObs.observe(heroRef.current);
    if (ctaRef.current) hideObs.observe(ctaRef.current);
    return () => { showObs.disconnect(); hideObs.disconnect(); };
  }, []);

  const scrollTo = ref => ref.current?.scrollIntoView({ behavior: 'smooth' });

  const bookAudit = () => {
    if (window.fbq) window.fbq('track', 'Lead');
    window.open(CALENDLY, '_blank');
  };

  const handleTypeA = () => {
    if (window.fbq) window.fbq('trackCustom', 'ClickedTypeA');
    scrollTo(solARef);
  };

  const handleTypeB = () => {
    if (window.fbq) window.fbq('trackCustom', 'ClickedTypeB');
    scrollTo(solBRef);
  };

  return (
    <div className="re-page">
      <SEOHead
        title="AI systémy pro realitní kanceláře v Praze | Netsol AI"
        description="Netsol AI automatizuje realitní kanceláře v Praze — kvalifikace leadů, rezervace prohlídek, WhatsApp bot. Dodávka za 2–3 týdny. Rezervujte bezplatný AI audit."
        canonical="/real-estate"
      />

      <RENav t={t} lang={lang} setLang={setLang} onBook={bookAudit} />

      <div ref={heroRef}>
        <HeroSection t={t} variant={variant} onBook={bookAudit} onScrollDown={() => scrollTo(processRef)} />
      </div>

      <ProofBar t={t} />
      <SplitSection t={t} onTypeA={handleTypeA} onTypeB={handleTypeB} onBook={bookAudit} />

      <div ref={solARef}><SolutionASection t={t} onBook={bookAudit} /></div>
      <div ref={solBRef}><SolutionBSection t={t} onBook={bookAudit} /></div>

      <div ref={processRef}><ProcessSection t={t} onBook={bookAudit} /></div>

      <PackagesSection t={t} onBook={bookAudit} />
      <CasesSection t={t} />
      <FAQSection t={t} />
      <FinalCTA t={t} onBook={bookAudit} ctaRef={ctaRef} />
      <REFooter />

      <AnimatePresence>
        {showBar && (
          <motion.div
            className="re-mobile-bar"
            initial={{ y: 72 }}
            animate={{ y: 0 }}
            exit={{ y: 72 }}
            transition={{ duration: 0.25 }}
          >
            <button className="re-mobile-bar-btn" onClick={bookAudit}>{t.nav.cta}</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
