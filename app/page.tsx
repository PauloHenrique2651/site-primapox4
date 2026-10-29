import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/data/seo";
import { HeroBackgroundVideo } from "@/components/HeroBackgroundVideo";
import { LegacyContactForm } from "@/components/LegacyContactForm";
import { about, contact, home, services } from "@/data/primapox";
import styles from "./home.module.css";

export const metadata = pageMetadata("/", "Primapox | Pintura eletrostática a pó no Rio de Janeiro", "Executamos pintura eletrostática com tinta em pó, ideais para: esquadrias, batentes, caixilhos, forros, divisórias, fachadas, telhas metálicas, coberturas, estruturas espaciais, etc.");

// Every visible text comes verbatim from data/primapox.ts (legacy primapox.com).
const [paintingFirst, paintingSecond] = services.painting.split(" A tinta em pó tem");
const [beforeFirst] = services.before.split(" A função básica");

const steps = [
  { number: "01", title: services.pretreatmentTitle, text: services.pretreatment[1], detail: services.pretreatment[3] },
  { number: "02", title: services.paintingTitle, text: paintingFirst, detail: `A tinta em pó tem${paintingSecond}` },
  { number: "03", title: services.cureTitle, text: beforeFirst, detail: services.after[0] },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="titulo-principal">
        <div className={styles.slides}>
          <HeroBackgroundVideo src="/media/hero-prodec.webm" poster="/gallery/25.webp" className={styles.video} buttonClassName={styles.videoToggle} />
        </div>
        <div className={`shell ${styles.heroInner}`}>
          <div className={styles.panel}>
            <p className={styles.since}>{home.servicesTitle}</p>
            <h1 id="titulo-principal">{services.closing}</h1>
            <p>{home.servicesText}</p>
            <div className={styles.actions}>
              <Link className={styles.primary} href="/contato">{home.contactTitle}</Link>
              <Link className={styles.secondary} href="/servicos">{home.more}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pillars} aria-label={home.advantagesTitle}>
        <ul className="shell">
          {home.advantages.map((advantage) => <li key={advantage}><h2>{advantage}</h2></li>)}
        </ul>
      </section>

      <section className={styles.tradition} aria-labelledby="tradicao">
        <div className={`shell ${styles.traditionGrid}`}>
          <h2 id="tradicao">{about.title}</h2>
          <div>
            <p className={styles.lead}>{home.aboutText}</p>
            <p>{about.paragraphs[1]}</p>
            <p>{about.paragraphs[2]}</p>
            <p><strong>{about.paragraphs[3]}</strong></p>
            <Link className={styles.textLink} href="/empresa">{home.more}</Link>
          </div>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="processos">
        <div className="shell">
          <div className={styles.sectionHead}>
            <h2 id="processos">{services.title}</h2>
            <p>{services.sloganParagraphs[0]}</p>
          </div>
          <ol className={styles.steps}>
            {steps.map((step) => (
              <li key={step.number}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3>{step.title}</h3>
                <div>
                  <p>{step.text}</p>
                  <p className={styles.detail}>{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className={styles.result}>{services.after[1]}</p>
        </div>
      </section>

      <section className={styles.quality} aria-labelledby="qualidade">
        <div className={`shell ${styles.qualityGrid}`}>
          <div>
            <h2 id="qualidade">{services.typesTitle}</h2>
            {services.types.slice(0, 2).map(([name, text]) => <p key={name}><strong>{name}</strong> {text}</p>)}
            <p><strong>{services.typesNote}</strong></p>
            <h3 className={styles.listTitle}>{services.benefitsTitle}</h3>
            <ul className={styles.values}>{services.benefits.map((benefit) => <li key={benefit}><p>{benefit}</p></li>)}</ul>
          </div>
          <figure className={styles.sheet}>
            <figcaption>
              <span className={styles.sheetTitle}>{services.tableTitle}</span>
              <span>{services.physicalTitle}</span>
            </figcaption>
            <table>
              <tbody>{services.physical.map(([name, value], index) => <tr key={`${name}-${index}`}><th scope="row">{name}</th><td>{value}</td></tr>)}</tbody>
            </table>
            <p className={styles.sheetNote}>{services.source}</p>
            <Link className={styles.textLink} href="/servicos#ficha-tecnica">{home.more}</Link>
          </figure>
        </div>
      </section>

      <section className={styles.services} aria-labelledby="servicos">
        <div className="shell">
          <div className={styles.sectionHead}>
            <h2 id="servicos">{services.materialTitle}</h2>
            <p>{services.materialIntro}</p>
          </div>
          <div className={styles.serviceGrid}>
            <div className={styles.servicePhoto}><Image src="/gallery/17.webp" alt="Estrutura metálica de passarela" fill sizes="(max-width: 900px) 90vw, 40vw" /></div>
            <dl className={styles.index}>
              {services.materials.map(([title, pieces]) => <div key={title}><dt>{title}</dt><dd>{pieces}</dd></div>)}
            </dl>
          </div>
          <p className={styles.closingLine}>{services.closing}</p>
          <Link className={styles.textLink} href="/servicos">{home.more}</Link>
        </div>
      </section>

      <section className={styles.quote} aria-labelledby="titulo-orcamento">
        <div className={`shell ${styles.quoteGrid}`}>
          <div>
            <h2 id="titulo-orcamento">{home.contactTitle}</h2>
            <p>{contact.intro}</p>
            <div className={styles.contactBlock}>
              <strong>{home.locationTitle}</strong>
              <p>{home.locationText}</p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
          <div className={styles.formSheet}><LegacyContactForm /></div>
        </div>
      </section>
    </>
  );
}
