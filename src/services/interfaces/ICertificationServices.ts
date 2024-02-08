import { Certifications } from "../../../infra/data/skills";

export interface ICertificationServices {
  getCertification: () => Promise<Certifications>;
}
