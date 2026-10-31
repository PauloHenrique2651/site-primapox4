import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/data/seo";
import { HeroBackgroundVideo } from "@/components/HeroBackgroundVideo";
import { LegacyContactForm } from "@/components/LegacyContactForm";
import { PhotoGallery } from "@/components/PhotoGallery";
import { about, contact, galleryTitle, home, services } from "@/data/primapox";
import styles from "./home.module.css";

export const metadata = pageMetadata("/", "Primapox | Pintura eletrostática a pó no Rio de Janeiro", "Executamos pintura eletrostática com tinta em pó, ideais para: esquadrias, batentes, caixilhos, forros, divisórias, fachadas, telhas metálicas, coberturas, estruturas espaciais, etc.");

// Section order reverse engineered from prodecolor.com.br; every visible text comes verbatim from data/primapox.ts.
const [paintingFirst] = services.painting.split(" A tinta em pó tem");

const cards = [
  { title: services.pretreatmentTitle, text: services.pretreatment[1], href: "/servicos", photo: "/gallery/2.webp" },
  { title: services.paintingTitle, text: paintingFirst, href: "/servicos", photo: "/gallery/31.webp" },
  { title: services.cureTitle, text: services.after[0], href: "/servicos", photo: "/gallery/22.webp" },
  { title: "Manutenção", text: "A pintura Poliéster deve ser limpa regularmente para manter suas propriedades decorativas.", href: "/manutencao", photo: "/gallery/26.webp" },
];

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
      <section className={styles.hero} aria-labelledby="titulo-principal">
        <HeroBackgroundVideo src="/media/hero-prodec.webm" poster="/gallery/25.webp" className={styles.video} buttonClassName={styles.videoToggle} />
        <div className={`shell ${styles.heroInner}`}>
          <h1 id="titulo-principal">{services.closing}</h1>
          <p>{home.servicesText}</p>
          <Link className={styles.solid} href="/servicos">{home.more}</Link>
        </div>
        <p className={styles.heroCaption}>{home.servicesTitle}</p>
      </section>

      <section className={styles.icons} aria-label={home.advantagesTitle}>
        <ul className="shell">
          {home.advantages.map((advantage, index) => <li key={advantage}><Icon index={index} /><h2>{advantage}</h2></li>)}
        </ul>
      </section>

      <section className={styles.cards} aria-labelledby="servicos">
        <div className="shell">
          <h2 id="servicos" className={styles.visuallyHidden}>{services.title}</h2>
          <div className={styles.cardGrid}>
            {cards.map((card) => (
              <Link key={card.title} className={styles.card} href={card.href}>
                <Image src={card.photo} alt="" fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 24vw" />
                <div className={styles.cardText}>
                  <span>{services.title}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <b>{home.more}</b>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.highlight} aria-labelledby="slogan">
        <Image src="/gallery/33.webp" alt="" fill sizes="100vw" />
        <div className={`shell ${styles.highlightGrid}`}>
          <div>
            <p className={styles.boxed}>Primapox</p>
            <h2 id="slogan">{services.sloganTitle}</h2>
            <p>{services.sloganParagraphs[0]}</p>
          </div>
          <dl className={styles.features}>
            {services.types.slice(0, 2).map(([name, text]) => <div key={name}><dt>{name}</dt><dd>{text}</dd></div>)}
            <div><dt>{services.typesNote}</dt></div>
          </dl>
        </div>
      </section>

      <section className={styles.tradition} aria-labelledby="quem-somos">
        <div className={`shell ${styles.traditionGrid}`}>
          <div className={styles.collage}>
            <div><Image src="/gallery/12.webp" alt="Letreiro da Primapox" fill sizes="(max-width: 900px) 46vw, 22vw" /></div>
            <div><Image src="/gallery/11.webp" alt="Vista interna da área de produção" fill sizes="(max-width: 900px) 46vw, 22vw" /></div>
            <div><Image src="/gallery/32.webp" alt="Vista da linha produtiva da Primapox" fill sizes="(max-width: 900px) 46vw, 22vw" /></div>
          </div>
          <div>
            <h2 id="quem-somos">{about.title}</h2>
            <p>{home.aboutText}</p>
            <p>{about.paragraphs[2]}</p>
            <p>{about.paragraphs[3]}</p>
            <Link className={styles.outline} href="/empresa">{home.more}</Link>
          </div>
        </div>
      </section>

      <section className={styles.finishes} aria-labelledby="galeria">
        <div className="shell">
          <div className={styles.rowHead}>
            <h2 id="galeria">{galleryTitle}</h2>
            <Link href="/galeria">{home.more}</Link>
          </div>
          <PhotoGallery limit={8} />
        </div>
      </section>

      <section className={styles.contactBox} aria-labelledby="fale-conosco">
        <div className={`shell ${styles.box}`}>
          <div>
            <h2 id="fale-conosco">{home.contactTitle}</h2>
            <p>{contact.intro}</p>
            <p>{home.locationText}</p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <LegacyContactForm />
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="material">
        <div className="shell">
          <h2 id="material">{services.materialTitle}</h2>
          <p>{services.materialIntro}</p>
          <div className={styles.faqList}>
            {services.materials.map(([name, text]) => (
              <details key={name}>
                <summary>{name}</summary>
                <p>- {text}</p>
              </details>
            ))}
          </div>
          <p className={styles.closing}>{services.closing}</p>
        </div>
      </section>
    </>
  );
}
