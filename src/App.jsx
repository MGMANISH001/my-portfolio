import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/global.css'

/**
 * Manish's Portfolio v2 — refined dark purple + Three.js hero
 *
 * Section order: Hero → Projects → Skills → About → Contact → Footer
 * (About now exists as a real section — fixes the 404 nav link)
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
