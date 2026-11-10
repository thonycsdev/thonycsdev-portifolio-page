import type { PipelineStep } from "./types";

// Copy for the "Why me" bento.
export const stackLayers = ["React", ".NET API", "Azure SQL"];

export const pipeline: PipelineStep[] = [
  { command: "git push", result: "CI/CD: 15 min → 2.5 min" },
  { command: "./setup.sh", result: "onboarding: 20 min → 1 min" },
];

export const quotes = {
  endToEnd: "End to end.",
  microservices: "1 monolith. 5 microservices.",
  nextChallenge: "Ready for the next challenge.",
  scale: "100k users on AWS.",
};
