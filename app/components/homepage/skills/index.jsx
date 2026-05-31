// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-heading-wrap">
        <span className="section-kicker">Stack</span>
        <h2 className="section-title">Tools I actually like reaching for.</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {skillsData.map((skill) => (
          <div key={skill} className="skill-card float-card">
            <div className="flex items-center gap-4">
              <div className="skill-icon-wrap">
                <Image
                  src={skillsImage(skill)?.src}
                  alt={skill}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-lg"
                />
              </div>
              <div>
                <p className="font-[var(--font-heading)] text-base text-white">{skill}</p>
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">active toolkit</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
