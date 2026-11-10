import { CodeCard } from "@/components/ui/CodeCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pipeline, quotes, stackLayers } from "@/content/highlights";
import { skills } from "@/content/skills";
import styles from "./WhyMe.module.css";

export function WhyMe() {
  return (
    <section>
      <SectionHeading eyebrow="Why me" title="From data model to deploy." />
      <div className={styles.bento}>
        <div className={`${styles.cell} bg-blue`}>
          <h3>“{quotes.endToEnd}”</h3>
          <div className={styles.layers}>
            {stackLayers.map((layer) => <span key={layer}>{layer}</span>)}
          </div>
        </div>
        <div className={`${styles.cell} ${styles.wide} rings bg-green`}>
          <CodeCard className={styles.tilt} />
        </div>
        <div className={`${styles.cell} ${styles.half} bg-ink`}>
          <pre className={styles.terminal}>
            {pipeline.map((step) => (
              <span key={step.command}>
                $ {step.command}{"\n"}<b>✓</b> {step.result}{"\n"}
              </span>
            ))}
          </pre>
        </div>
        <div className={`${styles.cell} ${styles.half} bg-orange`}>
          <h3>“{quotes.microservices}”</h3>
        </div>
        <div className={`${styles.cell} ${styles.wide} ${styles.inkText} bg-yellow`}>
          <h3>“{quotes.nextChallenge}”</h3>
          <ul className={styles.chips}>
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
        <div className={`${styles.cell} ${styles.inkText} bg-pink`}>
          <h3>“{quotes.scale}”</h3>
        </div>
      </div>
    </section>
  );
}
