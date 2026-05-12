import type { NavItem, SectionNavItem } from "@/types";

export const desktopNavItems: NavItem[] = [
  { label: "Projects", href: "/#projects-section" },
  { label: "Experience", href: "/#experience-section" },
  { label: "About", href: "/#about-section" },
  { label: "Contact", href: "/#contact-section" },
];

export const mobileNavItems: NavItem[] = [
  { label: "Profile", href: "/#hero-section" },
  { label: "Projects", href: "/#projects-section" },
  { label: "Experience", href: "/#experience-section" },
  { label: "About", href: "/#about-section" },
  { label: "Contact", href: "/#contact-section" },
];

export const sectionNavItems: SectionNavItem[] = [
  { id: "hero-section", label: "Hero" },
  { id: "projects-section", label: "Projects" },
  { id: "experience-section", label: "Experience" },
  { id: "about-section", label: "About" },
  { id: "contact-section", label: "Contact" },
];
