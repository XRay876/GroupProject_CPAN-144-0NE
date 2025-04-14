import { useState, useEffect } from "react";
import GoalBar from "../components/GoalBar";
import CarbonWidget from "../components/CarbonWidget";

export default function Dashboard() {
  const [activities, setActivities] = useState([]);
  const [goal, setGoal] = useState(10);

  const [carbonIntensity, setCarbonIntensity] = useState(null);

  useEffect(() => {
    const storedActs = JSON.parse(localStorage.getItem("eco_acts") || "[]");
    setActivities(storedActs);
    const storedGoal = JSON.parse(localStorage.getItem("eco_goal") || "10");
    setGoal(storedGoal);
    fetch("/api/carbon")
     .then((r) => r.json())
     .then((d) => setCarbonIntensity(d.intensity))
     .catch(console.error);
  }, []);

  const totalCo2 = activities.reduce((sum, a) => sum + a.co2, 0);

  return (
      <section style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
       alignItems: "start", maxWidth: 900, margin: "0 auto" }}>
      <div>
        <h2>Today’s Impact</h2>
        <GoalBar total={totalCo2} goal={goal} />
        <div style={{ marginTop: "1.5rem" }}>
          <label>Daily CO₂ Goal (kg): </label>
          <input
            type="number"
            value={goal}
            onChange={(e) => {
              const g = parseFloat(e.target.value || 0);
              setGoal(g);
              localStorage.setItem("eco_goal", JSON.stringify(g));
            }}
            style={{ width: 80 }}
          />
        </div>
      </div>

      <CarbonWidget intensity={carbonIntensity} />
    </section>
  );
}