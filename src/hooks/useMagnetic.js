import { useRef } from 'react'

/**
 * useMagnetic — makes an element subtly follow the cursor
 * (magnetic button effect). Pure JS, no dependencies.
 */
export default function useMagnetic(strength = 0.28) {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
  }

  return { ref, onMouseMove, onMouseLeave }
}
