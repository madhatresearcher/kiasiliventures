import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = "C:\\Users\\Jurugo\\OneDrive\\VS Code\\Web Development\\kiasili";
const input = path.join(root, "public", "images", "Kiasili Ventures Logo.png");
const outIco = path.join(root, "public", "favicon-v3.ico");
const outPng = path.join(root, "public", "icon-v3.png");
const outApple = path.join(root, "public", "apple-icon-v3.png");

const rendered = await sharp(input).resize(512, 512, {
  fit: "contain",
  background: { r: 0, g: 0, b: 0, alpha: 0 },
}).png().toBuffer();

await sharp(rendered).resize(512, 512, { fit: "contain" }).png().toFile(outPng);
await sharp(rendered).resize(180, 180, { fit: "contain" }).png().toFile(outApple);

const raw = await sharp(rendered)
  .resize(64, 64, { fit: "cover" })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const width = raw.info.width;
const height = raw.info.height;
const rowSize = width * 4;
const xorSize = rowSize * height;
const andRowSize = Math.ceil(width / 32) * 4;
const andSize = andRowSize * height;
const imageSize = 40 + xorSize + andSize;
const buffer = Buffer.alloc(6 + 16 + imageSize);

let offset = 0;
buffer.writeUInt16LE(0, offset);
offset += 2;
buffer.writeUInt16LE(1, offset);
offset += 2;
buffer.writeUInt16LE(1, offset);
offset += 2;

const imageOffset = 22;
buffer.writeUInt8(width === 256 ? 0 : width, offset);
offset += 1;
buffer.writeUInt8(height === 256 ? 0 : height, offset);
offset += 1;
buffer.writeUInt8(0, offset);
offset += 1;
buffer.writeUInt8(0, offset);
offset += 1;
buffer.writeUInt16LE(1, offset);
offset += 2;
buffer.writeUInt16LE(32, offset);
offset += 2;
buffer.writeUInt32LE(imageSize, offset);
offset += 4;
buffer.writeUInt32LE(imageOffset, offset);
offset += 4;

buffer.writeUInt32LE(40, offset);
offset += 4;
buffer.writeInt32LE(width, offset);
offset += 4;
buffer.writeInt32LE(height * 2, offset);
offset += 4;
buffer.writeUInt16LE(1, offset);
offset += 2;
buffer.writeUInt16LE(32, offset);
offset += 2;
buffer.writeUInt32LE(0, offset);
offset += 4;
buffer.writeUInt32LE(xorSize + andSize, offset);
offset += 4;
buffer.writeInt32LE(2835, offset);
offset += 4;
buffer.writeInt32LE(2835, offset);
offset += 4;
buffer.writeUInt32LE(0, offset);
offset += 4;
buffer.writeUInt32LE(0, offset);
offset += 4;

for (let y = 0; y < height; y += 1) {
  const srcRow = height - 1 - y;
  for (let x = 0; x < width; x += 1) {
    const src = (srcRow * width + x) * 4;
    const dst = offset + y * rowSize + x * 4;
    buffer[dst + 0] = raw.data[src + 2];
    buffer[dst + 1] = raw.data[src + 1];
    buffer[dst + 2] = raw.data[src + 0];
    buffer[dst + 3] = raw.data[src + 3];
  }
}

offset += xorSize;
buffer.fill(0, offset, offset + andSize);

await fs.writeFile(outIco, buffer);

console.log(`Wrote ${outIco}`);
console.log(`Wrote ${outPng}`);
console.log(`Wrote ${outApple}`);
