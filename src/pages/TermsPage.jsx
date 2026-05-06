import { useLanguage } from '../context/LanguageContext';
import LegalLayout from '../components/LegalLayout';
import SEOHead from '../components/SEOHead';

export default function TermsPage() {
  const { lang } = useLanguage();
  return (
    <>
      <SEOHead
        title="Terms & Conditions | Netsol AI"
        description="Read the terms and conditions governing use of Netsol AI's services and website."
        canonical="/terms-and-conditions"
        noIndex={false}
      />
      {lang === 'cs' ? <TermsCS /> : <TermsEN />}
    </>
  );
}

function TermsEN() {
  return (
    <LegalLayout title="Terms and Conditions" lastUpdated="April 27, 2026">

      <section className="legal-section">
        <h2>1. Introduction</h2>
        <p>These Terms and conditions apply to this website and to the transactions related to our products and services. You may be bound by additional contracts related to your relationship with us or any products or services that you receive from us. If any provisions of the additional contracts conflict with any provisions of these Terms, the provisions of these additional contracts will control and prevail.</p>
      </section>

      <section className="legal-section">
        <h2>2. Binding</h2>
        <p>By registering with, accessing, or otherwise using this website, you hereby agree to be bound by these Terms and conditions set forth below. The mere use of this website implies the knowledge and acceptance of these Terms and conditions. In some particular cases, we can also ask you to explicitly agree.</p>
      </section>

      <section className="legal-section">
        <h2>3. Electronic communication</h2>
        <p>By using this website or communicating with us by electronic means, you agree and acknowledge that we may communicate with you electronically on our website or by sending an email to you, and you agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement, including but not limited to the requirement that such communications should be in writing.</p>
      </section>

      <section className="legal-section">
        <h2>4. Intellectual property</h2>
        <p>We or our licensors own and control all of the copyright and other intellectual property rights in the website and the data, information, and other resources displayed by or accessible within the website.</p>
        <h3>4.1 All the rights are reserved</h3>
        <p>Unless specific content dictates otherwise, you are not granted a license or any other right under Copyright, Trademark, Patent, or other Intellectual Property Rights. This means that you will not use, copy, reproduce, perform, display, distribute, embed into any electronic medium, alter, reverse engineer, decompile, transfer, download, transmit, monetize, sell, market, or commercialize any resources on this website in any form, without our prior written permission, except and only insofar as otherwise stipulated in regulations of mandatory law (such as the right to quote).</p>
      </section>

      <section className="legal-section">
        <h2>5. Third-party property</h2>
        <p>Our website may include hyperlinks or other references to other party's websites. We do not monitor or review the content of other party's websites which are linked to from this website. Products or services offered by other websites shall be subject to the applicable Terms and Conditions of those third parties. Opinions expressed or material appearing on those websites are not necessarily shared or endorsed by us.</p>
        <p>We will not be responsible for any privacy practices or content of these sites. You bear all risks associated with the use of these websites and any related third-party services. We will not accept any responsibility for any loss or damage in whatever manner, however caused, resulting from your disclosure to third parties of personal information.</p>
      </section>

      <section className="legal-section">
        <h2>6. Responsible use</h2>
        <p>By visiting our website, you agree to use it only for the purposes intended and as permitted by these Terms, any additional contracts with us, and applicable laws, regulations, and generally accepted online practices and industry guidelines. You must not use our website or services to use, publish or distribute any material which consists of (or is linked to) malicious computer software; use data collected from our website for any direct marketing activity, or conduct any systematic or automated data collection activities on or in relation to our website.</p>
        <p>Engaging in any activity that causes, or may cause, damage to the website or that interferes with the performance, availability, or accessibility of the website is strictly prohibited.</p>
      </section>

      <section className="legal-section">
        <h2>7. Refund and Return policy</h2>
        <h3>7.1 Right of withdrawal</h3>
        <p>You have the right to withdraw from this contract within 14 days without giving any reason.</p>
        <p>To exercise the right of withdrawal, you must inform us of your decision to withdraw from this contract by an unequivocal statement (for example a letter sent by post, fax, or email). Our contact details can be found below. You may use the attached model withdrawal form, but it is not obligatory.</p>
        <p>If you use this option, we will communicate to you an acknowledgement of receipt of such a withdrawal on a durable medium (for example by email) without delay.</p>
        <p>To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of withdrawal before the withdrawal period has expired.</p>
        <h3>7.2 Effects of withdrawal</h3>
        <p>If you withdraw from this contract, we shall reimburse you all payments received from you, including the costs of delivery (with the exception of the supplementary costs resulting from your choice of a type of delivery other than the least expensive type of standard delivery offered by us), without undue delay and in any event not later than 14 days from the day on which we are informed about your decision to withdraw from this contract. We will carry out such reimbursement using the same means of payment as you used for the initial transaction unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of such reimbursement.</p>
        <p>You are only liable for any diminished value of the goods resulting from the handling other than what is necessary to establish the nature, characteristics, and functioning of the goods.</p>
        <p>Please note that there are some legal exceptions to the right to withdraw, and some items can therefore not be returned or exchanged. We will let you know if this applies in your particular case.</p>
      </section>

      <section className="legal-section">
        <h2>8. Idea submission</h2>
        <p>Do not submit any ideas, inventions, works of authorship, or other information that can be considered your own intellectual property that you would like to present to us unless we have first signed an agreement regarding the intellectual property or a non-disclosure agreement. If you disclose it to us absent such written agreement, you grant to us a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, store, adapt, publish, translate and distribute your content in any existing or future media.</p>
      </section>

      <section className="legal-section">
        <h2>9. Termination of use</h2>
        <p>We may, in our sole discretion, at any time modify or discontinue access to, temporarily or permanently, the website or any Service thereon. You agree that we will not be liable to you or any third party for any such modification, suspension or discontinuance of your access to, or use of, the website or any content that you may have shared on the website. You will not be entitled to any compensation or other payment, even if certain features, settings, and/or any Content you have contributed or have come to rely on, are permanently lost. You must not circumvent or bypass, or attempt to circumvent or bypass, any access restriction measures on our website.</p>
      </section>

      <section className="legal-section">
        <h2>10. Warranties and liability</h2>
        <p>Nothing in this section will limit or exclude any warranty implied by law that it would be unlawful to limit or to exclude. This website and all content on the website are provided on an "as is" and "as available" basis and may include inaccuracies or typographical errors. We expressly disclaim all warranties of any kind, whether express or implied, as to the availability, accuracy, or completeness of the Content. We make no warranty that:</p>
        <ul>
          <li>this website or our content will meet your requirements;</li>
          <li>this website will be available on an uninterrupted, timely, secure, or error-free basis.</li>
        </ul>
        <p>Nothing on this website constitutes or is meant to constitute, legal, financial or medical advice of any kind. If you require advice you should consult an appropriate professional.</p>
        <p>The following provisions of this section will apply to the maximum extent permitted by applicable law and will not limit or exclude our liability in respect of any matter which it would be unlawful or illegal for us to limit or to exclude our liability. In no event will we be liable for any direct or indirect damages (including any damages for loss of profits or revenue, loss or corruption of data, software or database, or loss of or harm to property or data) incurred by you or any third party, arising from your access to, or use of, our website.</p>
        <p>Except to the extent any additional contract expressly states otherwise, our maximum liability to you for all damages arising out of or related to the website or any products and services marketed or sold through the website, regardless of the form of legal action that imposes liability (whether in contract, equity, negligence, intended conduct, tort or otherwise) will be limited to the total price that you paid to us to purchase such products or services or use the website. Such limit will apply in the aggregate to all of your claims, actions and causes of action of every kind and nature.</p>
      </section>

      <section className="legal-section">
        <h2>11. Privacy</h2>
        <p>To access our website and/or services, you may be required to provide certain information about yourself as part of the registration process. You agree that any information you provide will always be accurate, correct, and up to date.</p>
        <p>We have developed a policy to address any privacy concerns you may have. For more information, please see our <a href="/privacy-policy" className="legal-link">Privacy Statement</a> and our <a href="/cookies-policy" className="legal-link">Cookie Policy</a>.</p>
      </section>

      <section className="legal-section">
        <h2>12. Accessibility</h2>
        <p>We are committed to making the content we provide accessible to individuals with disabilities. If you have a disability and are unable to access any portion of our website due to your disability, we ask you to give us a notice including a detailed description of the issue you encountered. If the issue is readily identifiable and resolvable in accordance with industry-standard information technology tools and techniques we will promptly resolve it.</p>
      </section>

      <section className="legal-section">
        <h2>13. Export restrictions / Legal compliance</h2>
        <p>Access to the website from territories or countries where the Content or purchase of the products or Services sold on the website is illegal is prohibited. You may not use this website in violation of export laws and regulations of Czech Republic.</p>
      </section>

      <section className="legal-section">
        <h2>14. Assignment</h2>
        <p>You may not assign, transfer or sub-contract any of your rights and/or obligations under these Terms and conditions, in whole or in part, to any third party without our prior written consent. Any purported assignment in violation of this Section will be null and void.</p>
      </section>

      <section className="legal-section">
        <h2>15. Breaches of these Terms and conditions</h2>
        <p>Without prejudice to our other rights under these Terms and Conditions, if you breach these Terms and Conditions in any way, we may take such action as we deem appropriate to deal with the breach, including temporarily or permanently suspending your access to the website, contacting your internet service provider to request that they block your access to the website, and/or commence legal action against you.</p>
      </section>

      <section className="legal-section">
        <h2>16. Force majeure</h2>
        <p>Except for obligations to pay money hereunder, no delay, failure or omission by either party to carry out or observe any of its obligations hereunder will be deemed to be a breach of these Terms and conditions if and for as long as such delay, failure or omission arises from any cause beyond the reasonable control of that party.</p>
      </section>

      <section className="legal-section">
        <h2>17. Indemnification</h2>
        <p>You agree to indemnify, defend and hold us harmless, from and against any and all claims, liabilities, damages, losses and expenses, relating to your violation of these Terms and conditions, and applicable laws, including intellectual property rights and privacy rights. You will promptly reimburse us for our damages, losses, costs and expenses relating to or arising out of such claims.</p>
      </section>

      <section className="legal-section">
        <h2>18. Waiver</h2>
        <p>Failure to enforce any of the provisions set out in these Terms and Conditions and any Agreement, or failure to exercise any option to terminate, shall not be construed as waiver of such provisions and shall not affect the validity of these Terms and Conditions or of any Agreement or any part thereof, or the right thereafter to enforce each and every provision.</p>
      </section>

      <section className="legal-section">
        <h2>19. Language</h2>
        <p>These Terms and Conditions will be interpreted and construed exclusively in English. All notices and correspondence will be written exclusively in that language.</p>
      </section>

      <section className="legal-section">
        <h2>20. Entire agreement</h2>
        <p>These Terms and Conditions, together with our privacy statement and cookie policy, constitute the entire agreement between you and Netsol AI s.r.o in relation to your use of this website.</p>
      </section>

      <section className="legal-section">
        <h2>21. Updating of these Terms and conditions</h2>
        <p>We may update these Terms and Conditions from time to time. The date provided at the beginning of these Terms and Conditions is the latest revision date. We will give you a written notice of any changes or updates, and the revised Terms and Conditions will become effective from the date that we give you such a notice. Your continued use of this website following the posting of changes or updates will be considered notice of your acceptance to abide by and be bound by these Terms and Conditions. To request a prior version of these Terms and conditions, please contact us.</p>
      </section>

      <section className="legal-section">
        <h2>22. Choice of Law and Jurisdiction</h2>
        <p>These Terms and Conditions shall be governed by the laws of Czech Republic. Any disputes relating to these Terms and Conditions shall be subject to the jurisdiction of the courts of Czech Republic. If any part or provision of these Terms and Conditions is found by a court or other authority to be invalid and/or unenforceable under applicable law, such part or provision will be modified, deleted and/or enforced to the maximum extent permissible so as to give effect to the intent of these Terms and Conditions. The other provisions will not be affected.</p>
      </section>

      <section className="legal-section">
        <h2>23. Contact information</h2>
        <p>This website is owned and operated by Netsol AI s.r.o.</p>
        <p>You may contact us regarding these Terms and Conditions by writing or emailing us at the following address: <a href="mailto:info@netsolai.cz" className="legal-link">info@netsolai.cz</a><br />Školská 660/3, Nové Město, 110 00 Praha 1</p>
      </section>

    </LegalLayout>
  );
}

function TermsCS() {
  return (
    <LegalLayout title="Obchodní podmínky" lastUpdated="27. dubna 2026">

      <section className="legal-section">
        <h2>1. Úvod</h2>
        <p>Tyto obchodní podmínky se vztahují na tento web a na transakce související s našimi produkty a službami. Mohou na vás být uplatněny i dodatkové smlouvy související s vaším vztahem s námi nebo s produkty či službami, které od nás obdržíte. Pokud jsou ustanovení dodatkových smluv v rozporu s ustanoveními těchto podmínek, budou mít přednost a kontrolu nad nimi ustanovení dodatkových smluv.</p>
      </section>

      <section className="legal-section">
        <h2>2. Závaznost</h2>
        <p>Registrací, přístupem nebo jiným používáním tohoto webu tímto souhlasíte s níže uvedenými obchodními podmínkami. Samotné používání tohoto webu znamená znalost a přijetí těchto podmínek. V některých konkrétních případech vás můžeme také požádat o výslovný souhlas.</p>
      </section>

      <section className="legal-section">
        <h2>3. Elektronická komunikace</h2>
        <p>Používáním tohoto webu nebo komunikací s námi elektronickými prostředky souhlasíte a berete na vědomí, že s vámi můžeme komunikovat elektronicky prostřednictvím tohoto webu nebo zasíláním e-mailů, a souhlasíte s tím, že všechny dohody, oznámení, sdělení a jiné komunikace, které vám poskytujeme elektronicky, splňují veškeré zákonné požadavky, mimo jiné i požadavek, aby taková komunikace byla v písemné formě.</p>
      </section>

      <section className="legal-section">
        <h2>4. Duševní vlastnictví</h2>
        <p>My nebo naši poskytovatelé licencí vlastníme a kontrolujeme veškerá autorská práva a jiná práva duševního vlastnictví na webu a na datech, informacích a dalších zdrojích zobrazených na webu nebo přístupných jeho prostřednictvím.</p>
        <h3>4.1 Všechna práva vyhrazena</h3>
        <p>Pokud konkrétní obsah nestanoví jinak, není vám udělena licence ani jiné právo podle autorského práva, ochranných známek, patentů ani jiných práv duševního vlastnictví. To znamená, že bez našeho předchozího písemného souhlasu nebudete používat, kopírovat, reprodukovat, provádět, zobrazovat, distribuovat, vkládat do jakéhokoli elektronického média, měnit, zpětně analyzovat, dekompilovat, přenášet, stahovat, přenášet, zpeněžovat, prodávat, uvádět na trh ani komercionalizovat žádné zdroje na tomto webu, ledaže by to bylo jinak stanoveno v závazných právních předpisech (jako je právo na citaci).</p>
      </section>

      <section className="legal-section">
        <h2>5. Majetek třetích stran</h2>
        <p>Náš web může obsahovat hypertextové odkazy nebo jiné reference na weby třetích stran. Nesledujeme ani nekontrolujeme obsah webů třetích stran, které jsou z tohoto webu propojeny. Produkty nebo služby nabízené jinými weby podléhají příslušným obchodním podmínkám těchto třetích stran. Názory vyjádřené nebo materiály zobrazené na těchto webech nejsou nutně sdíleny ani schvalovány námi.</p>
        <p>Neneseme odpovědnost za žádné zásady ochrany soukromí ani obsah těchto stránek. Nesete veškerá rizika spojená s používáním těchto webových stránek a jakýchkoli souvisejících služeb třetích stran. Nepřebíráme žádnou odpovědnost za jakoukoli ztrátu nebo škodu, ať již způsobenou jakýmkoli způsobem, vzniklou v důsledku vašeho sdělení osobních informací třetím stranám.</p>
      </section>

      <section className="legal-section">
        <h2>6. Odpovědné používání</h2>
        <p>Návštěvou našeho webu souhlasíte s jeho používáním pouze pro zamýšlené účely a v souladu s těmito podmínkami, případnými dodatkovými smlouvami s námi a platnými zákony, předpisy a obecně uznávanými online postupy a oborovými směrnicemi. Nesmíte používat náš web ani naše služby k používání, zveřejňování nebo šíření materiálů, které obsahují (nebo odkazují na) škodlivý počítačový software; využívat data shromážděná z našeho webu pro jakékoli aktivity přímého marketingu ani provádět na webu ani ve vztahu k němu systematické nebo automatizované shromažďování dat.</p>
        <p>Zapojení do jakékoli činnosti, která způsobuje nebo může způsobit poškození webu nebo která narušuje výkon, dostupnost nebo přístupnost webu, je přísně zakázáno.</p>
      </section>

      <section className="legal-section">
        <h2>7. Zásady vrácení zboží a odstoupení od smlouvy</h2>
        <h3>7.1 Právo na odstoupení</h3>
        <p>Máte právo odstoupit od této smlouvy do 14 dnů bez udání důvodu.</p>
        <p>Chcete-li uplatnit právo na odstoupení od smlouvy, musíte nás o svém rozhodnutí odstoupit od této smlouvy informovat jednoznačným prohlášením (například dopisem zaslaným poštou, faxem nebo e-mailem). Naše kontaktní údaje naleznete níže. Můžete použít přiložený vzorový formulář pro odstoupení od smlouvy, není to však povinné.</p>
        <p>Pokud tuto možnost využijete, bez zbytečného odkladu vám potvrdíme přijetí takového odstoupení na trvalém nosiči (například e-mailem).</p>
        <p>Pro dodržení lhůty pro odstoupení od smlouvy stačí, abyste nám zaslali oznámení o uplatnění práva na odstoupení od smlouvy před uplynutím lhůty pro odstoupení.</p>
        <h3>7.2 Důsledky odstoupení</h3>
        <p>Pokud od smlouvy odstoupíte, vrátíme vám všechny platby, které jsme od vás obdrželi, včetně nákladů na doručení (s výjimkou dodatečných nákladů vzniklých v důsledku vašeho výběru jiného způsobu doručení, než je nejlevnější standardní způsob doručení, který nabízíme), a to bez zbytečného odkladu, nejpozději do 14 dnů ode dne, kdy jsme byli informováni o vašem rozhodnutí odstoupit od smlouvy. Tuto úhradu provedeme stejným platebním prostředkem, který jste použili při původní transakci, pokud jste výslovně nesouhlasili s jiným způsobem; v žádném případě vám v důsledku této úhrady nevzniknou žádné poplatky.</p>
        <p>Odpovídáte pouze za jakékoli snížení hodnoty zboží vyplývající z manipulace, která je nad rámec toho, co je nezbytné pro zjištění povahy, vlastností a funkčnosti zboží.</p>
        <p>Upozorňujeme, že právo na odstoupení má určité zákonné výjimky a některé položky proto nelze vrátit ani vyměnit. Pokud se to týká vašeho konkrétního případu, dáme vám vědět.</p>
      </section>

      <section className="legal-section">
        <h2>8. Předkládání nápadů</h2>
        <p>Nepředkládejte nám žádné nápady, vynálezy, autorská díla ani jiné informace, které mohou být považovány za vaše vlastní duševní vlastnictví a které nám chcete předložit, pokud jsme předtím nepodepsali dohodu týkající se duševního vlastnictví nebo dohodu o mlčenlivosti. Pokud nám tyto informace poskytnete bez takové písemné dohody, udělujete nám celosvětovou, neodvolatelnou, nevýhradní licenci bez licenčních poplatků k používání, reprodukci, ukládání, přizpůsobování, publikování, překládání a distribuci vašeho obsahu v jakýchkoli stávajících nebo budoucích médiích.</p>
      </section>

      <section className="legal-section">
        <h2>9. Ukončení používání</h2>
        <p>Můžeme dle vlastního uvážení kdykoli upravit nebo přerušit přístup k webu nebo jakékoli jeho službě, dočasně nebo trvale. Souhlasíte s tím, že neneseme vůči vám ani žádné třetí straně odpovědnost za jakoukoli takovou úpravu, pozastavení nebo přerušení vašeho přístupu k webu nebo jeho používání ani za jakýkoli obsah, který jste na webu mohli sdílet nebo na který jste se spolehli. Nebudete mít nárok na jakoukoli kompenzaci ani jiné plnění, i kdyby určité funkce, nastavení a/nebo jakýkoli obsah, který jste přispěli nebo na který jste se spolehli, byly trvale ztraceny. Nesmíte obcházet ani se pokoušet obcházet žádná opatření k omezení přístupu na našem webu.</p>
      </section>

      <section className="legal-section">
        <h2>10. Záruky a odpovědnost</h2>
        <p>Nic v tomto oddíle neomezuje ani nevylučuje záruky vyplývající ze zákona, které by bylo nezákonné omezit nebo vyloučit. Tento web a veškerý obsah na webu jsou poskytovány „tak, jak jsou" a „jak jsou k dispozici" a mohou obsahovat nepřesnosti nebo typografické chyby. Výslovně se zříkáme všech záruk jakéhokoli druhu, výslovných nebo předpokládaných, pokud jde o dostupnost, přesnost nebo úplnost obsahu. Neposkytujeme žádnou záruku, že:</p>
        <ul>
          <li>tento web nebo náš obsah splní vaše požadavky;</li>
          <li>tento web bude dostupný nepřerušeně, včas, bezpečně nebo bez chyb.</li>
        </ul>
        <p>Nic na tomto webu nepředstavuje ani není zamýšleno jako právní, finanční ani lékařské poradenství jakéhokoli druhu. Pokud potřebujete poradenství, obraťte se na příslušného odborníka.</p>
        <p>Následující ustanovení tohoto oddíle se uplatní v maximálním rozsahu povoleném platnými zákony a neomezí ani nevyloučí naši odpovědnost v záležitostech, u nichž by bylo nezákonné nebo protiprávní naši odpovědnost omezit nebo vyloučit. V žádném případě neneseme odpovědnost za přímé ani nepřímé škody (včetně škod za ztrátu zisku nebo výnosů, ztrátu nebo poškození dat, softwaru nebo databáze, nebo ztrátu či poškození majetku nebo dat) vzniklé vám nebo jakékoli třetí straně v důsledku vašeho přístupu na náš web nebo jeho používání.</p>
        <p>Pokud není v žádné dodatkovné smlouvě výslovně stanoveno jinak, naše maximální odpovědnost vůči vám za veškeré škody vzniklé v souvislosti s webem nebo produkty a službami prodávanými prostřednictvím webu nebo v souvislosti s nimi, bez ohledu na formu právního nároku zakládajícího odpovědnost (ať již ze smlouvy, z práva equity, z nedbalosti, úmyslného jednání, deliktu nebo jinak), bude omezena na celkovou cenu, kterou jste nám zaplatili za nákup takových produktů nebo služeb nebo za používání webu. Toto omezení se uplatní souhrnně na všechny vaše nároky, žaloby a příčiny žaloby jakéhokoli druhu a povahy.</p>
      </section>

      <section className="legal-section">
        <h2>11. Soukromí</h2>
        <p>Pro přístup k našemu webu a/nebo službám může být nutné poskytnout určité informace o sobě v rámci registračního procesu. Souhlasíte s tím, že veškeré informace, které poskytnete, budou vždy přesné, správné a aktuální.</p>
        <p>Vypracovali jsme zásady, které řeší veškeré obavy týkající se ochrany soukromí. Další informace naleznete v našem <a href="/privacy-policy" className="legal-link">Prohlášení o ochraně soukromí</a> a v našich <a href="/cookies-policy" className="legal-link">Zásadách používání souborů cookie</a>.</p>
      </section>

      <section className="legal-section">
        <h2>12. Přístupnost</h2>
        <p>Zavazujeme se zpřístupnit obsah, který poskytujeme, osobám se zdravotním postižením. Pokud máte zdravotní postižení a v důsledku něj nemůžete přistupovat k žádné části našeho webu, žádáme vás, abyste nám zaslali oznámení obsahující podrobný popis problému, na který jste narazili. Pokud je problém snadno identifikovatelný a řešitelný pomocí standardních nástrojů a technik informačních technologií, vyřešíme jej neprodleně.</p>
      </section>

      <section className="legal-section">
        <h2>13. Omezení vývozu / Právní shoda</h2>
        <p>Přístup k webu z území nebo zemí, kde je obsah nebo nákup produktů či služeb prodávaných na webu nezákonný, je zakázán. Nesmíte používat tento web v rozporu s vývozními zákony a předpisy České republiky.</p>
      </section>

      <section className="legal-section">
        <h2>14. Postoupení</h2>
        <p>Svá práva a/nebo povinnosti vyplývající z těchto podmínek nesmíte bez našeho předchozího písemného souhlasu postoupit, převést ani subdelegovat, a to ani vcelku ani zčásti, žádné třetí straně. Jakékoli předstírané postoupení v rozporu s tímto oddílem bude neplatné a bez právního účinku.</p>
      </section>

      <section className="legal-section">
        <h2>15. Porušení těchto podmínek</h2>
        <p>Aniž jsou dotčena naše ostatní práva vyplývající z těchto podmínek, pokud tyto podmínky jakýmkoli způsobem porušíte, můžeme přijmout taková opatření, která považujeme za vhodná k řešení porušení, včetně dočasného nebo trvalého pozastavení vašeho přístupu na web, kontaktování vašeho poskytovatele internetových služeb se žádostí o zablokování vašeho přístupu na web a/nebo zahájení právního řízení proti vám.</p>
      </section>

      <section className="legal-section">
        <h2>16. Vyšší moc</h2>
        <p>S výjimkou povinností platit peněžité částky se žádné prodlení, nesplnění nebo opomenutí kteroukoli ze stran při plnění jejích závazků z těchto podmínek nepovažuje za porušení těchto podmínek, pokud a po dobu, kdy toto prodlení, nesplnění nebo opomenutí vyplývá z příčiny, která je mimo přiměřenou kontrolu dané strany.</p>
      </section>

      <section className="legal-section">
        <h2>17. Odškodnění</h2>
        <p>Souhlasíte s tím, že nás odškodníte, budete hájit a chránit před veškerými nároky, závazky, škodami, ztrátami a výdaji vzniklými v souvislosti s vaším porušením těchto podmínek a platných zákonů, včetně práv duševního vlastnictví a práv na soukromí. Neprodleně nám uhradíte naše škody, ztráty, náklady a výdaje vzniklé v souvislosti s těmito nároky nebo z nich plynoucí.</p>
      </section>

      <section className="legal-section">
        <h2>18. Zřeknutí se práv</h2>
        <p>Nevymáhání kteréhokoli z ustanovení těchto podmínek a jakékoli dohody nebo nevyužití možnosti ukončení se nepovažuje za zřeknutí se takových ustanovení a neovlivňuje platnost těchto podmínek ani jakékoli dohody nebo jejich části, ani právo následně vymáhat každé ustanovení.</p>
      </section>

      <section className="legal-section">
        <h2>19. Jazyk</h2>
        <p>Tyto obchodní podmínky budou interpretovány a vykládány výhradně v anglickém jazyce. Veškerá oznámení a korespondence budou psány výhradně v tomto jazyce.</p>
      </section>

      <section className="legal-section">
        <h2>20. Celá dohoda</h2>
        <p>Tyto obchodní podmínky spolu s prohlášením o ochraně soukromí a zásadami používání souborů cookie tvoří celou dohodu mezi vámi a společností Netsol AI s.r.o. ve vztahu k vašemu používání tohoto webu.</p>
      </section>

      <section className="legal-section">
        <h2>21. Aktualizace podmínek</h2>
        <p>Tyto obchodní podmínky můžeme čas od času aktualizovat. Datum uvedené na začátku těchto podmínek je datem poslední revize. O jakýchkoli změnách nebo aktualizacích vás písemně informujeme a revidované podmínky nabydou účinnosti dnem, kdy vám takové oznámení doručíme. Vaše pokračující používání tohoto webu po zveřejnění změn nebo aktualizací bude považováno za souhlas s jejich přijetím a dodržováním. Chcete-li požádat o předchozí verzi těchto podmínek, kontaktujte nás.</p>
      </section>

      <section className="legal-section">
        <h2>22. Volba práva a soudní příslušnost</h2>
        <p>Tyto obchodní podmínky se řídí právem České republiky. Veškeré spory týkající se těchto podmínek budou podléhat jurisdikci soudů České republiky. Pokud soud nebo jiný orgán shledá jakoukoli část nebo ustanovení těchto podmínek za neplatnou a/nebo nevymahatelnou podle platných zákonů, bude tato část nebo ustanovení upraveno, odstraněno a/nebo vymáháno v maximálním přípustném rozsahu tak, aby byl naplněn záměr těchto podmínek. Ostatní ustanovení tím nebudou dotčena.</p>
      </section>

      <section className="legal-section">
        <h2>23. Kontaktní informace</h2>
        <p>Tento web vlastní a provozuje Netsol AI s.r.o.</p>
        <p>V záležitostech týkajících se těchto obchodních podmínek nás můžete kontaktovat písemně nebo e-mailem na následující adrese: <a href="mailto:info@netsolai.cz" className="legal-link">info@netsolai.cz</a><br />Školská 660/3, Nové Město, 110 00 Praha 1</p>
      </section>

    </LegalLayout>
  );
}
