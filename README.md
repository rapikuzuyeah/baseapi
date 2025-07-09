# BASE API SIMPLE
---------
### 📃 S&K
1. Tidak Untuk Dijual!!!
2. Jangan lupa kasih star di ni repo!
3. Jika kamu punya masalah [chat gwejh](https://wa.me/6285147604355)

---------

### cara nambah fitur
```
module.exports = async (req, res) => {
  const text = req.query.text; // untuk https://example.com/api?text=
  if (!text) return res.status(400).json({ error: "Missing 'text' parameter" });
  try {
//kodemu
const data = {
      hasil: hasil kodenya
    };
    return res.json(data); // untuk hasil json
} catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
```
### nambahin docs di html
```
<div class="bg-white bg-opacity-15 rounded-lg p-5 flex flex-col md:flex-row justify-between items-center shadow-lg">
                <p class="text-lg font-medium mb-2 md:mb-0 md:mr-4">API ENDPOINT:</p>
                <div class="flex flex-col md:flex-row items-center w-full md:w-auto">
                    <a id="api-endpoint" href="/api/" class="text-blue-300 hover:text-blue-200 break-all mb-2 md:mb-0 md:mr-4 transition-colors duration-200" target="_blank">/api/ai/a>
                    <button onclick="copyUrl('api-endpoint')" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">Salin</button>
                </div>
            </div>
```

