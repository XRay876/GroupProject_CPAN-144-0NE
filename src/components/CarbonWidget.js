import styles from "../styles/Card.module.css";

export default function CarbonWidget({ intensity }) {
  if (!intensity) return null;

  return (
    <div className={`${styles.card} neon-card`} style={{ maxWidth: 320 }}>
      <h3 style={{ marginBottom: ".25rem" }}>Grid Intensity</h3>
      <p style={{ fontSize: "1.8rem", fontWeight: 700 }}>
        {intensity}<span style={{ fontSize: "1rem" }}>g CO₂ / kWh</span>
      </p>
      <small>live UK National Grid data</small>
    </div>
  );
}
