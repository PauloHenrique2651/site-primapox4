import type { ReactNode } from "react";
import Image from "next/image";
import styles from "./PageHero.module.css";

export function PageHero({ title, copy, image }: { eyebrow?: string; title: ReactNode; copy: string; marker?: string; image?: string }) {
  return (
    <section className={styles.hero}>
      {image && <div className={styles.photo}><Image src={image} alt="" fill sizes="(max-width: 800px) 100vw, 45vw" priority /></div>}
      <div className={`shell ${styles.inner}`}>
        <h1>{title}</h1>
        {copy && <p>{copy}</p>}
      </div>
    </section>
  );
}
