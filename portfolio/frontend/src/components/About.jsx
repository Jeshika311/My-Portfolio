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
            I am a <span className="highlight">backend-focused MERN Stack Developer</span> from Kurukshetra, passionate about building scalable, secure, and real-world web applications. I enjoy developing robust backend systems, designing REST APIs, implementing real-time features, and integrating modern technologies to solve practical problems. Currently, I’m pursuing my{" "} <span className="highlight">B.Tech in Computer Science & Engineering</span>{" "} from Maharishi Markandeshwar (Deemed to be University), Mullana, Ambala.
          </motion.p>
          <br/>
          <motion.p variants={item}>
            I specialize in <span className="highlight">Full Stack Development</span>, working with:
          </motion.p>
          <ul>
            <motion.li variants={item}>
              <strong>Programming:</strong> C++, JavaScript, TypeScript
            </motion.li>

            <motion.li variants={item}>
              <strong>Frontend:</strong> React.js, HTML5, CSS3, Tailwind CSS, Framer Motion
            </motion.li>

            <motion.li variants={item}>
              <strong>Backend:</strong> Node.js, Express.js, REST APIs, JWT, Socket.io, RBAC
            </motion.li>

            <motion.li variants={item}>
              <strong>Database:</strong> MongoDB
            </motion.li>

            <motion.li variants={item}>
              <strong>Tools & Platforms:</strong> Git, GitHub, Postman, Vercel, Render, Firebase, Cloudinary
            </motion.li>

            <motion.li variants={item}>
              <strong>Core Concepts:</strong> DSA, Authentication & Authorization, RBAC, System Design Fundamentals
            </motion.li>
          </ul>
          <div className="projects">
            <motion.p variants={item}>
              Some of the key projects I have worked on include:
            </motion.p>

            <ul>
              <motion.li variants={item}>
                <strong>AI Interview Agent : </strong>
                An AI-powered mock interview platform that generates personalized interview questions and feedback based on the user's role, experience, skills, and resume. It features resume analysis, voice-enabled interviews, timed sessions, performance analytics, interview history, a credit-based system, and Razorpay payment integration.
              </motion.li>

              <motion.li variants={item}>
                <strong>Cravely : </strong>
                A real-time food delivery platform that connects users, shop owners, and delivery partners. It features role-based authentication, real-time order updates using Socket.IO, live delivery tracking with React Leaflet, Razorpay payment integration, OTP-based delivery verification, food ratings, and geolocation-based services.
              </motion.li>

              <motion.li variants={item}>
                <strong>School Ride Platform : </strong>
                A multi-user school ride pooling platform designed to connect parents and drivers for safe and convenient student transportation. It includes role-based authentication, ride and booking management, vehicle management, real-time tracking, notifications, and secure REST APIs.
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
