// Build app-style favicons from the wide logo: center it on a dark brand
// square so it stays legible at tiny sizes. Outputs PNGs into public/.
import sharp from 'sharp'

const LOGO = new URL('../src/img/logo/potwh-logo-v1.webp', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')
const OUT = new URL('../public/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')

const MASTER = 512
const PAD = 56 // breathing room around the logo

// Logo scaled to fit the padded width, preserving aspect.
const logoBuf = await sharp(LOGO)
  .resize({ width: MASTER - PAD * 2 })
  .toBuffer()

// Rounded-corner dark tile (brand color #0c0a16).
const radius = 96
const roundMask = Buffer.from(
  `<svg width="${MASTER}" height="${MASTER}"><rect width="${MASTER}" height="${MASTER}" rx="${radius}" ry="${radius}"/></svg>`,
)

const tile = await sharp({
  create: { width: MASTER, height: MASTER, channels: 4, background: { r: 12, g: 10, b: 22, alpha: 1 } },
})
  .composite([
    { input: logoBuf, gravity: 'center' },
    { input: roundMask, blend: 'dest-in' },
  ])
  .png()
  .toBuffer()

const sizes = [
  { name: 'favicon-32.png', size: 32 },
  { name: 'favicon-192.png', size: 192 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'favicon-512.png', size: 512 },
]

for (const { name, size } of sizes) {
  await sharp(tile).resize(size, size).png().toFile(OUT + name)
  console.log('wrote public/' + name + ' (' + size + 'px)')
}
