import { AccentCard } from "@/components/ui/AccentCard";
import { ScrollMarquee } from "@/components/ui/ScrollMarquee";
import { experiences } from "@/content/experience";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section id="experience" aria-label="Experience">
      <ScrollMarquee>
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
      </ScrollMarquee>
    </section>
  );
}
