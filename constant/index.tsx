export const PROFILE = {
  name: "Chaima Mekhloufi",
  title: "AI & Data Science Engineer",
  tagline: "LLM · RAG · Docker · Kubernetes · Linux",
  email: "chaima.mekhloufi@ensia.edu.dz",
  github: "https://github.com/chaima-m",
  linkedin: "https://www.linkedin.com/in/chaima-mekhloufi-1b2007299/",
  location: "Batna, Algeria",
  cv: "/Chaima_Mekhloufi_CV.pdf", // put your CV PDF in /public with this exact name
};

export const Social_Icons = [
  { link: PROFILE.github, image: "/Github.svg", alt: "Chaima Mekhloufi - GitHub" },
  { link: PROFILE.linkedin, image: "/LinkedIn.svg", alt: "Chaima Mekhloufi - LinkedIn" },
];

export const EXPERIENCES = [
  {
    role: "AI Developer, Incubatee",
    company: "Algeria Telecom Incubator",
    place: "Algiers",
    date: "2026",
    points: [
      "Designing a privacy-preserving browser extension powered by a local LLM that stops confidential enterprise data from reaching external AI services.",
      "Architecting an on-device inference pipeline: model quantization, prompt sanitization and context-aware filtering for zero data leakage.",
      "Evaluating efficient local LLM deployment strategies under strict resource constraints.",
    ],
    tags: ["Local LLM", "Quantization", "Browser Extension", "Privacy"],
  },
  {
    role: "Artificial Intelligence Intern",
    company: "GEAT",
    place: "Batna, Algeria",
    date: "Sep 2025",
    points: [
      "Designed and deployed a local RAG-based assistant automating Quality Management System (QMS) documentation.",
      "Built a semantic search engine over internal documents using FAISS and LangChain.",
      "Integrated and fine-tuned a local LLM adapted to on-premise deployment constraints.",
    ],
    tags: ["RAG", "FAISS", "LangChain", "On-premise LLM"],
  },
  {
    role: "Data Science & AI Intern",
    company: "CDTA (Advanced Technologies Development Center)",
    place: "Algiers",
    date: "Jun – Jul 2025",
    points: [
      "Processed large-scale 3D point-cloud datasets; applied DBSCAN and K-Means for structure segmentation and classification.",
      "Developed 3D visualization pipelines that directly supported technical decision-making.",
    ],
    tags: ["DBSCAN", "K-Means", "Point Clouds", "Python"],
  },
];

export type Project = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  github?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    title: "Enterprise Document Management System",
    date: "2025 – 2026",
    description:
      "Company DMS built as containerized microservices (auth, documents, comments, API gateway, ESB orchestration, translation) with a React/Vite UI. Orchestrated on Kubernetes with Ingress, ConfigMaps/Secrets, persistent volumes, health probes, rolling updates, autoscaling and RBAC.",
    tags: ["Docker", "Kubernetes", "Spring Boot", "React", "Microservices", "CI/CD"],
    github: "https://github.com/chaima-m/DMS",
    featured: true,
  },
  {
    title: "Smart Front-Office RAG Assistant",
    date: "2025 · Forsa Hackathon, Algérie Télécom",
    description:
      "Bilingual (French/Arabic) RAG assistant answering agents' questions on offers, partner agreements and procedures, with source tracking and answers in under 3 seconds. Includes OCR ingestion of scanned documents and a web chat UI.",
    tags: ["Python", "FastAPI", "ChromaDB", "Sentence Transformers", "Tesseract OCR"],
    github: "https://github.com/chaima-m/RAG-ChatBot",
    featured: true,
  },
  {
    title: "Data Shield",
    date: "2026",
    description:
      "Privacy layer that keeps confidential enterprise data away from external AI services using a local LLM, prompt sanitization and context-aware filtering.",
    tags: ["Python", "Local LLM", "Privacy"],
    github: "https://github.com/chaima-m/Data-Shield-",
  },
  {
    title: "Arabic Grammar AI Assistant",
    date: "2025 – 2026",
    description:
      "Fine-tuned an Arabic LLM on a curated grammar corpus for I'rab analysis, sentence correction and rule explanation, plus a RAG pipeline for dynamic rule retrieval that improves factual accuracy.",
    tags: ["Hugging Face", "LangChain", "Fine-tuning", "RAG"],
    github: "https://github.com/chaima-m/Arabic-Grammar-Bot",
  },
  {
    title: "E-Commerce Dynamic Pricing with RL",
    date: "2026",
    description:
      "Deep Q-Network for pricing optimization in simulated markets, with MAML for fast adaptation to new product contexts.",
    tags: ["PyTorch", "DQN", "MAML", "Reinforcement Learning"],
    github: "https://github.com/chaima-m/Dynamic-pricing-RL",
  },
  {
    title: "EEG Signal Classification (BCI)",
    date: "2025",
    description:
      "CNN and LSTM pipelines for robust classification of EEG signals for brain-computer interfaces.",
    tags: ["TensorFlow", "Keras", "MNE", "CNN", "LSTM"],
  },
];

export const SKILLS = [
  { group: "AI / ML", items: ["LLM Fine-tuning", "RAG", "NLP", "Deep Learning", "Reinforcement Learning"] },
  { group: "Frameworks", items: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "Scikit-learn"] },
  { group: "DevOps & Linux", items: ["Docker", "Kubernetes", "CI/CD", "Linux (Ubuntu)", "Git"] },
  { group: "Languages & Web", items: ["Python", "Java", "JavaScript", "FastAPI", "Spring Boot", "React"] },
];

export const HIGHLIGHTS = [
  { value: "< 3 s", label: "answers from the bilingual RAG assistant" },
  { value: "RAG", label: "Assistants built at GEAT and Algérie Télécom, in French and Arabic" },
  { value: "Kubernetes", label: "Microservice platform with autoscaling, RBAC and rolling updates" },
];

export const OTHER_WORK = [
  "Timetable optimization with genetic algorithms and CSP (ENSIA)",
  "K-Means / hierarchical clustering for academic orientation",
  "ARIMA sales forecasting in R",
  "React.js / Tailwind freelance-platform frontend",
];
