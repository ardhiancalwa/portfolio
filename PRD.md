# PRD — Website Portfolio Personal

## 1. Ringkasan Produk

Website portfolio ini bertujuan menjadi representasi profesional, visual, dan teknis dari pemilik portfolio. Website harus mampu menampilkan profil, skill, pengalaman, project, studi kasus, dan kontak dengan cara yang modern, cepat, mudah dikelola, serta optimal untuk dikembangkan menggunakan Codex + VSCode.

Website ini bukan hanya halaman profil statis, tetapi juga menjadi showcase kemampuan front-end, arsitektur project, animasi, performa, dan kualitas engineering.

---

## 2. Tujuan Utama

### 2.1 Tujuan Bisnis / Personal Branding

- Menampilkan identitas profesional secara jelas dan menarik.
- Membantu recruiter, calon client, atau collaborator memahami kemampuan dan pengalaman dengan cepat.
- Menjadi pusat dokumentasi project-project terbaik.
- Meningkatkan kredibilitas melalui tampilan yang rapi, cepat, responsif, dan profesional.
- Menjadi project portfolio yang dapat terus dikembangkan dalam jangka panjang.

### 2.2 Tujuan Teknis

- Menggunakan stack modern yang ringan, maintainable, dan SEO-friendly.
- Memaksimalkan penggunaan Codex di VSCode untuk development, refactor, documentation, testing, dan review.
- Menggunakan arsitektur front-end yang scalable walaupun project awal relatif kecil.
- Menjaga performa tinggi, terutama pada halaman landing dan project showcase.
- Menggunakan animasi GSAP secara aman tanpa mengorbankan aksesibilitas dan performa.

---

## 3. Target Pengguna

### 3.1 Recruiter / HR

Kebutuhan utama:

- Melihat profil singkat dengan cepat.
- Mengakses CV atau resume.
- Melihat pengalaman kerja dan skill utama.
- Menemukan kontak dengan mudah.

### 3.2 Hiring Manager / Tech Lead

Kebutuhan utama:

- Melihat kualitas project dan cara berpikir teknis.
- Membaca studi kasus project.
- Memahami stack, kontribusi, problem solving, dan hasil.
- Melihat struktur code atau link GitHub jika tersedia.

### 3.3 Client / Business Owner

Kebutuhan utama:

- Menilai apakah pemilik portfolio mampu membantu kebutuhan mereka.
- Melihat contoh hasil kerja.
- Menghubungi dengan mudah melalui form, email, WhatsApp, atau LinkedIn.

### 3.4 Developer / Collaborator

Kebutuhan utama:

- Melihat style engineering, arsitektur, dan kualitas implementasi.
- Mengeksplorasi project open-source atau eksperimen teknis.

---

## 4. Scope Produk

### 4.1 In Scope

Website portfolio mencakup:

- Landing page / Home
- About section
- Skills / Tech Stack
- Experience / Journey
- Featured Projects
- Project Detail / Case Study
- Contact section
- SEO metadata
- Responsive design
- Dark mode opsional
- Animasi visual menggunakan GSAP
- Dokumentasi project
- Struktur code yang siap dikembangkan dengan Codex

### 4.2 Out of Scope untuk Versi Awal

Fitur berikut tidak wajib untuk MVP:

- CMS kompleks
- Login / authentication
- Dashboard admin
- Multi-user system
- Blog penuh dengan editor CMS
- Payment integration
- Analytics kompleks
- Backend custom besar

Fitur tersebut dapat dipertimbangkan setelah MVP stabil.

---

## 5. Rekomendasi Stack

### 5.1 Stack Utama yang Disarankan

| Kebutuhan | Pilihan |
|---|---|
| Framework | Astro |
| Bahasa | TypeScript |
| Styling | Tailwind CSS |
| Animasi | GSAP |
| Komponen Interaktif | React island di Astro jika diperlukan |
| Content | Markdown / MDX |
| Deployment | Vercel / Netlify / Cloudflare Pages |
| Package Manager | pnpm |
| Linting | ESLint |
| Formatting | Prettier |
| Version Control | Git + GitHub |

### 5.2 Alasan Memilih Astro

Astro cocok untuk portfolio karena:

- Sangat baik untuk website berbasis konten.
- Performa tinggi karena default-nya mengirim JavaScript seminimal mungkin.
- SEO-friendly.
- Bisa menggunakan React, Vue, atau framework lain hanya saat dibutuhkan.
- Cocok untuk landing page, halaman project, blog, dan dokumentasi.
- Lebih sederhana dibanding Next.js untuk kebutuhan portfolio yang dominan statis.

### 5.3 Kapan Menggunakan React di Astro

React hanya digunakan untuk bagian yang benar-benar interaktif, misalnya:

- Filter project.
- Search project.
- Theme toggle.
- Interactive timeline.
- Component playground kecil.

Hindari menggunakan React untuk semua section jika tidak perlu.

### 5.4 Penggunaan GSAP

GSAP aman digunakan selama:

- Animasi tidak berlebihan.
- Animasi tidak mengganggu aksesibilitas.
- Memperhatikan `prefers-reduced-motion`.
- Digunakan hanya di client-side.
- Membersihkan instance animation saat komponen tidak digunakan.
- Tidak membuat layout shift besar.

Contoh penggunaan GSAP yang cocok:

- Hero entrance animation.
- Scroll-triggered reveal.
- Project card hover animation.
- Section transition.
- Subtle text animation.

Hindari:

- Animasi terlalu berat di semua elemen.
- Scroll hijacking yang membuat user kehilangan kontrol.
- Animasi yang membuat konten utama sulit dibaca.
- Menggunakan GSAP untuk hal yang cukup diselesaikan dengan CSS transition sederhana.

---

## 6. Arsitektur Front-End

### 6.1 Prinsip Arsitektur

Project harus mengikuti prinsip:

- Modular
- Maintainable
- Reusable
- Content-driven
- Performance-first
- Accessibility-aware
- SEO-ready

### 6.2 Struktur Folder yang Disarankan

```txt
portfolio/
├── public/
│   ├── images/
│   ├── icons/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── content/
│   │   ├── projects/
│   │   └── blog/
│   ├── data/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── experience.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ProjectLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css
│   ├── lib/
│   │   ├── seo.ts
│   │   ├── animation.ts
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── .env.example
├── astro.config.mjs
├── package.json
├── README.md
└── PRD.md
```

### 6.3 Layering

#### `pages/`

Berisi route utama. File di folder ini bertanggung jawab atas komposisi halaman, bukan detail UI kecil.

#### `components/sections/`

Berisi section besar seperti:

- `HeroSection.astro`
- `AboutSection.astro`
- `SkillsSection.astro`
- `ProjectsSection.astro`
- `ExperienceSection.astro`
- `ContactSection.astro`

#### `components/ui/`

Berisi komponen kecil reusable:

- `Button.astro`
- `Badge.astro`
- `Card.astro`
- `SectionTitle.astro`
- `Container.astro`

#### `data/`

Berisi data statis yang mudah diedit tanpa menyentuh UI.

Contoh:

```ts
export const profile = {
  name: 'Your Name',
  role: 'Frontend Developer',
  location: 'Indonesia',
  email: 'your@email.com',
  socials: {
    github: 'https://github.com/yourname',
    linkedin: 'https://linkedin.com/in/yourname',
  },
};
```

#### `content/`

Berisi project detail dalam Markdown atau MDX.

Contoh file:

```txt
src/content/projects/ecommerce-dashboard.md
src/content/projects/portfolio-website.md
src/content/projects/mobile-banking-redesign.md
```

---

## 7. Informasi Konten

### 7.1 Home Page

Home page harus menjawab pertanyaan berikut dalam 5–10 detik pertama:

- Siapa pemilik portfolio?
- Apa role utamanya?
- Apa value yang ditawarkan?
- Apa project terbaik yang bisa dilihat?
- Bagaimana cara menghubungi?

### 7.2 Hero Section

Konten yang dibutuhkan:

- Nama
- Role utama
- Tagline singkat
- Deskripsi 1–2 kalimat
- CTA utama: View Projects
- CTA sekunder: Contact Me / Download CV
- Link sosial: GitHub, LinkedIn, Email

Contoh copy:

```txt
Hi, I'm [Name].
I build fast, accessible, and visually engaging web experiences.

Frontend Developer focused on modern web architecture, clean UI, and interactive portfolio experiences.
```

### 7.3 About Section

Konten yang dibutuhkan:

- Ringkasan background
- Fokus keahlian
- Cara kerja
- Hal yang sedang dipelajari
- Nilai profesional

Struktur narasi:

```txt
Saya adalah frontend developer yang fokus membangun web app modern dengan perhatian pada performa, aksesibilitas, dan pengalaman pengguna. Saya terbiasa mengubah kebutuhan produk menjadi UI yang rapi, scalable, dan mudah dikembangkan.
```

### 7.4 Skills Section

Kelompok skill:

- Core Frontend: HTML, CSS, JavaScript, TypeScript
- Framework: Astro, React, Next.js, Vue
- Styling: Tailwind CSS, CSS Modules
- Animation: GSAP, CSS Animation
- Tooling: Git, pnpm, Vite, ESLint, Prettier
- Design Collaboration: Figma
- Deployment: Vercel

### 7.5 Projects Section

Setiap project card minimal berisi:

- Nama project
- Deskripsi singkat
- Thumbnail
- Tech stack
- Role / kontribusi
- Link detail
- Link live demo jika ada
- Link GitHub jika boleh dibuka

### 7.6 Project Detail / Case Study

Setiap halaman project detail harus mencakup:

- Overview
- Problem
- Goal
- Role
- Tech stack
- Key features
- Architecture decision
- Challenges
- Solution
- Result / impact
- Screenshots
- Lessons learned

Template case study:

```md
---
title: Project Name
description: Short project description
techStack: [Astro, TypeScript, Tailwind]
role: Frontend Developer
year: 2026
liveUrl: https://example.com
repoUrl: https://github.com/example/repo
---

## Overview

## Problem

## Goals

## My Role

## Tech Stack

## Key Features

## Architecture Decisions

## Challenges

## Solutions

## Result

## Lessons Learned
```

### 7.7 Contact Section

Konten:

- Email
- LinkedIn
- GitHub
- Optional WhatsApp
- Simple contact form jika diperlukan

Untuk MVP, contact form tidak wajib. Link email dengan `mailto:` sudah cukup.

---

## 8. Functional Requirements

### FR-001 — Home Page

Website harus memiliki halaman utama yang menampilkan:

- Hero section
- About section
- Skills section
- Featured projects
- Experience section jika tersedia
- Contact section

Acceptance criteria:

- Semua section tampil di desktop dan mobile.
- CTA utama mengarah ke section project.
- CTA kontak mengarah ke contact section atau mailto.

### FR-002 — Project Listing

Website harus memiliki halaman daftar project.

Acceptance criteria:

- Project dapat ditampilkan dalam bentuk grid.
- Setiap project memiliki nama, deskripsi, stack, dan link detail.
- Project unggulan dapat ditandai sebagai featured.

### FR-003 — Project Detail

Website harus memiliki halaman detail untuk tiap project.

Acceptance criteria:

- URL menggunakan slug yang bersih.
- Metadata project dapat diambil dari Markdown/MDX frontmatter.
- Halaman detail memiliki struktur case study yang konsisten.

### FR-004 — Responsive Design

Website harus responsif pada ukuran:

- Mobile: 360px ke atas
- Tablet: 768px ke atas
- Desktop: 1024px ke atas
- Large desktop: 1440px ke atas

Acceptance criteria:

- Tidak ada horizontal scroll yang tidak disengaja.
- Navigasi tetap mudah digunakan di mobile.
- Project card tetap readable di layar kecil.

### FR-005 — Navigation

Website harus memiliki navigasi utama.

Menu minimal:

- Home
- About
- Projects
- Contact

Acceptance criteria:

- Navigasi desktop tampil jelas.
- Navigasi mobile menggunakan menu sederhana.
- Anchor link berjalan dengan smooth behavior yang tidak mengganggu aksesibilitas.

### FR-006 — SEO

Website harus memiliki metadata dasar.

Acceptance criteria:

- Setiap halaman memiliki title unik.
- Setiap halaman memiliki meta description.
- Open Graph image tersedia.
- Favicon tersedia.
- Sitemap dan robots.txt tersedia jika memungkinkan.

### FR-007 — Animation

Website boleh menggunakan GSAP untuk animasi tertentu.

Acceptance criteria:

- Animasi tidak memblokir rendering konten utama.
- Animasi respect `prefers-reduced-motion`.
- Animasi tidak menyebabkan layout shift besar.
- Animasi berjalan baik di mobile.

### FR-008 — Dark Mode Opsional

Website dapat memiliki dark mode.

Acceptance criteria:

- Toggle theme tersedia jika fitur diaktifkan.
- Pilihan theme tersimpan di localStorage.
- Default mengikuti preferensi sistem.

---

## 9. Non-Functional Requirements

### 9.1 Performance

Target performa:

- Lighthouse Performance: minimal 90
- First Contentful Paint: cepat
- Largest Contentful Paint: optimal
- Cumulative Layout Shift: rendah
- JavaScript dikirim seminimal mungkin

Prinsip:

- Optimalkan gambar.
- Gunakan lazy loading untuk gambar non-critical.
- Hindari library besar tanpa alasan jelas.
- Gunakan Astro island hanya untuk bagian interaktif.

### 9.2 Accessibility

Target:

- Lighthouse Accessibility: minimal 90

Requirement:

- Semua button dan link memiliki label jelas.
- Kontras warna memenuhi standar dasar.
- Navigasi dapat digunakan dengan keyboard.
- Heading structure rapi.
- Gambar penting memiliki alt text.
- Animasi memperhatikan reduced motion.

### 9.3 Maintainability

Requirement:

- Komponen kecil dan reusable.
- Data portfolio dipisahkan dari UI.
- Penamaan file konsisten.
- Komponen tidak terlalu besar.
- Dokumentasi tersedia di README.

### 9.4 SEO

Requirement:

- Semantic HTML.
- Metadata per halaman.
- Open Graph support.
- Struktur heading benar.
- URL bersih dan deskriptif.

### 9.5 Security

Requirement:

- Tidak menyimpan secret di repository.
- Menggunakan `.env.example` untuk dokumentasi environment variable.
- Link eksternal menggunakan `rel="noopener noreferrer"` jika `target="_blank"`.
- Contact form, jika ada, harus memiliki proteksi spam dasar.

---

## 10. Design Direction

### 10.1 Gaya Visual

Arah desain:

- Modern
- Minimalis
- Profesional
- Sedikit expressive melalui animasi
- Fokus pada readability
- Banyak whitespace
- Typography kuat

### 10.2 Mood

Kesan yang ingin dibangun:

- Clean
- Confident
- Technical
- Reliable
- Creative but not noisy

### 10.3 Layout

Rekomendasi layout:

- Hero besar di awal halaman.
- Section-based layout.
- Grid untuk project.
- Timeline untuk experience.
- Sticky atau simple navbar.
- Footer sederhana.

### 10.4 Warna

Gunakan sistem token warna, misalnya:

```css
:root {
  --color-bg: #ffffff;
  --color-text: #111111;
  --color-muted: #666666;
  --color-primary: #2563eb;
  --color-surface: #f5f5f5;
}
```

Jika menggunakan Tailwind, warna dapat dikonfigurasi di `tailwind.config`.

---

## 11. Strategi Konten Project

### 11.1 Prioritas Project

Project yang ditampilkan sebaiknya dipilih berdasarkan:

1. Relevansi dengan role yang ditargetkan.
2. Kompleksitas teknis.
3. Kualitas visual.
4. Kejelasan problem dan solusi.
5. Ada hasil atau impact yang bisa dijelaskan.

### 11.2 Jumlah Project MVP

Minimal:

- 3 featured projects
- 1 halaman detail per project

Ideal:

- 4–6 project utama
- 2–3 case study lengkap

### 11.3 Format Project yang Baik

Setiap project sebaiknya tidak hanya menjelaskan “apa yang dibuat”, tetapi juga:

- Kenapa project dibuat.
- Problem apa yang diselesaikan.
- Keputusan teknis apa yang diambil.
- Trade-off yang dipertimbangkan.
- Apa hasil akhirnya.
- Apa yang dipelajari.

---

## 12. MCP yang Direkomendasikan untuk Codex / VSCode

Catatan: gunakan MCP sesuai kebutuhan dan ketersediaan environment.

### 12.1 Filesystem MCP

Kegunaan:

- Membaca struktur project.
- Membuat file baru.
- Mengedit file yang ada.
- Memahami relasi antar file.

Use case:

- Generate komponen Astro.
- Refactor struktur folder.
- Membuat data file.
- Membuat dokumentasi.

### 12.2 GitHub MCP

Kegunaan:

- Membaca issue.
- Membuat pull request.
- Review perubahan code.
- Membaca repository context.

Use case:

- Membuat PR summary.
- Membantu code review.
- Membuat issue task dari PRD.

### 12.3 Browser / Playwright MCP

Kegunaan:

- Testing UI langsung di browser.
- Mengecek layout responsive.
- Mengecek interaksi.
- Validasi visual basic.

Use case:

- Test navbar mobile.
- Test animasi GSAP.
- Test form contact.
- Screenshot halaman.

### 12.4 Figma MCP Jika Tersedia

Kegunaan:

- Membaca design dari Figma.
- Mengubah design token menjadi implementasi.
- Membantu matching layout.

Use case:

- Implement section dari frame Figma.
- Ambil spacing, warna, typography.

### 12.5 Context7 / Documentation MCP Jika Tersedia

Kegunaan:

- Mengambil dokumentasi library terbaru.
- Menghindari API usage yang sudah deprecated.

Use case:

- Cek API Astro.
- Cek integrasi GSAP.
- Cek Tailwind configuration.

---

## 13. Workflow Development dengan Codex

### 13.1 Prinsip Menggunakan Codex

Gunakan Codex sebagai partner engineering, bukan hanya generator code.

Codex sebaiknya diminta untuk:

- Membaca context terlebih dahulu.
- Menjelaskan rencana implementasi.
- Membuat perubahan kecil bertahap.
- Menjaga konsistensi struktur.
- Menulis acceptance criteria.
- Mengecek edge case.
- Melakukan refactor setelah fitur berjalan.

### 13.2 Workflow Ideal

1. Buat project Astro.
2. Setup TypeScript, Tailwind, ESLint, Prettier.
3. Buat struktur folder.
4. Buat data profile, skills, projects.
5. Buat layout dasar.
6. Buat home page sections.
7. Buat project listing.
8. Buat project detail dari Markdown/MDX.
9. Tambahkan animasi GSAP secara bertahap.
10. Optimasi responsive design.
11. Tambahkan SEO metadata.
12. Test Lighthouse.
13. Refactor komponen.
14. Deploy.
15. Dokumentasikan README.

---

## 14. Prompt Codex yang Direkomendasikan

### 14.1 Prompt Awal Project

```txt
You are helping me build a personal portfolio website using Astro, TypeScript, Tailwind CSS, and GSAP.

Before coding, read the existing project structure and PRD.md. Then propose a concise implementation plan.

Important constraints:
- Prioritize performance and SEO.
- Use Astro components by default.
- Use React only for truly interactive islands.
- Keep data separated from UI in src/data.
- Keep components modular and reusable.
- Use GSAP only for client-side animation and respect prefers-reduced-motion.
- Do not introduce unnecessary dependencies.

Start by creating the base folder structure, layout components, and data files.
```

### 14.2 Prompt Membuat Struktur Folder

```txt
Read PRD.md and create the recommended folder structure for the portfolio project.

Create only the necessary starter files:
- BaseLayout.astro
- Container.astro
- SectionTitle.astro
- profile.ts
- projects.ts
- skills.ts
- global.css

Do not implement all pages yet. Keep the code clean, typed, and minimal.
```

### 14.3 Prompt Membuat Home Page

```txt
Implement the home page based on PRD.md.

Sections required:
- HeroSection
- AboutSection
- SkillsSection
- FeaturedProjectsSection
- ContactSection

Use Astro components by default. Pull content from src/data files. Use semantic HTML and responsive Tailwind classes.

Do not add GSAP yet. Focus on structure, content, responsive layout, and accessibility first.
```

### 14.4 Prompt Menambahkan GSAP

```txt
Add subtle GSAP animations to the home page.

Requirements:
- Animate hero content on page load.
- Add scroll reveal animation for sections.
- Respect prefers-reduced-motion.
- Ensure the code only runs in the browser.
- Avoid layout shift.
- Keep animations reusable in src/lib/animation.ts.

Do not animate every element. Keep the experience professional and lightweight.
```

### 14.5 Prompt Membuat Project Detail

```txt
Implement project detail pages using Astro content collections or Markdown/MDX.

Requirements:
- Each project has a slug.
- Each project has frontmatter for title, description, techStack, role, year, liveUrl, repoUrl, and featured.
- Create a reusable ProjectLayout.
- Render case study sections clearly.
- Add SEO metadata per project page.

Follow the content structure defined in PRD.md.
```

### 14.6 Prompt Review Code

```txt
Review the current implementation against PRD.md.

Check for:
- Performance issues
- Accessibility issues
- SEO gaps
- Unnecessary JavaScript
- Component organization
- TypeScript quality
- Responsive design problems
- GSAP misuse

Return findings grouped by severity: Critical, High, Medium, Low. Do not change code yet.
```

### 14.7 Prompt Refactor

```txt
Refactor the current codebase to improve maintainability without changing the visual output.

Focus on:
- Reusable components
- Better naming
- Removing duplication
- Moving static content to src/data
- Improving TypeScript types

Before editing, explain the files you plan to change. After editing, summarize what changed.
```

### 14.8 Prompt Testing Manual

```txt
Create a manual QA checklist for this portfolio website.

Include checks for:
- Desktop layout
- Mobile layout
- Navigation
- Project detail pages
- Contact links
- SEO metadata
- Accessibility
- Reduced motion
- Lighthouse targets
```

---

## 15. Prompt yang Harus Dihindari

Hindari prompt seperti:

```txt
Build my entire portfolio website.
```

Masalah:

- Terlalu luas.
- Codex bisa membuat terlalu banyak asumsi.
- Sulit dikontrol dan direview.

Lebih baik:

```txt
Implement HeroSection based on PRD.md using Astro and Tailwind. Pull copy from src/data/profile.ts. Keep it responsive and accessible.
```

Hindari:

```txt
Make it cooler.
```

Lebih baik:

```txt
Improve the HeroSection visual hierarchy by adjusting spacing, typography, and CTA layout. Do not change content or add dependencies.
```

Hindari:

```txt
Add animations everywhere.
```

Lebih baik:

```txt
Add subtle GSAP reveal animations only to the hero and section headings. Respect prefers-reduced-motion.
```

Hindari:

```txt
Use React for the whole site.
```

Lebih baik:

```txt
Use Astro components by default. Only use React for the project filter component because it requires client-side state.
```

---

## 16. Development Milestones

### Milestone 1 — Project Setup

Deliverables:

- Astro project created
- TypeScript enabled
- Tailwind configured
- ESLint and Prettier configured
- Base folder structure ready
- Git repository initialized

Acceptance criteria:

- Project runs locally.
- No TypeScript errors.
- Basic page renders.

### Milestone 2 — Content & Layout Foundation

Deliverables:

- BaseLayout
- Global styles
- Data files
- UI primitives
- SEO helper

Acceptance criteria:

- Layout reusable.
- Data separated from UI.
- Page title and description configurable.

### Milestone 3 — Home Page MVP

Deliverables:

- Hero
- About
- Skills
- Featured Projects
- Contact

Acceptance criteria:

- Home page complete on desktop and mobile.
- CTA works.
- Content readable and structured.

### Milestone 4 — Project Pages

Deliverables:

- Project listing page
- Project detail route
- Markdown/MDX project content
- ProjectLayout

Acceptance criteria:

- Project detail pages generated from content.
- Slug works.
- Project metadata rendered correctly.

### Milestone 5 — Animation & Interaction

Deliverables:

- GSAP setup
- Hero animation
- Section reveal animation
- Optional project filter

Acceptance criteria:

- Animation works smoothly.
- Reduced motion respected.
- No major layout shift.

### Milestone 6 — SEO, Accessibility, Performance

Deliverables:

- Metadata
- Open Graph
- Sitemap
- Robots
- Image optimization
- Accessibility improvements

Acceptance criteria:

- Lighthouse scores target 90+ for Performance, Accessibility, Best Practices, and SEO.

### Milestone 7 — Deployment

Deliverables:

- Deployed website
- README updated
- Environment documented
- Final QA completed

Acceptance criteria:

- Website live.
- All main pages accessible.
- No broken links.

---

## 17. Acceptance Criteria Global

Project dianggap berhasil jika:

- Website dapat menjelaskan profil profesional secara jelas.
- Website memiliki minimal 3 project yang ditampilkan.
- Website responsive di mobile dan desktop.
- Website cepat dan SEO-friendly.
- Struktur code rapi dan mudah dikembangkan.
- Animasi GSAP mendukung pengalaman, bukan mengganggu.
- Konten project detail memiliki narasi problem-solution-result.
- Codex dapat digunakan dengan mudah karena PRD, README, dan struktur project jelas.

---

## 18. Risiko dan Mitigasi

### Risiko 1 — Scope Terlalu Besar

Mitigasi:

- Fokus pada MVP terlebih dahulu.
- Blog, CMS, dan fitur kompleks ditunda.

### Risiko 2 — Animasi Berlebihan

Mitigasi:

- Gunakan GSAP hanya pada bagian penting.
- Terapkan reduced motion.
- Review performa setelah animasi ditambahkan.

### Risiko 3 — Code Tidak Konsisten karena Terlalu Banyak Generate Codex

Mitigasi:

- Gunakan prompt kecil dan spesifik.
- Review setiap perubahan.
- Refactor secara berkala.
- Gunakan linting dan formatting.

### Risiko 4 — Konten Project Kurang Kuat

Mitigasi:

- Gunakan format case study.
- Jelaskan problem, role, solusi, dan impact.
- Prioritaskan kualitas project daripada jumlah project.

---

## 19. Checklist MVP

### Setup

- [ ] Astro project dibuat
- [ ] TypeScript aktif
- [ ] Tailwind aktif
- [ ] ESLint aktif
- [ ] Prettier aktif
- [ ] Struktur folder dibuat

### Content

- [ ] Data profile tersedia
- [ ] Data skills tersedia
- [ ] Data projects tersedia
- [ ] Minimal 3 project tersedia
- [ ] Minimal 1 case study lengkap tersedia

### UI

- [ ] Hero section selesai
- [ ] About section selesai
- [ ] Skills section selesai
- [ ] Projects section selesai
- [ ] Contact section selesai
- [ ] Footer selesai
- [ ] Responsive mobile selesai

### Pages

- [ ] Home page selesai
- [ ] Projects page selesai
- [ ] Project detail page selesai
- [ ] 404 page tersedia

### Animation

- [ ] GSAP hanya berjalan di client
- [ ] Hero animation tersedia
- [ ] Section reveal tersedia
- [ ] Reduced motion didukung

### Quality

- [ ] Lighthouse Performance 90+
- [ ] Lighthouse Accessibility 90+
- [ ] Lighthouse SEO 90+
- [ ] Tidak ada broken link
- [ ] Tidak ada console error
- [ ] Tidak ada TypeScript error

### Deployment

- [ ] Deploy ke Vercel / Netlify / Cloudflare Pages
- [ ] Domain custom jika ada
- [ ] README update
- [ ] Final QA selesai

---

## 20. Definition of Done

Sebuah task dianggap selesai jika:

- Implementasi sesuai PRD.
- Tidak ada error TypeScript.
- Tidak ada error console utama.
- Responsive sudah dicek.
- Aksesibilitas dasar sudah diperhatikan.
- Code sudah diformat.
- Tidak ada dependency tidak perlu.
- Perubahan sudah dijelaskan dalam commit atau PR summary.

---

## 21. Roadmap Lanjutan Setelah MVP

Fitur lanjutan yang dapat ditambahkan:

- Blog teknis menggunakan MDX.
- Project filtering berdasarkan tech stack.
- Search project.
- CMS ringan seperti Decap CMS atau Contentful.
- Analytics sederhana.
- Multi-language support: Indonesia dan English.
- Downloadable resume.
- Interactive playground.
- Advanced case study layout.
- Automated visual regression testing.

---

## 22. Catatan Implementasi Penting

- Jangan mulai dari animasi. Mulai dari struktur, konten, dan layout.
- Jangan menggunakan framework berat untuk kebutuhan sederhana.
- Jangan mencampur data langsung di komponen besar.
- Jangan membuat semua komponen menjadi client-side.
- Jangan mengejar visual kompleks sebelum konten kuat.
- Gunakan Codex secara bertahap: plan, implement, review, refactor.
- Website portfolio yang baik adalah kombinasi dari cerita, kualitas visual, performa, dan engineering discipline.
