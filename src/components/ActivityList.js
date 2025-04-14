import ActivityCard from "./ActivityCard";

export default function ActivityList({ activities, onDelete }) {
  if (!activities.length) return <p>No activities logged yet.</p>;
  return (
    <section style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
      {activities.map((act) => (
        <ActivityCard key={act.id} activity={act} onDelete={onDelete} />
      ))}
    </section>
  );
}