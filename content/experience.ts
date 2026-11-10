import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Insight Global",
    client: "ABS",
    period: "2026 — present",
    summary: "Modernizing legacy systems with .NET 8, React and Azure. Cut developer onboarding from 20 min to 1 min.",
    accent: "green",
  },
  {
    role: "Lead Software Developer",
    company: "ClickPlanos",
    period: "2025 — 2026",
    summary: "Monolith to 5 microservices, AWS infrastructure as code for 100k users, CI/CD from 15 min to 2.5 min.",
    accent: "orange",
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "2024 — 2025",
    summary: "Built Kivo, a free CRM in TypeScript/Node.js, publicly available on GitHub.",
    accent: "blue",
    freelance: true,
  },
  {
    role: "Software Developer",
    company: "DOMVS IT",
    client: "BTG Pactual",
    period: "2024",
    summary: "Payroll-deducted loan integration in .NET 6 with DynamoDB, SQS and SNS.",
    accent: "pink",
  },
  {
    role: "Full Stack Developer",
    company: "Ímpar",
    period: "2022 — 2023",
    summary: "APIs for TIM Brasil and a full stack system for Vale Brasil, including a 1 TB data migration.",
    accent: "purple",
  },
  {
    role: "Full Stack Developer",
    company: "ENT & freelance",
    period: "2021 — 2022",
    summary: "C#/.NET + React, plus PostgreSQL desktop systems for small businesses.",
    accent: "yellow",
    freelance: true,
  },
];

export const employers = experiences.filter((e) => !e.freelance).map((e) => e.company);
