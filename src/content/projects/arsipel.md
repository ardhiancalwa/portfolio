---
title: "ARSIPEL"
description: "Inventory management system for military asset and item tracking."
techStack:
  - PHP
  - Laravel
  - MySQL
role: "Backend Engineer"
year: 2025
featured: true
liveUrl: "https://api.arsipel.online/api/documentation.json"
repoUrl: null
statusLabel: "Real Project"
statusIcon: "/icons/project-status/live.svg"
---

## Overview

ARSIPEL is an inventory platform for military operational items with stock movement monitoring and scheduled notifications.

## Problem

The most significant challenge was implementing cronjob-driven automation reliably for production notifications.

## Goals

- Provide reliable inventory and stock tracking flows.
- Ensure data consistency with strict backend validation.
- Automate update notifications through scheduled background tasks.

## My Role

I developed backend modules, designed validation strategy, and supported deployment-ready infrastructure setup.

## Tech Stack

- Laravel
- MySQL
- PHP

## Key Features

- Inventory CRUD and stock movement tracking.
- Scheduled notification logic for item changes.
- Authentication and authorization controls for protected operations.

## Architecture Decisions

- Structured features into modular backend domains.
- Applied standardized validation and error handling for consistent API behavior.

## Challenges

- First-time production cronjob setup required careful scheduling strategy.
- Ensuring automation did not compromise core system reliability.

## Solutions

- Researched and applied safe cronjob practices before rollout.
- Added stricter validation and operational checks around automated tasks.

## Result

The system provided stable inventory operations with working automation for stock-change notifications.

## Lessons Learned

- Scheduled jobs are powerful but require disciplined production configuration.
- Validation and clear module boundaries simplify long-term maintenance.

