import { Experience } from "../../../infra/data/skills";

export interface IExperienceServices {
  getExperience: () => Promise<Experience>;
}
