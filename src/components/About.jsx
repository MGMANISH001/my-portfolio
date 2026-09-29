import { useEffect, useRef, useState } from 'react'
import useReveal from '../hooks/useReveal'
import { profile } from '../data/content'

/**
 * AnimatedStat — counts from 0 to `value` when scrolled into view.
 */
function AnimatedStat({ value, suffix, label }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        const duration = 1400
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
          setDisplay(Math.round(eased * value))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        io.disconnect()
      },
      { threshold: 0.5 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [value])

  return (
    <div className="about-stat" ref={ref}>
      <div className="stat-num grad-text">{display}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

/**
 * About — COMPLETELY REDESIGNED (was plain text + 3 chips):
 * - Animated gradient blob avatar with floating info badges
 * - Two-paragraph bio
 * - Animated counters (projects, experience, commits)
 * - "Currently learning" chips
 * - Clear CTA row (resume + contact)
 */
export default function About() {
  const ref = useReveal()

  return (
    <section id="about">
      <div className="container about-wrap" ref={ref}>
        {/* Visual: morphing gradient blob + avatar + floating badges */}
        <div className="about-visual reveal">
          <div className="about-ring">
            <div className="about-avatar">
              {/* Replace the emoji with <img src="/your-photo.png" alt="Manish Gupta" /> */}
              <span>👨‍💻</span>
            </div>
          </div>
          <div className="about-float f1">
            <span style={{ color: '#34d399' }}>●</span> Open to work
          </div>
          <div className="about-float f2">
            <span style={{ color: '#a78bfa' }}>◆</span> React • Tailwind • JS
          </div>
        </div>

        {/* Copy */}
        <div className="about-content">
          <span className="sec-eyebrow reveal">About me</span>
          <h2 className="reveal">
            A developer who cares about <span className="grad-text">the details</span>
          </h2>

          <p className="reveal">{profile.bio}</p>
          <p className="reveal">{profile.bioExtra}</p>

          <div className="about-stats reveal">
            {profile.stats.map((s) => (
              <AnimatedStat key={s.label} {...s} />
            ))}
          </div>

          <div className="reveal">
            <div className="learning-label">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              Currently learning
            </div>
            <div className="learning-chips">
              {profile.currentlyLearning.map((item) => (
                <span className="learn-chip" key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="about-actions reveal">
            <a href={profile.resumeUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost">Let's talk →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
