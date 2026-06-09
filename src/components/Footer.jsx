import { SOCIALS } from '../config.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <span className="nav__crown">♛</span>
          <span>Princess of the <em>Wild Hunt</em></span>
        </div>
        <nav className="footer__socials">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} POTWH. An indie student project.</p>
        <p>Made with 🏹 · 2D Action Adventure</p>
      </div>
    </footer>
  )
}
