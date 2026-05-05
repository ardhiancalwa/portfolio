---
title: "Portfolio Website"
description: "Personal portfolio website built to present profile, skills, and selected project case studies."
techStack:
  - Astro
  - TypeScript
  - Tailwind CSS
role: "Frontend Developer"
year: 2026
featured: true
liveUrl: null
repoUrl: null
---

## Overview

Portfolio Website is built as a personal showcase to present professional identity, core capabilities, and selected projects in a structure that is easy to scan and maintain.

## Problem

A single profile page is often not enough to communicate technical depth, project context, and working style. The challenge was to provide enough detail for recruiters and collaborators without creating a heavy or confusing experience.

## Goals

- Build a clean portfolio foundation that is easy to update over time.
- Separate content data from UI components for better maintainability.
- Keep pages lightweight and SEO-friendly using Astro's static-first approach.
- Prepare a consistent case study structure for project detail pages.

## My Role

I handled content modeling, information architecture, and frontend implementation for the initial setup, including typed data, project metadata, and a reusable layout baseline.

## Tech Stack

- Astro
- TypeScript
- Tailwind CSS

## Key Features

- Typed `src/data` modules for profile, skills, and project entries.
- Reusable base layout and project layout for future page growth.
- Case-study-ready content structure in `src/content/projects`.
- Project links that clearly map to detail routes.

## Architecture Decisions

- Used Astro components by default to keep JavaScript delivery minimal.
- Kept project data and narrative content separated:
  - quick card metadata in `src/data/projects.ts`
  - long-form case study in Markdown under `src/content/projects`
- Established strict TypeScript interfaces to reduce content drift.

## Challenges

- Defining a data structure that is detailed enough for project pages but still simple to edit.
- Keeping placeholders realistic and professional without overstating outcomes.

## Solutions

- Introduced explicit project fields such as `status`, `links`, and `highlights`.
- Standardized the case study format using PRD-aligned section headings.
- Used clear placeholder values that can be replaced quickly by the portfolio owner.

## Result

The content foundation is now ready for page composition:

- profile data is structured and editable
- skills are grouped by PRD categories
- at least three projects are available with consistent metadata
- one complete case study is ready to render in a detail route

## Lessons Learned

Strong content structure early in development makes UI implementation faster, more consistent, and easier to maintain as the portfolio grows.
