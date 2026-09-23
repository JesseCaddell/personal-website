---
order: 7
name: "Project Status Sync Bot"
tag: "Workflow Automation"
status: "In Production"
description: "A GitHub App and Actions workflow that keeps GitHub Projects v2 boards in sync with issue and PR status automatically, org-wide."
stack:
  ["GitHub App", "GitHub Actions", "Projects v2 GraphQL API", "gh CLI", "jq"]
highlights:
  - "Runs in production across every active Next Wave Dev and Seattle Colleges repo"
  - "Automates project board status updates that were previously done by hand"
  - "The pattern it established was later generalized into Flowarden's configurable rules engine"
links: {}
repos: []
---

An org-wide bot and Actions workflow that keeps GitHub Projects v2 status fields synced to real issue and PR state, removing a manual chore across every active team repo. Its success in production is what led directly to generalizing the idea into Flowarden.
