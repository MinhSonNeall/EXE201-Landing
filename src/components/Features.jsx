import { FEATURES } from '../data/difficulties.js'
import featuresBg from '../img/background/game-play.webp'

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features__photo" style={{ backgroundImage: `url(${featuresBg})` }} aria-hidden="true" />
      <div className="features__overlay" aria-hidden="true" />

      <div className="section-head reveal">
        <span className="section-kicker">Gameplay Mechanics</span>
        <h2 className="section-title">Master every move</h2>
        <p className="section-sub">
          A tight, responsive 2D action toolkit — dash, combo, leap, heal, and gear up
          as the hunt grows fiercer.
        </p>
      </div>

      <div className="features__grid">
        {FEATURES.map((f, i) => (
          <article
            className="feature-card reveal"
            key={f.title}
            style={{ '--reveal-delay': `${i * 70}ms` }}
          >
            <div className="feature-card__icon">{f.icon}</div>
            <h3 className="feature-card__title">{f.title}</h3>
            <p className="feature-card__text">{f.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
