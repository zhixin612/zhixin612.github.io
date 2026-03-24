# Homepage Maintenance Guide

Personal academic homepage built with [al-folio](https://github.com/alshedivat/al-folio).
Live site: [zhixin612.github.io](https://zhixin612.github.io)

---

## Local Development

```bash
# Install dependencies (first time or after Gemfile changes)
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

### 2.2 Selected Projects (Research)

The **Selected Projects** section on the homepage displays research projects in a text-block style (title + description + action buttons). Data comes from `_projects/*.md` files with `category: research` and `selected: true`.

To add a research project to the homepage, create a file in `_projects/` with:

```yaml
---
layout: page
title: "Project Title"
description: >
  A paragraph describing the project background, problem, approach, and contributions.
category: research              # must be "research"
selected: true                  # true = show on homepage
year: 2025                      # start year, used for sorting (newer first)
period: "2025 – Present"        # optional: displayed time period (e.g., "2023", "2023 – 2025", "2025 – Present")
github: https://github.com/...  # optional
website: https://...            # optional
img: assets/img/project_xxx.png # optional: preview image (right side, any aspect ratio)
papers:                         # optional: linked papers from papers.bib
  - key: zhao2025xxx            #   citation key
    label: "CONF 2025"          #   display label (venue + year)
---
```

### 2.3 Side Projects

The **Side Projects** section on the homepage displays interest/open-source projects as cards (below Selected Publications). Data comes from `_projects/*.md` files with `category: fun` and `selected: true`.

```yaml
---
layout: page
title: Project Name
description: One-line description
category: fun                   # must be "fun"
selected: true                  # true = show on homepage
year: 2024                      # used for sorting (newer first) and displayed on card
github: https://github.com/...  # optional
website: https://...            # optional
redirect: https://...           # optional: override card click URL
img: assets/img/project_xxx.png # optional: preview image
---
```

### 2.4 Honors & Awards

Edit the **Honors & Awards** section in the body of `_pages/about.md`.

> **Also update:** `_data/cv.yml` under the `Awards` and `Scholarships` sections so the CV page stays consistent.

### 2.5 Service

Edit the **Service** section in the body of `_pages/about.md`.

> **Also update:** `_data/cv.yml` under the `Service` section if you want it reflected on the CV page.

### 2.6 Interests

Edit the **Interests** section in the body of `_pages/about.md`.

### 2.7 Announcements

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

**Directory: `_projects/`** — each `.md` file is one project.

The projects page (`_pages/projects.md`) displays two sections:

- **Research Projects** — text-block style (title + description + action buttons), same as homepage
- **Side Projects** — card style with optional image, same as homepage

All projects in `_projects/` are shown on the projects page regardless of the `selected` field. The `selected` field only controls whether the project appears on the homepage.

### Research Project front matter

```yaml
---
layout: page
title: "Project Title"
description: >
  Multi-line description of the project.
category: research              # "research" for text-block display
selected: true                  # show on homepage?
year: 2025                      # start year, used for sorting (newer first)
period: "2025 – Present"        # optional: displayed time period
github: https://github.com/...  # optional
website: https://...            # optional
img: assets/img/project_xxx.png # optional: preview image (right side, any aspect ratio)
papers:                         # optional: linked papers from papers.bib
  - key: zhao2025xxx            #   citation key
    label: "CONF 2025"          #   display label (venue + year)
---
```

### Side Project front matter

```yaml
---
layout: page
title: Project Name
description: One-line description
category: fun                   # "fun" for card display
selected: true                  # show on homepage?
year: 2024                      # used for sorting (newer first) and displayed on card
github: https://github.com/...  # optional
website: https://...            # optional
redirect: https://...           # optional: override card click URL
img: assets/img/project_xxx.png # optional
---
```

Add preview images to `assets/img/`. To add a new project, create a new `.md` file in `_projects/` (filename is for organization only; `year` controls display order).

---

## 6. Photography Page

**Directory: `assets/img/photography/`**

The photography page displays a masonry (waterfall) gallery of your photos, sorted by shooting date (newest first). It is fully automated — just drop photos into the directory and rebuild the site.

### Add Photos

1. Place `.jpg` / `.jpeg` / `.png` files into `assets/img/photography/`
2. Rebuild the site (`bundle exec jekyll serve` or push to trigger CI)
3. Done — the plugin automatically reads EXIF shooting date and image dimensions

**How it works:** The Jekyll plugin `_plugins/photography.rb` scans the photo directory at build time, extracts EXIF `DateTimeOriginal` (falls back to file modification time), reads image width/height, and feeds the data to the gallery template. ImageMagick generates responsive WebP thumbnails (480/800/1400px) automatically.

### Gallery Features

- **Masonry layout** — photos of different aspect ratios tile naturally (3 cols → 2 cols → 1 col on smaller screens)
- **Lightbox** — click any photo to view full size with dark overlay (PhotoSwipe); swipe/arrow to browse, ESC/click to close
- **Lazy loading** — only first 6 images load eagerly; the rest load on scroll
- **Responsive thumbnails** — WebP images at multiple sizes, browser picks the best fit

### Tips

- JPEG photos with EXIF data are ideal — the shooting date is read automatically
- For PNG or photos without EXIF, the file's last-modified time is used for sorting
- No need to resize photos beforehand — ImageMagick handles thumbnail generation
- Filename becomes the alt text (with `-` and `_` replaced by spaces)

---

## 7. Site Configuration

### 7.1 Enable / Disable Nav Pages

Edit the `nav:` field in the front matter of each page file:

| Page         | File                     | Default |
| ------------ | ------------------------ | ------- |
| Publications | `_pages/publications.md` | `true`  |
| CV           | `_pages/cv.md`           | `true`  |
| Projects     | `_pages/projects.md`     | `true`  |
| Photography  | `_pages/photography.md`  | `true`  |
| Blog         | `_pages/blog.md`         | `false` |
| Repositories | `_pages/repositories.md` | `false` |
| Teaching     | `_pages/teaching.md`     | `false` |

### 7.2 Add a New Nav Page

1. Create `_pages/yourpage.md` with `nav: true` and `nav_order: N`
2. Write content using any Jekyll layout (e.g., `layout: page`)

### 7.3 Accent Color

**File: `_sass/_variables.scss`**

```scss
$purple-color: #00468c !default; // site accent color (currently dark blue)
```

### 7.4 Favicon

**File: `_config.yml`**

```yaml
favicon: /assets/img/favicon.png
```

Replace `assets/img/favicon.png` with your icon file (SVG recommended for sharpness).

---

## 8. Deployment

Push to `main` — GitHub Actions builds and deploys automatically (~1–2 min):

```bash
git add <files>
git commit -m "update: ..."
git push
```
