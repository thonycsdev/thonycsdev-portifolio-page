import { AccentCard } from "@/components/ui/AccentCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aiSteps, aiTools } from "@/content/aiWorkflow";
import styles from "./AiWorkflow.module.css";

export function AiWorkflow() {
  return (
    <section id="ai">
      <SectionHeading eyebrow="AI in my workflow" title="AI from plan to deploy.">
        <p className={styles.sub}>
          I use AI at every stage of development, with {aiTools.join(" and ")}, while still reviewing
          and understanding every line that ships to production.
        </p>
      </SectionHeading>
      <div className={styles.grid}>
        {aiSteps.map((step, i) => (
          <AccentCard
            key={step.title}
            accent={step.accent}
            label={String(i + 1).padStart(2, "0")}
            title={step.title}
            text={step.summary}
            rings
          />
        ))}
      </div>
    </section>
  );
}
