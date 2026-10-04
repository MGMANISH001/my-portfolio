import { navLinks, profile, socials } from '../data/content'
import RollText from './RollText'

/**
 * Footer — FIX: the old site's footer was just an unfinished
 * <h2>Footer</h2> heading. This is a complete, real footer:
 * brand + quick links + socials + copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="nav-logo">
              <RollText text={profile.firstName} /><span className="dot">.</span><RollText text="dev" />
            </a>
            <p>
              Frontend Developer building scalable, high-performance web
              applications with user-centric design.
            </p>
          </div>

          <div className="footer-col">
            <h5>Quick Links</h5>
            {navLinks.map((l) => (
              <a href={l.href} key={l.href}>{l.label}</a>
            ))}
          </div>

          <div className="footer-col">
            <h5>Elsewhere</h5>
            <a href={socials.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>

        {/* Trending touch — giant faint watermark of the name */}
        <div className="footer-watermark" aria-hidden="true">{profile.name}</div>

        <div className="footer-bottom">
          <span>© {year} {profile.name}. All rights reserved.</span>
          <span className="mono">
            Designed & built with <span style={{ color: '#fb7185' }}>♥</span> using React + Three.js
          </span>
        </div>
      </div>
    </footer>
  )
}
