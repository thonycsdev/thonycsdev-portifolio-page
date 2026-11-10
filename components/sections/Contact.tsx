import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <SectionHeading eyebrow="Contact" title="Let's build something together.">
        <p className={styles.note}>{profile.availability}</p>
        <a href={profile.mailto} className="btn">Send an email</a>
      </SectionHeading>
    </section>
  );
}
