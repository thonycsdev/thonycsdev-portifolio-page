// Every accent maps to a `.bg-<accent>` utility in app/globals.css.
export type Accent = "green" | "orange" | "blue" | "pink" | "purple" | "yellow";

export type NavLink = { label: string; href: string };

export type Experience = {
  role: string;
  company: string;
  client?: string;
  period: string;
  summary: string;
  accent: Accent;
  freelance?: boolean;
};

export type Project = {
  name: string;
  summary: string;
  stack: string[];
  accent: Accent;
  url: string;
};

export type AiStep = { title: string; summary: string; accent: Accent };

export type PipelineStep = { command: string; result: string };
