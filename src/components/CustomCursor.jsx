import { useEffect, useRef } from 'react'

const INTERACTIVE = 'a, button, input, textarea, select, label, summary, [role="button"], [data-cursor]'

/**
 * CustomCursor — single-ring cursor replacing the native one on desktop.
 * (User preference: no center dot, no trailing shadow — the ring IS the
 * cursor and follows the pointer 1:1.)
 *
 *  - ring position tracks the pointer directly (no lerp, no lag)
 *  - ring expands + tints with the accent color over interactive elements
 *  - ring contracts on mouse-down for a tactile press feel
 *
 * Safety:
 *  - only activates for (pointer: fine) — touch devices keep the native UI
 *  - disabled under prefers-reduced-motion
 *  - activates by adding `has-cursor` to <html>; removed on unmount.
 */
export default function CustomCursor() {
  const ringRef = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    const ring = ringRef.current
    const root = document.documentElement
    root.classList.add('has-cursor')

    let raf = 0
    let seen = false
    let overLink = false
    let down = false
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let scale = 1
    let targetScale = 1

    const render = () => {
      // position is applied 1:1 (no trailing); only the scale eases
      scale += (targetScale - scale) * 0.22
      ring.style.transform = `translate3d(${mx}px, ${my}px, 0) scale(${scale.toFixed(3)})`
      raf = requestAnimationFrame(render)
    }

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (!seen) {
        seen = true
        ring.classList.add('on')
      }
    }

    const updateLinkState = (target) => {
      overLink = !!(target && target.closest && target.closest(INTERACTIVE))
      ring.classList.toggle('is-link', overLink)
      targetScale = down ? 0.85 : overLink ? 1.55 : 1
    }

    const onOver = (e) => updateLinkState(e.target)
    const onOut = (e) => {
      if (!e.relatedTarget) updateLinkState(null)
      else updateLinkState(e.relatedTarget)
    }

    const onDown = () => {
      down = true
      targetScale = 0.85
      ring.classList.add('is-down')
    }
    const onUp = () => {
      down = false
      targetScale = overLink ? 1.55 : 1
      ring.classList.remove('is-down')
    }

    const onDocLeave = () => ring.classList.remove('on')
    const onDocEnter = () => {
      if (seen) ring.classList.add('on')
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseout', onOut, { passive: true })
    window.addEventListener('mousedown', onDown, { passive: true })
    window.addEventListener('mouseup', onUp, { passive: true })
    document.documentElement.addEventListener('pointerleave', onDocLeave)
    document.documentElement.addEventListener('pointerenter', onDocEnter)

    raf = requestAnimationFrame(render)
    return () => {
      root.classList.remove('has-cursor')
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.documentElement.removeEventListener('pointerleave', onDocLeave)
      document.documentElement.removeEventListener('pointerenter', onDocEnter)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
}
