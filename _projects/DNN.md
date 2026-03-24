---
layout: page
title: "Serving Systems for DNNs: Scheduling and Resource Management"
description: >
  **DNN serving systems face challenges in maintaining strict latency while minimizing costs in complex inference pipelines**. We optimized the end-to-end serving lifecycle through three systems: 
  
  * **(1) PARD** improves goodput by **proactively dropping requests** likely to timeout using bi-directional runtime information and adaptive priorities.
  
  * **(2) Harpagon** minimizes serving costs via **batch-aware request dispatching** and multi-tuple configuration optimization to maximize throughput under latency constraints.
  
  * **(3) SLOpt** addresses inter-model dependencies and mitigates cascade blocking through **cascade workload estimation**, ensuring efficiency and SLO compliance.
category: research
img: assets/img/project_DNN.png
importance: 2
selected: true
year: 2022
period: "2022-2025"
papers:
  - key: zhao2026pard
    label: "EuroSys 2026"
  - key: zhao2025harpagon
    label: "INFOCOM 2025"
  - key: zhao2025slopt
    label: "TC 2025"
---
