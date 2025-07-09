const { JSDOM } = require('jsdom');
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: "Missing 'url' parameter" });

  try {
    const anu = url;
    const iyah = anu.replace("/u/", "/api/file/");
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('HTTP error!');
    }
    const html = await response.text();
    const dom = new JSDOM(html);
    const doc = dom.window.document;
    const titleElement = doc.querySelector('title');
    let titleText = titleElement ? titleElement.textContent : '';
    const searchTerm = ' ~ pixeldrain';
    if (titleText.includes(searchTerm)) {
      titleText = titleText.split(searchTerm)[0];
      const data = {
        filename: titleText,
        fileurl: iyah
      };
      return res.json(data);
    } else {
      return res.status(404).json({ error: "Pixeldrain file not found or invalid title" });
    }
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};