import "./Skills.css";
import { skillsData } from "./SkillsData";
import { motion } from "framer-motion";

export default function Skills() {

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: {
      opacity: 0,
      x: 80
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="skills-section">

      <div className="skill-header">
        <h2>
          <span className="skills-blue">Skills</span> & Tech
        </h2>
      </div>

      <motion.div
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}   // 🔥 KEY LINE
      >
        {skillsData.map(({ name, icon }, idx) => (
          <motion.div
            className="skill-card"
            key={idx}
            variants={item}
            whileHover={{ scale: 1.06 }}
          >
            <img src={icon} alt={name} />
            <span>{name}</span>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
