import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Certifications.css";
import { certifications } from "./CertificationsData";

export default function Certifications() {

  const marqueeRef = useRef();
  const controls = useAnimation();

  useEffect(() => {
    if (!marqueeRef.current) return;

    const cards = marqueeRef.current.querySelectorAll('.certification-card');
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth;
    const gap = 65; 
    const singleSetWidth = (cardWidth + gap) * certifications.length;

    controls.start({
      x: [0, -singleSetWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: certifications.length 
        }
      }
    });
  }, [controls]);

  return (
    <section id="certifications" className="certification-section">
      <h2 className="certification-title">
        <span className="certification-blue">Certifications</span>
      </h2>
      <div className="certification-grid">
        <motion.div
          className="certification-marquee-track"
          ref={marqueeRef}
          animate={controls}
        >
        {[...certifications, ...certifications].map((cert, idx) => (
          <div
            className="certification-card"
            key={idx}
            onClick={() => {
              window.open(cert.link, "_blank");
            }}
            style={{ cursor: "pointer" }}
          >
            <div className="certification-img-wrap">
              <img src={cert.img} alt={cert.name} className="certification-img" />
            </div>
            <div className="certification-meta">
              <h3 className="certification-name">{cert.name}</h3>
              <p className="certification-org">{cert.org}</p>
              <p className="certification-issue">Issued in : {cert.month} , {cert.year}</p>
              <button
                className="verify-button"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(cert.link, "_blank");
                }}
              >
                Verify
              </button>
            </div>
          </div>
        ))}
        </motion.div>
      </div>
    </section>
  );
}
