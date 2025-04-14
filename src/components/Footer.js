import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <small>© {new Date().getFullYear()} EcoTrack. Live lightly 🌱</small>
    </footer>
  );
}