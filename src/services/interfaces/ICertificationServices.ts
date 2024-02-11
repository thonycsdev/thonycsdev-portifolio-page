import { Certificate } from "@/models/certificate";

export interface ICertificationServices {
  getCertifications(): Promise<Certificate[]>;
  getCertificationById(id: number): Promise<Certificate>;
  insertCertification(certification: Certificate): void;
}
