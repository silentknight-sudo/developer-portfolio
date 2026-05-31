// @flow strict

import Link from "next/link";

function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-card ${featured ? "project-card-featured" : "project-card-compact"} float-card`}>
      <div className="project-card-grid" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
            {featured ? "Featured Build" : "GitHub Repo"}
          </p>
          <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-bold text-white">
            {project.name}
          </h3>
        </div>
        {project.code ? (
          <Link href={project.code} target="_blank" className="chip-link">
            repo
          </Link>
        ) : null}
      </div>

      <p className="mt-5 text-sm leading-7 text-white/72 md:text-base md:leading-8">
        {project.description}
      </p>

      <p className="mt-4 text-sm leading-7 text-white/60">
        <span className="text-white/90">Role:</span> {project.role}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tools.map((tag) => (
          <span key={tag} className="chip-tag muted">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
