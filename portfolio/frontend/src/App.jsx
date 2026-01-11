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

  return (
    <>
    <div>
        <Header />
        <Home />
        <About />
        <Divider />
        <Skills />
        <WorkExperience />
        <Projects />
        <Divider />
        <Certifications />
        <Divider />
        <Contact />
        <Footer />
    </div>
    </>
  )
}

export default App
