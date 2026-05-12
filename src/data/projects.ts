import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "lumira-ai",
    title: "Lumira AI",
    description: "AI-powered medical diagnosis backend for real-time breast cancer classification.",
    overview:
      "A secure AI inference backend built with NestJS, Supabase, PostgreSQL, and Python AI pipeline to support real-time breast cancer classification, doctor-patient communication, and reliable API testing.",
    objective:
      "Build a secure, reliable, and well-documented backend foundation that enables medical teams to run breast cancer classification through AI integration while maintaining strict validation, authentication, and fast development workflows.",
    problem:
      "The project required deep medical research on breast cancer before development could begin. The team had to study 40+ research papers, align on the medical context, and still deliver the system within a tight 2-month timeline.",
    imageProblem:
      "https://res.cloudinary.com/dqj2k0khn/image/upload/v1778495205/WhatsApp_Image_2026-05-11_at_5.25.36_PM_1_u8ug3u.jpg?w=1400&auto=format&fit=crop&q=60",
    process: [
      "Conducted intensive team research on breast cancer by reviewing 40+ papers to ensure every member understood the medical and technical context.",
      "Designed the backend architecture using NestJS, Supabase, PostgreSQL, JWT authentication, and Row Level Security for secure data access.",
      "Integrated the Python AI pipeline and MedGemma AI model into backend endpoints for real-time breast cancer classification.",
      "Created OpenAPI/Swagger documentation to support reliable API testing, collaboration, and faster onboarding.",
      "Built Firebase-based chat endpoints to enable communication between doctors and patients.",
      "Standardized CI/CD practices and team workflows to accelerate onboarding and reduce development friction.",
    ],
    imageProcess:
      "https://res.cloudinary.com/dqj2k0khn/image/upload/v1778495205/WhatsApp_Image_2026-05-11_at_5.25.36_PM_tnnzzs.jpg?w=1400&auto=format&fit=crop&q=60",
    solution:
      "Implemented a secure AI-powered backend with NestJS, Supabase, optimized PostgreSQL schema, Python AI model integration, MedGemma support, Firebase doctor-patient chat, Swagger documentation, strict schema validation, JWT authentication, and RLS-based access control.",
    keyFeatures: [
      "Real-time breast cancer classification through integrated Python AI pipeline and MedGemma model.",
      "Secure backend architecture using NestJS, Supabase, PostgreSQL, JWT authentication, and Row Level Security.",
      "Doctor-patient chat endpoints powered by Firebase for real-time communication.",
      "OpenAPI/Swagger documentation for reliable API testing and easier team collaboration.",
      "Strict schema validation that reduced injection attack surface by 95%.",
      "Standardized CI/CD workflow that accelerated team onboarding by 40%.",
    ],
    lessonsLearned: [
      "AI healthcare projects require strong domain research before technical implementation can be done responsibly.",
      "Shared understanding across the team is critical when working with medical data, AI inference, and tight deadlines.",
      "Strict validation, RLS, and JWT security significantly improve backend reliability for sensitive medical systems.",
      "Clear documentation and CI/CD standards help teams move faster without sacrificing code quality.",
    ],
    year: 2025,
    featured: true,
    status: "completed",
    statusBadge: {
      label: "Research Project",
      iconSrc: "/icons/project-status/research.svg",
    },
    role: "Backend Developer",
    techStack: [
      "TypeScript",
      "NestJS",
      "Python",
      "PostgreSQL",
      "Supabase",
      "Firebase",
      "JWT",
      "MedGemma",
    ],
    toolsUsed: ["Swagger", "OpenAPI", "GitHub Actions", "Postman", "Git", "CI/CD"],
    demoUrl: "https://lumira-breastcancer.vercel.app",
    sourceCodeUrl: "https://github.com/lumira-humic/Lumira-AI_BE",
    caseStudyUrl: "/projects/lumira-ai",
    image:
      "https://res.cloudinary.com/dqj2k0khn/image/upload/v1778495363/Screenshot_2026-05-11_172821_odt029.png?w=1400&auto=format&fit=crop&q=60",
    imageAlt: "Preview of Lumira AI breast cancer diagnosis backend system.",
    imagePosition: "center",
  },
  {
    slug: "paja-barbershop",
    title: "Paja Barbershop",
    description:
      "Real-world barbershop reservation system with conflict-free booking and production deployment.",
    overview:
      "A real client project built as my first production system, focused on helping Paja Barbershop manage customer reservations through a reliable backend, conflict-free scheduling logic, and stable deployment on DomaiNesia cPanel.",
    objective:
      "Build a practical reservation system that allows customers to book barbershop services while helping the business prevent double bookings, manage schedules more easily, and operate through a stable production-ready platform.",
    problem:
      "As my first real project, I initially focused too much on applying best practices to every feature instead of prioritizing the client’s actual needs and business expectations. This made the project scope grow larger than necessary and caused the development timeline to extend beyond 6 months.",
    imageProblem:
      "https://res.cloudinary.com/dqj2k0khn/image/upload/v1778496561/WhatsApp_Image_2026-05-11_at_5.44.10_PM_iutmfh.jpg?w=1400&auto=format&fit=crop&q=60",
    process: [
      "Gathered client requirements and translated the barbershop reservation flow into backend features.",
      "Built the backend service using JavaScript, Express.js, and MySQL to manage services, schedules, and reservation data.",
      "Engineered a reservation scheduling algorithm to prevent overlapping bookings and maintain a conflict-free customer experience.",
      "Structured the codebase using a feature-based approach to improve maintainability during long-term development.",
      "Documented REST API endpoints with Postman collections to make testing and future updates easier.",
      "Deployed the production system using DomaiNesia cPanel and Linux-based hosting configuration.",
    ],
    imageProcess:
      "https://res.cloudinary.com/dqj2k0khn/image/upload/v1778496475/Screenshot_2026-04-10_184436_le8vst.png?w=1400&auto=format&fit=crop&q=60",
    solution:
      "Refocused the development process on the client’s core business needs by prioritizing the main reservation flow, conflict-free scheduling, API reliability, and production deployment instead of overengineering every feature from the beginning.",
    keyFeatures: [
      "Conflict-free reservation scheduling algorithm to prevent double-booking incidents.",
      "Express.js backend API for managing reservation data, schedules, and service flows.",
      "MySQL database design for storing customer bookings and operational data.",
      "Feature-based backend codebase for better maintainability.",
      "Postman API documentation to support testing and future development.",
      "Production deployment on DomaiNesia cPanel with stable Linux hosting configuration.",
    ],
    lessonsLearned: [
      "Real client projects require balancing engineering best practices with actual business needs.",
      "Prioritizing core features first helps prevent scope creep and keeps development aligned with client expectations.",
      "Overengineering too early can slow down delivery, especially in a first production project.",
      "Clear communication with clients is as important as technical implementation.",
    ],
    year: 2024,
    featured: true,
    status: "completed",
    statusBadge: {
      label: "Real Project",
      iconSrc: "/icons/project-status/live.svg",
    },
    role: "Backend Engineer",
    techStack: ["JavaScript", "Node.js", "Express.js", "MySQL"],
    toolsUsed: ["Postman", "Git", "cPanel", "DomaiNesia", "Linux"],
    demoUrl: "https://pajabarbershop.com",
    sourceCodeUrl: "https://github.com/ardhiancalwa/Backend-Paja",
    caseStudyUrl: "/projects/paja-barbershop",
    image:
      "https://res.cloudinary.com/dqj2k0khn/image/upload/v1778496476/Screenshot_2026-04-10_184217_fkovlx.png?w=1400&auto=format&fit=crop&q=60",
    imageAlt: "Preview of Paja Barbershop reservation system.",
    imagePosition: "right center",
  },
  {
    slug: "jualin",
    title: "Jualin",
    description:
      "Academic student marketplace platform with payment gateway and real-time chat integration.",
    overview:
      "An academic full-stack marketplace project built to support student buying and selling activities through a Laravel backend, Next.js frontend, Midtrans payment gateway, and Firebase real-time chat.",
    objective:
      "Build a functional student marketplace platform that enables users to browse products, manage transactions, communicate in real time, and complete payments through an integrated full-stack system.",
    problem:
      "As both Project Manager and Fullstack Developer, I had to balance technical implementation with team coordination. Several team members needed support when they were confused about their tasks or when they encountered errors, so the project required consistent monitoring, communication, and daily progress tracking.",
    imageProblem:
      "https://res.cloudinary.com/dqj2k0khn/image/upload/v1778520414/WhatsApp_Image_2026-05-12_at_12.26.24_AM_kt3bgs.jpg?w=1400&auto=format&fit=crop&q=60",
    process: [
      "Led the team as Project Manager while also contributing as a Fullstack Developer across backend and frontend tasks.",
      "Defined team roles, divided jobdesks, and maintained daily reports to track progress, blockers, and completed work.",
      "Built the backend using Laravel and PostgreSQL to manage users, products, transactions, and marketplace data.",
      "Developed the frontend using Next.js to provide a responsive marketplace interface for students.",
      "Integrated Midtrans payment gateway to support secure and reliable transaction flow.",
      "Implemented Firebase real-time chat to enable communication between buyers and sellers.",
      "Supported teammates during debugging, error solving, and feature implementation to keep the project moving consistently.",
    ],
    imageProcess:
      "https://res.cloudinary.com/dqj2k0khn/image/upload/v1778520416/WhatsApp_Image_2026-05-12_at_12.26.25_AM_v0rate.jpg?w=1400&auto=format&fit=crop&q=60",
    solution:
      "Used daily reporting and structured task tracking to ensure every role and jobdesk was handled clearly. This helped the team understand their responsibilities, identify blockers earlier, solve errors collaboratively, and deliver a strong final result that achieved the best grade in class.",
    keyFeatures: [
      "Student marketplace platform for browsing, selling, and purchasing products.",
      "Laravel backend with PostgreSQL database for managing users, products, and transactions.",
      "Next.js frontend for a responsive and modern marketplace interface.",
      "Midtrans payment gateway integration for secure transaction processing.",
      "Firebase real-time chat feature for buyer-seller communication.",
      "Daily report workflow for task tracking, team coordination, and blocker monitoring.",
    ],
    lessonsLearned: [
      "Leading a team while contributing technically requires clear communication and strong task prioritization.",
      "Daily reports help make progress, blockers, and responsibilities visible to the whole team.",
      "Supporting teammates during debugging improves both team performance and shared technical understanding.",
      "A structured workflow can turn an academic project into a production-like development experience.",
    ],
    year: 2025,
    featured: true,
    status: "completed",
    statusBadge: {
      label: "Academic Project",
      iconSrc: "/icons/project-status/academic.svg",
    },
    role: "Fullstack Developer & Project Manager",
    techStack: ["PHP", "Laravel", "PostgreSQL", "Next.js", "Firebase", "Midtrans"],
    toolsUsed: [
      "Postman",
      "Git",
      "GitHub",
      "Firebase Console",
      "Midtrans Dashboard",
      "Daily Report",
    ],
    demoUrl: null,
    sourceCodeUrl: "https://github.com/Jualin-App",
    caseStudyUrl: "/projects/jualin",
    image:
      "https://res.cloudinary.com/dqj2k0khn/image/upload/v1778520236/Screenshot_2026-04-10_185602_rzplhk.png?w=1400&auto=format&fit=crop&q=60",
    imageAlt: "Preview of Jualin student marketplace platform.",
  },
  {
    slug: "arsipel",
    title: "ARSIPEL",
    description: "Inventory management system for military asset and item tracking.",
    overview:
      "A Laravel-based inventory management system built to help military personnel manage stored items, track item additions and reductions, and receive automated notifications through scheduled cronjob execution.",
    objective:
      "Build a reliable inventory platform that allows military users to manage item records, monitor stock movement, and maintain data integrity through secure backend logic, validation, and automated notifications.",
    problem:
      "The main challenge was handling cronjob implementation for the first time. The system needed an automated notification feature that could detect when items were newly added or reduced, so we had to understand how to schedule background tasks properly and safely in a production environment.",
    imageProblem:
      "https://res.cloudinary.com/dqj2k0khn/image/upload/v1778520872/Screenshot_2026-04-10_191832_qm9om6.png?w=1400&auto=format&fit=crop&q=60",
    process: [
      "Analyzed the inventory workflow for military item storage, including item registration, stock updates, and movement tracking.",
      "Built the system fully using Laravel with MySQL as the main database.",
      "Designed modular backend features for authentication, users, inventory data, and notification-related flows.",
      "Implemented robust form validation and standardized error handling to keep API responses consistent.",
      "Researched cronjob best practices together with the team to understand safe and reliable scheduled task execution.",
      "Implemented scheduled notification logic to detect and notify when inventory items were added or reduced.",
      "Deployed the application to a Hostinger VPS and configured the production environment for stable operation.",
    ],
    imageProcess:
      "https://res.cloudinary.com/dqj2k0khn/image/upload/v1778520795/WhatsApp_Image_2026-05-11_at_5.44.09_PM_opbj48.jpg?w=1400&auto=format&fit=crop&q=60",
    solution:
      "Implemented a Laravel-based inventory system with MySQL, secure access control, structured API validation, scheduled cronjob-based notifications, and production deployment on Hostinger VPS. The team solved the cronjob challenge through shared research and by applying best practices for scheduled background tasks.",
    keyFeatures: [
      "Inventory management for military item storage and stock tracking.",
      "Laravel-based backend and frontend implementation with MySQL database.",
      "Automated notification feature for newly added or reduced inventory items.",
      "Cronjob implementation for scheduled background task execution.",
      "Robust form validation and standardized error handling across inventory flows.",
      "Secure access control with authentication and role-based authorization.",
      "Production deployment on Hostinger VPS.",
    ],
    lessonsLearned: [
      "Cronjobs are useful for automating recurring backend tasks, but they require careful scheduling and production configuration.",
      "Researching implementation best practices together helps the team solve unfamiliar technical challenges faster.",
      "Inventory systems need strong validation and data integrity because small stock errors can affect operational trust.",
      "Clear module separation makes it easier to maintain complex features such as stock movement and notifications.",
    ],
    year: 2025,
    featured: true,
    status: "completed",
    statusBadge: {
      label: "Real Project",
      iconSrc: "/icons/project-status/live.svg",
    },
    role: "Backend Engineer",
    techStack: ["PHP", "Laravel", "MySQL"],
    toolsUsed: ["Postman", "Git", "VPS", "Hostinger", "Cronjob", "OpenAPI"],
    demoUrl: "https://api.arsipel.online/api/documentation.json",
    sourceCodeUrl: null,
    caseStudyUrl: "/projects/arsipel",
    image:
      "https://res.cloudinary.com/dqj2k0khn/image/upload/v1778520873/Screenshot_2026-04-10_193410_zjnsfs.png?w=1400&auto=format&fit=crop&q=60",
    imageAlt: "Preview of ARSIPEL inventory management system.",
  },
  {
    slug: "vokalearn-moodle",
    title: "VokaLearn Moodle",
    description:
      "Moodle-based learning platform with custom course features and production server deployment.",
    overview:
      "A Moodle-based learning platform where I handled backend configuration and DevOps responsibilities, including server setup, deployment, database configuration, and production environment management.",
    objective:
      "Build and deploy a stable Moodle LMS that supports online learning activities while allowing custom course data and interface adjustments based on platform requirements.",
    problem:
      "The main challenge was customizing Moodle beyond its default behavior. Several features required custom data and visual adjustments, such as adding learning duration information to courses and adding custom background sections inside course pages. This required deeper understanding of Moodle’s internal ecosystem, structure, and configuration flow.",
    imageProblem:
      "https://res.cloudinary.com/dqj2k0khn/image/upload/v1778521240/Screenshot_2026-04-10_200008_soc0qc.png?w=1400&auto=format&fit=crop&q=60",
    process: [
      "Set up the Moodle-based LMS environment and configured the core platform requirements.",
      "Configured MariaDB/MySQL as the main database for managing users, courses, learning content, and platform data.",
      "Handled server setup, deployment, and production configuration as DevOps Engineer.",
      "Managed Moodle backend configuration, plugin integration, and infrastructure setup to support a stable learning platform.",
      "Explored Moodle’s ecosystem in depth, including course structure, theme behavior, plugin configuration, and custom data handling.",
      "Implemented custom course-related adjustments such as learning duration data and background sections inside course pages.",
      "Maintained deployment stability and ensured the platform could run reliably in production.",
    ],
    imageProcess:
      "https://res.cloudinary.com/dqj2k0khn/image/upload/v1778521240/Screenshot_2026-04-10_200623_kqy0fl.png?w=1400&auto=format&fit=crop&q=60",
    solution:
      "Solved the customization challenge by deeply studying Moodle’s ecosystem, configuration patterns, course data structure, and plugin/theme behavior until the team could confidently adjust custom course features while maintaining production stability.",
    keyFeatures: [
      "Moodle-based LMS for managing online learning activities.",
      "MariaDB/MySQL database configuration for course, user, and platform data.",
      "Custom learning duration data added to course information.",
      "Custom background section support inside course pages.",
      "Backend configuration and plugin integration for Moodle platform needs.",
      "Server setup, deployment, and production management handled as DevOps Engineer.",
      "Stable production environment for a scalable learning platform.",
    ],
    lessonsLearned: [
      "Moodle customization requires deep understanding of its ecosystem, not only surface-level configuration.",
      "DevOps responsibility in LMS projects requires attention to server stability, database setup, and production readiness.",
      "Studying platform internals makes it easier to implement custom features without breaking existing behavior.",
      "A stable educational platform depends on both backend configuration and reliable infrastructure management.",
    ],
    year: 2025,
    featured: true,
    status: "completed",
    statusBadge: {
      label: "Real Project",
      iconSrc: "/icons/project-status/live.svg",
    },
    role: "Backend Developer & DevOps Engineer",
    techStack: ["Moodle", "PHP", "MariaDB", "MySQL"],
    toolsUsed: [
      "Docker",
      "VPS",
      "Git",
      "Moodle Plugin",
      "Server Configuration",
      "Production Deployment",
    ],
    demoUrl: "https://vokalearn-lms.web.id",
    sourceCodeUrl: null,
    caseStudyUrl: "/projects/vokalearn-moodle",
    image:
      "https://res.cloudinary.com/dqj2k0khn/image/upload/v1778521239/Screenshot_2026-04-10_193845_h6y9vu.png?w=1400&auto=format&fit=crop&q=60",
    imageAlt: "Preview of VokaLearn Moodle learning platform.",
  },
];
