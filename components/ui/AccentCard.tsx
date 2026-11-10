import type { Accent } from "@/content/types";
import styles from "./AccentCard.module.css";

type AccentCardProps = {
  accent: Accent;
  label: string;
  title: string;
  subtitle?: string;
  text: string;
  rings?: boolean;
  className?: string;
};

export function AccentCard({ accent, label, title, subtitle, text, rings = false, className = "" }: AccentCardProps) {
  return (
    <article className={`${styles.card} bg-${accent} ${rings ? "rings" : ""} ${className}`}>
      <p className={styles.label}>{label}</p>
      <h3>{title}</h3>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <p>{text}</p>
    </article>
  );
}
