import Link from "next/link";
import styles from "../styles/Card.module.css";

export default function ActivityCard({ activity, onDelete }) {
  return (
    <div className={`${styles.card} neon-card`}>
      <Link href={`/activities/${activity.id}`} className={styles.cardLink}>
        <h3>{activity.title}</h3>
        <p>{activity.co2.toFixed(2)} kg CO₂</p>
      </Link>
      <button className="neon-btn-sm" onClick={() => onDelete(activity.id)}>✕</button>
    </div>
  );
}