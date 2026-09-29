import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { profile, socials, FORMSPREE_ENDPOINT } from '../data/content'

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
  </svg>
)
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" />
  </svg>
)
const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
)

/**
 * Contact — FIXES:
 * - Real email (edit src/data/content.js — was your-email@gmail.com)
 * - Social links come from the socials config (was github.com/ homepage)
 * - Form wired to Formspree (endpoint in src/data/content.js):
 *     • sending / success / error states, button locks while sending
 *     • email format validation + honeypot anti-spam field
 *     • graceful "email me directly" fallback until endpoint is set
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const ref = useReveal()
  const [status, setStatus] = useState(null) // { type: 'success' | 'error', msg }
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    const form = e.target
    const data = Object.fromEntries(new FormData(form))

    // Honeypot: real users never see this field — if it's filled, it's a bot.
    // Silently pretend success so bots don't learn anything.
    if (data._gotcha) {
      form.reset()
      return
    }

    // Validation
    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
      setStatus({ type: 'error', msg: 'Please fill in all fields.' })
      return
    }
    if (!EMAIL_RE.test(data.email.trim())) {
      setStatus({ type: 'error', msg: 'Please enter a valid email address.' })
      return
    }

    // Fallback: form service not connected yet → point to direct email
    if (!FORMSPREE_ENDPOINT) {
      setStatus({
        type: 'success',
        msg: `Thanks ${data.name.trim()}! My form isn't connected yet — please email me directly at ${profile.email}.`,
      })
      return
    }

    // Send via Formspree
    try {
      setSending(true)
      setStatus(null)
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.name.trim(),
          email: data.email.trim(),
          message: data.message.trim(),
          _subject: `Portfolio message from ${data.name.trim()}`,
          _replyto: data.email.trim(),
        }),
      })

      if (res.ok) {
        setStatus({
          type: 'success',
          msg: `Thanks ${data.name.trim()}! Your message has been sent — I'll get back to you soon.`,
        })
        form.reset()
      } else {
        const payload = await res.json().catch(() => ({}))
        const msg =
          payload?.errors?.[0]?.message ||
          payload?.error ||
          'Something went wrong — please try again, or email me directly.'
        setStatus({ type: 'error', msg })
      }
    } catch {
      setStatus({
        type: 'error',
        msg: 'Network error — please check your connection and try again.',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact">
      <div className="container" ref={ref}>
        <div className="sec-head reveal">
          <span className="sec-eyebrow">Get in touch</span>
          <h2 className="sec-title">Let's work <span className="grad-text">together.</span></h2>
          <p className="sec-sub">
            Have a project idea, a collaboration opportunity, or just want to say
            hello? My inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Let's start a conversation</h3>
            <p>
              Whether you're looking to build a modern web application, improve an
              existing interface, or collaborate on a creative project — I'd be
              happy to hear from you.
            </p>

            <a className="info-row" href={`mailto:${profile.email}`}>
              <span className="info-icon"><MailIcon /></span>
              <span>
                <span className="info-label">Email</span>
                <span className="info-value" style={{ display: 'block' }}>{profile.email}</span>
              </span>
            </a>

            <div className="info-row">
              <span className="info-icon"><PinIcon /></span>
              <span>
                <span className="info-label">Location</span>
                <span className="info-value" style={{ display: 'block' }}>{profile.location}</span>
              </span>
            </div>

            <div className="contact-socials">
              <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
            <h3>Send me a message</h3>
            <p className="form-note">I'll get back to you as soon as possible.</p>

            {/* Honeypot — hidden from humans, catches spam bots */}
            <input
              type="text"
              name="_gotcha"
              className="hp-field"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input id="name" name="name" type="text" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required />
            </div>

            <button type="submit" className="btn btn-primary form-submit" disabled={sending}>
              {sending ? (
                <>
                  <svg className="spin" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Send Message
                </>
              )}
            </button>
            {status && (
              <div className={`form-status ${status.type}`} role="status" aria-live="polite">
                {status.msg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
