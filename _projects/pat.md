---
layout: page
title: "PAT: Prefix-Aware Attention for LLM Decoding"
description: >
   LLM serving systems face efficiency bottlenecks during the decoding phase due to heavy KV cache read overhead. We design **PAT (Prefix-Aware Attention)**, which eliminates redundant KV cache reads by reorganizing computation around intra-batch shared prefix structures, achieving substantial speedup in multi-tenant LLM serving scenarios.
img: assets/img/project_pat.png
category: research
importance: 1
selected: true
year: 2024
period: "2024-2025"
github: https://github.com/flashserve/PAT
papers:
  - key: yi2026pat
    label: "ASPLOS 2026"
---
