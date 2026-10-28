import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { SocialLinks } from "@/components/SocialLinks";
import { whatsappLink } from "@/data/whatsapp";
import { company, navigation } from "@/data/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer} id="rodape">
      <div className={styles.seal}>
        <div className={`shell ${styles.sealInner}`}>
          <BrandMark className={styles.brand} sizes="(max-width: 800px) 220px, 280px" />
          <p>Fundada em {company.foundedOn}. Pintura eletrostática a pó com preparação controlada, cobertura uniforme e acabamento de alto padrão.</p>
        </div>
      </div>
      <div className={`shell ${styles.columns}`}>
        <nav aria-label="Navegação do rodapé">
          <h2>Institucional</h2>
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/galeria">Galeria</Link>
          <Link href="/central-tecnica">Central técnica</Link>
        </nav>
        <div>
          <h2>Contato</h2>
          <a className={styles.mail} href={`mailto:${company.email}`}>{company.email}</a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp {company.whatsappLabel}</a>
          {company.phones.map((phone) => <a key={phone} href={`tel:+55${phone.replace(/\D/g, "")}`}>{phone}</a>)}
          <SocialLinks className={styles.social} />
        </div>
        <div>
          <h2>Endereço</h2>
          <p>{company.address}</p>
          <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer">Abrir no Google Maps</a>
        </div>
      </div>
      <div className={`shell ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} {company.name}</span>
        <Link href="/politica-de-privacidade">Política de privacidade</Link>
      </div>
    </footer>
  );
}
