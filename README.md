# StegMP3

StegMP3 is a singleâ€‘file (HTML) steganography tool that hides an MP3 inside a **1920Ã—1080 PNG**.

## How it works
- The file begins with a small header + as much MP3 data as possible embedded into the **leastâ€‘significant bits** of the image.
- Any remaining MP3 bytes are appended **after the PNG IEND chunk** (trailing bytes).
- Decoding reverses this **losslessly** *as long as the PNG file is preserved byteâ€‘forâ€‘byte*.

Current settings:
- Canvas: **1920Ã—1080**
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
3. Click **Encode â†’ Download PNG**.

### Decode
1. Select an encoded PNG.
2. Click **Decode â†’ Download MP3**.

## Important constraints
- Do **not** resize, reâ€‘encode, or â€œoptimizeâ€ the output PNG.
- Many tools will strip bytes after `IEND`; that will break decoding.

## Files
- `index.html` â€” the entire app.

## License

Copyright (c) 2026 Adam Kingry. Licensed under the [MIT License](LICENSE).