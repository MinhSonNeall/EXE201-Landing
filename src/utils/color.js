// Tiny color helpers for the scroll-driven Toner Shift.

export function hexToRgb(hex) {
  const h = hex.replace('#', '')
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ]
}

export function rgbToHex([r, g, b]) {
  const c = (v) => Math.round(v).toString(16).padStart(2, '0')
  return `#${c(r)}${c(g)}${c(b)}`
}

const lerp = (a, b, t) => a + (b - a) * t
const lerpRgb = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)]

// Given an array of hex color stops and a 0..1 progress, return the
// interpolated rgb triplet.
export function sampleStops(hexStops, progress) {
  const p = Math.min(1, Math.max(0, progress))
  const seg = p * (hexStops.length - 1)
  const i = Math.min(Math.floor(seg), hexStops.length - 2)
  const t = seg - i
  return lerpRgb(hexToRgb(hexStops[i]), hexToRgb(hexStops[i + 1]), t)
}
