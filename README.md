# Homepage Maintenance Guide

Personal academic homepage built with [al-folio](https://github.com/alshedivat/al-folio).
Live site: [zhixin612.github.io](https://zhixin612.github.io)

---

## Local Development

```bash
# Install dependencies (first time only)
bundle install

# Start local server → http://localhost:4000
bundle exec jekyll serve --livereload
```

---

## 1. Basic Information

### 1.1 Name

**File: `_config.yml`**

```yaml
first_name: Zhixin
last_name: Zhao
scholar:
  last_name: [Zhao]
  first_name: [Zhixin, Z.]   # used to bold+underline your name in publication lists
```

### 1.2 Profile Photo

Replace `assets/img/prof_pic.jpg` with your photo (keep the filename).

### 1.3 Subtitle & Affiliation

**File: `_pages/about.md`** — edit the `subtitle` field in front matter:

```yaml
subtitle: 4th-year Ph.D. Student @ <a href="...">TANKLAB</a>, Tianjin University
```

### 1.4 Contact Info (below photo)

**File: `_pages/about.md`** — edit the `more_info` block in front matter (location, institution link, email, Google Scholar, GitHub).

### 1.5 Email / Scholar / GitHub

**File: `_data/socials.yml`**

```yaml
email: you@email.com
scholar_userid: YOUR_ID        # from https://scholar.google.com/citations?user=YOUR_ID
github_username: yourname
```

---

## 2. Homepage Sections

All homepage content lives in **`_pages/about.md`**.

### 2.1 Bio Paragraph

Edit the opening paragraph directly in the body of `_pages/about.md`.

### 2.2 Projects (homepage blurb)

Edit the **Projects** section in the body of `_pages/about.md`. This is a short text summary, not the project cards — for the full project card page, see [5. Projects Page](#5-projects-page).

### 2.3 Honors & Awards

Edit the **Honors & Awards** section in the body of `_pages/about.md`.

> **Also update:** `_data/cv.yml` under the `Awards` and `Scholarships` sections so the CV page stays consistent.

### 2.4 Service

Edit the **Service** section in the body of `_pages/about.md`.

> **Also update:** `_data/cv.yml` under the `Service` section if you want it reflected on the CV page.

### 2.5 Interests

Edit the **Interests** section in the body of `_pages/about.md`.

### 2.6 Announcements

To enable: set `announcements: enabled: true` in `_pages/about.md` front matter, then add files to `_news/`:

```markdown
---
layout: post
date: 2025-06-01
inline: true
---

Short announcement text here.
```

---

## 3. Publications

### 3.1 Add / Edit a Paper

**File: `_bibliography/papers.bib`** — append a BibTeX entry:

```bibtex
@inproceedings{yourkey2025,
  title     = {Your Paper Title},
  author    = {Zhao, Zhixin and Coauthor, Name},
  booktitle = {Conference Full Name},
  abbr      = {CONF},                              % badge shown in the list (e.g., ASPLOS)
  year      = {2025},
  html      = {https://link-to-paper},
  pdf       = {[CONF'25] ShortTitle.pdf},          % place file in assets/pdf/
  slides    = {[CONF'25] ShortTitle-slides.pdf},   % optional
  note      = {<sup>†</sup><em>Equal Contribution</em>},  % optional footnote
}
```

> **Also update:** `_data/cv.yml` under the `Publications` section if you want the paper listed on the CV page.

### 3.2 Equal Contribution

Add `†` suffix to co-first authors' last names in the `author` field:

```bibtex
author = {Yi†, Jinjun and Zhao†, Zhixin and ...}
```

Then add the note:

```bibtex
note = {<sup>†</sup><em>Equal Contribution</em>}
```

### 3.3 PDF / Slides Files

Place files in **`assets/pdf/`**. Naming convention: `[CONF'YY] SystemName.pdf` / `[CONF'YY] SystemName-slides.pdf`.

---

## 4. CV Page

**File: `_data/cv.yml`**

The CV page is fully driven by this file. Structure:

```yaml
- title: Education
  type: time_table
  contents:
    - institution: Tianjin University
      degree: Ph.D. in Computer Science
      year: 2021 – present
      description:
        - "Advisor: Prof. ..."

- title: Awards
  type: time_table
  contents:
    - year: 2024
      items:
        - Award Name, Organization

- title: Publications
  type: list
  contents:
    - <a href="...">Paper Title</a>, Conference, Year

- title: Service
  type: list
  contents:
    - "Reviewer: Conference/Journal Name"
```

> **Note:** The CV page reads only from `_data/cv.yml`. The homepage reads only from `_pages/about.md`. Keep them in sync manually when updating awards, publications, or service.

---

## 5. Projects Page

**Directory: `_projects/`** — each `.md` file is one project card.

```yaml
---
layout: page
title: Project Title
description: One-line description with <a href="...">links</a>
img: assets/img/your_image.jpg   # optional preview image
importance: 1                    # lower = shown first within category
category: work                   # work | fun
---
```

Add preview images to `assets/img/`. To add a new project, copy an existing file and rename it (the filename is only for organization; `importance` controls order).

---

## 6. Site Configuration

### 6.1 Enable / Disable Nav Pages

Edit the `nav:` field in the front matter of each page file:

| Page         | File                     | Default |
| ------------ | ------------------------ | ------- |
| Publications | `_pages/publications.md` | `true`  |
| CV           | `_pages/cv.md`           | `true`  |
| Projects     | `_pages/projects.md`     | `true`  |
| Blog         | `_pages/blog.md`         | `false` |
| Repositories | `_pages/repositories.md` | `false` |
| Teaching     | `_pages/teaching.md`     | `false` |

### 6.2 Add a New Nav Page

1. Create `_pages/yourpage.md` with `nav: true` and `nav_order: N`
2. Write content using any Jekyll layout (e.g., `layout: page`)

### 6.3 Accent Color

**File: `_sass/_variables.scss`**

```scss
$purple-color: #00468c !default; // site accent color (currently dark blue)
```

### 6.4 Favicon

**File: `_config.yml`**

```yaml
favicon: /assets/img/favicon.png
```

Replace `assets/img/favicon.png` with your icon file (SVG recommended for sharpness).

---

## 7. Deployment

Push to `main` — GitHub Actions builds and deploys automatically (~1–2 min):

```bash
git add <files>
git commit -m "update: ..."
git push
```
