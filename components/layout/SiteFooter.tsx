import { education } from "@/content/education";
import { navLinks } from "@/content/nav";
import { profile } from "@/content/profile";
import styles from "./SiteFooter.module.css";

const footerLinks = [
  ...navLinks,
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <h3 className={styles.cta}>{"Got a project in mind? Let's talk."}</h3>
          <a href={profile.mailto} className={styles.emailPill}>{profile.email}</a>
        </div>
        <div className={styles.columns}>
          <ul>
            <li className="eyebrow">Navigation</li>
            {footerLinks.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}
          </ul>
          <ul>
            <li className="eyebrow">Education</li>
            <li>{education.degree}</li>
            <li>{education.school}</li>
            {education.certifications.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>
      <p className={styles.wordmark} aria-hidden>{profile.handle}</p>
      <p className={styles.copy}>© {new Date().getFullYear()} {profile.name}. {profile.role}.</p>
    </footer>
  );
}
