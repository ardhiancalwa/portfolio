import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    category: "Core Frontend",
    items: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }, { name: "TypeScript" }],
  },
  {
    category: "Framework",
    items: [{ name: "Astro" }, { name: "React" }, { name: "Next.js" }, { name: "Vue" }],
  },
  {
    category: "Styling",
    items: [{ name: "Tailwind CSS" }, { name: "CSS Modules" }, { name: "Sass" }],
  },
  {
    category: "Animation",
    items: [{ name: "GSAP" }, { name: "CSS Animation" }],
  },
  {
    category: "Tooling",
    items: [
      { name: "Git" },
      { name: "pnpm" },
      { name: "Vite" },
      { name: "ESLint" },
      { name: "Prettier" },
    ],
  },
  {
    category: "Design Collaboration",
    items: [{ name: "Figma" }],
  },
  {
    category: "Deployment",
    items: [{ name: "Vercel" }],
  },
];
