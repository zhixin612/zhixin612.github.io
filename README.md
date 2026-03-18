# Homepage Maintenance Guide

Personal academic homepage built with [al-folio](https://github.com/alshedivat/al-folio).
Live site: [zhixin612.github.io/homepage](https://zhixin612.github.io/homepage)

---

## Local Development

```bash
# Install dependencies (first time only)
bundle install

# Start local server → http://localhost:4000/homepage/
bundle exec jekyll serve --livereload
```

---

## Site Configuration

**File: `_config.yml`**

| Field                      | Description                    |
| -------------------------- | ------------------------------ |
| `first_name` / `last_name` | Your name (used in page title) |
| `description`              | Meta description for SEO       |
| `url` / `baseurl`          | Deployment URL and path        |

**File: `_data/socials.yml`**

Update email, Google Scholar ID, and GitHub username:

```yaml
email: you@example.com
scholar_userid: YOUR_SCHOLAR_ID # from your Google Scholar URL
github_username: yourname
```

---

## Content Updates

### Profile Photo

Replace `assets/img/prof_pic.jpg` with your photo (keep the filename).

### Homepage (`_pages/about.md`)

The about page controls the front page layout. Edit the following sections directly in the file:

- **Subtitle** — the line under your name (affiliation, title)
- **Profile sidebar** (`more_info`) — location, institution, email, links shown below photo
- **Bio** — the introductory paragraph
- **Projects** — a short list of notable projects/tools
- **Honors & Awards** — scholarships and competition awards
- **Service** — reviewing, organizing, etc.
- **Interests** — hobbies

### Publications (`_bibliography/papers.bib`)

Add a new paper by appending a BibTeX entry. Example:

```bibtex
@inproceedings{yourkey2025,
  title    = {Your Paper Title},
  author   = {Zhao, Zhixin and Coauthor, Name},
  booktitle = {Conference Full Name},
  abbr     = {CONF},        % badge label shown in the list
  year     = {2025},
  html     = {https://link-to-paper},
  pdf      = {[CONF'25] ShortTitle.pdf},    % place file in assets/pdf/
  slides   = {[CONF'25] ShortTitle-slides.pdf},
  selected = {true},        % show on homepage; omit or set false otherwise
  note     = {<sup>†</sup><em>Equal Contribution</em>},  % optional footnote
}
```

**PDF / Slides files** → place in `assets/pdf/`. Naming convention: `[CONF'YY] SystemName.pdf`

**Equal contribution** — add `†` after the last name in the author field: `Zhao†, Zhixin`

### CV (`_data/cv.yml`)

Structured YAML. Each top-level key under `sections:` becomes a CV section. Supported section types and their fields:

```yaml
sections:
  Education:
    - institution: University Name
      area: Computer Science
      studyType: Ph.D.
      start_date: 2021
      end_date: present
      highlights:
        - "Advisor: Prof. ..."

  Experience:
    - company: Lab / Company
      position: Research Intern
      start_date: 2024-06
      end_date: 2024-09
      highlights:
        - Description of work

  Awards:
    - title: Award Name
      date: 2024
      awarder: Organization

  Publications:
    - title: Paper Title
      authors: [Zhixin Zhao]
      publisher: Conference / Journal
      releaseDate: 2025-01-01
      url: https://...
```

### Projects Page (`_projects/`)

Each `.md` file is one project card. Currently two placeholders exist:

- `1_project.md` — work category
- `4_project.md` — fun category

To add a project, copy one of the existing files and edit the front matter:

```yaml
---
layout: page
title: Your Project Title
description: One-line description
img: assets/img/your_image.jpg # optional preview image
importance: 1 # lower = shown first
category: work # work | fun
---
```

Add any preview images to `assets/img/`.

### News / Announcements

To re-enable announcements, set `announcements.enabled: true` in `_pages/about.md`,
then add entries to `_news/`. File format:

```markdown
---
layout: post
date: 2025-06-01
inline: true
---

Short announcement text here.
```

---

## Appearance

### Accent Color

**File: `_sass/_variables.scss`** — change `$purple-color`:

```scss
$purple-color: #00468c !default; // current: dark blue (R0 G70 B140)
```

### Enable / Disable Nav Pages

Each page under `_pages/` has a `nav:` field in its front matter:

```yaml
nav: true    # shown in navbar
nav: false   # hidden
```

Pages and their files:

| Page         | File                     |
| ------------ | ------------------------ |
| Publications | `_pages/publications.md` |
| CV           | `_pages/cv.md`           |
| Projects     | `_pages/projects.md`     |
| Blog         | `_pages/blog.md`         |
| Repositories | `_pages/repositories.md` |

---

## Deployment

Push to `main` branch — GitHub Actions automatically builds and deploys to GitHub Pages.

```bash
git add <files>
git commit -m "update: ..."
git push
```

The live site updates within ~1–2 minutes after push.
