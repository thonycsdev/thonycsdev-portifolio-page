import { Experience } from "@/data/skills";

export interface IExperienceServices {
  getExperience: () => Promise<Experience>;
}
