import { Education } from "@/models/education";

export interface IEducationServices {
  getEducations(): Promise<Education[]>;
  getEducationById(id: number): Promise<Education>;
}
