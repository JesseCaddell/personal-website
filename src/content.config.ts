import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    tag: z.string(),
    status: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    highlights: z.array(z.string()),
    links: z.object({
      repo: z.string().optional(),
      live: z.string().optional(),
    }),
    repos: z.array(z.string()),
  }),
});

export const collections = { projects };
