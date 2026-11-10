import type { AiStep } from "./types";

export const aiTools = ["Claude Code", "GitHub Copilot"];

export const aiSteps: AiStep[] = [
  { title: "Planning", summary: "I break the problem down, weigh the approaches and write the plan before the first line of code.", accent: "blue" },
  { title: "Execution", summary: "I ship with AI agents in short cycles, with tests driving every step.", accent: "orange" },
  { title: "Review", summary: "AI-assisted code review to catch bugs, security issues and room for simplification.", accent: "green" },
  { title: "Documentation", summary: "Architecture docs and delivery notes written alongside the code, not left for later.", accent: "purple" },
];
