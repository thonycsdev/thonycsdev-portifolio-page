import { Certificate } from "../../data/skills";

export default interface ICertificateRepository {
  getCertificates(): Promise<Certificate[]>;
  getCertificateById(id: number): Promise<Certificate>;
  insertCertificate(input: Certificate): Promise<Certificate>;
}
