// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="section-heading-wrap">
        <span className="section-kicker">About</span>
        <h2 className="section-title">A builder who likes codebases with personality.</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="profile-frame float-card">
          <Image
            src={personalData.profile}
            width={360}
            height={360}
            alt="Vivek Shukla"
            className="h-auto w-full rounded-[1.5rem] object-cover"
          />
        </div>

        <div className="glass-panel rounded-[1.75rem] p-6 md:p-8">
          <p className="text-base leading-8 text-white/75 md:text-lg">
            {personalData.description}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {personalData.highlights.map((item) => (
              <div key={item} className="mini-panel">
                <span className="text-sm leading-7 text-white/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
