import { FB_GAMEPLAY_URL } from '../config.js'
import trailerBg from '../img/background/gameplay-video.webp'

// Facebook video plugin embed. Reels are vertical (9:16), so the frame below
// is sized tall. The reel must be Public on Facebook for this to render.
const embedSrc =
  'https://www.facebook.com/plugins/video.php?href=' +
  encodeURIComponent(FB_GAMEPLAY_URL) +
  '&show_text=false&width=900&height=506&t=0'

export default function Trailer() {
  return (
    <section className="trailer" id="trailer">
      <div className="trailer__photo" style={{ backgroundImage: `url(${trailerBg})` }} aria-hidden="true" />
      <div className="trailer__overlay" aria-hidden="true" />

      <div className="section-head reveal">
        <span className="section-kicker">Watch</span>
        <h2 className="section-title">Gameplay</h2>
        <p className="section-sub">
          See the princess turn the hunt around — straight from the wild.
        </p>
      </div>

      <div className="trailer__stage reveal">
        <div className="trailer__reel">
          <iframe
            title="POTWH Gameplay"
            src={embedSrc}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
        <a
          className="trailer__fallback"
          href={FB_GAMEPLAY_URL}
          target="_blank"
          rel="noreferrer"
        >
          Video not loading? Watch it on Facebook ↗
        </a>
      </div>
    </section>
  )
}
