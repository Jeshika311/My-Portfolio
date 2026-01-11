import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import Jeshika from "../assets/Jeshika.jpg"

export default function About() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const item = {
    hidden: { x: -40, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
  };
  return (
    <>
      <section id="about">
        <motion.div
          className="about-left"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h1 variants={item}>
            Hi, I'm <span className="name-highlight">Jeshika</span> <span className="wave">👋</span>
          </motion.h1>
          <motion.p variants={item}>
            I am a <span className="highlight">full stack Developer</span> from Kurukshetra, passionate about building user-friendly and visually appealing web experiences. Currently, I’m pursuing my <span className="highlight">B.Tech in Computer Science & Engineering</span> from Maharishi Markandeshwar (Deemed to be university), Mullana , Ambala.
          </motion.p>
          <br/>
          <motion.p variants={item}>
            I specialize in <span className="highlight">Full Stack Development</span>, working with:
          </motion.p>
          <ul>
            <motion.li variants={item}><strong>Programming:</strong> Python, C, C++</motion.li>
            <motion.li variants={item}><strong>Frontend:</strong> HTML, CSS, JavaScript, ReactJS, Tailwind CSS, GSAP, Framer motion</motion.li>
            <motion.li variants={item}><strong>Backend:</strong> Node.js, Express.js, JWT (Authentication & Authorization)</motion.li>
            <motion.li variants={item}><strong>Databases:</strong> MongoDB</motion.li>
            <motion.li variants={item}><strong>State Management:</strong> Redux Toolkit</motion.li>
            <motion.li variants={item}><strong>Other Skills:</strong> Data analysis, Git Github</motion.li>
          </ul>
          <div className="projects">
            <motion.p variants={item}>Here are some of my major projects:</motion.p>
            <ul>
              <motion.li variants={item}>
                <strong>Ultrasonic sensor based Aurdino Radar : </strong>
                An Ultrasonic Sensor based Radar System is built using an Arduino board, an ultrasonic sensor, and a servo motor.It scans the surrounding area by rotating the ultrasonic sensor, detects objects in its path, and displays them on a graphical interface.
                <br />
                Arduino UNO, Ultrasonic Sensor (HC-SR04), Servo Motor, Breadboard, Jumper Wires, and Power Supply.
              </motion.li>
              <motion.li variants={item}>
                <strong>Blind stick : </strong>
                Blind Stick is an assistive device designed to help visually impaired individuals navigate safely. It uses an ultrasonic sensor to detect obstacles ahead and alerts the user through a buzzer and vibration motor.
                <br />
                Arduino UNO, Ultrasonic Sensor (HC-SR04), Buzzer, Vibrating Motor, IR Sensor, Switch/Button, Battery/Power Supply, and Jumper Wires.
              </motion.li>
            </ul>
          </div>
        </motion.div>
        <div className="about-right">
          <img 
            src={Jeshika} 
            alt="Jeshika profile" 
            className="profile-photo"
          />
        </div>
      </section>
    </>
  );
}
