import useReveal from '../hooks/useReveal'
import { services } from '../data/content'

/**
 * Services — "What I do" grid: the four kinds of work Manish takes on.
 * Cards reveal with a stagger; hover lifts + accent glow (CSS only).
 * Copy lives in src/data/content.js → services[]
 */
export default function Services() {
  const ref = useReveal()

  return (
    <section id="services">
      <div className="container" ref={ref}>
        <div className="sec-head reveal zoom">
          <span className="sec-eyebrow">What I do</span>
          <h2 className="sec-title">How I can <span className="grad-text">help you.</span></h2>
          <p className="sec-sub">
            From first idea to final deploy — the kind of work I love taking on.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div
              className="service-card reveal"
              key={service.title}
              style={{ '--reveal-delay': `${i * 0.1}s` }}
            >
              <span className="service-icon" aria-hidden="true">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
