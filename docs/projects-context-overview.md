/
Resume and Job search
Resume and Job search


Recents
Tailoring resume for data analytics contract role
23 hours ago
Tailoring resume for technical program manager role
Jun 5
Resume review for entry-level job application
Mar 28
Instructions

Add instructions to tailor Claude’s responses
Memory
Only you

View and manage what Claude remembers from your chats.

We’ve migrated to a new memory system. You have 18 days left if you’d like to export this project’s legacy memory.
Context
1% of project capacity used

    resume-project-context.md

    28.6kB

    md
    Jesse Caddell Resume.docx

    5.2kB

    docx

Scheduled

Set up recurring tasks for this project.
resume-project-context.md
# Project Context for Resume — Jesse Caddell

*Compiled 2026-09-22 from the git history, READMEs, docs, and source of each repo.
Commit counts cover all of Jesse's author identities (`jesse.caddell@wsu.edu`,
GitHub noreply, `jesse.c@nextwavedev.org`).*
 
---

## At a Glance

| # | Project | Type | Role | Timeframe | Core Stack | Status |
|---|---|---|---|------|---|---|
| 1 | Draw The Block | Live client site (nonprofit art collective) | Lead / primary dev | Jan – Sep 2026 | Astro, Decap CMS, Netlify, Shopify Storefront API | **Live** — drawtheblock.org |
| 2 | NWD Central Hub | Team web app (Next Wave Dev) | Contributor (~62 of 243 commits) | Feb – Jul 2026 | Next.js 16, TypeScript, Supabase, Tailwind v4, Resend | Deployed prototype (Vercel) |
| 3 | Card Cave Games | Client Shopify storefront | Sole dev (~200 of 210 commits) | Aug – Sep 2026 | Shopify Liquid (OS 2.0 / Dawn), vanilla JS, Ajax Cart API | **Live** theme on `main` |
| 4 | Job-Finder ("The Pipeline") | Personal tool | Solo | Jun – Sep 2026 | Vanilla JS, Netlify Functions, Supabase, Claude API | In active personal use |
| 5 | Flowarden | Capstone SaaS (AD490) | Solo | Jan – Mar 2026 (+ Sep cleanup) | Node/TS, Express 5, Octokit, Zod, Next.js 16, React 19 | MVP complete; post-MVP roadmap written |
| 6 | Chao Companion AI | Personal AI/streaming project | Solo | Aug 5 – 17, 2026 | Python 3.11 asyncio, Claude + Ollama, faster-whisper, Piper, VTube Studio, FastAPI, React | Working, phase 6 in progress. **Private repo** |
| 7 | Project Status Sync Bot | Org-wide workflow automation | Builder (bot + Actions) | 2025 | GitHub App, GitHub Actions, Projects v2 GraphQL API, `gh` CLI, jq | **In production** on all active NWD and Seattle Colleges repos |
 
---

## How to Talk About AI-Assisted Development

Most of these repos contain a `CLAUDE.md`, and Chao has a `SESSION_STATE.md`
that logs sessions openly. Interviewers who open the repos will see them, so
bring it up yourself before they ask:

- **You** wrote the specs, design docs, issue breakdowns, and acceptance
  criteria. You made the architectural decisions, reviewed the output, and
  caught design mistakes. Chao's session log records one: you noticed that
  viewer affinity had been removed along with the heart-emote gate and had
  it restored.
- You ran the projects with real engineering process: issue/PR templates,
  phased epics, branch rulesets, CI checks, test suites, and written
  architecture docs.
- Suggested framing: *"I use AI coding agents as a force multiplier. I own
  the architecture, specs, review, and verification."* This is an
  increasingly marketable skill, so present it as a strength.
---

## 1. Draw The Block — Static Site for a Seattle Art Collective

**Repo:** `next-wave-dev-org/draw-the-block-static-site` · **Live:** https://drawtheblock.org
**Role:** Primary developer. About 300 of the 455 commits are yours. The other
~144 are the client's own content edits made through the CMS you built.
**Timeframe:** Jan 2 → Sep 19, 2026 (about 9 months, still maintained)

### Stack
- **Astro** static site generator with content collections, Zod-validated
  schemas, the Astro Image pipeline, and ClientRouter view transitions
- **Decap CMS** (Git-based headless CMS) with admin UI at `/admin`, custom
  preview templates and widgets
- **Netlify** hosting, build pipeline, Identity (CMS auth), Git Gateway
- **Shopify Storefront API** products fetched at build time, with a mock fallback
- **Mailchimp** newsletter through a Netlify Function (planned move to MailerLite)
- **GitHub Actions**: a required check that only lets PRs into `main` come
  from `develop` or `hotfix/*`
### What You Built
- The whole site architecture: 10+ pages, nested dynamic routes
  (`/events/[slug]`, `/events/[eventSlug]/[subSlug]` for sub-events such as
  cosplay and art contests), and a component library (`EventCard`,
  `ProductCard`, `Countdown`, `Marquee`, `PeekMascot`, `Kicker`, `Breadcrumb`)
- About 12 CMS collections (events, sub-events, vendors, team, FAQ, sponsors,
  donate, marquee, page content, social settings, shop sync). The client
  maintains 50+ vendor profiles, 14 team members, and 13+ events without
  developer help
- A Shopify integration layer (`src/lib/shopify.ts`) that falls back to mock
  data by design, so new devs and preview deploys work without credentials
- CMS upload guardrails, a Header Banner "Logo Mode" CMS setting
  (Default / No Logo / Custom), and a design-token system (`tokens.css`)
- Performance work: an LCP fix on event cards, moving images into `src/` so
  they are optimized at build time, and prerendering on all pages
- Operational docs: `cms.md`, `components.md`, `Responsive.md` (breakpoint
  ladder, fluid type), and `shopify.md` (onboarding plus failure handling)
### Triumphs
- **A live production site for a real client, and the client edits it
  themselves.** The ~144 CMS commits show the handoff worked.
- A branch-protection design that works around Decap: the required status
  check gates PRs into `main` but deliberately leaves Git Gateway's direct
  content pushes alone, so CMS editing keeps working
- The site survived a major framework upgrade (Astro 5 → 7 in `package.json`)
  and several dependency security overrides
- Distinctive branded UI: a peeking mascot, marquee ribbon, bracket-style
  mobile nav, and countdown timers
### Weaknesses / Gaps
- No automated tests. Verification was manual and visual.
- Shopify data is baked in at build time, so products go stale until the next
  deploy. An auto-rebuild webhook is documented but not wired up.
- Mailchimp → MailerLite migration still pending
- The README says "Astro 5" but `package.json` is on Astro 7, so the docs
  have drifted a little
### Draft Resume Bullets
- Built and shipped **drawtheblock.org**, a production Astro site for a
  Seattle nonprofit art collective, with Decap CMS so non-technical staff
  manage 50+ vendor profiles, events, and team pages on their own
- Integrated the Shopify Storefront API at build time with a credential-free
  mock fallback, so new developers and preview deploys can run without client
  secrets
- Put a GitHub Actions merge-source gate on production that works alongside
  the CMS's direct-push content workflow
---

## 2. NWD Central Hub — Contractor/Client/Admin Collaboration Platform

**Repo:** `next-wave-dev-org/nwd-central-hub-prototype` · **Live:** nwd-central-hub-prototype.vercel.app
**Role:** Project Manager / Developer on a 4+ person team. About 62 of 243 commits
are yours (Bradley Charles 111, Diego Cano 25, Taylor Papke ~23).
**Timeframe:** Feb 18 → Jul 22, 2026

### What It Is
A unified platform for Next Wave Dev, a nonprofit that places graduates
(contractors) on real client projects. It replaces a manual onboarding and
coordination process with role-based dashboards for **admins, clients, and
contractors**.

### Stack
- **Next.js 16** (App Router), **React 19**, **TypeScript**, **Tailwind CSS v4**
- **Supabase**: Postgres, Auth, Row-Level Security, `@supabase/ssr`
- **Resend** for transactional email (welcome emails)
- **Vercel** hosting
- **GitHub Actions + a GitHub App** for project-board automation
### What You Built
- **Proposal lifecycle**: an admin proposal review page and approval server
  actions. You moved client proposal submission and listing from
  **localStorage to Supabase** inserts and selects scoped to the
  authenticated `client_id`.
- **Shared project workspace page** (`/login/projects/[id]`) linked from all
  three role dashboards, including a GitHub Project link and the schema
  change behind it (`github_project_url`)
- **Active Projects pages** for all roles. This included a fix for a wrong
  table name and status casing on all three.
- **Admin dashboard rebuild** as a navigation hub, a unified NWD header
  pattern (documented in `style.md`), and client proposal word limits
- **Project status sync GitHub Action** (a copy of the org-wide workflow; see
  section 7). You debugged `pull_request_target` event matching and a jq
  literal-`"null"` guard bug here.
- **Documentation overhaul**: `architecture.md`, `onboarding.md`, `mvp.md`,
  `database-schema.md`, `DEVELOPER.md`, `roadmap.md`, `bug-list.md`
- Integration work: resolved multi-PR merge conflicts (#63, #66, #79) and
  removed dead routes after the proposals restructure
### Triumphs
- Replaced client-side localStorage with real authenticated persistence
  behind RLS, the step that turned the prototype into a real multi-user app
- Automated the team's GitHub Project board through a GitHub App
- Wrote the docs that onboard new contributors, which matters on a rotating
  nonprofit team
### Weaknesses / Gaps
- It's a team project, and you weren't the top committer. Be specific about
  what you owned.
- No automated test suite
- MVP was still incomplete when your work tapered off in July: #80 (unify
  headers) was in progress and some MVP blockers hadn't started
- One PR (#50, proposal lifecycle status handling) was merged and then
  reverted (#67). Good material for a "what I learned about PR sequencing"
  story.
### Draft Resume Bullets
- Built the proposal review lifecycle and a shared project workspace in a
  Next.js 16 / Supabase platform connecting nonprofit contractors, clients,
  and admins across role-based dashboards
- Moved proposal data from browser localStorage to authenticated Supabase
  Postgres behind Row-Level Security
- *(Status sync automation is claimed once, in the Practicum section. See
  section 7. Don't repeat it here.)*
---

## 3. Card Cave Games — Shopify Storefront (Trading Card Game Shop)

**Repo:** `next-wave-dev-org/card-cave-games-shopify-storefront`
**Role:** Sole developer. About 200 of 210 commits are yours; the rest are
`shopify[bot]` admin write-backs.
**Timeframe:** Aug 25 → Sep 2026 (about 4 weeks, 9 phases, 24+ PRs)

### Stack
- **Shopify Liquid**, Online Store 2.0 architecture, based on **Dawn**
- Vanilla JS, **Shopify Ajax Cart API**, native discount codes, Search &
  Discovery filtering
- **Shopify CLI**, and a **GitHub two-way theme sync** (pushes to `main`
  deploy, admin edits commit back)
- **GitHub repository rulesets** that give the Shopify App a bypass
### What You Built
- Ported the client-selected "Tropical Dreams" static mockup into a real
  theme: a design-token system (palette, three fonts, radius tokens), a
  button/CTA system, and a global typography bridge onto Dawn
- **Home page**: promo/free-shipping banner, looping promo carousel, tabbed
  product rails, quick category tiles, and a "Fresh From the Vault" grid
- **Collections**: a per-category banner template, sort options, facets, and
  a **Singles vertical sidebar** with card-attribute facet scaffolding for
  Pokémon / One Piece / MTG singles
- **Cart rebuild on the Ajax Cart API**: a merged panel, a $150 free-shipping
  progress bar, toast notifications, live updates, and **native Shopify
  discount-code entry** (replacing the mockup's hardcoded codes)
- **Product detail page**: a real `product.json` template and `main-product`
  section, built for SEO and direct linking
- Footer, contact (native form), FAQ, search results, legal policy pages, and
  logo/favicon wiring
- **Security pass**: fixed an **XSS vulnerability** by escaping cart
  line-item property values, including `/uploads/` file-property link sinks
  (PR #57)
- Product data-model doc for tags and metafields, plus TCG bulk-upload app
  research
### Triumphs
- **Protected two-way sync with branch protection.** Classic branch
  protection silently blocked Shopify's admin write-back to `main`. You moved
  `main` to a **repository ruleset** that keeps the PR-from-staging gate and
  review requirement but gives the Shopify GitHub App an "Always" bypass, and
  documented the migration and rollback in a runbook.
- Found and fixed an XSS sink in a customer-facing cart
- Diagnosed subtle CSS layout bugs in Dawn and documented them for future
  devs, such as the `.grid` column-gap vs. `--grid-*-spacing` balance that
  silently turns a 4-column grid into 3, and the `.page-width` padding
  mismatch
- Worked around a Chrome paint bug with `oklch` `color-mix` by switching to
  static hex
- Delivered in disciplined phases (0–8), each with an issue, a PR, and
  embedded verification screenshots
### Weaknesses / Gaps
- **The USPS Ground Advantage shipping estimator (#22) was not built.** It
  was descoped and closed without implementation.
- **Smile.io rewards (#19 / PR #45)** was closed unmerged; the concept was
  rejected
- No automated tests (typical for Liquid themes). Verification was visual.
- The deep singles facets are *scaffolding* that waits on live product
  metafield data
- Built on Dawn rather than from scratch, so be clear that you customized an
  existing theme
### Draft Resume Bullets
- Built a custom Shopify Online Store 2.0 storefront for a trading card game
  retailer, porting a static design mockup into a Dawn-based Liquid theme
  over 9 delivery phases and 24+ PRs
- Rebuilt the cart on Shopify's Ajax Cart API with a free-shipping progress
  bar, live updates, and native discount-code support, and fixed an XSS
  vulnerability in cart line-item rendering
- Set up a GitHub repository ruleset with a Shopify App bypass so two-way
  theme sync coexists with PR review gates on the production branch
---

## 4. Job-Finder ("The Pipeline") — Job Search Command Center

**Repo:** `JesseCaddell/Job-Finder`
**Role:** Solo · 32 commits · **Timeframe:** Jun 29 → Sep 21, 2026

### What It Is
A personal job-tracking board with automated job-feed aggregation and
AI-powered résumé/job fit scoring. You can share it with a partner, and
boards sync in real time across devices.

### Stack
- **Single-file frontend**: `index.html` (~1,700 lines of vanilla HTML/CSS/JS),
  no build step
- **Netlify Functions**: `fetch-jobs`, `score-fit`, `improve-resume`,
  `get-config`
- **Supabase**: Postgres with RLS, Auth, **Realtime** sync, and a private
  Storage bucket for résumés
- **Anthropic Claude API** (Haiku 4.5) for fit scoring and résumé improvement
  drafts
- **Job source APIs**: Greenhouse, Lever, Ashby, USAJOBS, Adzuna
### What You Built
- **Multi-source job aggregator** across 5 ATS/job-board APIs, with
  editable title/location keyword filters, filtering out 8+ years-experience
  postings, repost detection, and source-failure logging (instead of silent
  failures)
- **AI fit scoring** of each posting against a chosen résumé version, with
  per-résumé-version score tracking, "Score all", low-score archiving, and
  bulk removal
- **Résumé management**: file upload and text extraction, versions stored in
  Supabase Storage with per-user folder RLS policies, and AI-drafted
  improvements
- **Two modes**: local-only (localStorage, passcode) or shared (Supabase
  email/password auth with live cross-device sync)
- Kanban-style status pipeline (new → applied → interview → offer → denied)
  with history, archive/delete of old postings, and title-keyword bulk removal
### Triumphs
- Pulls from 5 heterogeneous job APIs into one normalized schema
- Practical LLM integration: a cheap, fast model (Haiku) for high-volume
  scoring, tied to résumé versions so you can compare which résumé scores best
- Real-time multi-user sync and row-level security on a zero-build-step app
- You use it for your own job search, which makes it a good interview story
### Weaknesses / Gaps
- **A monolithic ~1,700-line `index.html`**. There's no module separation or
  framework, which makes it hard to maintain and test.
- **No tests** (`npm test` is the default placeholder)
- LinkedIn, Indeed, and Handshake have no legal public APIs, so those jobs
  are still added by hand
- Dead ATS board tokens return zero results instead of an error (documented,
  not handled)
### Draft Resume Bullets
- Built a job-search pipeline app that aggregates postings from Greenhouse,
  Lever, Ashby, USAJOBS, and Adzuna through Netlify serverless functions,
  with keyword filtering and repost detection
- Integrated the Claude API to score job fit against versioned résumés and
  draft résumé improvements, with scores tracked per résumé version
- Used Supabase Auth, Row-Level Security, Realtime, and private Storage for
  live multi-device collaboration
---

## 5. Flowarden — GitHub-Native Workflow Automation SaaS (AD490 Capstone)

**Repos:** `JesseCaddell/Flowarden-Hub` (project hub / roadmap),
`ad490-workflow-automator-api` (101 commits), `ad490-workflow-automator-web`
(61 commits), `flowarden-test-environment` (webhook test fixture repo)
**Role:** Solo · **Timeframe:** Jan 6 → Mar 7, 2026 (11-week capstone), plus
a Sep 2026 cleanup and post-MVP roadmap

### Origin
Scoped from the Project Status Sync Bot (section 7), which was already running
in production. Seeing that automation work in real time is what led to
generalizing it into configurable rules and user-defined workflows.

### What It Is
A GitHub App plus a web dashboard that automates repository workflow
operations for technical program managers. GitHub webhook events
(`pull_request.opened`, `issues.opened`, `push`) trigger condition-based
**rules** and user-defined sequential **workflows**, such as auto-labeling,
bot comments, and reviewer requests.

### Stack
- **API**: Node.js 20+, **TypeScript**, **Express 5**, **Octokit**
  (`@octokit/auth-app`), **Zod** validation, native Node test runner, `tsx`
- **Web**: **Next.js 16** (App Router), **React 19**, TypeScript,
  lucide-react, custom "HAZY" design tokens
- **Infra/dev**: GitHub App, ngrok for local webhook delivery, GitHub
  Projects v2 for planning, GitHub Actions (auto-assign)
### What You Built
- **Webhook receiver with HMAC signature verification**, with raw-body
  handling kept deliberately separate from global JSON middleware. It
  acknowledges with 200 immediately and runs the engines asynchronously.
- **Normalization layer** that turns raw GitHub payloads into an internal
  `RuleContext`, so the engines never see raw payloads
- **Deterministic rules engine**: a condition tree evaluator with operators
  and dotted-path value lookup, rule priority/ordering, and structured
  execution logging
- **Workflow Builder API**: repo-scoped CRUD, strict validation with
  event/action allowlists, rejection of contradicting or duplicate actions,
  metadata stamping, and deterministic ordering
- **Pluggable storage adapter** interface (in-memory for now, replaceable)
- **Web app**: repository-scope gating (workflows can't leak across repos),
  a layered API client (Page → Hook → Client → HTTP wrapper), a workflow
  editor with card/pill UI, reusable loading/empty/error states, and a
  dashboard with health and workflow summaries
- **About 40 tests** covering condition evaluation, rule evaluation, the
  full pipeline (integration), route CRUD (integration), workflow validation,
  and execution
- Seven architecture docs (`architecture`, `api-contract`, `rules-engine`,
  `normalization`, `storage`, `workflow-builder-mvp`, `installation-flow`)
  and a UI smoke-test checklist
### Triumphs
- Delivered all 7 planned capstone epics on an 11-week schedule, with an
  explicit in-scope/out-of-scope list, run through GitHub Projects v2 epics,
  issues, and PRs (about 46 issues and PRs on the API repo alone)
- Clean architectural boundaries: raw payloads stop at the edge, engines are
  deterministic and testable, and storage is behind an interface
- Wrote an honest **post-MVP roadmap** that audits the gaps and orders the
  next phases by dependency, which shows product/TPM thinking
### Weaknesses / Gaps (know these cold for interviews)
- **Actions are stubbed.** Labels and comments are logged, not actually
  applied to GitHub, so it is not yet a working SaaS.
- **No installation-scoped auth yet.** There is only app-level JWT; the
  installation token exchange is Phase 1 of the roadmap.
- **In-memory storage only**, so data is lost on restart. No DB or migrations.
- JSON → YAML workflow generation and committing to repos are listed as
  *planned* in the API README, even though the hub README checks off the
  workflow builder epic
- No user auth or RBAC, and a single demo repo scope comes from env vars
- The rules engine and workflow engine run in parallel, and whether to merge
  them is an open question
### Draft Resume Bullets
- Designed and built a GitHub App workflow-automation platform (TypeScript,
  Express 5, Next.js 16) with HMAC-verified webhooks, a payload
  normalization layer, and a deterministic rules engine
- Built a repo-scoped Workflow Builder API with Zod-based strict validation
  and conflict detection, covered by about 40 unit and integration tests
- Ran the 11-week capstone like a product launch: 7 epics on GitHub Projects
  v2, about 90 issues and PRs across the API and web repos, 7 architecture/API contract docs, and a
  dependency-ordered post-MVP roadmap
---

## 6. Chao Companion AI — Real-Time LLM-Driven Streaming Companion

**Repo:** `JesseCaddell/chao_companion_ai` — **private.** You can't link it
on a résumé unless you make it public or record a demo video.
**Role:** Solo · 78 commits · **Timeframe:** Aug 5 → Aug 17, 2026 (12 days)

### What It Is
A headless AI "brain" for an animated companion character rendered in
**VTube Studio**. It listens to the streamer's voice and Twitch chat, replies
with synthesized speech, and expresses itself physically through emotes and
continuous motion. It builds memory of returning viewers across sessions and
is designed to run **alongside a game with zero GPU/VRAM usage**.

### Stack
- **Python 3.11**, asyncio, `uv`, `ruff`, `pytest` / `pytest-asyncio`
- **LLM**: Anthropic Claude (cloud primary) plus **Ollama `qwen3:8b`** local
  fallback, behind an `LLMBackend` protocol with a **circuit breaker**
- **Speech-to-text**: `faster-whisper` on CPU (int8) with **Silero VAD**
- **Text-to-speech**: **Piper** with a **custom-trained voice** and
  pronunciation overrides
- **Rendering**: VTube Studio WebSocket API (expressions plus live parameter
  injection)
- **Twitch**: a raw IRC-over-WebSocket client you wrote yourself
- **Dashboard**: FastAPI + uvicorn backend, **React + TypeScript + Vite**
  frontend in a native **pywebview** window, and a stream subtitle overlay
- **Memory**: SQLite (viewers, episodes, affinity) with retrieval into the
  prompt
### What You Built
- **Event schema and bus arbiter** with priority arbitration. Every stage is
  cancellable, so interrupting the character mid-sentence is supported.
- **Turn orchestrator**: prompt assembly, a streamed LLM response, a tolerant
  **tag protocol parser** (the LLM emits `[affection]` and similar tags),
  a director that maps tags to emotes, then TTS and audio out
- **"Aliveness" systems**: a tag-driven mood model (valence/arousal),
  envelope-driven procedural motion, point-to-point idle drift, an
  anticipation nudge, and a **fly state machine** with screen positioning
- **Twitch chat pipeline**: priority scoring (direct mention > question >
  high-affinity viewer > velocity spike), a speech cooldown, and reconnect
  with backoff
- **Security**: prompt-injection hardening that escapes untrusted chat text
  inside prompt delimiters, a **fail-closed trust boundary**, and hard
  constraints. It also has a **physical kill switch**.
- **Long-term memory (phase 6)**: viewer familiarity and an affinity signal
  clamped to [-1, 1], based only on unconfounded evidence (the chat priority
  tier), not the model's own mood
- **Dashboard control panel**: live event feed, emote firing, mood presets,
  kill/revive, a cloud/local LLM toggle, and free-speech injection
- A versioned **design document** (v0.2) with a hardware budget, latency
  targets (< 1.5 s perceived), and an event-bus design, plus rigging checklists
### Triumphs
- **396 passing tests** over about 5,700 lines of Python, built in 12 days
- **Zero-VRAM architecture**: STT and TTS on CPU and the LLM in the cloud, so
  a game can use the whole GPU while streaming. The design doc explains why
  with a real VRAM budget.
- Resilience engineering: a circuit breaker with a first-token timeout,
  automatic local-model fallback, CPU-contention caps for Ollama, and
  "brain-stall" visibility
- Each hardware integration (VTS, mic, Twitch, TTS) was checked against the
  live system, not just mocked
- Good product judgment on record: you caught a design regression where
  affinity was removed along with the heart-emote gate and restored it with a
  better-grounded signal
### Weaknesses / Gaps
- **Private repo** with no README, so it isn't visible to recruiters yet
- Phase 6 memory is unit-tested but **not yet live-verified**
- The `episodes` table has no pruning policy yet
- Real sentiment/affinity classification is deferred
- Windows-specific and tied to one hardware setup
### Draft Resume Bullets
- Built a real-time AI companion character in Python/asyncio that combines
  speech recognition (faster-whisper + VAD), Claude/Ollama LLMs with
  circuit-breaker fallback, Piper TTS, Twitch chat, and VTube Studio
  animation. It has 396 automated tests.
- Designed a zero-VRAM pipeline (CPU STT/TTS, cloud LLM) that runs alongside
  GPU-heavy games, with a cancellable priority event bus for interruptions
- Hardened the LLM against prompt injection from Twitch chat with escaped
  untrusted input, a fail-closed trust boundary, and a physical kill switch
---

## Other Recent Repos (Last 12 Months)

| Repo | What it is | Worth including? |
|---|---|---|
| `google-forms-to-notion-sync` | A Google Apps Script bridge that routes Google Form submissions to different **Notion databases** based on the selected project, with a field → Notion property mapping. Built as a PM/client-interaction logging tool (Feb 2026). | **Yes, as one line** under "Automation / Tools". It shows workflow automation and API integration (Notion API, Apps Script triggers). |
| `zzz-team-builder` | A one-day Electron + React + Vite + better-sqlite3 scaffold for a game team builder. The README is still the Vite template. | **No.** Mention only if asked about Electron. |
| `flowarden-test-environment` | Webhook test fixture repo for Flowarden | Covered under Flowarden. Not standalone. |

Other `next-wave-dev-org` repos with recent activity (`nwd-marketing-site`,
`nwd-static-website`) were **not scanned**. You only gave permission for the
JesseCaddell account beyond the named primaries. Let me know if you want
them added.
 
---

## Skills Matrix (for a resume "Technical Skills" section)

| Area | Skills | Evidence |
|---|---|---|
| **Languages** | TypeScript, JavaScript, Python, Liquid, SQL, HTML/CSS | All projects |
| **Frontend** | Next.js (App Router), React 19, Astro, Tailwind v4, vanilla JS, responsive design, design-token systems | Flowarden, NWD Hub, DTB, Card Cave, Chao dashboard |
| **Backend** | Node.js, Express 5, FastAPI, serverless (Netlify Functions), REST API design, webhooks | Flowarden, Job-Finder, Chao |
| **Data / BaaS** | Supabase (Postgres, Auth, RLS, Realtime, Storage), SQLite | NWD Hub, Job-Finder, Chao |
| **E-commerce / CMS** | Shopify (Liquid, OS 2.0, Ajax Cart API, Storefront API), Decap CMS | Card Cave, DTB |
| **AI / ML** | Claude API, Ollama/local LLMs, prompt engineering, prompt-injection defense, speech-to-text (Whisper), TTS (Piper), LLM fallback/circuit breakers | Chao, Job-Finder |
| **Integrations** | GitHub Apps and Octokit, Twitch IRC, VTube Studio API, Notion API, Greenhouse/Lever/Ashby/USAJOBS/Adzuna, Resend | Flowarden, Chao, Job-Finder, NWD Hub |
| **DevOps / Process** | GitHub Actions, repo rulesets and branch protection, GitHub Projects v2, Netlify, Vercel, issue/PR templates, phased delivery | All; especially Card Cave, DTB, NWD Hub |
| **Testing** | Node test runner, pytest/pytest-asyncio, integration testing, Zod validation | Flowarden (~40 tests), Chao (396 tests) |
| **Security** | Webhook HMAC verification, XSS remediation, RLS, prompt-injection hardening | Flowarden, Card Cave, NWD Hub/Job-Finder, Chao |

## Common Themes for a Summary Statement
- **Two live client sites** plus a deployed team platform. You ship real
  work for real clients.
- **Strong documentation and process habits**: architecture docs, runbooks,
  roadmaps, and phased issues/PRs in almost every repo
- **Integration-heavy work**: you consistently connect several third-party
  platforms (GitHub, Shopify, Supabase, Twitch, LLM APIs, ATS APIs)
- **Recurring gap to address**: automated testing is strong in Flowarden and
  Chao but missing from the web projects. Adding even a small test suite to
  Job-Finder or DTB would close it.
 
