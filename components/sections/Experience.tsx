import { AccentCard } from "@/components/ui/AccentCard";
import { Marquee } from "@/components/ui/Marquee";
import { experiences } from "@/content/experience";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section id="experience" aria-label="Experience">
      <Marquee>
        {experiences.map((job) => (
          <AccentCard
            key={`${job.company}-${job.period}`}
            className={styles.card}
            accent={job.accent}
            label={job.period}
            title={job.role}
            subtitle={job.client ? `${job.company} · ${job.client}` : job.company}
            text={job.summary}
          />
        ))}
      </Marquee>
    </section>
  );
}
