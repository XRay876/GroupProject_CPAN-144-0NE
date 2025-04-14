import { useState } from "react";

export default function ActivityForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [co2, setCo2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !co2) return;
    onAdd({ id: Date.now(), title, co2: parseFloat(co2) });
    setTitle("");
    setCo2("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem" }}>
      <input
        type="text"
        placeholder="Activity (e.g. Bike Ride)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="CO₂ kg"
        step="0.01"
        value={co2}
        onChange={(e) => setCo2(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
