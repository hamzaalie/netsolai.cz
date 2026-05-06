import { useLanguage } from '../context/LanguageContext';
import LegalLayout from '../components/LegalLayout';

export default function CookiesPage() {
  const { lang } = useLanguage();
  return lang === 'cs' ? <CookiesCS /> : <CookiesEN />;
}

function CookiesEN() {
  return (
    <LegalLayout title="Cookies Policy" lastUpdated="April 27, 2026">

      <section className="legal-section">
        <p>This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.</p>
        <p>Cookies do not typically contain any information that personally identifies a user, but personal information that We store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our <a href="/privacy-policy" className="legal-link">Privacy Policy</a>.</p>
        <p>We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.</p>
      </section>

      <section className="legal-section">
        <h2>Interpretation and Definitions</h2>
        <h3>Interpretation</h3>
        <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
        <h3>Definitions</h3>
        <p>For the purposes of this Cookies Policy:</p>
        <ul>
          <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to Netsol AI s.r.o, Školská 660/3, Praha 1, 110 00.</li>
          <li><strong>Cookies</strong> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.</li>
          <li><strong>Website</strong> refers to Netsol AI s.r.o., accessible from <a href="https://netsolai.cz/" className="legal-link" target="_blank" rel="noreferrer">https://netsolai.cz/</a>.</li>
          <li><strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>The use of the Cookies</h2>
        <h3>Type of Cookies We Use</h3>
        <p>Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.</p>
        <p>Where required by law, We will request your consent before using Cookies that are not strictly necessary. Strictly necessary Cookies are used to provide the Website and cannot be switched off in our systems.</p>
        <p>We use both session and persistent Cookies for the purposes set out below:</p>

        <div className="legal-cookie-type">
          <h4>Necessary / Essential Cookies</h4>
          <p><strong>Type:</strong> Session Cookies</p>
          <p><strong>Administered by:</strong> Us</p>
          <p><strong>Purpose:</strong> These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
        </div>

        <div className="legal-cookie-type">
          <h4>Functionality Cookies</h4>
          <p><strong>Type:</strong> Persistent Cookies</p>
          <p><strong>Administered by:</strong> Us</p>
          <p><strong>Purpose:</strong> These Cookies allow Us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
        </div>
      </section>

      <section className="legal-section">
        <h2>Your Choices Regarding Cookies</h2>
        <p>If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with the Website. You may use this option for preventing the use of Cookies at any time.</p>
        <p>If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.</p>
        <p>If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser:</p>
        <ul>
          <li><a href="https://support.google.com/accounts/answer/32050" className="legal-link" target="_blank" rel="noreferrer">Google Chrome</a></li>
          <li><a href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="legal-link" target="_blank" rel="noreferrer">Microsoft Edge</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" className="legal-link" target="_blank" rel="noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="legal-link" target="_blank" rel="noreferrer">Apple Safari</a></li>
        </ul>
        <p>For any other web browser, please visit your web browser's official web pages.</p>
      </section>

      <section className="legal-section">
        <h2>Changes to this Cookies Policy</h2>
        <p>We may update this Cookies Policy from time to time. The "Last updated" date at the top indicates when it was last revised.</p>
      </section>

      <section className="legal-section">
        <h2>Contact Us</h2>
        <p>If you have any questions about this Cookies Policy, You can contact us by email: <a href="mailto:info@netsolai.cz" className="legal-link">info@netsolai.cz</a></p>
      </section>

    </LegalLayout>
  );
}

function CookiesCS() {
  return (
    <LegalLayout title="Zásady používání souborů cookie" lastUpdated="27. dubna 2026">

      <section className="legal-section">
        <p>Tyto zásady používání souborů cookie vysvětlují, co jsou soubory cookie a jak je používáme. Měli byste si tyto zásady přečíst, abyste porozuměli tomu, jaký typ souborů cookie používáme, jaké informace pomocí souborů cookie shromažďujeme a jak jsou tyto informace využívány.</p>
        <p>Soubory cookie obvykle neobsahují žádné informace, které by osobně identifikovaly uživatele, ale osobní informace, které o vás uchováváme, mohou být propojeny s informacemi uloženými v souborech cookie a získanými z nich. Další informace o tom, jak osobní údaje používáme, ukládáme a chráníme, naleznete v našich <a href="/privacy-policy" className="legal-link">Zásadách ochrany osobních údajů</a>.</p>
        <p>V souborech cookie, které používáme, neukládáme citlivé osobní informace, jako jsou poštovní adresy, hesla k účtům atd.</p>
      </section>

      <section className="legal-section">
        <h2>Výklad a definice</h2>
        <h3>Výklad</h3>
        <p>Slova, jejichž první písmeno je psáno velkým písmenem, mají význam definovaný za následujících podmínek. Následující definice mají stejný význam bez ohledu na to, zda se vyskytují v jednotném nebo množném čísle.</p>
        <h3>Definice</h3>
        <p>Pro účely těchto zásad používání souborů cookie:</p>
        <ul>
          <li><strong>Společnost</strong> (v těchto zásadách označována jako „Společnost", „my", „nás" nebo „naše") označuje Netsol AI s.r.o, Školská 660/3, Praha 1, 110 00.</li>
          <li><strong>Soubory cookie</strong> jsou malé soubory, které web ukládá do vašeho počítače, mobilního zařízení nebo jiného zařízení a které mimo jiné obsahují podrobnosti o vaší historii prohlížení na daném webu.</li>
          <li><strong>Web</strong> označuje Netsol AI s.r.o., přístupný na adrese <a href="https://netsolai.cz/" className="legal-link" target="_blank" rel="noreferrer">https://netsolai.cz/</a>.</li>
          <li><strong>Vy</strong> označuje fyzickou osobu, která přistupuje k webu nebo jej používá, nebo společnost, nebo jinou právnickou osobu, jménem níž taková fyzická osoba přistupuje k webu nebo jej používá, podle toho, co je relevantní.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>Používání souborů cookie</h2>
        <h3>Typy souborů cookie, které používáme</h3>
        <p>Soubory cookie mohou být „trvalé" nebo „relační". Trvalé soubory cookie zůstávají na vašem osobním počítači nebo mobilním zařízení i po přechodu do režimu offline, zatímco relační soubory cookie jsou odstraněny ihned po zavření webového prohlížeče.</p>
        <p>Pokud to vyžadují právní předpisy, před použitím souborů cookie, které nejsou nezbytně nutné, si vyžádáme váš souhlas. Nezbytně nutné soubory cookie slouží k provozu webu a nelze je v našich systémech vypnout.</p>
        <p>Pro níže uvedené účely používáme jak relační, tak trvalé soubory cookie:</p>

        <div className="legal-cookie-type">
          <h4>Nezbytné / základní soubory cookie</h4>
          <p><strong>Typ:</strong> Relační soubory cookie</p>
          <p><strong>Spravováno:</strong> Námi</p>
          <p><strong>Účel:</strong> Tyto soubory cookie jsou nezbytné pro poskytování služeb dostupných prostřednictvím webu a pro umožnění využívání některých jeho funkcí. Pomáhají ověřovat uživatele a předcházet podvodnému používání uživatelských účtů. Bez těchto souborů cookie nelze poskytovat vámi požadované služby a tyto soubory cookie používáme pouze za účelem jejich poskytování.</p>
        </div>

        <div className="legal-cookie-type">
          <h4>Funkční soubory cookie</h4>
          <p><strong>Typ:</strong> Trvalé soubory cookie</p>
          <p><strong>Spravováno:</strong> Námi</p>
          <p><strong>Účel:</strong> Tyto soubory cookie nám umožňují zapamatovat si volby, které provádíte při používání webu, jako je zapamatování přihlašovacích údajů nebo jazykových preferencí. Účelem těchto souborů cookie je poskytnout vám osobnější zážitek a vyhnout se nutnosti opakovaně zadávat preference při každém použití webu.</p>
        </div>
      </section>

      <section className="legal-section">
        <h2>Vaše možnosti ohledně souborů cookie</h2>
        <p>Pokud se chcete vyhnout používání souborů cookie na webu, musíte nejprve zakázat používání souborů cookie v prohlížeči a poté odstranit soubory cookie uložené v prohlížeči, které jsou přiřazeny k webu. Tuto možnost můžete kdykoli využít k zamezení používání souborů cookie.</p>
        <p>Pokud naše soubory cookie nepřijmete, může dojít k jistým obtížím při používání webu a některé funkce nemusí fungovat správně.</p>
        <p>Chcete-li odstranit soubory cookie nebo dát pokyn svému webovému prohlížeči k odstranění nebo odmítnutí souborů cookie, navštivte stránky nápovědy svého webového prohlížeče:</p>
        <ul>
          <li><a href="https://support.google.com/accounts/answer/32050" className="legal-link" target="_blank" rel="noreferrer">Google Chrome</a></li>
          <li><a href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="legal-link" target="_blank" rel="noreferrer">Microsoft Edge</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" className="legal-link" target="_blank" rel="noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="legal-link" target="_blank" rel="noreferrer">Apple Safari</a></li>
        </ul>
        <p>V případě jiného webového prohlížeče navštivte oficiální webové stránky vašeho prohlížeče.</p>
      </section>

      <section className="legal-section">
        <h2>Změny těchto zásad používání souborů cookie</h2>
        <p>Tyto zásady používání souborů cookie můžeme čas od času aktualizovat. Datum „Naposledy aktualizováno" v záhlaví označuje datum poslední revize.</p>
      </section>

      <section className="legal-section">
        <h2>Kontaktujte nás</h2>
        <p>Pokud máte jakékoli dotazy ohledně těchto zásad používání souborů cookie, kontaktujte nás e-mailem: <a href="mailto:info@netsolai.cz" className="legal-link">info@netsolai.cz</a></p>
      </section>

    </LegalLayout>
  );
}
