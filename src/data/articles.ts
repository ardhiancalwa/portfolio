import type { Article } from "@/types";

export const articles: Article[] = [
  {
    title: "Designing Data-Driven Portfolio Content in Astro",
    description:
      "How I structure profile and project content into typed data modules to keep portfolio updates fast and consistent.",
    category: "Engineering",
    publishedAt: "2026-04-16",
    slug: "designing-data-driven-portfolio-content-in-astro",
    url: "/articles#designing-data-driven-portfolio-content-in-astro",
    featured: true,
  },
  {
    title: "Project Storytelling That Goes Beyond Tech Stack",
    description:
      "A practical template for presenting problem, goal, process, and learnings so project pages feel like real case studies.",
    category: "Product",
    publishedAt: "2026-03-28",
    slug: "project-storytelling-beyond-tech-stack",
    url: "/articles#project-storytelling-beyond-tech-stack",
    featured: true,
  },
  {
    title: "Making Frontend Work Easier to Maintain",
    description:
      "Small architecture decisions in component and data design that help long-term maintainability in frontend projects.",
    category: "Frontend",
    publishedAt: "2026-02-10",
    slug: "making-frontend-work-easier-to-maintain",
    url: "/articles#making-frontend-work-easier-to-maintain",
  },
  {
    title: "A Lightweight Review Checklist for Portfolio Projects",
    description:
      "A short checklist to evaluate portfolio quality before sharing it with recruiters or collaborators.",
    category: "Workflow",
    publishedAt: "2026-01-22",
    slug: "lightweight-review-checklist-for-portfolio-projects",
    url: "/articles#lightweight-review-checklist-for-portfolio-projects",
  },
];
