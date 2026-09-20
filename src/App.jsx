import { Routes, Route } from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop";
import {useState } from "react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ProjectCCE from './components/ProjectCCE'
import ProjectGame from './components/ProjectGame'
import ProjectMovie from './components/ProjectMovie'
import Skills from './components/Skills'
import SkillsPage from "./components/SkillsPage"
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'


function Home({accent}) {
    return (
        <>
            <Hero accent={accent}/>
            <Projects accent={accent}/>
            <Skills accent={accent}/>
            <Contact accent={accent}/>
            <Footer />
        </>
    )
}

export default function App() {

    const [accent,setAccent] = useState("#8b5cf6")

    return (
        <div className="bg-[#070414] text-white"
             style={{ "--accent": accent }}>

            <Navbar accent={accent} setAccent={setAccent}/>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home accent={accent}/>}/>
                <Route path="/home" element={<Home accent={accent}/>}/>
                <Route path="/about" element={<About accent={accent}/>}/>
                <Route path="/skills" element={<SkillsPage accent={accent} />} />

                <Route path="/project/cce" element={<ProjectCCE accent={accent} />} />
                <Route path="/project/game" element={<ProjectGame accent={accent} />} />
                <Route path="/project/movie" element={<ProjectMovie accent={accent} />} />
            </Routes>

        </div>
    )
}