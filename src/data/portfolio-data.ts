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
} from "@/types/portfolio";

// ===== Portfolio Data =====

export const personalInfo: PersonalInfo = {
  name: "Afiq Danial",
  title: "DEVELOPER",
  location: { city: "Ipoh, Perak", country: "Malaysia" },
  website: "https://resume.wnfiq.site",
  email: "wanafiq.d03@gmail.com",
  phone: "347-555-0192",
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

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: "React, Next.js, Tailwind CSS, TypeScript, HTML, CSS",
  },
  {
    category: "Backend Development",
    skills: "Node.js, Express, MySQL, PostgreSQL, Supabase, Docker, Azure, PLESK Hosting, WordPress",
  },
  {
    category: "Tools & Technologies",
    skills: "Tan-Stack Query, Git, GitHub, VSCode, Figma, Cursor, OpenRouter, Cursor API",
  },
];
