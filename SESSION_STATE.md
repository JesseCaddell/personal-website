# Session State

Last updated: 2026-09-28

## What this is

Working notes for picking this project back up between sessions. Not user-facing
docs — just enough to resume without re-deriving context.

## Where we are

**The site is live in production.** `staging` was merged into `main` via PR #1
and Vercel has deployed it. `main` and `staging` are in sync (both at `71fa6b8`
as of this update — a merge commit; the last direct-to-staging commit before
that was `04ae46e`).

All core sections of the `jesse-modern-minimal` Figma design are built with real
content (no placeholders remaining):

- `src/components/Header.astro` — brand + nav: `[01] About`, `[02] Projects`,
  `[03] Experience` (homepage anchor), `[04] Resume` (real page, see below).
  Active-state highlighting is derived from `Astro.url.pathname`, not hardcoded.
- `src/components/RetroAlert.astro` — banner linking to TheMidgarGospel. **Still
  `href="#"`** — that second site doesn't exist yet (unbuilt Figma frames
  `midgar-geocities-maximal` / `-shrine`). Confirmed with Jesse this stays as a
  placeholder until that site is real; not a bug.
- `src/components/Hero.astro` — real profile photo (circular, VTube-Studio-style
  status panel) + real positioning copy: "Software Architecture & AI-Assisted
  Development" / "Good systems are good systems, whether they're in production
  or a 2002 MMO." / a blurb covering full-stack dev, AI-assisted development,
  and a Ragnarok Online nod. Photo is `src/assets/profile-photo.jpg`.
  **Follow-up still open:** Jesse wants a commissioned illustrated version that
  swaps in on hover (novelty touch). Spec given: 3:2 aspect ratio (matches the
  photo's crop), ≥1800×1200px. Not yet commissioned as of last check — may be
  ~1 week out. No code exists for the hover-swap yet.
- `src/components/ProjectsSection.astro` + `ProjectCard.astro` — homepage shows
  the 4 most recently active projects (live GitHub-recency reorder, client-side
  script, `gh-pushed-at-cache-v1` in localStorage, 1hr TTL). The `[0X]` index
  label now reflects **displayed position**, not each project's static
  `content.order` — the script rewrites `[data-index]` spans after reordering.
  `/projects` (fixed catalog order, unaffected by recency) and
  `/projects/[slug]` detail pages cover all 7 real projects.
- `src/components/ResumeSection.astro` — real job history (NextWaveDev
  co-founder, Flowarden capstone, TPM Practicum — blended TPM + full-stack
  framing per Jesse's request) and both real degrees (BAS + AAS-T), in a
  3-row CSS grid. **Mobile grid bug fixed** this session (see below).
- `src/pages/resume.astro` — dedicated resume page: inline PDF preview +
  download link (plain accent-colored text, no button chrome). PDF is
  `public/jesse-caddell-resume.pdf`, converted from Jesse's existing "Dev"
  resume docx via Word COM automation (no LibreOffice/pandoc available in this
  environment — Word automation is the working path if regenerating).
- `src/components/Footer.astro` — Github, LinkedIn, Contact links. Host text
  is dynamic (`window.location.hostname`, SSR fallback from `Astro.site`) —
  was previously hardcoded to literally say "Host: localhost" in production,
  now fixed. Copyright line uses `|` as separator (Jesse's own edit).

### Content collection schema (`src/content.config.ts`)

`projects` collection now supports, per project: `image` (`src`, `alt`,
`position`, `frame` — `frame: false` renders the image bare/unframed instead
of in the standard bordered screenshot box, used for Chao's character art),
`gallery`, `video` (`src`, optional `poster`), `credits` (array of
`{label, href}`, rendered next to Source/Live site links). See
`docs/new-project-template.md` for the fill-in-the-blanks template when adding
a new project.

### This session's fixes (in case similar bugs resurface)

- **Mobile layout was seriously broken** and had been for a while undetected,
  because `mcp__claude-in-chrome__resize_window` silently doesn't work in this
  environment (reports success, viewport never actually changes — confirmed via
  `window.innerWidth` checks). Worked around it by injecting an `<iframe>` at a
  fixed CSS width into the page via `javascript_tool` and screenshotting that —
  iframes get their own real viewport for media queries. Use that trick for any
  future responsive QA in this environment rather than trusting `resize_window`.
  Filed feedback on the tool itself.
- Resume section's experience/education grid used unconditional inline
  `grid-row` styles that only made sense at the `lg:` 2-column breakpoint;
  on mobile (1-column) they still applied and cards overlapped. Fixed with
  `lg:row-start-N` classes instead of inline styles.
- Header nav lacked `flex-wrap`/`whitespace-nowrap`, so narrow viewports wrapped
  mid-label ("[01]" / "About" on separate lines).
- `ProjectCard`/`[slug].astro` rendered a literal `<Project Screenshot
  Placeholder for X>` string for projects with no image — now the image block
  is just omitted (same pattern as missing links/repos).

### Known accepted limitations (discussed, not bugs)

- Card Cave Games' repo (`next-wave-dev-org/card-cave-games-shopify-storefront`)
  is private, so the client-side GitHub API recency check 404s on it — it can't
  be live-tracked and just sits at its static fallback position. Jesse said
  leave it, since he'll have more private repos in the future too.
- RetroAlert's `href="#"` — see above, waiting on TheMidgarGospel to exist.

## Private reference material (gitignored, lives in `docs/`)

`docs/resume-project-context.md`, both resume `.docx` files, the raw source
headshot, `docs/screenshots/`, and the intermediate PDF export are all
gitignored (contact info / interview-prep notes / redundant with tracked
copies elsewhere). This is a **public** repo — keep new personal/sensitive
reference material out of git the same way.

## Immediate next steps

1. **Commissioned hero art** — once Jesse has the illustrated character art
   back, build the hover-swap on the hero photo (spec above).
2. **TheMidgarGospel** — second site, not started. RetroAlert's link stays a
   placeholder until then.
3. Otherwise the site is feature-complete and live; treat further work as
   incremental polish/content updates rather than a build-out.

## Workflow reminders (also in CLAUDE.md)

- Push to `staging` first; `main` is production (Vercel auto-deploys). Only
  merge `staging` → `main` when explicitly going live — Jesse has been doing
  that merge himself via PR, not asking Claude to do it directly.
- Dev server: `astro dev --background`, manage with `astro dev status` /
  `stop` / `logs`.
- Claude in Chrome extension is available for visual QA — remember the
  `resize_window` caveat above.
- Run `npm run format` (prettier) before committing.
