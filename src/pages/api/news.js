export default async function handler(req, res) {
    try {
      const r = await fetch(
        `https://newsdata.io/api/1/news?apikey=${process.env.NEWS_API_KEY}` +
        `&q=carbon%20OR%20climate&language=en&category=environment`
      );
      const j = await r.json();
      res.status(200).json(j.results.slice(6, 12));   
    } catch (e) {
      res.status(500).json({ error: "news‑fetch failed" });
    }
  }
  