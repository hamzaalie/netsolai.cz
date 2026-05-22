import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CookieBanner from './CookieBanner';
import SiteFooter from './SiteFooter';
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n/index';

export default function SiteLayout({ children }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, switchLang } = useLanguage();
  const T = translations[lang];

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const navLinks = [
    { label: T.nav.home,      href: '/'          },
    { label: T.nav.about,     href: '/#about'    },
    { label: T.nav.services,  href: '/#services' },
    { label: T.nav.portfolio, href: '/#portfolio'},
    { label: T.nav.blog,      href: '/blog'      },
    { label: T.nav.tools,     href: '/nastroje'  },
  ];

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="topbar-pill">
          <Link className="brand" to="/">
            <img src="/images/logo/Oroginal.png" alt="NetSolAI" className="brand-logo" />
          </Link>

          {/* Desktop nav */}
          <nav className="nav-links" aria-label="Main Navigation">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="lang-switcher">
            <button
              className={`lang-btn${lang === 'en' ? ' lang-btn--active' : ''}`}
              onClick={() => switchLang('en')}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="lang-sep">|</span>
            <button
              className={`lang-btn${lang === 'cs' ? ' lang-btn--active' : ''}`}
              onClick={() => switchLang('cs')}
              aria-label="Přepnout do češtiny"
            >
              CS
            </button>
          </div>

          <Link className="topbar-cta" to="/contact">{T.nav.contact}</Link>

          {/* Hamburger — mobile only */}
          <button
            className={`nav-burger${open ? ' nav-burger--open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div className={`mob-nav${open ? ' mob-nav--open' : ''}`} aria-hidden={!open}>
        <nav className="mob-nav-links">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className="mob-nav-link" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <Link to="/contact" className="mob-nav-cta" onClick={() => setOpen(false)}>
            {T.nav.contact}
          </Link>
        </nav>
      </div>

      <main>{children}</main>
      <CookieBanner />

      <SiteFooter />
    </div>
  );
}
