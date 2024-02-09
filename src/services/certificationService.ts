import { Certifications } from "../../infra/data/skills";
import ICertificateRepository from "../../infra/repositories/interfaces/ICertificateRepository";
import { ICertificationServices } from "./interfaces/ICertificationServices";

export default class CertificationService implements ICertificationServices {
  constructor(
    private readonly certificationRepository: ICertificateRepository
  ) {}
  async getCertifications(): Promise<Certifications[]> {
    var result = await this.certificationRepository.getCertificates();
    result.sort((a, b) => b.hours - a.hours);
    return result;
  }
  getCertificationById(id: string): Promise<Certifications> {
    throw new Error("Method not implemented.");
  }
}
