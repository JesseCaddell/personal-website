---
order: 1
name: "Draw The Block"
tag: "Client Site — Nonprofit"
status: "Live"
description: "Production Astro site for a Seattle nonprofit art collective, with a Git-based CMS so staff manage events, vendors, and team pages themselves."
stack: ["Astro", "Decap CMS", "Netlify", "Shopify Storefront API", "Mailchimp"]
highlights:
  - "10+ pages including nested dynamic event/sub-event routes and a reusable component library"
  - "~12 CMS collections letting non-technical staff manage 50+ vendors, 14 team members, and 13+ events"
  - "Shopify Storefront API integration with a credential-free mock fallback for local dev and preview deploys"
  - "A GitHub Actions merge gate on production that coexists with the CMS's direct-push content workflow"
links:
  repo: "https://github.com/next-wave-dev-org/draw-the-block-static-site"
  live: "https://drawtheblock.org"
repos: ["next-wave-dev-org/draw-the-block-static-site"]
---

The full site architecture for a Seattle art collective's public presence: an Astro build with content collections and Zod-validated schemas, driven entirely by a Decap CMS admin the client uses on their own. Products pull from Shopify at build time, and a Netlify Function handles newsletter signups.
