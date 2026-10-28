"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { useHeaderState } from "@/components/useHeaderState";
import { company, navigation } from "@/data/site";
import styles from "./SiteHeader.module.css";

const links = [...navigation, { label: "Galeria", href: "/galeria" }, { label: "Contato", href: "/contato" }];

// Brand band with the enlarged, centred logo scrolls away; the navigation bar below stays pinned
// and shows a compact logo once the band has left the viewport.
export function SiteHeader() {
  const pathname = usePathname();
  const quoteHref = pathname === "/" ? "#orcamento" : "/contato#orcamento";
  const { open, setOpen, close, menu, toggle } = useHeaderState();
  const band = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const element = band.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setPinned(!entry.isIntersecting));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={band} className={styles.band}>
        <div className={`shell ${styles.bandInner}`}>
          <p className={styles.since}>Pintura industrial desde {company.foundedYear}</p>
          <BrandMark className={styles.brand} priority sizes="(max-width: 800px) 220px, 340px" />
          <a className={styles.mail} href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>
      <header className={styles.bar} data-pinned={pinned} data-open={open}>
        <div className={`shell ${styles.barInner}`}>
          <BrandMark className={styles.compact} sizes="140px" onClick={close} />
          <nav className={styles.nav} aria-label="Navegação principal">
            {links.map((item) => (
              <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
            ))}
          </nav>
          <a className={styles.cta} href={quoteHref}>Solicitar orçamento</a>
          <button ref={toggle} className={styles.toggle} type="button" aria-expanded={open} aria-controls="menu-mobile" onClick={() => setOpen(!open)}>
            {open ? "Fechar" : "Menu"}
          </button>
        </div>
        <div ref={menu} className={styles.menu} id="menu-mobile" hidden={!open}>
          <nav className="shell" aria-label="Navegação mobile">
            {links.map((item) => (
              <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={close}>{item.label}</Link>
            ))}
            <a className={styles.menuCta} href={quoteHref} onClick={close}>Solicitar orçamento</a>
          </nav>
        </div>
      </header>
    </>
  );
}
