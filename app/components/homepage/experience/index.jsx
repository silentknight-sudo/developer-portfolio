// @flow strict

import { experiences } from "@/utils/data/experience";

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-heading-wrap">
        <span className="section-kicker">Experience</span>
        <h2 className="section-title">Shipping for clients, founders, and fast-moving teams.</h2>
      </div>

      <div className="grid gap-6">
        {experiences.map((experience) => (
          <article key={experience.id} className="timeline-card float-card">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">{experience.company}</p>
                <h3 className="mt-2 font-[var(--font-heading)] text-2xl font-bold text-white">{experience.title}</h3>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                {experience.duration}
              </span>
            </div>

            <p className="mt-5 max-w-4xl text-base leading-8 text-white/72">{experience.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {experience.stack.map((item) => (
                <span key={item} className="chip-tag muted">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
