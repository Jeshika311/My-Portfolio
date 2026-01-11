import "./Skills.css";
import { skillsData } from "./SkillsData";
import { motion } from "framer-motion";

export default function Skills() {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { y: 18, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skill-header">
        <h2><span className="skills-blue">Skills</span> &amp; <span> Tech</span></h2>
      </div>
      <motion.div
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillsData.map(({name, icon}, idx) => (
          <motion.div
            className="skill-card"
            key={idx}
            variants={item}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
          >
            <img src={icon} alt={name} />
            <span>{name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
