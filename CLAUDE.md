## Git Workflow

- **Only push to `staging`.** Never push to or merge into `main` unless explicitly instructed.
- `main` is production (Vercel auto-deploys on push). `staging` is merged into `main` when deploying.
- Remote SSH host alias: `git@jesse-github:JesseCaddell/personal-website.git`.

## Commands & Development

- **Dev server:** `npx astro dev --background` (manage with `astro dev stop`, `astro dev status`, `astro dev logs`)
- **Build:** `npm run build` or `npx astro build`
- **Preview build:** `npm run preview`
- **Formatting:** `npm run format` (`prettier --write .`)
- **Chrome must be open** for visual QA (Claude in Chrome extension is used to check
  rendered pages against Figma). At the start of a session, remind Jesse to open
  Chrome if it isn't already running.

## Code Style & Rules

- **Framework:** Astro 5.x with Tailwind CSS v4 (`@tailwindcss/vite`).
- **Formatting:** Run `npm run format` after generating or modifying files.
- **Node Requirement:** Requires Node `>=22.12.0`.

## Interaction & Output Style

- **Be extremely concise:** Give direct answers, code diffs, or commands without meta-commentary, conversational filler, or step-by-step prose unless explicitly asked.
- **Code first:** Output code blocks and edits immediately without preamble ("Here is...", "Sure!").
- **Do not repeat context:** Avoid summarizing requirements back to the user.

## Model Delegation & Architecture Rules

- **Default Execution (Sonnet 5):** Use for single-file edits, Astro component creation, Tailwind v4 styling, Prettier formatting, standard routing, and routine Git actions.
- **Advisor Consultation (Opus 5.5):** Seek advisor consultation *only* when:
    - Planning major multi-file architectural refactors or layout rewrites.
    - Resolving complex or persistent build failures that fail after 2 attempts.
    - Designing state management strategy across global layouts/components.
- **Advisor Rules:** Keep advisor prompts strictly focused on strategy and edge-case identification. Do not ask the advisor to write mundane component markup.

## Documentation & Reference

Consult these guides before working on related features:

- [Routing & Middleware](https://docs.astro.build/en/guides/routing/)
- [Astro Components](https://docs.astro.build/en/basics/astro-components/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling & Tailwind](https://docs.astro.build/en/guides/styling/)
- [Internationalization](https://docs.astro.build/en/guides/internationalization/)