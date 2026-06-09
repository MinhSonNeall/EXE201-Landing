// Screenshot gallery — real in-game scenes. To add more, drop a .webp into
// src/img/sense/, import it, and add an entry below. `src: null` still shows a
// styled placeholder.
import burnedForest from '../img/sense/burned-forest.webp'
import cursedArea from '../img/sense/cursed-area.webp'
import royalGallery from '../img/sense/royal-gallery.webp'
import ruinedVillage from '../img/sense/ruined-village.webp'

const SHOTS = [
  { id: 1, src: royalGallery, label: 'Royal Gallery', tone: '#34d399' },
  { id: 2, src: ruinedVillage, label: 'Ruined Village', tone: '#a855f7' },
  { id: 3, src: burnedForest, label: 'Burned Forest', tone: '#fb923c' },
  { id: 4, src: cursedArea, label: 'Cursed Area', tone: '#f43f5e' },
]

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="section-head reveal">
        <span className="section-kicker">Screenshots</span>
        <h2 className="section-title">Into the wild</h2>
      </div>

      <div className="gallery__rail">
        {SHOTS.map((s, i) => (
          <figure
            className="shot reveal"
            key={s.id}
            style={{ '--shot-tone': s.tone, '--reveal-delay': `${i * 70}ms` }}
          >
            {s.src ? (
              <img src={s.src} alt={s.label} loading="lazy" />
            ) : (
              <div className="shot__placeholder">
                <span className="shot__placeholder-icon">🖼️</span>
                <span className="shot__placeholder-hint">Screenshot coming soon</span>
              </div>
            )}
            <figcaption className="shot__cap">{s.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
