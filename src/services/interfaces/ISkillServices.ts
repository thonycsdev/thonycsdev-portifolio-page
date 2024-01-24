import { Skills } from "@/data/skills";

export interface ISkillServices {
  getSkills(): Promise<Skills[]>;
}
