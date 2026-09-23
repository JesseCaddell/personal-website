---
order: 2
name: "NWD Central Hub"
tag: "Team Platform — Nonprofit"
status: "Deployed Prototype"
description: "Role-based platform connecting contractors, clients, and admins for Next Wave Dev, a nonprofit that places graduates on real client projects."
stack:
  [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Supabase",
    "Tailwind CSS v4",
    "Resend",
  ]
highlights:
  - "Built the proposal review lifecycle and a shared project workspace used across all three role dashboards"
  - "Moved proposal data from browser localStorage to authenticated Supabase Postgres behind Row-Level Security"
  - "Automated the team's GitHub Project board through a GitHub App and Actions workflow"
  - "Wrote the onboarding and architecture docs used to bring new contributors up to speed"
links:
  repo: "https://github.com/next-wave-dev-org/nwd-central-hub-prototype"
  live: "https://nwd-central-hub-prototype.vercel.app"
repos: ["next-wave-dev-org/nwd-central-hub-prototype"]
---

A unified platform that replaces a manual onboarding and coordination process with role-based dashboards for admins, clients, and contractors. Built with a 4+ person team, with a focus on turning a client-side prototype into a real, authenticated multi-user app.
