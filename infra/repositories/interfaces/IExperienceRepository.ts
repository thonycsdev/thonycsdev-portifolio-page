import { Experience } from "../../data/skills";

export default interface IExperienceRepository {
  getExperiences(): Promise<Experience[]>;
  getExperienceById(id: number): Promise<Experience>;
  insertExperience(input: Experience): Promise<Experience>;
}
