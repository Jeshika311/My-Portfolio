import { FaEnvelope, FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";
import ParticleBackground from './ParticleBackground';
import './Home.css';

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <ParticleBackground />

      <section id="home" className="section-full">
        <motion.div className="content">
          <motion.h1 
          initial={{ y: 70 , opacity: 0 }}
          animate={{ y: 0 , opacity: 1}}
          transition={{ duration: 1.5 }}          
          className="name">
            Jeshika <span className="highlight">Sharma</span>
          </motion.h1>
          <motion.h2 
            initial={{ y: 70 , opacity: 0 }}
            animate={{ y: 0 , opacity: 1.5}}
            transition={{ duration: 1.7 }}           
          className="subtitle">
            Frontend Developer | Problem Solver
          </motion.h2>

          <div className="social-icons">
            <a href="mailto:jeshikaa31@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-link"><FaEnvelope size={36} /></a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="icon-link"><FaFilePdf size={36} /><span className="resume-text">Resume</span></a>
            <a href="https://www.linkedin.com/in/jeshika-sharma-5664b1322" target="_blank" rel="noopener noreferrer" className="icon-link"><FaLinkedin size={36} /></a>
            <a href="https://github.com/jeshika311" target="_blank" rel="noopener noreferrer" className="icon-link"><FaGithub size={36} /></a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
