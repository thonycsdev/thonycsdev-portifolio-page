import { Education } from "@/models/education";
import IDatabase from "../data/IDatabase";
import IEducationRepository from "./interfaces/IEducationRepository";

export default class EducationRepository implements IEducationRepository {
  constructor(private readonly database: IDatabase) {}
  async getEducations(): Promise<Education[]> {
    const result = (await this.database.query(
      "SELECT * FROM education"
    )) as Education[];
    return result;
  }
  async getEducationById(id: number): Promise<Education> {
    const result = (await this.database.query(
      "SELECT * FROM education WHERE id = $1",
      [id]
    )) as Education[];
    return result[0];
  }
  insertEducation(input: Education): Promise<Education> {
    throw new Error("Method not implemented.");
  }
}
