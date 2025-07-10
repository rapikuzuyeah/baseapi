# BASE API SIMPLE
---------
### 📃 S&K
1. Tidak Untuk Dijual!!!
2. Jangan lupa kasih star di ni repo!
3. Jika kamu punya masalah ya bikin aja issue di ni repo

---------

---------
### 📃 NOTE
Kemungkinan ada module yang kurang untuk scraper, klo ada tambahin aja di package.json
---------


---

## 🛠️ Cara Menambahkan Fitur
Menambahkan fitur ke API-mu mudah! Ikuti struktur kode dasar ini aja:

```javascript
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
````

-----

## 📄 Memperbarui Dokumentasi API (docs.html)

Penting untuk menjaga dokumentasi API-mu tetap *up-to-date*. Gunakan *snippet* HTML ini untuk menambahkan *endpoint* API baru ke `docs.html`:

```html
<div class="bg-white bg-opacity-15 rounded-lg p-5 flex flex-col md:flex-row justify-between items-center shadow-lg">
    <p class="text-lg font-medium mb-2 md:mb-0 md:mr-4">API ENDPOINT:</p>
    <div class="flex flex-col md:flex-row items-center w-full md:w-auto">
        <a id="api-endpoint-baru" href="/api/nama-endpoint-mu" class="text-blue-300 hover:text-blue-200 break-all mb-2 md:mb-0 md:mr-4 transition-colors duration-200" target="_blank">/api/nama-endpoint-mu</a>
        <button onclick="copyUrl('api-endpoint-baru')" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">Salin</button>
    </div>
</div>
```

**Catatan:** Pastikan untuk mengganti `api-endpoint-baru` dengan ID yang unik dan `/api/nama-endpoint-mu` dengan *path* API aktualmu.

-----

## 🚀 Cara *Deploy* ke Vercel

1. Fork repo ini
2. Login ke [vercel.com](https://vercel.com) pake akun githubmu
3. Tambah project terus pilih repo hasil forkmu untuk di deploy
4. Tunggu aja nanti juga jadi
5. Klo dah jadi kau bebas dah mw setting2 atau rename2, asal jan lupa creditnya aja

-----

### Note:

Buat setting2 klo run di vercel ya settingnya tetep di github ( Buat yang gak tau aja )

-----

Terima kasih telah menggunakan **Simple API Basepoint**\! Selamat membangun API yang luar biasa\!

```
```
