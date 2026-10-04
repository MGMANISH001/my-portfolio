/**
 * RollText — per-character "slot machine" roll-up on hover
 * (the effect from the reference video: each letter rolls upward,
 * revealing a duplicate copy that slides in from below, staggered
 * left-to-right like an odometer).
 *
 * How it works:
 *  - every visible character sits inside an overflow-hidden mask (.roll-char)
 *  - the mask holds two copies: .roll-a (visible) and .roll-b (hidden below)
 *  - hovering the text translates both copies upward; the per-char delay
 *    comes from the --i custom property (staggered left-to-right)
 *
 * A11y:
 *  - the real string is rendered once as a visually-hidden span;
 *    the duplicated glyphs are aria-hidden, so screen readers read
 *    "Crafting" — not "C C r r a a f f ..."
 *
 * Browser safety:
 *  - NO background-clip:text on any ancestor of the masks (Safari blanks
 *    gradient text inside overflow-hidden children). The "Digital" line
 *    instead uses a stepped color ramp built from the live theme accents
 *    via color-mix(), so it follows the 5-color theme switcher too.
 *
 * Props:
 *  - text       string to display
 *  - ramp       true → top copies get the accent→accent-3 stepped gradient
 *  - altWhite   true → bottom (incoming) copies are white instead of accent-2
 */
export default function RollText({ text, ramp = false, altWhite = false, className = '' }) {
  const chars = Array.from(text)
  const last = Math.max(chars.length - 1, 1)

  return (
    <span className={`roll${altWhite ? ' roll-alt-white' : ''}${className ? ` ${className}` : ''}`}>
      <span className="sr-only">{text}</span>
      <span className="roll-vis" aria-hidden="true">
        {chars.map((ch, i) => {
          if (ch === ' ') {
            return <span key={i} className="roll-sp">{' '}</span>
          }
          const step = ramp ? Math.round((i / last) * 6) : -1
          return (
            <span
              key={i}
              className={`roll-char${ramp ? ` rc-${step}` : ''}`}
              style={{ '--i': i }}
            >
              <span className="roll-copy roll-a">{ch}</span>
              <span className="roll-copy roll-b">{ch}</span>
            </span>
          )
        })}
      </span>
    </span>
  )
}
