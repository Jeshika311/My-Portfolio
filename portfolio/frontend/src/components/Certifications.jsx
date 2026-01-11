import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Certifications.css";
import { certifications } from "./CertificationsData";

export default function Certifications() {

  const marqueeRef = useRef();
  const controls = useAnimation();

  useEffect(() => {
    if(!marqueeRef.current) return;

    const fullWidth = marqueeRef.current.scrollWidth / 2;

    controls.start({
      x: [0, -fullWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 20
        }
      }
    });
  }, [controls]);

  return (
    <section id="certifications" className="certification-section">
      <h2 className="certification-title">
        <span className="certification-blue">Certifications</span>
      </h2>
      <div className="certification-grid" ref={marqueeRef}>
        <motion.div
          className="certification-marquee-track"
          animate={controls}
          ref={marqueeRef}
        >
        {[...certifications, ...certifications].map((cert, idx) => (
          <a
            className="certification-card"
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
          >
            <div className="certification-img-wrap">
              <img src={cert.img} alt={cert.name} className="certification-img" />
            </div>
            <div className="certification-meta">
              <h3 className="certification-name">{cert.name}</h3>
              <p className="certification-org">{cert.org}</p>
              <p className="certification-issue">Issue date : {cert.month} , {cert.year}</p>
            </div>
          </a>
        ))}
        </motion.div>
      </div>
    </section>
  );
}
