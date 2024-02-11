import { Education } from "../../data/skills";

export default interface IEducationRepository {
  getEducations(): Promise<Education[]>;
  getEducationById(id: number): Promise<Education>;
  insertEducation(input: Education): Promise<Education>;
}
