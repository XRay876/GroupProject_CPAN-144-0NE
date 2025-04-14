import styles from "../styles/Progress.module.css";

export default function GoalBar({ total, goal }) {
  const pct = Math.min((total / goal) * 100, 100);
  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>{total.toFixed(2)} / {goal} kg</div>
      <div className={styles.barBg}>
        <div className={styles.barFill} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}