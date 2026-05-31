// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import ContactForm from "./contact-form";

function ContactSection() {
  return (
    <section id="contact" className="section-shell pb-20">
      <div className="section-heading-wrap">
        <span className="section-kicker">Contact</span>
        <h2 className="section-title">Let&apos;s build something ambitious.</h2>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <ContactForm />

        <div className="glass-panel rounded-[1.75rem] p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">Signal Channels</p>
          <div className="mt-6 space-y-5">
            <p className="contact-row"><MdAlternateEmail size={22} /> <span>{personalData.email}</span></p>
            <p className="contact-row"><IoMdCall size={22} /> <span>{personalData.phone}</span></p>
            <p className="contact-row"><CiLocationOn size={22} /> <span>{personalData.address}</span></p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <Link target="_blank" href={personalData.github} className="icon-frame"><IoLogoGithub size={20} /></Link>
            <Link target="_blank" href={personalData.linkedIn} className="icon-frame"><BiLogoLinkedin size={20} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
