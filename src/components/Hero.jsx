import Hero3D from './Hero3D'
import TypeWriter from './TypeWriter'
import useMagnetic from '../hooks/useMagnetic'
import { profile, socials } from '../data/content'

const GithubIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)
const LinkedinIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
  </svg>
)
const MailIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" />
  </svg>
)

function MagneticButton({ as: Comp = 'a', className, children, ...props }) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(0.22)
  return (
    <Comp ref={ref} className={className} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} {...props}>
      {children}
    </Comp>
  )
}

/** Hero — grid layout guarantees no overlap between heading and code card. */
export default function Hero() {
  return (
    <section className="hero" id="home">
      <Hero3D />
      <div className="hero-grid-overlay" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-badge">
            <span className="pulse-dot" />
            {profile.availability}
          </span>

          <h1 className="hero-title">
            <span className="line">Crafting</span>
            <span className="line grad-text">Digital</span>
            <span className="line">Experiences</span>
          </h1>

          <p className="hero-sub">
            Frontend Developer specialized in building scalable, high-performance
            web applications with a focus on user-centric design and modern
            architecture.
          </p>

          {/* FIX: real anchors instead of dead buttons */}
          <div className="hero-actions">
            <MagneticButton href="#projects" className="btn btn-primary">View my Work</MagneticButton>
            <MagneticButton href="#contact" className="btn btn-ghost">Contact Me</MagneticButton>
          </div>

          <div className="hero-socials">
            <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
          </div>
        </div>

        {/* Code card — typing animation completes the full object */}
        <div className="code-card" aria-hidden="true">
          <div className="code-card-bar">
            <span className="code-dot" /><span className="code-dot" /><span className="code-dot" />
            <span className="code-card-title">developer.js</span>
          </div>
          <div className="code-body">
            <span className="kw">const</span> <span className="key">developer</span> <span className="pun">=</span> <span className="pun">{'{'}</span>{'\n'}
            {'  '}<span className="key">Name:</span> <span className="str">"{profile.name}"</span><span className="pun">,</span>{'\n'}
            {'  '}<span className="key">Role:</span> <span className="str">"{profile.role}"</span><span className="pun">,</span>{'\n'}
            {'  '}<span className="key">Stack:</span> <span className="str">"React • Tailwind • JS"</span><span className="pun">,</span>{'\n'}
            {'  '}<span className="key">Focus:</span> <span className="str">"</span><span className="str"><TypeWriter phrases={['Building modern web interfaces', 'Pixel-perfect UI engineering', 'Performance-first development', 'Accessible by default']} /></span><span className="str">"</span>
            <span className="caret" />
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="mouse" />
        scroll
      </div>
    </section>
  )
}
