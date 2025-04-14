export default async function handler(req, res) {
    try {
      const r = await fetch("https://api.carbonintensity.org.uk/intensity");
      const j = await r.json();
      const intensity = j?.data?.[0]?.intensity?.actual; 
      res.status(200).json({ intensity });
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch carbon‑intensity" });
    }
  }
  