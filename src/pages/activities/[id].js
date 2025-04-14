import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ActivityDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    if (!id) return;
    const stored = JSON.parse(localStorage.getItem("eco_acts") || "[]");
    setActivity(stored.find((a) => a.id == id));
  }, [id]);

  if (!activity) return <p>Loading…</p>;
  return (
    <article>
      <h2>{activity.title}</h2>
      <p><strong>{activity.co2.toFixed(2)} kg CO₂</strong></p>
      <p>ID: {activity.id}</p>
    </article>
  );
}
