import { useState } from "react";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import VideoModal from "../../components/VideoModal/VideoModal";

import projects from "../../data/projects";

import "./Projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects page-section">
      <div className="container">
        <SectionTitle title="Featured Projects" subtitle="My Recent Work" />

        <p className="projects-intro">
          Here are some of the projects I've built using modern technologies
          focusing on performance, scalability and user experience.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onWatchDemo={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <VideoModal
        isOpen={selectedProject !== null}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;
