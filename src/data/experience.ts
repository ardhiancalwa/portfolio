import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    role: "Backend Developer",
    company: "HUMIC Engineering Research Center",
    type: "Internship",
    period: "Sep 2025 - Nov 2025",
    location: "Bandung, Indonesia",
    summary:
      "Built an AI-powered backend system for breast cancer classification, focusing on secure API design, AI model integration, database reliability, and clear technical documentation.",
    highlights: [
      "Integrated a Python AI model with a backend inference pipeline for real-time prediction.",
      "Designed PostgreSQL schema, validation rules, authentication, and access control using RLS and JWT.",
      "Created OpenAPI/Swagger documentation to improve API testing and team onboarding.",
    ],
    techStack: ["NestJS", "Supabase", "PostgreSQL", "Python", "JWT", "OpenAPI"],
  },
  {
    role: "Backend Mentor",
    company: "EISD Laboratory",
    type: "Part-time",
    period: "Mar 2025 - Oct 2025",
    location: "Telkom University",
    summary:
      "Mentored students in backend development fundamentals, covering REST APIs, databases, authentication, Git workflow, testing practices, and deployment preparation.",
    highlights: [
      "Designed backend learning materials and hands-on assignments for 20+ students.",
      "Conducted code reviews and guided final project development across multiple repositories.",
      "Introduced Git workflow and review checklists to improve collaboration and code quality.",
    ],
    techStack: ["JavaScript", "Node.js", "Express.js", "REST API", "Git", "Postman"],
  },
  {
    role: "Laboratory Research Assistant Coordinator",
    company: "Motion Laboratory",
    type: "Leadership",
    period: "Sep 2025 - Present",
    location: "Telkom University",
    summary:
      "Coordinated laboratory operations and research assistant workflows, supporting project monitoring, resource allocation, and cross-functional collaboration.",
    highlights: [
      "Managed operational workflows for laboratory assistants and research members.",
      "Monitored research initiatives using an Agile-based workflow.",
      "Helped maintain project progress, communication, and delivery consistency.",
    ],
    techStack: ["Agile", "Project Management", "Team Coordination", "Research Workflow"],
  },
  {
    role: "Laboratory Research Assistant",
    company: "Motion Laboratory",
    type: "Part-time",
    period: "Sep 2024 - Jul 2025",
    location: "Telkom University",
    summary:
      "Contributed to mobile application development, technical documentation, and usability testing activities within laboratory research projects.",
    highlights: [
      "Developed and maintained a Flutter mobile application from concept to MVP.",
      "Improved UI performance through component refactoring and interface fixes.",
      "Created technical documentation and setup guides to support assistant onboarding.",
    ],
    techStack: ["Flutter", "Dart", "Documentation", "UX Testing", "Research"],
  },
];
