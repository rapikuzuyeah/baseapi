const { GoogleGenAI } = require("@google/genai");

module.exports = async (req, res) => {
  const text = req.query.text;
  const system = req.query.system;
  if (!text || !system) return res.status(400).json({ error: "Missing 'text' or 'system' parameter" });
  try {
    const ai = new GoogleGenAI({ apiKey: "AIzaSyBCgCNpdMqP3HtGB_0nsyEH4YA5a0M3Czk" });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${text}`,
      config: {
        systemInstruction: `${system}`,
      },
    });
    const data = {
      text: response.text
    };
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
