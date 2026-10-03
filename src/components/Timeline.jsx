import { useEffect, useRef } from 'react'
import useReveal from '../hooks/useReveal'
import { timeline } from '../data/content'

/**
 * Timeline — Experience & Education on a vertical rail whose gradient
 * line "fills up" as you scroll through the section (scroll-linked).
 * Items reveal with a stagger; copy lives in content.js → timeline[]
 */
export default function Timeline() {
  const ref = useReveal()
  const fillRef = useRef(null)

  useEffect(() => {
    const fill = fillRef.current
    if (!fill) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      fill.style.height = '100%'
      return
    }

    let raf = 0
    const update = () => {
      raf = 0
      const track = fill.parentElement
      if (!track) return
      const rect = track.getBoundingClientRect()
      const p = Math.min(Math.max((window.innerHeight * 0.75 - rect.top) / rect.height, 0), 1)
      fill.style.height = `${(p * 100).toFixed(2)}%`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="journey">
      <div className="container" ref={ref}>
        <div className="sec-head reveal">
          <span className="sec-eyebrow">My journey</span>
          <h2 className="sec-title">Experience & <span className="grad-text">Education.</span></h2>
          <p className="sec-sub">
            The path so far — studies, internships and everything shipped along the way.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-rail" aria-hidden="true">
            <div className="timeline-rail-fill" ref={fillRef} />
          </div>

          {timeline.map((item, i) => (
            <div className="tl-item reveal" key={item.title} style={{ '--reveal-delay': `${i * 0.08}s` }}>
              <span className="tl-dot" aria-hidden="true" />
              <div className="tl-card">
                <div className="tl-meta">
                  <span className="tl-period">{item.period}</span>
                  <span className="tl-type">{item.type}</span>
                </div>
                <h3>{item.title}</h3>
                <span className="tl-org">{item.org}</span>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
