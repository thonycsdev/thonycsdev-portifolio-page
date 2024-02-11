import { Experience } from "@/models/experience";
import IExperienceRepository from "../../infra/repositories/interfaces/IExperienceRepository";
import { IExperienceServices } from "./interfaces/IExperienceServices";

export default class ExperienceService implements IExperienceServices {
  constructor(private readonly experienceRepository: IExperienceRepository) {}
  async getExperiences(): Promise<Experience[]> {
    const result = await this.experienceRepository.getExperiences();
    return result;
  }
  async getExperienceById(id: number): Promise<Experience> {
    const result = await this.experienceRepository.getExperienceById(id);
    return result;
  }
  insertExperience(input: Experience): Promise<Experience> {
    throw new Error("Method not implemented.");
  }
}
