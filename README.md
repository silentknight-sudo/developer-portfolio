```text
░█▀▀█ ░█▀▀█ ░█▀▀▀ ░█▀▀█ ░█▀▀█ ▀▀█▀▀ ░█▀▀▀█ ░█▀▀█ ░█▀▀█
░█▄▄█ ░█▄▄▀ ░█▀▀▀ ░█▄▄█ ░█▄▄█ ░░█░░ ░█──░█ ░█─── ░█▄▄▀
░█─── ░█─░█ ░█▄▄▄ ░█─░█ ░█─░█ ░░▀░░ ░█▄▄▄█ ░█▄▄█ ░█─░█



Neon portfolio: https://developer-portfolio-zups.vercel.app/
```

<!-- prettier-ignore-start -->

# **Developer Portfolio — Neon Techno Edition**

Dark, animated, and engineered for attention — this repository is the source for `Vivek Shukla`'s personal portfolio. It showcases AI, full‑stack, and Flutter work with live demos, Lottie motion, and a responsive, accessible UI.

- **Live site:** `https://developer-portfolio-zups.vercel.app/`
- **Author:** `Vivek Shukla` — `vksp207@gmail.com`
- **Resume:** `https://drive.google.com/file/d/1nsv9f3AEiPZeEDMm-rHwIiHBEOEDVgYG/view?usp=sharing`
- **GitHub:** `https://github.com/silentknight-sudo`

---

**What you'll find**

- Neon-themed hero with Lottie animations and subtle glassmorphism
- Projects spanning AI, Flutter mobile apps, full‑stack web apps, and Web3 experiments
- Modular React/Next components under `app/components` for easy customization
- Serverless API routes in `app/api` (contact form + data endpoints)

---

**Quick Links**

- Live demo: `https://developer-portfolio-zups.vercel.app/`
- Code: `https://github.com/silentknight-sudo/Devfolio`
- Contact endpoint: `app/api/contact/route.js`

---

**Tech Snapshot**

- **Framework:** Next.js (App Router)
- **Styling:** TailwindCSS + SCSS
- **Animations:** Lottie, CSS keyframes
- **Backend:** Node API routes (built into Next)
- **Dev tooling:** `pnpm`, Docker (dev/prod), PostCSS

---

**Top Skills**

- HTML · CSS · JavaScript · TypeScript · React · Next.js · Tailwind
- MongoDB · MySQL · PostgreSQL · Firebase · AWS · Docker · Git
- Figma · UI/UX · Flutter · Generative AI integrations

---

**Selected Projects**

- **AI Study Companion** — AI‑powered study assistant (LLM integrations, Streamlit prototype)
- **EDIFYLEARN (Mindmap Generator)** — Generates learning mindmaps from topics using OpenAI
- **Diagnose.AI** — Automated health screening demo using ML pipelines
- **InfinityBlog** — Blogging platform (code available)
- **Metabnb** — Metaverse rental concept
- **Devfolio** — Portfolio scaffold and personal profile repos

Explore `utils/data/projects-data.js` and `utils/data/personal-data.js` for full project metadata and links.

---

**Run Locally**

Clone, install, run:

```bash
git clone https://github.com/silentknight-sudo/developer-portfolio.git
cd developer-portfolio
pnpm install
pnpm dev
# then open http://localhost:3000
```

Build for production:

```bash
pnpm build
pnpm start
```

Docker (dev):

```bash
docker compose up --build
```

Environment notes: create a `.env.local` for any API keys (OpenAI, analytics, email) used by your custom integrations.

---

**Developer Notes & Best Practices**

- Lazy‑load heavy Lottie animations and large images to keep TTFB low.
- Keep Lottie JSONs optimized (use `lottie-web` or bodymovin compressor).
- Use `framer-motion` for complex entrance/exit animations and interactive micro‑interactions.

---

**Project Layout (high level)**

```
app/
  ├─ api/                 # contact, data, google endpoints
  ├─ components/          # UI components & homepage sections
  ├─ css/                 # SCSS + Tailwind overrides
  └─ homepage/            # hero, about, projects, contact
public/                   # images and static assets
utils/                    # data sources (personal, projects, skills)
```

---

**Contributing**

If you'd like to contribute, follow these steps:

```bash
git checkout -b feat/your-feature
pnpm install
pnpm dev
# implement changes
git add .
git commit -m "feat: your short message"
git push origin feat/your-feature
# open a pull request
```

Follow existing component patterns and naming conventions in `app/components`.

---

**Contact & Hire**

- Email: `vksp207@gmail.com`
- LinkedIn: `https://linkedin.com/in/silentknightsudo`
- GitHub: `https://github.com/silentknight-sudo`

If you'd like, I can add a screenshot, hero GIF, or GitHub badges (Vercel, Next.js, PNPM) to the top of this README — tell me which badges or images you prefer and I'll add them.

---

**License**

Add a `LICENSE` file if you want this to be open source (MIT recommended for portfolios).

---

Thanks for building in neon. Want a rendered README preview, animated GIF header, or GitHub profile-ready version next?

<!-- prettier-ignore-end -->
```text
██████╗ ███████╗███████╗██╗   ██╗██╗     ███████╗██╗
██╔══██╗██╔════╝██╔════╝██║   ██║██║     ██╔════╝██║
██████╔╝█████╗  █████╗  ██║   ██║██║     █████╗  ██║
██╔══██╗██╔══╝  ██╔══╝  ╚██╗ ██╔╝██║     ██╔══╝  ██║
██║  ██║███████╗███████╗ ╚████╔╝ ███████╗███████╗███████╗
╚═╝  ╚═╝╚══════╝╚══════╝  ╚═══╝  ╚══════╝╚══════╝╚══════╝
Developer Portfolio — Neon Techno Theme
```

<!-- prettier-ignore-start -->

# Developer Portfolio — Techno Edition

Welcome to a dark, neon, techno-styled developer portfolio built with Next.js and Tailwind. This repository houses a modern, animated personal portfolio with interactive components, Lottie animations, and a responsive, accessible UI.

- **Status:** Ready for local development
- **Framework:** Next.js 13+ (app router)
- **Styles:** TailwindCSS + SCSS snippets
- **Animations:** Lottie

---

**Live Preview (local)**

Follow the quick start to run the site locally and view the neon UI in your browser.

**Screenshots**

Add a screenshot under `public/image/png` and reference it here for a preview in the README.

---

**Features**

- Neon, techno-inspired UI with animated hero
- Modular components under `app/components` and `app/components/homepage`
- Lottie animations in `app/api/assets/lottie`
- Blog listing and project pages
- Contact API endpoint (`app/api/contact/route.js`) for form submissions

---

**Tech Stack**

- Next.js (React) — App Router
- TailwindCSS + PostCSS
- Lottie Web for vector animations
- Node.js for API routes
- Docker + Docker Compose for containerized development

---

**Quick Start**

Clone and run locally:

```bash
git clone <your-repo-url> developer-portfolio
cd developer-portfolio
pnpm install
pnpm dev
# open http://localhost:3000
```

Build for production:

```bash
pnpm build
pnpm start
```

Docker (dev):

```bash
docker compose -f docker-compose.yml up --build
```

---

**Environment**

No mandatory environment variables are required for basic local development. If you wire up external services (email, analytics), add them to a `.env.local` file and reference them in `next.config.js` or the relevant API routes.

**Common Commands**

- `pnpm dev` — Run in development mode
- `pnpm build` — Build for production
- `pnpm start` — Start the production server
- `pnpm lint` — (if configured) Run linters

---

**Project Structure (key folders)**

```
app/
  ├─ api/                 # serverless functions (contact, data, google)
  ├─ components/          # UI building blocks & homepage sections
  ├─ css/                 # SCSS and global styles
  ├─ homepage/            # modular homepage sections
public/
utils/                    # helper scripts & sample data
README.md                 # <-- you are here
```

---

**Deployment**

This repository includes `Dockerfile.dev`, `Dockerfile.prod`, and `docker-compose.yml` for containerized builds. For production, build a production image and serve it behind your preferred CDN or host (Vercel, Netlify, Docker host, etc.).

Example Docker commands:

```bash
# Build production image
docker build -f Dockerfile.prod -t developer-portfolio:latest .

# Run production container
docker run -p 3000:3000 developer-portfolio:latest
```

---

**Tips for a sexier techno style**

- Use dark background hero with `backdrop-blur` and neon-glow using `box-shadow` and `filter` effects.
- Animate micro-interactions with `framer-motion` or CSS keyframes.
- Keep Lottie JSONs optimized and lazy-load heavy assets.

---

**Contributing**

Contributions are welcome. To contribute:

```bash
git checkout -b feat/your-feature
pnpm install
pnpm dev
# make changes, then
git add .
git commit -m "feat: add your feature"
git push origin feat/your-feature
# open a PR
```

Please follow existing code style and component patterns in `app/components`.

---

**Contact**

If you want to reach out, open an issue or PR. The project includes a contact API handler at `app/api/contact/route.js` that you can wire to a form handler.

