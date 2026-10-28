import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/data/seo";
import { HeroBackgroundVideo } from "@/components/HeroBackgroundVideo";
import { QuoteForm } from "@/components/QuoteForm";
import { benefits, company, processSteps } from "@/data/site";
import { physicalProperties, processDetails, serviceApplications, supportedMetals } from "@/data/services";
import { legacy } from "@/data/legacy";
import { faq } from "@/data/faq";
import styles from "./home.module.css";

export const metadata = pageMetadata("/", "Primapox | Pintura eletrostática a pó no Rio de Janeiro", "Pintura eletrostática a pó para componentes metálicos, com preparação controlada, cobertura uniforme e acabamento de alto padrão no Rio de Janeiro.");

const pillars = [
  { title: `Mais de ${company.yearsOfExperience} anos`, copy: `Tradição em pintura industrial desde ${company.foundedOn}.` },
  { title: "Até 6,5 m", copy: "Capacidade informada para peças de grande comprimento." },
  { title: "Híbrida e poliéster", copy: "Resinas definidas para uso interior e exterior." },
];

const values = [
  ["Preparação", "A qualidade da película depende do que acontece antes da aplicação."],
  ["Uniformidade", "A deposição eletrostática favorece a cobertura de cantos, bordas e arestas."],
  ["Critério", "Resina, acabamento e processo precisam conversar com o uso real da peça."],
];

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData).replace(/</g, "\\u003c") }} />
      <section className={styles.hero} aria-labelledby="titulo-principal">
        <div className={styles.slides}>
          <HeroBackgroundVideo src="/media/hero-prodec.webm" poster="/gallery/25.webp" className={styles.video} buttonClassName={styles.videoToggle} />
        </div>
        <div className={`shell ${styles.heroInner}`}>
          <div className={styles.panel}>
            <p className={styles.since}>Desde {company.foundedYear} em Vigário Geral, Rio de Janeiro</p>
            <h1 id="titulo-principal">Pintura eletrostática a pó</h1>
            <p>Precisão no processo. Proteção em cada camada. Revestimento técnico para componentes metálicos, com cobertura uniforme, alta resistência e acabamento de alto padrão.</p>
            <div className={styles.actions}>
              <a className={styles.primary} href="#orcamento">Solicitar orçamento</a>
              <Link className={styles.secondary} href="/processo">Conhecer o processo</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pillars} aria-label="Diferenciais">
        <ul className="shell">
          {pillars.map((pillar) => <li key={pillar.title}><h2>{pillar.title}</h2><p>{pillar.copy}</p></li>)}
        </ul>
      </section>

      <section className={styles.tradition} aria-labelledby="tradicao">
        <div className={`shell ${styles.traditionGrid}`}>
          <h2 id="tradicao">Experiência que ganha camada.</h2>
          <div>
            <p className={styles.lead}>{legacy.reputation}</p>
            <p>{legacy.servicesIntro} {legacy.protection}</p>
            <dl className={styles.facts}>
              <div><dt>Fundação</dt><dd>{company.foundedOn}</dd></div>
              <div><dt>Localização</dt><dd>Vigário Geral, Rio de Janeiro</dd></div>
              <div><dt>Capacidade informada</dt><dd>Peças com até 6,5 m de comprimento</dd></div>
            </dl>
            <Link className={styles.textLink} href="/empresa">Conhecer a empresa</Link>
          </div>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="processos">
        <div className="shell">
          <div className={styles.sectionHead}>
            <h2 id="processos">Processo em quatro etapas</h2>
            <p>Uma sequência simples de entender e exigente de executar: ler, preparar, aplicar e curar.</p>
          </div>
          <ol className={styles.steps}>
            {processSteps.map((step, index) => (
              <li key={step.number}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3>{step.title}</h3>
                <div>
                  <p>{step.description}</p>
                  <p className={styles.detail}>{processDetails[index]}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className={styles.result}>{legacy.result}</p>
        </div>
      </section>

      <section className={styles.quality} aria-labelledby="qualidade">
        <div className={`shell ${styles.qualityGrid}`}>
          <div>
            <h2 id="qualidade">Qualidade e tecnologia</h2>
            <p>A Primapox trabalha com resinas <strong>híbrida</strong>, para peças de uso interior, e <strong>poliéster</strong>, para uso exterior, especialmente em aplicações arquitetônicas.</p>
            <p>{legacy.noMicrochannels}</p>
            <p>Metais citados no acervo: {supportedMetals.join(", ").toLowerCase()}.</p>
            <ul className={styles.values}>
              {values.map(([title, copy]) => <li key={title}><h3>{title}</h3><p>{copy}</p></li>)}
            </ul>
          </div>
          <figure className={styles.sheet}>
            <figcaption>
              <span className={styles.sheetTitle}>Ficha técnica de referência</span>
              <span>Tinta em pó à base de poliéster</span>
            </figcaption>
            <table>
              <thead><tr><th scope="col">Propriedade</th><th scope="col">Valor de referência</th></tr></thead>
              <tbody>{physicalProperties.map(([name, value]) => <tr key={name}><th scope="row">{name}</th><td>{value}</td></tr>)}</tbody>
            </table>
            <p className={styles.sheetNote}>Valores publicados no site anterior como referência histórica (Catálogo Coraldur — Tintas em Pó). Não substituem o boletim técnico da tinta escolhida nem constituem garantia para uma peça ou ambiente específico.</p>
            <Link className={styles.textLink} href="/solucoes/pintura-eletrostatica-a-po#ficha-tecnica">Ver resistência química e ensaios</Link>
          </figure>
        </div>
      </section>

      <section className={styles.services} aria-labelledby="servicos">
        <div className="shell">
          <div className={styles.sectionHead}>
            <h2 id="servicos">Serviços e aplicações</h2>
            <p>{legacy.closing} Pintura eletrostática a pó com preparação de superfície, aplicação, cura e controle do acabamento.</p>
          </div>
          <div className={styles.serviceGrid}>
            <div className={styles.servicePhoto}><Image src="/gallery/17.webp" alt="Estrutura metálica de passarela" fill sizes="(max-width: 900px) 90vw, 40vw" /></div>
            <dl className={styles.index}>
              {serviceApplications.map(({ title, pieces }) => <div key={title}><dt>{title}</dt><dd>{pieces}</dd></div>)}
            </dl>
          </div>
          <ul className={styles.benefits}>{[...legacy.advantages, ...benefits].slice(0, 4).map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
          <Link className={styles.textLink} href="/solucoes/pintura-eletrostatica-a-po">Ver o serviço completo</Link>
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="perguntas">
        <div className={`shell ${styles.faqGrid}`}>
          <div>
            <h2 id="perguntas">Perguntas frequentes</h2>
            <p>Respostas diretas sobre resinas, dimensões, acabamentos e conservação da pintura.</p>
          </div>
          <div className={styles.faqList}>
            {faq.map(({ question, answer }) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.quote} aria-labelledby="titulo-orcamento">
        <div className={`shell ${styles.quoteGrid}`}>
          <div>
            <h2 id="titulo-orcamento">Solicite um orçamento</h2>
            <p>{legacy.consult} Informe material, dimensões, quantidade, uso e prazo. Fotos e desenhos ajudam a equipe a entender a peça.</p>
            <dl className={styles.contactList}>
              <div><dt>E-mail para dúvidas, solicitações e orçamentos</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>
              <div><dt>Telefone</dt><dd><a href="tel:+552134487320">{company.phoneMain}</a></dd></div>
              <div><dt>Endereço</dt><dd>{company.address}</dd></div>
            </dl>
          </div>
          <div className={styles.formSheet}><QuoteForm /></div>
        </div>
      </section>
    </>
  );
}
