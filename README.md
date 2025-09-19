# Gemini Chatbot API Project

## Deskripsi
Proyek **Gemini Chatbot API Project** adalah aplikasi Node.js + Express yang memanfaatkan Google Gemini API untuk membuat chatbot cerdas berbasis web.
Aplikasi ini menyediakan beberapa endpoint yang dapat digunakan untuk percobaan integrasi AI, baik untuk generasi teks maupun media lainnya.

## Tujuan
Membangun chatbot cerdas yang dapat merespons percakapan pengguna secara real-time.

## Spesifikasi Kebutuhan
- **Node.js**: versi terbaru (latest LTS atau Current).
- **API Key Google Gemini**: diperlukan untuk autentikasi.
- **Model Gemini**: `gemini-2.5-flash`.

## Cara Instalasi dan Menjalankan

### 1. Clone Repository
```bash
git clone https://github.com/dimasislami/gemini-chatbot-api-project.git
cd gemini-chatbot-api-project
```

### 2. Install Dependensi
```bash
npm install
```

### 3. Konfigurasi Environment
```bash
cp .env.example .env
GEMINI_API_KEY=masukkan_api_key_anda
```

### 4. Menjalankan Server
```bash
node index.js
```

### 5. Akses di Browser
```bash
http://localhost:3000/
```

### 6. Akses Endpoint
| Endpoint             | Url                                                                |
| ----------------- | ------------------------------------------------------------------ |
| chat | http://localhost:3000/api/chat |