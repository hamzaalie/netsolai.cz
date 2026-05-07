import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n/index';

export default function SiteFooter() {
  const { lang } = useLanguage();
  const T = translations[lang];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="ft-head">
          <a href="mailto:info@netsolai.cz" className="ft-title-link">
            <h2 className="ft-title">{T.footer.getInTouch} <span className="ft-arrow">↗</span></h2>
          </a>
        </div>
        <div className="ft-rule" />
        <div className="ft-body">
          <div className="ft-left">
            <img src="/images/logo/White.png" alt="NetSolAI" className="ft-logo" />
            <p className="ft-tagline">{T.footer.tagline}</p>
            <div className="ft-details">
              <div>
                <p className="ft-label">{T.footer.address}</p>
                <p className="ft-text">Netsol AI s.r.o.<br />Sídlo: Školská 660/3, Nové Město,<br />110 00 Praha 1<br />IČ: 249 79 333</p>
              </div>
              <div>
                <p className="ft-label">{T.footer.contact}</p>
                <a href="mailto:info@netsolai.cz" className="ft-text ft-link">info@netsolai.cz</a>
                <a href="tel:+420721405452" className="ft-text ft-link">+420 721 405 452</a>
              </div>
            </div>
            <div className="ft-bar">
              <span className="ft-copy"><span className="ft-year">2026</span> <a href="https://netsolai.cz" className="ft-co">Netsol AI s.r.o.</a></span>
              <div className="ft-bar-line" />
              <div className="ft-socials">
                <a href="https://www.facebook.com/netsolai.cz/" target="_blank" rel="noreferrer" className="ft-social" aria-label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://www.instagram.com/netsolai/" target="_blank" rel="noreferrer" className="ft-social" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="https://www.tiktok.com/@netsolai.cz" target="_blank" rel="noreferrer" className="ft-social" aria-label="TikTok">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <nav className="ft-nav">
            {[
              { label: T.footer.links.home,      href: '/'                     },
              { label: T.footer.links.about,     href: '/#about'               },
              { label: T.footer.links.services,  href: '/#services'            },
              { label: T.footer.links.portfolio, href: '/#portfolio'           },
              { label: T.footer.links.contact,   href: '/contact'              },
              { label: T.footer.links.terms,     href: '/terms-and-conditions' },
              { label: T.footer.links.privacy,   href: '/privacy-policy'       },
              { label: T.footer.links.cookies,   href: '/cookies-policy'       },
            ].map(({ label, href }) => (
              <a key={href} href={href} className="ft-nav-link">{label}</a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
