import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    role: z.string(),
    year: z.number(),
    featured: z.boolean(),
    liveUrl: z.string().url().nullable(),
    repoUrl: z.string().url().nullable(),
    statusLabel: z.string().optional(),
    statusIcon: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
  }),
});

export const collections = {
  blog,
  projects,
};
