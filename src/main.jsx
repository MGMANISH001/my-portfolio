import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ACCENT_ORDER, ACCENT_STORAGE_KEY, applyAccentToDocument } from './data/accents'

// Restore saved accent BEFORE first paint (prevents color flash on reload).
// FIX: always apply an accent (default violet) so <html data-accent> is set
// even for first-time visitors — otherwise --accent-rgb stays undefined.
const savedAccent = localStorage.getItem(ACCENT_STORAGE_KEY)
applyAccentToDocument(savedAccent && ACCENT_ORDER.includes(savedAccent) ? savedAccent : 'violet')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
