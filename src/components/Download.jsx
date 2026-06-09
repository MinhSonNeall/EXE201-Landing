import { ITCH_URL, ITCH_EMBED } from '../config.js'
import downloadBg from '../img/background/last.webp'

export default function Download({ theme }) {
  return (
    <section className="download" id="download">
      <div className="download__photo" style={{ backgroundImage: `url(${downloadBg})` }} aria-hidden="true" />
      <div className="download__overlay" aria-hidden="true" />

      <div className="download__panel reveal">
        <span className="download__crown">♛</span>
        <h2 className="download__title">Take up the hunt</h2>
        <p className="download__sub">
          Princess of the Wild Hunt is free to play on PC. The chase is waiting —
          currently tuned to <strong style={{ color: 'var(--accent-soft)' }}>{theme.label}</strong>.
        </p>
        <a className="btn btn--primary btn--lg" href={ITCH_URL} target="_blank" rel="noreferrer">
          ▶ Download Free on itch.io
        </a>

        {/* Official itch.io buy/download widget */}
        <div className="download__widget">
          <iframe
            title="Download POTWH on itch.io"
            src={ITCH_EMBED}
            frameBorder="0"
            width="552"
            height="167"
          >
            <a href={ITCH_URL}>POTWH by sonvd74</a>
          </iframe>
        </div>

        <p className="download__platforms">Windows · PC</p>
      </div>
    </section>
  )
}
