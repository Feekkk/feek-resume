/**
 * Portfolio Data
 * Single source of truth for all portfolio content
 */

import type {
  PersonalInfo,
  Experience,
  Education,
  Language,
  SkillCategory,
  Project,
} from "@/types/portfolio";

// ===== Portfolio Data =====

export const personalInfo: PersonalInfo = {
  name: "Afiq Danial",
  title: "DEVELOPER",
  location: { city: "Ipoh, Perak", country: "Malaysia" },
  website: "https://resume.wnfiq.site",
  email: "wanafiq.d03@gmail.com",
  phone: "347-555-0192",
  github: "https://github.com/Feekkk",
  avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
  bio: "I'm a full stack developer with a passion for building web applications that are both functional and aesthetically pleasing. I'm currently working as a full stack developer at a Universiti Kuala Lumpur RCMP. I'm also a freelance developer and I'm available for collaboration.",
  skills: "React, Next.js, Tailwind CSS, TypeScript, Node.js, Tan-Stack Query, MySQL, Docker, Azure, PLESK Hosting, WordPress",
};

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Universiti Teknologi MARA (UiTM)",
    role: "Full Time Student",
    location: "Jasin, Melaka",
    startDate: "2023-01",
      endDate: "2025-12",
      description: "I'm a full time student at Universiti Teknologi MARA (UiTM) in Jasin, Melaka. I'm studying Bachelor of Computer Science (Hons) Netcentric Computing. Most of the side projects and knowledge I've gained are from my university days.",
    current: false,
  },
  {
    id: "exp-2",
    company: "Universiti Kuala Lumpur RCMP",
    role: "Internship",
    location: "Ipoh, Perak",
    startDate: "2025-8",
    endDate: "2025-12",
    description: "I'm an internship at Universiti Kuala Lumpur RCMP in Ipoh, Perak. I'm working for two big projects during my internship which are Nexcheck Inventory Management System (NIMS) and University Financial Aids System (UniFA). Im also responsible to manage the PLESK Web Services for the university.",
    current: false,
  },
  {
    id: "exp-3",
    company: "Universiti Kuala Lumpur RCMP",
    role: "Full Stack Developer",
    location: "Ipoh, Perak",
    startDate: "2026-3",
    endDate: null,
    description: "I'm a full stack developer at Universiti Kuala Lumpur RCMP in Ipoh, Perak. Im working on several projects and websites for the university. You may find some of my latests projects in my Projects section.",
    current: true,
  },
  {
    id: "exp-4",
    company: "Remote",
    role: "Freelance Developer",
    location: "Remote",
    startDate: "2026-3",
    endDate: null,
    description: "I'm also a freelance developer and I'm available for collaboration. For now, I'm working on research and project development on AI-based projects, RAG, and LLM-based projects.",
    current: true,
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "Sekolah Berasrama Penuh Integrasi Gopeng",
    degree: "Sijil Pelajaran Malaysia",
    field: "Science Pure",
    startYear: "2016",
    endYear: "2019",
    location: "Gopeng, Perak",
  },
  {
    id: "edu-2",
    institution: "Matrikulasi Perak",
    degree: "Computer Science",
    field: "Computer Science",
    startYear: "2020",
    endYear: "2022",
    location: "Gopeng, Perak",
  },
  {
    id: "edu-3",
    institution: "Universiti Teknologi MARA",
    degree: "Bachelor of Computer Science (Hons) Netcentric Computing",
    field: "Netcentric Computing",
    startYear: "2023",
    endYear: "2025",
    location: "Jasin, Melaka",
  },
];

export const languages: Language[] = [
  { language: "Bahasa Melayu", proficiency: "Native" },
  { language: "English", proficiency: "Fluent" },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    slug: "nims",
    name: "NIMS",
    fullName: "Nexcheck Inventory Management System",
    description: "Inventory operations for UniKL RCMP clinics and stores.",
    overview:
      "NIMS tracks stock, requisitions, and issuance across UniKL RCMP units so clinical stores stay accurate without spreadsheet handoffs. The system covers item catalogs, location-level quantities, and approval flow for restocking.",
    role: "Full Stack",
    year: "2025",
    org: "UniKL RCMP",
    highlights: [
      "Centralized inventory records for multiple campus stores",
      "Role-based issuance and restock approvals",
      "Operational reporting for stock movement",
    ],
    techStack: ["React", "Node.js", "MySQL", "Express"],
    status: "active",
  },
  {
    id: "proj-2",
    slug: "unifa",
    name: "UniFA",
    fullName: "University Financial Aids System",
    description: "Aid applications, review, and disbursement for students.",
    overview:
      "UniFA replaces fragmented aid paperwork with a single path from application to review. Officers can assess eligibility, attach documents, and follow disbursement status without chasing email threads.",
    role: "Full Stack",
    year: "2025",
    org: "UniKL RCMP",
    highlights: [
      "Student application intake with document upload",
      "Officer review queues and status updates",
      "Aid cycle tracking for campus finance teams",
    ],
    techStack: ["React", "Express", "MySQL", "TanStack Query"],
    status: "active",
  },
  {
    id: "proj-3",
    slug: "unikl-web",
    name: "UniKL Web",
    fullName: "UniKL RCMP Web Services",
    description: "Campus sites, hosting, and PLESK operations.",
    overview:
      "A set of university websites and hosting operations on PLESK, covering public pages, departmental sites, and the day-to-day work of keeping services online, patched, and reachable.",
    role: "Web & Hosting",
    year: "2025–2026",
    org: "UniKL RCMP",
    highlights: [
      "PLESK hosting for campus web properties",
      "WordPress sites for university communication",
      "Azure-backed services where the campus stack required it",
    ],
    techStack: ["WordPress", "PLESK", "Azure", "Docker"],
    status: "active",
  },
  {
    id: "proj-4",
    slug: "rag-lab",
    name: "RAG Lab",
    fullName: "RAG & LLM Research",
    description: "Freelance retrieval-augmented generation experiments.",
    overview:
      "A freelance research track on RAG pipelines and LLM tooling: chunking, retrieval quality, and how to wire models through OpenRouter without baking a single vendor into the product.",
    role: "Research & Build",
    year: "2026",
    org: "Freelance",
    highlights: [
      "Prototype RAG flows for document Q&A",
      "Model routing through OpenRouter",
      "Evaluation notes on retrieval vs. raw prompting",
    ],
    techStack: ["TypeScript", "OpenRouter", "Node.js"],
    status: "active",
  },
  {
    id: "proj-5",
    slug: "rcmp-intranet",
    name: "RCMP Intranet",
    fullName: "Internal Campus Tools",
    description: "Internal pages and tools used by campus staff.",
    overview:
      "Smaller internal tools and intranet pages for UniKL RCMP staff: notices, forms, and operational pages that sit beside the larger NIMS and UniFA systems.",
    role: "Full Stack",
    year: "2026",
    org: "UniKL RCMP",
    highlights: [
      "Staff-facing pages for campus operations",
      "Shared UI patterns with other RCMP systems",
      "Hosted alongside existing PLESK services",
    ],
    techStack: ["React", "Node.js", "MySQL"],
    status: "active",
  },
  {
    id: "proj-6",
    slug: "netcentric-studio",
    name: "Netcentric Studio",
    fullName: "UiTM Coursework & Side Builds",
    description: "Course and side projects from Netcentric Computing.",
    overview:
      "A collection of coursework and side builds from the Bachelor of Computer Science (Hons) Netcentric Computing programme at UiTM Jasin — APIs, client apps, and experiments that shaped how I ship web work.",
    role: "Student Developer",
    year: "2023–2025",
    org: "UiTM Jasin",
    highlights: [
      "Client–server coursework across the degree",
      "Practice with REST APIs and modern frontends",
      "Foundation for later production systems at UniKL",
    ],
    techStack: ["React", "TypeScript", "Node.js", "Git"],
    status: "archived",
  },
  {
    id: "proj-7",
    slug: "freelance-sites",
    name: "Freelance Sites",
    fullName: "Client Websites",
    description: "Commissioned sites and landing pages for clients.",
    overview:
      "Freelance web work for clients who needed a clear public site: layout, content structure, and a stack that is cheap to host and easy to hand over.",
    role: "Freelance Developer",
    year: "2026",
    org: "Remote",
    highlights: [
      "Landing pages with a tight content hierarchy",
      "Handover-friendly WordPress or static builds",
      "Direct client collaboration from brief to launch",
    ],
    techStack: ["Next.js", "Tailwind CSS", "WordPress"],
    status: "active",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "TypeScript", slug: "typescript" },
      { name: "HTML", slug: "html5" },
      { name: "CSS", slug: "css" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express", slug: "express" },
      { name: "MySQL", slug: "mysql" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Supabase", slug: "supabase" },
      { name: "Docker", slug: "docker" },
      { name: "Azure", slug: "microsoftazure" },
      { name: "PLESK", slug: "plesk" },
      { name: "WordPress", slug: "wordpress" },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "TanStack Query", slug: "reactquery" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "VS Code", slug: "visualstudiocode" },
      { name: "Figma", slug: "figma" },
      { name: "Cursor", slug: "cursor" },
      { name: "OpenRouter", slug: "openrouter" },
    ],
  },
];
