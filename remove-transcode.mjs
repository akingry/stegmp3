import fs from 'node:fs/promises';

const p = new URL('./index.html', import.meta.url);
let s = await fs.readFile(p, 'utf8');

// Remove the Encoding checkbox block
s = s.replace(/\n\s*<label>Encoding<\/label>[\s\S]*?<\/div>\n\s*<div class="row" style="margin-top:12px;">/m,
  '\n\n          <div class="row" style="margin-top:12px;">');

// Remove DOM reference
s = s.replace(/\n\s*const optTranscode = document\.getElementById\('optTranscode'\);/g, '');

// Remove ffmpeg/transcode helper block (between markers)
s = s.replace(/\n\s*\/\/ --- ffmpeg\.wasm \(loaded on demand\)[\s\S]*?\n\s*async function transcodeAacToMp3\([\s\S]*?\n\s*}\n/g, '\n');

// Remove any leftover vendor comments (safe)

await fs.writeFile(p, s, 'utf8');
console.log('Removed transcode UI + ffmpeg helper block.');
