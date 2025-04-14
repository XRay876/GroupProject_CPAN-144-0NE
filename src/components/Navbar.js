import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
        document.documentElement.classList.toggle("menu-open", open);
      }, [open]);

  return (
    <header className={styles.navbar}>
      <h1 className={styles.logo}>EcoTrack</h1>

      <button
        className={`${styles.burger} ${open ? styles.open : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`${styles.links} ${open ? styles.show : ""}`}
        onClick={() => setOpen(false)}
      >
        <Link href="/">Dashboard</Link>
        <Link href="/activities">Activities</Link>
        <Link href="/tips">Tips</Link>
        <Link href="/news">News</Link>
        <Link href="/quiz">Quiz</Link>
      </nav>
    </header>
  );
}
