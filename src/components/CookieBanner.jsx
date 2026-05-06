import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n/index';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();
  const T = translations[lang];

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-inner">
        <div className="cookie-text">
          <p className="cookie-title">{T.cookie.title}</p>
          <p className="cookie-desc">
            {T.cookie.desc}{' '}
            <Link to="/cookies-policy" className="cookie-link">{T.cookie.linkCookie}</Link>
            {' '}·{' '}
            <Link to="/privacy-policy" className="cookie-link">{T.cookie.linkPrivacy}</Link>
          </p>
        </div>
        <div className="cookie-actions">
          <button className="cookie-btn cookie-btn--decline" onClick={decline}>{T.cookie.decline}</button>
          <button className="cookie-btn cookie-btn--accept" onClick={accept}>{T.cookie.accept}</button>
        </div>
      </div>
    </div>
  );
}
