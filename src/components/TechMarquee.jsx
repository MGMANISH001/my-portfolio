import { marqueeSkills } from '../data/content'

/**
 * TechMarquee — infinite horizontally-scrolling strip of technologies,
 * shown right under the hero. Pauses on hover; edge-faded via mask.
 * The duplicated half is aria-hidden so screen readers hear the list once.
 */
export default function TechMarquee() {
  const doubled = marqueeSkills.concat(marqueeSkills)

  return (
    <div className="marquee" role="region" aria-label="Technologies I work with">
      <div className="marquee-track">
        {doubled.map((skill, i) => (
          <span className="marquee-item" key={`${skill}-${i}`} aria-hidden={i >= marqueeSkills.length}>
            {skill}
            <span className="marquee-star" aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
