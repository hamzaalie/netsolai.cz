import { useState, useEffect } from 'react';
import SiteLayout from '../components/SiteLayout';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n/index';

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

export default function ContactPage() {
  useBinaryCanvas('cp-canvas');
  const { lang } = useLanguage();
  const T = translations[lang];

  const INFO_ITEMS = [
    {
      label: T.contact.info.email,
      value: 'info@netsolai.cz',
      href: 'mailto:info@netsolai.cz',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M2 7l10 7 10-7"/>
        </svg>
      ),
    },
    {
      label: T.contact.info.phone,
      value: '+420 721 405 452',
      href: 'tel:+420721405452',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.8 12.4 19.79 19.79 0 0 1 1.72 3.82 2 2 0 0 1 3.69 1.6h3a2 2 0 0 1 2 1.72c.13 1 .39 1.98.74 2.93a2 2 0 0 1-.45 2.11L7.91 9.4A16 16 0 0 0 14.6 16.1l1.04-1.04a2 2 0 0 1 2.11-.45c.95.35 1.93.61 2.93.74A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
    },
    {
      label: T.contact.info.address,
      value: 'Netsol AI s.r.o.\nSídlo: Školská 660/3, Nové Město,\n110 00 Praha 1\nIČ: 249 79 333',
      href: 'https://maps.google.com/?q=Školská+660/3,+Praha+1',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
    },
  ];

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = T.contact.errors.nameReq;
    if (!form.email.trim()) e.email = T.contact.errors.emailReq;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = T.contact.errors.emailInvalid;
    if (!form.message.trim()) e.message = T.contact.errors.msgReq;
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send contact form');
      }

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Netsol AI s.r.o.",
    "url": "https://netsolai.cz",
    "telephone": "+420721405452",
    "email": "info@netsolai.cz",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Školská 660/3, Nové Město",
      "addressLocality": "Praha 1",
      "postalCode": "110 00",
      "addressCountry": "CZ"
    },
    "sameAs": [
      "https://www.facebook.com/netsolai.cz/",
      "https://www.instagram.com/netsolai/",
      "https://www.tiktok.com/@netsolai.cz"
    ]
  };

  return (
    <SiteLayout>
      <SEOHead
        title="Contact Netsol AI | Get in Touch with Our AI Agency in Prague"
        description="Reach out to Netsol AI — Prague's AI-powered digital agency. Call +420 721 405 452, email info@netsolai.cz, or use our contact form to start a conversation."
        canonical="/contact"
        jsonLd={[contactJsonLd]}
      />
      {/* ── Hero ── */}
      <div className="cta-banner-wrapper">
        <section className="cp-hero" aria-label="Contact hero">
          <div className="cta-bg" aria-hidden="true">
            <canvas id="cp-canvas" className="cta-canvas" />
            <div className="cta-glow" />
          </div>
          <div className="cp-hero-content">
            <span className="cp-hero-badge">{T.contact.heroBadge}</span>
            <h1 className="cp-hero-h1">
              {T.contact.heroH1.split('\n').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h1>
            <p className="cp-hero-sub">
              {T.contact.heroSub}
            </p>
          </div>
        </section>
      </div>

      {/* ── Main content ── */}
      <section className="cp-body">
        <div className="container cp-grid">

          {/* Contact form */}
          <div className="cp-form-col">
            <div className="cp-form-card">
              <h2 className="cp-form-title">{T.contact.formTitle}</h2>
              <p className="cp-form-subtitle">{T.contact.formSub}</p>

              {status === 'success' ? (
                <div className="cp-success">
                  <div className="cp-success-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="cp-success-title">{T.contact.success.title}</h3>
                  <p className="cp-success-text">{T.contact.success.text1} <strong>{form.email}</strong> {T.contact.success.text2}</p>
                  <button className="cp-btn-primary" onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                    {T.contact.success.again}
                  </button>
                </div>
              ) : (
                <form className="cp-form" onSubmit={handleSubmit} noValidate>
                  <div className="cp-row">
                    <div className={`cp-field${errors.name ? ' cp-field--err' : ''}`}>
                      <label className="cp-label">{T.contact.labels.name}</label>
                      <input className="cp-input" type="text" name="name" placeholder={T.contact.placeholders.name} value={form.name} onChange={handleChange} autoComplete="name" />
                      {errors.name && <span className="cp-err">{errors.name}</span>}
                    </div>
                    <div className={`cp-field${errors.email ? ' cp-field--err' : ''}`}>
                      <label className="cp-label">{T.contact.labels.email}</label>
                      <input className="cp-input" type="email" name="email" placeholder={T.contact.placeholders.email} value={form.email} onChange={handleChange} autoComplete="email" />
                      {errors.email && <span className="cp-err">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="cp-field">
                    <label className="cp-label">{T.contact.labels.subject} <span className="cp-optional">{T.contact.labels.optional}</span></label>
                    <input className="cp-input" type="text" name="subject" placeholder={T.contact.placeholders.subject} value={form.subject} onChange={handleChange} />
                  </div>

                  <div className={`cp-field${errors.message ? ' cp-field--err' : ''}`}>
                    <label className="cp-label">{T.contact.labels.message}</label>
                    <textarea className="cp-input cp-textarea" name="message" placeholder={T.contact.placeholders.message} value={form.message} onChange={handleChange} rows={6} />
                    {errors.message && <span className="cp-err">{errors.message}</span>}
                  </div>

                  {status === 'error' && (
                    <p className="cp-send-error">{T.contact.sendError || 'Failed to send — please email us directly at info@netsolai.cz'}</p>
                  )}

                  <button className="cp-btn-primary" type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? (
                      <span className="cp-btn-sending"><span className="cp-spinner" />{T.contact.sending}</span>
                    ) : T.contact.send}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info sidebar */}
          <aside className="cp-info-col">
            <div className="cp-info-card">
              <h3 className="cp-info-title">{T.contact.info.title}</h3>
              <div className="cp-info-items">
                {INFO_ITEMS.map(({ label, value, href, icon }) => (
                  <a key={label} className="cp-info-item" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    <div className="cp-info-icon">{icon}</div>
                    <div>
                      <p className="cp-info-label">{label}</p>
                      <p className="cp-info-value">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="cp-socials-card">
              <p className="cp-socials-label">{T.contact.info.follow}</p>
              <div className="cp-socials">
                <a href="https://www.facebook.com/netsolai.cz/" target="_blank" rel="noreferrer" className="cp-social" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://www.instagram.com/netsolai/" target="_blank" rel="noreferrer" className="cp-social" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="https://www.tiktok.com/@netsolai.cz" target="_blank" rel="noreferrer" className="cp-social" aria-label="TikTok">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
                </a>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </SiteLayout>
  );
}
