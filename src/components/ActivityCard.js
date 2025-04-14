import Link from "next/link";
import styles from "../styles/Card.module.css";

export default function ActivityCard({ activity }) {
  return (
    <Link href={`/activities/${activity.id}`}> 
      <div className={styles.card}>
        <h3>{activity.title}</h3>
        <p>{activity.co2.toFixed(2)} kg CO₂</p>
      </div>
    </Link>
  );
}