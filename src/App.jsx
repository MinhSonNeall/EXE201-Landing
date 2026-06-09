import { useState, useEffect } from 'react'
import { DIFFICULTIES } from './data/difficulties.js'
import { sampleStops, rgbToHex } from './utils/color.js'
import { useScrollReveal } from './hooks/useScrollReveal.js'
import Preloader from './components/Preloader.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import TonerShift from './components/TonerShift.jsx'
import Features from './components/Features.jsx'
import Gallery from './components/Gallery.jsx'
import Trailer from './components/Trailer.jsx'
import Download from './components/Download.jsx'
import Footer from './components/Footer.jsx'

// Pre-extract the color stops once.
const ACCENT = DIFFICULTIES.map((d) => d.accent)
const ACCENT_SOFT = DIFFICULTIES.map((d) => d.accentSoft)
const BG = DIFFICULTIES.map((d) => d.bg)
const BG_ALT = DIFFICULTIES.map((d) => d.bgAlt)

export default function App() {
  // `stage` = the difficulty band we're currently scrolled into (0,1,2).
  // It only drives text content; the colors themselves shift continuously.
  const [stage, setStage] = useState(0)

  // Preloader: hide once everything has loaded, with a safety timeout so a
  // slow third-party embed (the Facebook iframe) can't keep us spinning.
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    if (document.readyState === 'complete') {
      setLoaded(true)
      return
    }
    const onLoad = () => setLoaded(true)
    window.addEventListener('load', onLoad)
    const safety = setTimeout(() => setLoaded(true), 5000)
    return () => {
      window.removeEventListener('load', onLoad)
      clearTimeout(safety)
    }
  }, [])

  useScrollReveal()

  useEffect(() => {
    const root = document.documentElement
    let raf = 0

    const apply = () => {
      raf = 0
      const max = root.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0

      // Continuously interpolate the whole palette from the scroll position.
      const accent = sampleStops(ACCENT, p)
      const accentSoft = sampleStops(ACCENT_SOFT, p)
      const bg = sampleStops(BG, p)
      const bgAlt = sampleStops(BG_ALT, p)

      root.style.setProperty('--accent', rgbToHex(accent))
      root.style.setProperty('--accent-soft', rgbToHex(accentSoft))
      root.style.setProperty('--glow', `rgba(${accent.map(Math.round).join(',')}, 0.45)`)
      root.style.setProperty('--bg', rgbToHex(bg))
      root.style.setProperty('--bg-alt', rgbToHex(bgAlt))
      root.style.setProperty('--scroll', p.toFixed(4))

      const idx = Math.round(p * (DIFFICULTIES.length - 1))
      setStage((s) => (s === idx ? s : idx))
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    apply() // set initial palette
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const theme = DIFFICULTIES[stage]

  return (
    <div className="app">
      <Preloader done={loaded} />
      <Nav />
      <main>
        <Hero theme={theme} />
        <TonerShift stage={stage} theme={theme} />
        <Features />
        <Gallery />
        <Trailer />
        <Download theme={theme} />
      </main>
      <Footer />
    </div>
  )
}
