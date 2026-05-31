import React from "react";
import { projectsData } from "../../../../utils/data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  const featured = projectsData.filter((project) => project.featured);
  const archive = projectsData.filter((project) => !project.featured);

  return (
    <section id="projects" className="section-shell">
      <div className="section-heading-wrap">
        <span className="section-kicker">Projects</span>
        <h2 className="section-title">Featured builds plus a GitHub archive of experiments.</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.name} project={project} featured />
        ))}
      </div>

      <div className="mt-10 glass-panel rounded-[1.75rem] p-6 md:p-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h3 className="font-[var(--font-heading)] text-2xl text-white">GitHub Archive</h3>
            <p className="mt-2 text-sm text-white/65">Selected public repositories from `silentknight-sudo`.</p>
          </div>
          <span className="chip-label">{archive.length} repos listed</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {archive.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
