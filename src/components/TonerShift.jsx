import { DIFFICULTIES } from '../data/difficulties.js'
import tonerBg from '../img/background/4fb64bf6-2a4c-4d0f-bbde-c7fe6b69356c.webp'

// No longer a picker — the palette is driven entirely by scroll position.
// This section explains the effect and reflects the band you're currently in.
export default function TonerShift({ stage, theme }) {
  return (
    <section className="toner" id="toner">
      <div className="toner__photo" style={{ backgroundImage: `url(${tonerBg})` }} aria-hidden="true" />
      <div className="toner__overlay" aria-hidden="true" />

      <div className="section-head reveal">
        <span className="section-kicker">The Signature Mechanic</span>
        <h2 className="section-title">Toner Shift</h2>
        <p className="section-sub">
          There's nothing to click. The further you descend down this page — and
          deeper into the hunt — the more the world's color tone darkens with you.
          Calm dawn greens give way to violet dusk and, at last, a burning crimson dark.
        </p>
      </div>

      <div className="toner__stage" key={theme.id}>
        <div className="toner__card">
          <span className="toner__level">Now entering · {theme.label}</span>
          <h3 className="toner__tagline">{theme.tagline}</h3>
          <p className="toner__desc">{theme.description}</p>
          <div className="toner__meta">
            <span className="toner__meta-label">You'll face</span>
            <span className="toner__meta-value">{theme.enemies}</span>
          </div>
        </div>

        <div className="toner__visual" aria-hidden="true">
          <div className="toner__visual-glow" />
          <div className="toner__visual-rings">
            <span /><span /><span />
          </div>
          <div className="toner__visual-figure">♛</div>
        </div>
      </div>

      {/* Continuous progress of the descent, lit by --scroll set in App. */}
      <div className="toner__track reveal" aria-hidden="true">
        <div className="toner__track-fill" />
        <div className="toner__track-labels">
          {DIFFICULTIES.map((d, i) => (
            <span key={d.id} className={i === stage ? 'is-active' : ''}>
              {d.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
