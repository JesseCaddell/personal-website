---
order: 4
name: "Job-Finder"
tag: "Personal Tool"
status: "In Active Use"
description: "A job-search command center that aggregates postings from 5 job boards and scores fit against versioned résumés using the Claude API."
stack: ["Vanilla JS", "Netlify Functions", "Supabase", "Claude API"]
highlights:
  - "Aggregates postings from Greenhouse, Lever, Ashby, USAJOBS, and Adzuna into one normalized schema"
  - "AI fit-scoring tied to résumé versions, with bulk scoring and low-score archiving"
  - "Real-time multi-user sync and Row-Level Security on a zero-build-step app"
  - "Kanban-style pipeline tracking postings from first contact through offer or denial"
links:
  repo: "https://github.com/JesseCaddell/Job-Finder"
repos: ["JesseCaddell/Job-Finder"]
---

A single-page job tracker built to run my own job search: multi-source aggregation, AI-assisted fit scoring against different résumé versions, and shareable boards that sync in real time across devices.
