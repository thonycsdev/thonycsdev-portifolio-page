import { Certificate } from "../../../infra/data/skills";

export interface ICertificationServices {
  getCertifications(): Promise<Certificate[]>;
  getCertificationById(id: number): Promise<Certificate>;
}
