export default async function handler(req, res) {
  try {
    const { number } = req.query;

    if (!number) {
      return res.status(400).json({ error: "number parameter required" });
    }

    const url = `https://ab-calltraceapi.vercel.app/info?number=${number}`;
    const response = await fetch(url);
    const data = await response.text();

    res.status(200).send(data);
  } catch (err) {
    res.status(500).json({ error: "API failed" });
  }
}