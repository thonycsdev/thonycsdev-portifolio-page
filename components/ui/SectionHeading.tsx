import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  eyebrow: string;
  title?: string;
  children?: React.ReactNode;
};

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <header className={styles.heading}>
      <p className="eyebrow">{eyebrow}</p>
      {title && <h2>{title}</h2>}
      {children}
    </header>
  );
}
