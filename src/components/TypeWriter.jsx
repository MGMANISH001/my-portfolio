import { useState, useEffect, useRef } from 'react'

/**
 * TypeWriter — reusable typing animation.
 * Loops through phrases; delete this file's usage in Hero if unwanted.
 */
export default function TypeWriter({ phrases, speed = 70, pause = 1800 }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    const current = phrases[index % phrases.length]

    if (!deleting && text === current) {
      timer.current = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % phrases.length)
    } else {
      timer.current = setTimeout(
        () => {
          setText(current.slice(0, text.length + (deleting ? -1 : 1)))
        },
        deleting ? speed / 2.2 : speed
      )
    }
    return () => clearTimeout(timer.current)
  }, [text, deleting, index, phrases, speed, pause])

  return <span>{text}</span>
}
