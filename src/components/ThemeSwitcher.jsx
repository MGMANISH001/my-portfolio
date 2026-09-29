import { useEffect, useRef, useState } from 'react'
import { ACCENTS, ACCENT_ORDER, ACCENT_STORAGE_KEY, getActiveAccent } from '../data/accents'

/**
 * ThemeSwitcher — accent color picker (restored & upgraded from v1):
 * - 5 curated accent palettes that all match the refined dark system
 * - Live-recolors the whole UI (CSS variables) AND the Three.js hero scene
 *   (via the `accentchange` CustomEvent)
 * - Choice persists in localStorage; applied pre-paint in main.jsx (no flash)
 * - Glass popover, closes on outside click / Escape
 */
export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const [accent, setAccent] = useState(getActiveAccent)
  const wrapRef = useRef(null)

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return
    const onDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const pick = (key) => {
    setAccent(key)
    document.documentElement.dataset.accent = key
    localStorage.setItem(ACCENT_STORAGE_KEY, key)
    // Hero3D listens to this to recolor the 3D scene live
    window.dispatchEvent(new CustomEvent('accentchange', { detail: key }))
  }

  return (
    <div className="theme-switch" ref={wrapRef}>
      <button
        type="button"
        className={`theme-btn ${open ? 'open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Change accent color"
        aria-expanded={open}
        aria-haspopup="menu"
        title="Accent color"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
      </button>

      <div className={`theme-pop ${open ? 'open' : ''}`} role="menu" aria-label="Accent color">
        <span className="theme-pop-label">Accent Color</span>
        <div className="theme-swatches">
          {ACCENT_ORDER.map((key) => (
            <button
              key={key}
              type="button"
              role="menuitemradio"
              aria-checked={accent === key}
              aria-label={ACCENTS[key].label}
              title={ACCENTS[key].label}
              className={`swatch ${accent === key ? 'active' : ''}`}
              style={{ '--sw': ACCENTS[key].swatch }}
              onClick={() => pick(key)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
