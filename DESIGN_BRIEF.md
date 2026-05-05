# Design Brief — Website Portfolio Personal

## 1. Tujuan Desain

Design brief ini menjadi panduan visual sebelum implementasi UI portfolio di Astro. Dokumen ini bertujuan menjaga agar desain yang dibuat langsung di code tetap konsisten, terarah, dan sesuai dengan PRD.

Website portfolio harus terasa:

- Profesional
- Modern
- Minimalis
- Cepat dibaca
- Technical but human
- Clean, confident, dan tidak berlebihan

Fokus utama desain bukan sekadar tampilan menarik, tetapi membantu recruiter, hiring manager, client, atau collaborator memahami siapa pemilik portfolio, apa keahliannya, project apa yang pernah dibuat, dan bagaimana cara menghubungi dengan cepat.

---

## 2. Prinsip Visual

### 2.1 Clean First

Gunakan layout yang bersih, banyak whitespace, dan hierarki visual yang jelas. Hindari terlalu banyak dekorasi, efek visual, atau elemen yang tidak membantu pemahaman konten.

### 2.2 Content-Driven

Konten harus menjadi pusat desain. Setiap section harus membantu menjawab pertanyaan penting:

- Siapa saya?
- Apa yang saya kerjakan?
- Skill utama saya apa?
- Project terbaik saya apa?
- Bagaimana cara menghubungi saya?

### 2.3 Performance-Aware

Desain harus ringan dan mudah di-render oleh Astro. Hindari kebutuhan JavaScript berlebihan untuk versi awal. Animasi GSAP belum digunakan pada tahap ini.

### 2.4 Accessible by Default

Desain harus readable, keyboard-friendly, dan memiliki kontras warna yang aman. Jangan mengandalkan warna saja untuk membedakan informasi penting.

### 2.5 Scalable Layout

Struktur UI harus mudah dikembangkan menjadi halaman project detail, blog, case study, atau fitur interaktif di fase berikutnya.

---

## 3. Target Kesan Pengguna

Saat user membuka website, kesan pertama yang diharapkan:

> “Ini portfolio developer yang rapi, modern, cepat, dan serius secara engineering.”

Website tidak perlu terlihat terlalu playful. Elemen visual boleh expressive, tetapi tetap terkendali dan profesional.

---

## 4. Visual Direction

### 4.1 Style Keywords

- Monochrome
- Minimalist
- Editorial
- Clean portfolio
- Strong typography
- Structured layout
- Thin borders
- Spacious whitespace
- Subtle hover interaction
- No colorful accent
- No gradient-heavy visual
- No glassmorphism
- No neumorphism

### 4.2 Referensi Rasa Visual

Arah desain dapat mengambil inspirasi dari:

- SaaS landing page modern
- Developer portfolio minimal
- Product case study layout
- Documentation-style readability
- Personal branding website yang clean

Hindari rasa visual yang terlalu:

- Gaming
- Neon berlebihan
- Terlalu corporate kaku
- Terlalu banyak gradient
- Terlalu banyak animasi
- Terlalu banyak card tanpa hierarki

---

## 5. Layout Global

### 5.1 Struktur Halaman Home

Urutan section untuk MVP:

```txt
Header / Navbar
Hero Section
About Section
Skills Section
Projects Section
Contact Section
Footer
```

### 5.2 Container

Gunakan container konsisten di semua section.

Rekomendasi:

- Max width: sekitar `1120px` sampai `1200px`
- Padding mobile: `24px`
- Padding tablet: `32px`
- Padding desktop: `40px`

Konten tidak boleh terlalu melebar agar tetap mudah dibaca.

### 5.3 Section Spacing

Setiap section harus punya jarak vertikal yang lega.

Rekomendasi:

- Mobile: `64px` antar section
- Tablet: `80px` antar section
- Desktop: `96px` sampai `120px` antar section

Hero boleh lebih tinggi dibanding section lain.

---

## 6. Sistem Warna

### 6.1 Arah Warna

Gunakan pendekatan **black & white / monochrome** sebagai basis visual utama.

Arah visual:
- Bersih
- Minimal
- Profesional
- Editorial
- Tidak bergantung pada warna aksen yang mencolok
- Fokus pada typography, spacing, hierarchy, border, dan contrast

Warna utama menggunakan hitam, putih, dan abu-abu netral. Tidak perlu warna aksen biru atau warna brand lain pada tahap MVP.

Rekomendasi token:

```css
--color-background: #ffffff;
--color-foreground: #0a0a0a;
--color-muted: #525252;
--color-subtle: #737373;
--color-border: #e5e5e5;
--color-surface: #fafafa;
--color-surface-elevated: #ffffff;
--color-inverse: #ffffff;
--color-inverse-background: #0a0a0a;

### 6.3 Penggunaan Warna

- Background utama: putih atau off-white.
- Text utama: hampir hitam.
- Text sekunder: abu-abu netral.
- Accent color: hanya untuk CTA, link, badge penting, atau detail kecil.
- Jangan menggunakan terlalu banyak warna berbeda pada MVP.

---

## 7. Typography

### 7.1 Font Direction

Gunakan font sans-serif modern, clean, dan readable.

Rekomendasi:

- System font stack terlebih dahulu untuk performa.
- Jika nanti ingin custom font, gunakan font yang ringan dan preload dengan benar.

Contoh font stack:

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### 7.2 Hierarki Typography

#### Hero Title

- Mobile: 40px–48px
- Desktop: 64px–72px
- Weight: 700 atau 800
- Line-height: tight

#### Section Title

- Mobile: 28px–32px
- Desktop: 40px–48px
- Weight: 700

#### Body Text

- Mobile: 16px
- Desktop: 17px–18px untuk paragraf penting
- Line-height: 1.6 sampai 1.8

#### Small Text / Metadata

- 14px–15px
- Gunakan untuk label, badge, project metadata, dan footer.

---

## 8. Component Direction

### 8.1 Header / Navbar

Tujuan:

- Memberi akses cepat ke section utama.
- Tidak mendominasi layar.

Isi minimal:

- Logo atau nama singkat di kiri.
- Navigation links di kanan:
  - About
  - Skills
  - Projects
  - Contact

Desktop:

- Horizontal nav.
- Header boleh sticky, tetapi jangan terlalu tinggi.

Mobile:

- Untuk MVP, boleh gunakan nav sederhana yang tetap readable.
- Jika belum ingin membuat hamburger menu, tampilkan nav compact atau hanya CTA penting.
- Hindari implementasi interaksi kompleks dulu.

Visual:

- Background transparan atau putih.
- Border bottom tipis saat diperlukan.
- Height sekitar `64px` sampai `72px`.

---

### 8.2 Hero Section

Tujuan:

Hero harus menjawab dalam 5–10 detik:

- Siapa pemilik portfolio?
- Role utamanya apa?
- Value yang ditawarkan apa?
- Apa aksi berikutnya?

Struktur konten:

```txt
Eyebrow / availability label
Headline besar
Short intro paragraph
CTA group
Social links / metadata
```

Layout desktop:

- Bisa menggunakan 2 kolom:
  - Kiri: teks utama
  - Kanan: visual placeholder / profile summary card / tech stack mini card
- Jika belum ada visual, gunakan single-column hero yang kuat.

Layout mobile:

- Single column.
- CTA stack atau wrap dengan spacing yang nyaman.

CTA:

- Primary: View Projects
- Secondary: Contact Me atau Download CV

Visual style:

- Headline besar dan tegas.
- Accent color pada beberapa kata penting boleh digunakan.
- Hindari efek typing atau animasi dulu.

---

### 8.3 About Section

Tujuan:

Menjelaskan background, fokus keahlian, cara kerja, dan value profesional secara ringkas.

Struktur:

```txt
SectionTitle
Short intro paragraph
2–3 supporting paragraphs atau highlight cards
```

Rekomendasi layout:

Desktop:

- 2 kolom:
  - Kiri: heading dan intro
  - Kanan: detail paragraph atau highlight list

Mobile:

- Single column.

Konten jangan terlalu panjang. About harus terasa personal, tetapi tetap profesional.

---

### 8.4 Skills Section

Tujuan:

Menampilkan kemampuan teknis secara cepat dan terstruktur.

Kategori minimal:

- Core Frontend
- Framework
- Styling
- Animation
- Tooling
- Design Collaboration
- Deployment

Layout:

- Grid cards per kategori.
- Setiap card berisi category title dan list skill badges.

Desktop:

- 2 atau 3 kolom.

Mobile:

- 1 kolom.

Visual:

- Badge sederhana.
- Border tipis.
- Background surface lembut.
- Hindari icon berlebihan di tahap MVP.

---

### 8.5 Projects Section

Tujuan:

Menampilkan minimal 3 project utama dengan ringkas dan jelas.

Setiap project card minimal menampilkan:

- Project title
- Description / summary
- Tech stack
- Role
- Year
- Highlight singkat
- Link detail
- Link demo/repo jika tersedia

Layout:

Desktop:

- Featured project pertama bisa dibuat lebih besar.
- Project lain dalam grid 2 kolom.

Alternatif sederhana:

- Semua project card dalam grid 3 kolom di desktop.
- 2 kolom di tablet.
- 1 kolom di mobile.

Visual card:

- Border tipis.
- Rounded corner medium atau large.
- Padding lega.
- Hover state sederhana dengan CSS transition.
- Jangan butuh JavaScript.

CTA section:

- Link ke `/projects` jika halaman listing sudah ada.
- Jika belum ada, CTA boleh anchor atau placeholder aman.

---

### 8.6 Contact Section

Tujuan:

Membuat user mudah menghubungi.

Isi minimal:

- Short closing statement
- Email link
- LinkedIn link
- GitHub link
- Optional resume link

Untuk MVP:

- Contact form tidak wajib.
- Gunakan `mailto:` untuk email.

Layout:

- Section bisa berbentuk centered block atau card besar.
- Gunakan CTA yang jelas.

Tone:

- Ramah, terbuka untuk collaboration, work opportunity, atau project discussion.

---

### 8.7 Footer

Tujuan:

Menutup halaman dengan informasi ringan dan navigasi tambahan.

Isi minimal:

- Nama / brand
- Copyright year
- Short tagline
- Social links

Visual:

- Simple.
- Border top tipis.
- Text lebih kecil.
- Tidak perlu banyak elemen.

---

## 9. Responsive Behavior

### 9.1 Breakpoint Direction

Gunakan pendekatan mobile-first.

Rekomendasi breakpoint Tailwind:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### 9.2 Mobile Requirements

Mobile harus memenuhi:

- Tidak ada horizontal scroll.
- Font tetap readable.
- CTA mudah disentuh.
- Card tidak terlalu padat.
- Section spacing cukup lega.
- Project card tetap jelas.
- Navigation tidak mengganggu konten.

### 9.3 Touch Target

Clickable element minimal sekitar `44px` tinggi atau punya padding yang cukup.

---

## 10. Interaction Direction

Untuk UI MVP, interaksi cukup menggunakan CSS.

Boleh digunakan:

- Hover pada button.
- Hover pada project card.
- Focus visible untuk keyboard navigation.
- Smooth scroll ringan via CSS jika aman.

Belum digunakan:

- GSAP animation.
- Complex page transition.
- Project filtering.
- Theme toggle.
- Interactive timeline.

---

## 11. Accessibility Requirements

Setiap implementasi UI harus memperhatikan:

- Gunakan semantic HTML.
- Heading berurutan: `h1`, `h2`, `h3`.
- Link memiliki label jelas.
- Button hanya digunakan untuk aksi, link untuk navigasi.
- Gambar penting punya `alt`.
- Warna teks memiliki kontras cukup.
- Focus state terlihat.
- Jangan menghapus outline tanpa replacement.

---

## 12. SEO Requirements untuk UI MVP

Minimal:

- `BaseLayout` menerima `title` dan `description`.
- Home page memiliki satu `h1` utama.
- Section menggunakan heading yang jelas.
- Link internal menggunakan URL yang bersih.
- Social links memakai `rel="noopener noreferrer"` jika `target="_blank"`.

---

## 13. Content Usage Rules

UI harus mengambil konten dari file data:

```txt
src/data/profile.ts
src/data/skills.ts
src/data/projects.ts
```

Jangan hardcode konten besar langsung di component jika data sudah tersedia.

Komponen section boleh mengatur layout dan rendering, tetapi sumber konten tetap dari `src/data`.

---

## 14. Implementation Scope untuk Next Step UI

### 14.1 Yang Harus Dibuat

- `Header.astro`
- `Footer.astro`
- `HeroSection.astro`
- `AboutSection.astro`
- `SkillsSection.astro`
- `ProjectsSection.astro`
- `ContactSection.astro`
- Update `src/pages/index.astro`
- Update `BaseLayout.astro` jika diperlukan
- Update `global.css` jika diperlukan

### 14.2 Yang Tidak Perlu Dibuat Dulu

- GSAP animation
- Theme toggle
- Contact form backend
- Project filter
- Blog UI
- Full case study page UI
- Complex mobile hamburger jika belum perlu
- React island

---

## 15. Suggested UI Structure

```txt
src/
  components/
    layout/
      Header.astro
      Footer.astro
    sections/
      HeroSection.astro
      AboutSection.astro
      SkillsSection.astro
      ProjectsSection.astro
      ContactSection.astro
    ui/
      Container.astro
      SectionTitle.astro
  pages/
    index.astro
```

---

## 16. Acceptance Criteria UI

### Hero Section

- Menampilkan name, role/headline, short bio, CTA, dan social links.
- Memiliki satu `h1`.
- Responsive di mobile.

### About Section

- Menampilkan ringkasan background dan value profesional.
- Layout readable di desktop dan mobile.

### Skills Section

- Menampilkan skill berdasarkan kategori.
- Skill mudah dipindai secara visual.

### Projects Section

- Menampilkan minimal 3 project.
- Setiap project memiliki title, summary, tech stack, dan link detail/demo/repo jika tersedia.
- Card responsive.

### Contact Section

- Menampilkan email dan social links.
- CTA jelas.

### Footer

- Menampilkan informasi dasar dan link sosial.
- Tidak terlalu dominan.

### Responsive Mobile

- Semua section tampil baik dari lebar 360px.
- Tidak ada horizontal scroll.
- CTA dan link mudah disentuh.

---

## 17. Design Constraints untuk Codex

Saat implementasi UI nanti, Codex harus mengikuti batasan berikut:

- Gunakan Astro component secara default.
- Gunakan Tailwind CSS untuk styling.
- Gunakan data dari `src/data`.
- Jangan menambahkan dependency baru.
- Jangan menggunakan React/Vue/Svelte.
- Jangan menambahkan GSAP dulu.
- Jangan membuat animasi kompleks.
- Jangan membuat desain terlalu ramai.
- Jangan hardcode konten besar di component.
- Jangan mengubah struktur data tanpa alasan jelas.
- Jaga semantic HTML dan accessibility.
- Pastikan mobile-first.

---

## 18. Prompt Implementasi UI Setelah Brief Disetujui

Gunakan prompt ini setelah design brief disesuaikan:

```txt
Read PRD.md and DESIGN_BRIEF.md, then implement the Home Page UI MVP for the portfolio project.

Focus only on this checklist:
- Hero section selesai
- About section selesai
- Skills section selesai
- Projects section selesai
- Contact section selesai
- Footer selesai
- Responsive mobile selesai

Requirements:
- Use Astro components by default.
- Use TypeScript where applicable.
- Use Tailwind CSS for styling.
- Pull content from:
  - `src/data/profile.ts`
  - `src/data/skills.ts`
  - `src/data/projects.ts`
- Use existing components if available:
  - `src/layouts/BaseLayout.astro`
  - `src/components/ui/Container.astro`
  - `src/components/ui/SectionTitle.astro`
- Create `Header.astro` and `Footer.astro` if they do not exist.
- Place layout-related components in:
  - `src/components/layout/`
- Create section components in:
  - `src/components/sections/`
- Create or update these section components:
  - `HeroSection.astro`
  - `AboutSection.astro`
  - `SkillsSection.astro`
  - `ProjectsSection.astro`
  - `ContactSection.astro`
- Update `src/pages/index.astro` to compose all homepage sections.
- Use the approved `DESIGN_BRIEF.md` as the visual reference.
- Follow a black & white / monochrome visual direction.
- Do not use colorful accent colors.
- Do not use gradients as the main visual style.
- Use visual hierarchy through:
  - typography
  - spacing
  - border
  - layout
  - contrast
  - subtle hover states
- Keep the design clean, modern, minimal, editorial, and professional.
- Use semantic HTML:
  - `header`
  - `main`
  - `section`
  - `article`
  - `nav`
  - `footer`
- Use accessible links and buttons.
- External links must use:
  - `target="_blank"`
  - `rel="noopener noreferrer"`
- Ensure keyboard-accessible navigation.
- Ensure heading hierarchy is logical and not skipped.
- Ensure all meaningful images have descriptive `alt` text.
- Ensure decorative images use empty `alt=""` if needed.
- Ensure mobile-first responsive layout.
- Support layout breakpoints for:
  - mobile
  - tablet
  - desktop
  - large desktop
- Avoid horizontal overflow on mobile.
- Use reusable components where appropriate.
- Keep section components focused and not overly large.
- Keep static content in `src/data`, not hardcoded directly inside UI where possible.
- Use placeholder content only if data is missing.
- Do not add GSAP yet.
- Do not add React, Vue, or Svelte.
- Do not implement project filtering yet.
- Do not implement contact form backend yet.
- Do not implement dark mode toggle yet.
- Dark mode tokens may exist, but do not add theme switching logic.
- Do not add unnecessary dependencies.
- Do not rewrite the entire architecture.
- Do not overwrite existing files aggressively; update or extend them carefully.
- Ensure the project still passes:
  - `pnpm build`
  - `pnpm lint`
  - `pnpm format:check`

After implementation, provide:
1. Files created
2. Files changed
3. Short explanation of layout decisions
4. Manual responsive checklist
5. Final checklist status
```

---

## 19. Notes for Manual Adjustment

Sebelum implementasi UI, sesuaikan bagian berikut jika diperlukan:

- Warna utama / accent color
- Tone visual: lebih minimal, lebih expressive, atau lebih corporate
- Apakah hero memakai 1 kolom atau 2 kolom
- Apakah project pertama dibuat featured besar atau semua card sama
- Apakah dark mode disiapkan dari awal atau ditunda
- Apakah navbar mobile cukup simple atau perlu hamburger
- Apakah contact menggunakan card besar atau layout sederhana

---

## 20. Final Direction

Untuk tahap UI MVP, desain harus mengutamakan:

1. Kejelasan konten
2. Responsive layout
3. Visual hierarchy
4. Reusable component
5. Accessibility
6. Performance

Desain tidak perlu final secara visual, tetapi harus cukup rapi untuk menjadi fondasi sebelum masuk ke halaman project detail, animasi GSAP, SEO polish, dan deployment.
