import { Skills } from "../../../infra/data/skills";

export interface ISkillServices {
  getSkills(): Promise<Skills[]>;
}
