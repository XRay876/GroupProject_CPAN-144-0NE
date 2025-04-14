import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <h1 className={styles.logo}>EcoTrack</h1>
      <nav className={styles.links}>
        <Link href="/">Dashboard</Link>
        <Link href="/activities">Activities</Link>
        <Link href="/tips">Tips</Link>
      </nav>
    </header>
  );
}