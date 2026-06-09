// One-off: convert every PNG/JPG under src/img to .webp, then report savings.
// Backgrounds are capped at 1920px wide & lossy; logos keep alpha at high quality.
import sharp from 'sharp'
import { readdir, stat, unlink } from 'node:fs/promises'
import { join, extname } from 'node:path'

const ROOT = new URL('../src/img/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')

async function walk(dir) {
  const out = []
  for (const name of await readdir(dir)) {
    const p = join(dir, name)
    const s = await stat(p)
    if (s.isDirectory()) out.push(...(await walk(p)))
    else out.push(p)
  }
  return out
}

const fmt = (b) => (b / 1024).toFixed(0) + ' KB'

const files = (await walk(ROOT)).filter((f) => /\.(png|jpe?g)$/i.test(f))
let before = 0
let after = 0

for (const file of files) {
  const isLogo = file.replace(/\\/g, '/').includes('/logo/')
  const out = file.replace(/\.(png|jpe?g)$/i, '.webp')
  const srcSize = (await stat(file)).size

  const img = sharp(file).resize({
    width: isLogo ? 1200 : 1920,
    withoutEnlargement: true,
  })
  await img
    .webp(isLogo ? { quality: 90, alphaQuality: 100 } : { quality: 78 })
    .toFile(out)

  const outSize = (await stat(out)).size
  before += srcSize
  after += outSize
  console.log(`${file.split(/[\\/]/).pop()}  ${fmt(srcSize)} -> ${fmt(outSize)}`)

  await unlink(file) // remove the heavy original
}

console.log('────────────────────────────')
console.log(`TOTAL  ${fmt(before)} -> ${fmt(after)}  (saved ${fmt(before - after)})`)
