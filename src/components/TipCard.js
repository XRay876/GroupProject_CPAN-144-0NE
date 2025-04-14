import { useState } from "react";
import styles from "../styles/Card.module.css";

export default function TipCard({ tip }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className={styles.card}>
      <p>{tip}</p>
      <button onClick={() => setLiked((l) => !l)}>
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  );
}