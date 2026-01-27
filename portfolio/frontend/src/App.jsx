import { useRef } from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Home from './components/Home'
import Divider from './components/Divider'
import WorkExperience from './components/WorkExperience'
import Certifications from './components/Certifications'
import './App.css'
import Contact from './components/Contact'

function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const workExpRef = useRef(null)
  const projectsRef = useRef(null)
  const certificationsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
    <div>
        <Header scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, skillsRef, workExpRef, projectsRef, certificationsRef, contactRef }} />
        <div ref={homeRef}><Home /></div>
        <div ref={aboutRef}><About /></div>
        <Divider />
        <div ref={skillsRef}><Skills /></div>
        <div ref={workExpRef}><WorkExperience /></div>
        <div ref={projectsRef}><Projects /></div>
        <Divider />
        <div ref={certificationsRef}><Certifications /></div>
        <Divider />
        <div ref={contactRef}><Contact /></div>
        <Footer />
    </div>
    </>
  )
}

export default App
