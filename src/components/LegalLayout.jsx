import SiteLayout from './SiteLayout';
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n/index';

export default function LegalLayout({ title, lastUpdated, children }) {
  const { lang } = useLanguage();
  const T = translations[lang];

  return (
    <SiteLayout>
      <div className="legal-hero">
        <div className="container legal-hero-inner">
          <p className="legal-eyebrow">{T.legal.eyebrow}</p>
          <h1 className="legal-title">{title}</h1>
          {lastUpdated && <p className="legal-date">{T.legal.lastUpdated} {lastUpdated}</p>}
        </div>
      </div>
      <section className="legal-body">
        <div className="container legal-content">
          {children}
        </div>
      </section>
    </SiteLayout>
  );
}
