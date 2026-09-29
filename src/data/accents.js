/**
 * ACCENT THEMES — single source of truth for accent color switching.
 *
 * Consumers:
 *  - ThemeSwitcher.jsx  → renders swatches from ACCENT_ORDER / ACCENTS
 *  - Hero3D.jsx         → recolors the Three.js scene via `.three`
 *  - global.css         → CSS variables are overridden per accent via
 *                         `[data-accent="…"]` blocks on <html> (keep the
 *                         hex values here and there in sync)
 *
 * `accent`  = primary (buttons, glows, borders)   → --accent  + --accent-rgb
 * `accent2` = light tint (gradient text, labels)  → --accent-2
 * `accent3` = deep shade (gradient end, links)    → --accent-3
 */

export const ACCENT_STORAGE_KEY = 'accent'

export const ACCENT_ORDER = ['violet', 'cyan', 'emerald', 'amber', 'rose']

export const ACCENTS = {
  violet: {
    label: 'Violet',
    swatch: '#8b5cf6',
    three: {
      lights: [0x8b5cf6, 0xa78bfa, 0x6366f1],
      palette: [0x8b5cf6, 0xa78bfa, 0x6366f1, 0x7c3aed, 0x818cf8],
      particle: 0xa78bfa,
    },
  },
  cyan: {
    label: 'Cyan',
    swatch: '#22d3ee',
    three: {
      lights: [0x22d3ee, 0x67e8f9, 0x2563eb],
      palette: [0x22d3ee, 0x67e8f9, 0x3b82f6, 0x0ea5e9, 0x60a5fa],
      particle: 0x67e8f9,
    },
  },
  emerald: {
    label: 'Emerald',
    swatch: '#34d399',
    three: {
      lights: [0x34d399, 0x6ee7b7, 0x0d9488],
      palette: [0x34d399, 0x6ee7b7, 0x14b8a6, 0x10b981, 0x2dd4bf],
      particle: 0x6ee7b7,
    },
  },
  amber: {
    label: 'Amber',
    swatch: '#fbbf24',
    three: {
      lights: [0xfbbf24, 0xfde68a, 0xf59e0b],
      palette: [0xfbbf24, 0xfde68a, 0xf59e0b, 0xf97316, 0xfacc15],
      particle: 0xfde68a,
    },
  },
  rose: {
    label: 'Rose',
    swatch: '#fb7185',
    three: {
      lights: [0xfb7185, 0xfda4af, 0xe11d48],
      palette: [0xfb7185, 0xfda4af, 0xf43f5e, 0xe11d48, 0xff9ebb],
      particle: 0xfda4af,
    },
  },
}

/** Apply an accent to the document without persisting (used on boot). */
export function applyAccentToDocument(key) {
  if (ACCENTS[key]) document.documentElement.dataset.accent = key
}

/** Read the currently active accent key (fallback: violet). */
export function getActiveAccent() {
  const key = document.documentElement.dataset.accent
  return ACCENTS[key] ? key : 'violet'
}
