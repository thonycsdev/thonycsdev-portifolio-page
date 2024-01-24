import { DataDescription, Skills } from "@/data/skills";
import { ISkillServices } from "./interfaces/ISkillServices";
export class SkillService implements ISkillServices {
  getSkills(): Promise<DataDescription[]> {
    throw new Error("Method not implemented.");
  }
}
