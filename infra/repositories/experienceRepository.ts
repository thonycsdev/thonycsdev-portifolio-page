import IDatabase from "../data/IDatabase";
import { Experience } from "../data/skills";
import IExperienceRepository from "./interfaces/IExperienceRepository";

export default class ExperienceRepository implements IExperienceRepository {
  constructor(private readonly database: IDatabase) {}
  async getExperiences(): Promise<Experience[]> {
    var result = (await this.database.query(
      "SELECT * FROM experiences;"
    )) as Experience[];
    return result;
  }
  async getExperienceById(id: number): Promise<Experience> {
    var result = (await this.database.query(
      "SELECT * FROM experiences where id = $1;",
      [id]
    )) as Experience[];
    return result[0];
  }
  insertExperience(input: Experience): Promise<Experience> {
    throw new Error("Method not implemented.");
  }
}
