import ActivityCard from "./ActivityCard";

export default function ActivityList({ activities }) {
  if (!activities.length) return <p>No activities logged yet.</p>;
  return (
    <section style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
      {activities.map((act) => (
        <ActivityCard key={act.id} activity={act} />
      ))}
    </section>
  );
}