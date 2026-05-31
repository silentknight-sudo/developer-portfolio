// @flow strict
import Link from "next/link";

const navItems = [
  { label: "ABOUT", href: "/#about" },
  { label: "EXPERIENCE", href: "/#experience" },
  { label: "SKILLS", href: "/#skills" },
  { label: "EDUCATION", href: "/#education" },
  { label: "PROJECTS", href: "/#projects" },
  { label: "CONTACT", href: "/#contact" },
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-[100] py-5">
      <div className="glass-panel flex flex-col gap-4 rounded-2xl px-5 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="font-[var(--font-heading)] text-xl font-bold tracking-[0.28em] text-[var(--accent)] md:text-2xl">
          VIVEK//SHUKLA
        </Link>

        <ul className="flex flex-wrap items-center gap-2 md:gap-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="chip-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
