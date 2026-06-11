const fs = require('fs');
const path = require('path');
const pngToIco = require('png-to-ico');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'icon.png');
const dstDir = path.join(root, 'build');
const dst = path.join(dstDir, 'icon.ico');

if (!fs.existsSync(src)) {
  console.error('Missing icon.png in the repository root.');
  process.exit(1);
}

if (!fs.existsSync(dstDir)) {
  fs.mkdirSync(dstDir, { recursive: true });
}

pngToIco(src)
  .then((buf) => fs.writeFileSync(dst, buf))
  .then(() => {
    console.log(`Created ${dst}`);
  })
  .catch((error) => {
    console.error('Failed to create icon.ico:', error);
    process.exit(1);
  });
