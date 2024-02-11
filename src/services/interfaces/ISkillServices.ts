import { Skill } from "../../../infra/data/skills";

export interface ISkillServices {
  getSkills(): Promise<Skill[]>;
  getSkillById(id: number): Promise<Skill>;
  insertSkill(input: Skill): Promise<Skill>;
}
