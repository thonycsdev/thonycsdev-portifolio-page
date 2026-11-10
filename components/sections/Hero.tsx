import { CodeCard } from "@/components/ui/CodeCard";
import { Marquee } from "@/components/ui/Marquee";
import { employers } from "@/content/experience";
import { heroWords, profile } from "@/content/profile";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Marquee className={styles.words} durationSeconds={60}>
        {heroWords.map((word, i) => (
          <span key={word} className={`${styles.word} ${i % 3 === 0 ? styles.filled : styles.outline}`}>
            {word} <em className={styles.star}>✦</em>
          </span>
        ))}
      </Marquee>
      <CodeCard className={styles.card} />
      <div className={styles.footer}>
        <div>
          <p className={styles.intro}>{profile.intro}</p>
          <a href="#projects" className="btn">View projects</a>
        </div>
        <ul className={styles.employers}>
          {employers.map((company) => <li key={company}>{company}</li>)}
        </ul>
      </div>
    </section>
  );
}
