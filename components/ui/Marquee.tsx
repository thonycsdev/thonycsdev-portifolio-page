import styles from "./Marquee.module.css";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  durationSeconds?: number;
};

// Renders the content twice and slides it by half its width, so the loop is seamless.
export function Marquee({ children, className = "", durationSeconds = 40 }: MarqueeProps) {
  return (
    <div className={`${styles.marquee} ${className}`}>
      <div className={styles.track} style={{ animationDuration: `${durationSeconds}s` }}>
        <div className={styles.group}>{children}</div>
        <div className={styles.group} aria-hidden>{children}</div>
      </div>
    </div>
  );
}
