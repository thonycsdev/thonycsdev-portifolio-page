import { Experience } from "../../../infra/data/skills";

export interface IExperienceServices {
  getExperiences(): Promise<Experience[]>;
  getExperienceById(id: number): Promise<Experience>;
  insertExperience(input: Experience): Promise<Experience>;
}
