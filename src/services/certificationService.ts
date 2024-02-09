import { th } from "@faker-js/faker";
import { Certificate } from "../../infra/data/skills";
import ICertificateRepository from "../../infra/repositories/interfaces/ICertificateRepository";
import { ICertificationServices } from "./interfaces/ICertificationServices";

export default class CertificationService implements ICertificationServices {
  constructor(
    private readonly certificationRepository: ICertificateRepository
  ) {}
  async getCertifications(): Promise<Certificate[]> {
    var result = await this.certificationRepository.getCertificates();
    result.sort((a, b) => b.hours - a.hours);
    return result;
  }
  async getCertificationById(id: number): Promise<Certificate> {
    var result = await this.certificationRepository.getCertificateById(id);
    if (!result) throw new Error("Certificate not found");
    return result;
  }
}
