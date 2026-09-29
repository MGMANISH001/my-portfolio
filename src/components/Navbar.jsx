import { useState, useEffect } from 'react'
import { navLinks, profile } from '../data/content'

/**
 * Navbar — FIXES:
 * 1. All links are smooth-scroll anchors (no more /About → 404)
 * 2. "Projects" added to the navigation
 * 3. Mobile hamburger menu (was completely missing)
 * 4. Active-section highlighting via IntersectionObserver
 * 5. Glassy blur backdrop after scrolling
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track which section is in view
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#home" className="nav-logo" onClick={closeMenu}>
            {profile.firstName}<span className="dot">.</span>dev
          </a>

          <nav aria-label="Primary">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`nav-link ${active === link.href.slice(1) ? 'active' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href={profile.resumeUrl} className="nav-cta" target="_blank" rel="noreferrer">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>

          <button
            className={`nav-burger ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {navLinks.map((link, i) => (
          <a key={link.href} href={link.href} onClick={closeMenu} style={{ transitionDelay: `${i * 55}ms` }}>
            {link.label}
          </a>
        ))}
        <a href={profile.resumeUrl} className="nav-cta" onClick={closeMenu} target="_blank" rel="noreferrer">
          Download Resume
        </a>
      </div>
    </>
  )
}
