import { Marquee } from "@/components/ui/Marquee";
import { profile } from "@/content/profile";
import styles from "./TopBar.module.css";

export function TopBar() {
  const items = Array.from({ length: 6 }, (_, i) => (
    <span key={i} className={styles.item}>✦ {profile.role} · {profile.location}</span>
  ));

  return <Marquee className={styles.topbar}>{items}</Marquee>;
}
