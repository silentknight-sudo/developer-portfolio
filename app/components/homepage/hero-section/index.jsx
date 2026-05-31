// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-8 lg:py-14">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-7">
          <div className="chip-label">SYSTEM STATUS // BUILDING PRODUCTS THAT SHIP</div>
          <div className="space-y-5">
            <h1 className="font-[var(--font-heading)] text-4xl font-bold leading-tight text-white md:text-6xl md:leading-[1.05]">
              Geeky interfaces.
              <br />
              Startup systems.
              <br />
              <span className="text-[var(--accent)]">Human-centered engineering.</span>
            </h1>
            <p className="max-w-3xl text-base leading-8 text-white/72 md:text-lg">
              {personalData.name} is a full stack and Flutter developer who blends product thinking,
              visual detail, AI tooling, and business execution into products that feel alive.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="#contact" className="primary-cta">
              <span>Open Channel</span>
              <RiContactsFill size={18} />
            </Link>
            <Link href={personalData.resume} target="_blank" className="secondary-cta">
              <span>Download Resume</span>
              <MdDownload size={18} />
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            {personalData.skills.map((skill) => (
              <span key={skill} className="chip-tag">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 text-white/80">
            <Link href={personalData.github} target="_blank" className="icon-frame">
              <BsGithub size={20} />
            </Link>
            <Link href={personalData.linkedIn} target="_blank" className="icon-frame">
              <BsLinkedin size={20} />
            </Link>
          </div>
        </div>

        <div className="hero-visual-stack">
          <div className="avatar-shell float-card">
            <div className="avatar-shell-grid" />
            <div className="avatar-welcome-badge">Welcome.exe running</div>
            <div className="avatar-rings">
              <span className="avatar-ring avatar-ring-one" />
              <span className="avatar-ring avatar-ring-two" />
            </div>
            <div className="avatar-image-wrap">
              <Image
                src="/avatar-vivek-cyber.png"
                alt="Vivek avatar"
                width={900}
                height={960}
                className="avatar-image"
                priority
              />
            </div>
            <div className="avatar-glow-card">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">Live Greeting</p>
              <p className="mt-2 text-sm leading-7 text-white/70">
                Hey, I&apos;m Vivek. Welcome to my build-space where product design, code, and experiments ship together.
              </p>
            </div>
          </div>

          <div className="terminal-shell float-card">
            <div className="terminal-topbar">
              <div className="flex gap-2">
                <span className="terminal-dot bg-[#ff6b6b]" />
                <span className="terminal-dot bg-[#ffd166]" />
                <span className="terminal-dot bg-[#06d6a0]" />
              </div>
              <span className="text-xs uppercase tracking-[0.35em] text-white/45">identity.js</span>
            </div>
            <div className="terminal-body">
              <div className="code-line"><span className="text-[var(--accent-2)]">const</span> <span className="text-white">builder</span> = {"{"}</div>
              <div className="code-line pl-5"><span className="text-white/80">name:</span> <span className="text-[var(--accent)]">"{personalData.name}"</span>,</div>
              <div className="code-line pl-5"><span className="text-white/80">role:</span> <span className="text-[#ffd089]">"{personalData.designation}"</span>,</div>
              <div className="code-line pl-5"><span className="text-white/80">mode:</span> <span className="text-[#8fd3ff]">"shipping products"</span>,</div>
              <div className="code-line pl-5"><span className="text-white/80">location:</span> <span className="text-[#c4f99d]">"{personalData.address}"</span>,</div>
              <div className="code-line pl-5"><span className="text-white/80">traits:</span> [<span className="text-[var(--accent)]">"design-aware"</span>, <span className="text-[var(--accent)]">"AI-native"</span>, <span className="text-[var(--accent)]">"startup-ready"</span>],</div>
              <div className="code-line pl-5"><span className="text-white/80">stack:</span> [<span className="text-[#ffd089]">"Flutter"</span>, <span className="text-[#ffd089]">"React"</span>, <span className="text-[#ffd089]">"Next"</span>, <span className="text-[#ffd089]">"Firebase"</span>]</div>
              <div className="code-line">{"};"}</div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {personalData.stats.map((item) => (
                  <div key={item.label} className="stat-panel">
                    <div className="text-2xl font-bold text-white">{item.value}</div>
                    <div className="text-xs uppercase tracking-[0.24em] text-white/55">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
