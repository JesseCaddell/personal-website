# Adding a new project

1. Copy the frontmatter block below into a new file at
   `src/content/projects/<slug>.md` (slug = URL path, e.g. `my-cool-app`
   → `/projects/my-cool-app`).
2. Fill in every field (delete the `#` comments — YAML comments are fine to
   leave in, but strip them once you're done for a cleaner diff).
3. Drop images in `src/content/projects/images/<slug>/` and point `image`/
   `gallery` at them with relative paths (`./images/<slug>/whatever.png`).
4. `order` controls the _fallback_ position before the homepage's live
   GitHub-recency rotation kicks in — just give it the next unused integer
   (check the other files in `src/content/projects/` for the highest one in
   use; they don't need to be contiguous).
5. `repos` drives the recency rotation — GitHub `owner/repo` slugs. Private
   repos are supported for display but currently can't be live-tracked for
   recency (client-side fetch to the public GitHub API 404s on them), so
   they'll just sit at their static `order` position. List public repos here
   when you have them; leave the array empty (`[]`) if there's no linkable
   repo at all.
6. Run `npm run format`, then check `/` and `/projects/<slug>` in the
   browser.

Schema lives in `src/content.config.ts` — check there if a field below looks
out of date.

---

```yaml
---
order: 8 # next unused integer, see step 4 above
name: "Project Name"
tag: "Short Category Tag" # e.g. "CLI Tool", "Shopify Storefront"
status: "Live" # e.g. "Live", "MVP Complete", "In Progress"
description: "One-sentence summary shown on the card."
stack: ["Lang/Framework", "Another Tool"]
highlights:
  - "First highlight bullet, shown on the detail page"
  - "Second highlight bullet"
links:
  repo: "https://github.com/owner/repo" # omit line if no public repo
  live: "https://example.com" # omit line if nothing deployed
repos: ["owner/repo"] # [] if nothing linkable; see step 5 for private repos
image:
  src: "./images/<slug>/home.png"
  alt: "Descriptive alt text for the card/detail hero image"
gallery: # optional, delete whole block if none
  - src: "./images/<slug>/extra.png"
    alt: "Descriptive alt text"
---
One or two paragraphs of body copy for the detail page.
```
