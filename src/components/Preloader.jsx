// Full-screen loading overlay shown until the page's resources are ready.
// Stays mounted but fades out (and stops catching clicks) once `done`.
export default function Preloader({ done }) {
  return (
    <div className={`preloader ${done ? 'preloader--done' : ''}`} aria-hidden={done}>
      <div className="preloader__spinner">
        <span className="preloader__crown">♛</span>
      </div>
      <p className="preloader__label">Princess of the Wild Hunt</p>
      <p className="preloader__sub">Entering the wild…</p>
    </div>
  )
}
