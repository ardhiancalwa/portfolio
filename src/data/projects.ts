import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Content API",
    description: "Backend service for managing portfolio content and project metadata.",
    overview:
      "A lightweight API and content pipeline that serves profile, project, and experience data to a static Astro frontend.",
    objective:
      "Ship a maintainable backend foundation so portfolio updates can happen from structured data instead of manual page edits.",
    problem:
      "Content updates were coupled to UI components, increasing the risk of inconsistent data and slower iteration.",
    process: [
      "Defined a strict TypeScript schema for project and profile payloads.",
      "Separated content modules from presentation components.",
      "Created predictable route-level data flow for listing and detail pages.",
    ],
    solution:
      "Implemented a typed content API layer using reusable data modules, deterministic sorting, and normalized project detail fields.",
    keyFeatures: [
      "Typed project schema with consistent section-based detail fields.",
      "Centralized project data source reused by cards and detail pages.",
      "Stable slug-based routing for project detail URLs.",
    ],
    lessonsLearned: [
      "Structured content contracts reduce UI regressions during refactors.",
      "Clear separation between data and view logic speeds up feature iteration.",
    ],
    year: 2026,
    featured: true,
    status: "completed",
    statusBadge: {
      label: "Live Project",
      iconSrc: "/icons/project-status/live.svg",
    },
    role: "Backend Engineer",
    techStack: ["TypeScript", "Astro", "Node.js", "Zod"],
    toolsUsed: ["ESLint", "Prettier", "GitHub Actions"],
    demoUrl: null,
    sourceCodeUrl: null,
    caseStudyUrl: "/projects/portfolio-website",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXJsfGVufDB8fDB8fHww",
    imageAlt: "Preview of the portfolio website landing page.",
  },
  {
    slug: "ecommerce-dashboard",
    title: "E-commerce Order Service",
    description: "Order lifecycle service for checkout, payment sync, and fulfillment status.",
    overview:
      "A backend-first project focused on reliable order processing between storefront, payment gateway, and internal operations tools.",
    objective:
      "Reduce failed order transitions and make order state observable in near real-time for operations teams.",
    problem:
      "Order updates were distributed across multiple systems, causing duplicate processing and delayed reconciliation.",
    process: [
      "Mapped the full order state machine and transition rules.",
      "Introduced idempotency checks for payment and webhook handlers.",
      "Added structured logging and retry-safe background workers.",
    ],
    solution:
      "Built an order orchestration layer with explicit state transitions, event-driven updates, and operational visibility for failures.",
    keyFeatures: [
      "State-machine based order status transitions.",
      "Idempotent webhook ingestion and retry handling.",
      "Operational metrics and structured logs for incident debugging.",
    ],
    lessonsLearned: [
      "Idempotency must be designed early for payment-related workflows.",
      "Observability is as critical as business logic in distributed flows.",
    ],
    year: 2025,
    featured: true,
    status: "in-progress",
    statusBadge: {
      label: "Internal Project",
      iconSrc: "/icons/project-status/internal.svg",
    },
    role: "Backend Engineer",
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    toolsUsed: ["OpenAPI", "Postman", "Grafana"],
    demoUrl: null,
    sourceCodeUrl: null,
    caseStudyUrl: "/projects/ecommerce-dashboard",
    image: "/images/projects/ecommerce-dashboard-cover.jpg",
    imageAlt: "Preview of an e-commerce operations dashboard.",
  },
  {
    slug: "task-management-app",
    title: "Task Workflow Engine",
    description: "Backend workflow engine for task assignment, SLA tracking, and audit logs.",
    overview:
      "A service that handles task lifecycle automation, assignment rules, and traceable history for team operations.",
    objective:
      "Create a reliable backend engine that enforces workflow rules while remaining easy to extend for new task types.",
    problem:
      "Manual tracking made SLA breaches hard to detect and task history difficult to audit across teams.",
    process: [
      "Defined domain entities for tasks, assignees, and workflow rules.",
      "Implemented rule evaluation for priority and deadline transitions.",
      "Added immutable activity logs for every status mutation.",
    ],
    solution:
      "Delivered a rule-driven workflow core with deterministic transitions, deadline guards, and append-only audit events.",
    keyFeatures: [
      "Configurable workflow rules per task type.",
      "Automated SLA alerts and overdue detection.",
      "Immutable audit trail for compliance and debugging.",
    ],
    lessonsLearned: [
      "Rule engines need clear boundaries to avoid hidden complexity.",
      "Auditability improves both debugging speed and stakeholder trust.",
    ],
    year: 2024,
    featured: false,
    status: "planned",
    statusBadge: {
      label: "Academic Project",
      iconSrc: "/icons/project-status/academic.svg",
    },
    role: "Backend Engineer",
    techStack: ["Go", "PostgreSQL", "RabbitMQ", "Docker", "Prometheus"],
    toolsUsed: ["Swagger", "k6", "GitHub Actions"],
    demoUrl: null,
    sourceCodeUrl: null,
    caseStudyUrl: "/projects/task-management-app",
    image:
      "https://images.unsplash.com/photo-1772289093080-831ca03c76e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    imageAlt: "Preview concept for a task management board interface.",
  },
];
