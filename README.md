# jesse-caddell.dev

Jesse Caddell's personal portfolio site: a retro-terminal-styled single page with a hero
profile, a live project feed, and a resume/experience section, plus dedicated pages per
project and a downloadable resume.

Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

## Features

- **Hero** — profile photo in a terminal-styled status panel, bio, and links.
- **Projects** — homepage shows the 4 most recently active projects, reordered
  client-side by live GitHub push activity (`src/components/ProjectsSection.astro`),
  with a `/projects` page listing all of them in fixed catalog order. Each project has
  its own detail page (`src/pages/projects/[slug].astro`) with stack, highlights,
  screenshots/video, and links.
- **Resume** — an "Experience & Skills" section on the homepage, plus a dedicated
  `/resume` page with an inline PDF preview and a download button.

## Project structure

```text
/
├── public/                        # static assets (favicon, resume PDF)
├── src/
│   ├── assets/                    # images imported through Astro's image pipeline
│   ├── components/                # Header, Hero, ProjectsSection, ResumeSection, Footer, etc.
│   ├── content/
│   │   ├── projects/*.md          # one file per project (see docs/new-project-template.md)
│   │   └── projects/images/       # per-project screenshots
│   ├── content.config.ts          # zod schema for the `projects` content collection
│   ├── layouts/Layout.astro       # <head>, fonts, meta
│   └── pages/                     # index, /projects, /projects/[slug], /resume
├── docs/                          # local-only reference material (gitignored where private)
└── astro.config.mjs
```

## Commands

Run from the project root:

| Command           | Action                                   |
| :---------------- | :--------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`   |
| `npm run preview` | Preview the production build locally     |
| `npm run format`  | Format the codebase with Prettier        |

Requires Node `>=22.12.0`.

## Adding a project

Copy the template at `docs/new-project-template.md` into
`src/content/projects/<slug>.md` and fill it in — it documents every field
(`order`, `repos` for recency tracking, optional `image`/`gallery`/`video`/`credits`,
etc.).

## Deployment

- `staging` is the working branch — all changes are pushed there first.
- `main` is production; Vercel auto-deploys on push. Merge `staging` into `main` only
  when ready to go live.
