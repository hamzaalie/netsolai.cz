import { useEffect } from 'react';
import SiteLayout from '../components/SiteLayout';
import SEOHead from '../components/SEOHead';

function useBinaryCanvas(id) {
  useEffect(() => {
    const canvas = document.getElementById(id);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '01';
    const fontSize = 13;
    let cols, rows, grid = [];

    const buildGrid = () => {
      cols = Math.ceil(canvas.width / (fontSize * 0.7)) + 2;
      rows = Math.ceil(canvas.height / (fontSize * 1.4)) + 2;
      grid = [];
      for (let c = 0; c < cols; c++) {
        grid[c] = [];
        for (let r = 0; r < rows; r++) {
          grid[c][r] = {
            char: chars[Math.floor(Math.random() * chars.length)],
            alpha: Math.random() * 0.25 + 0.08,
            changeAt: Math.random() * 12,
          };
        }
      }
    };
    buildGrid();
    window.addEventListener('resize', buildGrid);

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      ctx.textBaseline = 'top';
      const cw = fontSize * 0.7;
      const ch = fontSize * 1.4;
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const cell = grid[c][r];
          if (t > cell.changeAt) {
            cell.char = chars[Math.floor(Math.random() * chars.length)];
            cell.alpha = Math.random() * 0.28 + 0.07;
            cell.changeAt = t + Math.random() * 17 + 3;
          }
          ctx.fillStyle = `rgba(255,255,255,${cell.alpha})`;
          ctx.fillText(cell.char, c * cw, r * ch);
        }
      }
      t++;
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('resize', buildGrid);
    };
  }, [id]);
}

const BENEFITS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="#9c70ff" strokeWidth="1.5" />
        <path d="M7 11l3 3 5-5" stroke="#9c70ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Completely Free',
    desc: 'No credit card, no strings attached. A genuine 30-minute strategy session at zero cost.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2a7 7 0 100 14A7 7 0 0011 2z" stroke="#9c70ff" strokeWidth="1.5" />
        <path d="M11 6v5l3 2" stroke="#9c70ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 19c1.5-2 4-3 7-3s5.5 1 7 3" stroke="#9c70ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'AI Expert — Asghar Ali',
    desc: 'Speak directly with an AI specialist who has solved complex business challenges across multiple industries.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="3" width="18" height="15" rx="2" stroke="#9c70ff" strokeWidth="1.5" />
        <path d="M7 8h8M7 12h5" stroke="#9c70ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Tailored AI Roadmap',
    desc: "Walk away with a concrete plan for using AI in your specific business — not generic advice.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l2.5 6H20l-5 3.5 2 6.5L11 14l-6 4 2-6.5L2 8h6.5L11 2z" stroke="#9c70ff" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Real Solutions',
    desc: 'We identify the highest-impact AI automations for your workflow and show you exactly how to implement them.',
  },
];

export default function FreeConsultationPage() {
  useBinaryCanvas('consult-particles');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Free AI Consultation — Asghar Ali",
    "provider": {
      "@type": "Organization",
      "name": "Netsol AI s.r.o.",
      "url": "https://netsolai.cz"
    },
    "description": "Book a free 30-minute AI consultation with Asghar Ali. We help complex businesses implement AI solutions that drive real results.",
    "url": "https://netsolai.cz/free-consultation",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    }
  };

  return (
    <SiteLayout>
      <SEOHead
        title="Free AI Consultation with Asghar Ali | Netsol AI"
        description="Book a free 30-minute call with Asghar Ali. We'll analyse your complex business challenges and show you exactly how AI can solve them — no fluff, no cost."
        canonical="/free-consultation"
        jsonLd={jsonLd}
      />

      {/* ── HERO ── */}
      <div className="cta-banner-wrapper">
        <section className="cta-banner" aria-label="Free Consultation Hero">
          <div className="cta-bg" aria-hidden="true">
            <canvas id="consult-particles" className="cta-canvas" />
            <div className="cta-glow" />
          </div>
          <div className="cta-content">
            <p className="cta-eyebrow">100% Free · No Commitment</p>
            <h1 className="cta-headline">
              Book Your Free<br />
              <span style={{ color: '#9c70ff' }}>AI Strategy Call</span>
            </h1>
            <p className="cta-sub">
              Got a complex business problem? In 30 minutes, Asghar Ali will show you
              exactly how AI can solve it — and hand you a clear action plan to get started.
            </p>
            <div className="cta-actions">
              <a
                className="cta-btn-primary"
                href="#book"
              >
                Book Your Free Call
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ── CONSULTANT PROFILE ── */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className="consult-profile-card">

            {/* Avatar */}
            <div className="consult-avatar" aria-label="Asghar Ali">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="32" fill="url(#avatarGrad)" />
                <circle cx="32" cy="26" r="11" fill="rgba(255,255,255,0.15)" />
                <ellipse cx="32" cy="52" rx="18" ry="11" fill="rgba(255,255,255,0.12)" />
                <defs>
                  <linearGradient id="avatarGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7c3aed" />
                    <stop offset="1" stopColor="#4f46e5" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="consult-avatar-initials">AA</span>
            </div>

            {/* Bio */}
            <div className="consult-bio">
              <div className="consult-badge">Your Consultant</div>
              <h2 className="consult-name">Asghar Ali</h2>
              <p className="consult-role">AI Solutions Specialist · Netsol AI</p>
              <p className="consult-bio-text">
                Asghar specialises in helping complex businesses identify and implement
                AI-driven solutions that create real, measurable impact. From process
                automation to intelligent systems, he translates your biggest challenges
                into working AI solutions — fast.
              </p>
              <div className="consult-tags">
                <span className="consult-tag">AI Automation</span>
                <span className="consult-tag">Business Strategy</span>
                <span className="consult-tag">Process Optimisation</span>
                <span className="consult-tag">System Integration</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">What's Included</p>
          <div className="section-head">
            <h2>Everything in One 30-Minute Call</h2>
            <p>No sales pitch. No upsell pressure. Just expert advice tailored to your business.</p>
          </div>

          <div className="consult-benefits-grid">
            {BENEFITS.map((b, i) => (
              <div key={i} className="consult-benefit-card">
                <div className="consult-benefit-icon">{b.icon}</div>
                <h3 className="consult-benefit-title">{b.title}</h3>
                <p className="consult-benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING SECTION ── */}
      <section className="section" id="book">
        <div className="container">
          <div className="consult-book-card">
            <div className="consult-book-left">
              <p className="eyebrow">Ready to Start?</p>
              <h2>Book Your Free 30-Min Call</h2>
              <p className="consult-book-desc">
                Pick a time that works for you. Asghar will review your business
                challenge before the call so you get maximum value from every minute.
              </p>
              <ul className="consult-checklist">
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#9c70ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Free — no payment required
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#9c70ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  30 minutes via video call
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#9c70ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Tailored AI action plan included
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="#9c70ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Complex business problems welcome
                </li>
              </ul>
            </div>
            <div className="consult-book-right">
              <a
                href="https://calendly.com/PLACEHOLDER"
                target="_blank"
                rel="noreferrer"
                className="consult-book-btn"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="3" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 1v4M14 1v4M2 8h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Schedule on Calendly
              </a>
              <p className="consult-book-note">You'll be redirected to Calendly to pick your slot</p>
            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
