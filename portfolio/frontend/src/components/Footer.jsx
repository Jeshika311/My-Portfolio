import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <h3 className="footer-title">Let's Connect</h3>
      <div className="footer-icons">
        <a href="mailto:jeshikasharma7@gmail.com" target="_blank" rel="noreferrer">
          <MdEmail />
        </a>
        <a href="https://github.com/jeshika311" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/jeshika-sharma-5664b1322?" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/jeshikasharma07" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div> */}
      <hr className="footer-line" />
      <p className="footer-text">
        Made with <span className="heart">❤️</span> by <strong>Jeshika Sharma</strong>
      </p>
    </footer>
  );
};

export default Footer;
