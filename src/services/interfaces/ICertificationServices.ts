import { Certifications } from "@/data/skills";

export interface ICertificationServices {
  getCertification: () => Promise<Certifications>;
}
