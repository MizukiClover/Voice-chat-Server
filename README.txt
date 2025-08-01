📦 KAKAP SIGNALING SERVER

Ini adalah WebSocket Signaling Server untuk Voice Chat Kakap Server.

---

📁 Cara Menjalankan Secara Lokal:

1. Buka terminal di folder ini
2. Jalankan perintah:

   npm install
   npm start

---

🚀 Cara Deploy ke RENDER:

1. Buka https://render.com
2. Buat akun dan login
3. Klik 'New Web Service'
4. Hubungkan ke repo GitHub (isi file ini)
5. Set:

   - Start command: node server.js
   - Port: 3000

6. Klik Deploy

---

🔗 Gunakan link WebSocket hasil deploy di index.html:
  const ws = new WebSocket('wss://<link-dari-render>.onrender.com');