# Gemini AI API Project

## Deskripsi
Proyek **Gemini AI API Project** bertujuan untuk membuat aplikasi Node.js yang memanggil
API Google Gemini.  
Di dalamnya tersedia **4 endpoint** percobaan:

1. **`/generate-text`** – menghasilkan teks dari prompt.
2. **`/generate-from-image`** – menghasilkan teks/konten dari gambar.
3. **`/generate-from-document`** – menghasilkan teks/konten dari dokumen.
4. **`/generate-from-audio`** – menghasilkan teks/konten dari audio.

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
git clone https://github.com/username/gemini-ai-api-project.git
cd gemini-ai-api-project

### 2. Install Dependensi
```bash
npm install

### 3. Konfigurasi Environment
```bash
GEMINI_API_KEY=masukkan_api_key_anda

### 4. Menjalankan Server
```bash
node index.js