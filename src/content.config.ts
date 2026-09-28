import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
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
      image: z
        .object({
          src: image(),
          alt: z.string(),
          position: z.enum(["top", "center", "bottom"]).optional(),
          frame: z.boolean().optional(),
        })
        .optional(),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            position: z.enum(["top", "center", "bottom"]).optional(),
          }),
        )
        .optional(),
      video: z
        .object({
          src: z.string(),
          poster: image().optional(),
        })
        .optional(),
      credits: z
        .array(
          z.object({
            label: z.string(),
            href: z.string(),
          }),
        )
        .optional(),
    }),
});

export const collections = { projects };
