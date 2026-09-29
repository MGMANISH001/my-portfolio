import { useRef } from 'react'
import useReveal from '../hooks/useReveal'
import { projects } from '../data/content'

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)
const DemoIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

/** ProjectCard — 3D tilt on hover (perspective transform, pure JS). */
function ProjectCard({ project }) {
  const cardRef = useRef(null)

  const onMove = (e) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateY(-6px)`
  }
  const onLeave = () => {
    const el = cardRef.current
    if (el) el.style.transform = ''
  }

  return (
    <article
      ref={cardRef}
      className="project-card"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className={`project-thumb thumb-${project.gradient}`}>
        <span className="project-emoji" role="img" aria-label="">{project.emoji}</span>
      </div>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>
        {/* FIX: real <a> links to GitHub repo + live demo (was a dead button) */}
        <div className="project-links">
          <a className="p-link primary" href={project.github} target="_blank" rel="noreferrer">
            <GithubIcon /> Code
          </a>
          {project.demo ? (
            <a className="p-link" href={project.demo} target="_blank" rel="noreferrer">
              <DemoIcon /> Live Demo
            </a>
          ) : (
            <span className="p-link" style={{ cursor: 'default', opacity: 0.45 }}>Demo soon</span>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const ref = useReveal()
  return (
    <section id="projects">
      <div className="container" ref={ref}>
        <div className="sec-head reveal">
          <span className="sec-eyebrow">Portfolio</span>
          <h2 className="sec-title">Featured <span className="grad-text">Projects</span></h2>
          <p className="sec-sub">
            A selection of things I've designed and built — each with source code and live demos where available.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={p.title} className="reveal" style={{ '--reveal-delay': `${(i % 3) * 0.12}s` }}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
