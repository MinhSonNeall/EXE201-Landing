import { useState, useEffect } from 'react'
import { ITCH_URL } from '../config.js'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#top" className="nav__brand">
        <span className="nav__crown">♛</span>
        <span className="nav__title">
          Princess of the <em>Wild Hunt</em>
        </span>
      </a>

      <nav className="nav__links">
        <a href="#toner">Toner Shift</a>
        <a href="#features">Features</a>
        <a href="#gallery">Gallery</a>
        <a href="#trailer">Gameplay</a>
      </nav>

      <a className="btn btn--small" href={ITCH_URL} target="_blank" rel="noreferrer">
        Play on itch.io
      </a>
    </header>
  )
}
