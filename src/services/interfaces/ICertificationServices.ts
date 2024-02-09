import { Certifications } from "../../../infra/data/skills";

export interface ICertificationServices {
  getCertifications(): Promise<Certifications[]>;
  getCertificationById(id: string): Promise<Certifications>;
}
