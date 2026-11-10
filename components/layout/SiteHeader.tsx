import { navLinks } from "@/content/nav";
import { profile } from "@/content/profile";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.links}>
        {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>
      <a href="#" className={styles.logo}>{profile.handle}</a>
      <div className={styles.actions}>
        <a href={profile.github} className={styles.iconButton} aria-label="GitHub">GH</a>
        <a href={profile.linkedin} className={styles.iconButton} aria-label="LinkedIn">in</a>
        <a href={profile.mailto} className="btn">Contact</a>
      </div>
    </header>
  );
}
