// @flow strict
import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060816] text-white">
      <div className="mx-auto px-6 py-8 sm:px-12 lg:max-w-[78rem] xl:max-w-[84rem] 2xl:max-w-[96rem]">
        <div className="glass-panel flex flex-col gap-4 rounded-2xl px-6 py-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/70">
            Built for the internet, startups, and late-night product sprints.
          </p>
          <div className="flex items-center gap-5 text-sm text-white/80">
            <Link target="_blank" href="https://github.com/silentknight-sudo/developer-portfolio" className="hover:text-[var(--accent)]">
              source
            </Link>
            <Link target="_blank" href="https://linkedin.com/in/silentknightsudo" className="hover:text-[var(--accent-2)]">
              linkedin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
