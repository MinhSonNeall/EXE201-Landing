import { ITCH_URL } from '../config.js'
import heroBg from '../img/background/bg-1.webp'
import logo from '../img/logo/potwh-logo-v1.webp'

export default function Hero({ theme }) {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__photo" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="hero__overlay" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__grain" />
      </div>

      <div className="hero__inner">
        <span className="hero__eyebrow">2D ACTION ADVENTURE · PC</span>

        <h1 className="hero__title hero__title--logo">
          <img src={logo} className="hero__logo" alt="Princess of the Wild Hunt" />
        </h1>

        <p className="hero__tagline">
          She isn't waiting in a tower to be saved.
          <br />
          <strong>She is the hunt.</strong>
        </p>

        <div className="hero__cta">
          <a className="btn btn--primary btn--lg" href={ITCH_URL} target="_blank" rel="noreferrer">
            ▶ Download on itch.io
          </a>
          <a className="btn btn--ghost btn--lg" href="#trailer">
            Watch Gameplay
          </a>
        </div>

        <p className="hero__note">
          Free indie title · Built as a student project · Current tone:{' '}
          <strong style={{ color: 'var(--accent-soft)' }}>{theme.label}</strong>
        </p>
      </div>

      <a href="#toner" className="hero__scroll" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}
