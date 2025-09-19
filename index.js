import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import fs from "fs/promises";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const upload = multer();
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

const GEMINI_MODEL = "gemini-2.5-flash";

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// 1. Endpoint Generate Text
app.post("/generate-text", async (req, res) => {
  try {
    const { prompt } = req.body;

    const resp = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: prompt,
    });

    res.json({ result: extractText(resp) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Endpoint Generate From Image
app.post('/generate-from-image', upload.single('image'), async (req, res) => {
  try {
    const { prompt } = req.body;
    const imageBase64 = req.file.buffer.toString('base64');
    const resp = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: [
        { text: prompt },
        { inlineData: { mimeType: req.file.mimetype, data: imageBase64 } }
      ]
    });
    res.json({ result: extractText(resp) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Endpoint Generate From Document
app.post('/generate-from-document', upload.single('document'), async (req, res) => {
  try {
    const { prompt } = req.body;
    const docBase64 = req.file.buffer.toString('base64');
    const resp = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: [
        { text: prompt || "Ringkas dokumen berikut:" },
        { inlineData: { mimeType: req.file.mimetype, data: docBase64 } }
      ]
    });
    res.json({ result: extractText(resp) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Endpoint Generate From Audio
app.post('/generate-from-audio', upload.single('audio'), async (req, res) => {
  try {
    const { prompt } = req.body;
    const audioBase64 = req.file.buffer.toString('base64');
    const resp = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: [
        { text: prompt || "Transkrip audio berikut:" },
        { inlineData: { mimeType: req.file.mimetype, data: audioBase64 } }
      ]
    });
    res.json({ result: extractText(resp) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. Endpoint Chat
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!Array.isArray(messages)) throw new Error("messages must be an array");
    const contents = messages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.content }]
    }));
    const resp = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents
    });
    res.json({ result: extractText(resp) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

function extractText (resp) {
  try {
    const text = 
      resp?.response?.candidates?.[0]?.content?.parts?.[0]?.text ??
      resp?.candidates?.[0]?.content?.parts?.[0]?.text ??
      resp?.response?.candidates?.[0]?.content?.text;
    return text || JSON.stringify(resp, null, 2);
  } catch (err) {
    return JSON.stringify(resp, null, 2);
  }
}

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});