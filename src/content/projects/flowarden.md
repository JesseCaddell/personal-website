---
order: 5
name: "Flowarden"
tag: "SaaS — Capstone"
status: "MVP Complete"
description: "A GitHub App and dashboard that automates repository workflows through condition-based rules and user-defined workflow sequences."
stack:
  [
    "Node.js",
    "TypeScript",
    "Express 5",
    "Octokit",
    "Zod",
    "Next.js 16",
    "React 19",
  ]
highlights:
  - "Webhook receiver with HMAC signature verification, acknowledging immediately and running engines asynchronously"
  - "Deterministic rules engine plus a repo-scoped Workflow Builder API with strict validation and conflict detection"
  - "~40 unit and integration tests covering condition evaluation, rules, and workflow execution"
  - "Delivered all 7 planned epics across an 11-week capstone with issue/PR discipline on GitHub Projects v2"
links:
  repo: "https://github.com/JesseCaddell/Flowarden-Hub"
repos:
  - "JesseCaddell/ad490-workflow-automator-api"
  - "JesseCaddell/ad490-workflow-automator-web"
image:
  src: "./images/flowarden/dashboard.png"
  alt: "Flowarden dashboard"
gallery:
  - src: "./images/flowarden/workflow.png"
    alt: "Flowarden workflow view"
  - src: "./images/flowarden/create-workflow.png"
    alt: "Flowarden create workflow screen"
---

A GitHub App plus web dashboard that turns repository events into automated workflows: webhook events trigger condition-based rules and sequential, user-defined actions like labeling, comments, and reviewer requests. Scoped out of a production automation bot already running org-wide.
