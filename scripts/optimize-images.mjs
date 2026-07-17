import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.resolve("public");
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 78;
const EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

async function optimize(file) {
  const ext = path.extname(file);
  const out = file.slice(0, -ext.length) + ".webp";
  const inputStat = await fs.stat(file);
  const image = sharp(file, { failOn: "none" });
  const meta = await image.metadata();

  let pipeline = sharp(file, { failOn: "none" }).rotate();
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
    });
  }

  await pipeline
    .webp({ quality: WEBP_QUALITY, effort: 6 })
    .toFile(out);

  const outStat = await fs.stat(out);
  await fs.unlink(file);

  return {
    file: path.relative(PUBLIC_DIR, file),
    out: path.relative(PUBLIC_DIR, out),
    before: inputStat.size,
    after: outStat.size,
    width: meta.width,
  };
}

const files = await walk(PUBLIC_DIR);
let beforeTotal = 0;
let afterTotal = 0;

console.log(`Optimizando ${files.length} imágenes...\n`);

for (const file of files) {
  try {
    const result = await optimize(file);
    beforeTotal += result.before;
    afterTotal += result.after;
    const saved = ((1 - result.after / result.before) * 100).toFixed(1);
    console.log(
      `${result.file} → ${result.out} | ${(result.before / 1024).toFixed(0)}KB → ${(result.after / 1024).toFixed(0)}KB (-${saved}%)`
    );
  } catch (err) {
    console.error(`Error en ${file}:`, err.message);
  }
}

console.log(
  `\nTotal: ${(beforeTotal / 1024 / 1024).toFixed(1)}MB → ${(afterTotal / 1024 / 1024).toFixed(1)}MB (−${((1 - afterTotal / beforeTotal) * 100).toFixed(1)}%)`
);
