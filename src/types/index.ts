export type Nullable<T> = T | null;

export interface NavItem {
  label: string;
  href: string;
}

export interface BasePageProps {
  title?: string;
  description?: string;
}

export interface SocialLink {
  platform: "GitHub" | "LinkedIn" | "Email" | "Instagram";
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  headline: string;
  shortBio: string;
  hero: {
    greeting: string;
    introName: string;
    paragraphs: [string, string, string];
    resumeLabel: string;
  };
  about: {
    headline: string;
    paragraphs: [string, string];
    highlights: [string, string, string];
    background: string;
    focus: string;
    workingStyle: string;
    currentlyLearning: string;
  };
  location: string;
  email: string;
  availability: string;
  resumeUrl: string;
  socials: SocialLink[];
}

export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  category:
    | "Core Frontend"
    | "Framework"
    | "Styling"
    | "Animation"
    | "Tooling"
    | "Design Collaboration"
    | "Deployment";
  items: SkillItem[];
}

export type ProjectStatus = "completed" | "in-progress" | "planned";

export interface ProjectStatusBadge {
  label: string;
  iconSrc: string;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  overview: string;
  objective: string;
  problem: string;
  process: string[];
  solution: string;
  keyFeatures: string[];
  lessonsLearned: string[];
  techStack: string[];
  toolsUsed?: string[];
  role: string;
  year: number;
  featured: boolean;
  status: ProjectStatus;
  statusBadge: ProjectStatusBadge;
  demoUrl: Nullable<string>;
  sourceCodeUrl: Nullable<string>;
  caseStudyUrl: Nullable<string>;
  image: string;
  imageAlt: string;
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  techStack: string[];
}

export interface Article {
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  slug: string;
  url: string;
  featured?: boolean;
}
