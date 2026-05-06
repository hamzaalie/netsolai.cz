import { createContext, useContext, useState, useEffect } from 'react';
export const LanguageContext = createContext();
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'cs');
  const switchLang = (l) => { localStorage.setItem('lang', l); setLang(l); };
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return <LanguageContext.Provider value={{ lang, switchLang }}>{children}</LanguageContext.Provider>;
}
export const useLanguage = () => useContext(LanguageContext);
