import IDatabase from "../data/IDatabase";
import { Certifications } from "../data/skills";
import ICertificateRepository from "./interfaces/ICertificateRepository";

export default class CertificateRepository implements ICertificateRepository {
  constructor(private readonly database: IDatabase) {}
  async insertCertificate(input: Certifications): Promise<Certifications> {
    await this.database.query(
      "INSERT INTO certificates (name, date_started_and_completion, hours, url) VALUES ($1, $2, $3, $4) RETURNING *",
      [input.name, input.date_started_and_completion, input.hours, input.url]
    );
    return input;
  }
  async getCertificateById(id: number): Promise<Certifications> {
    var result = await this.database.query(
      "SELECT * FROM certificates WHERE id = $1",
      [id]
    );
    var cert = result as any[0][0];
    return cert as Certifications;
  }
  async getCertificates(): Promise<Certifications[]> {
    var result = await this.database.query("SELECT * FROM certificates");
    return result as Certifications[];
  }
}
