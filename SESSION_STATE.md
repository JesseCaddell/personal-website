# Session State

Last updated: 2026-09-23

## What this is

Working notes for picking this project back up between sessions. Not user-facing
docs — just enough to resume without re-deriving context.

## Where we are

Implementing the Figma design (`jesse-modern-minimal` frame) as the site, section
by section. Figma file: `346DEtNBhpc86NXyULhnUb`, node `10:212`.

The file has 4 top-level frames/designs total:

- `jesse-modern-minimal` (node `10:212`) — **in progress, this is the one we're building**
- `jesse-modern-terminal` (node `4:120`) — not started
- `midgar-geocities-maximal` (node `4:220`) — not started, likely for the second site (TheMidgarGospel)
- `midgar-geocities-shrine` (node `4:307`) — not started, likely for the second site (TheMidgarGospel)

### Layout: done

All sections of `jesse-modern-minimal` are built and pushed to `staging` with
Figma-accurate spacing/colors/typography, responsive down to ~520px:

- `src/components/Header.astro` — brand + nav (`#about` `#projects` `#resume`)
- `src/components/RetroAlert.astro` — green banner linking to TheMidgarGospel (currently `#`)
- `src/components/Hero.astro` — headline + profile-diagram card
- `src/components/ProjectsSection.astro` + `ProjectCard.astro` — 4 project cards, data-driven array
- `src/components/ResumeSection.astro` — experience cards + Core Stack + Education
- `src/components/Footer.astro` — copyright + Github/Contact links

Design tokens live in `src/styles/global.css` (`@theme` block): colors (`bg`,
`fg`, `muted`, `accent`, `surface`, `line`, `chip`, `track`, `mockup`,
`accent-bg`, `accent-line`), fonts (`sans` = Geist, `mono` = Geist Mono), and
`normal` line-heights to match Figma's defaults (Tailwind's defaults are taller).

No Figma variables are defined in the file, so all values were read directly off
layers/screenshots. Page background (`#0b0c0e`) was sampled from a screenshot
since it isn't set on any layer we pulled.

### Projects: done

Replaced the placeholder cards with real project content, one page per
project, and homepage rotation based on live GitHub activity:

- `src/content.config.ts` — `projects` content collection (Content Layer API,
  `glob` loader over `src/content/projects/*.md`). Schema: `order`, `name`,
  `tag`, `status`, `description`, `stack[]`, `highlights[]`,
  `links.{repo,live}`, `repos[]` (`owner/repo` slugs used for GitHub tracking).
- `src/content/projects/*.md` — all 7 projects from
  `docs/projects-context-overview.md`, rewritten as public portfolio copy
  (overview/highlights only — the doc's "Weaknesses/Gaps" and "Draft Resume
  Bullets" sections are interview-prep material and were deliberately left
  out of the public site).
- `src/components/ProjectCard.astro` — now a link to `/projects/[slug]`,
  takes `status` instead of the old fake `version`.
- `src/components/ProjectsSection.astro` — renders all 7 cards (3 start
  `hidden`), plus a "View all projects →" link. An inline client `<script>`
  fetches `pushed_at` from the public GitHub API per project's `repos[]`
  (max across multi-repo projects), caches in `localStorage` (~1hr TTL), and
  reorders/reveals the top 4 most-recently-pushed projects. Silently keeps
  the static fallback order on any fetch failure — no error UI, no rebuild
  needed for the homepage to reflect new activity.
- `src/pages/projects/index.astro` — all 7 projects, fixed order.
- `src/pages/projects/[slug].astro` — detail page per project (stack chips,
  body content, highlights, repo/live links).
- Verified in Chrome: homepage rotation reordered live against real GitHub
  push times on first load, `/projects` and detail pages render correctly,
  responsive at ~420px.

Known follow-up: Project Status Sync Bot has no known public repo, so it has
empty `links`/`repos` in its content file — its card/page just omit those
sections, which is intentional, not a bug.

### Content: resume section still needs real copy

- Resume section: "Aether Infrastructure" / "Matrix DevOps" / "Pacific Institute
  of Technology" — placeholder, needs real job history + education.
- Hero tagline/headline ("Building robust infrastructure & auditing computer
  history...") — **not yet confirmed** whether this is real copy or needs rewriting.
- Project screenshot boxes — empty placeholders (`<Project Screenshot Placeholder
for X>`). Jesse will supply real image files to drop into `src/assets/`.
- Nav `[03] Resume` currently just scroll-links to the resume section on-page —
  unclear if it should also/instead link to a downloadable resume PDF.
- Footer links: Github → `github.com/JesseCaddell` (guessed from git remote,
  unconfirmed), Contact → `mailto:jcaddell.tech@gmail.com` (confirmed).

Content will come in mixed form: some pasted directly in chat, some drafted by
Claude from source docs/links Jesse provides (resume, LinkedIn, repos). Work
through it and commit incrementally to `staging`, same pattern as the layout work.

## Immediate next step

Waiting on Jesse to send: real job history + education for the resume section,
and confirmation on whether the hero tagline/headline is real copy. Real
project screenshots also still need to be dropped into `src/assets/` and
wired into the project cards/detail pages (currently placeholder boxes).

## Workflow reminders (also in CLAUDE.md)

- Only push to `staging`. Never touch `main` unless explicitly told to.
- Dev server: `astro dev --background`, manage with `astro dev status` / `stop` / `logs`.
- Claude in Chrome extension is available in this environment for visual QA —
  use it directly instead of headless-screenshot/PIL workarounds.
- Run `npm run format` (prettier) before committing.
