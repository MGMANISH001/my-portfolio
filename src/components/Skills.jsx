import { useEffect, useRef } from 'react'
import useReveal from '../hooks/useReveal'
import { skillGroups, strengths } from '../data/content'

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

/**
 * Skills — FIX: animated proficiency bars (fill when scrolled into view),
 * grouped by category. The old "Explore Technical Arsenal" dead button is gone.
 */
export default function Skills() {
  const ref = useReveal()
  const barsRef = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
            setTimeout(() => {
              bar.style.width = `${bar.dataset.level}%`
            }, i * 110)
          })
          io.unobserve(e.target)
        })
      },
      { threshold: 0.25 }
    )
    if (barsRef.current) io.observe(barsRef.current)
    return () => io.disconnect()
  }, [])

  return (
    <section id="skills">
      <div className="container" ref={ref}>
        <div className="sec-head reveal">
          <span className="sec-eyebrow">Capabilities</span>
          <h2 className="sec-title">Skills & <span className="grad-text">Technologies</span></h2>
          <p className="sec-sub">
            A toolkit I've sharpened by building real projects — chosen for creating fast, scalable and beautiful web experiences.
          </p>
        </div>

        <div className="skills-wrap">
          <div className="skills-copy reveal">
            <h3>What I bring to the table</h3>
            <p>
              Beyond syntax, I focus on shipping experiences: thoughtful component
              architecture, buttery interactions, and interfaces that feel as good
              as they look. Here's how confident I am across my core stack.
            </p>
            <div className="learning-label" style={{ display: 'flex' }}>Core strengths</div>
            <div className="strength-chips">
              {strengths.map((s) => (
                <span className="chip" key={s}><CheckIcon /> {s}</span>
              ))}
            </div>
          </div>

          <div ref={barsRef}>
            {skillGroups.map((group, gi) => (
              <div className="skill-card reveal" key={group.title} style={{ '--reveal-delay': `${gi * 0.15}s` }}>
                <h4>// {group.title}</h4>
                {group.skills.map((skill) => (
                  <div className="skill-row" key={skill.name}>
                    <div className="skill-row-top">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" data-level={skill.level} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
