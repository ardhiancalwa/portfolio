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

A Laravel-based inventory management system built to help military personnel manage stored items, track item additions and reductions, and receive automated notifications through scheduled cronjob execution.

![ARSIPEL overview](https://res.cloudinary.com/dqj2k0khn/image/upload/v1778520873/Screenshot_2026-04-10_193410_zjnsfs.png?w=1400&auto=format&fit=crop&q=60)

## Objective

Build a reliable inventory platform that allows military users to manage item records, monitor stock movement, and maintain data integrity through secure backend logic, validation, and automated notifications.

## Problem

<div class="project-split">
  <div class="project-split-content">
    <p>The main challenge was handling cronjob implementation for the first time. The system needed an automated notification feature that could detect when items were newly added or reduced, so we had to understand how to schedule background tasks properly and safely in a production environment.</p>
  </div>
  <div class="project-split-media">
    <img src="https://res.cloudinary.com/dqj2k0khn/image/upload/v1778520872/Screenshot_2026-04-10_191832_qm9om6.png?w=1400&auto=format&fit=crop&q=60" alt="ARSIPEL problem context" />
  </div>
</div>

## Process

<div class="project-split">
  <div class="project-split-content">
    <p>Analyzed the inventory workflow for military item storage, including item registration, stock updates, and movement tracking.</p>
    <p>Built the system fully using Laravel with MySQL as the main database.</p>
    <p>Designed modular backend features for authentication, users, inventory data, and notification-related flows.</p>
    <p>Implemented robust form validation and standardized error handling to keep API responses consistent.</p>
    <p>Researched cronjob best practices together with the team to understand safe and reliable scheduled task execution.</p>
    <p>Implemented scheduled notification logic to detect and notify when inventory items were added or reduced.</p>
    <p>Deployed the application to a Hostinger VPS and configured the production environment for stable operation.</p>
  </div>
  <div class="project-split-media">
    <img src="https://res.cloudinary.com/dqj2k0khn/image/upload/v1778520795/WhatsApp_Image_2026-05-11_at_5.44.09_PM_opbj48.jpg?w=1400&auto=format&fit=crop&q=60" alt="ARSIPEL process overview" />
  </div>
</div>

## Solution

Implemented a Laravel-based inventory system with MySQL, secure access control, structured API validation, scheduled cronjob-based notifications, and production deployment on Hostinger VPS. The team solved the cronjob challenge through shared research and by applying best practices for scheduled background tasks.

## Key Features

- Inventory management for military item storage and stock tracking.
- Laravel-based backend and frontend implementation with MySQL database.
- Automated notification feature for newly added or reduced inventory items.
- Cronjob implementation for scheduled background task execution.
- Robust form validation and standardized error handling across inventory flows.
- Secure access control with authentication and role-based authorization.
- Production deployment on Hostinger VPS.

## Lessons Learned

- Cronjobs are useful for automating recurring backend tasks, but they require careful scheduling and production configuration.
- Researching implementation best practices together helps the team solve unfamiliar technical challenges faster.
- Inventory systems need strong validation and data integrity because small stock errors can affect operational trust.
- Clear module separation makes it easier to maintain complex features such as stock movement and notifications.

## Tech Stack

<ul class="project-chip-list">
  <li class="project-chip">PHP</li>
  <li class="project-chip">Laravel</li>
  <li class="project-chip">MySQL</li>
</ul>

## Supporting Tools

<ul class="project-tool-list">
  <li class="project-tool-chip">Postman</li>
  <li class="project-tool-chip">Git</li>
  <li class="project-tool-chip">VPS</li>
  <li class="project-tool-chip">Hostinger</li>
  <li class="project-tool-chip">Cronjob</li>
  <li class="project-tool-chip">OpenAPI</li>
</ul>
