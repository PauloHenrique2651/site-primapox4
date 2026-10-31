import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/data/seo";
import { HeroBackgroundVideo } from "@/components/HeroBackgroundVideo";
import { HomeContactForm } from "@/components/HomeContactForm";
import { company } from "@/data/site";
import { home } from "@/data/primapox";
import styles from "./home.module.css";

export const metadata = pageMetadata("/", "Primapox", home.servicesText);

// Only the content of the legacy home page (index.php), in its order, styled after prodecolor.com.br.
function Icon({ index }: { index: number }) {
  const paths = [
    <path key="a" d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z" />,
    <path key="b" d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />,
    <path key="c" d="M4 15c2-6 6-9 8-9s6 3 8 9M8 15a4 4 0 0 0 8 0" />,
  ];
  return <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[index]}</svg>;
}

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="nossos-servicos">
        <HeroBackgroundVideo src="/media/hero-prodec.webm" poster="/gallery/25.webp" className={styles.video} buttonClassName={styles.videoToggle} />
        <div className={`shell ${styles.heroInner}`}>
          <h1 id="nossos-servicos">{home.servicesTitle}</h1>
          <p>{home.servicesText}</p>
        </div>
      </section>

      <section className={styles.icons} aria-labelledby="vantagens">
        <div className="shell">
          <p id="vantagens" className={styles.iconsTitle}>{home.advantagesTitle}</p>
          <ul>{home.advantages.map((item, index) => <li key={item}><Icon index={index} /><h2>{item}</h2></li>)}</ul>
        </div>
      </section>

      <section className={styles.tradition} aria-labelledby="a-primapox">
        <div className={`shell ${styles.traditionGrid}`}>
          <div className={styles.collage}>
            <div><Image src="/gallery/12.webp" alt="Primapox" fill sizes="(max-width: 900px) 46vw, 22vw" /></div>
            <div><Image src="/gallery/11.webp" alt="" fill sizes="(max-width: 900px) 46vw, 22vw" /></div>
            <div><Image src="/gallery/32.webp" alt="" fill sizes="(max-width: 900px) 46vw, 22vw" /></div>
          </div>
          <div>
            <h2 id="a-primapox">{home.aboutTitle}</h2>
            <p>{home.aboutText}</p>
          </div>
        </div>
      </section>

      <section className={styles.contactBox} aria-labelledby="fale-conosco">
        <div className={`shell ${styles.box}`}>
          <h2 id="fale-conosco">{home.contactTitle}</h2>
          <HomeContactForm />
        </div>
      </section>

      <section className={styles.finishes} aria-labelledby="localizacao">
        <div className={`shell ${styles.locationGrid}`}>
          <iframe className={styles.map} src={company.mapsEmbedUrl} title={home.locationTitle} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          <div>
            <h2 id="localizacao" className={styles.locationTitle}>{home.locationTitle}</h2>
            <p className={styles.locationText}>{home.locationText}</p>
            <Link className={styles.outline} href="/contato">{home.more}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
