import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    role: "Backend Developer",
    company: "HUMIC Engineering Research Center",
    type: "Internship",
    period: "Sep 2025 - Nov 2025",
    location: "Bandung, Indonesia",
    summary:
      "Architected an AI-powered inference backend for breast cancer classification, focusing on secure API design, real-time model integration, database reliability, and standardized API documentation.",
    highlights: [
      "Built a Supabase-based backend and integrated a Python AI model for real-time breast cancer classification.",
      "Optimized PostgreSQL schema, validation flow, and inference pipeline, achieving prediction latency of ≤150ms and improving throughput by 20%.",
      "Implemented RLS, JWT authentication, and strict schema validation, achieving zero reported vulnerabilities and reducing injection attack surface by 95%.",
      "Created OpenAPI/Swagger documentation and standardized CI/CD practices, improving API testing reliability and accelerating team onboarding by 40%.",
    ],
    techStack: ["NestJS", "Supabase", "PostgreSQL", "Python", "JWT", "OpenAPI", "CI/CD"],
  },
  {
    role: "Backend Mentor",
    company: "EISD Laboratory",
    type: "Part-time",
    period: "Mar 2025 - Oct 2025",
    location: "Telkom University",
    summary:
      "Mentored students in backend engineering fundamentals, covering REST API development, database design, authentication, CI/CD basics, Git workflow, debugging, and project-based backend implementation.",
    highlights: [
      "Designed and delivered a 10-session backend curriculum for 20+ students, covering REST APIs, databases, authentication, and CI/CD fundamentals.",
      "Created hands-on assignments and example repositories, achieving 95% module completion and reducing student preparation time by 30%.",
      "Conducted code reviews and supervised final projects across 3 repositories, resolving 10 priority issues and reducing average debugging time from 3 hours to 2.5 hours.",
      "Established Git workflow and review checklists, reducing merge conflicts by 60% and shortening PR review lead time from 7 days to 3 days.",
    ],
    techStack: ["JavaScript", "Node.js", "Express.js", "REST API", "Git", "Postman", "CI/CD"],
  },
  {
    role: "Laboratory Research Assistant Coordinator",
    company: "Motion Laboratory",
    type: "Leadership",
    period: "Sep 2025 - Present",
    location: "Telkom University",
    summary:
      "Led laboratory assistant operations and research coordination, managing personnel workflows, resource allocation, Agile-based project monitoring, and cross-functional collaboration across research initiatives.",
    highlights: [
      "Directed operational workflows for 40 personnel, including 21 laboratory assistants and research members.",
      "Coordinated resource allocation and team responsibilities to maintain 95% adherence to project milestones with no significant delays.",
      "Orchestrated Agile-based monitoring across multiple research initiatives to support timely delivery and consistent output quality.",
      "Improved communication flow between laboratory assistants, research members, and project stakeholders.",
    ],
    techStack: [
      "Agile",
      "Project Management",
      "Team Coordination",
      "Resource Allocation",
      "Research Workflow",
    ],
  },
  {
    role: "Laboratory Research Assistant",
    company: "Motion Laboratory",
    type: "Part-time",
    period: "Sep 2024 - Jul 2025",
    location: "Telkom University",
    summary:
      "Contributed to mobile application development, technical documentation, usability testing, and research project execution within Motion Laboratory.",
    highlights: [
      "Developed and maintained a Flutter mobile application from concept to MVP.",
      "Performed component refactoring and UI improvements, reducing page load time by 35% from 3.7s to 2.4s and improving Lighthouse score by +10.",
      "Authored technical documentation and setup guides, reducing onboarding time for new assistants by 40% and minimizing duplicated work.",
      "Designed experiment plans and evaluation instruments for usability testing, successfully conducting a pilot study with 2 participants.",
    ],
    techStack: ["Flutter", "Dart", "Documentation", "UX Testing", "Research", "Usability Testing"],
  },
];
