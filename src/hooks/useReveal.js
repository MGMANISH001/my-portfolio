import { useEffect, useRef } from 'react'

/**
 * useReveal — adds `.visible` to elements with `.reveal` when they scroll
 * into view. Attach the returned ref to a container; all `.reveal`
 * descendants will animate in with a stagger.
 */
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current || document
    const targets = root.querySelectorAll('.reveal')

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  return ref
}
