import { useState } from "react";
import styles from "../styles/Card.module.css";

const Q = [
  { q: "How do you commute most days?",
    a: ["Car (solo)", "Public transit", "Bike / walk"],
    s: [0, 1, 2] },
  { q: "What’s your diet like today?",
    a: ["Mostly meat", "Mix incl. veg", "Plant‑based"],
    s: [0, 1, 2] },
  { q: "Thermostat setting right now?",
    a: [">23 °C", "20‑23 °C", "<20 °C"],
    s: [0, 1, 2] },
  { q: "Laundry washed…",
    a: ["Hot & half‑load", "Warm & full", "Cold & full"],
    s: [0, 1, 2] },
  { q: "Reusable water bottle today?",
    a: ["No", "Sometimes", "Yes"],
    s: [0, 1, 2] }
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  if (step === Q.length) {
    const pct = (score / (Q.length * 2)) * 100;
    return (
      <div className={`${styles.card} neon-card`} style={{ maxWidth:500,margin:"0 auto" }}>
        <h2>Your eco‑score: {Math.round(pct)}%</h2>
        <p>{pct > 66 ? "🌟 Eco‑hero!" :
             pct > 33 ? "👍 Room to improve" :
                        "🚀 Let’s start your green journey!"}</p>
        <button className="neon-btn" onClick={() => { setStep(0); setScore(0); }}>
          Try again
        </button>
      </div>
    );
  }

  const cur = Q[step];
  return (
    <div className={`${styles.card} neon-card`} style={{ maxWidth:600,margin:"0 auto" }}>
      <h3>{cur.q}</h3>
      <div style={{ display:"grid", gap:"1rem", marginTop:"1rem" }}>
        {cur.a.map((opt, i) => (
          <button key={opt} className="neon-btn"
            onClick={() => { setScore(score + cur.s[i]); setStep(step + 1); }}>
            {opt}
          </button>
        ))}
      </div>
      <small style={{ display:"block",marginTop:"1rem" }}>
        {step + 1} / {Q.length}
      </small>
    </div>
  );
}
