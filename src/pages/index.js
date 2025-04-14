import { useState, useEffect } from "react";

export default function Dashboard() {
  const [activities, setActivities] = useState([]);

  // Pull from localStorage for demo persistence
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("eco_acts") || "[]");
    setActivities(stored);
  }, []);

  const totalCo2 = activities.reduce((sum, a) => sum + a.co2, 0);

  return (
    <section>
      <h2>Today’s Impact</h2>
      <p>You’ve logged <strong>{activities.length}</strong> activities today.</p>
      <p>Total estimated emissions: <strong>{totalCo2.toFixed(2)} kg CO₂</strong></p>
    </section>
  );
}