import { useEffect } from 'react'

// Reveals every element carrying the `.reveal` class once it scrolls into
// view, by toggling `.reveal--in`. Elements are only animated in once.
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')

    // No IntersectionObserver (very old browsers) → just show everything.
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('reveal--in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
