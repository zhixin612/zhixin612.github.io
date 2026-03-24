// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research projects and side projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-ai-for-science",
          title: 'AI for Science',
          description: "WIP",
          section: "Projects",handler: () => {
              window.location.href = "/projects/0-AI4S/";
            },},{id: "projects-daily-arxiv",
          title: 'Daily Arxiv',
          description: "Daily arXiv paper tracking and sharing platform for ML Systems research.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/0-daily-arxiv/";
            },},{id: "projects-twen",
          title: 'Twen',
          description: "Campus AI assistant platform powered by large language models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/0-twen/";
            },},{id: "projects-serving-systems-for-dnns-scheduling-and-resource-management",
          title: 'Serving Systems for DNNs: Scheduling and Resource Management',
          description: "**DNN serving systems face challenges in maintaining strict latency while minimizing costs in complex inference pipelines**. We optimized the end-to-end serving lifecycle through three systems: * **(1) PARD** improves goodput by **proactively dropping requests** likely to timeout using bi-directional runtime information and adaptive priorities.* **(2) Harpagon** minimizes serving costs via **batch-aware request dispatching** and multi-tuple configuration optimization to maximize throughput under latency constraints.* **(3) SLOpt** addresses inter-model dependencies and mitigates cascade blocking through **cascade workload estimation**, ensuring efficiency and SLO compliance.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DNN/";
            },},{id: "projects-memory-pooling-and-management-for-multi-llm-colocation",
          title: 'Memory Pooling and Management for Multi-LLM Colocation',
          description: "Cloud LLM serving typically deploys models on exclusive GPUs, causing memory underutilization and compute waste under bursty traffic. We design a multi-LLM colocation system with global GPU memory pooling for unified management of model weights, KV cache, and activations, combined with priority-aware scheduling and dynamic offloading to mitigate contention and improve serving throughput.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/colocation/";
            },},{id: "projects-pat-prefix-aware-attention-for-llm-decoding",
          title: 'PAT: Prefix-Aware Attention for LLM Decoding',
          description: "LLM serving systems face significant efficiency challenges during the decoding phase due to heavy KV cache reads. We introduces a prefix-aware attention mechanism that eliminates redundancies KV cache reads by reorganizing computation around intra-batch shared prefix structures, achieving substantial speedup in multi-tenant LLM serving scenarios.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pat/";
            },},{id: "projects-prediction-based-two-level-request-scheduling-for-llm-serving",
          title: 'Prediction-based Two-level Request Scheduling for LLM Serving',
          description: "The unpredictable output length of LLM requests often leads to severe load imbalance across instances and inefficient resource utilization within them. We develop a prediction-based scheduling framework that leverages a high-accuracy output length predictor to enable a two-level scheduling mechanism: cluster-level multi-dimensional load balancing and instance-level SLO-aware scheduling. This system significantly improves the throughput of large-scale LLM deployments while strictly maintaining service quality.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/predict/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%61%6F%36%31%32@%74%6A%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=DasHBG8AAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zhixin612", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
