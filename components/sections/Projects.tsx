import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section id="projects">
      <SectionHeading eyebrow="Projects" title="Open source, built with care.">
        <a href={profile.github} className="btn">View on GitHub</a>
      </SectionHeading>
      <div className={styles.grid}>
        {projects.map((project) => (
          <a key={project.name} href={project.url} className={`${styles.tile} rings bg-${project.accent}`}>
            <div className={styles.stack}>
              {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
            <div>
              <h3>{project.name}</h3>
              <p className={styles.summary}>{project.summary}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
