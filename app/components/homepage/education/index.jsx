// @flow strict
import { educations } from "@/utils/data/educations";

function Education() {
  const education = educations[0];

  return (
    <section id="education" className="section-shell">
      <div className="section-heading-wrap">
        <span className="section-kicker">Education</span>
        <h2 className="section-title">Academic base with a builder mindset.</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-[1.75rem] p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">{education.duration}</p>
          <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-bold text-white">{education.title}</h3>
          <p className="mt-2 text-white/70">{education.institution}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="mini-panel">
            <h4 className="mb-4 font-[var(--font-heading)] text-lg text-white">Achievements</h4>
            {education.achievements.map((item) => (
              <p key={item} className="mb-3 text-sm leading-7 text-white/72">
                {item}
              </p>
            ))}
          </div>
          <div className="mini-panel">
            <h4 className="mb-4 font-[var(--font-heading)] text-lg text-white">Certifications</h4>
            {education.certifications.map((item) => (
              <p key={item} className="mb-3 text-sm leading-7 text-white/72">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
