import { useState, useEffect } from "react";
import ActivityForm from "../components/ActivityForm";
import ActivityList from "../components/ActivityList";

export default function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("eco_acts") || "[]");
    setActivities(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("eco_acts", JSON.stringify(activities));
  }, [activities]);

  return (
    <>
      <h2>Add New Activity</h2>
      <ActivityForm onAdd={(a) => setActivities([a, ...activities])} />
      <hr style={{ margin: "1rem 0" }} />
      <h2>Your Activities</h2>
      <ActivityList activities={activities} />
    </>
  );
}
