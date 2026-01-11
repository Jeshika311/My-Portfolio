import "./WorkExperience.css";
import { experiences } from "./ExperienceData";
import { motion } from "framer-motion";

const WorkExperience = () => {

  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section id="workexp-section">
      <div>
        <h2 className="workexp-title">
          <span className="workexp-highlight">Work </span> Experience
        </h2>
      </div>

      <div className="workexp-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`workexp-container ${
              index % 2 === 0 ? "workexp-left" : "workexp-right"
            }`}
            variants={index % 2 === 0 ? leftVariant : rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="workexp-content">
              <h3>{exp.company}</h3>
              <p className="workexp-location">{exp.location}</p>
              <p className="workexp-duration">{exp.duration}</p>
              <p className="work-projects">Projects :</p> <br />
              <ul>
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
