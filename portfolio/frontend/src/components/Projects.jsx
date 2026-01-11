import React from "react";
import { projectsData } from "./ProjectsData";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">
        <span className="projects-blue">Projects</span>
      </h2>
      <div className="projects-grid">
        {projectsData.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-img-wrap">
              <img src={proj.img} alt={proj.title} className="project-img" />
            </div>
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-desc">{proj.desc}</p>
            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
