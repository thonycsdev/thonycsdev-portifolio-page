import { Education } from "@/models/education";
import IEducationRepository from "../../infra/repositories/interfaces/IEducationRepository";
import { IEducationServices } from "./interfaces/IEducationServices";

export default class EducationService implements IEducationServices {
  constructor(private readonly educationRepository: IEducationRepository) {}
  async getEducations(): Promise<Education[]> {
    const result = await this.educationRepository.getEducations();
    return result;
  }
  async getEducationById(id: number): Promise<Education> {
    const result = await this.educationRepository.getEducationById(id);
    return result;
  }
}
