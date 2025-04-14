import { useState } from "react";
import TipCard from "../components/TipCard";

const tipsArr = [
  "Switch to LED bulbs to save energy.",
  "Take shorter showers to conserve water.",
  "Bike or walk for short trips instead of driving.",
  "Unplug idle chargers and electronics.",
  "Eat one plant‑based meal today.",
];

export default function Tips() {
  const [tips, setTips] = useState(tipsArr);
  const shuffle = () => setTips((t) => [...t].sort(() => 0.5 - Math.random()));

  return (
    <>
      <button className="neon-btn" onClick={shuffle}>Shuffle Tips</button>
      <section style={{ marginTop: "1.5rem", display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
        {tips.map((t) => (
          <TipCard key={t} tip={t} />
        ))}
      </section>
    </>
  );
}