import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectCard.css";

function ProjectCard({ project, onWatchDemo }) {
  return (
    <motion.div
      className={`project-card ${project.featured ? "featured" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />

        {project.featured && (
          <span className="featured-badge">⭐ Featured</span>
        )}
      </div>

      <div className="project-content">
        <span className="project-category">{project.category}</span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-buttons">
          {project.primaryButton.video ? (
            <button className="demo-btn" onClick={() => onWatchDemo(project)}>
              <FaExternalLinkAlt />
              {project.primaryButton.text}
            </button>
          ) : (
            <a
              href={project.primaryButton.link}
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
              {project.primaryButton.text}
            </a>
          )}

          <a
            href={project.secondaryButton.link}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            {project.secondaryButton.text}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
