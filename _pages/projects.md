---
layout: page
title: projects
permalink: /projects/
description: Research projects and side projects.
display_header: false
nav: true
nav_order: 3
---

## Research Projects

<div class="research-projects">
{%- assign research_projects = site.projects | where: "category", "research" | sort: "importance" | sort: "year" | reverse -%}
{%- for project in research_projects -%}
{% include research_project.liquid %}
{%- endfor -%}
</div>

<hr class="section-divider">

## Side Projects

<div class="projects">
<div class="container">
<div class="row row-cols-1 row-cols-md-3">
{%- assign side_projects = site.projects | where: "category", "fun" | sort: "year" | reverse -%}
{%- for project in side_projects -%}
{% include side_project_card.liquid %}
{%- endfor -%}
</div>
</div>
</div>
