import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about">
      <SectionHeading eyebrow="About me">
        <p className={styles.lead}>{profile.about}</p>
      </SectionHeading>
    </section>
  );
}
