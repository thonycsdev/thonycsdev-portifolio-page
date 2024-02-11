import { Education } from "../../../infra/data/skills";

export interface IEducationServices {
  getEducations(): Promise<Education[]>;
  getEducationById(id: number): Promise<Education>;
}
