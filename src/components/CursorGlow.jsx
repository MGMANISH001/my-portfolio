import { useEffect, useRef } from 'react'

/**
 * CursorGlow — soft accent-colored spotlight that trails the cursor.
 * Desktop (fine pointer) only; disabled for touch and reduced-motion.
 * The trailing "lerp" follow is the trending linear.app-style effect.
 */
export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduced) return

    let raf = 0
    let shown = false
    const HALF = 230
    let tx = window.innerWidth / 2
    let ty = window.innerHeight * 0.4
    let x = tx
    let y = ty

    const tick = () => {
      x += (tx - x) * 0.12
      y += (ty - y) * 0.12
      el.style.transform = `translate3d(${x - HALF}px, ${y - HALF}px, 0)`
      raf = requestAnimationFrame(tick)
    }
    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      if (!shown) {
        shown = true
        el.classList.add('on')
      }
    }
    const onLeave = () => {
      shown = false
      el.classList.remove('on')
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div className="cursor-glow" ref={ref} aria-hidden="true" />
}
