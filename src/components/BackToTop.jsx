import { useEffect, useRef, useState } from 'react'

/**
 * BackToTop — floating button with a scroll-progress ring around it.
 * Appears after 700px of scrolling; smooth-scrolls back to the top.
 * The ring fill is written via ref (no re-render per scroll frame).
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const fillRef = useRef(null)

  useEffect(() => {
    let raf = 0
    const R = 20
    const C = 2 * Math.PI * R

    const update = () => {
      raf = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      if (fillRef.current) {
        fillRef.current.style.strokeDashoffset = `${C * (1 - p)}`
      }
      setVisible(window.scrollY > 700)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const R = 20
  const C = 2 * Math.PI * R

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? 'show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      title="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
        <circle className="btt-track" cx="22" cy="22" r={R} fill="none" />
        <circle
          className="btt-fill"
          cx="22" cy="22" r={R} fill="none"
          strokeDasharray={C}
          strokeDashoffset={C}
          transform="rotate(-90 22 22)"
          ref={fillRef}
        />
      </svg>
      <svg className="btt-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  )
}
