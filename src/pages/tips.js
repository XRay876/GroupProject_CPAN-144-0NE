import TipCard from "../components/TipCard";

const tips = [
  "Switch to LED bulbs to save energy.",
  "Take shorter showers to conserve water.",
  "Bike or walk for short trips instead of driving.",
];

export default function Tips() {
  return (
    <section style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
      {tips.map((t) => (
        <TipCard key={t} tip={t} />
      ))}
    </section>
  );
}