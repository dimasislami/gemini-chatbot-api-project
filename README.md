# Gemini Chatbot API Project

## Deskripsi
Proyek **Gemini Chatbot API Project** bertujuan untuk membuat aplikasi Node.js yang memanggil
API Google Gemini.  
Di dalamnya tersedia **4 endpoint** percobaan:

1. **`/generate-text`** – menghasilkan teks dari prompt.
2. **`/generate-from-image`** – menghasilkan teks/konten dari gambar.
3. **`/generate-from-document`** – menghasilkan teks/konten dari dokumen.
4. **`/generate-from-audio`** – menghasilkan teks/konten dari audio.
5. **`/api/chat`** – mengirim dan menerima pesan chat secara interaktif dengan Gemini API.

## Tujuan
Menyediakan contoh implementasi sederhana untuk memanggil berbagai layanan
Google Gemini melalui API.

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
| generate text | http://localhost:3000/generate-text |
| generate from image | http://localhost:3000/generate-from-image |
| generate from document | http://localhost:3000/generate-from-document |
| generate from audio | http://localhost:3000/generate-from-audio |
| chat | http://localhost:3000/api/chat |