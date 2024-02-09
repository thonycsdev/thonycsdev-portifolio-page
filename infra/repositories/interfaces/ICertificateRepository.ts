import { Certifications } from "../../data/skills";

export default interface ICertificateRepository {
  getCertificates(): Promise<Certifications[]>;
  getCertificateById(id: number): Promise<Certifications>;
  insertCertificate(input: Certifications): Promise<Certifications>;
}
