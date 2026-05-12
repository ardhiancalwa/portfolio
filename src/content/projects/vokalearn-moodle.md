---
title: "VokaLearn Moodle"
description: "Moodle-based learning platform with custom course features and production server deployment."
techStack:
  - Moodle
  - PHP
  - MariaDB
  - MySQL
role: "Backend Developer & DevOps Engineer"
year: 2025
featured: true
liveUrl: "https://vokalearn-lms.web.id"
repoUrl: null
statusLabel: "Real Project"
statusIcon: "/icons/project-status/live.svg"
---

## Overview

VokaLearn Moodle is an LMS platform deployment with backend configuration and DevOps-focused production setup.

## Problem

Custom requirements exceeded default Moodle behavior, especially around course metadata and page-level customization.

## Goals

- Build a stable Moodle environment for learning operations.
- Support custom course information and interface adjustments.
- Maintain production reliability through sound server configuration.

## My Role

I handled backend platform configuration, deployment setup, and production environment operations.

## Tech Stack

- Moodle
- PHP
- MariaDB
- MySQL

## Key Features

- Custom course metadata support (including duration fields).
- Configured LMS environment with database and plugin integration.
- Production deployment and operational server setup.

## Architecture Decisions

- Used platform-native Moodle extension/configuration patterns to minimize risky overrides.
- Prioritized stability and maintainability over aggressive customization.

## Challenges

- Understanding Moodle internals deeply enough to implement safe custom behavior.
- Balancing customization speed with production stability.

## Solutions

- Studied plugin/theme/data structure paths before implementation.
- Rolled out customizations incrementally with configuration safeguards.

## Result

The platform ran stably in production while meeting required custom course behavior.

## Lessons Learned

- LMS customization requires deep ecosystem understanding, not only surface configuration.
- Infrastructure quality strongly impacts educational platform reliability.

