# StegMP3

StegMP3 is a single‑file (HTML) steganography tool that hides an MP3 inside a **1920×1080 PNG**.

## How it works
- The file begins with a small header + as much MP3 data as possible embedded into the **least‑significant bits** of the image.
- Any remaining MP3 bytes are appended **after the PNG IEND chunk** (trailing bytes).
- Decoding reverses this **losslessly** *as long as the PNG file is preserved byte‑for‑byte*.

Current settings:
- Canvas: **1920×1080**
- Embedding: **4 LSB bits per RGB channel**
- Output format: **PNG only**

## Run locally
From this folder:

```bat
python -m http.server 8000
```

Then open:
- http://localhost:8000/

## Usage
### Encode
1. Choose a cover image (PNG/BMP/WEBP/JPG/TIF/GIF are accepted as inputs).
2. Choose an MP3.
3. Click **Encode → Download PNG**.

### Decode
1. Select an encoded PNG.
2. Click **Decode → Download MP3**.

## Important constraints
- Do **not** resize, re‑encode, or “optimize” the output PNG.
- Many tools will strip bytes after `IEND`; that will break decoding.

## Files
- `index.html` — the entire app.
