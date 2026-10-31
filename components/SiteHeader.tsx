"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/BrandMark";
import { useHeaderState } from "@/components/useHeaderState";
import { navigation } from "@/data/site";
import { home } from "@/data/primapox";
import styles from "./SiteHeader.module.css";

// Prodec-style header (reverse engineered): one dark bar, logo left, compact nav,
// solid accent button and an outlined menu button.
export function SiteHeader() {
  const pathname = usePathname();
  const { open, setOpen, close, scrolled, menu, toggle } = useHeaderState();

  return (
    <header className={styles.bar} data-scrolled={scrolled} data-open={open}>
      <div className={`shell ${styles.barInner}`}>
        <BrandMark className={styles.brand} priority onClick={close} sizes="(max-width: 800px) 150px, 200px" />
        <nav className={styles.nav} aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
        </nav>
        <Link className={styles.cta} href="/contato">{home.contactTitle}</Link>
        <button ref={toggle} className={styles.toggle} type="button" aria-expanded={open} aria-controls="menu-mobile" onClick={() => setOpen(!open)}>
          Menu <span aria-hidden="true"><i /><i /><i /></span>
        </button>
      </div>
      <div ref={menu} className={styles.menu} id="menu-mobile" hidden={!open}>
        <nav className="shell" aria-label="Navegação mobile">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={close}>{item.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
