import useSWR from "swr";
import NewsCard from "../components/NewsCard";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function News() {
  const { data, error } = useSWR("/api/news", fetcher);

  if (error) return <p>Error loading news…</p>;
  if (!data) return <p>Loading…</p>;

  return (
    <>
      <h2>Carbon & Climate Headlines</h2>
      <section style={{
        marginTop:"1.5rem",display:"grid",gap:"1.5rem",
        gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))"
      }}>
        {data.map((n) => <NewsCard key={n.link} item={n} />)}
      </section>
    </>
  );
}
