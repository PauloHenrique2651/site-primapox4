import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { SocialLinks } from "@/components/SocialLinks";
import { whatsappLink } from "@/data/whatsapp";
import { company, navigation } from "@/data/site";
import { contact, footerRights, home } from "@/data/primapox";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer} id="rodape">
      <div className={styles.seal}>
        <div className={`shell ${styles.sealInner}`}>
          <BrandMark className={styles.brand} sizes="(max-width: 800px) 220px, 280px" />
          <p>{footerRights}</p>
        </div>
      </div>
      <div className={`shell ${styles.columns}`}>
        <nav aria-label="Navegação do rodapé">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div>
          <h2>{home.contactTitle}</h2>
          <a className={styles.mail} href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp {company.whatsappLabel}</a>
          {contact.phoneLines.map((line) => <p key={line}>{line}</p>)}
          <SocialLinks className={styles.social} />
        </div>
        <div>
          <h2>{home.locationTitle}</h2>
          {contact.addressLines.map((line) => <p key={line}>{line}</p>)}
          <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer">{home.more}</a>
        </div>
      </div>
      <div className={`shell ${styles.bottom}`}>
        <span>{footerRights}</span>
        <Link href="/politica-de-privacidade">Política de privacidade</Link>
      </div>
    </footer>
  );
}
