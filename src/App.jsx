import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import CustomCursor from './components/CustomCursor'
import BackToTop from './components/BackToTop'
import TechMarquee from './components/TechMarquee'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/global.css'

/**
 * Manish's Portfolio v2 — refined dark purple + Three.js hero
 *
 * Section order: Hero → Tech marquee → Services (What I do) → Projects
 * → Skills → About → Journey (Experience & Education) → Contact → Footer
 *
 * Global FX: scroll progress bar, cursor spotlight, back-to-top ring.
 */
export default function App() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <CursorGlow />
      <CustomCursor />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <Projects />
        <Skills />
        <About />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
