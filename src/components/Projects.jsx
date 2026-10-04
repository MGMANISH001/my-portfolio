import { useRef, useState } from 'react'
import useReveal from '../hooks/useReveal'
import { projects } from '../data/content'
import ProjectModal from './ProjectModal'

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
const GamepadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="6" x2="10" y1="11" y2="11" /><line x1="8" x2="8" y1="9" y2="13" />
    <line x1="15" x2="15.01" y1="12" y2="12" /><line x1="18" x2="18.01" y1="10" y2="10" />
    <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
  </svg>
)
const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <polygon points="6 3 20 12 6 21 6 3" />
  </svg>
)
const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)
const InfoIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
  </svg>
)

/**
 * Build a project's button list — ONLY from the links that are actually
 * filled in. Empty fields render nothing: no fake links, no "Demo soon"
 * filler. Every card always has the Details (case-study) button, so a
 * project without any public link is still fully presentable.
 */
function getActions(project) {
  const actions = []
  if (project.github) actions.push({ key: 'github', label: 'Code', url: project.github, Icon: GithubIcon })
  if (project.demo) actions.push({ key: 'demo', label: 'Live Demo', url: project.demo, Icon: DemoIcon })
  if (project.itch) actions.push({ key: 'itch', label: 'Play on itch.io', url: project.itch, Icon: GamepadIcon })
  if (project.video) actions.push({ key: 'video', label: 'Watch Gameplay', url: project.video, Icon: PlayIcon })
  if (project.download) actions.push({ key: 'download', label: 'Download · Windows', url: project.download, Icon: DownloadIcon })
  return actions
}

/** ProjectCard — 3D tilt on hover (perspective transform, pure JS). */
function ProjectCard({ project, onDetails }) {
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

  const actions = getActions(project)

  return (
    <article
      ref={cardRef}
      className="project-card"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className={`project-thumb thumb-${project.gradient}`}>
        {project.image
          ? <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
          : <span className="project-emoji" role="img" aria-label="">{project.emoji}</span>}
      </div>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>
        {/* Real links only (each one requires a filled URL) + always a Details case study */}
        <div className="project-links">
          {actions.map(({ key, label, url, Icon }, i) => (
            <a key={key} className={`p-link${i === 0 ? ' primary' : ''}`} href={url} target="_blank" rel="noreferrer">
              <Icon /> {label}
            </a>
          ))}
          <button
            type="button"
            className={`p-link${actions.length === 0 ? ' primary' : ''}`}
            onClick={() => onDetails(project)}
          >
            <InfoIcon /> Details
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const ref = useReveal()
  const [active, setActive] = useState(null)

  return (
    <section id="projects">
      <div className="container" ref={ref}>
        <div className="sec-head reveal">
          <span className="sec-eyebrow">Portfolio</span>
          <h2 className="sec-title">Featured <span className="grad-text">Projects</span></h2>
          <p className="sec-sub">
            College and self-driven builds — open any card for the full case study:
            what it does, how it&apos;s built and what I learned.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={p.title} className="reveal" style={{ '--reveal-delay': `${(i % 3) * 0.12}s` }}>
              <ProjectCard project={p} onDetails={setActive} />
            </div>
          ))}
        </div>
      </div>

      {active && (
        <ProjectModal
          project={active}
          actions={getActions(active)}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  )
}
