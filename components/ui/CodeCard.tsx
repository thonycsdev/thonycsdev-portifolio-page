import styles from "./CodeCard.module.css";

export function CodeCard({ className = "" }: { className?: string }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.dots} aria-hidden>
        <i /> <i /> <i />
      </div>
      <pre>
        <span className={styles.keyword}>var</span> anthony = <span className={styles.keyword}>new</span> Dev {"{"}
        {"\n"}  Role = <span className={styles.string}>&quot;full stack&quot;</span>,
        {"\n"}  Stack = [<span className={styles.string}>&quot;.NET&quot;</span>, <span className={styles.string}>&quot;React&quot;</span>, <span className={styles.string}>&quot;AWS&quot;</span>],
        {"\n"}  Coffee = <span className={styles.type}>double</span>.PositiveInfinity,
        {"\n"}{"}"};
      </pre>
    </div>
  );
}
