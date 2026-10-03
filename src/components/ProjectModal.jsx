import { useEffect, useRef } from 'react'

/**
 * ProjectModal — full-screen case study for one project.
 *
 * Opens from a card's "Details" button. Shows the longer overview, the
 * author's role, feature list, takeaways, an optional video (YouTube link
 * or direct .mp4) and — only if filled in — the real external links.
 * Nothing here is faked: every section renders only when it has content.
 *
 * Accessibility: role="dialog", aria-modal, Escape to close, backdrop
 * click to close, body scroll locked while open, close button focused
 * on open for keyboard users.
 */

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
  </svg>
)
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

/** Extract a YouTube video id from watch/shorts/youtu.be URLs (null otherwise). */
function youTubeId(url) {
  const m = String(url).match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{6,})/)
  return m ? m[1] : null
}

export default function ProjectModal({ project, actions, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden' // lock page scroll behind the modal
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  const video = project.video || ''
  const ytId = video ? youTubeId(video) : null
  const isMp4 = video ? /\.mp4($|\?)/.test(video) : false
  const details = project.details || {}

  return (
    <div
      className="pm-overlay"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="pm-panel" role="dialog" aria-modal="true" aria-label={`${project.title} details`}>
        <button
          ref={closeRef}
          type="button"
          className="pm-x"
          onClick={onClose}
          aria-label="Close project details"
        >
          <XIcon />
        </button>

        <div className={`pm-head thumb-${project.gradient}`}>
          {project.image
            ? <img src={project.image} alt="" />
            : <span className="pm-emoji" aria-hidden="true">{project.emoji}</span>}
        </div>

        <div className="pm-body">
          <h3 className="pm-title">{project.title}</h3>
          <div className="project-tags pm-tags">
            {project.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
          </div>

          <p className="pm-overview">{details.overview || project.description}</p>
          {details.role && <p className="pm-role">{details.role}</p>}

          {Array.isArray(details.features) && details.features.length > 0 && (
            <ul className="pm-features">
              {details.features.map((f) => (
                <li key={f}><CheckIcon /><span>{f}</span></li>
              ))}
            </ul>
          )}

          {details.outcome && (
            <div className="pm-outcome">
              <span className="pm-outcome-label">What I took away</span>
              <p>{details.outcome}</p>
            </div>
          )}

          {(ytId || isMp4) && (
            <div className="pm-video">
              {ytId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${ytId}`}
                  title={`${project.title} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <video controls preload="metadata" src={video} />
              )}
            </div>
          )}

          {actions.length > 0 && (
            <div className="project-links pm-links">
              {actions.map(({ key, label, url, Icon }) => (
                <a key={key} className="p-link" href={url} target="_blank" rel="noreferrer">
                  <Icon /> {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
