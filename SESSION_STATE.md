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

### Content: not started — this is next

Every section still has **placeholder copy from the Figma design**, not real
content:

- Project cards: Helios-DB, WasmKernel, GospelEmulator, NetScan-98 — **confirmed
  these are placeholder names, not real projects.** Need real projects from Jesse
  (name, tag, description, stack, links). Count doesn't have to stay at 4.
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

Waiting on Jesse to send: first project's details (or a doc/repo link to draft
from), and confirmation on whether the hero tagline/headline is real copy.

## Workflow reminders (also in CLAUDE.md)

- Only push to `staging`. Never touch `main` unless explicitly told to.
- Dev server: `astro dev --background`, manage with `astro dev status` / `stop` / `logs`.
- No browser extension connection available in this environment — visual checks
  use headless Chrome screenshots (`chrome.exe --headless=new --screenshot=...`)
  compared side-by-side against Figma screenshots (`mcp__figma__get_screenshot`),
  cropped/stacked with Python/PIL in the scratchpad dir.
- Run `npm run format` (prettier) before committing.
