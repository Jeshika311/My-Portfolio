import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

export default function Header({ scrollToSection, refs }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, refName) => {
    e.preventDefault();
    setMenuOpen(false);
    if (refs && refs[refName]) {
      scrollToSection(refs[refName]);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">JS</div>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#" onClick={(e) => handleNavClick(e, 'homeRef')}>Home</a>
          <a href="#" onClick={(e) => handleNavClick(e, 'aboutRef')}>About</a>
          <a href="#" onClick={(e) => handleNavClick(e, 'skillsRef')}>Skills</a>
          <a href="#" onClick={(e) => handleNavClick(e, 'workExpRef')}>Work Exp</a>
          <a href="#" onClick={(e) => handleNavClick(e, 'projectsRef')}>Projects</a>
          <a href="#" onClick={(e) => handleNavClick(e, 'certificationsRef')}>Certifications</a>
          <a href="#" onClick={(e) => handleNavClick(e, 'contactRef')}>Contact Us</a>
        </nav>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}
