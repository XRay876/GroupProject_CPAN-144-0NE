import styles from "../styles/Card.module.css";

export default function NewsCard({ item }) {
  return (
    <a href={item.link} target="_blank" rel="noreferrer"
       className={`${styles.card} neon-card`} style={{ display:"block" }}>
      {item.image_url && (
        <img src={item.image_url} alt="" style={{ width:"100%",borderRadius:8,marginBottom:12 }} />
      )}
      <h3 style={{ fontSize:"1.1rem" }}>{item.title}</h3>
      <small>{new Date(item.pubDate).toLocaleDateString()}</small>
    </a>
  );
}
