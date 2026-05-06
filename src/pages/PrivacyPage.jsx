import { useLanguage } from '../context/LanguageContext';
import LegalLayout from '../components/LegalLayout';

export default function PrivacyPage() {
  const { lang } = useLanguage();
  return lang === 'cs' ? <PrivacyCS /> : <PrivacyEN />;
}

function PrivacyEN() {
  return (
    <LegalLayout title="Privacy Policy">

      <section className="legal-section">
        <h2>Who we are</h2>
        <p>Our website address is: <a href="https://netsolai.cz" className="legal-link" target="_blank" rel="noreferrer">https://netsolai.cz</a>.</p>
      </section>

      <section className="legal-section">
        <h2>Comments</h2>
        <p>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection.</p>
        <p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: <a href="https://automattic.com/privacy/" className="legal-link" target="_blank" rel="noreferrer">https://automattic.com/privacy/</a>. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
      </section>

      <section className="legal-section">
        <h2>Media</h2>
        <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>
      </section>

      <section className="legal-section">
        <h2>Cookies</h2>
        <p>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
        <p>If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
        <p>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
        <p>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>
      </section>

      <section className="legal-section">
        <h2>Embedded content from other websites</h2>
        <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
        <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
      </section>

      <section className="legal-section">
        <h2>Who we share your data with</h2>
        <p>If you request a password reset, your IP address will be included in the reset email.</p>
      </section>

      <section className="legal-section">
        <h2>How long we retain your data</h2>
        <p>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p>
        <p>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>
      </section>

      <section className="legal-section">
        <h2>What rights you have over your data</h2>
        <p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
      </section>

      <section className="legal-section">
        <h2>Where your data is sent</h2>
        <p>Visitor comments may be checked through an automated spam detection service.</p>
      </section>

      <section className="legal-section">
        <h2>Contact</h2>
        <p>If you have any questions about this Privacy Policy, you can contact us at <a href="mailto:info@netsolai.cz" className="legal-link">info@netsolai.cz</a>.</p>
      </section>

    </LegalLayout>
  );
}

function PrivacyCS() {
  return (
    <LegalLayout title="Zásady ochrany osobních údajů" lastUpdated="27. dubna 2026">

      <section className="legal-section">
        <h2>Kdo jsme</h2>
        <p>Adresa našeho webu je: <a href="https://netsolai.cz" className="legal-link" target="_blank" rel="noreferrer">https://netsolai.cz</a>.</p>
      </section>

      <section className="legal-section">
        <h2>Komentáře</h2>
        <p>Když návštěvníci zanechávají komentáře na webu, shromažďujeme data zobrazená ve formuláři komentářů, a také IP adresu návštěvníka a řetězec uživatelského agenta prohlížeče, abychom pomohli s detekcí spamu.</p>
        <p>Anonymizovaný řetězec vytvořený z vaší e-mailové adresy (označovaný také jako hash) může být poskytnut službě Gravatar, aby bylo zjištěno, zda ji používáte. Zásady ochrany soukromí služby Gravatar jsou k dispozici zde: <a href="https://automattic.com/privacy/" className="legal-link" target="_blank" rel="noreferrer">https://automattic.com/privacy/</a>. Po schválení vašeho komentáře je váš profilový obrázek viditelný veřejnosti v kontextu vašeho komentáře.</p>
      </section>

      <section className="legal-section">
        <h2>Média</h2>
        <p>Pokud nahráváte obrázky na web, měli byste se vyvarovat nahrávání obrázků se zahrnutými daty o poloze (EXIF GPS). Návštěvníci webu mohou stahovat a extrahovat jakákoli data o poloze z obrázků na webu.</p>
      </section>

      <section className="legal-section">
        <h2>Soubory cookie</h2>
        <p>Pokud zanecháte komentář na našem webu, můžete se přihlásit k ukládání svého jména, e-mailové adresy a webu v souborech cookie. Jsou to pro vaše pohodlí, abyste nemuseli vyplňovat své údaje znovu, když zanecháte další komentář. Tyto soubory cookie vydrží jeden rok.</p>
        <p>Pokud navštívíte naši přihlašovací stránku, nastavíme dočasný soubor cookie, abychom zjistili, zda váš prohlížeč přijímá soubory cookie. Tento soubor cookie neobsahuje žádné osobní údaje a je odstraněn při zavření prohlížeče.</p>
        <p>Když se přihlásíte, nastavíme také několik souborů cookie pro uložení vašich přihlašovacích informací a voleb zobrazení obrazovky. Přihlašovací soubory cookie vydrží dva dny a soubory cookie pro možnosti obrazovky vydrží rok. Pokud vyberete možnost „Zapamatovat si mě", vaše přihlášení bude trvat dva týdny. Pokud se odhlásíte ze svého účtu, přihlašovací soubory cookie budou odstraněny.</p>
        <p>Pokud upravíte nebo publikujete článek, bude ve vašem prohlížeči uložen další soubor cookie. Tento soubor cookie neobsahuje žádné osobní údaje a jednoduše označuje ID příspěvku článku, který jste právě upravili. Vyprší po 1 dni.</p>
      </section>

      <section className="legal-section">
        <h2>Vložený obsah z jiných webů</h2>
        <p>Články na tomto webu mohou obsahovat vložený obsah (např. videa, obrázky, články atd.). Vložený obsah z jiných webů se chová úplně stejně, jako kdyby návštěvník navštívil druhý web.</p>
        <p>Tyto weby mohou shromažďovat data o vás, používat soubory cookie, vkládat další sledování třetích stran a sledovat vaši interakci s tímto vloženým obsahem, včetně sledování vaší interakce s vloženým obsahem, pokud máte účet a jste přihlášeni na tomto webu.</p>
      </section>

      <section className="legal-section">
        <h2>S kým sdílíme vaše data</h2>
        <p>Pokud požádáte o obnovení hesla, vaše IP adresa bude zahrnuta do e-mailu pro obnovení.</p>
      </section>

      <section className="legal-section">
        <h2>Jak dlouho uchováváme vaše data</h2>
        <p>Pokud zanecháte komentář, komentář a jeho metadata jsou uchovávány po dobu neurčitou. Umožňuje nám to automaticky rozpoznat a schválit jakékoli navazující komentáře, místo abychom je podrželi ve frontě moderace.</p>
        <p>U uživatelů, kteří se zaregistrují na našem webu (pokud existují), ukládáme také osobní informace, které poskytují ve svém uživatelském profilu. Všichni uživatelé mohou kdykoli zobrazit, upravit nebo odstranit své osobní informace (kromě toho nemohou změnit své uživatelské jméno). Administrátoři webu mohou tyto informace také zobrazit a upravit.</p>
      </section>

      <section className="legal-section">
        <h2>Jaká práva máte nad svými daty</h2>
        <p>Pokud máte na tomto webu účet nebo jste zanechali komentáře, můžete požádat o obdržení exportovaného souboru osobních údajů, které o vás uchováváme, včetně veškerých dat, která jste nám poskytli. Můžete také požádat, abychom vymazali veškeré osobní údaje, které o vás uchováváme. To nezahrnuje žádná data, která jsme povinni uchovávat pro administrativní, právní nebo bezpečnostní účely.</p>
      </section>

      <section className="legal-section">
        <h2>Kam jsou vaše data odesílána</h2>
        <p>Komentáře návštěvníků mohou být kontrolovány prostřednictvím automatizované služby detekce spamu.</p>
      </section>

      <section className="legal-section">
        <h2>Kontakt</h2>
        <p>Pokud máte jakékoli dotazy ohledně těchto zásad ochrany osobních údajů, kontaktujte nás na <a href="mailto:info@netsolai.cz" className="legal-link">info@netsolai.cz</a>.</p>
      </section>

    </LegalLayout>
  );
}
